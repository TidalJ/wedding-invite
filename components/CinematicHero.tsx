"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type HeroCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  dateLine: string;
  locationLine: string;
  cta: string;
  scroll: string;
};

type Props = {
  copy: HeroCopy;
  onRsvp: () => void;
};

export function CinematicHero({ copy, onRsvp }: Props) {
  const titleNode = useMemo(() => {
    const title = copy.title ?? "";
    const idx = title.indexOf("Jay");
    const pIdx = title.indexOf("Pinky");
    if (idx < 0 && pIdx < 0) return title;

    const jayStart = idx >= 0 ? idx : null;
    const pinkyStart = pIdx >= 0 ? pIdx : null;

    // Split into segments so we can decorate specific letters without rewriting copy.
    // We only target the first "Jay" and the first "Pinky" occurrence.
    const markers = [
      ...(jayStart !== null ? [{ kind: "jay" as const, at: jayStart }] : []),
      ...(pinkyStart !== null ? [{ kind: "pinky" as const, at: pinkyStart }] : []),
    ].sort((a, b) => a.at - b.at);

    let cursor = 0;
    const parts: React.ReactNode[] = [];

    for (const m of markers) {
      if (m.at > cursor) parts.push(title.slice(cursor, m.at));

      if (m.kind === "jay") {
        parts.push(
          <span key={`jay-${m.at}`} className="relative inline-block align-baseline">
            <span className="relative z-10">Jay</span>
            <Image
              src="/stickers/Picture2.png"
              alt=""
              aria-hidden
              width={700}
              height={700}
              className="pointer-events-none absolute left-[45%] top-[60%] z-0 h-[1.1em] w-auto -translate-x-1/2 -translate-y-1/2 opacity-95 [transform:translate(-50%,-50%)_scaleX(-1)]"
              priority
            />
          </span>,
        );
        cursor = m.at + "Jay".length;
        continue;
      }

      // "Pinky" with a sticker positioned above the trailing "y"
      parts.push(
        <span key={`pinky-${m.at}`} className="inline-block">
          {"Pink"}
          <span className="relative inline-block align-baseline">
            <span className="relative z-10">y</span>
          </span>
        </span>,
      );
      cursor = m.at + "Pinky".length;
    }

    if (cursor < title.length) parts.push(title.slice(cursor));

    return <>{parts}</>;
  }, [copy.title]);

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-28 text-center sm:px-10 sm:pb-36 sm:pt-32">
      {/* Soft dreamy atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f3e8f5] via-[#faf5f2] to-[var(--color-paper)]"
        aria-hidden
      />
      <div
        className="dream-orb pointer-events-none absolute -left-[20%] top-[-15%] h-[55%] w-[65%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--color-dream-rose)_35%,transparent),transparent)] blur-3xl opacity-90"
        aria-hidden
      />
      <div
        className="dream-orb pointer-events-none absolute -right-[15%] bottom-[-20%] h-[60%] w-[70%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,#c4bdd4_40%,transparent),transparent)] blur-3xl opacity-80 [animation-delay:-6s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_100%,color-mix(in_srgb,var(--color-gold-soft)_50%,transparent),transparent)] opacity-60"
        aria-hidden
      />

      <Reveal>
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-[var(--color-dream-mauve)]/70 sm:text-[11px]">
          {copy.kicker}
        </p>
        {/*
          Solid fill (no bg-clip-text): gradient text clips descenders in many browsers
          and can make names like “Jay & Pinky” look cut off.
        */}
        <h1 className="mx-auto max-w-4xl font-serif text-[clamp(2.5rem,11vw,5.75rem)] font-light leading-[1.08] tracking-[-0.03em] text-[var(--color-ink)]">
          {titleNode}
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-[var(--color-stone)] sm:text-lg">
          {copy.subtitle}
        </p>
        <div className="mx-auto mt-12 h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-dream-rose)] to-transparent opacity-90" />
        <p className="mt-10 text-lg font-medium tracking-wide text-[var(--color-ink)] sm:text-xl">
          {copy.dateLine}
        </p>
        <p className="mt-2 text-sm text-[var(--color-stone)] sm:text-base">{copy.locationLine}</p>
        <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6">
          <button
            type="button"
            onClick={onRsvp}
            className="btn-dream w-full min-w-[220px] px-10 py-4 text-[11px] sm:w-auto"
          >
            {copy.cta}
          </button>
          <a
            href="#story"
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-dream-rose-deep)]/80 underline-offset-8 transition hover:text-[var(--color-dream-rose-deep)] hover:underline"
          >
            {copy.scroll}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
