import { venueMapsSearchUrl, VENUE_LAT, VENUE_LNG } from "@/lib/wedding-meta";

type Props = {
  title: string;
  directionsLabel: string;
  /** Used for the maps link only; full address already appears in “At a glance”. */
  address: string;
};

/**
 * Lightweight directions card: no embedded map tiles. Address stays in the venue details list;
 * this block is only wayfinding + one tap to the guest’s maps app.
 */
export function VenueMap({ title, directionsLabel, address }: Props) {
  const link = venueMapsSearchUrl(address);
  const latStr = Math.abs(VENUE_LAT).toFixed(4) + "° S";
  const lngStr = VENUE_LNG.toFixed(4) + "° E";

  return (
    <div className="overflow-hidden rounded-2xl border border-dream bg-[var(--color-dream-blush)]/35 shadow-[0_8px_40px_color-mix(in_srgb,var(--color-dream-rose)_10%,transparent)]">
      <div className="relative aspect-[16/10] min-h-[180px] overflow-hidden sm:min-h-[220px]">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `
              linear-gradient(145deg, color-mix(in srgb, var(--color-dream-lavender) 45%, transparent) 0%, transparent 55%),
              linear-gradient(to bottom, transparent 40%, color-mix(in srgb, var(--color-paper) 75%, transparent) 100%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `linear-gradient(var(--color-ink) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-md ring-1 ring-[color-mix(in_srgb,var(--color-dream-rose)_25%,transparent)]"
            aria-hidden
          >
            <svg viewBox="0 0 24 32" className="h-8 w-6" fill="none" aria-hidden>
              <path
                d="M12 0C5.37 0 0 5.15 0 11.5c0 8.25 12 20.5 12 20.5S24 19.75 24 11.5C24 5.15 18.63 0 12 0z"
                className="fill-[var(--color-dream-rose-deep)]"
              />
              <circle cx="12" cy="11" r="3.5" className="fill-white" />
            </svg>
          </div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-stone)]">
            {latStr} · {lngStr}
          </p>
        </div>
      </div>
      <div className="border-t border-dream px-5 py-6 text-center sm:px-8 sm:py-7">
        <h3 className="font-serif text-base tracking-tight text-[var(--color-ink)] sm:text-lg">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${directionsLabel}: ${address}`}
          className="btn-dream mt-5 inline-flex px-8 py-3.5 text-[11px]"
        >
          {directionsLabel}
        </a>
      </div>
    </div>
  );
}
