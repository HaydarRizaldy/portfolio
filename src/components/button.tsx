import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150";

/** TODO(M1 review): button radius/weight not final until the user picks a direction. */
const variants: Record<Variant, string> = {
  primary: "bg-ink text-background hover:bg-accent",
  outline: "border border-line bg-surface text-ink hover:border-ink/50",
  ghost: "text-ink hover:bg-ink/[0.05]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-sm",
};

function isExternal(href: string) {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
