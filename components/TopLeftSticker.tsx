"use client";

import Image from "next/image";

export function TopLeftSticker() {
  return (
    <div
      className="pointer-events-none fixed left-4 top-14 z-60 select-none sm:left-5 sm:top-16"
      aria-hidden
    >
      <div className="relative h-28 w-28 will-change-transform sm:h-32 sm:w-32 lg:h-36 lg:w-36">
        <Image
          src="/stickers/xixi.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
          className="object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.18)] origin-[20%_20%] motion-safe:animate-[sticker-sway_5.6s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
}

