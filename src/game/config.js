// Central tuning values. Keeping them in one place makes the biology/gameplay
// trade-offs easy to read and rebalance.

export const ARENA = {
  wallRadius: 36,
  playRadius: 30,
  spawnRadius: 31.5,
  cartilageRadius: 4.4,
  escapeRadius: 3.1,
};

export const RULES = {
  maxHealth: 100,
  maxInflammation: 100,
  maxNetBurden: 100,
  startInflammation: 25,
  stabiliseSeconds: 150,
  winClears: 55,
  clearsPerWave: 10,

  // Every NET release leaves chromatin webbing behind (NET burden), while a
  // successful capture removes a little of it again.
  netShotCost: 3.4,
  netHitRelief: 1.2,
  netDecayPerSecond: 1.6,
  netOverloadThreshold: 72,
  netOverloadInflammation: 3.5,
  netOverloadDamage: 2.8,

  // Radial NET burst (special ability).
  burstCost: 16,
  burstChargePerClear: 0.125,
  burstProjectiles: 14,

  // Phagocytosis: engulfing small particles costs a little health (oxidative
  // burst strain) but releases no NETs.
  phagocytosisHealthCost: 2,

  healthRegenDelay: 3.2,
  healthRegenPerSecond: 0.8,

  fireCooldown: 0.22,
  comboWindow: 2.6,
};

export const PLAYER = {
  speed: 11,
  acceleration: 12,
  dashSpeed: 30,
  dashDuration: 0.16,
  dashCooldown: 1.5,
  dashInvulnerability: 0.3,
  hitInvulnerability: 0.6,
  surfaceOffset: 1.35,
  engulfReach: 1.3,
};

export const PROJECTILE = {
  speed: 26,
  life: 1.45,
  burstSpeed: 20,
  burstLife: 1.25,
  baseRadius: 0.6,
  radiusGrowth: 1.1,
  wrapDuration: 0.45,
  verticalReach: 3.2,
};

// Per-kind definitions. `minWave` and `weights` control when each stimulus
// joins the mix; `hp` > 1 means several NET hits are needed.
export const TARGET_KINDS = {
  complex: {
    label: "Immune complex",
    color: 0xffd8f4,
    glow: 0xff9ee0,
    radius: 1.1,
    speedScale: 1,
    hover: 2.1,
    penalty: 7,
    relief: 8,
    points: 100,
    hp: 1,
    phagocytosable: true,
    minWave: 1,
    weight: 3,
  },
  platelet: {
    label: "Platelet microthrombus",
    color: 0xf3b04d,
    glow: 0xffa640,
    radius: 1.25,
    speedScale: 0.75,
    hover: 1.9,
    penalty: 8,
    relief: 5,
    points: 120,
    hp: 1,
    phagocytosable: false,
    minWave: 2,
    weight: 2,
  },
  debris: {
    label: "Citrullinated debris",
    color: 0xffc63a,
    glow: 0xffd65a,
    radius: 0.95,
    speedScale: 1,
    hover: 1.8,
    penalty: 6,
    relief: 7,
    points: 90,
    hp: 1,
    phagocytosable: true,
    minWave: 1,
    weight: 3,
  },
  cytokine: {
    label: "Cytokine cloud",
    color: 0xff4d9a,
    glow: 0xff3d8f,
    radius: 1.35,
    speedScale: 0.6,
    hover: 2.8,
    penalty: 9,
    relief: 10,
    points: 140,
    hp: 1,
    phagocytosable: false,
    minWave: 1,
    weight: 2,
  },
  synoviocyte: {
    label: "Invasive synoviocyte",
    color: 0xb555b7,
    glow: 0xd36bff,
    radius: 1.4,
    speedScale: 0.8,
    hover: 0.55,
    penalty: 10,
    relief: 6,
    points: 220,
    hp: 2,
    phagocytosable: false,
    minWave: 3,
    weight: 2,
  },
  complement: {
    label: "Complement burst",
    color: 0x9dfbff,
    glow: 0x34f2ff,
    radius: 0.95,
    speedScale: 1.55,
    hover: 1.7,
    penalty: 0,
    relief: 7,
    points: 160,
    hp: 1,
    phagocytosable: false,
    minWave: 2,
    weight: 1.4,
    contactDamage: 16,
    lifetime: 16,
  },
};

export const WAVE_INTROS = {
  1: "Trap immune complexes, debris and cytokines before they reach the cartilage",
  2: "Platelet microthrombi and complement bursts join the infiltrate",
  3: "Invasive synoviocytes crawl in — they need two NET hits",
};

export const FACTS = [
  "NETs are web-like strands of decondensed chromatin decorated with granule proteins such as neutrophil elastase and myeloperoxidase.",
  "In RA, NETs are a source of citrullinated autoantigens that are recognised by anti-citrullinated protein antibodies (ACPAs).",
  "PAD4 citrullinates histones during NET formation, helping chromatin decondense.",
  "Fibroblast-like synoviocytes can internalise NET components and present citrullinated peptides to T cells.",
  "Aggregated NETs can trap and degrade cytokines and chemokines, which may help inflammation resolve.",
  "Pannus — invasive, hyperplastic synovial tissue — erodes cartilage and bone in RA.",
  "The inflamed RA synovium grows new blood vessels, which recruit even more immune cells into the joint.",
  "Neutrophils are the most abundant immune cells in RA synovial fluid.",
];

export const QUALITY_PRESETS = {
  high: {
    pixelRatio: 2,
    shadows: true,
    shadowMapSize: 2048,
    bloom: true,
    msaa: 4,
    particles: 700,
    villi: 300,
    textureSize: 512,
  },
  medium: {
    pixelRatio: 1.5,
    shadows: true,
    shadowMapSize: 1024,
    bloom: true,
    msaa: 0,
    particles: 420,
    villi: 200,
    textureSize: 512,
  },
  low: {
    pixelRatio: 1,
    shadows: false,
    shadowMapSize: 512,
    bloom: false,
    msaa: 0,
    particles: 220,
    villi: 120,
    textureSize: 256,
  },
};

export const QUALITY_ORDER = ["high", "medium", "low"];
