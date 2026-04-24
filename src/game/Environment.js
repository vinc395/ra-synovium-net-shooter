import * as THREE from "three";

const tissuePink = new THREE.Color(0xb74374);
const tissuePurple = new THREE.Color(0x5d214d);

export function getSynovialSurfaceHeight(x, z) {
  return (
    Math.sin(x * 0.35) * 0.9 +
    Math.cos(z * 0.28) * 0.7 +
    Math.sin((x + z) * 0.18) * 0.65
  );
}

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.cytokines = [];
    this.hypoxicPatches = [];
    this.cameraSideWall = null;
    scene.add(this.group);
    this.createSynovialFloor();
    this.createSynovialBackdrop();
    this.createFoldedLining();
    this.createBloodVessels();
    this.createStromalCells();
    this.createImmuneClusters();
    this.createECM();
    this.createCytokineSignals();
    this.createHypoxicRegions();
  }

  createSynovialFloor() {
    const geometry = new THREE.PlaneGeometry(70, 70, 28, 28);
    geometry.rotateX(-Math.PI / 2);

    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i += 1) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      positions.setY(i, getSynovialSurfaceHeight(x, z));
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: 0xb3436d,
      roughness: 0.78,
      metalness: 0.02,
      flatShading: true,
    });
    const floor = new THREE.Mesh(geometry, material);
    floor.receiveShadow = true;
    this.group.add(floor);
  }

  createSynovialBackdrop() {
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x9f386c,
      emissive: 0x250819,
      roughness: 0.82,
      metalness: 0.02,
      flatShading: true,
      side: THREE.DoubleSide,
    });
    const innerFoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd15a88,
      emissive: 0x2a0718,
      roughness: 0.76,
      flatShading: true,
    });

    const wallGeometry = new THREE.PlaneGeometry(72, 26, 18, 8);
    const deformWall = (geometry, phase = 0) => {
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i += 1) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const bulge =
          Math.sin(x * 0.23 + phase) * 1.4 +
          Math.cos(y * 0.55 + phase) * 0.9;
        positions.setZ(i, bulge);
      }
      geometry.computeVertexNormals();
    };

    const walls = [
      { position: [0, 11, -35], rotation: [0, 0, 0], phase: 0, cameraSide: false },
      { position: [0, 11, 35], rotation: [0, Math.PI, 0], phase: 1.8, cameraSide: true },
      { position: [-35, 11, 0], rotation: [0, Math.PI / 2, 0], phase: 3.2, cameraSide: false },
      { position: [35, 11, 0], rotation: [0, -Math.PI / 2, 0], phase: 4.7, cameraSide: false },
    ];

    for (const wallConfig of walls) {
      const geometry = wallGeometry.clone();
      deformWall(geometry, wallConfig.phase);
      const material = wallMaterial.clone();
      if (wallConfig.cameraSide) {
        material.transparent = true;
        material.opacity = 0.82;
        material.depthWrite = false;
      }
      const wall = new THREE.Mesh(geometry, material);
      wall.position.set(...wallConfig.position);
      wall.rotation.set(...wallConfig.rotation);
      wall.receiveShadow = true;
      if (wallConfig.cameraSide) this.cameraSideWall = wall;
      this.group.add(wall);
    }

    const ceilingGeometry = new THREE.PlaneGeometry(72, 72, 18, 18);
    const ceilingPositions = ceilingGeometry.attributes.position;
    for (let i = 0; i < ceilingPositions.count; i += 1) {
      const x = ceilingPositions.getX(i);
      const y = ceilingPositions.getY(i);
      ceilingPositions.setZ(
        i,
        Math.sin(x * 0.18) * 1.5 + Math.cos(y * 0.24) * 1.1,
      );
    }
    ceilingGeometry.computeVertexNormals();
    const ceiling = new THREE.Mesh(ceilingGeometry, wallMaterial);
    ceiling.position.set(0, 24, 0);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.receiveShadow = true;
    this.group.add(ceiling);

    for (let i = 0; i < 34; i += 1) {
      const fold = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.35 + Math.random() * 0.55, 8 + Math.random() * 12, 4, 8),
        innerFoldMaterial,
      );
      const side = Math.floor(Math.random() * 4);
      if (side === 0) fold.position.set(THREE.MathUtils.randFloatSpread(62), 7 + Math.random() * 13, -33.5);
      if (side === 1) fold.position.set(THREE.MathUtils.randFloatSpread(62), 7 + Math.random() * 13, 33.5);
      if (side === 2) fold.position.set(-33.5, 7 + Math.random() * 13, THREE.MathUtils.randFloatSpread(62));
      if (side === 3) fold.position.set(33.5, 7 + Math.random() * 13, THREE.MathUtils.randFloatSpread(62));
      fold.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );
      fold.castShadow = true;
      this.group.add(fold);
    }

    const vesselMaterial = new THREE.MeshStandardMaterial({
      color: 0xf03b78,
      emissive: 0x7b102b,
      roughness: 0.5,
      flatShading: true,
    });
    for (let i = 0; i < 14; i += 1) {
      const vessel = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.32, 9, 7), vesselMaterial);
      const angle = (i / 14) * Math.PI * 2;
      vessel.position.set(Math.cos(angle) * 34, 8 + Math.random() * 10, Math.sin(angle) * 34);
      vessel.rotation.set(Math.PI / 2, angle, Math.random() * Math.PI);
      vessel.castShadow = true;
      this.group.add(vessel);
    }
  }

  createFoldedLining() {
    const material = new THREE.MeshStandardMaterial({
      color: 0xd65b88,
      roughness: 0.7,
      flatShading: true,
    });

    for (let i = 0; i < 18; i += 1) {
      const fold = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.7 + Math.random() * 0.7, 8 + Math.random() * 9, 4, 8),
        material,
      );
      fold.position.set(-33 + i * 4, 1.2 + Math.random() * 1.2, -28 + Math.sin(i) * 8);
      fold.rotation.set(Math.PI / 2, 0.2 * Math.sin(i), Math.PI / 2 + i * 0.15);
      fold.castShadow = true;
      this.group.add(fold);
    }
  }

  createBloodVessels() {
    const vesselMaterial = new THREE.MeshStandardMaterial({
      color: 0xe61e62,
      emissive: 0x5d001e,
      roughness: 0.45,
      flatShading: true,
    });

    for (let i = 0; i < 5; i += 1) {
      const vessel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.8, 18, 7), vesselMaterial);
      vessel.position.set(-24 + i * 12, 1.7, 18 + Math.sin(i) * 3);
      vessel.rotation.set(Math.PI / 2, 0, i * 0.5);
      vessel.castShadow = true;
      this.group.add(vessel);
    }
  }

  createStromalCells() {
    const material = new THREE.MeshStandardMaterial({
      color: 0xa04a96,
      roughness: 0.75,
      flatShading: true,
    });

    for (let i = 0; i < 24; i += 1) {
      const cell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), material);
      cell.position.set(
        THREE.MathUtils.randFloatSpread(56),
        0.8,
        THREE.MathUtils.randFloatSpread(48),
      );
      cell.scale.set(1.9, 0.55, 0.9);
      cell.rotation.y = Math.random() * Math.PI;
      cell.castShadow = true;
      this.group.add(cell);
    }
  }

  createImmuneClusters() {
    const matA = new THREE.MeshStandardMaterial({ color: 0xf8e7ff, flatShading: true });
    const matB = new THREE.MeshStandardMaterial({ color: 0xff8dbb, flatShading: true });

    for (let c = 0; c < 8; c += 1) {
      const cluster = new THREE.Group();
      cluster.position.set(THREE.MathUtils.randFloatSpread(54), 0.7, THREE.MathUtils.randFloatSpread(50));
      for (let i = 0; i < 7; i += 1) {
        const cell = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35 + Math.random() * 0.15), i % 2 ? matA : matB);
        cell.position.set(THREE.MathUtils.randFloatSpread(2.2), Math.random() * 0.8, THREE.MathUtils.randFloatSpread(2.2));
        cell.castShadow = true;
        cluster.add(cell);
      }
      this.group.add(cluster);
    }
  }

  createECM() {
    const collagenMaterial = new THREE.LineBasicMaterial({
      color: 0xffbdd8,
      transparent: true,
      opacity: 0.35,
    });
    const fibrinMaterial = new THREE.LineBasicMaterial({
      color: 0xf5e8b5,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < 95; i += 1) {
      const points = [];
      const start = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(64),
        0.12 + Math.random() * 0.35,
        THREE.MathUtils.randFloatSpread(64),
      );
      for (let p = 0; p < 4; p += 1) {
        points.push(
          start.clone().add(new THREE.Vector3(p * 1.2, Math.sin(p + i) * 0.2, Math.cos(p * 1.7 + i) * 0.9)),
        );
      }
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        i % 3 === 0 ? fibrinMaterial : collagenMaterial,
      );
      this.group.add(line);
    }
  }

  createCytokineSignals() {
    const labels = ["TNF", "IL-6", "IL-1B"];
    for (let i = 0; i < 14; i += 1) {
      const material = new THREE.MeshStandardMaterial({
        color: 0xff5fa2,
        emissive: 0x821043,
        transparent: true,
        opacity: 0.45,
        roughness: 0.35,
      });
      const cloud = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0 + Math.random() * 0.9, 1), material);
      cloud.position.set(
        THREE.MathUtils.randFloatSpread(56),
        2.5 + Math.random() * 5.5,
        THREE.MathUtils.randFloatSpread(48),
      );
      cloud.userData.label = labels[i % labels.length];
      this.cytokines.push(cloud);
      this.group.add(cloud);
    }
  }

  createHypoxicRegions() {
    const material = new THREE.MeshStandardMaterial({
      color: 0x3c1644,
      emissive: 0x120514,
      transparent: true,
      opacity: 0.72,
      roughness: 0.85,
      flatShading: true,
    });

    for (let i = 0; i < 7; i += 1) {
      const patch = new THREE.Mesh(new THREE.CircleGeometry(3 + Math.random() * 3, 9), material);
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(
        THREE.MathUtils.randFloatSpread(58),
        0.08,
        THREE.MathUtils.randFloatSpread(54),
      );
      this.hypoxicPatches.push(patch);
      this.group.add(patch);
    }
  }

  update(dt, state, playerPosition = new THREE.Vector3()) {
    for (const [index, cloud] of this.cytokines.entries()) {
      cloud.rotation.x += dt * (0.25 + index * 0.01);
      cloud.rotation.y += dt * 0.4;
      const pulse = 1 + Math.sin(performance.now() * 0.0018 + index) * 0.08;
      cloud.scale.setScalar(pulse);
      cloud.material.opacity = THREE.MathUtils.clamp(0.28 + state.inflammation / 230, 0.3, 0.72);
    }

    for (const patch of this.hypoxicPatches) {
      patch.scale.setScalar(1 + state.netBurden / 240);
    }

    const mixed = tissuePink.clone().lerp(tissuePurple, state.netBurden / 150);
    this.scene.fog.color.lerp(mixed, dt * 0.25);

    if (this.cameraSideWall) {
      // The camera follows from the positive-Z side. Fade that synovial wall
      // as the neutrophil crawls toward the bottom edge so the tissue still
      // feels enclosed without hiding the player.
      const fade = THREE.MathUtils.smoothstep(playerPosition.z, 16, 30);
      this.cameraSideWall.material.opacity = THREE.MathUtils.lerp(0.82, 0.18, fade);
    }
  }
}
