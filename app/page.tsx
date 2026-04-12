import { WeddingInvite } from "@/components/WeddingInvite";
import { isRsvpInlineConfigured } from "@/lib/rsvp-server";

export default function Home() {
  return (
    <WeddingInvite inlineRsvpAvailable={isRsvpInlineConfigured()} />
  );
}
