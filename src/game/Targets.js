import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { ARENA, PROJECTILE, TARGET_KINDS } from "./config.js";
import { getSynovialSurfaceHeight } from "./terrain.js";
import { withRim } from "./materials.js";
import { createLabelTexture, mulberry32 } from "./textures.js";

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const tmpMatrix = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpVec = new THREE.Vector3();
const tmpDir = new THREE.Vector3();

// ---------------------------------------------------------------------------
// Geometry helpers: every model is assembled from primitives, baked into one
// vertex-coloured BufferGeometry, so each target is a single draw call.
// ---------------------------------------------------------------------------

function part(geometry, color, { position = [0, 0, 0], quaternion = null, rotation = null, scale = [1, 1, 1] } = {}) {
  const g = geometry.index ? geometry.toNonIndexed() : geometry;
  const q = quaternion || (rotation ? tmpQuat.setFromEuler(new THREE.Euler(...rotation)) : new THREE.Quaternion());
  tmpMatrix.compose(new THREE.Vector3(...position), q, new THREE.Vector3(...scale));
  g.applyMatrix4(tmpMatrix);
  const c = new THREE.Color(color);
  const count = g.attributes.position.count;
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return g;
}

function lumpy(geometry, amount, frequency, seed = 0) {
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i += 1) {
    const x = p.getX(i);
    const y = p.getY(i);
    const z = p.getZ(i);
    const k =
      1 +
      Math.sin(x * frequency + seed) * Math.cos(z * frequency * 1.3 + seed) * amount +
      Math.sin(y * frequency * 1.7 + seed * 2) * amount * 0.6;
    p.setXYZ(i, x * k, y * k, z * k);
  }
  geometry.computeVertexNormals();
  return geometry;
}

function fibonacciDirections(count) {
  const dirs = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = golden * i;
    dirs.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
  }
  return dirs;
}

/** IgG antibody: a "Y" whose Fab tips point along +Y. */
function antibodyParts(position, inward) {
  const q = new THREE.Quaternion().setFromUnitVectors(Y_AXIS, inward);
  const parts = [
    [new THREE.CapsuleGeometry(0.07, 0.36, 3, 8), 0xfff0fb, [0, 0.2, 0], [0, 0, 0]],
    [new THREE.CapsuleGeometry(0.06, 0.32, 3, 8), 0xffe0f4, [0.13, 0.54, 0], [0, 0, -0.62]],
    [new THREE.CapsuleGeometry(0.06, 0.32, 3, 8), 0xffe0f4, [-0.13, 0.54, 0], [0, 0, 0.62]],
    [new THREE.SphereGeometry(0.075, 10, 8), 0xff9ee0, [0.25, 0.7, 0], [0, 0, 0]],
    [new THREE.SphereGeometry(0.075, 10, 8), 0xff9ee0, [-0.25, 0.7, 0], [0, 0, 0]],
  ];
  return parts.map(([geometry, color, local, rot]) => {
    const g = part(geometry, color, { position: local, rotation: rot });
    tmpMatrix.compose(position, q, new THREE.Vector3(1, 1, 1));
    g.applyMatrix4(tmpMatrix);
    return g;
  });
}

function buildImmuneComplex() {
  const parts = [part(lumpy(new THREE.IcosahedronGeometry(0.34, 2), 0.12, 6), 0xffc3ea)];
  for (const d of fibonacciDirections(7)) {
    parts.push(...antibodyParts(d.clone().multiplyScalar(1.05), d.clone().negate()));
  }
  // Extra antigen nodes make the complex read as a cross-linked lattice.
  for (const d of fibonacciDirections(4)) {
    parts.push(part(new THREE.IcosahedronGeometry(0.16, 1), 0xffb0e4, { position: d.multiplyScalar(1.25).toArray() }));
  }
  return mergeGeometries(parts);
}

function buildPlatelets(random) {
  const disc = () =>
    new THREE.LatheGeometry(
      [
        [0.0, -0.05],
        [0.22, -0.07],
        [0.4, -0.06],
        [0.46, 0],
        [0.4, 0.06],
        [0.22, 0.07],
        [0.0, 0.05],
      ].map(([x, y]) => new THREE.Vector2(x, y)),
      14,
    );
  const parts = [];
  const centres = [];
  for (let i = 0; i < 7; i += 1) {
    const position = [(random() - 0.5) * 1.5, (random() - 0.5) * 0.8, (random() - 0.5) * 1.5];
    centres.push(new THREE.Vector3(...position));
    const rotation = [random() * Math.PI, random() * Math.PI, random() * Math.PI];
    parts.push(part(disc(), i % 2 ? 0xf3b04d : 0xffc46b, { position, rotation }));
    // Activated platelets extend filopodia.
    for (let f = 0; f < 3; f += 1) {
      const dir = new THREE.Vector3(random() - 0.5, random() - 0.5, random() - 0.5).normalize();
      const q = new THREE.Quaternion().setFromUnitVectors(Y_AXIS, dir);
      const tip = new THREE.Vector3(...position).addScaledVector(dir, 0.48);
      parts.push(part(new THREE.ConeGeometry(0.05, 0.36, 5), 0xffd58a, { position: tip.toArray(), quaternion: q }));
    }
  }
  // Fibrin strands bind the aggregate together.
  for (let i = 0; i < 5; i += 1) {
    const a = centres[i % centres.length];
    const b = centres[(i + 3) % centres.length];
    const mid = a.clone().lerp(b, 0.5).add(new THREE.Vector3(0, 0.35, 0));
    const curve = new THREE.CatmullRomCurve3([a.clone().multiplyScalar(1.3), mid, b.clone().multiplyScalar(1.3)]);
    parts.push(part(new THREE.TubeGeometry(curve, 14, 0.03, 4, false), 0xf7e6a6));
  }
  return mergeGeometries(parts);
}

function buildDebris(random) {
  const parts = [];
  for (let i = 0; i < 6; i += 1) {
    const base = i % 2 ? new THREE.OctahedronGeometry(0.38) : new THREE.TetrahedronGeometry(0.44);
    const position = [(random() - 0.5) * 1.2, (random() - 0.5) * 0.9, (random() - 0.5) * 1.2];
    const scale = [0.6 + random() * 0.6, 0.9 + random() * 0.9, 0.5 + random() * 0.5];
    parts.push(
      part(base, i % 3 ? 0xffc63a : 0xffe08a, {
        position,
        rotation: [random() * Math.PI, random() * Math.PI, random() * Math.PI],
        scale,
      }),
    );
    // Citrullinated residues highlighted as bright tags.
    const tag = new THREE.Vector3(...position).add(
      new THREE.Vector3(random() - 0.5, random() - 0.5, random() - 0.5).multiplyScalar(0.5),
    );
    parts.push(part(new THREE.IcosahedronGeometry(0.08, 1), 0xfff6c2, { position: tag.toArray() }));
  }
  const merged = mergeGeometries(parts);
  merged.computeVertexNormals();
  return merged;
}

function buildCytokineCloud(random) {
  // TNF is a homotrimer: clusters of three subunits.
  const parts = [];
  const sphere = new THREE.SphereGeometry(0.17, 10, 8);
  for (let t = 0; t < 9; t += 1) {
    const centre = new THREE.Vector3(random() - 0.5, (random() - 0.5) * 0.8, random() - 0.5)
      .normalize()
      .multiplyScalar(0.25 + random() * 0.7);
    const spin = random() * Math.PI * 2;
    for (let k = 0; k < 3; k += 1) {
      const a = spin + (k / 3) * Math.PI * 2;
      const p = centre.clone().add(new THREE.Vector3(Math.cos(a) * 0.17, (random() - 0.5) * 0.08, Math.sin(a) * 0.17));
      parts.push(part(sphere.clone(), k === 0 ? 0xff7ab8 : 0xff4d9a, { position: p.toArray() }));
    }
  }
  return mergeGeometries(parts);
}

function buildSynoviocyte() {
  // Elongated along +Z (direction of invasion).
  const body = lumpy(new THREE.SphereGeometry(1, 30, 18), 0.07, 4.5, 1.3);
  const parts = [part(body, 0xb555b7, { scale: [0.85, 0.5, 1.9] })];
  parts.push(part(new THREE.SphereGeometry(0.5, 18, 12), 0x6b2a8a, { position: [0, 0.2, 0.1], scale: [1.05, 0.62, 1.45] }));
  const processes = [
    [0.25, 0, 1.6, 0.18, 1.6, -0.25],
    [-0.3, 0, 1.5, 0.16, 1.4, 0.3],
    [0.75, -0.05, 0.4, 0.12, 1.2, -1.2],
    [-0.75, -0.05, 0.2, 0.12, 1.1, 1.35],
    [0, -0.05, -1.75, 0.13, 1, Math.PI],
  ];
  for (const [x, y, z, radius, length, yaw] of processes) {
    const dir = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    const q = new THREE.Quaternion().setFromUnitVectors(Y_AXIS, dir);
    const centre = new THREE.Vector3(x, y, z).addScaledVector(dir, length * 0.35);
    parts.push(part(new THREE.ConeGeometry(radius, length, 7), 0xc46ad0, { position: centre.toArray(), quaternion: q }));
  }
  return mergeGeometries(parts);
}

function buildComplement() {
  // Membrane attack complex: a ring of C9 subunits forming a pore.
  const parts = [];
  for (let i = 0; i < 12; i += 1) {
    const a = (i / 12) * Math.PI * 2;
    parts.push(
      part(new THREE.CapsuleGeometry(0.09, 0.44, 3, 6), i % 2 ? 0x5fe8ff : 0x9dfbff, {
        position: [Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5],
        rotation: [Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25],
      }),
    );
  }
  for (let i = 0; i < 4; i += 1) {
    const a = 0.4 + i * 0.35;
    parts.push(part(new THREE.IcosahedronGeometry(0.15, 1), 0xc9fdff, { position: [Math.cos(a) * 0.72, 0.28, Math.sin(a) * 0.72] }));
  }
  parts.push(part(new THREE.IcosahedronGeometry(0.26, 1), 0xf0ffff));
  const spikes = fibonacciDirections(10);
  for (const d of spikes) {
    const q = new THREE.Quaternion().setFromUnitVectors(Y_AXIS, d);
    parts.push(part(new THREE.ConeGeometry(0.06, 0.3, 5), 0xe8ffff, { position: d.clone().multiplyScalar(0.3).toArray(), quaternion: q }));
  }
  return mergeGeometries(parts);
}

const EMISSIVE = {
  complex: 0.3,
  platelet: 0.22,
  debris: 0.32,
  cytokine: 0.5,
  synoviocyte: 0.18,
  complement: 0.65,
};

function buildAssets({ dotTexture, netTexture }) {
  const random = mulberry32(31337);
  const geometries = {
    complex: buildImmuneComplex(),
    platelet: buildPlatelets(random),
    debris: buildDebris(random),
    cytokine: buildCytokineCloud(random),
    synoviocyte: buildSynoviocyte(),
    complement: buildComplement(),
  };
  const kinds = {};
  for (const [kind, def] of Object.entries(TARGET_KINDS)) {
    const material = withRim(
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: kind === "debris" ? 0.55 : 0.32,
        metalness: 0,
        emissive: def.glow,
        emissiveIntensity: EMISSIVE[kind],
        flatShading: kind === "debris",
      }),
      { color: def.glow, power: 2, strength: 0.9 },
    );
    const halo = new THREE.SpriteMaterial({
      map: dotTexture,
      color: def.glow,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    kinds[kind] = { geometry: geometries[kind], material, halo };
  }
  const labels = ["TNF", "IL-6", "IL-1β"].map(
    (text) =>
      new THREE.SpriteMaterial({
        map: createLabelTexture(text),
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
      }),
  );
  const partialNet = new THREE.SpriteMaterial({
    map: netTexture,
    color: 0xd9fbff,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  return { kinds, labels, partialNet };
}

/** An inflammatory stimulus moving through the synovium. */
export class InflammatoryTarget {
  constructor(kind, spawnPoint, wave, assets) {
    this.kind = kind;
    this.def = TARGET_KINDS[kind];
    this.wave = wave;
    this.radius = this.def.radius;
    this.hp = this.def.hp;
    this.speed = (1.2 + wave * 0.15 + Math.random() * 0.7) * this.def.speedScale;
    this.phase = Math.random() * Math.PI * 2;
    this.wobbleFrequency = 0.6 + Math.random() * 0.6;
    this.age = 0;
    this.state = "active";
    this.stateTimer = 0;
    this.destroyed = false;
    this.punch = 0;
    this.slowed = 1;
    this.engulfTarget = null;
    this.separation = new THREE.Vector3();
    this.heading = new THREE.Vector3();

    const asset = assets.kinds[kind];
    this.group = new THREE.Group();
    this.group.name = `target-${kind}`;
    this.body = new THREE.Mesh(asset.geometry, asset.material);
    this.body.castShadow = true;
    this.group.add(this.body);
    this.halo = new THREE.Sprite(asset.halo);
    this.halo.scale.setScalar(this.radius * 3.4);
    this.halo.renderOrder = 7;
    this.group.add(this.halo);
    if (kind === "cytokine") {
      const label = new THREE.Sprite(assets.labels[Math.floor(Math.random() * assets.labels.length)]);
      label.scale.set(2.3, 0.86, 1);
      label.position.y = 1.75;
      label.renderOrder = 13;
      this.label = label;
      this.group.add(label);
    }
    this.partialNetMaterial = assets.partialNet;
    this.netOverlay = null;

    const jitter = 1.6;
    const x = spawnPoint.x + (Math.random() - 0.5) * jitter * 2;
    const z = spawnPoint.z + (Math.random() - 0.5) * jitter * 2;
    this.group.position.set(x, getSynovialSurfaceHeight(x, z) - 0.6, z);
    this.group.rotation.y = Math.random() * Math.PI * 2;
    this.group.scale.setScalar(0.01);
  }

  get active() {
    return this.state === "active";
  }

  get captured() {
    return this.state === "captured";
  }

  get position() {
    return this.group.position;
  }

  horizontalDistanceTo(point) {
    return Math.hypot(this.group.position.x - point.x, this.group.position.z - point.z);
  }

  /** Called when a NET reaches this target. Returns "captured" or "damaged". */
  hit() {
    if (!this.active) return null;
    this.hp -= 1;
    this.punch = 1;
    if (this.hp > 0) {
      this.slowed = 0.55;
      if (!this.netOverlay) {
        this.netOverlay = new THREE.Sprite(this.partialNetMaterial);
        this.netOverlay.scale.setScalar(this.radius * 2.8);
        this.netOverlay.renderOrder = 12;
        this.group.add(this.netOverlay);
      }
      return "damaged";
    }
    this.state = "captured";
    this.stateTimer = 0;
    return "captured";
  }

  engulf(playerPosition) {
    if (!this.active) return false;
    this.state = "engulfed";
    this.stateTimer = 0;
    this.engulfTarget = playerPosition;
    return true;
  }

  /** Complement that touched the neutrophil, or timed out. */
  pop() {
    this.state = "popped";
    this.stateTimer = 0;
  }

  update(dt, playerPosition) {
    this.age += dt;
    this.stateTimer += dt;
    this.punch = Math.max(0, this.punch - dt * 5);
    const p = this.group.position;
    const emerge = Math.min(1, this.age / 0.6);
    const baseScale = (1 - Math.pow(1 - emerge, 3)) * (1 + this.punch * 0.25);

    if (this.state === "captured") {
      const s = Math.max(0.25, 1 - this.stateTimer * 1.6);
      this.group.scale.setScalar(s);
      this.group.rotation.y += dt * 9;
      if (this.stateTimer >= PROJECTILE.wrapDuration) this.destroyed = true;
      return;
    }
    if (this.state === "engulfed") {
      p.lerp(this.engulfTarget, 1 - Math.exp(-14 * dt));
      this.group.scale.setScalar(Math.max(0.05, 1 - this.stateTimer * 3));
      if (this.stateTimer > 0.32) this.destroyed = true;
      return;
    }
    if (this.state === "popped") {
      this.group.scale.setScalar(1 + this.stateTimer * 5);
      if (this.stateTimer > 0.12) this.destroyed = true;
      return;
    }

    // --- Active movement -------------------------------------------------
    const hunting = this.kind === "complement";
    if (hunting) {
      tmpDir.set(playerPosition.x - p.x, 0, playerPosition.z - p.z);
      if (this.def.lifetime && this.age > this.def.lifetime) {
        this.pop();
        this.expired = true;
      }
    } else {
      // Drift towards the articular cartilage with a meandering path.
      tmpDir.set(-p.x, 0, -p.z);
    }
    if (tmpDir.lengthSq() > 1e-6) tmpDir.normalize();
    const meander = Math.sin(this.age * this.wobbleFrequency + this.phase) * (hunting ? 0.25 : 0.6);
    tmpVec.set(-tmpDir.z, 0, tmpDir.x).multiplyScalar(meander);
    tmpDir.add(tmpVec).add(this.separation);
    tmpDir.y = 0;
    if (tmpDir.lengthSq() > 1e-6) tmpDir.normalize();
    this.heading.lerp(tmpDir, 1 - Math.exp(-4 * dt));
    this.slowed = Math.min(1, this.slowed + dt * 0.08);
    const step = this.speed * this.slowed * Math.min(1, this.age / 0.6) * dt;
    p.x += this.heading.x * step;
    p.z += this.heading.z * step;

    const ground = getSynovialSurfaceHeight(p.x, p.z);
    const crawler = this.kind === "synoviocyte";
    const bob = crawler ? 0 : Math.sin(this.age * 2.1 + this.phase) * 0.25;
    const desiredY = ground + this.def.hover * (crawler ? 1 : emerge) + bob;
    p.y += (desiredY - p.y) * (1 - Math.exp(-6 * dt));

    if (crawler) {
      const yaw = Math.atan2(this.heading.x, this.heading.z);
      let delta = yaw - this.group.rotation.y;
      delta = Math.atan2(Math.sin(delta), Math.cos(delta));
      this.group.rotation.y += delta * (1 - Math.exp(-5 * dt));
      const crawl = Math.sin(this.age * 4 + this.phase);
      this.group.scale.set(baseScale * (1 - crawl * 0.05), baseScale, baseScale * (1 + crawl * 0.08));
    } else {
      this.group.rotation.y += dt * (0.8 + this.wave * 0.05);
      this.body.rotation.x = Math.sin(this.age * 0.9 + this.phase) * 0.5;
      const pulse = hunting ? 1 + Math.sin(this.age * 9) * 0.08 : 1;
      this.group.scale.setScalar(baseScale * pulse);
    }
  }

  escaped() {
    if (!this.active || this.kind === "complement") return false;
    return Math.hypot(this.group.position.x, this.group.position.z) < ARENA.escapeRadius;
  }
}

export class TargetFactory {
  constructor(textures) {
    this.assets = buildAssets(textures);
  }

  pickKind(wave) {
    const options = [];
    let total = 0;
    for (const [kind, def] of Object.entries(TARGET_KINDS)) {
      if (def.minWave > wave) continue;
      let weight = def.weight;
      if (kind === "complement") weight += Math.max(0, wave - 2) * 0.25;
      if (kind === "synoviocyte") weight += Math.max(0, wave - 3) * 0.3;
      options.push([kind, weight]);
      total += weight;
    }
    let roll = Math.random() * total;
    for (const [kind, weight] of options) {
      roll -= weight;
      if (roll <= 0) return kind;
    }
    return options[options.length - 1][0];
  }

  create(wave, spawnPoint, kind = this.pickKind(wave)) {
    return new InflammatoryTarget(kind, spawnPoint, wave, this.assets);
  }
}
