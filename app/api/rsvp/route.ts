import { NextResponse } from "next/server";
import { getRsvpGooglePostConfig } from "@/lib/rsvp-server";

export const runtime = "nodejs";

type Body = {
  name?: unknown;
  attending?: unknown;
  allergies?: unknown;
  message?: unknown;
};

function str(v: unknown, max: number): string | undefined {
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  if (!t) return undefined;
  return t.length > max ? t.slice(0, max) : t;
}

function normalizeAttending(raw: string): "Yes" | "No" | null {
  const x = raw.trim();
  if (x === "Yes" || x.toLowerCase() === "yes") return "Yes";
  if (x === "No" || x.toLowerCase() === "no") return "No";
  return null;
}

export async function POST(req: Request) {
  const config = getRsvpGooglePostConfig();
  if (!config) {
    return NextResponse.json(
      { success: false, error: "RSVP is not configured on the server." },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON." },
      { status: 400 },
    );
  }

  const name = str(body.name, 200);
  const attendingRaw = typeof body.attending === "string" ? body.attending : "";
  const attending = normalizeAttending(attendingRaw);
  const allergies = str(body.allergies, 2000);
  const message = str(body.message, 2000);

  if (!name || !attending || !allergies || !message) {
    return NextResponse.json(
      {
        success: false,
        error: "Please complete every field, including allergies (e.g. “None”).",
      },
      { status: 400 },
    );
  }

  const yes = process.env.RSVP_GOOGLE_ATTENDING_YES_VALUE?.trim() || "Yes";
  const no = process.env.RSVP_GOOGLE_ATTENDING_NO_VALUE?.trim() || "No";
  const attendingForGoogle = attending === "Yes" ? yes : no;

  const params = new URLSearchParams();
  params.set(config.entries.name, name);
  params.set(config.entries.attending, attendingForGoogle);
  params.set(config.entries.allergies, allergies);
  params.set(config.entries.message, message);

  try {
    await fetch(config.postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "WeddingInvite-RSVP/1.0",
      },
      body: params.toString(),
      redirect: "follow",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not reach the form service. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
