"use client";

import { venueMapsSearchUrl, venueOsmEmbedUrl } from "@/lib/wedding-meta";

type Props = {
  title: string;
  openInMaps: string;
  address: string;
};

export function VenueMap({ title, openInMaps, address }: Props) {
  const embed = venueOsmEmbedUrl();
  const link = venueMapsSearchUrl(address);

  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-[var(--color-mist)]/40 shadow-sm">
      <div className="border-b border-black/[0.06] px-5 py-4 sm:px-6">
        <h3 className="font-serif text-xl tracking-tight text-[var(--color-ink)] sm:text-2xl">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-[var(--color-gold)] underline-offset-4 hover:underline"
        >
          {openInMaps}
        </a>
      </div>
      <iframe
        title={title}
        src={embed}
        className="aspect-[16/10] min-h-[240px] w-full border-0 grayscale-[20%] contrast-[1.05] sm:min-h-[320px]"
        loading="lazy"
      />
    </div>
  );
}
