import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects — Haydar Rizaldy",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="flex-1">
      <Container className="py-20 sm:py-28">
        <PageHeader eyebrow="Projects" title="Selected Work">
          <p>
            A curated set — not a dump of every repo. Each entry is something I
            can stand behind, with the story of why it was built and what
            changed as a result.
          </p>
        </PageHeader>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className={`group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors ${
                  index === 0 ? "sm:col-span-2" : ""
                } hover:border-ink/30`}
              >
                {project.visual && (
                  <span className="mb-6 block overflow-hidden rounded-xl border border-line">
                    <Image
                      src={project.visual.src}
                      alt={project.visual.alt}
                      width={1022}
                      height={540}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 640px) 640px, 100vw"
                      priority={index === 0}
                    />
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {project.role}
                </p>
                <h2 className="mt-2 font-display text-2xl leading-snug text-ink">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-prose text-sm text-muted">
                  {project.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                  Read the case study →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
