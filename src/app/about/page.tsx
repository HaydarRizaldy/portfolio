import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/button";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { skillGroups, certifications, languages } from "@/content/skills";

export const metadata: Metadata = {
  title: "About — Haydar Rizaldy",
};

export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <Container className="py-20 sm:py-28">
        <PageHeader
          eyebrow="About"
          title="Experience & Education"
        >
          <p>
            {profile.intro}
          </p>
        </PageHeader>

        <section className="mt-16" aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-muted"
          >
            Experience
          </h2>
          <div className="mt-8">
            <Timeline
              items={experience.map((item) => ({
                period: item.period,
                title: (
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {item.role}
                  </h3>
                ),
                subtitle: item.org,
                summary: item.summary,
                highlights: item.highlights,
                tags: item.tags,
              }))}
            />
          </div>
        </section>

        <section className="mt-20" aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-muted"
          >
            Education
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="font-display text-xl text-ink">
                {education.telkom.school}
              </p>
              <p className="mt-1 text-sm text-ink/85">{education.telkom.degree}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                {education.telkom.period}
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="font-display text-xl text-ink">
                {education.mmu.school}
              </p>
              <p className="mt-1 text-sm text-ink/85">{education.mmu.degree}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                {education.mmu.period}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-muted"
          >
            Skills & Certifications
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <p className="font-display text-lg text-ink">{group.title}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-ink">Certifications</p>
              <ul className="mt-3 max-w-prose space-y-2 text-sm text-muted">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Languages</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PRD 4 (CV): downloadable PDF is deferred until the CV is updated
            and approved. Requesting by mail keeps the claim accurate. */}
        <section
          className="mt-20 rounded-2xl border border-line bg-surface p-8"
          aria-labelledby="cv-heading"
        >
          <h2 id="cv-heading" className="font-display text-2xl text-ink">
            Detailed CV
          </h2>
          <p className="mt-2 max-w-prose text-sm text-muted">
            A downloadable PDF with full project detail isn&apos;t published
            here yet. The current CV is available upon request.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} variant="primary" size="sm">
              Request CV by email
            </Button>
            <Button href={profile.linkedin} variant="outline" size="sm">
              View LinkedIn
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
