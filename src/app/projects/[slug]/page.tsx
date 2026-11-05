import type { Metadata } from "next";
import type { ReactNode } from "react";
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
 * On wide screens an "At a glance" aside sits beside the sections.
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

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="border-t border-line pt-10 first:border-t-0 first:pt-0"
    >
      <h2
        id={id}
        className="text-xs font-semibold uppercase tracking-[0.22em] text-muted"
      >
        {label}
      </h2>
      {children}
    </section>
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

  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

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
            <a
              href={project.visual.src}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <Image
                src={project.visual.src}
                alt={project.visual.alt}
                width={project.visual.width}
                height={project.visual.height}
                className="h-auto w-full"
                sizes="(min-width: 72rem) 72rem, 100vw"
                priority
              />
              <span className="sr-only">(opens full-size image in a new tab)</span>
            </a>
            <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-muted">
              <span>{project.visual.caption}</span>
              <a
                href={project.visual.src}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                View full size ↗
              </a>
            </figcaption>
          </figure>
        ) : null}

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="space-y-10">
            {/* 3. Challenge */}
            <Section id="challenge" label="Challenge">
              <p className="mt-4 max-w-prose text-base text-ink/90">
                {project.challenge}
              </p>
            </Section>

            {/* 4. Solution */}
            <Section id="solution" label="Solution">
              <p className="mt-4 max-w-prose text-base text-ink/90">
                {project.solution}
              </p>
            </Section>

            {/* 5. Key capabilities */}
            <Section id="capabilities" label="Key capabilities">
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.capabilities.map((capability) => (
                  <li
                    key={capability.title}
                    className="rounded-2xl border border-line bg-surface p-5"
                  >
                    <h3 className="font-display text-lg text-ink">
                      {capability.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">{capability.detail}</p>
                  </li>
                ))}
              </ul>
            </Section>

            {/* 6. Impact — verified outcomes, or clearly labelled estimates */}
            <Section id="impact" label="Impact">
              {project.stats && project.stats.length > 0 && (
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.stats.map((stat) => (
                    <li
                      key={stat.label}
                      className="rounded-2xl border border-line bg-surface p-5"
                    >
                      <span className="block font-display text-3xl tracking-tight text-accent sm:text-4xl">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-sm text-ink/90">
                        {stat.label}
                      </span>
                      {stat.note && (
                        <span className="mt-1 block text-xs text-muted">
                          {stat.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-6 max-w-prose space-y-4 text-base text-ink/90">
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
            </Section>

            {/* 7. My contribution */}
            <Section id="contribution" label="My contribution">
              <p className="mt-4 max-w-prose text-base text-ink/90">
                {project.contribution}
              </p>
            </Section>

            {/* 8. Technical details */}
            <Section id="technical" label="Technical details">
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <aside aria-label="Project at a glance">
            <div className="rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                At a glance
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs text-muted">Type</dt>
                  <dd className="mt-1 text-ink">{project.cardLabel}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Stack</dt>
                  <dd className="mt-1 text-ink">{project.tech.join(", ")}</dd>
                </div>
                {project.repositoryNote && (
                  <div>
                    <dt className="text-xs text-muted">Source</dt>
                    <dd className="mt-1 text-ink">Private repository</dd>
                  </div>
                )}
              </dl>
              {project.repositoryNote && (
                <p className="mt-4 text-xs text-muted">{project.repositoryNote}</p>
              )}
              {project.link && (
                <div className="mt-5">
                  <Button href={project.link.href} variant="outline" size="sm">
                    {project.link.label}
                  </Button>
                </div>
              )}
            </div>
          </aside>
        </div>

        <nav
          aria-label="More projects"
          className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-ink/30"
            >
              <span className="text-xs text-muted">← Previous project</span>
              <span className="mt-1 block font-display text-lg text-ink group-hover:text-accent">
                {previous.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/projects"
              className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-ink/30"
            >
              <span className="text-xs text-muted">← Back to</span>
              <span className="mt-1 block font-display text-lg text-ink group-hover:text-accent">
                All projects
              </span>
            </Link>
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-2xl border border-line bg-surface p-5 text-right transition-colors hover:border-ink/30"
            >
              <span className="text-xs text-muted">Next project →</span>
              <span className="mt-1 block font-display text-lg text-ink group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/projects"
              className="group rounded-2xl border border-line bg-surface p-5 text-right transition-colors hover:border-ink/30"
            >
              <span className="text-xs text-muted">Back to →</span>
              <span className="mt-1 block font-display text-lg text-ink group-hover:text-accent">
                All projects
              </span>
            </Link>
          )}
        </nav>
      </Container>
    </main>
  );
}
