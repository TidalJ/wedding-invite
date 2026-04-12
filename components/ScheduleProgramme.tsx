type Row = {
  time: string;
  title: string;
  note?: string;
};

type Group = {
  label: string;
  rows: readonly Row[];
};

type Props = {
  title: string;
  dek: string;
  /** Cross-link from logistics: confirms times live in this block */
  timesNote?: string;
  groups: readonly Group[];
};

/**
 * Programme: centered column; time stacks above each line for visual consistency with the rest of the page.
 */
export function ScheduleProgramme({ title, dek, timesNote, groups }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
      <header className="mx-auto max-w-2xl">
        <h2 className="font-serif text-[clamp(1.875rem,4vw,2.75rem)] font-normal leading-tight tracking-tight text-[var(--color-ink)]">
          {title}
        </h2>
        <p className="mt-5 text-[14px] leading-relaxed text-[var(--color-stone)] sm:text-[15px]">
          {dek}
        </p>
        {timesNote ? (
          <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-stone)]/90 sm:text-[14px]">
            {timesNote}
          </p>
        ) : null}
      </header>

      <div className="mt-16 sm:mt-20">
        {groups.map((group, gi) => (
          <div
            key={group.label}
            className={
              gi > 0 ? "mt-20 border-t border-dream pt-20 sm:mt-24 sm:pt-24" : ""
            }
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-[var(--color-dream-mauve)]">
              {group.label}
            </p>
            <ul className="mt-10 space-y-0 sm:mt-12">
              {group.rows.map((row) => (
                <li
                  key={`${row.time}-${row.title}`}
                  className="flex flex-col items-center border-b border-dream/50 py-10 text-center first:pt-0 last:border-b-0 last:pb-0 sm:py-12"
                >
                  <time
                    className="font-mono text-[12px] font-medium tabular-nums tracking-[0.08em] text-[var(--color-dream-rose-deep)] sm:text-[13px]"
                  >
                    {row.time}
                  </time>
                  <p className="mt-3 font-serif text-[1.125rem] leading-snug tracking-tight text-[var(--color-ink)] sm:text-[1.3rem]">
                    {row.title}
                  </p>
                  {row.note ? (
                    <p className="mx-auto mt-3 max-w-prose text-[13px] leading-[1.75] text-[var(--color-stone)] sm:text-[14px]">
                      {row.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
