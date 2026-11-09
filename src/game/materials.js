import * as THREE from "three";

// Shared GLSL snippets injected into MeshStandardMaterial via onBeforeCompile.
// Every function below uses a fixed shader source (uniform *values* differ
// per material), so three.js can share one GPU program between materials.

const RIM_FRAGMENT = /* glsl */ `
  #include <emissivemap_fragment>
  {
    float rimFacing = 1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0);
    totalEmissiveRadiance += uRimColor * pow(rimFacing, uRimPower) * uRimStrength;
  }
`;

const RIM_UNIFORMS = /* glsl */ `
  uniform vec3 uRimColor;
  uniform float uRimPower;
  uniform float uRimStrength;
`;

function injectRim(shader) {
  shader.fragmentShader = shader.fragmentShader
    .replace("#include <common>", `#include <common>\n${RIM_UNIFORMS}`)
    .replace("#include <emissivemap_fragment>", RIM_FRAGMENT);
}

function rimUniforms(color, power, strength) {
  return {
    uRimColor: { value: new THREE.Color(color) },
    uRimPower: { value: power },
    uRimStrength: { value: strength },
  };
}

function rimOnBeforeCompile(shader) {
  Object.assign(shader.uniforms, this.userData.uniforms);
  injectRim(shader);
}

/**
 * Adds a fresnel rim glow, giving cells the translucent halo they have under
 * a microscope. Returns the material; `material.userData.uniforms` holds the
 * live uniforms so the rim can be animated (e.g. damage flashes).
 */
export function withRim(material, { color = 0xffffff, power = 2.4, strength = 0.6 } = {}) {
  material.userData.uniforms = rimUniforms(color, power, strength);
  material.onBeforeCompile = rimOnBeforeCompile;
  material.customProgramCacheKey = () => "rim";
  return material;
}

/** Membrane that ruffles and pushes a leading-edge pseudopod while moving. */
export function createMembraneMaterial(options, rim) {
  const material = new THREE.MeshStandardMaterial(options);
  material.userData.uniforms = {
    ...rimUniforms(rim.color, rim.power, rim.strength),
    uTime: { value: 0 },
    uMove: { value: new THREE.Vector3() },
    uRuffle: { value: 1 },
  };
  material.onBeforeCompile = function onBeforeCompile(shader) {
    Object.assign(shader.uniforms, this.userData.uniforms);
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
        uniform float uTime;
        uniform vec3 uMove;
        uniform float uRuffle;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        {
          vec3 dir = normalize(position);
          float ruffle = sin(dir.x * 7.0 + uTime * 3.1) * sin(dir.z * 6.0 - uTime * 2.3) * 0.07
            + sin(dir.y * 9.0 + uTime * 4.2) * 0.035;
          float speed = length(uMove);
          float lead = speed > 0.001 ? max(dot(dir, uMove / speed), 0.0) : 0.0;
          float extend = lead * lead * lead * speed * 0.5;
          transformed += dir * (ruffle * uRuffle + extend);
        }`,
      );
    injectRim(shader);
  };
  material.customProgramCacheKey = () => "membrane";
  return material;
}

/** Villous fronds sway in the synovial fluid; displacement grows with height. */
export function createVilliMaterial(options, rim) {
  const material = new THREE.MeshStandardMaterial(options);
  material.userData.uniforms = {
    ...rimUniforms(rim.color, rim.power, rim.strength),
    uTime: { value: 0 },
  };
  material.onBeforeCompile = function onBeforeCompile(shader) {
    Object.assign(shader.uniforms, this.userData.uniforms);
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nuniform float uTime;")
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
            vec3 origin = vec3(instanceMatrix[3]);
          #else
            vec3 origin = vec3(0.0);
          #endif
          float phase = origin.x * 0.31 + origin.z * 0.23;
          float bend = position.y * position.y;
          transformed.x += sin(uTime * 1.25 + phase) * 0.22 * bend;
          transformed.z += cos(uTime * 1.05 + phase * 1.7) * 0.18 * bend;
        }`,
      );
    injectRim(shader);
  };
  material.customProgramCacheKey = () => "villi";
  return material;
}

const NOISE_GLSL = /* glsl */ `
  float tissueHash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float tissueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(tissueHash(i), tissueHash(i + vec2(1.0, 0.0)), u.x),
      mix(tissueHash(i + vec2(0.0, 1.0)), tissueHash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
`;

/**
 * Synovial floor: reacts to the game state. Inflammation flushes the tissue
 * red and pulses with the heartbeat, NET burden darkens hypoxic patches and
 * low-frequency noise breaks up texture tiling.
 */
export function createFloorMaterial(options) {
  const material = new THREE.MeshStandardMaterial(options);
  material.userData.uniforms = {
    uTime: { value: 0 },
    uInflammation: { value: 0.25 },
    uNetBurden: { value: 0 },
    uPulse: { value: 0 },
  };
  material.onBeforeCompile = function onBeforeCompile(shader) {
    Object.assign(shader.uniforms, this.userData.uniforms);
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec2 vTissueXZ;")
      .replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nvTissueXZ = (modelMatrix * vec4(transformed, 1.0)).xz;",
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        varying vec2 vTissueXZ;
        uniform float uTime;
        uniform float uInflammation;
        uniform float uNetBurden;
        uniform float uPulse;
        ${NOISE_GLSL}`,
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        {
          float broad = tissueNoise(vTissueXZ * 0.07) * 0.6 + tissueNoise(vTissueXZ * 0.19) * 0.4;
          diffuseColor.rgb *= 0.82 + broad * 0.36;
          float hypoxia = smoothstep(0.58, 0.82, tissueNoise(vTissueXZ * 0.055 + 11.0));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.42, 0.3, 0.62),
            hypoxia * (0.25 + uNetBurden * 0.6));
          float flush = uInflammation * (0.55 + 0.45 * uPulse);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.35, 0.72, 0.78), flush * 0.45);
        }`,
      );
  };
  material.customProgramCacheKey = () => "synovialFloor";
  return material;
}

/** Cartilage erodes (pitted, reddened patches) as stimuli reach it. */
export function createCartilageMaterial(options) {
  const material = new THREE.MeshStandardMaterial(options);
  material.userData.uniforms = {
    ...rimUniforms(0xbfe6ff, 2.2, 0.12),
    uErosion: { value: 0 },
    uThreat: { value: 0 },
  };
  material.onBeforeCompile = function onBeforeCompile(shader) {
    Object.assign(shader.uniforms, this.userData.uniforms);
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec2 vCartXZ;")
      .replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nvCartXZ = (modelMatrix * vec4(transformed, 1.0)).xz;",
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        varying vec2 vCartXZ;
        uniform float uErosion;
        uniform float uThreat;
        ${NOISE_GLSL}`,
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        {
          float n = tissueNoise(vCartXZ * 1.3) * 0.65 + tissueNoise(vCartXZ * 3.1) * 0.35;
          float pit = smoothstep(1.0 - uErosion, 1.0 - uErosion + 0.08, n);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55, 0.16, 0.24), pit * 0.85);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.45, 0.55), uThreat * 0.18);
        }`,
      );
    injectRim(shader);
  };
  material.customProgramCacheKey = () => "cartilage";
  return material;
}
