import type { CSSProperties } from "react";

/**
 * HR monogram. The PNG is used only as a CSS mask and filled with
 * `currentColor`, so the mark always matches the surrounding text colour in
 * both light and dark themes. Decorative: the visible name next to it (or the
 * link's aria-label) carries the meaning. Set the size with a height class
 * (e.g. `h-6`); width follows the mark's 1.275:1 aspect ratio.
 */
const maskStyle: CSSProperties = {
  backgroundColor: "currentColor",
  WebkitMaskImage: "url(/brand/hr-mark.png)",
  maskImage: "url(/brand/hr-mark.png)",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block aspect-[1.275/1] shrink-0 ${className}`}
      style={maskStyle}
    />
  );
}
