import * as THREE from "three";
import {
  ARENA,
  FACTS,
  PLAYER,
  PROJECTILE,
  QUALITY_ORDER,
  QUALITY_PRESETS,
  RULES,
  WAVE_INTROS,
} from "./config.js";
import { Environment } from "./Environment.js";
import { smoothstep } from "./terrain.js";
import { NETPool } from "./NETProjectile.js";
import { PlayerNeutrophil } from "./PlayerNeutrophil.js";
import { TargetFactory } from "./Targets.js";
import { UI } from "./UI.js";
import { Input } from "./Input.js";
import { AudioFX } from "./Audio.js";
import { PostFX } from "./PostFX.js";
import { NetResidue, ParticleSystem, RingPool } from "./Effects.js";
import { createChevronTexture, createNetTexture, createRingTexture, createSoftDotTexture } from "./textures.js";
import { load, save } from "./storage.js";

const CAMERA_OFFSET = new THREE.Vector3(0, 16, 21);
const KEY_LIGHT_OFFSET = new THREE.Vector3(-14, 26, 12);
const UP = new THREE.Vector3(0, 1, 0);
const CARTILAGE_POINT = new THREE.Vector3(0, 1.3, 0);

const tmpMove = new THREE.Vector2();
const tmpAim = new THREE.Vector3();
const tmpVec = new THREE.Vector3();
const tmpVec2 = new THREE.Vector3();
const tmpNdc = new THREE.Vector2();
const tmpScreen = { x: 0, y: 0, visible: false };

function comboMultiplier(combo) {
  return 1 + Math.min(3, Math.floor(Math.max(0, combo - 1) / 4) * 0.5);
}

export class GameScene {
  constructor(host) {
    this.host = host;
    const params = new URLSearchParams(window.location.search);
    this.debug = params.has("debug");
    this.settings = {
      quality: load("quality", "auto"),
      sound: load("sound", true),
      shake: load("shake", true),
    };
    if (!["auto", ...QUALITY_ORDER].includes(this.settings.quality)) this.settings.quality = "auto";
    const forcedQuality = params.get("quality");
    this.forcedQuality = QUALITY_ORDER.includes(forcedQuality) ? forcedQuality : null;
    this.best = load("best", 0);
    this.isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    this.renderer.toneMapping = THREE.NeutralToneMapping ?? THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    host.appendChild(this.renderer.domElement);
    this.renderer.domElement.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      this.contextLost = true;
    });
    this.renderer.domElement.addEventListener("webglcontextrestored", () => {
      this.contextLost = false;
      this.needsRender = true;
    });

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 220);
    this.camera.position.set(0, 24, 40);
    this.cameraTarget = new THREE.Vector3(0, 0, 0);
    this.raycaster = new THREE.Raycaster();
    this.aimPlane = new THREE.Plane(UP, 0);
    this.aimPoint = new THREE.Vector3();
    this.clock = new THREE.Clock();

    this.qualityName = this.resolveQuality();
    const quality = QUALITY_PRESETS[this.qualityName];

    // Shared textures.
    this.textures = {
      dot: createSoftDotTexture(64),
      ring: createRingTexture(128),
      net: createNetTexture(256, 99),
      residue: createNetTexture(128, 5),
      chevron: createChevronTexture(128),
    };

    this.environment = new Environment(this.scene, this.renderer, quality);
    this.setupLights();
    this.player = new PlayerNeutrophil({ ringTexture: this.textures.ring, chevronTexture: this.textures.chevron });
    this.scene.add(this.player.group, this.player.decals);
    this.targetFactory = new TargetFactory({ dotTexture: this.textures.dot, netTexture: this.textures.net });
    this.nets = new NETPool(this.scene, this.textures.net, this.textures.dot);
    this.particles = new ParticleSystem(this.scene, this.textures.dot, 1400);
    this.rings = new RingPool(this.scene, this.textures.ring);
    this.residue = new NetResidue(this.scene, this.textures.residue);
    this.postfx = new PostFX(this.renderer, this.scene, this.camera);
    this.audio = new AudioFX(this.settings.sound);

    this.targets = [];
    this.indicatorTargets = [];
    this.hud = {};
    this.state = "menu";
    this.lockTarget = null;
    this.aimMode = "auto";
    this.pendingTap = null;
    this.shake = 0;
    this.pulse = 0;
    this.beatTimer = 0;
    this.menuTime = 0;
    this.toastCooldown = 0;
    this.perf = { frames: 0, time: 0, warmup: 0 };
    this.needsRender = true;
    this.resetRun();

    this.ui = new UI({
      onStart: () => this.startGame(),
      onResume: () => this.resume(),
      onRestart: () => this.startGame(),
      onMenu: () => this.toMenu(),
      onPause: () => this.togglePause(),
      onToggleSound: () => this.toggleSound(),
      onToggleShake: () => {
        this.settings.shake = !this.settings.shake;
        save("shake", this.settings.shake);
      },
      onQuality: (value) => this.setQualitySetting(value),
      onFullscreen: () => this.toggleFullscreen(),
      onClick: () => {
        this.audio.unlock();
        this.audio.click();
      },
      getSettings: () => ({
        quality: this.settings.quality,
        effectiveQuality: this.qualityName,
        sound: this.settings.sound,
        shake: this.settings.shake,
        best: this.best,
        fullscreenAvailable: Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled),
        fullscreen: Boolean(document.fullscreenElement || document.webkitFullscreenElement),
      }),
    });
    this.ui.setMuted(!this.settings.sound);

    this.input = new Input({
      canvas: this.renderer.domElement,
      touch: {
        joystick: document.getElementById("joystick"),
        knob: document.getElementById("joystickKnob"),
        fire: document.getElementById("fireButton"),
        dash: document.getElementById("dashButton"),
        burst: document.getElementById("burstButton"),
      },
      onAction: (action) => this.onAction(action),
      onDeviceChange: () => this.ui.setDevice(this.input.device),
    });
    this.ui.setDevice(this.input.device);
    if (!this.isTouchDevice && window.innerWidth > 1100) this.ui.toggleLegend(true);

    this.applyQuality(this.qualityName);
    this.prewarm();
    this.bindWindowEvents();
    if (this.debug) window.__game = this;
  }

  // ---------------------------------------------------------------------
  // Setup
  // ---------------------------------------------------------------------

  setupLights() {
    this.scene.add(new THREE.HemisphereLight(0xffc2df, 0x3a0a26, 1.25));

    this.keyLight = new THREE.DirectionalLight(0xfff1f6, 2.6);
    this.keyLight.position.copy(KEY_LIGHT_OFFSET);
    const shadowCam = this.keyLight.shadow.camera;
    shadowCam.left = -26;
    shadowCam.right = 26;
    shadowCam.top = 26;
    shadowCam.bottom = -26;
    shadowCam.near = 1;
    shadowCam.far = 80;
    this.keyLight.shadow.bias = -0.0006;
    this.keyLight.shadow.normalBias = 0.035;
    this.scene.add(this.keyLight, this.keyLight.target);

    const rim = new THREE.DirectionalLight(0x8fd8ff, 0.9);
    rim.position.set(10, 12, -24);
    this.scene.add(rim);

    this.playerLight = new THREE.PointLight(0x9ff3ff, 6, 12, 2);
    this.scene.add(this.playerLight);

    const vesselGlow = new THREE.PointLight(0xff3a6e, 40, 34, 2);
    vesselGlow.position.set(0, 7, -27);
    this.scene.add(vesselGlow);
  }

  /** Compile every material up front so the first spawn doesn't hitch. */
  prewarm() {
    const warm = [];
    for (const kind of ["complex", "platelet", "debris", "cytokine", "synoviocyte", "complement"]) {
      const target = this.targetFactory.create(1, new THREE.Vector3(0, 0, -10), kind);
      target.group.scale.setScalar(1);
      this.scene.add(target.group);
      warm.push(target);
    }
    const net = this.nets.items[0];
    net.group.visible = true;
    this.particles.emit(new THREE.Vector3(), new THREE.Vector3(), { life: 0.01 });
    this.particles.update(0);
    this.rings.items[0].mesh.visible = true;
    this.residue.items[0].visible = true;
    try {
      this.renderer.compile(this.scene, this.camera);
    } catch {
      // Compilation will simply happen lazily.
    }
    for (const target of warm) this.scene.remove(target.group);
    net.group.visible = false;
    this.rings.items[0].mesh.visible = false;
    this.residue.items[0].visible = false;
    this.particles.clear();
  }

  bindWindowEvents() {
    const resize = () => this.onResize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", () => setTimeout(resize, 150));
    window.visualViewport?.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (this.state === "playing") this.pause();
        this.audio.suspend();
      } else if (this.state !== "paused") {
        this.audio.resume();
      }
    });
    window.addEventListener("blur", () => {
      if (this.state === "playing") this.pause();
    });
    const onFullscreen = () => {
      if (this.ui.screen === "settings") this.ui.show("settings");
      setTimeout(resize, 100);
    };
    document.addEventListener("fullscreenchange", onFullscreen);
    document.addEventListener("webkitfullscreenchange", onFullscreen);
    // iOS Safari pinch-zoom gestures.
    document.addEventListener("gesturestart", (event) => event.preventDefault());
    document.addEventListener("dblclick", (event) => event.preventDefault());
  }

  resolveQuality() {
    if (this.forcedQuality) return this.forcedQuality;
    if (this.settings.quality !== "auto") return this.settings.quality;
    const small = Math.min(window.screen.width, window.screen.height) < 600;
    return this.isTouchDevice || small ? "medium" : "high";
  }

  applyQuality(name) {
    const quality = QUALITY_PRESETS[name];
    this.qualityName = name;
    this.quality = quality;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.pixelRatio));
    this.keyLight.castShadow = quality.shadows;
    if (this.keyLight.shadow.mapSize.x !== quality.shadowMapSize) {
      this.keyLight.shadow.mapSize.set(quality.shadowMapSize, quality.shadowMapSize);
      if (this.keyLight.shadow.map) {
        this.keyLight.shadow.map.dispose();
        this.keyLight.shadow.map = null;
      }
    }
    this.environment.setQuality(quality);
    this.postfx.configure({ bloom: quality.bloom, msaa: quality.msaa });
    this.onResize();
  }

  setQualitySetting(value) {
    this.settings.quality = value;
    save("quality", value);
    this.forcedQuality = null;
    this.applyQuality(this.resolveQuality());
    this.perf = { frames: 0, time: 0, warmup: 0 };
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width === 0 || height === 0) return;
    this.renderer.setSize(width, height);
    const aspect = width / height;
    this.camera.aspect = aspect;
    // Narrow (portrait) screens get a wider vertical FOV so enough of the
    // arena stays visible left-to-right.
    this.camera.fov = aspect < 1 ? THREE.MathUtils.lerp(72, 56, smoothstep(0.45, 1, aspect)) : 55;
    this.camera.updateProjectionMatrix();
    this.postfx.syncSize();
    const bufferHeight = this.renderer.getDrawingBufferSize(tmpNdc).y;
    this.particles.setViewport(bufferHeight, this.camera.fov);
    this.environment.setViewport(bufferHeight, this.camera.fov);
    this.ui?.setViewport(width, height);
    this.needsRender = true;
  }

  // ---------------------------------------------------------------------
  // Run lifecycle
  // ---------------------------------------------------------------------

  resetRun() {
    for (const target of this.targets) this.scene.remove(target.group);
    this.targets.length = 0;
    this.nets.clear();
    this.particles.clear();
    this.rings.clear();
    this.residue.clear();
    this.player.reset();
    this.health = RULES.maxHealth;
    this.inflammation = RULES.startInflammation;
    this.netBurden = 0;
    this.wave = 1;
    this.cleared = 0;
    this.elapsed = 0;
    this.spawnTimer = 1.2;
    this.score = 0;
    this.combo = 0;
    this.comboTimer = 0;
    this.bestCombo = 0;
    this.shots = 0;
    this.hits = 0;
    this.engulfed = 0;
    this.escapes = 0;
    this.erosion = 0;
    this.threat = 0;
    this.burstCharge = 0;
    this.lastDamageTime = -10;
    this.lockTarget = null;
    this.pendingTap = null;
    this.shake = 0;
    this.endInfo = null;
  }

  start() {
    this.ui.show("intro");
    this.renderer.setAnimationLoop(() => this.tick());
  }

  startGame() {
    this.audio.unlock();
    this.resetRun();
    this.ui.clearWorldOverlays();
    this.ui.hideOverlay();
    this.state = "playing";
    document.body.classList.add("in-game");
    this.ui.setPlaying(true);
    this.input.releaseAll();
    this.clock.getDelta();
    this.perf = { frames: 0, time: 0, warmup: 0 };
    this.ui.showBanner("Wave 1", WAVE_INTROS[1], 3.2);
    this.audio.wave();
  }

  toMenu() {
    this.resetRun();
    this.ui.clearWorldOverlays();
    this.state = "menu";
    document.body.classList.remove("in-game");
    this.ui.setPlaying(false);
    this.audio.resume();
    this.ui.show("intro");
  }

  pause() {
    if (this.state !== "playing") return;
    this.state = "paused";
    this.input.releaseAll();
    this.ui.setPlaying(false);
    this.ui.show("pause");
    this.audio.suspend();
    this.needsRender = true;
  }

  resume() {
    if (this.state !== "paused") return;
    this.audio.unlock();
    this.ui.hideOverlay();
    this.state = "playing";
    this.ui.setPlaying(true);
    this.input.releaseAll();
    this.clock.getDelta();
  }

  togglePause() {
    if (this.state === "playing") this.pause();
    else if (this.state === "paused") {
      if (this.ui.screen === "pause") this.resume();
      else this.ui.show("pause");
    }
  }

  toggleSound() {
    this.settings.sound = !this.settings.sound;
    save("sound", this.settings.sound);
    this.audio.unlock();
    this.audio.setEnabled(this.settings.sound);
    this.ui.setMuted(!this.settings.sound);
  }

  toggleFullscreen() {
    const doc = document;
    const element = doc.documentElement;
    try {
      if (doc.fullscreenElement || doc.webkitFullscreenElement) {
        (doc.exitFullscreen || doc.webkitExitFullscreen).call(doc);
      } else {
        const request = element.requestFullscreen || element.webkitRequestFullscreen;
        const result = request?.call(element, { navigationUI: "hide" });
        if (result && typeof result.catch === "function") result.catch(() => {});
      }
    } catch {
      // Fullscreen refused (e.g. not triggered by a gesture); ignore.
    }
  }

  onAction(action) {
    switch (action) {
      case "dash":
        if (this.state === "playing") this.dash();
        break;
      case "burst":
        if (this.state === "playing") this.netBurst();
        break;
      case "pause":
        if (this.state === "playing" || this.state === "paused") this.togglePause();
        else if (this.state === "menu" && this.ui.screen && this.ui.screen !== "intro") this.ui.show("intro");
        else if (this.state === "over" && this.ui.screen === "howto") this.ui.handleAction("back");
        break;
      case "mute":
        this.toggleSound();
        break;
      case "restart":
        if (this.state === "over" || this.state === "paused") this.startGame();
        break;
      case "confirm":
        this.confirm();
        break;
      default:
        break;
    }
  }

  /** Enter / gamepad A in menus: press the focused or primary button. */
  confirm() {
    if (!this.ui.overlayOpen) return;
    const focused = document.activeElement;
    if (focused instanceof HTMLButtonElement && this.ui.el.card.contains(focused)) {
      focused.click();
      return;
    }
    const primary = this.ui.el.card.querySelector(".btn.primary");
    primary?.click();
  }

  // ---------------------------------------------------------------------
  // Frame loop
  // ---------------------------------------------------------------------

  tick() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.input.pollGamepad();
    if (this.contextLost) return;

    switch (this.state) {
      case "playing":
        this.update(dt);
        break;
      case "dying":
        this.updateDying(dt);
        break;
      case "over":
        this.updateAmbient(dt, 0.35);
        break;
      case "menu":
        this.updateMenu(dt);
        break;
      case "paused":
        if (!this.needsRender) return;
        break;
      default:
        break;
    }
    this.needsRender = false;
    this.postfx.render(dt);
  }

  updateHeartbeat(dt) {
    this.beatTimer -= dt;
    if (this.beatTimer <= 0) {
      this.beatTimer = 60 / (58 + this.inflammation * 0.7);
      this.pulse = 1;
      if (this.state === "playing") this.audio.heartbeat(this.inflammation);
    }
    this.pulse = Math.max(0, this.pulse - dt * 3.2);
  }

  environmentState() {
    return {
      inflammation: this.inflammation,
      netBurden: this.netBurden,
      erosion: this.erosion,
      threat: this.threat,
    };
  }

  updateMenu(dt) {
    this.menuTime += dt;
    this.updateHeartbeat(dt);
    this.environment.update(dt, this.environmentState(), this.pulse);
    this.player.update(dt, tmpMove.set(0, 0), tmpAim.set(Math.sin(this.menuTime * 0.4), 0, -1).normalize());
    this.particles.update(dt);
    this.updateLights();
    // Slow attract-mode orbit around the joint.
    const a = this.menuTime * 0.06 + Math.PI * 0.5;
    const desired = tmpVec.set(Math.cos(a) * 30, 21, Math.sin(a) * 30);
    this.camera.position.lerp(desired, 1 - Math.exp(-1.2 * dt));
    this.cameraTarget.lerp(tmpVec2.set(0, 0, 0), 1 - Math.exp(-2 * dt));
    this.camera.lookAt(this.cameraTarget);
  }

  updateAmbient(dt, timeScale = 1) {
    this.updateHeartbeat(dt);
    this.environment.update(dt * timeScale, this.environmentState(), this.pulse);
    this.particles.update(dt);
    this.rings.update(dt);
    this.updateCamera(dt);
    this.updateLights();
    this.ui.update(dt, this.collectHud());
    this.ui.updateWorldOverlays(dt, this.camera, { targets: [], lockTarget: null, showLock: false, cartilage: null });
  }

  updateDying(dt) {
    this.player.update(dt, tmpMove.set(0, 0), tmpAim.set(0, 0, 0));
    this.updateAmbient(dt);
    if (this.player.deathFinished() && this.endInfo) {
      const { won, title, text } = this.endInfo;
      this.finish(won, title, text);
    }
  }

  update(dt) {
    this.elapsed += dt;
    this.toastCooldown = Math.max(0, this.toastCooldown - dt);

    const move = this.input.getMove(tmpMove);
    const aim = this.computeAim(tmpAim, move);
    this.player.update(dt, move, aim);

    this.handleFiring(aim, dt);
    this.spawnTargets(dt);
    this.nets.update(dt, this.particles);
    this.resolveProjectileHits();
    this.updateTargets(dt);
    this.updateBiology(dt);
    this.updateHeartbeat(dt);

    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) this.combo = 0;
    }

    this.particles.update(dt);
    this.rings.update(dt);
    this.residue.update(this.netBurden);
    this.environment.update(dt, this.environmentState(), this.pulse);
    this.updateCamera(dt);
    this.updateLights();

    this.ui.update(dt, this.collectHud());
    this.updateIndicators(dt);
    this.checkEndConditions();
    this.trackPerformance(dt);
  }

  collectHud() {
    const hud = this.hud;
    hud.health = this.health;
    hud.inflammation = this.inflammation;
    hud.netBurden = this.netBurden;
    hud.wave = this.wave;
    hud.cleared = this.cleared;
    hud.remainingSeconds = Math.max(0, RULES.stabiliseSeconds - this.elapsed);
    hud.score = this.score;
    hud.combo = this.combo;
    hud.multiplier = comboMultiplier(this.combo);
    hud.burstCharge = this.burstCharge;
    hud.dashReady = this.player.dashReady();
    hud.threat = this.threat;
    return hud;
  }

  updateIndicators(dt) {
    const list = this.indicatorTargets;
    list.length = 0;
    for (const target of this.targets) if (target.active) list.push(target);
    list.sort((a, b) => Math.hypot(a.position.x, a.position.z) - Math.hypot(b.position.x, b.position.z));
    if (list.length > 9) list.length = 9;
    this.ui.updateWorldOverlays(dt, this.camera, {
      targets: list,
      lockTarget: this.lockTarget,
      showLock: this.aimMode === "auto" && Boolean(this.lockTarget),
      cartilage: CARTILAGE_POINT,
    });
  }

  // ---------------------------------------------------------------------
  // Aiming & firing
  // ---------------------------------------------------------------------

  computeAim(out, move) {
    const p = this.player.position;
    const pad = this.input.padAim;
    if (pad.lengthSq() > 0.09) {
      this.aimMode = "stick";
      this.lockTarget = null;
      return out.set(pad.x, 0, pad.y).normalize();
    }
    if (this.input.device === "desktop" && this.input.pointerKind === "mouse" && this.input.hasMouseAim) {
      const pointer = this.input.pointer;
      tmpNdc.set((pointer.x / window.innerWidth) * 2 - 1, -(pointer.y / window.innerHeight) * 2 + 1);
      this.raycaster.setFromCamera(tmpNdc, this.camera);
      this.aimPlane.set(UP, -(p.y + 0.6));
      if (this.raycaster.ray.intersectPlane(this.aimPlane, this.aimPoint)) {
        this.aimMode = "mouse";
        this.lockTarget = null;
        out.set(this.aimPoint.x - p.x, 0, this.aimPoint.z - p.z);
        if (out.lengthSq() < 0.25) return out.copy(this.player.facing);
        return out.normalize();
      }
    }
    // Auto-aim for touch, gamepad without right stick, and keyboard-only play.
    this.aimMode = "auto";
    const target = this.pickAutoTarget();
    this.lockTarget = target;
    if (target) return this.leadTarget(target, out);
    if (move.lengthSq() > 0.01) return out.set(move.x, 0, move.y).normalize();
    return out.copy(this.player.facing);
  }

  pickAutoTarget() {
    const p = this.player.position;
    let best = null;
    let bestScore = Infinity;
    let currentScore = Infinity;
    for (const target of this.targets) {
      if (!target.active) continue;
      const d = target.horizontalDistanceTo(p);
      if (d > 26) continue;
      const r = Math.hypot(target.position.x, target.position.z);
      let score = d;
      if (target.kind === "complement" && d < 12) score -= 7;
      score -= Math.max(0, 12 - r) * 0.6;
      if (score < bestScore) {
        bestScore = score;
        best = target;
      }
      if (target === this.lockTarget) currentScore = score;
    }
    // Hysteresis: keep the current lock unless something is clearly better.
    if (this.lockTarget && this.lockTarget.active && currentScore - bestScore < 2.5) return this.lockTarget;
    return best;
  }

  leadTarget(target, out) {
    const p = this.player.position;
    const d = target.horizontalDistanceTo(p);
    const t = d / PROJECTILE.speed;
    const speed = target.speed * target.slowed;
    out.set(
      target.position.x + target.heading.x * speed * t - p.x,
      0,
      target.position.z + target.heading.z * speed * t - p.z,
    );
    if (out.lengthSq() < 1e-4) return out.copy(this.player.facing);
    return out.normalize();
  }

  handleFiring(aim, dt) {
    const taps = this.input.consumeTaps();
    if (taps) this.pendingTap = { ...taps[taps.length - 1], age: 0 };
    if (this.pendingTap) {
      this.pendingTap.age += dt;
      if (this.player.canFire()) {
        const dir = this.aimFromTap(this.pendingTap, tmpVec);
        this.pendingTap = null;
        if (dir) this.fireNET(dir);
        return;
      }
      if (this.pendingTap.age > 0.3) this.pendingTap = null;
    }
    if (this.input.firing && this.player.canFire()) this.fireNET(aim);
  }

  /** Taps aim at the nearest target to the finger, else at the tapped spot. */
  aimFromTap(tap, out) {
    const p = this.player.position;
    let nearest = null;
    let nearestDistance = 110;
    for (const target of this.targets) {
      if (!target.active) continue;
      this.ui.toScreen(target.position, this.camera, tmpScreen);
      if (!tmpScreen.visible) continue;
      const d = Math.hypot(tmpScreen.x - tap.x, tmpScreen.y - tap.y);
      if (d < nearestDistance) {
        nearestDistance = d;
        nearest = target;
      }
    }
    if (nearest) {
      this.lockTarget = nearest;
      return this.leadTarget(nearest, out);
    }
    tmpNdc.set((tap.x / window.innerWidth) * 2 - 1, -(tap.y / window.innerHeight) * 2 + 1);
    this.raycaster.setFromCamera(tmpNdc, this.camera);
    this.aimPlane.set(UP, -(p.y + 0.6));
    if (!this.raycaster.ray.intersectPlane(this.aimPlane, tmpVec2)) return null;
    out.set(tmpVec2.x - p.x, 0, tmpVec2.z - p.z);
    if (out.lengthSq() < 0.25) return null;
    return out.normalize();
  }

  muzzleFor(direction, out) {
    const p = this.player.position;
    return out.set(p.x + direction.x * 1.7, p.y + 0.4, p.z + direction.z * 1.7);
  }

  fireNET(direction) {
    if (!this.player.canFire()) return false;
    const origin = this.muzzleFor(direction, tmpVec2);
    const net = this.nets.fire(origin, direction);
    if (!net) return false;
    net.fromBurst = false;
    this.player.facing.copy(direction);
    this.player.markFired();
    this.shots += 1;
    this.netBurden = Math.min(RULES.maxNetBurden, this.netBurden + RULES.netShotCost);
    this.particles.burst(origin, { count: 6, color: 0xbffcff, speed: 3, size: 0.4, life: 0.3, gravity: 0 });
    this.audio.fire();
    return true;
  }

  dash() {
    if (!this.player.tryDash(this.input.getMove(tmpMove))) return;
    this.audio.dash();
    this.rings.spawn(this.player.position, { color: 0x8ff3ff, from: 1, to: 4, life: 0.35, opacity: 0.7 });
    this.particles.burst(this.player.position, { count: 14, color: 0xbffcff, speed: 5, size: 0.5, life: 0.4, gravity: 0 });
  }

  netBurst() {
    if (this.burstCharge < 1) {
      if (this.toastCooldown <= 0) {
        this.ui.showToast(`NET burst charging — ${Math.round(this.burstCharge * 100)}%`);
        this.toastCooldown = 1.5;
      }
      return;
    }
    this.burstCharge = 0;
    this.netBurden = Math.min(RULES.maxNetBurden, this.netBurden + RULES.burstCost);
    const p = this.player.position;
    for (let i = 0; i < RULES.burstProjectiles; i += 1) {
      const a = (i / RULES.burstProjectiles) * Math.PI * 2;
      const dir = tmpVec.set(Math.cos(a), 0, Math.sin(a));
      const origin = this.muzzleFor(dir, tmpVec2);
      const net = this.nets.fire(origin, dir, { speed: PROJECTILE.burstSpeed, life: PROJECTILE.burstLife });
      if (net) net.fromBurst = true;
    }
    this.rings.spawn(p, { color: 0xbffcff, from: 1, to: 14, life: 0.7, opacity: 1 });
    this.particles.burst(p, { count: 60, color: 0x9ff8ff, speed: 14, size: 0.7, life: 0.8, spread: 0.4, gravity: 0 });
    this.addShake(0.55);
    this.audio.burst();
    this.ui.floater(tmpVec.copy(p).setY(p.y + 2), "NET burst!", "combo");
  }

  addShake(amount) {
    if (!this.settings.shake) return;
    this.shake = Math.min(1.2, this.shake + amount);
  }

  // ---------------------------------------------------------------------
  // Targets
  // ---------------------------------------------------------------------

  pickSpawnPoint() {
    const points = this.environment.spawnPoints;
    const p = this.player.position;
    let best = points[0];
    let bestDistance = -1;
    for (let i = 0; i < 3; i += 1) {
      const candidate = points[Math.floor(Math.random() * points.length)];
      const d = Math.hypot(candidate.x - p.x, candidate.z - p.z);
      if (d > bestDistance) {
        bestDistance = d;
        best = candidate;
      }
    }
    return best;
  }

  spawnTargets(dt) {
    this.spawnTimer -= dt;
    if (this.spawnTimer > 0) return;
    this.spawnTimer = Math.max(2.2, 5.3 - this.wave * 0.28);
    let active = 0;
    for (const target of this.targets) if (target.active) active += 1;
    const cap = Math.min(26, 14 + this.wave * 2);
    const count = Math.min(2 + Math.floor(this.wave / 2), 6, cap - active);
    for (let i = 0; i < count; i += 1) {
      const point = this.pickSpawnPoint();
      const target = this.targetFactory.create(this.wave, point);
      this.targets.push(target);
      this.scene.add(target.group);
      this.rings.spawn(target.position, { color: target.def.glow, from: 0.4, to: 2.8, life: 0.7, opacity: 0.8 });
      this.particles.burst(tmpVec.copy(target.position).setY(target.position.y + 0.8), {
        count: 10,
        color: target.def.glow,
        speed: 3,
        size: 0.45,
        life: 0.6,
        upward: 1,
        gravity: 0,
      });
    }
  }

  resolveProjectileHits() {
    for (const net of this.nets.items) {
      if (!net.active || net.target) continue;
      const np = net.group.position;
      for (const target of this.targets) {
        if (!target.active) continue;
        const tp = target.position;
        const reach = target.radius + net.radius;
        const dx = np.x - tp.x;
        const dz = np.z - tp.z;
        if (dx * dx + dz * dz > reach * reach) continue;
        if (Math.abs(np.y - tp.y) > PROJECTILE.verticalReach) continue;
        const result = target.hit();
        if (!net.fromBurst) this.hits += 1;
        if (result === "captured") {
          net.wrap(target);
          this.onCaptured(target, "net");
        } else if (result === "damaged") {
          net.deactivate();
          this.particles.burst(tp, { count: 14, color: 0xd9fbff, speed: 5, size: 0.45, life: 0.45 });
          this.ui.floater(tmpVec.copy(tp).setY(tp.y + 1.2), `NET ${target.def.hp - target.hp}/${target.def.hp}`, "good");
          this.audio.hitTough();
        }
        break;
      }
    }
  }

  onCaptured(target, method) {
    const def = target.def;
    this.cleared += 1;
    this.combo = this.comboTimer > 0 ? this.combo + 1 : 1;
    this.comboTimer = RULES.comboWindow;
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    const multiplier = comboMultiplier(this.combo);
    const waveBonus = 1 + (this.wave - 1) * 0.1;
    const points = Math.round(def.points * multiplier * waveBonus * (method === "engulf" ? 0.85 : 1));
    this.score += points;
    this.inflammation = Math.max(0, this.inflammation - def.relief);
    this.burstCharge = Math.min(1, this.burstCharge + RULES.burstChargePerClear);

    const tp = target.position;
    if (method === "net") {
      if (target.kind === "platelet") {
        // NET–platelet microthrombi are thrombo-inflammatory: extra burden.
        this.netBurden = Math.min(RULES.maxNetBurden, this.netBurden + 2);
      } else if (target.kind === "debris") {
        // NET–debris complexes expose more citrullinated autoantigen.
        this.netBurden = Math.min(RULES.maxNetBurden, this.netBurden + 1);
      } else if (target.kind === "synoviocyte") {
        // FLS internalise NET components and present citrullinated peptides.
        this.netBurden = Math.min(RULES.maxNetBurden, this.netBurden + 1.5);
      } else {
        this.netBurden = Math.max(0, this.netBurden - RULES.netHitRelief);
      }
      this.residue.add(tp, 2.4 + target.radius);
      this.ui.floater(tmpVec.copy(tp).setY(tp.y + 1.2), `+${points}`, "good");
    } else {
      this.ui.floater(tmpVec.copy(tp).setY(tp.y + 1.4), `Engulfed +${points}`, "engulf");
    }
    if (this.combo > 1 && this.combo % 4 === 1) {
      this.ui.floater(tmpVec.copy(tp).setY(tp.y + 2.6), `Combo ×${multiplier.toFixed(1)}`, "combo");
    }

    this.particles.burst(tp, { count: 26, color: def.glow, speed: 7, size: 0.55, life: 0.7 });
    this.rings.spawn(tp, { color: def.glow, from: 0.5, to: 3.4, life: 0.5, opacity: 0.8 });
    this.audio.capture(this.combo);

    if (this.cleared % RULES.clearsPerWave === 0) {
      this.wave += 1;
      this.ui.showBanner(`Wave ${this.wave}`, WAVE_INTROS[this.wave] || "Inflammation intensifies — stimuli move faster");
      this.audio.wave();
    }
  }

  updateTargets(dt) {
    const player = this.player;
    const p = player.position;
    const list = this.targets;

    // Light separation so stimuli don't stack into one blob.
    for (const target of list) target.separation.set(0, 0, 0);
    for (let i = 0; i < list.length; i += 1) {
      const a = list[i];
      if (!a.active) continue;
      for (let j = i + 1; j < list.length; j += 1) {
        const b = list[j];
        if (!b.active) continue;
        const dx = a.position.x - b.position.x;
        const dz = a.position.z - b.position.z;
        const min = (a.radius + b.radius) * 1.1;
        const d2 = dx * dx + dz * dz;
        if (d2 >= min * min || d2 < 1e-6) continue;
        const d = Math.sqrt(d2);
        const push = (1 - d / min) * 1.4;
        a.separation.x += (dx / d) * push;
        a.separation.z += (dz / d) * push;
        b.separation.x -= (dx / d) * push;
        b.separation.z -= (dz / d) * push;
      }
    }

    let threat = 0;
    for (const target of list) {
      target.update(dt, p);
      if (target.expired && !target.fizzled) {
        target.fizzled = true;
        this.particles.burst(target.position, { count: 12, color: target.def.glow, speed: 3, size: 0.4, life: 0.5 });
      }
      if (!target.active) continue;

      const def = target.def;
      const horizontal = target.horizontalDistanceTo(p);
      const vertical = Math.abs(target.position.y - p.y);

      if (target.kind === "complement") {
        if (horizontal < target.radius + 1.5 && vertical < 2.6 && player.takeHit()) {
          this.health = Math.max(0, this.health - def.contactDamage);
          this.lastDamageTime = this.elapsed;
          target.pop();
          this.particles.burst(target.position, { count: 34, color: def.glow, speed: 9, size: 0.6, life: 0.6 });
          this.rings.spawn(target.position, { color: 0xff5a7a, from: 0.6, to: 4, life: 0.45 });
          this.ui.floater(tmpVec.copy(p).setY(p.y + 2), `−${def.contactDamage}`, "bad");
          this.ui.flashDamage(0.75);
          this.addShake(0.6);
          this.audio.hurt();
        }
        continue;
      }

      if (def.phagocytosable && horizontal < target.radius + PLAYER.engulfReach && vertical < 2.4) {
        target.engulf(p);
        this.engulfed += 1;
        this.health = Math.max(0, this.health - RULES.phagocytosisHealthCost);
        this.lastDamageTime = this.elapsed;
        player.pulseEngulf();
        this.audio.engulf();
        this.onCaptured(target, "engulf");
        continue;
      }

      if (target.kind === "synoviocyte" && horizontal < target.radius + 1.3) {
        // Invasive synoviocytes shove and injure the neutrophil on contact.
        this.health = Math.max(0, this.health - 5 * dt);
        this.lastDamageTime = this.elapsed;
        const away = tmpVec.set(p.x - target.position.x, 0, p.z - target.position.z);
        if (away.lengthSq() > 1e-4) {
          away.normalize();
          player.velocity.addScaledVector(away, 30 * dt);
        }
        player.flash(0.15);
        this.ui.flashDamage(0.25);
      }

      if (target.escaped()) {
        this.inflammation = Math.min(RULES.maxInflammation, this.inflammation + def.penalty);
        this.escapes += 1;
        this.combo = 0;
        this.comboTimer = 0;
        target.pop();
        this.particles.burst(target.position, { count: 30, color: 0xff4d6d, speed: 7, size: 0.6, life: 0.7 });
        this.rings.spawn(target.position, { color: 0xff3d6e, from: 1, to: 6.5, life: 0.6 });
        this.ui.floater(tmpVec.copy(target.position).setY(target.position.y + 1.6), `Cartilage hit +${def.penalty}`, "bad");
        this.ui.flashDamage(0.3);
        this.addShake(0.25);
        this.audio.escape();
        continue;
      }

      const r = Math.hypot(target.position.x, target.position.z);
      threat = Math.max(threat, 1 - smoothstep(ARENA.escapeRadius, 12, r));
    }
    this.threat += (threat - this.threat) * (1 - Math.exp(-6 * dt));

    // Compact the array in place (no per-frame allocation).
    let write = 0;
    for (let i = 0; i < list.length; i += 1) {
      const target = list[i];
      if (target.destroyed) {
        this.scene.remove(target.group);
        if (target === this.lockTarget) this.lockTarget = null;
        continue;
      }
      list[write] = target;
      write += 1;
    }
    list.length = write;
  }

  updateBiology(dt) {
    this.inflammation = Math.min(RULES.maxInflammation, this.inflammation + (0.9 + this.wave * 0.12) * dt);
    this.netBurden = Math.max(0, this.netBurden - RULES.netDecayPerSecond * dt);
    const overloaded = this.netBurden > RULES.netOverloadThreshold;
    if (overloaded) {
      // High NET burden: collateral synovial damage and autoantigen exposure.
      this.inflammation = Math.min(RULES.maxInflammation, this.inflammation + RULES.netOverloadInflammation * dt);
      this.health = Math.max(0, this.health - RULES.netOverloadDamage * dt);
      this.lastDamageTime = this.elapsed;
      this.ui.flashDamage(0.12);
    } else if (this.health > 0 && this.elapsed - this.lastDamageTime > RULES.healthRegenDelay) {
      this.health = Math.min(RULES.maxHealth, this.health + RULES.healthRegenPerSecond * dt);
    }
    this.erosion = Math.min(0.92, this.escapes * 0.065 + Math.max(0, this.inflammation - 60) * 0.003);
    this.player.setHealthRatio(this.health / RULES.maxHealth);
  }

  checkEndConditions() {
    if (this.elapsed >= RULES.stabiliseSeconds || this.cleared >= RULES.winClears) {
      const bonus = Math.round(this.health * 10 + (100 - this.inflammation) * 8 + (100 - this.netBurden) * 6);
      this.score += bonus;
      this.ui.showToast(`Stabilisation bonus +${bonus.toLocaleString()}`, 3);
      this.finish(
        true,
        "Synovium stabilised",
        "Inflammatory stimuli have been contained without overwhelming NET-mediated tissue damage.",
      );
    } else if (this.health <= 0) {
      this.health = 0;
      this.state = "dying";
      this.endInfo = {
        won: false,
        title: "Neutrophil exhausted",
        text: "Complement bursts and tissue stress overwhelmed the activated neutrophil — it underwent NETosis.",
      };
      this.player.beginDeathBurst();
      this.input.releaseAll();
      this.ui.setPlaying(false);
      const p = this.player.position;
      this.particles.burst(p, { count: 90, color: 0xd9fbff, speed: 12, size: 0.8, life: 1.2, spread: 0.5 });
      this.rings.spawn(p, { color: 0xbffcff, from: 1, to: 12, life: 1 });
      for (let i = 0; i < 6; i += 1) {
        const a = (i / 6) * Math.PI * 2;
        this.residue.add(tmpVec.set(p.x + Math.cos(a) * 3, 0, p.z + Math.sin(a) * 3), 4);
      }
      this.addShake(0.9);
      this.audio.burst();
    } else if (this.inflammation >= RULES.maxInflammation) {
      this.finish(false, "Inflammation runaway", "The RA synovial microenvironment exceeded control thresholds.");
    } else if (this.netBurden >= RULES.maxNetBurden) {
      this.finish(false, "NET burden too high", "Excess chromatin webbing increased tissue damage and autoimmunity risk.");
    }
  }

  finish(won, title, text) {
    this.state = "over";
    this.input.releaseAll();
    this.ui.setPlaying(false);
    const newBest = this.score > this.best;
    if (newBest) {
      this.best = this.score;
      save("best", this.best);
    }
    const stats = {
      score: this.score,
      best: this.best,
      newBest: newBest && this.score > 0,
      cleared: this.cleared,
      wave: this.wave,
      accuracy: this.shots ? Math.min(100, Math.round((this.hits / this.shots) * 100)) : 0,
      engulfed: this.engulfed,
      bestCombo: this.bestCombo,
      time: Math.floor(Math.min(this.elapsed, RULES.stabiliseSeconds)),
    };
    if (won) this.audio.win();
    else this.audio.lose();
    this.ui.show("over", { won, title, text, stats, fact: FACTS[Math.floor(Math.random() * FACTS.length)] });
  }

  // ---------------------------------------------------------------------
  // Camera, lights, performance
  // ---------------------------------------------------------------------

  updateCamera(dt) {
    const p = this.player.position;
    const aspect = this.camera.aspect;
    const distance = aspect < 1.25 ? THREE.MathUtils.lerp(1.45, 1, smoothstep(0.45, 1.25, aspect)) : 1;
    const look = this.aimMode === "mouse" && this.state === "playing" ? 2.2 : 1.2;
    const desired = tmpVec
      .copy(CAMERA_OFFSET)
      .multiplyScalar(distance)
      .add(p)
      .addScaledVector(this.player.facing, look);
    this.camera.position.lerp(desired, 1 - Math.exp(-5 * dt));
    const focus = tmpVec2.set(p.x + this.player.facing.x * look, p.y - 1, p.z - 1 + this.player.facing.z * look);
    this.cameraTarget.lerp(focus, 1 - Math.exp(-6 * dt));
    this.camera.lookAt(this.cameraTarget);
    if (this.shake > 0.001) {
      const s = this.shake * 0.45;
      this.camera.position.x += (Math.random() - 0.5) * s;
      this.camera.position.y += (Math.random() - 0.5) * s;
      this.camera.position.z += (Math.random() - 0.5) * s;
      this.shake *= Math.exp(-7 * dt);
    }
  }

  updateLights() {
    const p = this.player.position;
    this.keyLight.position.copy(p).add(KEY_LIGHT_OFFSET);
    this.keyLight.target.position.copy(p);
    this.playerLight.position.set(p.x, p.y + 1.6, p.z);
    this.playerLight.intensity = this.player.group.visible ? 6 + this.pulse * 1.5 : 0;
    this.postfx.setBloomStrength(0.55 + this.pulse * 0.12 + this.inflammation * 0.002);
  }

  trackPerformance(dt) {
    if (this.settings.quality !== "auto" || this.forcedQuality) return;
    const perf = this.perf;
    perf.warmup += dt;
    if (perf.warmup < 2.5) return;
    perf.frames += 1;
    perf.time += dt;
    if (perf.time < 3) return;
    const fps = perf.frames / perf.time;
    perf.frames = 0;
    perf.time = 0;
    const index = QUALITY_ORDER.indexOf(this.qualityName);
    if (fps < 40 && index < QUALITY_ORDER.length - 1) {
      const next = QUALITY_ORDER[index + 1];
      this.applyQuality(next);
      perf.warmup = 0;
      this.ui.showToast(`Graphics set to ${next} for smoother play`);
    }
  }
}
