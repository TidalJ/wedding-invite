/** Ceremony start: Adelaide Hills (ACDT, UTC+10:30) — 17 Feb 2027, 4:30 PM local. */
export const WEDDING_START_ISO = "2027-02-17T16:30:00+10:30";

export const VENUE_NAME = "The Manor Basket Range";
export const VENUE_ADDRESS = "762 Lobethal Rd, Basket Range SA 5138, Australia";

/** Marker ~762 Lobethal Rd (OpenStreetMap). */
export const VENUE_LAT = -34.941186;
export const VENUE_LNG = 138.754068;

export const VENUE_WEBSITE = "https://themanorbr.com.au/";

/** Promotional photos from the venue’s public website (Squarespace CDN). */
export const VENUE_GALLERY = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/59da1dd9ccc5c54f48ce11fd/1722245222605-GYKKSHTEHWFSHJ9BQZL0/EXPERIENCE+THE+MANOR-74.jpg?format=1500w",
    alt: "The Manor Basket Range — estate exterior",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/59da1dd9ccc5c54f48ce11fd/1524125349536-CUBJMHDBE97FPMPLN4F1/ACCOMMODATION?format=1500w",
    alt: "The Manor Basket Range — gardens and grounds",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/59da1dd9ccc5c54f48ce11fd/1528940700821-HXN6FD5Y1OAFLGAS024V/Audrey+Austen+Bridal+Shoot?format=1500w",
    alt: "The Manor Basket Range — wedding setting",
  },
] as const;

export function venueOsmEmbedUrl(): string {
  const d = 0.015;
  const minLon = VENUE_LNG - d;
  const minLat = VENUE_LAT - d;
  const maxLon = VENUE_LNG + d;
  const maxLat = VENUE_LAT + d;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=${VENUE_LAT}%2C${VENUE_LNG}`;
}

export function venueMapsSearchUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
