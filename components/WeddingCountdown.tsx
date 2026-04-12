"use client";

import { useEffect, useMemo, useState } from "react";
import { WEDDING_START_ISO } from "@/lib/wedding-meta";

type Props = {
  labels: { days: string; hours: string; minutes: string; seconds: string };
  doneMessage: string;
};

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function WeddingCountdown({ labels, doneMessage }: Props) {
  const target = useMemo(() => new Date(WEDDING_START_ISO).getTime(), []);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = target - now;
  const done = diff <= 0;
  const s = done ? 0 : Math.floor(diff / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;

  const cells = [
    { value: pad(days), label: labels.days },
    { value: pad(hours), label: labels.hours },
    { value: pad(minutes), label: labels.minutes },
    { value: pad(seconds), label: labels.seconds },
  ];

  if (done) {
    return (
      <p className="text-center font-serif text-2xl tracking-tight text-[var(--color-dream-mauve)] sm:text-3xl">
        {doneMessage}
      </p>
    );
  }

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-2xl border border-dream bg-white/70 px-4 py-5 text-center shadow-[0_6px_28px_color-mix(in_srgb,var(--color-dream-rose)_10%,transparent)] backdrop-blur-sm"
        >
          <p className="font-serif text-[clamp(1.75rem,5vw,2.75rem)] tabular-nums tracking-tight text-[var(--color-ink)]">
            {c.value}
          </p>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-stone)]">
            {c.label}
          </p>
        </div>
      ))}
    </div>
  );
}
