import numpy as np
import imageio


def key_black_to_alpha(
    src: str,
    dst: str,
    *,
    thr: int = 30,
    crf: str = "33",
) -> None:
    reader = imageio.get_reader(src, "ffmpeg")
    meta = reader.get_meta_data()
    fps = int(meta.get("fps") or 30)

    writer = imageio.get_writer(
        dst,
        format="FFMPEG",
        mode="I",
        fps=fps,
        codec="libvpx-vp9",
        output_params=[
            "-pix_fmt",
            "yuva420p",
            "-b:v",
            "0",
            "-crf",
            crf,
            "-row-mt",
            "1",
            "-deadline",
            "realtime",
        ],
    )

    count = 0
    for frame in reader:
        rgb = frame.astype(np.uint8)
        h, w, _ = rgb.shape

        # Background mask: near-black pixels (per-channel) that are connected to the frame border.
        near_black = (rgb[..., 0] <= thr) & (rgb[..., 1] <= thr) & (rgb[..., 2] <= thr)

        bg = np.zeros((h, w), dtype=bool)
        q = []

        def push(x: int, y: int) -> None:
            if 0 <= x < w and 0 <= y < h and (not bg[y, x]) and near_black[y, x]:
                bg[y, x] = True
                q.append((x, y))

        # Seed from all border pixels.
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
        writer.append_data(rgba)
        count += 1

    writer.close()
    reader.close()
    print(f"wrote {dst} (frames={count}, fps={fps})")


if __name__ == "__main__":
    key_black_to_alpha(
        src=r"public/stickers/制作走路挥手动图.mp4",
        dst=r"public/stickers/制作走路挥手动图-transparent.webm",
    )

