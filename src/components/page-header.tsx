import type { ReactNode } from "react";

/** Shared page header: eyebrow label + display heading + optional intro. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {children && (
        <div className="mt-5 max-w-xl text-base text-muted sm:text-lg">
          {children}
        </div>
      )}
    </header>
  );
}
