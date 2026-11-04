import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { projects, type Project } from "@/content/projects";

/**
 * Case-study template. Section order is fixed by PRD 6:
 * hero → visual → challenge → solution → key capabilities → impact →
 * my contribution → technical details.
 */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found — Haydar Rizaldy" };
  return {
    title: `${project.title} — Haydar Rizaldy`,
    description: project.summary,
  };
}

function sectionHeading(label: string) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
      {label}
    </h2>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main" className="flex-1">
      <Container className="py-16 sm:py-24">
        {/* 1. Hero */}
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Project
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            {project.summary}
          </p>
          <p className="mt-3 text-sm font-medium text-ink">{project.role}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </header>

        {/* 2. Visual — real approved imagery only; never a fabricated screenshot. */}
        {project.visual ? (
          <figure className="mt-12">
            <span className="block overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src={project.visual.src}
                alt={project.visual.alt}
                width={1022}
                height={1055}
                className="h-auto w-full"
                sizes="(min-width: 72rem) 72rem, 100vw"
                priority
              />
            </span>
            {project.visual.caption && (
              <figcaption className="mt-3 text-xs text-muted">
                {project.visual.caption}
              </figcaption>
            )}
          </figure>
        ) : null}

        {/* 3. Challenge */}
        <section className="mt-14 border-t border-line pt-12">
          {sectionHeading("Challenge")}
          <p className="mt-4 max-w-prose text-base text-ink/90">
            {project.challenge}
          </p>
        </section>

        {/* 4. Solution */}
        <section className="mt-10 border-t border-line pt-12">
          {sectionHeading("Solution")}
          <p className="mt-4 max-w-prose text-base text-ink/90">
            {project.solution}
          </p>
        </section>

        {/* 5. Key capabilities */}
        <section className="mt-10 border-t border-line pt-12">
          {sectionHeading("Key capabilities")}
          <ul className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
            {project.capabilities.map((capability) => (
              <li
                key={capability.title}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <p className="font-display text-lg text-ink">
                  {capability.title}
                </p>
                <p className="mt-1.5 text-sm text-muted">{capability.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Impact — verified outcomes, or clearly labelled estimates */}
        <section className="mt-10 border-t border-line pt-12">
          {sectionHeading("Impact")}
          <ul className="mt-4 max-w-prose space-y-4 text-base text-ink/90">
            {project.impact.map((item) => (
              <li key={item.text} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  {item.text}
                  {item.caveat && (
                    <span className="mt-1 block text-xs text-muted">
                      {item.caveat}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          {project.authors && (
            <p className="mt-4 max-w-prose text-xs text-muted">
              Authors: {project.authors}
            </p>
          )}
        </section>

        {/* 7. My contribution */}
        <section className="mt-10 border-t border-line pt-12">
          {sectionHeading("My contribution")}
          <p className="mt-4 max-w-prose text-base text-ink/90">
            {project.contribution}
          </p>
          {project.repositoryNote && (
            <p className="mt-3 max-w-prose text-xs text-muted">
              {project.repositoryNote}
            </p>
          )}
        </section>

        {/* 8. Technical details */}
        <section className="mt-10 border-t border-line pt-12">
          {sectionHeading("Technical details")}
          <ul className="mt-4 flex max-w-3xl flex-wrap gap-2" aria-label="Technologies">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {project.link && (
          <div className="mt-10">
            <Button href={project.link.href} variant="outline">
              {project.link.label}
            </Button>
          </div>
        )}

        <div className="mt-14 border-t border-line pt-8">
          <Link
            href="/projects"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            ← All projects
          </Link>
        </div>
      </Container>
    </main>
  );
}
