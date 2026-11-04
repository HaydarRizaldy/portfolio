import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/*
 * Runs before first paint: data-theme comes from localStorage when the user
 * has an explicit choice, otherwise from the OS preference. The media-query
 * listener keeps the site in sync with OS changes when no choice is saved.
 */
const themeScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.setAttribute("data-theme",t);var m=window.matchMedia("(prefers-color-scheme: dark)");m.addEventListener("change",function(e){try{if(!localStorage.getItem("theme")){d.setAttribute("data-theme",e.matches?"dark":"light")}}catch(x){}})}catch(e){}})();`;

// TODO(M4): title template, open graph images, canonical URL once domain is chosen.
export const metadata: Metadata = {
  title: "Haydar Rizaldy — Data & Technology Professional",
  description:
    "Portfolio of Haydar Rizaldy: experience and selected work across data analytics, data engineering, automation, and applied technology.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
