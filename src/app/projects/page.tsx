import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
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
            <li key={project.slug} className={index === 0 ? "sm:col-span-2" : ""}>
              <ProjectCard project={project} showVisual priority={index === 0} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
