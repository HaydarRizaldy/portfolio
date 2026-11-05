import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

/**
 * Project card shared by Home (featured) and /projects (listing).
 * `showVisual` renders a 16:9 crop (top of the image) of the approved visual;
 * the full image lives on the case study. `headingLevel` keeps the outline
 * correct: h2 on /projects (directly under the page h1), h3 under a section h2.
 */
export function ProjectCard({
  project,
  showVisual = false,
  priority = false,
  headingLevel = "h2",
  className = "",
}: {
  project: Project;
  showVisual?: boolean;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
  className?: string;
}) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/30 ${className}`}
    >
      {showVisual && project.visual && (
        <span className="mb-6 block aspect-video overflow-hidden rounded-xl border border-line">
          <Image
            src={project.visual.src}
            alt={project.visual.alt}
            width={project.visual.width}
            height={project.visual.height}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
            sizes="(min-width: 72rem) 68rem, 100vw"
            priority={priority}
          />
        </span>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {project.cardLabel}
      </p>
      <Heading className="mt-2 font-display text-2xl leading-snug text-ink">
        {project.title}
      </Heading>
      <p className="mt-2 max-w-prose text-sm text-muted">{project.summary}</p>
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
      <span className="mt-auto pt-5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
        Read the case study →
      </span>
    </Link>
  );
}
