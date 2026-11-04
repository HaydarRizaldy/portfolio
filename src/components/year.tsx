"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => 0;

/**
 * Footer year. `new Date()` is an unstable value during prerendering, so it
 * is read through useSyncExternalStore: the server prerenders `0` and the
 * client recomputes the real year after hydration.
 */
export function Year() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>{year === 0 ? "" : year}</>;
}
