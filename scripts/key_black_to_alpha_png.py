import sys

import numpy as np
import imageio.v3 as iio


def key_black_to_alpha_png(src: str, dst: str, *, thr: int = 30) -> None:
    rgb = iio.imread(src)
    if rgb.ndim != 3 or rgb.shape[2] < 3:
        raise ValueError("Expected an RGB/RGBA image")

    rgb = rgb[..., :3].astype(np.uint8)
    h, w, _ = rgb.shape

    # Background candidate: near-black pixels connected to the border.
    near_black = (rgb[..., 0] <= thr) & (rgb[..., 1] <= thr) & (rgb[..., 2] <= thr)
    bg = np.zeros((h, w), dtype=bool)
    q: list[tuple[int, int]] = []

    def push(x: int, y: int) -> None:
        if 0 <= x < w and 0 <= y < h and (not bg[y, x]) and near_black[y, x]:
            bg[y, x] = True
            q.append((x, y))

    # Seed from border pixels.
    for x in range(w):
        push(x, 0)
        push(x, h - 1)
    for y in range(h):
        push(0, y)
        push(w - 1, y)

    # Flood fill.
    while q:
        x, y = q.pop()
        push(x - 1, y)
        push(x + 1, y)
        push(x, y - 1)
        push(x, y + 1)

    alpha = np.where(bg, 0, 255).astype(np.uint8)
    rgba = np.dstack([rgb, alpha])
    iio.imwrite(dst, rgba)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python scripts/key_black_to_alpha_png.py <src.png> <dst.png> [thr]", file=sys.stderr)
        raise SystemExit(2)

    src = sys.argv[1]
    dst = sys.argv[2]
    thr = int(sys.argv[3]) if len(sys.argv) >= 4 else 30
    key_black_to_alpha_png(src=src, dst=dst, thr=thr)

