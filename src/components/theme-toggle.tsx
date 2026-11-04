"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

/**
 * The current theme lives on `<html data-theme=...>` — external state managed
 * by the pre-hydration script in the root layout. This toggle reacts to it
 * through that attribute, so no effect/state copies are needed.
 */
const subscribe = (onStoreChange: () => void) => {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};

const getSnapshot = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

// Server placeholder; the client recomputes the real value after hydration.
const getServerSnapshot = (): Theme => "light";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage disabled — still switch for this session.
    }
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-ink/40 ${className}`}
      aria-label="Toggle dark mode"
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 1v1.75M8 13.25V15M15 8h-1.75M2.75 8H1M12.95 3.05l-1.24 1.24M4.29 11.71l-1.24 1.24M12.95 12.95l-1.24-1.24M4.29 4.29L3.05 3.05"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M13.5 9.5A5.5 5.5 0 1 1 6.5 2.5a4.4 4.4 0 0 0 7 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
