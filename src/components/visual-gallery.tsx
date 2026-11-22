"use client";

import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import Image from "next/image";
import type { Visual } from "@/content/projects";

const SWIPE_PX = 40; // horizontal travel that counts as a swipe

/**
 * Case-study visuals. One image renders as a plain figure; several become a
 * slide carousel.
 * - Each slide keeps its natural height at full width, so tall screenshots
 *   stay readable; the controls sit in a bar above the image so they stay in
 *   view however tall the slide is.
 * - Prev/Next buttons, dot buttons, ← → keys while focus is inside, and swipe.
 * - Inactive slides are `hidden`, so assistive tech only meets the current one;
 *   the live region announces "Slide n of N" on change.
 * - No autoplay, so nothing moves on its own (reduced-motion safe).
 */
export function VisualGallery({ visuals }: { visuals: Visual[] }) {
  const [current, setCurrent] = useState(0);
  // Which way the last change went; the incoming slide slides in from that side.
  const [dir, setDir] = useState<"next" | "prev">();
  const touchX = useRef<number | null>(null);
  const count = visuals.length;
  const many = count > 1;
  const visual = visuals[current];

  const go = (i: number) => {
    setDir(i > current ? "next" : "prev");
    setCurrent((i + count) % count);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(current - 1);
    else if (e.key === "ArrowRight") go(current + 1);
    else return;
    e.preventDefault();
  };
  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) >= SWIPE_PX) go(current + (dx < 0 ? 1 : -1));
  };

  return (
    <figure
      className="mt-12"
      {...(many && {
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": "Project screenshots",
        onKeyDown,
      })}
    >
      {many && (
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-medium tabular-nums text-muted" aria-live="polite">
            <span className="sr-only">Slide </span>
            {current + 1} / {count}
          </p>
          <div className="flex items-center gap-2">
            {visuals.map((v, i) => (
              <button
                key={v.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === current}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-accent" : "w-2.5 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <SlideButton label="Previous screenshot" onClick={() => go(current - 1)}>
              ‹
            </SlideButton>
            <SlideButton label="Next screenshot" onClick={() => go(current + 1)}>
              ›
            </SlideButton>
          </div>
        </div>
      )}

      <div
        className="overflow-hidden rounded-2xl border border-line bg-surface"
        data-dir={dir}
        onTouchStart={many ? onTouchStart : undefined}
        onTouchEnd={many ? onTouchEnd : undefined}
      >
        {visuals.map((v, i) => (
          <a
            key={v.src}
            href={v.src}
            target="_blank"
            rel="noreferrer"
            hidden={i !== current}
            className="block"
            data-slide=""
            {...(many && {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `${i + 1} of ${count}`,
            })}
          >
            <Image
              src={v.src}
              alt={v.alt}
              width={v.width}
              height={v.height}
              className="h-auto w-full"
              sizes="(min-width: 72rem) 72rem, 100vw"
              // Hidden slides would lazy-load only once shown (a blank frame on
              // slow phones); the images are small, so fetch them all up front.
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
            />
            <span className="sr-only">(opens full-size image in a new tab)</span>
          </a>
        ))}
      </div>

      <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-muted">
        <span>{visual.caption}</span>
        <a
          href={visual.src}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          View full size ↗
        </a>
      </figcaption>
    </figure>
  );
}

function SlideButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-line text-xl leading-none text-ink transition-[color,border-color,transform] duration-150 hover:border-ink/30 hover:text-accent active:scale-90"
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}
