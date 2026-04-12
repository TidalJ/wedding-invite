import Image from "next/image";
import { VENUE_GALLERY, VENUE_WEBSITE } from "@/lib/wedding-meta";

type Props = {
  title: string;
  credit: string;
  morePhotos: string;
};

export function VenueGallery({ title, credit, morePhotos }: Props) {
  return (
    <section
      id="venue"
      className="border-t border-black/[0.06] bg-[var(--color-mist)]/25 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl tracking-tight text-[var(--color-ink)] sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--color-stone)]">{credit}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {VENUE_GALLERY.map((img) => (
            <figure
              key={img.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/5 shadow-sm ring-1 ring-black/[0.06]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority={false}
              />
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href={VENUE_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-gold)] underline-offset-4 transition hover:underline"
          >
            {morePhotos}
          </a>
        </p>
      </div>
    </section>
  );
}
