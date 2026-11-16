/**
 * Canonical public URL, used by metadata, sitemap, and robots.
 * NEXT_PUBLIC_SITE_URL overrides it (e.g. for a preview or a future custom domain).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://haydarrizaldy.vercel.app"
).replace(/\/+$/, "");

/**
 * Per-page metadata. Next merges `openGraph`/`twitter` shallowly, so a page that
 * set only `title` inherited the home page's canonical URL and social title;
 * this gives each page its own, with the shared site fields filled in.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website" as const, siteName: "Haydar Rizaldy", url: `${siteUrl}${path}`, title, description },
    twitter: { card: "summary_large_image" as const, title, description },
  };
}
