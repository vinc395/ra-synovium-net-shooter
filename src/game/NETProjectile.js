import * as THREE from "three";

const DNA_MATERIAL = new THREE.LineBasicMaterial({
  color: 0xd9f8ff,
  transparent: true,
  opacity: 0.82,
});

const PROTEIN_MATERIAL = new THREE.MeshStandardMaterial({
  color: 0xfff5c7,
  emissive: 0x5a4010,
  roughness: 0.35,
  flatShading: true,
});

export class NETProjectile {
  constructor(position, direction) {
    this.group = new THREE.Group();
    this.group.position.copy(position);
    this.velocity = direction.multiplyScalar(24);
    this.age = 0;
    this.life = 1.8;
    this.radius = 0.9;
    this.expired = false;
    this.wrappedTarget = null;
    this.wrapTimer = 0;
    this.createMesh();
  }

  createMesh() {
    this.webLines = [];

    // The projectile is a loose expanding chromatin mesh, with short lines
    // standing in for DNA strands and yellow granules for bound proteins.
    for (let i = 0; i < 9; i += 1) {
      const geometry = new THREE.BufferGeometry();
      const angle = (i / 9) * Math.PI * 2;
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * 0.8, Math.sin(i) * 0.35, Math.sin(angle) * 0.8),
      ];
      geometry.setFromPoints(points);
      const line = new THREE.Line(geometry, DNA_MATERIAL.clone());
      this.webLines.push(line);
      this.group.add(line);
    }

    for (let i = 0; i < 5; i += 1) {
      const protein = new THREE.Mesh(new THREE.TetrahedronGeometry(0.12), PROTEIN_MATERIAL);
      protein.position.set(
        THREE.MathUtils.randFloatSpread(0.8),
        THREE.MathUtils.randFloatSpread(0.55),
        THREE.MathUtils.randFloatSpread(0.8),
      );
      this.group.add(protein);
    }

    this.core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.16, 1),
      new THREE.MeshStandardMaterial({
        color: 0xf8ffff,
        emissive: 0x7eefff,
        roughness: 0.2,
      }),
    );
    this.group.add(this.core);
  }

  update(dt) {
    if (this.expired) return;

    this.age += dt;
    if (this.wrappedTarget) {
      this.wrapTimer += dt;
      this.group.position.lerp(this.wrappedTarget.group.position, 0.35);
      this.group.scale.setScalar(1.25 + Math.sin(this.wrapTimer * 18) * 0.08);
      this.group.rotation.y += dt * 6;
      if (this.wrapTimer > 0.45) {
        this.wrappedTarget.destroyed = true;
        this.expired = true;
      }
      return;
    }

    this.group.position.addScaledVector(this.velocity, dt);
    this.group.rotation.x += dt * 5;
    this.group.rotation.y += dt * 8;
    const scale = 0.55 + this.age * 1.2;
    this.group.scale.setScalar(scale);
    this.radius = scale * 0.9;

    for (const line of this.webLines) {
      line.material.opacity = Math.max(0, 0.85 - this.age * 0.25);
    }

    if (this.age > this.life || this.group.position.length() > 75) {
      this.expired = true;
    }
  }

  wrapTarget(target) {
    this.wrappedTarget = target;
    this.velocity.set(0, 0, 0);
    this.life = this.age + 0.6;
    target.group.add(this.createWrapCage(target.radius));
  }

  createWrapCage(radius) {
    const cage = new THREE.Group();
    for (let i = 0; i < 8; i += 1) {
      const curve = new THREE.EllipseCurve(
        0,
        0,
        radius * 1.15,
        radius * (0.55 + (i % 3) * 0.18),
        0,
        Math.PI * 2,
      );
      const points = curve.getPoints(36).map((point) => new THREE.Vector3(point.x, point.y, 0));
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), DNA_MATERIAL.clone());
      line.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      cage.add(line);
    }
    return cage;
  }

  dispose(scene) {
    scene.remove(this.group);
    this.group.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }
}
