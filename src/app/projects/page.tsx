import type { Metadata } from "next";
import { Container } from "@/components/container";

/** M1 stub — project listing and case-study cards are milestone M3. TODO(M3). */
export const metadata: Metadata = {
  title: "Projects — Haydar Rizaldy",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="flex-1">
      <Container className="py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Projects
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Selected Work
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted">
          Placeholder — a curated set of three or four evidenced projects with
          case-study pages arrives here in M3.
        </p>
      </Container>
    </main>
  );
}
