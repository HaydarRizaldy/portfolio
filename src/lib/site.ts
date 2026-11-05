/**
 * Canonical public URL, used by metadata, sitemap, and robots.
 * NEXT_PUBLIC_SITE_URL overrides it (e.g. for a preview or a future custom domain).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://haydarrizaldy.vercel.app"
).replace(/\/+$/, "");
