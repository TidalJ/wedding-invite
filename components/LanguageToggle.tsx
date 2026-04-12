"use client";

import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  onChange: (l: Locale) => void;
};

export function LanguageToggle({ locale, onChange }: Props) {
  return (
    <div
      className="inline-flex rounded-full border border-dream bg-white/55 p-0.5 shadow-sm backdrop-blur-md"
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
            locale === code
              ? "bg-gradient-to-r from-[var(--color-dream-rose-deep)] to-[var(--color-dream-rose)] text-white shadow-sm"
              : "text-[var(--color-stone)] hover:text-[var(--color-ink)]",
          ].join(" ")}
        >
          {code === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
