import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "Haydar Rizaldy — Data & Technology Professional",
};

/**
 * Home. Hero copy uses the PRD working headline; experience highlights and
 * contact draw from verified content only. Featured projects remain
 * placeholder cards until M3.
 */
export default function HomePage() {
  // Top three entries = the recruiter's fast summary.
  const highlights = experience.slice(0, 3);

  return (
    <main id="main" className="flex-1">
      <Container className="pt-20 pb-16 sm:pt-28">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {profile.positioning}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" variant="outline">
              View projects
            </Button>
            <Button href={`mailto:${profile.email}`} variant="primary">
              Get in touch
            </Button>
          </div>
        </section>
      </Container>

      <Container className="pb-8">
        <div className="border-t border-line pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Experience highlights
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={`${item.org}-${item.period}`}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {item.period}
                </p>
                <p className="mt-2 font-display text-xl leading-snug text-ink">
                  {item.role}
                </p>
                <p className="mt-1 text-sm text-accent">{item.org}</p>
                <p className="mt-3 text-sm text-muted">{item.summary}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <a
              href="/about"
              className="text-accent underline-offset-4 hover:underline"
            >
              See the full timeline →
            </a>
          </p>
        </div>
      </Container>

      <Container className="pb-8">
        <div className="border-t border-line pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Featured projects
          </p>
          {/* M3 replaces these placeholders with the real curated cards (PRD 5). */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Unified Social Media Scraper", "Course Recommender System", "Credit Risk Prediction"].map(
              (title) => (
                <div
                  key={title}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <p className="font-display text-xl text-ink">{title}</p>
                  <p className="mt-2 text-sm text-muted">
                    Placeholder card — case-study summary, role and tags arrive
                    in M3 with verified content.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>

      <Container className="pb-8">
        <div className="border-t border-line pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
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
            <Button href={profile.linkedin} variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button href={profile.github} variant="outline" size="sm">
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
