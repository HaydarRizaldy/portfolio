import type { MetadataRoute } from "next";

// TODO(M5): replace with the final custom domain when it is chosen.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-steel-pi.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
