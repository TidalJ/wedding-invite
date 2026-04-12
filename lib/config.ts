/**
 * Google Forms: File → Share → embed → copy the src URL of the iframe.
 * Example: https://docs.google.com/forms/d/e/xxxxxxxx/viewform?embedded=true
 */
export function getRsvpFormEmbedUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_RSVP_FORM_EMBED_URL?.trim();
  return url || undefined;
}

export function getRsvpFormExternalUrl(): string | undefined {
  const embed = getRsvpFormEmbedUrl();
  if (embed) {
    try {
      const u = new URL(embed);
      u.searchParams.delete("embedded");
      return u.toString();
    } catch {
      return embed.replace(/[?&]embedded=true\b/i, "");
    }
  }
  const direct = process.env.NEXT_PUBLIC_RSVP_FORM_URL?.trim();
  return direct || undefined;
}
