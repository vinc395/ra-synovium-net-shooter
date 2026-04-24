import * as THREE from "three";
import { Environment } from "./Environment.js";
import { getSynovialSurfaceHeight } from "./Environment.js";
import { NETProjectile } from "./NETProjectile.js";
import { PlayerNeutrophil } from "./PlayerNeutrophil.js";
import { TargetFactory } from "./Targets.js";
import { UI } from "./UI.js";

const MAX_INFLAMMATION = 100;
const MAX_NET_BURDEN = 100;
const MAX_HEALTH = 100;
const STABILISE_SECONDS = 150;

export class GameScene {
  constructor(host) {
    this.host = host;
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x4f183d);
    this.scene.fog = new THREE.Fog(0x7b2b58, 28, 95);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      180,
    );
    this.camera.position.set(0, 17, 22);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.host.appendChild(this.renderer.domElement);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(0, 0);
    this.aimPoint = new THREE.Vector3(0, 0, -8);
    this.floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.isMobileControl = this.detectMobileControl();
    this.draggingPlayer = false;
    this.lastTapTime = 0;
    this.lastTapPosition = new THREE.Vector2();

    this.keys = new Set();
    this.projectiles = [];
    this.targets = [];
    this.spawnTimer = 0;
    this.wave = 1;
    this.cleared = 0;
    this.elapsed = 0;
    this.gameOver = false;
    this.pendingEnd = null;

    this.state = {
      health: MAX_HEALTH,
      inflammation: 25,
      netBurden: 0,
    };

    this.ui = new UI();
    this.environment = new Environment(this.scene);
    this.player = new PlayerNeutrophil();
    this.targetFactory = new TargetFactory();
    this.scene.add(this.player.group);

    this.setupLights();
    this.bindEvents();
    this.ui.showIntro(() => this.restart());
  }

  setupLights() {
    const hemi = new THREE.HemisphereLight(0xffd7ea, 0x27051d, 2.0);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffffff, 2.1);
    key.position.set(-12, 22, 8);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    this.scene.add(key);

    const vesselGlow = new THREE.PointLight(0xff4f91, 3.2, 34);
    vesselGlow.position.set(9, 4, -8);
    this.scene.add(vesselGlow);
  }

  bindEvents() {
    window.addEventListener("resize", () => this.onResize());
    window.addEventListener("keydown", (event) => {
      this.keys.add(event.key.toLowerCase());
      if (event.code === "Space") {
        event.preventDefault();
        this.fireNET();
      }
      if (event.key.toLowerCase() === "r" && this.gameOver) {
        this.restart();
      }
    });
    window.addEventListener("keyup", (event) => {
      this.keys.delete(event.key.toLowerCase());
    });
    window.addEventListener("pointermove", (event) => this.onPointerMove(event));
    window.addEventListener("pointerdown", (event) => this.onPointerDown(event));
    window.addEventListener("pointerup", () => this.onPointerUp());
    window.addEventListener("pointercancel", () => this.onPointerUp());
  }

  start() {
    this.animate();
  }

  restart() {
    for (const target of this.targets) target.dispose(this.scene);
    for (const projectile of this.projectiles) projectile.dispose(this.scene);
    this.targets = [];
    this.projectiles = [];
    this.player.reset(getSynovialSurfaceHeight(0, 9));
    this.wave = 1;
    this.cleared = 0;
    this.elapsed = 0;
    this.spawnTimer = 0;
    this.gameOver = false;
    this.pendingEnd = null;
    this.state = { health: MAX_HEALTH, inflammation: 25, netBurden: 0 };
    this.ui.hideMessage();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const dt = Math.min(this.clock.getDelta(), 0.033);
    if (!this.gameOver) {
      this.update(dt);
    } else if (this.pendingEnd?.waitForDeathBurst) {
      this.player.update(dt, this.keys, this.aimPoint);
      if (this.player.deathFinished()) {
        this.showPendingEnd();
      }
    }
    this.renderer.render(this.scene, this.camera);
  }

  update(dt) {
    this.elapsed += dt;
    this.environment.update(dt, this.state, this.player.group.position);
    this.player.update(
      dt,
      this.keys,
      this.aimPoint,
      getSynovialSurfaceHeight(this.player.group.position.x, this.player.group.position.z),
    );
    this.updateCamera(dt);
    this.spawnTargets(dt);
    this.updateProjectiles(dt);
    this.updateTargets(dt);
    this.updateBiologyMeters(dt);
    this.ui.update({
      ...this.state,
      wave: this.wave,
      cleared: this.cleared,
      remainingSeconds: Math.max(0, STABILISE_SECONDS - this.elapsed),
    });
    this.checkEndConditions();
  }

  detectMobileControl() {
    return window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 760;
  }

  onPointerDown(event) {
    if (this.gameOver && !this.pendingEnd) {
      this.restart();
      return;
    }

    if (!this.isMobileControl) {
      this.updateMouse(event);
      this.fireNET();
      return;
    }

    event.preventDefault();
    const now = performance.now();
    const tapPosition = new THREE.Vector2(event.clientX, event.clientY);
    const isDoubleTap =
      now - this.lastTapTime < 460 &&
      tapPosition.distanceTo(this.lastTapPosition) < 58;

    this.updateMouse(event);
    if (isDoubleTap) {
      this.fireAtTappedTarget(event);
      this.draggingPlayer = false;
    } else {
      this.draggingPlayer = true;
      this.player.setMobileMoveTarget(this.aimPoint);
    }

    this.lastTapTime = now;
    this.lastTapPosition.copy(tapPosition);
  }

  onPointerMove(event) {
    this.updateMouse(event);
    if (this.isMobileControl && this.draggingPlayer && !this.gameOver) {
      event.preventDefault();
      this.player.setMobileMoveTarget(this.aimPoint);
    }
  }

  onPointerUp() {
    this.draggingPlayer = false;
    if (this.isMobileControl) {
      this.player.clearMobileMoveTarget();
    }
  }

  updateMouse(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.raycaster.ray.intersectPlane(this.floorPlane, this.aimPoint);
  }

  fireAtTappedTarget(event) {
    const target = this.findTappedTarget(event);
    if (!target) return;
    this.aimPoint.copy(target.group.position);
    this.fireNET();
  }

  findTappedTarget(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const targetObjects = this.targets.flatMap((target) => {
      const objects = [];
      target.group.traverse((child) => {
        if (child.isMesh || child.isLine) objects.push(child);
      });
      return objects;
    });
    const hits = this.raycaster.intersectObjects(targetObjects, false);
    const hit = hits.find((entry) => entry.object.type !== "Group");
    if (hit) return this.targets.find((target) => {
      let matched = false;
      target.group.traverse((child) => {
        if (child === hit.object) matched = true;
      });
      return matched;
    });

    // Mobile taps are imprecise, so a near miss on screen should still lock
    // onto the closest visible inflammatory target.
    const tap = new THREE.Vector2(event.clientX, event.clientY);
    let nearest = null;
    let nearestDistance = 76;
    for (const target of this.targets) {
      if (target.captured || target.destroyed) continue;
      const screenPosition = target.group.position.clone().project(this.camera);
      if (screenPosition.z < -1 || screenPosition.z > 1) continue;
      const targetPixel = new THREE.Vector2(
        ((screenPosition.x + 1) / 2) * window.innerWidth,
        ((-screenPosition.y + 1) / 2) * window.innerHeight,
      );
      const distance = targetPixel.distanceTo(tap);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = target;
      }
    }
    return nearest;
  }

  updateCamera(dt) {
    const desired = this.player.group.position
      .clone()
      .add(new THREE.Vector3(0, 16, 22));
    this.camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
    this.camera.lookAt(this.player.group.position.x, 0, this.player.group.position.z);
  }

  fireNET() {
    if (this.gameOver || !this.player.canFire()) return;

    const projectile = new NETProjectile(
      this.player.getMuzzleWorldPosition(),
      this.player.getAimDirection(this.aimPoint),
    );
    this.projectiles.push(projectile);
    this.scene.add(projectile.group);
    this.player.markFired();

    // NET release helps trap inflammatory material, but each shot leaves
    // chromatin-protein webbing behind and raises autoimmunity risk.
    this.state.netBurden = Math.min(MAX_NET_BURDEN, this.state.netBurden + 3.8);
  }

  spawnTargets(dt) {
    this.spawnTimer -= dt;
    if (this.spawnTimer > 0) return;

    const count = Math.min(2 + Math.floor(this.wave / 2), 6);
    for (let i = 0; i < count; i += 1) {
      const target = this.targetFactory.create(this.wave);
      this.targets.push(target);
      this.scene.add(target.group);
    }
    this.spawnTimer = Math.max(2.2, 5.3 - this.wave * 0.28);
  }

  updateProjectiles(dt) {
    for (const projectile of this.projectiles) {
      projectile.update(dt);
      for (const target of this.targets) {
        if (target.captured || target.destroyed) continue;
        const distance = projectile.group.position.distanceTo(target.group.position);
        if (distance < target.radius + projectile.radius) {
          projectile.wrapTarget(target);
          target.capture();
          this.onTargetCaptured(target);
          break;
        }
      }
    }

    this.projectiles = this.projectiles.filter((projectile) => {
      if (!projectile.expired) return true;
      projectile.dispose(this.scene);
      return false;
    });
  }

  updateTargets(dt) {
    for (const target of this.targets) {
      target.update(dt, this.player.group.position);

      if (target.isHazardousNear(this.player.group.position)) {
        this.state.health = Math.max(0, this.state.health - target.contactDamage * dt);
      }

      if (target.escaped()) {
        // Escaped stimuli keep the synovium inflamed: immune complexes,
        // cytokines, complement bursts, and invasive synoviocytes amplify RA.
        this.state.inflammation = Math.min(
          MAX_INFLAMMATION,
          this.state.inflammation + target.inflammationPenalty,
        );
        target.destroyed = true;
      }
    }

    this.targets = this.targets.filter((target) => {
      if (!target.destroyed) return true;
      target.dispose(this.scene);
      return false;
    });
  }

  onTargetCaptured(target) {
    this.cleared += 1;
    this.state.inflammation = Math.max(
      0,
      this.state.inflammation - target.inflammationRelief,
    );

    if (target.kind === "platelet") {
      // NETs can bind platelet-rich microthrombi, but NET-rich clots are a
      // known thrombo-inflammatory tradeoff, so burden is reduced less here.
      this.state.netBurden = Math.min(MAX_NET_BURDEN, this.state.netBurden + 2);
    } else if (target.kind === "debris") {
      // Citrullinated debris clearance helps, yet excessive NET-debris
      // complexes expose autoantigens and nudge the burden upward.
      this.state.netBurden = Math.min(MAX_NET_BURDEN, this.state.netBurden + 1);
    } else {
      this.state.netBurden = Math.max(0, this.state.netBurden - 1.2);
    }

    if (this.cleared > 0 && this.cleared % 10 === 0) {
      this.wave += 1;
    }
  }

  updateBiologyMeters(dt) {
    this.state.inflammation = Math.min(
      MAX_INFLAMMATION,
      this.state.inflammation + (0.9 + this.wave * 0.12) * dt,
    );
    this.state.netBurden = Math.max(0, this.state.netBurden - 1.5 * dt);

    if (this.state.netBurden > 72) {
      // High NET burden models collateral synovial damage and autoantigen
      // exposure, so it directly injures the tissue and indirectly the player.
      this.state.inflammation = Math.min(
        MAX_INFLAMMATION,
        this.state.inflammation + 3.5 * dt,
      );
      this.state.health = Math.max(0, this.state.health - 2.8 * dt);
    }
  }

  checkEndConditions() {
    if (this.elapsed >= STABILISE_SECONDS || this.cleared >= 55) {
      this.finish(
        "Synovium stabilised",
        "Inflammatory stimuli have been contained without overwhelming NET-mediated tissue damage.",
      );
    } else if (this.state.health <= 0) {
      this.finishAfterDeathBurst(
        "Neutrophil exhausted",
        "Complement bursts and tissue stress overwhelmed the activated neutrophil.",
      );
    } else if (this.state.inflammation >= MAX_INFLAMMATION) {
      this.finish(
        "Inflammation runaway",
        "The RA synovial microenvironment exceeded control thresholds.",
      );
    } else if (this.state.netBurden >= MAX_NET_BURDEN) {
      this.finish(
        "NET burden too high",
        "Excess chromatin webbing increased tissue damage and autoimmunity risk.",
      );
    }
  }

  finish(title, text) {
    this.gameOver = true;
    this.ui.showEnd(title, text, this.cleared);
  }

  finishAfterDeathBurst(title, text) {
    this.gameOver = true;
    this.pendingEnd = { title, text, waitForDeathBurst: true };
    this.player.beginDeathBurst();
  }

  showPendingEnd() {
    if (!this.pendingEnd) return;
    this.ui.showEnd(this.pendingEnd.title, this.pendingEnd.text, this.cleared);
    this.pendingEnd = null;
  }

  onResize() {
    this.isMobileControl = this.detectMobileControl();
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
