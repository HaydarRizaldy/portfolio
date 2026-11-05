"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 45; // per character typed
const DELETE_MS = 25; // per character deleted
const HOLD_MS = 2200; // full line stays visible
const GAP_MS = 400; // empty pause before the next line

/**
 * Cycles through `lines` with a typing/deleting effect and a blinking caret.
 * - Server/initial render shows lines[0] in full: correct no-JS HTML, no empty
 *   flash on hydration.
 * - prefers-reduced-motion: stays on lines[0], no cycling (the global
 *   reduced-motion CSS also freezes the caret).
 * - Screen readers get every line once via the sr-only text; the animated
 *   characters are aria-hidden so keystrokes aren't announced.
 */
export function Typewriter({ lines }: { lines: readonly string[] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState(lines[0] ?? "");
  const [phase, setPhase] = useState<"hold" | "deleting" | "typing">("hold");

  useEffect(() => {
    if (lines.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const full = lines[lineIndex];
    let delay: number;
    let step: () => void;

    if (phase === "hold") {
      delay = HOLD_MS;
      step = () => setPhase("deleting");
    } else if (phase === "deleting") {
      if (text.length > 0) {
        delay = DELETE_MS;
        step = () => setText(text.slice(0, -1));
      } else {
        delay = GAP_MS;
        step = () => {
          setLineIndex((lineIndex + 1) % lines.length);
          setPhase("typing");
        };
      }
    } else {
      if (text.length < full.length) {
        delay = TYPE_MS;
        step = () => setText(full.slice(0, text.length + 1));
      } else {
        delay = 0;
        step = () => setPhase("hold");
      }
    }

    const timer = window.setTimeout(step, delay);
    return () => window.clearTimeout(timer);
  }, [lines, lineIndex, text, phase]);

  return (
    <>
      <span className="sr-only">{lines.join("; ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] bg-current" />
      </span>
    </>
  );
}
