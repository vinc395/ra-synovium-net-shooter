import * as THREE from "three";

// All textures are generated procedurally at start-up, so the game ships with
// no image assets and every surface tiles seamlessly.

export function mulberry32(seed) {
  let s = seed >>> 0;
  return function random() {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class PeriodicNoise {
  constructor(period, random) {
    this.period = period;
    this.values = new Float32Array(period * period);
    for (let i = 0; i < this.values.length; i += 1) this.values[i] = random();
  }

  sample(u, v) {
    const p = this.period;
    const x = u * p;
    const y = v * p;
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = x - xi;
    const yf = y - yi;
    const x0 = ((xi % p) + p) % p;
    const y0 = ((yi % p) + p) % p;
    const x1 = (x0 + 1) % p;
    const y1 = (y0 + 1) % p;
    const sx = xf * xf * (3 - 2 * xf);
    const sy = yf * yf * (3 - 2 * yf);
    const a = this.values[y0 * p + x0];
    const b = this.values[y0 * p + x1];
    const c = this.values[y1 * p + x0];
    const d = this.values[y1 * p + x1];
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
  }
}

class PeriodicWorley {
  constructor(cells, random) {
    this.cells = cells;
    this.points = new Float32Array(cells * cells * 2);
    this.tones = new Float32Array(cells * cells);
    this.sizes = new Float32Array(cells * cells);
    for (let i = 0; i < cells * cells; i += 1) {
      this.points[i * 2] = 0.18 + random() * 0.64;
      this.points[i * 2 + 1] = 0.18 + random() * 0.64;
      this.tones[i] = random();
      this.sizes[i] = random();
    }
    this.result = { f1: 0, f2: 0, id: 0 };
  }

  sample(u, v) {
    const n = this.cells;
    const x = u * n;
    const y = v * n;
    const cx = Math.floor(x);
    const cy = Math.floor(y);
    let f1 = 1e9;
    let f2 = 1e9;
    let id = 0;
    for (let dy = -1; dy <= 1; dy += 1) {
      for (let dx = -1; dx <= 1; dx += 1) {
        const gx = cx + dx;
        const gy = cy + dy;
        const wx = ((gx % n) + n) % n;
        const wy = ((gy % n) + n) % n;
        const index = wy * n + wx;
        const px = gx + this.points[index * 2];
        const py = gy + this.points[index * 2 + 1];
        const d = Math.hypot(px - x, py - y);
        if (d < f1) {
          f2 = f1;
          f1 = d;
          id = index;
        } else if (d < f2) {
          f2 = d;
        }
      }
    }
    this.result.f1 = f1;
    this.result.f2 = f2;
    this.result.id = id;
    return this.result;
  }
}

function smooth(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function makeCanvas(width, height = width) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function finishColorTexture(canvas, anisotropy = 1) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = anisotropy;
  return texture;
}

function heightToNormalCanvas(height, size, strength) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(size, size);
  const data = image.data;
  const at = (x, y) => height[((y + size) % size) * size + ((x + size) % size)];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      // Rows run downwards in the canvas while +V runs upwards (flipY), so
      // the Y gradient sign is inverted relative to X.
      const nx = -(at(x + 1, y) - at(x - 1, y)) * strength;
      const ny = (at(x, y + 1) - at(x, y - 1)) * strength;
      const len = Math.hypot(nx, ny, 1);
      const o = (y * size + x) * 4;
      data[o] = ((nx / len) * 0.5 + 0.5) * 255;
      data[o + 1] = ((ny / len) * 0.5 + 0.5) * 255;
      data[o + 2] = ((1 / len) * 0.5 + 0.5) * 255;
      data[o + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  return canvas;
}

function drawWrapped(ctx, size, draw) {
  for (let oy = -1; oy <= 1; oy += 1) {
    for (let ox = -1; ox <= 1; ox += 1) {
      ctx.save();
      ctx.translate(ox * size, oy * size);
      draw(ctx);
      ctx.restore();
    }
  }
}

/**
 * Synovial lining: cobblestone lining cells with dark nuclei, cell borders,
 * soft fBm variation and a capillary network.
 */
export function createTissueTextures(size = 512, anisotropy = 4) {
  const random = mulberry32(1337);
  const noises = [6, 12, 24, 48].map((p) => new PeriodicNoise(p, random));
  const cells = new PeriodicWorley(14, random);
  const height = new Float32Array(size * size);

  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(size, size);
  const data = image.data;

  const deep = [0.5, 0.13, 0.27];
  const light = [0.88, 0.45, 0.6];
  const border = [0.38, 0.07, 0.2];
  const nucleus = [0.36, 0.11, 0.4];

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const u = x / size;
      const v = y / size;
      let n = 0;
      let amp = 0.5;
      let norm = 0;
      for (const noise of noises) {
        n += noise.sample(u, v) * amp;
        norm += amp;
        amp *= 0.5;
      }
      n /= norm;

      const w = cells.sample(u, v);
      const edge = w.f2 - w.f1;
      const dome = 1 - smooth(0, 0.75, w.f1);
      const borderMask = 1 - smooth(0.0, 0.13, edge);
      const tone = cells.tones[w.id];
      const nucleusRadius = 0.13 + cells.sizes[w.id] * 0.09;
      const nucleusMask = 1 - smooth(nucleusRadius * 0.7, nucleusRadius, w.f1);

      const h = dome * 0.55 + n * 0.45 - borderMask * 0.28 + nucleusMask * 0.12;
      height[y * size + x] = h;

      const t = Math.min(1, Math.max(0, h * 0.85 + (tone - 0.5) * 0.22 + 0.1));
      let r = deep[0] + (light[0] - deep[0]) * t;
      let g = deep[1] + (light[1] - deep[1]) * t;
      let b = deep[2] + (light[2] - deep[2]) * t;
      const bm = borderMask * 0.5;
      r += (border[0] - r) * bm;
      g += (border[1] - g) * bm;
      b += (border[2] - b) * bm;
      const nm = nucleusMask * 0.62;
      r += (nucleus[0] - r) * nm;
      g += (nucleus[1] - g) * nm;
      b += (nucleus[2] - b) * nm;

      const o = (y * size + x) * 4;
      data[o] = Math.min(255, r * 255);
      data[o + 1] = Math.min(255, g * 255);
      data[o + 2] = Math.min(255, b * 255);
      data[o + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);

  // Capillary network: smooth random walks, drawn wrapped so they tile.
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (let i = 0; i < 9; i += 1) {
    const points = [];
    let px = random() * size;
    let py = random() * size;
    let angle = random() * Math.PI * 2;
    const steps = 30 + Math.floor(random() * 40);
    for (let s = 0; s < steps; s += 1) {
      angle += (random() - 0.5) * 0.7;
      px += Math.cos(angle) * size * 0.012;
      py += Math.sin(angle) * size * 0.012;
      points.push([px, py]);
    }
    const width = (0.8 + random() * 1.6) * (size / 512);
    drawWrapped(ctx, size, (c) => {
      c.strokeStyle = "rgba(205, 22, 62, 0.42)";
      c.lineWidth = width * 2.4;
      c.beginPath();
      points.forEach(([qx, qy], index) => (index ? c.lineTo(qx, qy) : c.moveTo(qx, qy)));
      c.stroke();
      c.strokeStyle = "rgba(255, 92, 120, 0.35)";
      c.lineWidth = width;
      c.stroke();
    });
  }

  const map = finishColorTexture(canvas, anisotropy);
  const normalCanvas = heightToNormalCanvas(height, size, size / 64);
  const normalMap = new THREE.CanvasTexture(normalCanvas);
  normalMap.colorSpace = THREE.NoColorSpace;
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.anisotropy = anisotropy;
  return { map, normalMap };
}

/** Hyaline cartilage: pale, glossy matrix with chondrocyte lacunae. */
export function createCartilageTexture(size = 256, anisotropy = 4) {
  const random = mulberry32(4242);
  const noises = [4, 8, 16, 32].map((p) => new PeriodicNoise(p, random));
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(size, size);
  const data = image.data;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      let n = 0;
      let amp = 0.5;
      for (const noise of noises) {
        n += noise.sample(x / size, y / size) * amp;
        amp *= 0.5;
      }
      const o = (y * size + x) * 4;
      data[o] = 214 + n * 30;
      data[o + 1] = 224 + n * 22;
      data[o + 2] = 236 + n * 16;
      data[o + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);

  // Chondrocytes sit in lacunae, often in small isogenous pairs.
  for (let i = 0; i < 46; i += 1) {
    const cx = random() * size;
    const cy = random() * size;
    const pair = random() > 0.55;
    const rot = random() * Math.PI;
    drawWrapped(ctx, size, (c) => {
      for (let k = 0; k < (pair ? 2 : 1); k += 1) {
        const ox = pair ? Math.cos(rot) * (k ? 4 : -4) : 0;
        const oy = pair ? Math.sin(rot) * (k ? 4 : -4) : 0;
        c.save();
        c.translate(cx + ox, cy + oy);
        c.rotate(rot);
        c.fillStyle = "rgba(150, 170, 205, 0.55)";
        c.beginPath();
        c.ellipse(0, 0, 4.2, 3, 0, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = "rgba(118, 92, 160, 0.7)";
        c.beginPath();
        c.ellipse(0, 0, 1.8, 1.4, 0, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    });
  }
  return finishColorTexture(canvas, anisotropy);
}

/** Soft round sprite for particles, halos and motes. */
export function createSoftDotTexture(size = 64) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.25, "rgba(255,255,255,0.75)");
  g.addColorStop(0.6, "rgba(255,255,255,0.18)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Glowing ring used for floor decals (player aura, cartilage zone, spawns). */
export function createRingTexture(size = 128, inner = 0.62, outer = 0.92) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,0.06)");
  g.addColorStop(Math.max(0, inner - 0.12), "rgba(255,255,255,0.1)");
  g.addColorStop(inner, "rgba(255,255,255,0.55)");
  g.addColorStop((inner + outer) / 2, "rgba(255,255,255,1)");
  g.addColorStop(outer, "rgba(255,255,255,0.15)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Neutrophil extracellular trap: branching chromatin strands with cross-links
 * and bead-like granule proteins, fading towards the rim.
 */
export function createNetTexture(size = 256, seed = 99) {
  const random = mulberry32(seed);
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  const c = size / 2;
  const R = size * 0.46;
  const spokes = 11;
  const rings = [0.28, 0.52, 0.76, 0.96];
  const nodes = [];

  for (let s = 0; s < spokes; s += 1) {
    const base = (s / spokes) * Math.PI * 2 + (random() - 0.5) * 0.3;
    const row = [];
    for (let k = 0; k < rings.length; k += 1) {
      const a = base + (random() - 0.5) * 0.25;
      const r = R * rings[k] * (0.88 + random() * 0.2);
      row.push([c + Math.cos(a) * r, c + Math.sin(a) * r]);
    }
    nodes.push(row);
  }

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const strand = (points, width, alpha) => {
    ctx.strokeStyle = `rgba(225, 252, 255, ${alpha})`;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) {
      const [x0, y0] = points[i - 1];
      const [x1, y1] = points[i];
      const mx = (x0 + x1) / 2 + (random() - 0.5) * size * 0.04;
      const my = (y0 + y1) / 2 + (random() - 0.5) * size * 0.04;
      ctx.quadraticCurveTo(mx, my, x1, y1);
    }
    ctx.stroke();
  };

  ctx.shadowColor = "rgba(120, 240, 255, 0.95)";
  ctx.shadowBlur = size * 0.03;
  const scale = size / 256;
  for (const row of nodes) strand([[c, c], ...row], 2.2 * scale, 0.95);
  for (let k = 0; k < rings.length; k += 1) {
    for (let s = 0; s < spokes; s += 1) {
      if (random() < 0.18) continue;
      strand([nodes[s][k], nodes[(s + 1) % spokes][k]], (1.6 - k * 0.2) * scale, 0.85);
    }
  }
  for (let i = 0; i < 14; i += 1) {
    const s = Math.floor(random() * spokes);
    const k = Math.floor(random() * (rings.length - 1));
    strand([nodes[s][k], nodes[(s + 2) % spokes][k + 1]], 1 * scale, 0.6);
  }

  // Granule proteins (elastase / MPO) and histones as beads on the strands.
  ctx.shadowColor = "rgba(255, 235, 160, 0.9)";
  ctx.shadowBlur = size * 0.025;
  for (const row of nodes) {
    for (const [x, y] of row) {
      ctx.fillStyle = random() > 0.4 ? "rgba(255, 246, 200, 1)" : "rgba(200, 255, 255, 1)";
      ctx.beginPath();
      ctx.arc(x, y, (1.6 + random() * 1.8) * scale, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.shadowBlur = 0;
  ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.beginPath();
  ctx.arc(c, c, 4 * scale, 0, Math.PI * 2);
  ctx.fill();

  // Fade the rim out.
  ctx.globalCompositeOperation = "destination-in";
  const fade = ctx.createRadialGradient(c, c, R * 0.3, c, c, size / 2);
  fade.addColorStop(0, "rgba(0,0,0,1)");
  fade.addColorStop(0.8, "rgba(0,0,0,0.75)");
  fade.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = fade;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = "source-over";

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Puffy cloud for cytokine haze. */
export function createCloudTexture(size = 128, seed = 7) {
  const random = mulberry32(seed);
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  for (let i = 0; i < 14; i += 1) {
    const x = size * (0.28 + random() * 0.44);
    const y = size * (0.28 + random() * 0.44);
    const r = size * (0.12 + random() * 0.22);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(255,255,255,0.32)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Small text label sprite texture (e.g. cytokine names). */
export function createLabelTexture(text, color = "#ffe3f1") {
  const canvas = makeCanvas(256, 96);
  const ctx = canvas.getContext("2d");
  ctx.font = "800 56px system-ui, -apple-system, 'Segoe UI', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgba(60, 4, 34, 0.85)";
  ctx.strokeText(text, 128, 50);
  ctx.fillStyle = color;
  ctx.fillText(text, 128, 50);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Chevron used for the aim direction marker on the floor. */
export function createChevronTexture(size = 128) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext("2d");
  ctx.shadowColor = "rgba(140, 245, 255, 1)";
  ctx.shadowBlur = size * 0.08;
  ctx.strokeStyle = "rgba(230, 253, 255, 0.95)";
  ctx.lineWidth = size * 0.09;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (let i = 0; i < 2; i += 1) {
    const y = size * (0.62 - i * 0.26);
    ctx.globalAlpha = i ? 0.55 : 1;
    ctx.beginPath();
    ctx.moveTo(size * 0.24, y + size * 0.14);
    ctx.lineTo(size * 0.5, y - size * 0.06);
    ctx.lineTo(size * 0.76, y + size * 0.14);
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Vertical gradient for the scene background. */
export function createBackgroundTexture() {
  const canvas = makeCanvas(4, 256);
  const ctx = canvas.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, "#1a0418");
  g.addColorStop(0.45, "#3d0d30");
  g.addColorStop(1, "#7a2150");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 4, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
