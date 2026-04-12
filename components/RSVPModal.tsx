"use client";

import { useCallback, useEffect, useState } from "react";
import { RSVPInlineForm } from "@/components/RSVPInlineForm";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type Props = {
  open: boolean;
  onClose: () => void;
  embedUrl?: string;
  externalUrl?: string;
  inlineRsvpAvailable: boolean;
  locale: Locale;
};

export function RSVPModal({
  open,
  onClose,
  embedUrl,
  externalUrl,
  inlineRsvpAvailable,
  locale,
}: Props) {
  const c = t(locale).rsvp;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!open) setLoaded(false);
  }, [open, embedUrl]);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onKey]);

  if (!open) return null;

  const href = externalUrl ?? embedUrl;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-modal-title"
    >
      <button
        type="button"
        aria-label={c.close}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-[101] flex max-h-[min(92dvh,880px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-[1.25rem] border border-black/10 bg-[var(--color-paper)] shadow-2xl sm:rounded-3xl">
        <header className="flex shrink-0 items-center justify-between border-b border-black/5 px-5 py-4 sm:px-6">
          <h2
            id="rsvp-modal-title"
            className="font-serif text-lg tracking-tight text-[var(--color-ink)] sm:text-xl"
          >
            {c.modalTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-2 text-sm text-[var(--color-stone)] transition hover:bg-black/5 hover:text-[var(--color-ink)]"
          >
            {c.close}
          </button>
        </header>

        <div className="relative min-h-[50dvh] flex-1 bg-white/50">
          {inlineRsvpAvailable ? (
            <RSVPInlineForm locale={locale} />
          ) : embedUrl ? (
            <>
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--color-stone)]">
                  {c.loading}
                </div>
              )}
              <iframe
                title={c.modalTitle}
                src={embedUrl}
                className="h-[min(72dvh,720px)] w-full border-0 sm:h-[min(68dvh,680px)]"
                onLoad={() => setLoaded(true)}
              />
            </>
          ) : (
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 px-6 py-10 text-center">
              <p className="font-medium text-[var(--color-ink)]">
                {c.fallbackTitle}
              </p>
              <p className="max-w-md text-sm leading-relaxed text-[var(--color-stone)]">
                {c.fallbackBody}
              </p>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition hover:opacity-90"
                >
                  {c.openExternal}
                </a>
              ) : null}
            </div>
          )}
        </div>

        {href && embedUrl ? (
          <footer className="shrink-0 border-t border-black/5 px-5 py-3 text-center sm:px-6">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-stone)] underline-offset-4 hover:text-[var(--color-ink)] hover:underline"
            >
              {c.openExternal}
            </a>
          </footer>
        ) : null}
      </div>
    </div>
  );
}
