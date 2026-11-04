import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

// TODO(M5): replace with the final custom domain when it is chosen.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-steel-pi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects"] as const;

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(), // unstable value is allowed inside sitemap generation
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
