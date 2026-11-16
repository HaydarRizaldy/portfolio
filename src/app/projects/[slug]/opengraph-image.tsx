import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

// White HR monogram (transparent PNG, 1.275:1), read once at build time.
const markData = await readFile(
  join(process.cwd(), "public/brand/hr-mark-light.png"),
  "base64",
);
const markSrc = `data:image/png;base64,${markData}`;

/**
 * Per-project social preview, in the same style as the site default
 * (app/opengraph-image.tsx): label, project title, and the card summary.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `Project case study by ${profile.shortName}`;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const title = project?.title ?? profile.shortName;
  const summary = project?.summary ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0f1215",
          color: "#e7eaee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={markSrc} width={71} height={56} alt="" />
          <div
            style={{
              width: 1,
              height: 40,
              backgroundColor: "#2dd4bf",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, color: "#97a1ac" }}>{profile.shortName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#2dd4bf",
            }}
          >
            {project?.cardLabel ?? "Project"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              maxWidth: 1000,
              color: "#e7eaee",
            }}
          >
            {title}
          </div>
          <div
            style={{
              // Satori clamps lines only on display: block.
              display: "block",
              lineClamp: 3,
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 1000,
              color: "#97a1ac",
            }}
          >
            {summary}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
