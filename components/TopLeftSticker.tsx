"use client";

import Image from "next/image";

export function TopLeftSticker() {
  return (
    <div
      className="pointer-events-none fixed left-2 top-14 z-60 select-none sm:left-4 sm:top-16"
      aria-hidden
    >
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
        <Image
          src="/stickers/xixi.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
          className="object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.18)]"
        />
      </div>
    </div>
  );
}

