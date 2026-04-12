"use client";

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
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-28 text-center sm:px-10 sm:pb-36 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(196,165,116,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.4)_100%)]"
        aria-hidden
      />

      <Reveal>
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-white/45 sm:text-[11px]">
          {copy.kicker}
        </p>
        <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,12vw,6rem)] font-light leading-[0.92] tracking-[-0.04em] text-white">
          {copy.title}
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
          {copy.subtitle}
        </p>
        <div className="mx-auto mt-12 h-px w-12 bg-[var(--color-gold)] opacity-80" />
        <p className="mt-10 text-lg font-medium tracking-wide text-white/90 sm:text-xl">
          {copy.dateLine}
        </p>
        <p className="mt-2 text-sm text-white/45 sm:text-base">{copy.locationLine}</p>
        <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6">
          <button
            type="button"
            onClick={onRsvp}
            className="w-full min-w-[220px] rounded-full bg-white px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0a0a0b] shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition hover:bg-white/90 sm:w-auto"
          >
            {copy.cta}
          </button>
          <a
            href="#story"
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40 underline-offset-8 transition hover:text-white/70 hover:underline"
          >
            {copy.scroll}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
