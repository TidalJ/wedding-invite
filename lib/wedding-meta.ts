/** Ceremony start: Adelaide Hills (ACDT, UTC+10:30) — 17 Feb 2027, 4:30 PM local. */
export const WEDDING_START_ISO = "2027-02-17T16:30:00+10:30";

/** Approx. coordinates for on-page display only (decorative). ~762 Lobethal Rd. */
export const VENUE_LAT = -34.941186;
export const VENUE_LNG = 138.754068;

/**
 * Single venue photograph — place your file at public/venue/Venue.webp (case-sensitive on Linux hosts).
 */
export const VENUE_FEATURE_IMAGE = {
  src: "/venue/Venue.webp",
  alt: "The Adelaide Hills estate where Jay & Pinky will celebrate",
} as const;

export function venueMapsSearchUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
