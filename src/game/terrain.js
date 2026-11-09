import { ARENA } from "./config.js";

function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

// Height of the synovial lining at (x, z). Gameplay (player, crawling
// synoviocytes) and the floor mesh both use this, so they always agree.
export function getSynovialSurfaceHeight(x, z) {
  const rolling =
    Math.sin(x * 0.35) * 0.9 + Math.cos(z * 0.28) * 0.7 + Math.sin((x + z) * 0.18) * 0.65;
  const r = Math.hypot(x, z);

  // The articular cartilage at the centre is a smooth plateau with a gentle
  // dome (like the convex surface of a condyle).
  const plateau = 1 - smoothstep(ARENA.cartilageRadius - 0.4, ARENA.cartilageRadius + 3, r);
  const height = rolling + (1.05 - rolling) * plateau;
  const dome = (1 - smoothstep(0, ARENA.cartilageRadius + 0.4, r)) * 0.55;

  // The floor curls up into the joint capsule wall like a bowl.
  const lip = smoothstep(ARENA.playRadius + 1, ARENA.wallRadius + 1, r);
  return height + dome + lip * lip * 3.2;
}

// Approximate surface normal from central differences.
export function getSurfaceNormal(x, z, target) {
  const e = 0.35;
  const hx = getSynovialSurfaceHeight(x + e, z) - getSynovialSurfaceHeight(x - e, z);
  const hz = getSynovialSurfaceHeight(x, z + e) - getSynovialSurfaceHeight(x, z - e);
  target.set(-hx, 2 * e, -hz).normalize();
  return target;
}

export { smoothstep };
