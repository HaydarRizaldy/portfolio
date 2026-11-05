import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { CopyEmail } from "@/components/copy-email";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Haydar Rizaldy — Data & Technology Professional",
};

/** Small accent eyebrow + display h2, shared by the home sections. */
function SectionHeading({
  id,
  eyebrow,
  title,
  action,
}: {
  id: string;
  eyebrow: string;
  title: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h2
          id={id}
          className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

/**
 * Home. PRD 4 order: introduction → featured projects → experience
 * highlights → contact. All copy comes from the structured content files.
 */
export default function HomePage() {
  // Top three entries = the recruiter's fast summary.
  const highlights = experience.slice(0, 3);

  return (
    <main id="main" className="flex-1">
      <Container className="pt-20 pb-20 sm:pt-28 sm:pb-24">
        <section className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            {/* Terminal greeting, GitHub-profile style. Line 2 cycles. */}
            <p className="font-mono text-sm leading-relaxed sm:text-base">
              <span className="block text-ink">
                <span aria-hidden="true" className="text-muted">
                  &gt;{" "}
                </span>
                {profile.greeting}
              </span>
              {/* min-h reserves two lines so wrapping on phones never shifts the H1. */}
              <span className="block min-h-[3.25em] text-accent sm:min-h-[1.625em]">
                <span aria-hidden="true" className="text-muted">
                  &gt;{" "}
                </span>
                <Typewriter lines={profile.typewriter} />
              </span>
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects" variant="primary">
                View projects
              </Button>
              <Button href={`mailto:${profile.email}`} variant="outline">
                Get in touch
              </Button>
            </div>
          </div>

          <aside
            aria-label="At a glance"
            className="rounded-2xl border border-line card-glow p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              At a glance
            </p>
            <ul className="mt-5 space-y-5">
              {profile.atAGlance.map((item) => (
                <li
                  key={item.label}
                  className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="block font-display text-3xl tracking-tight text-ink">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {item.label}
                  </span>
                  {"note" in item && item.note && (
                    <span className="mt-1 block text-xs text-muted">
                      {item.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </Container>

      <Container className="pb-24">
        <section aria-labelledby="projects-heading">
          <SectionHeading
            id="projects-heading"
            eyebrow="Featured projects"
            title="Selected work"
            action={{ href: "/projects", label: "All projects →" }}
          />
          {/* Curated cards (PRD 5) — same content source as /projects. */}
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} headingLevel="h3" />
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <Container className="pb-24">
        <section aria-labelledby="experience-heading">
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience highlights"
            title="Where I've worked"
            action={{ href: "/about", label: "See the full timeline →" }}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={`${item.org}-${item.period}`}
                className="rounded-2xl border border-line card-glow p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl leading-snug text-ink">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.org}</p>
                <p className="mt-3 text-sm text-muted">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pb-8">
        <section
          aria-labelledby="contact-heading"
          className="rounded-3xl border border-line card-glow p-8 sm:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl"
          >
            Let&apos;s talk about data.
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted sm:text-base">
            Open to data, analytics, and related opportunities — and always up
            for a conversation about what&apos;s possible.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} variant="primary" size="sm">
              {profile.email}
            </Button>
            <CopyEmail email={profile.email} />
            <Button href={profile.linkedin} variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button href={profile.github} variant="outline" size="sm">
              GitHub
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
