import { WeddingInvite } from "@/components/WeddingInvite";
import { isRsvpInlineConfigured } from "@/lib/rsvp-server";

/**
 * Single entry for the public invite. All sections live in `WeddingInvite` + `lib/i18n.ts`
 * so edits hot-reload in dev without adding new routes.
 */
export default function Home() {
  return <WeddingInvite inlineRsvpAvailable={isRsvpInlineConfigured()} />;
}
