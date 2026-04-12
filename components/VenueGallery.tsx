import Image from "next/image";
import { VENUE_FEATURE_IMAGE } from "@/lib/wedding-meta";

type Props = {
  title: string;
  credit: string;
  plateLine: string;
  /** For <section aria-labelledby> — should match the primary venue heading */
  headingId?: string;
};

/**
 * Editorial “catalogue plate” layout: one image as the artwork, typography as caption.
 * Parent supplies the surrounding <section id="venue"> so copy, address, and map stay one unit.
 */
export function VenueGallery({ title, credit, plateLine, headingId }: Props) {
  return (
    <figure className="m-0">
      <div className="relative w-full overflow-hidden bg-[var(--color-dream-lavender)]/20 outline outline-1 outline-[color-mix(in_srgb,var(--color-dream-rose)_15%,transparent)] outline-offset-[-1px]">
        <div className="relative aspect-[16/10] min-h-[220px] w-full sm:aspect-[21/11] sm:min-h-[360px] lg:min-h-[min(72vh,560px)]">
          <Image
            src={VENUE_FEATURE_IMAGE.src}
            alt={VENUE_FEATURE_IMAGE.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1320px) 100vw, 1320px"
            priority={false}
          />
        </div>
      </div>

      <figcaption className="mt-8 text-center lg:mt-12">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--color-stone)]">
            {plateLine}
          </p>
          <h2
            id={headingId}
            className="mt-5 font-serif text-[clamp(1.875rem,4.5vw,3rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            {title}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-[var(--color-stone)] sm:text-base">
            {credit}
          </p>
        </div>
        <div
          className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-dream-rose)] to-transparent opacity-90"
          aria-hidden
        />
      </figcaption>
    </figure>
  );
}
