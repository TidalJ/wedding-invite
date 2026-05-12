"use client";

import Image from "next/image";

export function TopRightFirecrackers() {
  return (
    <div
      className="pointer-events-none absolute -right-6 top-16 z-60 select-none"
      aria-hidden
    >
      <div className="relative h-36 w-16 sm:h-44 sm:w-20 lg:h-52 lg:w-24">
        <Image
          src="/decor/firecrackers.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
          className="object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.16)]"
        />

        {/* Pops */}
        <span className="cny-pop cny-pop-1" />
        <span className="cny-pop cny-pop-2" />
        <span className="cny-pop cny-pop-3" />

        {/* Extra pops along the stack */}
        <span
          className="cny-pop"
          style={{ right: "58%", bottom: "56%", width: 12, height: 12, animationDelay: "0.18s" }}
        />
        <span
          className="cny-pop"
          style={{ right: "42%", bottom: "72%", width: 10, height: 10, animationDelay: "0.76s" }}
        />
        <span
          className="cny-pop"
          style={{ right: "26%", bottom: "38%", width: 14, height: 14, animationDelay: "1.08s" }}
        />
      </div>
    </div>
  );
}

