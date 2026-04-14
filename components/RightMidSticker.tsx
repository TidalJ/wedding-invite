"use client";

type Props = {
  /** Path under /public, e.g. "/stickers/wave.mp4" */
  src?: string;
};

const DEFAULT_SRC = `/stickers/${encodeURIComponent("制作走路挥手动图.mp4")}`;
const DEFAULT_WEBM = `/stickers/${encodeURIComponent("制作走路挥手动图-transparent.webm")}`;

export function RightMidSticker({ src = DEFAULT_SRC }: Props) {
  return (
    <div
      className="pointer-events-none fixed right-10 top-1/2 z-60 -translate-y-1/2 select-none sm:right-14"
      aria-hidden
    >
      <div className="relative h-52 w-52 will-change-transform sm:h-64 sm:w-64 lg:h-80 lg:w-80">
        <video
          className="h-full w-full object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.18)]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={DEFAULT_WEBM} type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

