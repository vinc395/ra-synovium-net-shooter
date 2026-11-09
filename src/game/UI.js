import * as THREE from "three";
import { RULES, TARGET_KINDS } from "./config.js";

const ICONS = {
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  soundOn:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  soundOff:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 9.5l5 5m0-5l-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  help: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 9a2.9 2.9 0 1 1 4.4 2.5c-.9.6-1.6 1.2-1.6 2.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="18" r="1.4"/></svg>',
};

const LEGEND = {
  complex: { shape: "diamond", note: "ACPA / RF–antigen lattices. NET them or engulf by touch." },
  platelet: { shape: "disc", note: "NET-bound clots add extra NET burden." },
  debris: { shape: "diamond", note: "Citrullinated autoantigens. NET them or engulf by touch." },
  cytokine: { shape: "round", note: "TNF / IL-6 / IL-1β. Only NETs can trap them." },
  synoviocyte: { shape: "disc", note: "Pannus-forming FLS. Need two NET hits." },
  complement: { shape: "round", note: "C5a / MAC. Hunt you and burst on contact." },
};

const LEGEND_NAMES = {
  complex: "Immune complexes",
  platelet: "Platelets / microthrombi",
  debris: "Citrullinated debris",
  cytokine: "Cytokine clouds",
  synoviocyte: "Invasive synoviocytes",
  complement: "Complement bursts",
};

const hex = (value) => `#${value.toString(16).padStart(6, "0")}`;
const projected = new THREE.Vector3();
const cameraSpace = new THREE.Vector3();

function legendItems() {
  return Object.entries(TARGET_KINDS)
    .map(([kind, def]) => {
      const color = hex(def.color);
      return `<div class="legend-item">
        <span class="legend-swatch ${LEGEND[kind].shape}" style="color:${color};background:${color}"></span>
        <span><span class="legend-name">${LEGEND_NAMES[kind]}</span><span class="legend-note">${LEGEND[kind].note}</span></span>
      </div>`;
    })
    .join("");
}

function formatTime(seconds) {
  const total = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(total / 60);
  const remainder = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

export class UI {
  constructor(handlers) {
    this.handlers = handlers;
    const $ = (id) => document.getElementById(id);
    this.el = {
      healthBar: $("healthBar"),
      inflammationBar: $("inflammationBar"),
      netBar: $("netBar"),
      healthValue: $("healthValue"),
      inflammationValue: $("inflammationValue"),
      netValue: $("netValue"),
      waveLabel: $("waveLabel"),
      clearedValue: $("clearedValue"),
      timeValue: $("timeValue"),
      scoreValue: $("scoreValue"),
      comboValue: $("comboValue"),
      burstFill: $("burstFill"),
      burstMeter: $("burstMeter"),
      burstButton: $("burstButton"),
      dashButton: $("dashButton"),
      warnings: $("warnings"),
      banner: $("banner"),
      toast: $("toast"),
      floaters: $("floaters"),
      indicators: $("indicators"),
      lockOn: $("lockOn"),
      damage: $("damageFx"),
      overlay: $("overlay"),
      card: $("card"),
      legend: $("legend"),
      legendBody: $("legendBody"),
      legendButton: $("legendButton"),
      muteButton: $("muteButton"),
      pauseButton: $("pauseButton"),
      hud: $("hud"),
    };
    this.el.legendBody.innerHTML = legendItems();
    this.el.pauseButton.innerHTML = ICONS.pause;
    this.el.legendButton.innerHTML = ICONS.help;
    this.screen = null;
    this.returnTo = "intro";
    this.cache = {};
    this.damage = 0;
    this.bannerTimer = 0;
    this.toastTimer = 0;
    this.floaterPool = [];
    this.indicatorPool = [];
    this.viewport = { width: window.innerWidth, height: window.innerHeight };

    for (let i = 0; i < 18; i += 1) {
      const node = document.createElement("span");
      node.className = "floater";
      this.el.floaters.appendChild(node);
      this.floaterPool.push({ node, active: false, age: 0, life: 1, position: new THREE.Vector3() });
    }
    for (let i = 0; i < 10; i += 1) {
      const node = document.createElement("span");
      node.className = "indicator";
      node.innerHTML = "<i></i>";
      this.el.indicators.appendChild(node);
      this.indicatorPool.push(node);
    }

    this.el.legendButton.addEventListener("click", () => this.toggleLegend());
    this.el.legend.addEventListener("click", (event) => {
      if (event.target.closest(".legend-close") || document.body.classList.contains("device-touch")) {
        this.toggleLegend(false);
      }
    });
    this.el.muteButton.addEventListener("click", () => handlers.onToggleSound());
    this.el.pauseButton.addEventListener("click", () => handlers.onPause());
    this.el.card.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      handlers.onClick?.();
      this.handleAction(button.dataset.action, button.dataset.value);
    });
  }

  setViewport(width, height) {
    this.viewport.width = width;
    this.viewport.height = height;
  }

  setDevice(device) {
    const body = document.body;
    body.classList.toggle("device-touch", device === "touch");
    body.classList.toggle("device-gamepad", device === "gamepad");
    body.classList.toggle("device-desktop", device === "desktop");
  }

  setPlaying(playing) {
    document.body.classList.toggle("playing", playing);
  }

  toggleLegend(force) {
    const open = force ?? !document.body.classList.contains("legend-open");
    document.body.classList.toggle("legend-open", open);
    this.el.legendButton.setAttribute("aria-expanded", String(open));
  }

  setMuted(muted) {
    this.el.muteButton.innerHTML = muted ? ICONS.soundOff : ICONS.soundOn;
    this.el.muteButton.setAttribute("aria-label", muted ? "Unmute sound" : "Mute sound");
    this.el.muteButton.classList.toggle("off", muted);
  }

  // ----- HUD --------------------------------------------------------------

  setMeter(bar, label, value, key) {
    const rounded = Math.round(value);
    if (this.cache[key] === rounded) return;
    this.cache[key] = rounded;
    bar.style.transform = `scaleX(${Math.max(0, Math.min(100, rounded)) / 100})`;
    label.textContent = String(rounded);
  }

  setText(node, text, key) {
    if (this.cache[key] === text) return;
    this.cache[key] = text;
    node.textContent = text;
  }

  update(dt, hud) {
    const el = this.el;
    this.setMeter(el.healthBar, el.healthValue, hud.health, "health");
    this.setMeter(el.inflammationBar, el.inflammationValue, hud.inflammation, "inflammation");
    this.setMeter(el.netBar, el.netValue, hud.netBurden, "net");
    this.setText(el.waveLabel, `Wave ${hud.wave}`, "wave");
    this.setText(el.clearedValue, `Cleared ${hud.cleared}/${RULES.winClears}`, "cleared");
    this.setText(el.timeValue, formatTime(hud.remainingSeconds), "time");
    this.setText(el.scoreValue, hud.score.toLocaleString(), "score");
    const comboText = hud.multiplier > 1 ? `×${hud.multiplier.toFixed(1)} combo ${hud.combo}` : "";
    this.setText(el.comboValue, comboText, "combo");

    const charge = Math.round(hud.burstCharge * 100);
    if (this.cache.charge !== charge) {
      this.cache.charge = charge;
      el.burstFill.style.transform = `scaleX(${charge / 100})`;
      el.burstButton.style.setProperty("--charge", `${charge}%`);
      const ready = charge >= 100;
      el.burstMeter.classList.toggle("ready", ready);
      el.burstButton.classList.toggle("ready", ready);
    }
    const dashReady = hud.dashReady;
    if (this.cache.dash !== dashReady) {
      this.cache.dash = dashReady;
      el.dashButton.classList.toggle("cooling", !dashReady);
    }

    const warnings = [];
    if (hud.netBurden > RULES.netOverloadThreshold) warnings.push(["net", "NET overload — webbing is damaging tissue"]);
    if (hud.inflammation > 82) warnings.push(["inflammation", "Inflammation critical"]);
    if (hud.threat > 0.55) warnings.push(["cartilage", "Cartilage under attack"]);
    if (hud.health < 25) warnings.push(["health", "Neutrophil exhausted"]);
    const key = warnings.map(([k]) => k).join("|");
    if (this.cache.warnings !== key) {
      this.cache.warnings = key;
      el.warnings.innerHTML = warnings
        .slice(0, 2)
        .map(([k, text]) => `<span class="warning ${k}">${text}</span>`)
        .join("");
    }

    if (this.bannerTimer > 0) {
      this.bannerTimer -= dt;
      if (this.bannerTimer <= 0) el.banner.classList.remove("show");
    }
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) el.toast.classList.remove("show");
    }
    this.damage = Math.max(0, this.damage - dt * 1.8);
    el.damage.style.opacity = this.damage.toFixed(3);
  }

  flashDamage(amount = 0.6) {
    this.damage = Math.min(1, Math.max(this.damage, amount));
  }

  showBanner(title, subtitle = "", seconds = 2.6) {
    this.el.banner.innerHTML = `<strong>${title}</strong>${subtitle ? `<span>${subtitle}</span>` : ""}`;
    this.el.banner.classList.remove("show");
    void this.el.banner.offsetWidth;
    this.el.banner.classList.add("show");
    this.bannerTimer = seconds;
  }

  showToast(text, seconds = 2.4) {
    this.el.toast.textContent = text;
    this.el.toast.classList.add("show");
    this.toastTimer = seconds;
  }

  // ----- World-anchored overlays -------------------------------------------

  floater(position, text, variant = "") {
    const item = this.floaterPool.find((entry) => !entry.active) || this.floaterPool[0];
    item.active = true;
    item.age = 0;
    item.life = 0.95;
    item.position.copy(position);
    item.node.textContent = text;
    item.node.className = `floater show ${variant}`;
  }

  toScreen(position, camera, out) {
    projected.copy(position).project(camera);
    out.x = (projected.x * 0.5 + 0.5) * this.viewport.width;
    out.y = (-projected.y * 0.5 + 0.5) * this.viewport.height;
    out.visible = projected.z > -1 && projected.z < 1;
    return out;
  }

  updateWorldOverlays(dt, camera, { targets, lockTarget, showLock, cartilage }) {
    const screen = { x: 0, y: 0, visible: false };
    for (const item of this.floaterPool) {
      if (!item.active) continue;
      item.age += dt;
      if (item.age >= item.life) {
        item.active = false;
        item.node.className = "floater";
        continue;
      }
      projected.copy(item.position);
      projected.y += item.age * 1.8;
      this.toScreen(projected, camera, screen);
      const t = item.age / item.life;
      item.node.style.transform = `translate3d(${screen.x}px, ${screen.y}px, 0) translate(-50%, -50%) scale(${1 + (1 - t) * 0.25})`;
      item.node.style.opacity = String(1 - t * t);
    }

    const lock = this.el.lockOn;
    if (showLock && lockTarget) {
      this.toScreen(lockTarget.position, camera, screen);
      lock.style.transform = `translate3d(${screen.x}px, ${screen.y}px, 0) translate(-50%, -50%)`;
      lock.classList.add("show");
    } else {
      lock.classList.remove("show");
    }

    // Off-screen threat arrows (closest to the cartilage first) plus one for
    // the cartilage itself.
    const { width, height } = this.viewport;
    let used = 0;
    const place = (position, color, isCartilage) => {
      if (used >= this.indicatorPool.length) return;
      cameraSpace.copy(position).applyMatrix4(camera.matrixWorldInverse);
      projected.copy(position).project(camera);
      let x = projected.x;
      let y = projected.y;
      if (cameraSpace.z > 0) {
        x = -x;
        y = -y;
      }
      const margin = 0.9;
      if (cameraSpace.z < 0 && Math.abs(x) <= 1 && Math.abs(y) <= 1) return;
      const scale = 1 / Math.max(Math.abs(x) / margin, Math.abs(y) / (margin - 0.04), 1e-6);
      const ex = x * scale;
      const ey = y * scale;
      const px = (ex * 0.5 + 0.5) * width;
      const py = (-ey * 0.5 + 0.5) * height;
      const angle = Math.atan2(-ey, ex);
      const node = this.indicatorPool[used];
      used += 1;
      node.className = `indicator show${isCartilage ? " cartilage" : ""}`;
      node.style.setProperty("--c", color);
      node.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) rotate(${angle}rad)`;
    };
    if (cartilage) place(cartilage, "#dff3ff", true);
    for (const target of targets) place(target.position, hex(target.def.glow), false);
    for (let i = used; i < this.indicatorPool.length; i += 1) {
      if (this.indicatorPool[i].className !== "indicator") this.indicatorPool[i].className = "indicator";
    }
  }

  clearWorldOverlays() {
    for (const item of this.floaterPool) {
      item.active = false;
      item.node.className = "floater";
    }
    for (const node of this.indicatorPool) node.className = "indicator";
    this.el.lockOn.classList.remove("show");
    this.el.banner.classList.remove("show");
    this.bannerTimer = 0;
  }

  // ----- Menus --------------------------------------------------------------

  get overlayOpen() {
    return this.screen !== null;
  }

  handleAction(action, value) {
    const h = this.handlers;
    switch (action) {
      case "start":
        h.onStart();
        break;
      case "resume":
        h.onResume();
        break;
      case "restart":
        h.onRestart();
        break;
      case "menu":
        h.onMenu();
        break;
      case "howto":
        this.returnTo = this.screen === "pause" ? "pause" : this.screen === "over" ? "over" : "intro";
        this.returnData = this.lastData;
        this.show("howto");
        break;
      case "settings":
        this.returnTo = this.screen === "pause" ? "pause" : "intro";
        this.returnData = this.lastData;
        this.show("settings");
        break;
      case "back":
        this.show(this.returnTo, this.returnData);
        break;
      case "quality":
        h.onQuality(value);
        this.show("settings");
        break;
      case "sound":
        h.onToggleSound();
        this.show("settings");
        break;
      case "shake":
        h.onToggleShake();
        this.show("settings");
        break;
      case "fullscreen":
        h.onFullscreen();
        break;
      default:
        break;
    }
  }

  controlsHtml() {
    return `<div class="control-grid">
      <div class="control-block">
        <strong>Keyboard &amp; mouse</strong>
        <span><kbd>W A S D</kbd> / arrows move</span>
        <span>Mouse aims · click / hold or <kbd>Space</kbd> fires</span>
        <span><kbd>Shift</kbd> dash · <kbd>E</kbd> or right-click NET burst</span>
        <span><kbd>Esc</kbd> pause · <kbd>M</kbd> mute</span>
      </div>
      <div class="control-block">
        <strong>Touch</strong>
        <span>Left thumb: drag anywhere to move</span>
        <span>Hold <b>NET</b> to fire (auto-aims)</span>
        <span>Tap a target to shoot it</span>
        <span><b>Dash</b> and <b>Burst</b> buttons</span>
      </div>
      <div class="control-block">
        <strong>Gamepad</strong>
        <span>Left stick move</span>
        <span>Right stick aim &amp; fire · RT fire</span>
        <span>B / LB dash · Y / RB burst</span>
        <span>Start pause</span>
      </div>
    </div>`;
  }

  show(screen, data = {}) {
    this.screen = screen;
    this.lastData = data;
    const card = this.el.card;
    const s = this.handlers.getSettings();
    let html = "";
    if (screen === "intro") {
      html = `
        <p class="eyebrow">Rheumatoid arthritis · innate immunity</p>
        <h1>RA Synovium <span>NET Shooter</span></h1>
        <p class="lead">Guide an activated neutrophil through inflamed rheumatoid synovium and stop inflammatory stimuli before they reach the articular cartilage at the centre.</p>
        <p>Each NET traps targets but leaves chromatin webbing behind — too much NET burden damages the tissue. Engulf small particles by touch when you can.</p>
        <div class="actions">
          <button class="btn primary" data-action="start" autofocus>Start</button>
          <button class="btn" data-action="howto">How to play</button>
          <button class="btn" data-action="settings">Settings</button>
        </div>
        ${this.controlsHtml()}
        <p class="meta">${s.best > 0 ? `Best score <b>${s.best.toLocaleString()}</b> · ` : ""}Educational arcade model — simplified biology, not a clinical simulation.</p>`;
    } else if (screen === "howto") {
      html = `
        <h2>How to play</h2>
        <div class="howto-grid">
          <div><b class="c-health">Neutrophil health</b> drops from complement bursts, invasive synoviocytes, engulfing particles and NET overload. It recovers slowly when you avoid damage.</div>
          <div><b class="c-inflammation">Inflammation</b> rises over time and whenever a stimulus reaches the cartilage. Every capture lowers it.</div>
          <div><b class="c-net">NET tissue damage</b> rises with every NET released. Above ${RULES.netOverloadThreshold} it harms you and the tissue — aim carefully.</div>
          <div><b>Win</b> by stabilising the synovium for ${formatTime(RULES.stabiliseSeconds)} or clearing ${RULES.winClears} stimuli. Lose if health hits 0 or another meter maxes out.</div>
          <div><b>Combo</b> captures in quick succession for a score multiplier. Each capture charges the radial <b>NET burst</b>.</div>
          <div><b>Phagocytosis</b>: touch immune complexes or debris to engulf them without releasing a NET.</div>
        </div>
        <h3>Targets</h3>
        <div class="legend-list">${legendItems()}</div>
        <div class="actions sticky"><button class="btn primary" data-action="back" autofocus>Back</button></div>`;
    } else if (screen === "settings") {
      const quality = ["auto", "high", "medium", "low"]
        .map(
          (q) =>
            `<button class="seg ${s.quality === q ? "on" : ""}" data-action="quality" data-value="${q}">${q[0].toUpperCase()}${q.slice(1)}</button>`,
        )
        .join("");
      html = `
        <h2>Settings</h2>
        <div class="setting"><span>Graphics<small>${s.quality === "auto" ? `Auto (currently ${s.effectiveQuality})` : "Manual"}</small></span><div class="segmented">${quality}</div></div>
        <div class="setting"><span>Sound</span><button class="seg on-off ${s.sound ? "on" : ""}" data-action="sound">${s.sound ? "On" : "Off"}</button></div>
        <div class="setting"><span>Screen shake</span><button class="seg on-off ${s.shake ? "on" : ""}" data-action="shake">${s.shake ? "On" : "Off"}</button></div>
        ${s.fullscreenAvailable ? `<div class="setting"><span>Fullscreen</span><button class="seg on-off ${s.fullscreen ? "on" : ""}" data-action="fullscreen">${s.fullscreen ? "On" : "Off"}</button></div>` : ""}
        <div class="actions"><button class="btn primary" data-action="back" autofocus>Back</button></div>`;
    } else if (screen === "pause") {
      html = `
        <h2>Paused</h2>
        <div class="actions vertical">
          <button class="btn primary" data-action="resume" autofocus>Resume</button>
          <button class="btn" data-action="restart">Restart</button>
          <button class="btn" data-action="howto">How to play</button>
          <button class="btn" data-action="settings">Settings</button>
          <button class="btn ghost" data-action="menu">Main menu</button>
        </div>`;
    } else if (screen === "over") {
      const stats = data.stats || {};
      html = `
        <p class="eyebrow ${data.won ? "good" : "bad"}">${data.won ? "Victory" : "Game over"}</p>
        <h2>${data.title}</h2>
        <p class="lead">${data.text}</p>
        <div class="stats-grid">
          <div><span>Score</span><b>${(stats.score || 0).toLocaleString()}</b></div>
          <div><span>Best</span><b>${(stats.best || 0).toLocaleString()}${stats.newBest ? ' <em>new!</em>' : ""}</b></div>
          <div><span>Cleared</span><b>${stats.cleared || 0}</b></div>
          <div><span>Wave</span><b>${stats.wave || 1}</b></div>
          <div><span>NET accuracy</span><b>${stats.accuracy ?? 0}%</b></div>
          <div><span>Engulfed</span><b>${stats.engulfed || 0}</b></div>
          <div><span>Best combo</span><b>${stats.bestCombo || 0}</b></div>
          <div><span>Time</span><b>${formatTime(stats.time || 0)}</b></div>
        </div>
        <div class="actions">
          <button class="btn primary" data-action="restart" autofocus>Play again</button>
          <button class="btn" data-action="howto">How to play</button>
          <button class="btn ghost" data-action="menu">Main menu</button>
        </div>
        <p class="fact"><b>Did you know?</b> ${data.fact}</p>`;
    }
    card.innerHTML = html;
    card.dataset.screen = screen;
    this.el.overlay.classList.add("show");
    this.el.overlay.setAttribute("aria-hidden", "false");
    const focus = card.querySelector("[autofocus]");
    if (focus && !document.body.classList.contains("device-touch")) focus.focus({ preventScroll: true });
    card.scrollTop = 0;
  }

  hideOverlay() {
    this.screen = null;
    this.el.overlay.classList.remove("show");
    this.el.overlay.setAttribute("aria-hidden", "true");
    if (document.activeElement instanceof HTMLElement && this.el.overlay.contains(document.activeElement)) {
      document.activeElement.blur();
    }
  }
}
