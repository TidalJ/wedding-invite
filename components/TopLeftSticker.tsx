"use client";

import Image from "next/image";

export function TopLeftSticker() {
  return (
    <div
      className="pointer-events-none fixed left-8 top-14 z-60 select-none sm:left-10 sm:top-16"
      aria-hidden
    >
      <div className="relative h-36 w-36 will-change-transform sm:h-44 sm:w-44 lg:h-52 lg:w-52">
        <Image
          src="/stickers/xixi.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
          className="object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.18)] origin-[20%_20%] motion-safe:animate-[sticker-sway_5.6s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
}

