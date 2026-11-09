import * as THREE from "three";
import { ARENA, PLAYER, RULES } from "./config.js";
import { getSurfaceNormal, getSynovialSurfaceHeight } from "./terrain.js";
import { createMembraneMaterial, withRim } from "./materials.js";
import { mulberry32 } from "./textures.js";

const GRANULES = 48;
const BODY_SCALE = new THREE.Vector3(1.32, 0.74, 1.12);
const MEMBRANE_OPACITY = 0.4;
const FORWARD = new THREE.Vector3(0, 0, 1);
const membraneRim = new THREE.Color(0xbff8ff);
const hurtRim = new THREE.Color(0xff3a5c);

const tmpVec = new THREE.Vector3();
const tmpVec2 = new THREE.Vector3();
const tmpNormal = new THREE.Vector3();
const tmpQuat = new THREE.Quaternion();
const tmpQuat2 = new THREE.Quaternion();

function dampAngle(current, target, lambda, dt) {
  let delta = target - current;
  delta = Math.atan2(Math.sin(delta), Math.cos(delta));
  return current + delta * (1 - Math.exp(-lambda * dt));
}

/** Activated neutrophil controlled by the player. */
export class PlayerNeutrophil {
  constructor({ ringTexture, chevronTexture }) {
    this.group = new THREE.Group();
    this.group.name = "player-neutrophil";
    this.visual = new THREE.Group();
    this.group.add(this.visual);
    this.decals = new THREE.Group();

    this.velocity = new THREE.Vector3();
    this.facing = new THREE.Vector3(0, 0, -1);
    this.yaw = Math.PI;
    this.time = 0;
    this.cooldown = 0;
    this.dashTimer = 0;
    this.dashCooldown = 0;
    this.invulnerable = 0;
    this.hitFlash = 0;
    this.engulfPulse = 0;
    this.healthRatio = 1;
    this.dying = false;
    this.deathTimer = 0;
    this.deathDuration = 1.6;

    this.createBody();
    this.createDecals(ringTexture, chevronTexture);
    this.reset();
  }

  createBody() {
    const membraneGeometry = new THREE.IcosahedronGeometry(1.55, 5);
    this.membraneMaterial = createMembraneMaterial(
      {
        color: 0xe2f8ff,
        emissive: 0x0c2230,
        roughness: 0.34,
        metalness: 0,
        transparent: true,
        opacity: MEMBRANE_OPACITY,
        depthWrite: false,
      },
      { color: membraneRim, power: 2, strength: 0.75 },
    );
    this.membrane = new THREE.Mesh(membraneGeometry, this.membraneMaterial);
    this.membrane.scale.copy(BODY_SCALE);
    this.membrane.renderOrder = 9;
    this.visual.add(this.membrane);

    this.cytoplasmMaterial = new THREE.MeshStandardMaterial({
      color: 0xffe9f6,
      emissive: 0x3a1a2a,
      roughness: 0.4,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
    });
    this.cytoplasm = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 20), this.cytoplasmMaterial);
    this.cytoplasm.scale.set(1.24, 0.6, 1.04);
    this.cytoplasm.renderOrder = 8;
    this.visual.add(this.cytoplasm);

    // Multilobed (segmented) nucleus — the classic neutrophil cue.
    this.nucleus = new THREE.Group();
    this.nucleusMaterial = withRim(
      new THREE.MeshStandardMaterial({
        color: 0x8a46d8,
        emissive: 0x3b136f,
        roughness: 0.34,
        transparent: true,
        opacity: 1,
      }),
      { color: 0xd7b6ff, power: 2, strength: 0.65 },
    );
    const lobeCentres = [
      new THREE.Vector3(-0.72, 0.12, -0.18),
      new THREE.Vector3(-0.24, 0.22, 0.24),
      new THREE.Vector3(0.3, 0.18, -0.12),
      new THREE.Vector3(0.72, 0.06, 0.22),
    ];
    const lobeGeometry = new THREE.SphereGeometry(0.42, 24, 16);
    lobeCentres.forEach((centre, index) => {
      const lobe = new THREE.Mesh(lobeGeometry, this.nucleusMaterial);
      lobe.position.copy(centre);
      lobe.scale.set(1.18, 0.72, 0.98);
      lobe.rotation.set(0.2 * index, 0.5 * index, -0.15 * index);
      lobe.castShadow = true;
      this.nucleus.add(lobe);
    });
    const bridge = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lobeCentres), 40, 0.11, 8, false),
      this.nucleusMaterial,
    );
    this.nucleus.add(bridge);
    this.nucleus.position.y = 0.12;
    this.visual.add(this.nucleus);

    // Cytoplasmic granules (elastase / MPO-containing) drifting inside.
    const random = mulberry32(77);
    this.granuleMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4e0ff,
      emissive: 0x6a46a0,
      emissiveIntensity: 0.7,
      roughness: 0.3,
      transparent: true,
      opacity: 0.95,
    });
    this.granules = new THREE.InstancedMesh(new THREE.SphereGeometry(0.085, 8, 6), this.granuleMaterial, GRANULES);
    this.granules.frustumCulled = false;
    this.granuleData = [];
    for (let i = 0; i < GRANULES; i += 1) {
      const a = random() * Math.PI * 2;
      const r = 0.45 + random() * 0.75;
      const home = new THREE.Vector3(Math.cos(a) * r * 1.15, (random() - 0.35) * 0.7, Math.sin(a) * r * 0.9);
      this.granuleData.push({
        home,
        phase: random() * Math.PI * 2,
        speed: 0.8 + random() * 1.6,
        burst: home.clone().normalize().add(new THREE.Vector3(0, random() * 0.8, 0)).normalize(),
      });
    }
    this.visual.add(this.granules);
    this.granuleDummy = new THREE.Object3D();

    this.muzzle = new THREE.Object3D();
    this.muzzle.position.set(0, 0.4, 1.7);
    this.group.add(this.muzzle);
  }

  createDecals(ringTexture, chevronTexture) {
    this.auraMaterial = new THREE.MeshBasicMaterial({
      map: ringTexture,
      color: 0x8ff3ff,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      polygonOffset: true,
      polygonOffsetFactor: -4,
    });
    this.aura = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.auraMaterial);
    this.aura.scale.setScalar(4.4);
    this.aura.renderOrder = 5;
    this.decals.add(this.aura);

    this.chevronMaterial = new THREE.MeshBasicMaterial({
      map: chevronTexture,
      color: 0xcffbff,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      polygonOffset: true,
      polygonOffsetFactor: -4,
    });
    this.chevron = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.chevronMaterial);
    this.chevron.scale.setScalar(1.7);
    this.chevron.renderOrder = 5;
    this.decals.add(this.chevron);
  }

  reset() {
    const z = 9;
    this.group.position.set(0, getSynovialSurfaceHeight(0, z) + PLAYER.surfaceOffset, z);
    this.velocity.set(0, 0, 0);
    this.yaw = Math.PI;
    this.facing.set(0, 0, -1);
    this.group.rotation.set(0, this.yaw, 0);
    this.group.visible = true;
    this.decals.visible = true;
    this.cooldown = 0;
    this.dashTimer = 0;
    this.dashCooldown = 0;
    this.invulnerable = 0;
    this.hitFlash = 0;
    this.engulfPulse = 0;
    this.dying = false;
    this.deathTimer = 0;
    this.membrane.scale.copy(BODY_SCALE);
    this.membraneMaterial.opacity = MEMBRANE_OPACITY;
    this.cytoplasmMaterial.opacity = 0.16;
    this.nucleus.scale.setScalar(1);
    this.nucleus.rotation.set(0, 0, 0);
    this.nucleusMaterial.opacity = 1;
    this.granuleMaterial.opacity = 0.95;
    this.updateGranules(0, 0);
    this.updateDecals();
  }

  get position() {
    return this.group.position;
  }

  get isDashing() {
    return this.dashTimer > 0;
  }

  canFire() {
    return !this.dying && this.cooldown <= 0;
  }

  markFired() {
    this.cooldown = RULES.fireCooldown;
  }

  dashReady() {
    return this.dashCooldown <= 0;
  }

  /** @param {THREE.Vector2} moveInput x/z input, magnitude 0..1 */
  tryDash(moveInput) {
    if (this.dying || this.dashCooldown > 0) return false;
    const dir = tmpVec.set(moveInput.x, 0, moveInput.y);
    if (dir.lengthSq() < 0.01) dir.copy(this.facing);
    dir.y = 0;
    dir.normalize();
    this.velocity.copy(dir).multiplyScalar(PLAYER.dashSpeed);
    this.dashTimer = PLAYER.dashDuration;
    this.dashCooldown = PLAYER.dashCooldown;
    this.invulnerable = Math.max(this.invulnerable, PLAYER.dashInvulnerability);
    return true;
  }

  /** Discrete hit (e.g. complement). Returns false while invulnerable. */
  takeHit() {
    if (this.dying || this.invulnerable > 0) return false;
    this.invulnerable = PLAYER.hitInvulnerability;
    this.hitFlash = 0.4;
    return true;
  }

  flash(amount = 0.25) {
    this.hitFlash = Math.max(this.hitFlash, amount);
  }

  pulseEngulf() {
    this.engulfPulse = 1;
  }

  setHealthRatio(ratio) {
    this.healthRatio = ratio;
  }

  /**
   * @param {number} dt
   * @param {THREE.Vector2} moveInput
   * @param {THREE.Vector3} aimDirection horizontal unit vector (or zero)
   */
  update(dt, moveInput, aimDirection) {
    this.time += dt;
    if (this.dying) {
      this.updateDeath(dt);
      return;
    }

    this.cooldown = Math.max(0, this.cooldown - dt);
    this.dashCooldown = Math.max(0, this.dashCooldown - dt);
    this.invulnerable = Math.max(0, this.invulnerable - dt);
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    this.engulfPulse = Math.max(0, this.engulfPulse - dt * 3);

    const position = this.group.position;
    if (this.dashTimer > 0) {
      this.dashTimer -= dt;
    } else {
      const desired = tmpVec.set(moveInput.x, 0, moveInput.y);
      if (desired.lengthSq() > 1) desired.normalize();
      desired.multiplyScalar(PLAYER.speed);
      this.velocity.lerp(desired, 1 - Math.exp(-PLAYER.acceleration * dt));
    }
    position.x += this.velocity.x * dt;
    position.z += this.velocity.z * dt;

    const r = Math.hypot(position.x, position.z);
    if (r > ARENA.playRadius) {
      const nx = position.x / r;
      const nz = position.z / r;
      position.x = nx * ARENA.playRadius;
      position.z = nz * ARENA.playRadius;
      const outward = this.velocity.x * nx + this.velocity.z * nz;
      if (outward > 0) {
        this.velocity.x -= outward * nx;
        this.velocity.z -= outward * nz;
      }
    }

    const surface = getSynovialSurfaceHeight(position.x, position.z) + PLAYER.surfaceOffset;
    position.y += (surface - position.y) * (1 - Math.exp(-10 * dt));

    if (aimDirection.lengthSq() > 1e-4) {
      this.facing.copy(aimDirection).setY(0).normalize();
      this.yaw = dampAngle(this.yaw, Math.atan2(this.facing.x, this.facing.z), 20, dt);
    }
    this.group.rotation.set(0, this.yaw, 0);

    // Crawling motion: a gentle roll proportional to speed.
    const speed = Math.hypot(this.velocity.x, this.velocity.z);
    const crawl = Math.min(1, speed / PLAYER.speed);
    this.visual.rotation.z = Math.sin(this.time * 11) * 0.09 * crawl;
    this.visual.rotation.x = Math.cos(this.time * 13) * 0.07 * crawl;

    // Feed the membrane shader the local-space velocity so the leading edge
    // extends a pseudopod (lamellipodium) in the direction of migration.
    tmpQuat.copy(this.group.quaternion).invert();
    const localMove = tmpVec2.copy(this.velocity).applyQuaternion(tmpQuat);
    localMove.y = 0;
    localMove.divide(BODY_SCALE).multiplyScalar(1 / PLAYER.speed);
    if (localMove.lengthSq() > 2.5) localMove.setLength(1.58);
    const uniforms = this.membraneMaterial.userData.uniforms;
    uniforms.uTime.value = this.time;
    uniforms.uMove.value.copy(localMove);
    uniforms.uRuffle.value = 1 + this.engulfPulse * 1.5;

    const flash = Math.min(1, this.hitFlash / 0.25);
    const lowHealth = this.healthRatio < 0.3 ? (0.5 + 0.5 * Math.sin(this.time * 9)) * (1 - this.healthRatio / 0.3) * 0.6 : 0;
    uniforms.uRimColor.value.copy(membraneRim).lerp(hurtRim, Math.max(flash, lowHealth));
    uniforms.uRimStrength.value = 0.75 + flash * 1.2;
    const blink = this.invulnerable > 0 && this.hitFlash <= 0 && !this.isDashing ? 0.65 + 0.35 * Math.sin(this.time * 40) : 1;
    this.membraneMaterial.opacity = MEMBRANE_OPACITY * blink;

    const pulse = 1 + this.engulfPulse * 0.12;
    this.membrane.scale.copy(BODY_SCALE).multiplyScalar(pulse);
    this.nucleus.rotation.y = Math.sin(this.time * 0.8) * 0.18;
    this.nucleus.position.y = 0.12 + Math.sin(this.time * 2.1) * 0.03;
    this.updateGranules(this.time, 0);
    this.updateDecals();
  }

  updateGranules(time, burst) {
    const dummy = this.granuleDummy;
    for (let i = 0; i < GRANULES; i += 1) {
      const g = this.granuleData[i];
      dummy.position.copy(g.home);
      dummy.position.x += Math.sin(time * g.speed + g.phase) * 0.07;
      dummy.position.y += Math.cos(time * g.speed * 1.3 + g.phase) * 0.05;
      dummy.position.z += Math.sin(time * g.speed * 0.7 + g.phase * 2) * 0.07;
      if (burst > 0) dummy.position.addScaledVector(g.burst, burst * 4.6);
      dummy.scale.setScalar(1 + burst * 1.4);
      dummy.updateMatrix();
      this.granules.setMatrixAt(i, dummy.matrix);
    }
    this.granules.instanceMatrix.needsUpdate = true;
  }

  updateDecals() {
    const p = this.group.position;
    const groundY = getSynovialSurfaceHeight(p.x, p.z);
    getSurfaceNormal(p.x, p.z, tmpNormal);
    this.aura.position.set(p.x, groundY + 0.1, p.z);
    this.aura.quaternion.setFromUnitVectors(FORWARD, tmpNormal);
    this.auraMaterial.color.setHex(this.hitFlash > 0 ? 0xff5a7a : 0x8ff3ff);
    this.auraMaterial.opacity = 0.42 + Math.sin(this.time * 4) * 0.08;

    const cx = p.x + this.facing.x * 3.1;
    const cz = p.z + this.facing.z * 3.1;
    getSurfaceNormal(cx, cz, tmpNormal);
    this.chevron.position.set(cx, getSynovialSurfaceHeight(cx, cz) + 0.12, cz);
    // Lay the plane on the surface, then spin it so the chevron points along
    // the facing direction.
    tmpQuat.setFromUnitVectors(FORWARD, tmpNormal);
    const spin = Math.atan2(this.facing.x, -this.facing.z);
    tmpQuat2.setFromAxisAngle(FORWARD, -spin);
    this.chevron.quaternion.copy(tmpQuat).multiply(tmpQuat2);
    this.chevronMaterial.opacity = this.cooldown > 0 ? 0.45 : 0.85;
  }

  beginDeathBurst() {
    if (this.dying) return;
    this.dying = true;
    this.deathTimer = 0;
    this.velocity.set(0, 0, 0);
    this.decals.visible = false;
  }

  updateDeath(dt) {
    this.deathTimer += dt;
    const t = Math.min(1, this.deathTimer / this.deathDuration);
    const ease = 1 - Math.pow(1 - t, 3);
    // Suicidal NETosis: the membrane ruptures, chromatin decondenses and the
    // granule contents spill out.
    this.membrane.scale.copy(BODY_SCALE).multiplyScalar(1 + ease * 2.2);
    this.membraneMaterial.opacity = Math.max(0, MEMBRANE_OPACITY * (1 - t));
    this.cytoplasmMaterial.opacity = Math.max(0, 0.16 * (1 - t));
    this.nucleus.scale.setScalar(1 + ease * 1.1);
    this.nucleus.rotation.y += dt * 4;
    this.nucleusMaterial.opacity = Math.max(0, 1 - t * 1.1);
    this.granuleMaterial.opacity = Math.max(0, 0.95 * (1 - t * 0.9));
    this.updateGranules(this.time, ease);
    this.membraneMaterial.userData.uniforms.uTime.value = this.time;
    if (t >= 1) this.group.visible = false;
  }

  deathFinished() {
    return this.dying && this.deathTimer >= this.deathDuration;
  }

  getMuzzleWorldPosition(target) {
    return this.muzzle.getWorldPosition(target);
  }
}
