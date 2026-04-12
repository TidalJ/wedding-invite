"use client";

import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  onChange: (l: Locale) => void;
  /** Light buttons on dark hero / transparent header */
  inverted?: boolean;
};

export function LanguageToggle({ locale, onChange, inverted = false }: Props) {
  return (
    <div
      className={[
        "inline-flex rounded-full border p-0.5 shadow-sm backdrop-blur-md",
        inverted
          ? "border-white/20 bg-white/10"
          : "border-black/10 bg-white/60 dark:border-white/10 dark:bg-black/30",
      ].join(" ")}
      role="group"
      aria-label="Language"
    >
      {(["en", "zh"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={[
            "min-h-11 min-w-[3.25rem] rounded-full px-3 text-[11px] font-medium tracking-[0.2em] uppercase transition-colors",
            inverted
              ? locale === code
                ? "bg-white text-[#0a0a0b]"
                : "text-white/55 hover:text-white"
              : locale === code
                ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                : "text-[var(--color-stone)] hover:text-[var(--color-ink)]",
          ].join(" ")}
        >
          {code === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
