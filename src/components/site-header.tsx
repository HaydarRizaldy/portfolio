"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  // The menu is tied to the route it was opened on. Navigating changes the
  // route, so the menu closes by derivation — no effect needed.
  const [menuRoute, setMenuRoute] = useState<string | null>(null);
  const open = menuRoute !== null && menuRoute === pathname;

  // Close on Escape for keyboard accessibility.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuRoute(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggle = () => setMenuRoute(open ? null : pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
          aria-label="Haydar Rizaldy — home"
        >
          Haydar Rizaldy<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center sm:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    active
                      ? "bg-ink/[0.05] text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button href="mailto:haydarrizaldyputera@gmail.com" size="sm" className="hidden sm:inline-flex">
            Email me
          </Button>

          <ThemeToggle />

          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line bg-background sm:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={`border-b border-line/60 py-3 text-base last:border-b-0 ${
                  isActive(pathname, item.href) ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:haydarrizaldyputera@gmail.com"
              className="py-3 text-base text-accent"
            >
              Email me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
