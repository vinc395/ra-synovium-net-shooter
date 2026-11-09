import * as THREE from "three";

// Screen-right is world +X and screen-down is world +Z (the camera never
// rotates), so every device produces a 2D vector in that frame.
const MOVE_KEYS = {
  KeyW: [0, -1],
  ArrowUp: [0, -1],
  KeyS: [0, 1],
  ArrowDown: [0, 1],
  KeyA: [-1, 0],
  ArrowLeft: [-1, 0],
  KeyD: [1, 0],
  ArrowRight: [1, 0],
};

const ACTION_KEYS = {
  ShiftLeft: "dash",
  ShiftRight: "dash",
  KeyE: "burst",
  KeyQ: "burst",
  Escape: "pause",
  KeyP: "pause",
  KeyM: "mute",
  KeyR: "restart",
  Enter: "confirm",
};

const PAD_EDGE_ACTIONS = [
  [0, "confirm"],
  [1, "dash"],
  [4, "dash"],
  [3, "burst"],
  [5, "burst"],
  [9, "pause"],
  [8, "pause"],
];

const JOYSTICK_RADIUS = 58;
const STICK_DEADZONE = 0.18;
const PAD_IDLE_SECONDS = 4;

/** Pointer capture can throw for pointers the browser no longer tracks. */
function capturePointer(element, pointerId) {
  try {
    element.setPointerCapture(pointerId);
  } catch {
    // Not fatal: events still arrive while the pointer stays over the element.
  }
}

function isFormControl(target) {
  return target instanceof HTMLElement && Boolean(target.closest("button, input, select, textarea, a"));
}

export class Input {
  /**
   * @param {{canvas: HTMLElement, touch: {joystick: HTMLElement, knob: HTMLElement, fire: HTMLElement, dash: HTMLElement, burst: HTMLElement}, onAction: (name:string)=>void, onDeviceChange: ()=>void}} options
   */
  constructor({ canvas, touch, onAction, onDeviceChange }) {
    this.canvas = canvas;
    this.touch = touch;
    this.onAction = onAction;
    this.onDeviceChange = onDeviceChange;

    this.keys = new Set();
    this.pointer = new THREE.Vector2();
    this.hasMouseAim = false;
    this.pointerKind = window.matchMedia("(pointer: coarse)").matches ? "touch" : null;
    this.mouseFiring = false;
    this.keyFiring = false;
    this.touchFiring = false;
    this.padFiring = false;
    this.padMove = new THREE.Vector2();
    this.padAim = new THREE.Vector2();
    this.padLastUsed = -Infinity;
    this.padPrevious = [];
    this.taps = [];
    this.joystick = {
      pointerId: null,
      origin: new THREE.Vector2(),
      vector: new THREE.Vector2(),
    };
    this.firePointer = null;
    // True while a Space press that began in the game is held: if focus moves
    // to a menu button mid-press (e.g. the game-over screen appears), the
    // release must not click that button.
    this.spaceFromGame = false;
    // Set on a fresh fire press (not while held): always fires one NET.
    this.firePressed = false;
    this.lastDevice = this.device;

    this.bindKeyboard();
    this.bindPointer();
    this.bindTouchButtons();
    window.addEventListener("blur", () => this.releaseAll());
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.releaseAll();
    });
  }

  get padActive() {
    return performance.now() / 1000 - this.padLastUsed < PAD_IDLE_SECONDS;
  }

  /** "touch" when the touch controls should be shown. */
  get device() {
    if (this.padActive) return "gamepad";
    return this.pointerKind === "touch" ? "touch" : "desktop";
  }

  setPointerKind(kind) {
    this.pointerKind = kind;
    this.notifyDevice();
  }

  /** Tell the UI when the active device (touch / desktop / gamepad) changes. */
  notifyDevice() {
    const device = this.device;
    if (device === this.lastDevice) return;
    this.lastDevice = device;
    this.onDeviceChange?.();
  }

  bindKeyboard() {
    window.addEventListener("keydown", (event) => {
      const inControl = isFormControl(event.target);
      if (MOVE_KEYS[event.code]) {
        this.keys.add(event.code);
        if (!inControl) event.preventDefault();
        return;
      }
      if (event.code === "Space") {
        if (inControl) {
          if (event.repeat || this.spaceFromGame) event.preventDefault();
          return;
        }
        event.preventDefault();
        if (!event.repeat) {
          this.spaceFromGame = true;
          this.firePressed = true;
        }
        this.keyFiring = true;
        return;
      }
      const action = ACTION_KEYS[event.code];
      if (!action || event.repeat) return;
      // Enter on a focused button already clicks it natively.
      if (inControl && action === "confirm") return;
      this.onAction(action, event);
    });
    window.addEventListener("keyup", (event) => {
      this.keys.delete(event.code);
      if (event.code === "Space") {
        if (this.spaceFromGame && isFormControl(event.target)) event.preventDefault();
        this.spaceFromGame = false;
        this.keyFiring = false;
      }
    });
  }

  bindPointer() {
    const canvas = this.canvas;
    canvas.addEventListener("contextmenu", (event) => event.preventDefault());

    canvas.addEventListener("pointerdown", (event) => {
      this.padLastUsed = -Infinity;
      if (event.pointerType === "touch") {
        event.preventDefault();
        this.setPointerKind("touch");
        const leftSide = event.clientX < window.innerWidth * 0.5;
        if (leftSide && this.joystick.pointerId === null) {
          this.startJoystick(event);
        } else {
          this.taps.push({ x: event.clientX, y: event.clientY });
        }
        return;
      }
      this.setPointerKind("mouse");
      this.updatePointer(event);
      if (event.button === 0) {
        this.mouseFiring = true;
        this.firePressed = true;
        capturePointer(canvas, event.pointerId);
      } else if (event.button === 2) {
        this.onAction("burst", event);
      }
    });

    canvas.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") {
        if (event.pointerId === this.joystick.pointerId) this.moveJoystick(event);
        return;
      }
      if (this.pointerKind !== "mouse") this.setPointerKind("mouse");
      this.updatePointer(event);
    });

    const end = (event) => {
      if (event.pointerType === "touch") {
        if (event.pointerId === this.joystick.pointerId) this.endJoystick();
        return;
      }
      if (event.button === 0 || event.type === "pointercancel") this.mouseFiring = false;
    };
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
    canvas.addEventListener("lostpointercapture", (event) => {
      if (event.pointerType !== "touch") this.mouseFiring = false;
    });
  }

  bindTouchButtons() {
    const { fire, dash, burst } = this.touch;
    const press = (element, onDown, onUp) => {
      element.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.setPointerKind(event.pointerType === "mouse" ? "mouse" : "touch");
        capturePointer(element, event.pointerId);
        element.classList.add("pressed");
        onDown(event);
      });
      const release = (event) => {
        element.classList.remove("pressed");
        onUp?.(event);
      };
      element.addEventListener("pointerup", release);
      element.addEventListener("pointercancel", release);
      element.addEventListener("lostpointercapture", release);
      element.addEventListener("contextmenu", (event) => event.preventDefault());
    };
    press(
      fire,
      (event) => {
        this.firePointer = event.pointerId;
        this.touchFiring = true;
        this.firePressed = true;
      },
      (event) => {
        if (event.pointerId === this.firePointer) {
          this.firePointer = null;
          this.touchFiring = false;
        }
      },
    );
    press(dash, (event) => this.onAction("dash", event));
    press(burst, (event) => this.onAction("burst", event));
  }

  startJoystick(event) {
    const { joystick, knob } = this.touch;
    this.joystick.pointerId = event.pointerId;
    this.joystick.origin.set(event.clientX, event.clientY);
    this.joystick.vector.set(0, 0);
    capturePointer(this.canvas, event.pointerId);
    joystick.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    knob.style.transform = "translate3d(0px, 0px, 0)";
    joystick.classList.add("active");
  }

  moveJoystick(event) {
    const js = this.joystick;
    let dx = event.clientX - js.origin.x;
    let dy = event.clientY - js.origin.y;
    let distance = Math.hypot(dx, dy);
    // Floating joystick: the base follows the thumb when it overshoots.
    const maxTravel = JOYSTICK_RADIUS * 1.25;
    if (distance > maxTravel) {
      const excess = distance - maxTravel;
      js.origin.x += (dx / distance) * excess;
      js.origin.y += (dy / distance) * excess;
      dx = event.clientX - js.origin.x;
      dy = event.clientY - js.origin.y;
      distance = maxTravel;
      this.touch.joystick.style.transform = `translate3d(${js.origin.x}px, ${js.origin.y}px, 0)`;
    }
    const clamped = Math.min(distance, JOYSTICK_RADIUS);
    const nx = distance > 0 ? dx / distance : 0;
    const ny = distance > 0 ? dy / distance : 0;
    const magnitude = clamped / JOYSTICK_RADIUS;
    const live = magnitude < 0.12 ? 0 : (magnitude - 0.12) / 0.88;
    js.vector.set(nx * live, ny * live);
    this.touch.knob.style.transform = `translate3d(${nx * clamped}px, ${ny * clamped}px, 0)`;
  }

  endJoystick() {
    this.joystick.pointerId = null;
    this.joystick.vector.set(0, 0);
    this.touch.joystick.classList.remove("active");
    this.touch.knob.style.transform = "translate3d(0px, 0px, 0)";
  }

  updatePointer(event) {
    this.pointer.set(event.clientX, event.clientY);
    this.hasMouseAim = true;
  }

  releaseAll() {
    this.keys.clear();
    this.spaceFromGame = false;
    this.firePressed = false;
    this.mouseFiring = false;
    this.keyFiring = false;
    this.touchFiring = false;
    this.firePointer = null;
    this.taps.length = 0;
    if (this.joystick.pointerId !== null) this.endJoystick();
    for (const element of [this.touch.fire, this.touch.dash, this.touch.burst]) element.classList.remove("pressed");
  }

  pollGamepad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let pad = null;
    for (const candidate of pads) {
      if (candidate && candidate.connected) {
        pad = candidate;
        break;
      }
    }
    if (!pad) {
      this.padMove.set(0, 0);
      this.padAim.set(0, 0);
      this.padFiring = false;
      this.notifyDevice();
      return;
    }
    const axis = (index) => {
      const value = pad.axes[index] || 0;
      return Math.abs(value) < STICK_DEADZONE ? 0 : value;
    };
    this.padMove.set(axis(0), axis(1));
    // On non-standard mappings axes 2/3 are often analogue triggers resting
    // at -1, which would read as a permanently pushed right stick.
    if (pad.mapping === "standard") this.padAim.set(axis(2), axis(3));
    else this.padAim.set(0, 0);
    if (this.padMove.lengthSq() > 1) this.padMove.normalize();
    const pressed = (index) => Boolean(pad.buttons[index] && pad.buttons[index].pressed);
    const anyButton = pad.buttons.some((button) => button && button.pressed);
    if (anyButton || this.padMove.lengthSq() > 0 || this.padAim.lengthSq() > 0) {
      this.padLastUsed = performance.now() / 1000;
    }
    this.notifyDevice();
    // Twin-stick: pushing the right stick aims and fires.
    const trigger = pressed(7) || pressed(6);
    if (trigger && !this.padTrigger) this.firePressed = true;
    this.padTrigger = trigger;
    this.padFiring = trigger || this.padAim.length() > 0.55;
    for (const [index, action] of PAD_EDGE_ACTIONS) {
      const now = pressed(index);
      if (now && !this.padPrevious[index]) this.onAction(action, null);
      this.padPrevious[index] = now;
    }
  }

  /** Combined movement vector (x = screen right, y = screen down), length ≤ 1. */
  getMove(out) {
    out.set(0, 0);
    for (const code of this.keys) {
      const dir = MOVE_KEYS[code];
      if (dir) {
        out.x += dir[0];
        out.y += dir[1];
      }
    }
    if (out.lengthSq() > 1) out.normalize();
    out.add(this.joystick.vector).add(this.padMove);
    if (out.lengthSq() > 1) out.normalize();
    return out;
  }

  get firing() {
    return this.mouseFiring || this.keyFiring || this.touchFiring || this.padFiring;
  }

  consumeFirePress() {
    const pressed = this.firePressed;
    this.firePressed = false;
    return pressed;
  }

  consumeTaps() {
    if (this.taps.length === 0) return null;
    const taps = this.taps.slice();
    this.taps.length = 0;
    return taps;
  }
}
