"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type Props = {
  locale: Locale;
  onSuccess?: () => void;
};

type AttendingChoice = "Yes" | "No" | null;

export function RSVPInlineForm({ locale, onSuccess }: Props) {
  const f = t(locale).rsvpForm;
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<AttendingChoice>(null);
  const [allergies, setAllergies] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return Boolean(
      name.trim() && attending && allergies.trim() && message.trim(),
    );
  }, [name, attending, allergies, message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attending,
          allergies: allergies.trim(),
          message: message.trim(),
        }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setErrorMsg(data.error || f.errorGeneric);
        setStatus("error");
        return;
      }

      setStatus("done");
      onSuccess?.();
    } catch {
      setErrorMsg(f.errorGeneric);
      setStatus("error");
    }
  }

  const btnBase =
    "rounded-2xl border px-5 py-3.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2";
  const btnIdle = "border-black/10 bg-white text-[var(--color-ink)] hover:border-black/20";
  const btnOn =
    "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] shadow-sm";

  if (status === "done") {
    return (
      <div className="rsvp-success-root relative flex min-h-[min(72dvh,720px)] flex-col items-center justify-center overflow-hidden px-6 py-14 text-center sm:min-h-[min(68dvh,680px)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="rsvp-confetti-piece absolute top-[18%] h-2.5 w-2 rounded-[1px] opacity-90"
              style={{
                left: `${4 + i * 6}%`,
                animationDelay: `${i * 0.04}s`,
                backgroundColor: i % 3 === 0 ? "var(--color-gold)" : i % 3 === 1 ? "#c9d4e8" : "#e8dcc8",
              }}
            />
          ))}
        </div>
        <span
          className="rsvp-heart relative z-[1] text-5xl text-[var(--color-gold)] sm:text-6xl"
          aria-hidden
        >
          ♥
        </span>
        <p className="relative z-[1] mt-8 max-w-md font-serif text-[clamp(1.35rem,4vw,1.85rem)] leading-snug tracking-tight text-[var(--color-ink)]">
          {f.successTitle}
        </p>
        <p className="relative z-[1] mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-stone)]">
          {f.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex max-h-[min(72dvh,720px)] flex-col overflow-y-auto sm:max-h-[min(68dvh,680px)]"
    >
      <div className="space-y-6 px-5 py-6 sm:px-6">
        <div>
          <label
            htmlFor="rsvp-name"
            className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-stone)]"
          >
            {f.name}
          </label>
          <input
            id="rsvp-name"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[var(--color-ink)] outline-none ring-[var(--color-gold)] transition focus:ring-2"
          />
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-stone)]">
            {f.attending}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setAttending("Yes")}
              className={`${btnBase} ${attending === "Yes" ? btnOn : btnIdle}`}
            >
              {f.attendingYes}
            </button>
            <button
              type="button"
              onClick={() => setAttending("No")}
              className={`${btnBase} ${attending === "No" ? btnOn : btnIdle}`}
            >
              {f.attendingNo}
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="rsvp-allergies"
            className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-stone)]"
          >
            {f.allergies}
          </label>
          <p className="mt-1 text-xs text-[var(--color-stone)]/90">{f.allergiesHint}</p>
          <textarea
            id="rsvp-allergies"
            name="allergies"
            required
            rows={3}
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-[var(--color-ink)] outline-none ring-[var(--color-gold)] transition focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="rsvp-message"
            className="block text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-stone)]"
          >
            {f.message}
          </label>
          <textarea
            id="rsvp-message"
            name="message"
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-[var(--color-ink)] outline-none ring-[var(--color-gold)] transition focus:ring-2"
          />
        </div>

        {status === "error" && errorMsg ? (
          <p className="text-sm text-red-700" role="alert">
            {errorMsg}
          </p>
        ) : null}
      </div>

      <div className="sticky bottom-0 border-t border-black/5 bg-[var(--color-paper)] px-5 py-4 sm:px-6">
        <button
          type="submit"
          disabled={status === "submitting" || !canSubmit}
          className="w-full rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[var(--color-paper)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "submitting" ? f.submitting : f.submit}
        </button>
      </div>
    </form>
  );
}
