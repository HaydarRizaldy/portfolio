"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide motion, mounted once in the layout. Renders nothing.
 * - Fade-up on scroll: `[data-reveal]` elements that start below the fold are
 *   marked pending (hidden by CSS) and revealed as they enter; scrolling back
 *   up fades them out again as they drop below the fold, ready to replay.
 *   Elements already in view at load are left alone, so there's no flash, and
 *   without JS or with reduced motion nothing is ever hidden. Re-runs on
 *   client navigation.
 * - Card spotlight: sets --mx/--my on the hovered `.card-spotlight` so its
 *   glow follows the pointer.
 */
export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = [...document.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
      (el) => !el.dataset.reveal,
    );
    // Only what starts below the fold is hidden up front; the rest is tracked
    // too, so it can fade out and replay once scrolled down past and back.
    const pending = targets.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
    pending.forEach((el) => (el.dataset.reveal = "pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) el.dataset.reveal = "shown";
          // Left through the bottom edge = the visitor scrolled back up.
          // (Leaving through the top while scrolling down keeps it shown.)
          else if (entry.boundingClientRect.top > 0) el.dataset.reveal = "pending";
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      // Don't leave anything hidden if we unmount mid-page.
      targets.forEach((el) => {
        if (el.dataset.reveal === "pending") el.dataset.reveal = "shown";
      });
    };
  }, [pathname]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".card-spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
