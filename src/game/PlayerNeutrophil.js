import * as THREE from "three";

const MOVE_SPEED = 11;
const ARENA_LIMIT = 31;
const SURFACE_OFFSET = 1.35;

export class PlayerNeutrophil {
  constructor() {
    this.group = new THREE.Group();
    this.cooldown = 0;
    this.lastMove = new THREE.Vector3();
    this.deathTimer = 0;
    this.deathDuration = 1.35;
    this.dying = false;
    this.deathFragments = [];
    this.createBody();
  }

  createBody() {
    const membraneMaterial = new THREE.MeshStandardMaterial({
      color: 0xeefdff,
      emissive: 0x244456,
      roughness: 0.28,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
      flatShading: true,
    });
    const bodyGeometry = new THREE.IcosahedronGeometry(1.55, 3);
    const positions = bodyGeometry.attributes.position;
    for (let i = 0; i < positions.count; i += 1) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      const lumpyEdge =
        1 +
        Math.sin(x * 3.1 + z * 1.7) * 0.08 +
        Math.cos(y * 4.2 + x * 2.4) * 0.06;
      positions.setXYZ(i, x * lumpyEdge, y * lumpyEdge, z * lumpyEdge);
    }
    bodyGeometry.computeVertexNormals();

    const body = new THREE.Mesh(bodyGeometry, membraneMaterial);
    body.scale.set(1.35, 0.72, 1.12);
    body.castShadow = true;
    this.body = body;
    this.group.add(body);

    const nucleusMaterial = new THREE.MeshStandardMaterial({
      color: 0x8f48d6,
      emissive: 0x3b136f,
      roughness: 0.36,
      flatShading: true,
    });

    this.nucleusGroup = new THREE.Group();
    const lobePositions = [
      [-0.68, 0.2, -0.2],
      [-0.2, 0.28, 0.23],
      [0.32, 0.2, -0.16],
      [0.72, 0.08, 0.2],
    ];
    const lobeMeshes = [];
    for (const [index, lobePosition] of lobePositions.entries()) {
      const lobe = new THREE.Mesh(new THREE.SphereGeometry(0.43, 14, 10), nucleusMaterial);
      lobe.position.set(...lobePosition);
      lobe.scale.set(1.28, 0.66, 1.0);
      lobe.rotation.set(0.2 * index, 0.4 * index, -0.15 * index);
      lobe.castShadow = true;
      this.nucleusGroup.add(lobe);
      lobeMeshes.push(lobe);
    }

    const bridgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x6e3da0,
      emissive: 0x2d0c62,
      roughness: 0.55,
      flatShading: true,
    });
    for (let i = 0; i < lobeMeshes.length - 1; i += 1) {
      const start = lobeMeshes[i].position;
      const end = lobeMeshes[i + 1].position;
      const middle = start.clone().lerp(end, 0.5);
      const length = start.distanceTo(end);
      const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, length, 8), bridgeMaterial);
      bridge.position.copy(middle);
      bridge.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        end.clone().sub(start).normalize(),
      );
      this.nucleusGroup.add(bridge);
    }
    // The chained purple lobes are the key neutrophil cue: a multilobed
    // nucleus visible through the pale activated cell membrane.
    this.nucleusGroup.position.y = 0.16;
    this.group.add(this.nucleusGroup);

    const granuleMaterial = new THREE.MeshStandardMaterial({
      color: 0xbbeeff,
      emissive: 0x155f72,
      roughness: 0.35,
      transparent: true,
      opacity: 0.72,
      flatShading: true,
    });
    for (let i = 0; i < 34; i += 1) {
      const granule = new THREE.Mesh(new THREE.DodecahedronGeometry(0.1), granuleMaterial);
      const angle = Math.random() * Math.PI * 2;
      granule.position.set(
        Math.cos(angle) * THREE.MathUtils.randFloat(0.55, 1.35),
        THREE.MathUtils.randFloat(-0.18, 0.6),
        Math.sin(angle) * THREE.MathUtils.randFloat(0.45, 1.05),
      );
      granule.userData.home = granule.position.clone();
      granule.userData.burstDirection = granule.position.clone().normalize();
      this.group.add(granule);
      this.deathFragments.push(granule);
    }

    const pseudopodMaterial = new THREE.MeshStandardMaterial({
      color: 0xeefdff,
      emissive: 0x10262d,
      roughness: 0.34,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      flatShading: true,
    });
    for (let i = 0; i < 7; i += 1) {
      const pod = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 1.05, 4, 7), pseudopodMaterial);
      const angle = (i / 7) * Math.PI * 2;
      pod.position.set(Math.cos(angle) * 1.35, -0.38, Math.sin(angle) * 1.08);
      pod.rotation.set(Math.PI / 2, 0, -angle);
      pod.scale.x = THREE.MathUtils.randFloat(0.8, 1.3);
      pod.castShadow = true;
      this.group.add(pod);
    }

    this.muzzle = new THREE.Object3D();
    this.muzzle.position.set(0, 0.45, -1.65);
    this.group.add(this.muzzle);
    this.reset();
  }

  reset(surfaceHeight = 0) {
    this.group.position.set(0, surfaceHeight + SURFACE_OFFSET, 9);
    this.group.rotation.set(0, 0, 0);
    this.group.scale.set(1, 1, 1);
    this.group.visible = true;
    this.cooldown = 0;
    this.deathTimer = 0;
    this.dying = false;
    this.body.material.opacity = 0.36;
    this.nucleusGroup.visible = true;
    this.nucleusGroup.scale.set(1, 1, 1);
    for (const fragment of this.deathFragments) {
      fragment.visible = true;
      fragment.position.copy(fragment.userData.home);
      fragment.scale.set(1, 1, 1);
      fragment.material.opacity = 0.72;
    }
  }

  update(dt, keys, aimPoint, surfaceHeight = 0) {
    if (this.dying) {
      this.updateDeath(dt);
      return;
    }

    this.cooldown = Math.max(0, this.cooldown - dt);

    const input = new THREE.Vector3();
    if (keys.has("w") || keys.has("arrowup")) input.z -= 1;
    if (keys.has("s") || keys.has("arrowdown")) input.z += 1;
    if (keys.has("a") || keys.has("arrowleft")) input.x -= 1;
    if (keys.has("d") || keys.has("arrowright")) input.x += 1;

    if (input.lengthSq() > 0) {
      input.normalize();
      this.lastMove.copy(input);
      this.group.position.addScaledVector(input, MOVE_SPEED * dt);
      this.group.position.x = THREE.MathUtils.clamp(this.group.position.x, -ARENA_LIMIT, ARENA_LIMIT);
      this.group.position.z = THREE.MathUtils.clamp(this.group.position.z, -ARENA_LIMIT, ARENA_LIMIT);

      // Rolling/crawling motion evokes a neutrophil migrating along inflamed
      // synovial tissue instead of a vehicle sliding over a floor.
      this.group.rotation.z = Math.sin(performance.now() * 0.011) * 0.12;
      this.group.rotation.x = Math.cos(performance.now() * 0.013) * 0.08;
    }

    this.group.position.y = THREE.MathUtils.lerp(
      this.group.position.y,
      surfaceHeight + SURFACE_OFFSET,
      1 - Math.pow(0.0001, dt),
    );

    const direction = aimPoint.clone().sub(this.group.position);
    direction.y = 0;
    if (direction.lengthSq() > 0.01) {
      const targetYaw = Math.atan2(direction.x, direction.z);
      this.group.rotation.y = targetYaw;
    }
  }

  canFire() {
    return this.cooldown <= 0;
  }

  markFired() {
    this.cooldown = 0.22;
  }

  beginDeathBurst() {
    if (this.dying) return;
    this.dying = true;
    this.deathTimer = 0;
    this.cooldown = 999;
  }

  updateDeath(dt) {
    this.deathTimer += dt;
    const t = Math.min(1, this.deathTimer / this.deathDuration);
    const easeOut = 1 - Math.pow(1 - t, 3);

    // When health reaches zero, the activated neutrophil ruptures in a
    // stylised NETosis-like burst instead of simply disappearing.
    this.body.scale.setScalar(1 + easeOut * 2.2);
    this.body.material.opacity = Math.max(0, 0.36 * (1 - t));
    this.nucleusGroup.scale.setScalar(1 + easeOut * 0.65);
    this.nucleusGroup.rotation.y += dt * 5;

    for (const fragment of this.deathFragments) {
      const direction = fragment.userData.burstDirection;
      fragment.position.copy(fragment.userData.home).addScaledVector(direction, easeOut * 4.2);
      fragment.position.y += Math.sin(easeOut * Math.PI) * 1.2;
      fragment.scale.setScalar(1 + easeOut * 1.6);
      fragment.material.opacity = Math.max(0, 0.72 * (1 - t * 0.8));
    }

    this.group.rotation.y += dt * 2.2;
    if (t >= 1) {
      this.group.visible = false;
    }
  }

  deathFinished() {
    return this.dying && this.deathTimer >= this.deathDuration;
  }

  getMuzzleWorldPosition() {
    const position = new THREE.Vector3();
    this.muzzle.getWorldPosition(position);
    return position;
  }

  getAimDirection(aimPoint) {
    const direction = aimPoint.clone().sub(this.getMuzzleWorldPosition());
    direction.y = Math.max(direction.y + 1.8, 0.45);
    if (direction.lengthSq() < 0.01) {
      direction.set(0, 0.2, -1);
    }
    return direction.normalize();
  }
}
