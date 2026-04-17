import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

function isBackgroundBlack(r, g, b) {
  // Only remove near-pure black so we keep dark features (eyes/ears/outlines).
  const t = 12;
  return r <= t && g <= t && b <= t;
}

function main() {
  const inPath = process.argv[2];
  const outPath = process.argv[3];

  if (!inPath || !outPath) {
    console.error('Usage: node scripts/remove-black-bg.mjs <in.png> <out.png>');
    process.exit(2);
  }

  const input = fs.readFileSync(inPath);
  const png = PNG.sync.read(input);

  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx + 0];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      const a = png.data[idx + 3];

      if (a === 0) continue;
      if (isBackgroundBlack(r, g, b)) png.data[idx + 3] = 0;
    }
  }

  const out = PNG.sync.write(png);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out);
}

main();

