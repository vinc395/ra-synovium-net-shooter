import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { ARENA } from "./config.js";
import { getSynovialSurfaceHeight, smoothstep } from "./terrain.js";
import {
  createBackgroundTexture,
  createCartilageTexture,
  createCloudTexture,
  createTissueTextures,
  mulberry32,
} from "./textures.js";
import {
  createCartilageMaterial,
  createFloorMaterial,
  createVilliMaterial,
  withRim,
} from "./materials.js";

export { getSynovialSurfaceHeight };

const MAX_VILLI = 300;
const MAX_MOTES = 700;
const RBC_PER_VESSEL = 14;

const baseFog = new THREE.Color(0x5e1a45);
const inflamedFog = new THREE.Color(0x8a1838);
const netFog = new THREE.Color(0x3c1a52);
const calmRing = new THREE.Color(0x9ff6ff);
const threatRing = new THREE.Color(0xff3d6e);

/** Pre-sampled curve so per-frame lookups are cheap. */
class CurveTable {
  constructor(curve, samples = 160) {
    this.points = curve.getSpacedPoints(samples);
  }

  sample(t, out) {
    const f = THREE.MathUtils.clamp(t, 0, 1) * (this.points.length - 1);
    const i = Math.floor(f);
    const j = Math.min(this.points.length - 1, i + 1);
    return out.copy(this.points[i]).lerp(this.points[j], f - i);
  }
}

/**
 * Procedural RA synovial joint cavity. Each create*() method is a small
 * "factory" for one anatomical element, built in blockout → material →
 * animation passes.
 */
export class Environment {
  constructor(scene, renderer, quality) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = "synovium";
    scene.add(this.group);
    this.random = mulberry32(2026);
    this.time = 0;
    this.spawnPoints = [];
    this.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

    const tissue = createTissueTextures(quality.textureSize, this.anisotropy);
    this.tissueMap = tissue.map;
    this.tissueNormal = tissue.normalMap;

    this.createAtmosphere();
    this.createFloor();
    this.createCartilage();
    this.createCapsuleWall();
    this.createVilli();
    this.createVessels();
    this.createResidentCells();
    this.createCollagen();
    this.createMotes();
    this.createCytokineHaze();
    this.setQuality(quality);
  }

  rand(min = 0, max = 1) {
    return min + (max - min) * this.random();
  }

  createAtmosphere() {
    this.scene.background = createBackgroundTexture();
    this.scene.fog = new THREE.FogExp2(baseFog.getHex(), 0.0105);
  }

  createFloor() {
    const size = 130;
    const segments = 150;
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);
    const positions = geometry.attributes.position;
    const uvs = geometry.attributes.uv;
    const colors = new Float32Array(positions.count * 3);
    const repeat = size / 16;

    for (let i = 0; i < positions.count; i += 1) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      positions.setY(i, getSynovialSurfaceHeight(x, z));
      uvs.setXY(i, uvs.getX(i) * repeat, uvs.getY(i) * repeat);

      // Pannus margin around the cartilage is the most inflamed (redder);
      // the periphery under the capsule is darker.
      const r = Math.hypot(x, z);
      const pannus =
        smoothstep(ARENA.cartilageRadius, ARENA.cartilageRadius + 1.6, r) *
        (1 - smoothstep(ARENA.cartilageRadius + 2.2, ARENA.cartilageRadius + 6, r));
      const shade = 1 - smoothstep(27, 38, r) * 0.3 - smoothstep(37, 44, r) * 0.35;
      colors[i * 3] = shade;
      colors[i * 3 + 1] = shade * (1 - pannus * 0.28);
      colors[i * 3 + 2] = shade * (1 - pannus * 0.22);
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    this.floorMaterial = createFloorMaterial({
      map: this.tissueMap,
      normalMap: this.tissueNormal,
      normalScale: new THREE.Vector2(0.9, 0.9),
      roughness: 0.48,
      metalness: 0,
      vertexColors: true,
    });
    const floor = new THREE.Mesh(geometry, this.floorMaterial);
    floor.receiveShadow = true;
    floor.name = "synovial-floor";
    this.group.add(floor);
  }

  createCartilage() {
    const R = ARENA.cartilageRadius;
    const geometry = new THREE.RingGeometry(0.001, R, 72, 12);
    geometry.rotateX(-Math.PI / 2);
    const positions = geometry.attributes.position;
    const uvs = geometry.attributes.uv;
    for (let i = 0; i < positions.count; i += 1) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      const r = Math.hypot(x, z);
      // The dome itself lives in the terrain height, so the neutrophil rides
      // over it; the cartilage layer sits just above and bevels into the floor.
      const bevel = smoothstep(R - 0.45, R, r) * 0.12;
      positions.setY(i, getSynovialSurfaceHeight(x, z) + 0.06 - bevel);
      uvs.setXY(i, x * 0.22, z * 0.22);
    }
    geometry.computeVertexNormals();

    this.cartilageMaterial = createCartilageMaterial({
      map: createCartilageTexture(256, this.anisotropy),
      color: 0xb4c2d0,
      roughness: 0.4,
      metalness: 0,
      emissive: 0x080d12,
    });
    const cartilage = new THREE.Mesh(geometry, this.cartilageMaterial);
    cartilage.receiveShadow = true;
    cartilage.name = "articular-cartilage";
    this.group.add(cartilage);

    // Glowing boundary of the "protect" zone, draped on the surface. Vertex
    // colours fade the band in and out (additive, so black = invisible).
    const zoneGeometry = new THREE.RingGeometry(R - 0.25, R + 1.05, 120, 2);
    zoneGeometry.rotateX(-Math.PI / 2);
    const zp = zoneGeometry.attributes.position;
    const zoneColors = new Float32Array(zp.count * 3);
    for (let i = 0; i < zp.count; i += 1) {
      const x = zp.getX(i);
      const z = zp.getZ(i);
      const r = Math.hypot(x, z);
      zp.setY(i, getSynovialSurfaceHeight(x, z) + 0.14);
      const band = Math.abs(r - (R + 0.4)) < 0.2 ? 1 : 0;
      zoneColors[i * 3] = band;
      zoneColors[i * 3 + 1] = band;
      zoneColors[i * 3 + 2] = band;
    }
    zoneGeometry.setAttribute("color", new THREE.BufferAttribute(zoneColors, 3));
    this.zoneMaterial = new THREE.MeshBasicMaterial({
      color: calmRing,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const zone = new THREE.Mesh(zoneGeometry, this.zoneMaterial);
    zone.renderOrder = 3;
    this.zone = zone;
    this.group.add(zone);
  }

  createCapsuleWall() {
    const A = 180;
    const V = 22;
    const positions = [];
    const uvs = [];
    const indices = [];
    for (let j = 0; j <= V; j += 1) {
      const v = j / V;
      for (let i = 0; i <= A; i += 1) {
        const u = i / A;
        const theta = u * Math.PI * 2;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        // The camera always looks towards -Z, so the near (+Z) side of the
        // capsule stays low and never hides the neutrophil.
        const front = smoothstep(-0.2, 0.62, sin);
        const height = 17.5 - 14.6 * front;
        const bulge =
          Math.sin(theta * 11 + v * 2.1) * 0.7 +
          Math.sin(theta * 27 - v * 3.3) * 0.35 +
          Math.cos(theta * 5 + v * 1.3) * 0.9;
        const overhang = v * v * 3.4 * (1 - front);
        const r = ARENA.wallRadius + bulge * (0.4 + v * 0.6) - overhang;
        const yBase = getSynovialSurfaceHeight(cos * ARENA.wallRadius, sin * ARENA.wallRadius) - 0.9;
        positions.push(cos * r, yBase + v * height, sin * r);
        uvs.push(u * 22, (v * height) / 10);
      }
    }
    for (let j = 0; j < V; j += 1) {
      for (let i = 0; i < A; i += 1) {
        const a = j * (A + 1) + i;
        const b = a + 1;
        const c = a + (A + 1);
        const d = c + 1;
        indices.push(a, b, c, b, d, c);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const material = withRim(
      new THREE.MeshStandardMaterial({
        map: this.tissueMap,
        normalMap: this.tissueNormal,
        normalScale: new THREE.Vector2(1.2, 1.2),
        color: 0xd98aaa,
        roughness: 0.58,
        emissive: 0x2a0718,
        side: THREE.DoubleSide,
      }),
      { color: 0xff9fc8, power: 3, strength: 0.28 },
    );
    const wall = new THREE.Mesh(geometry, material);
    wall.receiveShadow = true;
    wall.name = "joint-capsule";
    this.group.add(wall);
  }

  createVilli() {
    // Hypertrophic villous fronds are a hallmark of RA synovitis.
    const profile = [
      [0.5, 0],
      [0.56, 0.05],
      [0.52, 0.22],
      [0.47, 0.5],
      [0.45, 0.72],
      [0.41, 0.85],
      [0.31, 0.94],
      [0.17, 0.99],
      [0.0, 1.0],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    const geometry = new THREE.LatheGeometry(profile, 14);
    // Darker, vascular base fading to a pale translucent tip.
    const vp = geometry.attributes.position;
    const villusColors = new Float32Array(vp.count * 3);
    for (let i = 0; i < vp.count; i += 1) {
      const k = 0.62 + vp.getY(i) * 0.38;
      villusColors[i * 3] = k;
      villusColors[i * 3 + 1] = k * k;
      villusColors[i * 3 + 2] = k * k * 0.95;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(villusColors, 3));

    this.villiMaterial = createVilliMaterial(
      {
        vertexColors: true,
        color: 0xffffff,
        roughness: 0.42,
        emissive: 0x2a0614,
      },
      { color: 0xffc2de, power: 2, strength: 0.55 },
    );
    const mesh = new THREE.InstancedMesh(geometry, this.villiMaterial, MAX_VILLI);
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const palette = [new THREE.Color(0xd9668f), new THREE.Color(0xf597b8), new THREE.Color(0xc2507e)];

    for (let i = 0; i < MAX_VILLI; i += 1) {
      const theta = this.rand(0, Math.PI * 2);
      const r = this.rand(30.9, 34.6);
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      const front = smoothstep(-0.2, 0.62, Math.sin(theta));
      const h = THREE.MathUtils.lerp(this.rand(2.4, 6.4), this.rand(0.8, 1.9), front);
      const s = this.rand(0.95, 1.65);
      dummy.position.set(x, getSynovialSurfaceHeight(x, z) - 0.35, z);
      // Lean slightly towards the joint centre.
      dummy.rotation.set(0, 0, 0);
      dummy.lookAt(0, dummy.position.y, 0);
      dummy.rotateX(this.rand(0.08, 0.38));
      dummy.rotateY(this.rand(0, Math.PI * 2));
      dummy.scale.set(s, h, s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.copy(palette[i % palette.length]).lerp(palette[(i + 1) % palette.length], this.random());
      mesh.setColorAt(i, color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    mesh.receiveShadow = true;
    mesh.name = "villi";
    this.villi = mesh;
    this.group.add(mesh);
  }

  createVessels() {
    // Angiogenesis: new vessels enter from the capsule and dive into the
    // sublining. Their ends are where inflammatory stimuli extravasate.
    this.vesselTables = [];
    const vesselGeometries = [];
    const count = 6;
    for (let k = 0; k < count; k += 1) {
      const phi = (k / count) * Math.PI * 2 + 0.35 + this.rand(-0.15, 0.15);
      const swirl = this.random() > 0.5 ? 1 : -1;
      const radii = [39, 35, 32, 29.5, 27.2, 25.2];
      const points = radii.map((r, index) => {
        const a = phi + swirl * index * 0.07 * (1 + index * 0.25);
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        let y = getSynovialSurfaceHeight(x, z) + 0.12;
        if (index === 0) y += 2.2;
        if (index === radii.length - 1) y -= 1.1;
        return new THREE.Vector3(x, y, z);
      });
      const curve = new THREE.CatmullRomCurve3(points);
      vesselGeometries.push(new THREE.TubeGeometry(curve, 72, 0.78, 14, false));
      this.vesselTables.push(new CurveTable(curve));
      const exit = points[3];
      this.spawnPoints.push(new THREE.Vector3(exit.x, 0, exit.z));

      // Smaller side branch.
      const p2 = points[2];
      const branchAngle = phi + swirl * 0.3;
      const branchPoints = [
        p2.clone(),
        new THREE.Vector3(Math.cos(branchAngle) * 30.5, 0, Math.sin(branchAngle) * 30.5),
        new THREE.Vector3(Math.cos(branchAngle + swirl * 0.12) * 28.8, 0, Math.sin(branchAngle + swirl * 0.12) * 28.8),
      ];
      branchPoints.forEach((p, index) => {
        if (index > 0) p.y = getSynovialSurfaceHeight(p.x, p.z) + (index === 2 ? -0.7 : 0.05);
      });
      const branch = new THREE.CatmullRomCurve3(branchPoints);
      vesselGeometries.push(new THREE.TubeGeometry(branch, 32, 0.42, 10, false));
    }

    // Extra spawn sites between the vessels (through the villous lining).
    for (let k = 0; k < count; k += 1) {
      const a = (k / count) * Math.PI * 2 + 0.35 + Math.PI / count;
      this.spawnPoints.push(new THREE.Vector3(Math.cos(a) * ARENA.spawnRadius, 0, Math.sin(a) * ARENA.spawnRadius));
    }

    this.vesselMaterial = withRim(
      new THREE.MeshStandardMaterial({
        color: 0xff2d5f,
        emissive: 0x5a0018,
        roughness: 0.28,
        transparent: true,
        opacity: 0.58,
        depthWrite: false,
      }),
      { color: 0xff7aa0, power: 2, strength: 0.85 },
    );
    const vessels = new THREE.Mesh(mergeGeometries(vesselGeometries), this.vesselMaterial);
    vessels.renderOrder = 2;
    vessels.name = "vessels";
    this.group.add(vessels);

    // Red blood cells flowing through the translucent vessels.
    const rbcProfile = [
      [0.0, -0.07],
      [0.2, -0.085],
      [0.36, -0.15],
      [0.46, 0],
      [0.36, 0.15],
      [0.2, 0.085],
      [0.0, 0.07],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    const rbcGeometry = new THREE.LatheGeometry(rbcProfile, 14);
    const rbcMaterial = new THREE.MeshStandardMaterial({
      color: 0xd0102e,
      emissive: 0x3a0008,
      roughness: 0.42,
    });
    this.rbcs = new THREE.InstancedMesh(rbcGeometry, rbcMaterial, count * RBC_PER_VESSEL);
    this.rbcState = [];
    for (let i = 0; i < count * RBC_PER_VESSEL; i += 1) {
      this.rbcState.push({
        table: Math.floor(i / RBC_PER_VESSEL),
        t: this.random(),
        speed: this.rand(0.05, 0.085),
        // Stay inside the 0.78 lumen (the RBC radius is 0.46).
        offset: new THREE.Vector3(this.rand(-0.2, 0.2), this.rand(-0.18, 0.18), this.rand(-0.2, 0.2)),
        spin: this.rand(-3, 3),
        tumble: new THREE.Euler(this.rand(0, 6.28), this.rand(0, 6.28), this.rand(0, 6.28)),
      });
    }
    this.rbcs.frustumCulled = false;
    this.rbcs.name = "red-blood-cells";
    this.group.add(this.rbcs);
    this.rbcDummy = new THREE.Object3D();
    this.rbcPoint = new THREE.Vector3();

    // Vessels climbing the back of the capsule (decorative, opaque).
    const wallVessels = [];
    for (let k = 0; k < 7; k += 1) {
      const start = this.rand(Math.PI * 1.08, Math.PI * 1.92);
      const pts = [];
      for (let s = 0; s < 6; s += 1) {
        const a = start + Math.sin(s * 1.3 + k) * 0.05 + s * 0.012;
        const r = ARENA.wallRadius - 0.95 - s * 0.32;
        const baseY = getSynovialSurfaceHeight(Math.cos(a) * ARENA.wallRadius, Math.sin(a) * ARENA.wallRadius);
        pts.push(new THREE.Vector3(Math.cos(a) * r, baseY + s * 2.5, Math.sin(a) * r));
      }
      wallVessels.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, this.rand(0.3, 0.5), 8, false));
    }
    this.wallVesselMaterial = withRim(
      new THREE.MeshStandardMaterial({ color: 0xe0245a, emissive: 0x6a0020, roughness: 0.34 }),
      { color: 0xff8db0, power: 2.2, strength: 0.4 },
    );
    const climbing = new THREE.Mesh(mergeGeometries(wallVessels), this.wallVesselMaterial);
    climbing.name = "capsule-vessels";
    this.group.add(climbing);
  }

  placeOnFloor(x, z, sink = 0) {
    return new THREE.Vector3(x, getSynovialSurfaceHeight(x, z) - sink, z);
  }

  randomFloorPoint(minR, maxR, avoid = []) {
    for (let attempt = 0; attempt < 30; attempt += 1) {
      const a = this.rand(0, Math.PI * 2);
      const r = this.rand(minR, maxR);
      const p = new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r);
      if (avoid.every((q) => q.distanceTo(p) > 4.5)) return p;
    }
    return new THREE.Vector2(minR, 0);
  }

  createResidentCells() {
    const occupied = [];
    const dummy = new THREE.Object3D();

    // Macrophages: large, ruffled, partially embedded in the lining.
    const macroGeometry = new THREE.IcosahedronGeometry(1, 3);
    const mp = macroGeometry.attributes.position;
    for (let i = 0; i < mp.count; i += 1) {
      const x = mp.getX(i);
      const y = mp.getY(i);
      const z = mp.getZ(i);
      const k = 1 + Math.sin(x * 4.1 + z * 2.3) * 0.1 + Math.cos(y * 5.3 + x * 3.1) * 0.08;
      mp.setXYZ(i, x * k, y * k, z * k);
    }
    macroGeometry.computeVertexNormals();
    const macroMaterial = withRim(
      new THREE.MeshStandardMaterial({ color: 0xc47ab4, emissive: 0x2c0a2a, roughness: 0.45 }),
      { color: 0xffc8f0, power: 2.4, strength: 0.45 },
    );
    const macrophages = new THREE.InstancedMesh(macroGeometry, macroMaterial, 6);
    for (let i = 0; i < 6; i += 1) {
      const p = this.randomFloorPoint(15, 27, occupied);
      occupied.push(p);
      dummy.position.copy(this.placeOnFloor(p.x, p.y, 0.15));
      dummy.rotation.set(0, this.rand(0, Math.PI * 2), 0);
      dummy.scale.set(this.rand(1.4, 1.9), this.rand(0.5, 0.65), this.rand(1.2, 1.6));
      dummy.updateMatrix();
      macrophages.setMatrixAt(i, dummy.matrix);
    }
    macrophages.castShadow = true;
    macrophages.receiveShadow = true;
    macrophages.name = "macrophages";
    this.group.add(macrophages);

    // Resident fibroblast-like synoviocytes: spindle-shaped.
    const flsGeometry = new THREE.SphereGeometry(1, 18, 12);
    const flsMaterial = withRim(
      new THREE.MeshStandardMaterial({ color: 0xa04a96, emissive: 0x220622, roughness: 0.5 }),
      { color: 0xf0a8ff, power: 2.4, strength: 0.35 },
    );
    const fls = new THREE.InstancedMesh(flsGeometry, flsMaterial, 12);
    for (let i = 0; i < 12; i += 1) {
      const p = this.randomFloorPoint(10, 28, occupied);
      occupied.push(p);
      dummy.position.copy(this.placeOnFloor(p.x, p.y, 0.05));
      dummy.rotation.set(0, this.rand(0, Math.PI * 2), 0);
      dummy.scale.set(this.rand(1.9, 2.6), 0.3, this.rand(0.5, 0.7));
      dummy.updateMatrix();
      fls.setMatrixAt(i, dummy.matrix);
    }
    fls.receiveShadow = true;
    fls.name = "resident-synoviocytes";
    this.group.add(fls);

    // Ectopic lymphoid aggregates (T/B-cell clusters) found in many RA synovia.
    const lymphGeometry = new THREE.SphereGeometry(0.34, 14, 10);
    const lymphMaterial = withRim(
      new THREE.MeshStandardMaterial({ color: 0xe9dcff, emissive: 0x1d1238, roughness: 0.38 }),
      { color: 0xffffff, power: 2.2, strength: 0.4 },
    );
    const perCluster = 24;
    const lymph = new THREE.InstancedMesh(lymphGeometry, lymphMaterial, perCluster * 3);
    const tint = new THREE.Color();
    for (let c = 0; c < 3; c += 1) {
      const centre = this.randomFloorPoint(16, 26, occupied);
      occupied.push(centre);
      for (let i = 0; i < perCluster; i += 1) {
        const a = this.rand(0, Math.PI * 2);
        const r = Math.sqrt(this.random()) * 1.9;
        const x = centre.x + Math.cos(a) * r;
        const z = centre.y + Math.sin(a) * r;
        const mound = (1 - r / 2) * 0.7;
        dummy.position.set(x, getSynovialSurfaceHeight(x, z) + mound * this.rand(0.4, 1), z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(this.rand(0.85, 1.15));
        dummy.updateMatrix();
        lymph.setMatrixAt(c * perCluster + i, dummy.matrix);
        lymph.setColorAt(c * perCluster + i, tint.setHSL(0.74 + this.rand(-0.05, 0.05), 0.5, this.rand(0.78, 0.9)));
      }
    }
    lymph.instanceColor.needsUpdate = true;
    lymph.castShadow = true;
    lymph.name = "lymphoid-aggregates";
    this.group.add(lymph);
  }

  createCollagen() {
    // Crimped collagen and fibrin strands lying on the lining.
    const geometries = [];
    const collagen = new THREE.Color(0xffd1e3);
    const fibrin = new THREE.Color(0xf7e6a6);
    for (let i = 0; i < 52; i += 1) {
      const start = this.randomFloorPoint(6.5, 29);
      const heading = this.rand(0, Math.PI * 2);
      const length = this.rand(3, 7);
      const pts = [];
      for (let s = 0; s <= 10; s += 1) {
        const t = s / 10;
        const crimp = Math.sin(t * Math.PI * 6 + i) * 0.12;
        const x = start.x + Math.cos(heading) * length * t - Math.sin(heading) * crimp;
        const z = start.y + Math.sin(heading) * length * t + Math.cos(heading) * crimp;
        pts.push(new THREE.Vector3(x, getSynovialSurfaceHeight(x, z) + 0.07, z));
      }
      const tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 30, i % 4 === 0 ? 0.045 : 0.06, 4, false);
      const colour = i % 4 === 0 ? fibrin : collagen;
      const colors = new Float32Array(tube.attributes.position.count * 3);
      for (let v = 0; v < tube.attributes.position.count; v += 1) {
        colors[v * 3] = colour.r;
        colors[v * 3 + 1] = colour.g;
        colors[v * 3 + 2] = colour.b;
      }
      tube.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometries.push(tube);
    }
    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      emissive: 0x3a1020,
      roughness: 0.6,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const fibres = new THREE.Mesh(mergeGeometries(geometries), material);
    fibres.renderOrder = 1;
    fibres.name = "ecm-fibres";
    this.group.add(fibres);
  }

  createMotes() {
    const positions = new Float32Array(MAX_MOTES * 3);
    const phases = new Float32Array(MAX_MOTES);
    const sizes = new Float32Array(MAX_MOTES);
    for (let i = 0; i < MAX_MOTES; i += 1) {
      const a = this.rand(0, Math.PI * 2);
      const r = Math.sqrt(this.random()) * 34;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = this.rand(1.2, 13);
      positions[i * 3 + 2] = Math.sin(a) * r;
      phases[i] = this.rand(0, Math.PI * 2);
      sizes[i] = this.rand(0.06, 0.2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("phase", new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    this.moteMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: 400 },
        uColor: { value: new THREE.Color(0xffd6ea) },
      },
      vertexShader: /* glsl */ `
        attribute float phase;
        attribute float size;
        uniform float uTime;
        uniform float uScale;
        varying float vFade;
        void main() {
          vec3 p = position + vec3(
            sin(uTime * 0.31 + phase) * 0.7,
            sin(uTime * 0.47 + phase * 2.0) * 0.45,
            cos(uTime * 0.27 + phase) * 0.7);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float depth = -mv.z;
          vFade = clamp(1.0 - (depth - 12.0) / 60.0, 0.08, 1.0) * (0.55 + 0.45 * sin(uTime * 1.3 + phase * 3.0));
          gl_PointSize = size * uScale / max(0.1, depth);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying float vFade;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d) * vFade * 0.7;
          gl_FragColor = vec4(uColor, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.motes = new THREE.Points(geometry, this.moteMaterial);
    this.motes.frustumCulled = false;
    this.motes.name = "synovial-fluid-motes";
    this.group.add(this.motes);
  }

  createCytokineHaze() {
    this.hazeMaterial = new THREE.SpriteMaterial({
      map: createCloudTexture(128, 11),
      color: 0xff5fa2,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.haze = [];
    for (let i = 0; i < 12; i += 1) {
      const sprite = new THREE.Sprite(this.hazeMaterial);
      const a = this.rand(0, Math.PI * 2);
      const r = this.rand(7, 29);
      sprite.userData = { a, r, y: this.rand(3, 9), speed: this.rand(-0.03, 0.03) || 0.02 };
      sprite.scale.setScalar(this.rand(5, 10));
      sprite.renderOrder = 6;
      this.haze.push(sprite);
      this.group.add(sprite);
    }
  }

  setQuality(quality) {
    this.villi.count = Math.min(MAX_VILLI, quality.villi);
    this.motes.geometry.setDrawRange(0, Math.min(MAX_MOTES, quality.particles));
  }

  setViewport(heightPixels, fovDegrees) {
    this.moteMaterial.uniforms.uScale.value =
      heightPixels / (2 * Math.tan(THREE.MathUtils.degToRad(fovDegrees) / 2));
  }

  /**
   * @param {number} dt
   * @param {{inflammation:number, netBurden:number, erosion:number, threat:number}} state
   * @param {number} pulse heartbeat envelope 0..1
   */
  update(dt, state, pulse) {
    this.time += dt;
    const t = this.time;
    const inflammation = state.inflammation / 100;
    const net = state.netBurden / 100;

    const floorUniforms = this.floorMaterial.userData.uniforms;
    floorUniforms.uTime.value = t;
    floorUniforms.uInflammation.value = inflammation;
    floorUniforms.uNetBurden.value = net;
    floorUniforms.uPulse.value = pulse;
    this.villiMaterial.userData.uniforms.uTime.value = t;
    this.moteMaterial.uniforms.uTime.value = t;

    const cart = this.cartilageMaterial.userData.uniforms;
    cart.uErosion.value = THREE.MathUtils.clamp(state.erosion, 0, 0.92);
    cart.uThreat.value = state.threat;
    this.zoneMaterial.color.copy(calmRing).lerp(threatRing, state.threat);
    this.zoneMaterial.opacity = 0.22 + state.threat * 0.5 + Math.sin(t * (3 + state.threat * 6)) * 0.08;

    this.vesselMaterial.emissiveIntensity = 0.75 + pulse * 0.9;
    this.wallVesselMaterial.emissiveIntensity = 0.8 + pulse * 0.6;

    // Pulsatile blood flow.
    const flow = 0.65 + pulse * 0.9;
    const dummy = this.rbcDummy;
    for (let i = 0; i < this.rbcState.length; i += 1) {
      const cell = this.rbcState[i];
      cell.t = (cell.t + cell.speed * flow * dt) % 1;
      this.vesselTables[cell.table].sample(cell.t, this.rbcPoint);
      dummy.position.copy(this.rbcPoint).add(cell.offset);
      dummy.rotation.copy(cell.tumble);
      dummy.rotation.y += t * cell.spin;
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      this.rbcs.setMatrixAt(i, dummy.matrix);
    }
    this.rbcs.instanceMatrix.needsUpdate = true;

    this.hazeMaterial.opacity = 0.06 + inflammation * 0.32;
    for (const sprite of this.haze) {
      const data = sprite.userData;
      data.a += data.speed * dt;
      sprite.position.set(
        Math.cos(data.a) * data.r,
        data.y + Math.sin(t * 0.4 + data.r) * 0.6,
        Math.sin(data.a) * data.r,
      );
    }

    const fog = this.scene.fog;
    fog.color.copy(baseFog).lerp(inflamedFog, inflammation * 0.6).lerp(netFog, net * 0.55);
  }
}
