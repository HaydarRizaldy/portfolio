import type { ReactNode } from "react";

/**
 * Vertical editorial timeline. Entries are plain props, so it works for
 * experience now and anything else later.
 */
export function Timeline({
  items,
}: {
  items: {
    period: string;
    title: ReactNode;
    subtitle?: string;
    summary?: string;
    highlights: ReactNode[];
    tags?: string[];
    current?: boolean; // marks the ongoing role with an accent dot
  }[];
}) {
  return (
    <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
      {items.map((item, index) => (
        <li key={index} className="relative">
          <span
            aria-hidden="true"
            className={`absolute top-1.5 -left-[1.72rem] h-2.5 w-2.5 rounded-full border sm:-left-[2.22rem] ${
              item.current
                ? "border-accent bg-accent ring-4 ring-accent-soft"
                : "border-muted/60 bg-background"
            }`}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {item.period}
            {item.current && (
              <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-[0.65rem] tracking-[0.12em] text-accent">
                Current
              </span>
            )}
          </p>
          <div className="mt-2">
            {item.title}
            {item.subtitle && (
              <p className="text-sm text-accent">{item.subtitle}</p>
            )}
          </div>
          {item.summary && (
            <p className="mt-2 max-w-prose text-sm text-muted">{item.summary}</p>
          )}
          <ul className="mt-3 max-w-prose space-y-2">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink/90">
                <span aria-hidden="true" className="mt-[0.55rem] h-px w-3 shrink-0 bg-line" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          {item.tags && item.tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
