"use client";

import Image from "next/image";

export function TopRightFirecrackers() {
  return (
    <div
      className="pointer-events-none fixed right-3 top-14 z-60 select-none sm:right-4 sm:top-16"
      aria-hidden
    >
      <div className="relative h-56 w-24 sm:h-72 sm:w-28 lg:h-80 lg:w-32">
        <Image
          src="/decor/firecrackers.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
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

