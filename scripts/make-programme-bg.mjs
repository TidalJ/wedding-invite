import sharp from "sharp";

const input = "public/bg/programme-bg.jpg";
const output = "public/bg/programme-bg.png";

const meta = await sharp(input).metadata();
const w = meta.width;
const h = meta.height;
if (!w || !h) throw new Error("Missing width/height");

const { data } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const off = (x, y) => (y * w + x) * 4;
const idx = (x, y) => y * w + x;
const luma = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
const max3 = (a, b, c) => Math.max(a, Math.max(b, c));
const min3 = (a, b, c) => Math.min(a, Math.min(b, c));

// Only treat a pixel as removable \"background black\" if it is dark AND close to neutral (not colored).
// This avoids removing dark reds in 囍.
function isDarkNeutral(x, y, lumThr, neutralDelta) {
  const o = off(x, y);
  const r = data[o],
    g = data[o + 1],
    b = data[o + 2];
  const lum = luma(r, g, b);
  const delta = max3(r, g, b) - min3(r, g, b);
  return lum <= lumThr && delta <= neutralDelta;
}

const neigh8 = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

// 1) Edge flood-fill: remove only dark-neutral pixels connected to image edges.
const edgeLumThr = 70;
const edgeNeutralDelta = 18;
const isBg = new Uint8Array(w * h);
const qx = new Int32Array(w * h);
const qy = new Int32Array(w * h);
let qs = 0,
  qe = 0;

function pushEdge(x, y) {
  const i = idx(x, y);
  if (isBg[i]) return;
  isBg[i] = 1;
  qx[qe] = x;
  qy[qe] = y;
  qe++;
}

for (let x = 0; x < w; x++) {
  if (isDarkNeutral(x, 0, edgeLumThr, edgeNeutralDelta)) pushEdge(x, 0);
  if (isDarkNeutral(x, h - 1, edgeLumThr, edgeNeutralDelta)) pushEdge(x, h - 1);
}
for (let y = 0; y < h; y++) {
  if (isDarkNeutral(0, y, edgeLumThr, edgeNeutralDelta)) pushEdge(0, y);
  if (isDarkNeutral(w - 1, y, edgeLumThr, edgeNeutralDelta)) pushEdge(w - 1, y);
}

let edgeCleared = 0;
while (qs < qe) {
  const x = qx[qs];
  const y = qy[qs];
  qs++;
  const o = off(x, y);
  if (data[o + 3] !== 0) {
    data[o + 3] = 0;
    edgeCleared++;
  }
  for (const [dx, dy] of neigh8) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
    const ni = idx(nx, ny);
    if (isBg[ni]) continue;
    if (!isDarkNeutral(nx, ny, edgeLumThr, edgeNeutralDelta)) continue;
    pushEdge(nx, ny);
  }
}

// 2) Hearts: bounded flood-fill in heart windows, still only dark-neutral.
// Hearts: remove only the *very* dark pixels inside the heart windows.
// These are JPEG artifacts / leftover background shadows that read as black.
// We intentionally do NOT use the strict neutral check here, because the remaining
// dark pixels can be slightly brownish and still look \"black\" to the eye.
// But we MUST protect red pixels so we don't eat the 囍 artwork.
const heartDarkLumCutoff = 66;
const pureBlackCutoff = 6;
const heartBoxes = [
  {
    x0: Math.floor(w * 0.4),
    x1: Math.ceil(w * 0.5),
    y0: Math.floor(h * 0.29),
    // extend lower bound to catch specks below the heart cutout
    y1: Math.ceil(h * 0.52),
  },
  {
    x0: Math.floor(w * 0.5),
    x1: Math.ceil(w * 0.6),
    y0: Math.floor(h * 0.29),
    y1: Math.ceil(h * 0.52),
  },
  // Gap between the hearts (often has leftover dark pixels)
  {
    x0: Math.floor(w * 0.485),
    x1: Math.ceil(w * 0.515),
    y0: Math.floor(h * 0.30),
    y1: Math.ceil(h * 0.52),
  },
];

let heartCleared = 0;
for (const box of heartBoxes) {
  for (let y = box.y0; y < box.y1; y++) {
    for (let x = box.x0; x < box.x1; x++) {
      const o = off(x, y);
      const a = data[o + 3];
      if (a === 0) continue;
      const r = data[o],
        g = data[o + 1],
        b = data[o + 2];
      // Protect red (囍) pixels even when they're dark/shadowed.
      const redDominant = r >= 95 && r - Math.max(g, b) >= 25;

      // Always remove pure/near black specks in the heart area.
      const veryBlack = r <= pureBlackCutoff && g <= pureBlackCutoff && b <= pureBlackCutoff;

      if (!redDominant && (veryBlack || luma(r, g, b) <= heartDarkLumCutoff)) {
        data[o + 3] = 0;
        heartCleared++;
      }
    }
  }
}

await sharp(data, { raw: { width: w, height: h, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(output);

const outMeta = await sharp(output).metadata();
console.log("wrote", output, {
  hasAlpha: outMeta.hasAlpha,
  edgeCleared,
  heartCleared,
  edgeLumThr,
  edgeNeutralDelta,
  heartDarkLumCutoff,
  pureBlackCutoff,
});

