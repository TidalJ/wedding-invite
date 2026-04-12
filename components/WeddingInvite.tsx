"use client";

import { useEffect, useMemo, useState } from "react";
import { CinematicHero } from "@/components/CinematicHero";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { RSVPModal } from "@/components/RSVPModal";
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

  const navLink =
    navOnLight
      ? "text-[var(--color-stone)] hover:text-[var(--color-ink)]"
      : "text-white/55 hover:text-white";

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-1/4 top-[-20%] h-[55%] w-[70%] rounded-full opacity-[0.14]"
          style={{
            background:
              "radial-gradient(closest-side, var(--color-gold-soft), transparent)",
          }}
        />
        <div
          className="absolute -right-1/4 bottom-[-25%] h-[60%] w-[75%] rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(closest-side, #c9d4e8, transparent)",
          }}
        />
      </div>

      <header
        className={[
          "fixed left-0 right-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500",
          navOnLight
            ? "border-b border-black/[0.06] bg-[color-mix(in_srgb,var(--color-paper)_88%,transparent)] backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className={[
              "font-serif text-base tracking-tight sm:text-lg",
              navOnLight ? "text-[var(--color-ink)]" : "text-white",
            ].join(" ")}
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
            <a href="#details" className={navLink}>
              {c.nav.details}
            </a>
            <a href="#map" className={navLink}>
              {c.nav.map}
            </a>
            <a href="#schedule" className={navLink}>
              {c.nav.schedule}
            </a>
            <a href="#dress" className={navLink}>
              {c.nav.dress}
            </a>
            <button type="button" onClick={() => setRsvpOpen(true)} className={navLink}>
              {c.nav.rsvp}
            </button>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle locale={locale} onChange={setLocale} inverted={!navOnLight} />
            <button
              type="button"
              onClick={() => setRsvpOpen(true)}
              className={[
                "rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] shadow-sm transition hover:opacity-90 sm:px-5",
                navOnLight
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                  : "bg-white text-[#0a0a0b]",
              ].join(" ")}
            >
              {c.nav.rsvp}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <div className="bg-[#070708]">
          <CinematicHero copy={c.hero} onRsvp={() => setRsvpOpen(true)} />
        </div>

        <section
          id="story"
          className="border-t border-black/[0.06] px-6 py-24 sm:px-10 sm:py-32"
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

        <Reveal>
          <VenueGallery
            title={c.venue.title}
            credit={c.venue.credit}
            morePhotos={c.venue.morePhotos}
          />
        </Reveal>

        <section
          id="countdown"
          className="border-t border-black/[0.06] bg-[var(--color-mist)]/35 px-6 py-24 sm:px-10 sm:py-32"
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
          id="details"
          className="border-t border-black/[0.06] px-6 py-24 sm:px-10 sm:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-3xl tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {c.intro.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-stone)] sm:text-lg">
                {c.intro.body}
              </p>
            </Reveal>

            <Reveal delayMs={120} className="mt-20">
              <h3 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[var(--color-stone)]">
                {c.details.title}
              </h3>
              <dl className="mt-10 space-y-10">
                {(
                  [
                    ["venue", c.details.venue, c.details.venueValue],
                    ["address", c.details.address, c.details.addressValue],
                    ["time", c.details.time, c.details.timeValue],
                    [
                      "reception",
                      c.details.reception,
                      c.details.receptionValue,
                    ],
                    ["parking", c.details.parking, c.details.parkingValue],
                  ] as const
                ).map(([key, dt, dd]) => (
                  <div
                    key={key}
                    className="grid gap-2 border-b border-black/[0.06] pb-10 last:border-0 last:pb-0 sm:grid-cols-[minmax(0,160px)_1fr] sm:gap-10"
                  >
                    <dt className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-stone)]">
                      {dt}
                    </dt>
                    <dd className="text-base text-[var(--color-ink)] sm:text-lg">
                      {dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section id="map" className="px-6 pb-24 sm:px-10 sm:pb-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <VenueMap
                title={c.map.title}
                openInMaps={c.map.openInMaps}
                address={c.details.addressValue}
              />
            </Reveal>
          </div>
        </section>

        <section id="schedule" className="border-t border-black/[0.06] px-6 py-24 sm:px-10 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                {c.schedule.title}
              </h2>
              <ol className="mt-14 space-y-0">
                {c.schedule.items.map((item, idx) => (
                  <li
                    key={item.label}
                    className="group flex gap-6 border-t border-black/[0.06] py-8 first:border-t-0 first:pt-0 sm:gap-10"
                  >
                    <span className="w-24 shrink-0 pt-0.5 text-sm font-medium tabular-nums text-[var(--color-gold)] sm:w-28 sm:text-base">
                      {item.time}
                    </span>
                    <span className="text-base text-[var(--color-ink)] sm:text-lg">
                      {item.label}
                    </span>
                    <span className="ml-auto hidden text-xs text-[var(--color-stone)] opacity-0 transition group-hover:opacity-100 sm:block">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section
          id="dress"
          className="border-t border-black/[0.06] bg-[var(--color-ink)] px-6 py-24 text-[var(--color-paper)] sm:px-10 sm:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50">
                {c.dress.title}
              </p>
              <p className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
                {c.dress.code}
              </p>
              <p className="mt-8 text-base leading-relaxed text-white/75 sm:text-lg">
                {c.dress.hint}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/55 sm:text-base">
                {c.dress.note}
              </p>
            </Reveal>

            <Reveal delayMs={100} className="mt-20 rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
              <h3 className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/45">
                {c.gifts.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                {c.gifts.body}
              </p>
            </Reveal>
          </div>
        </section>

        <section id="rsvp" className="px-6 py-24 sm:px-10 sm:py-32">
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
                className="mt-10 inline-flex rounded-full bg-[var(--color-ink)] px-10 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)] shadow-lg shadow-black/10 transition hover:opacity-90"
              >
                {c.rsvp.button}
              </button>
              <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[var(--color-stone)]">
                {c.rsvp.foot}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] px-6 py-12 text-center sm:py-16">
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
