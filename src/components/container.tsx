import type { ReactNode } from "react";

/**
 * Shared page container. Editorial scale: generous side gutters,
 * max width tuned for comfortable measure and airy layouts.
 */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
