"use client";

import { useEffect, useMemo, useState } from "react";
import { CinematicHero } from "@/components/CinematicHero";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { RSVPModal } from "@/components/RSVPModal";
import { RightMidSticker } from "@/components/RightMidSticker";
import { ScheduleProgramme } from "@/components/ScheduleProgramme";
import { TopLeftSticker } from "@/components/TopLeftSticker";
import { TopRightFirecrackers } from "@/components/TopRightFirecrackers";
import { VenueGallery } from "@/components/VenueGallery";
import { VenueMap } from "@/components/VenueMap";
import { WeddingCountdown } from "@/components/WeddingCountdown";
import { getRsvpFormEmbedUrl, getRsvpFormExternalUrl } from "@/lib/config";
import { t, type Locale } from "@/lib/i18n";

type Props = {
  inlineRsvpAvailable?: boolean;
};

export function WeddingInvite({ inlineRsvpAvailable = false }: Props) {
  const [locale, setLocale] = useState<Locale>("en");
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [navOnLight, setNavOnLight] = useState(false);

  const c = useMemo(() => t(locale), [locale]);
  const embedUrl = getRsvpFormEmbedUrl();
  const externalUrl = getRsvpFormExternalUrl();

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const threshold = Math.min(window.innerHeight * 0.75, 640);
      setNavOnLight(y > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = navOnLight
    ? "text-[var(--color-stone)] hover:text-[var(--color-ink)]"
    : "text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]";

  return (
    <>
      <TopLeftSticker />
      <TopRightFirecrackers />
      <RightMidSticker />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-1/4 top-[-20%] h-[55%] w-[70%] rounded-full opacity-[0.2]"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in srgb, var(--color-dream-rose) 28%, transparent), transparent)",
          }}
        />
        <div
          className="absolute -right-1/4 bottom-[-25%] h-[60%] w-[75%] rounded-full opacity-[0.16]"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in srgb, #c4bdd4 35%, transparent), transparent)",
          }}
        />
      </div>

      <header
        className={[
          "fixed left-0 right-0 top-0 z-50 transition-[background,backdrop-filter] duration-500",
          navOnLight
            ? "bg-[color-mix(in_srgb,var(--color-paper)_90%,transparent)] backdrop-blur-xl"
            : "bg-white/40 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="font-display text-base tracking-tight text-[var(--color-ink)] sm:text-lg"
          >
            J & P
          </a>
          <nav
            className={[
              "mx-2 hidden min-w-0 flex-1 items-center justify-center gap-x-4 text-[9px] font-medium uppercase tracking-[0.16em] xl:gap-x-6 xl:text-[10px] xl:tracking-[0.18em]",
              navOnLight ? "" : "",
              "lg:flex",
            ].join(" ")}
          >
            <a href="#story" className={navLink}>
              {c.nav.story}
            </a>
            <a href="#venue" className={navLink}>
              {c.nav.venue}
            </a>
            <a href="#countdown" className={navLink}>
              {c.nav.countdown}
            </a>
            <a href="#schedule" className={navLink}>
              {c.nav.schedule}
            </a>
            <a href="#dress" className={navLink}>
              {c.nav.dress}
            </a>
            <a href="#rsvp" className={navLink}>
              {c.nav.rsvp}
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle locale={locale} onChange={setLocale} />
            <button
              type="button"
              onClick={() => setRsvpOpen(true)}
              className="btn-dream px-4 py-2.5 text-[11px] tracking-[0.14em] sm:px-5"
            >
              {c.nav.rsvp}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <CinematicHero copy={c.hero} onRsvp={() => setRsvpOpen(true)} />

        <section
          id="story"
          className="scroll-mt-24 border-t border-dream px-6 py-24 text-center sm:px-10 sm:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--color-stone)]">
                {c.loveStory.lead}
              </p>
              <h2 className="mt-6 font-serif text-3xl tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
                {c.loveStory.title}
              </h2>
              <p className="mt-10 text-base leading-[1.85] text-[var(--color-stone)] sm:text-lg">
                {c.loveStory.p1}
              </p>
              <p className="mt-8 text-base leading-[1.85] text-[var(--color-stone)] sm:text-lg">
                {c.loveStory.p2}
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="venue"
          className="scroll-mt-24 border-t border-dream bg-[var(--color-paper)]"
          aria-labelledby="venue-heading"
        >
          <div className="mx-auto max-w-[min(100%,1320px)] px-5 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28 lg:px-14 lg:pb-36 lg:pt-32">
            <Reveal>
              <VenueGallery
                headingId="venue-heading"
                title={c.venue.title}
                credit={c.venue.credit}
                plateLine={c.venue.plateLine}
              />
            </Reveal>

            <Reveal delayMs={80} className="mt-14 sm:mt-16 lg:mt-20">
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-snug tracking-tight text-[var(--color-ink)]">
                  {c.intro.title}
                </p>
                <p className="mt-5 text-[15px] leading-[1.85] text-[var(--color-stone)] sm:text-base">
                  {c.intro.body}
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120} className="mt-16 sm:mt-20 lg:mt-24">
              <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-12 lg:max-w-2xl">
                <div className="w-full text-center">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-stone)]">
                    {c.details.title}
                  </h3>
                  <dl className="mt-8 space-y-9">
                    {(
                      [
                        ["venue", c.details.venue, c.details.venueValue],
                        ["address", c.details.address, c.details.addressValue],
                        ["parking", c.details.parking, c.details.parkingValue],
                      ] as const
                    ).map(([key, dt, dd]) => (
                      <div key={key}>
                        <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-stone)]">
                          {dt}
                        </dt>
                        <dd className="mt-2.5 text-[15px] leading-relaxed text-[var(--color-ink)] sm:text-base">
                          {dd}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="w-full max-w-md">
                  <VenueMap
                    title={c.map.title}
                    directionsLabel={c.map.directions}
                    address={c.details.addressValue}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="countdown"
          className="scroll-mt-24 border-t border-dream bg-gradient-to-b from-[var(--color-dream-lavender)]/25 to-transparent px-6 py-24 text-center sm:px-10 sm:py-32"
        >
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-center font-serif text-3xl tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {c.countdown.title}
              </h2>
              <div className="mt-16">
                <WeddingCountdown
                  labels={{
                    days: c.countdown.days,
                    hours: c.countdown.hours,
                    minutes: c.countdown.minutes,
                    seconds: c.countdown.seconds,
                  }}
                  doneMessage={c.countdown.doneMessage}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="schedule"
          className="scroll-mt-24 border-t border-dream px-6 py-24 text-center sm:px-10 sm:py-32"
        >
          <Reveal>
            <ScheduleProgramme
              title={c.schedule.title}
              dek={c.schedule.dek}
              timesNote={c.schedule.timesNote}
              groups={c.schedule.groups}
            />
          </Reveal>
        </section>

        <section
          id="dress"
          className="scroll-mt-24 border-t border-dream bg-gradient-to-br from-[var(--color-twilight-from)] via-[var(--color-twilight-via)] to-[var(--color-twilight-to)] px-6 py-24 text-center text-[#fdf9fc] sm:px-10 sm:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/55">
                {c.dress.title}
              </p>
              <p className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
                {c.dress.code}
              </p>
              <p className="mt-8 text-base leading-relaxed text-white/85 sm:text-lg">
                {c.dress.hint}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/65 sm:text-base">
                {c.dress.note}
              </p>
            </Reveal>

            <Reveal
              delayMs={100}
              className="mt-20 rounded-2xl border border-white/20 bg-white/[0.08] p-8 text-center backdrop-blur-sm sm:p-10"
            >
              <h3 className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/55">
                {c.gifts.title}
              </h3>
              <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-white/80 sm:text-lg">
                {c.gifts.body}
              </p>
            </Reveal>
          </div>
        </section>

        <section id="rsvp" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                {c.rsvp.title}
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--color-stone)] sm:text-lg">
                {c.rsvp.lead}
              </p>
              <button
                type="button"
                onClick={() => setRsvpOpen(true)}
                className="btn-dream mt-10 inline-flex px-10 py-4 text-[12px] tracking-[0.2em] shadow-lg"
              >
                {c.rsvp.button}
              </button>
              <p className="mt-4 text-sm font-medium tracking-wide text-[var(--color-ink)]">
                {c.rsvp.deadline}
              </p>
              <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[var(--color-stone)]">
                {c.rsvp.foot}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-dream px-6 py-12 text-center sm:py-16">
        <p className="font-serif text-lg text-[var(--color-ink)]">{c.footer.line}</p>
        <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-[var(--color-stone)]">
          {c.footer.privacy}
        </p>
      </footer>

      <RSVPModal
        open={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        embedUrl={embedUrl}
        externalUrl={externalUrl}
        inlineRsvpAvailable={inlineRsvpAvailable}
        locale={locale}
      />
    </>
  );
}
