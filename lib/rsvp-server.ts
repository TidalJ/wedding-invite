/**
 * Server-only RSVP → Google Forms (formResponse POST).
 * Do not import from client components.
 */

export type RsvpGoogleFieldEntries = {
  name: string;
  attending: string;
  allergies: string;
  message: string;
};

export type RsvpGooglePostConfig = {
  postUrl: string;
  entries: RsvpGoogleFieldEntries;
};

export function getRsvpGooglePostConfig(): RsvpGooglePostConfig | null {
  const postUrl = process.env.RSVP_GOOGLE_FORM_POST_URL?.trim();
  if (!postUrl) return null;

  const name = process.env.RSVP_GOOGLE_ENTRY_NAME?.trim();
  const attending = process.env.RSVP_GOOGLE_ENTRY_ATTENDING?.trim();
  const allergies = process.env.RSVP_GOOGLE_ENTRY_ALLERGIES?.trim();
  const message = process.env.RSVP_GOOGLE_ENTRY_MESSAGE?.trim();

  if (!name || !attending || !allergies || !message) return null;

  return {
    postUrl,
    entries: { name, attending, allergies, message },
  };
}

export function isRsvpInlineConfigured(): boolean {
  return getRsvpGooglePostConfig() !== null;
}
