import * as THREE from "three";
import { getSurfaceNormal, getSynovialSurfaceHeight } from "./terrain.js";

const UP = new THREE.Vector3(0, 1, 0);
const tmpColor = new THREE.Color();
const tmpNormal = new THREE.Vector3();

/**
 * Pooled additive particle system (one draw call for every spark, trail and
 * burst in the game).
 */
export class ParticleSystem {
  constructor(scene, texture, capacity = 1400) {
    this.capacity = capacity;
    this.count = 0;
    this.positions = new Float32Array(capacity * 3);
    this.colors = new Float32Array(capacity * 3);
    this.sizes = new Float32Array(capacity);
    this.alphas = new Float32Array(capacity);
    this.velocities = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.baseSize = new Float32Array(capacity);
    this.drag = new Float32Array(capacity);
    this.gravity = new Float32Array(capacity);

    const geometry = new THREE.BufferGeometry();
    this.positionAttr = new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage);
    this.colorAttr = new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(this.sizes, 1).setUsage(THREE.DynamicDrawUsage);
    this.alphaAttr = new THREE.BufferAttribute(this.alphas, 1).setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", this.positionAttr);
    geometry.setAttribute("color", this.colorAttr);
    geometry.setAttribute("size", this.sizeAttr);
    geometry.setAttribute("alpha", this.alphaAttr);
    geometry.setDrawRange(0, 0);
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uScale: { value: 400 },
      },
      vertexShader: /* glsl */ `
        attribute float size;
        attribute float alpha;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uScale;
        void main() {
          vColor = color;
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(0.1, -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor * 1.6, tex.a * vAlpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(geometry, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 10;
    scene.add(this.points);
  }

  setViewport(heightPixels, fovDegrees) {
    this.material.uniforms.uScale.value =
      heightPixels / (2 * Math.tan(THREE.MathUtils.degToRad(fovDegrees) / 2));
  }

  emit(position, velocity, { color = 0xffffff, size = 0.4, life = 0.6, drag = 2, gravity = 0 } = {}) {
    if (this.count >= this.capacity) return;
    const i = this.count;
    this.count += 1;
    this.positions[i * 3] = position.x;
    this.positions[i * 3 + 1] = position.y;
    this.positions[i * 3 + 2] = position.z;
    this.velocities[i * 3] = velocity.x;
    this.velocities[i * 3 + 1] = velocity.y;
    this.velocities[i * 3 + 2] = velocity.z;
    tmpColor.set(color);
    this.colors[i * 3] = tmpColor.r;
    this.colors[i * 3 + 1] = tmpColor.g;
    this.colors[i * 3 + 2] = tmpColor.b;
    this.baseSize[i] = size;
    this.sizes[i] = size;
    this.alphas[i] = 1;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.drag[i] = drag;
    this.gravity[i] = gravity;
  }

  burst(position, { count = 20, color = 0xffffff, speed = 6, size = 0.45, life = 0.7, spread = 1, upward = 0.4, drag = 3, gravity = -2 } = {}) {
    const velocity = new THREE.Vector3();
    for (let i = 0; i < count; i += 1) {
      velocity
        .set(Math.random() * 2 - 1, (Math.random() * 2 - 1) * spread + upward, Math.random() * 2 - 1)
        .normalize()
        .multiplyScalar(speed * (0.35 + Math.random() * 0.65));
      this.emit(position, velocity, {
        color,
        size: size * (0.6 + Math.random() * 0.8),
        life: life * (0.6 + Math.random() * 0.6),
        drag,
        gravity,
      });
    }
  }

  clear() {
    this.count = 0;
    this.points.geometry.setDrawRange(0, 0);
  }

  copyParticle(from, to) {
    for (let k = 0; k < 3; k += 1) {
      this.positions[to * 3 + k] = this.positions[from * 3 + k];
      this.velocities[to * 3 + k] = this.velocities[from * 3 + k];
      this.colors[to * 3 + k] = this.colors[from * 3 + k];
    }
    this.baseSize[to] = this.baseSize[from];
    this.sizes[to] = this.sizes[from];
    this.alphas[to] = this.alphas[from];
    this.life[to] = this.life[from];
    this.maxLife[to] = this.maxLife[from];
    this.drag[to] = this.drag[from];
    this.gravity[to] = this.gravity[from];
  }

  update(dt) {
    let i = 0;
    while (i < this.count) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.count -= 1;
        if (i !== this.count) this.copyParticle(this.count, i);
        continue;
      }
      const damping = Math.exp(-this.drag[i] * dt);
      this.velocities[i * 3] *= damping;
      this.velocities[i * 3 + 1] = this.velocities[i * 3 + 1] * damping + this.gravity[i] * dt;
      this.velocities[i * 3 + 2] *= damping;
      this.positions[i * 3] += this.velocities[i * 3] * dt;
      this.positions[i * 3 + 1] += this.velocities[i * 3 + 1] * dt;
      this.positions[i * 3 + 2] += this.velocities[i * 3 + 2] * dt;
      const t = this.life[i] / this.maxLife[i];
      this.alphas[i] = Math.min(1, t * 1.6);
      this.sizes[i] = this.baseSize[i] * (0.4 + 0.6 * t);
      i += 1;
    }
    this.points.geometry.setDrawRange(0, this.count);
    if (this.count > 0) {
      this.positionAttr.needsUpdate = true;
      this.colorAttr.needsUpdate = true;
      this.sizeAttr.needsUpdate = true;
      this.alphaAttr.needsUpdate = true;
    }
  }
}

/** Expanding glow rings that hug the tissue surface (shockwaves, spawns). */
export class RingPool {
  constructor(scene, texture, capacity = 14) {
    this.items = [];
    const geometry = new THREE.PlaneGeometry(2, 2);
    for (let i = 0; i < capacity; i += 1) {
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: 0xffffff,
        polygonOffset: true,
        polygonOffsetFactor: -4,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      mesh.renderOrder = 5;
      scene.add(mesh);
      this.items.push({ mesh, age: 0, life: 1, from: 1, to: 4, active: false, opacity: 1 });
    }
  }

  spawn(position, { color = 0xffffff, from = 0.5, to = 5, life = 0.6, opacity = 0.9 } = {}) {
    const item = this.items.find((entry) => !entry.active) || this.items[0];
    item.active = true;
    item.age = 0;
    item.life = life;
    item.from = from;
    item.to = to;
    item.opacity = opacity;
    item.mesh.visible = true;
    item.mesh.material.color.set(color);
    const y = getSynovialSurfaceHeight(position.x, position.z) + 0.12;
    item.mesh.position.set(position.x, y, position.z);
    getSurfaceNormal(position.x, position.z, tmpNormal);
    item.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tmpNormal);
    item.mesh.scale.setScalar(from);
  }

  update(dt) {
    for (const item of this.items) {
      if (!item.active) continue;
      item.age += dt;
      const t = Math.min(1, item.age / item.life);
      const eased = 1 - Math.pow(1 - t, 3);
      item.mesh.scale.setScalar(item.from + (item.to - item.from) * eased);
      item.mesh.material.opacity = item.opacity * (1 - t);
      if (t >= 1) {
        item.active = false;
        item.mesh.visible = false;
      }
    }
  }

  clear() {
    for (const item of this.items) {
      item.active = false;
      item.mesh.visible = false;
    }
  }
}

/**
 * NET residue left on the tissue after captures. Its visibility tracks the
 * NET burden so players can literally see chromatin webbing accumulate.
 */
export class NetResidue {
  constructor(scene, texture, capacity = 26) {
    this.items = [];
    this.cursor = 0;
    const geometry = new THREE.PlaneGeometry(1, 1);
    this.material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      color: 0xc9f6ff,
      blending: THREE.AdditiveBlending,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    for (let i = 0; i < capacity; i += 1) {
      const mesh = new THREE.Mesh(geometry, this.material);
      mesh.visible = false;
      mesh.renderOrder = 4;
      scene.add(mesh);
      this.items.push(mesh);
    }
  }

  add(position, size = 3) {
    const mesh = this.items[this.cursor];
    this.cursor = (this.cursor + 1) % this.items.length;
    const y = getSynovialSurfaceHeight(position.x, position.z) + 0.08;
    mesh.position.set(position.x, y, position.z);
    getSurfaceNormal(position.x, position.z, tmpNormal);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tmpNormal);
    mesh.rotateZ(Math.random() * Math.PI * 2);
    mesh.scale.setScalar(size * (0.8 + Math.random() * 0.5));
    mesh.visible = true;
  }

  update(netBurden) {
    this.material.opacity = 0.12 + (netBurden / 100) * 0.55;
  }

  clear() {
    for (const mesh of this.items) mesh.visible = false;
    this.cursor = 0;
  }
}

export { UP };
