import * as THREE from "three";

const TYPES = ["complex", "platelet", "debris", "cytokine", "synoviocyte", "complement"];
const ARENA_EDGE = 34;

export class TargetFactory {
  create(wave) {
    const type = TYPES[Math.floor(Math.random() * TYPES.length)];
    const angle = Math.random() * Math.PI * 2;
    const position = new THREE.Vector3(
      Math.cos(angle) * ARENA_EDGE,
      1.1 + Math.random() * 4,
      Math.sin(angle) * ARENA_EDGE,
    );
    return new InflammatoryTarget(type, position, wave);
  }
}

export class InflammatoryTarget {
  constructor(kind, position, wave) {
    this.kind = kind;
    this.group = new THREE.Group();
    this.group.position.copy(position);
    this.wave = wave;
    this.radius = 1;
    this.speed = 1.2 + wave * 0.15 + Math.random() * 0.7;
    this.captured = false;
    this.destroyed = false;
    this.contactDamage = 0;
    this.inflammationPenalty = 5;
    this.inflammationRelief = 6;
    this.wobble = Math.random() * Math.PI * 2;
    this.createByKind();
  }

  createByKind() {
    if (this.kind === "complex") this.createImmuneComplex();
    if (this.kind === "platelet") this.createPlateletMicrothrombus();
    if (this.kind === "debris") this.createCitrullinatedDebris();
    if (this.kind === "cytokine") this.createCytokineCloud();
    if (this.kind === "synoviocyte") this.createInvasiveSynoviocyte();
    if (this.kind === "complement") this.createComplementBurst();
  }

  createImmuneComplex() {
    this.radius = 1.1;
    this.inflammationPenalty = 7;
    this.inflammationRelief = 8;
    const material = new THREE.MeshStandardMaterial({
      color: 0xffd8f4,
      emissive: 0x66265b,
      roughness: 0.35,
      flatShading: true,
    });
    for (let i = 0; i < 9; i += 1) {
      const bead = new THREE.Mesh(new THREE.OctahedronGeometry(0.28), material);
      bead.position.set(THREE.MathUtils.randFloatSpread(1.4), THREE.MathUtils.randFloatSpread(1.0), THREE.MathUtils.randFloatSpread(1.4));
      this.group.add(bead);
    }
  }

  createPlateletMicrothrombus() {
    this.radius = 1.2;
    this.speed *= 0.75;
    this.inflammationPenalty = 8;
    this.inflammationRelief = 5;
    const plateletMaterial = new THREE.MeshStandardMaterial({
      color: 0xf3b04d,
      emissive: 0x5c2504,
      roughness: 0.55,
      flatShading: true,
    });
    for (let i = 0; i < 7; i += 1) {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.42, 0.18, 8), plateletMaterial);
      disc.position.set(THREE.MathUtils.randFloatSpread(1.4), THREE.MathUtils.randFloatSpread(0.7), THREE.MathUtils.randFloatSpread(1.4));
      disc.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      disc.castShadow = true;
      this.group.add(disc);
    }
  }

  createCitrullinatedDebris() {
    this.radius = 0.95;
    this.inflammationPenalty = 6;
    this.inflammationRelief = 7;
    const material = new THREE.MeshStandardMaterial({
      color: 0xffc63a,
      emissive: 0x5a3500,
      roughness: 0.7,
      flatShading: true,
    });
    for (let i = 0; i < 5; i += 1) {
      const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(0.42), material);
      shard.position.set(THREE.MathUtils.randFloatSpread(1.1), THREE.MathUtils.randFloatSpread(0.9), THREE.MathUtils.randFloatSpread(1.1));
      shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      this.group.add(shard);
    }
  }

  createCytokineCloud() {
    this.radius = 1.35;
    this.speed *= 0.55;
    this.inflammationPenalty = 9;
    this.inflammationRelief = 10;
    const material = new THREE.MeshStandardMaterial({
      color: 0xff4d9a,
      emissive: 0xa2104f,
      transparent: true,
      opacity: 0.62,
      roughness: 0.3,
      flatShading: true,
    });
    const cloud = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 1), material);
    this.group.add(cloud);
  }

  createInvasiveSynoviocyte() {
    this.radius = 1.35;
    this.speed *= 0.95;
    this.inflammationPenalty = 10;
    this.inflammationRelief = 6;
    const material = new THREE.MeshStandardMaterial({
      color: 0xb555b7,
      emissive: 0x3d0d3e,
      roughness: 0.72,
      flatShading: true,
    });
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), material);
    body.scale.set(1.8, 0.55, 1);
    body.castShadow = true;
    this.group.add(body);
    for (let i = 0; i < 5; i += 1) {
      const foot = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 1.2, 3, 5), material);
      foot.position.set(-1 + i * 0.5, -0.15, Math.sin(i) * 0.7);
      foot.rotation.z = Math.PI / 2;
      this.group.add(foot);
    }
  }

  createComplementBurst() {
    this.radius = 0.9;
    this.speed *= 1.55;
    this.contactDamage = 19;
    this.inflammationPenalty = 7;
    this.inflammationRelief = 7;
    const material = new THREE.MeshStandardMaterial({
      color: 0x9dfbff,
      emissive: 0x008c99,
      roughness: 0.25,
      flatShading: true,
    });
    const burst = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 0), material);
    this.group.add(burst);
  }

  update(dt, playerPosition) {
    if (this.captured) {
      this.group.scale.lerp(new THREE.Vector3(0.05, 0.05, 0.05), 0.08);
      return;
    }

    const direction = playerPosition.clone().sub(this.group.position);
    direction.y *= 0.2;
    direction.normalize();
    this.group.position.addScaledVector(direction, this.speed * dt);
    this.group.position.y += Math.sin(performance.now() * 0.003 + this.wobble) * dt * 0.5;
    this.group.rotation.y += dt * (0.8 + this.wave * 0.05);
    this.group.rotation.x += dt * 0.35;
  }

  capture() {
    this.captured = true;
    // FLS targets are suppressed/immobilised by NETs in this arcade model;
    // the same captured state is used for all target removal animations.
  }

  isHazardousNear(playerPosition) {
    if (this.captured || this.contactDamage <= 0) return false;
    return this.group.position.distanceTo(playerPosition) < this.radius + 1.4;
  }

  escaped() {
    if (this.captured) return false;
    return Math.abs(this.group.position.x) < 2 && Math.abs(this.group.position.z) < 2;
  }

  dispose(scene) {
    scene.remove(this.group);
    this.group.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }
}
