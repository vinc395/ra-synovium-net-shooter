import * as THREE from "three";
import { PROJECTILE } from "./config.js";
import { getSynovialSurfaceHeight } from "./terrain.js";

const FLIGHT_HEIGHT = 1.95;
const trailVelocity = new THREE.Vector3();
const TRAIL = { color: 0x8ef5ff, size: 0.55, life: 0.32, drag: 4 };

/**
 * A single NET: an expanding, spinning web of chromatin with a bright core.
 * Instances are pooled by NETPool, so firing never allocates.
 */
class NETProjectile {
  constructor(netTexture, coreTexture) {
    this.group = new THREE.Group();
    this.webMaterial = new THREE.SpriteMaterial({
      map: netTexture,
      color: 0xd9fbff,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.web = new THREE.Sprite(this.webMaterial);
    this.web.renderOrder = 11;
    this.coreMaterial = new THREE.SpriteMaterial({
      map: coreTexture,
      color: 0xbffcff,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.core = new THREE.Sprite(this.coreMaterial);
    this.core.scale.setScalar(0.9);
    this.core.renderOrder = 12;
    this.group.add(this.web, this.core);
    this.group.visible = false;

    this.velocity = new THREE.Vector3();
    this.active = false;
    this.age = 0;
    this.life = PROJECTILE.life;
    this.radius = PROJECTILE.baseRadius;
    this.spin = 0;
    this.target = null;
    this.wrapTimer = 0;
    this.trailTimer = 0;
  }

  launch(position, direction, speed, life) {
    this.active = true;
    this.age = 0;
    this.life = life;
    this.target = null;
    this.wrapTimer = 0;
    this.trailTimer = 0;
    this.spin = Math.random() * Math.PI * 2;
    this.group.position.copy(position);
    this.velocity.copy(direction).setY(0).normalize().multiplyScalar(speed);
    this.group.visible = true;
    this.webMaterial.opacity = 1;
    this.coreMaterial.opacity = 1;
    this.radius = PROJECTILE.baseRadius;
    this.updateScale();
  }

  updateScale() {
    const scale = 1.25 + this.age * 2.2;
    this.web.scale.setScalar(scale);
    this.radius = PROJECTILE.baseRadius + this.age * PROJECTILE.radiusGrowth;
  }

  /** Attach to a target: the web wraps it while it is neutralised. */
  wrap(target) {
    this.target = target;
    this.wrapTimer = 0;
    this.velocity.set(0, 0, 0);
  }

  update(dt, particles) {
    if (!this.active) return;
    this.age += dt;
    this.spin += dt * 4;
    this.webMaterial.rotation = this.spin;

    if (this.target) {
      this.wrapTimer += dt;
      const t = Math.min(1, this.wrapTimer / PROJECTILE.wrapDuration);
      this.group.position.lerp(this.target.group.position, 1 - Math.exp(-18 * dt));
      const size = this.target.radius * 3.1 * (1 - t * 0.55) + Math.sin(this.wrapTimer * 22) * 0.12;
      this.web.scale.setScalar(size);
      this.webMaterial.rotation = this.spin * 1.8;
      this.webMaterial.opacity = 1 - t * 0.6;
      this.coreMaterial.opacity = 1 - t;
      if (t >= 1) this.deactivate();
      return;
    }

    this.group.position.addScaledVector(this.velocity, dt);
    // NETs glide just above the folded lining instead of clipping into it.
    const p = this.group.position;
    const desiredY = getSynovialSurfaceHeight(p.x, p.z) + FLIGHT_HEIGHT;
    p.y += (desiredY - p.y) * (1 - Math.exp(-12 * dt));
    this.updateScale();
    const fade = this.age / this.life;
    this.webMaterial.opacity = Math.max(0, 1 - fade * fade);
    this.coreMaterial.opacity = Math.max(0, 1 - fade);

    this.trailTimer -= dt;
    if (particles && this.trailTimer <= 0) {
      this.trailTimer = 0.028;
      particles.emit(p, trailVelocity.copy(this.velocity).multiplyScalar(-0.08), TRAIL);
    }

    if (this.age >= this.life || Math.hypot(p.x, p.z) > 40) this.deactivate();
  }

  deactivate() {
    this.active = false;
    this.target = null;
    this.group.visible = false;
  }
}

export class NETPool {
  constructor(scene, netTexture, coreTexture, capacity = 56) {
    this.items = [];
    for (let i = 0; i < capacity; i += 1) {
      const projectile = new NETProjectile(netTexture, coreTexture);
      scene.add(projectile.group);
      this.items.push(projectile);
    }
  }

  fire(position, direction, { speed = PROJECTILE.speed, life = PROJECTILE.life } = {}) {
    let projectile = this.items.find((item) => !item.active);
    if (!projectile) {
      // Recycle the oldest free-flying NET.
      projectile = this.items
        .filter((item) => !item.target)
        .sort((a, b) => b.age - a.age)[0];
    }
    if (!projectile) return null;
    projectile.launch(position, direction, speed, life);
    return projectile;
  }

  update(dt, particles) {
    for (const item of this.items) item.update(dt, particles);
  }

  clear() {
    for (const item of this.items) item.deactivate();
  }
}
