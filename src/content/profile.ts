/**
 * Profile content — sourced from the user's LinkedIn export (Profile.pdf).
 * Rule: nothing here is invented; anything unverified stays out or is TODO.
 */
export const profile = {
  name: "Haydar Rizaldy Putera Prayudi",
  shortName: "Haydar Rizaldy",
  positioning: "Data & Technology Professional",
  letterhead: [
    "Data Engineer Intern at ALVA Digital Network",
    "Tangerang, Banten, Indonesia",
  ],
  // PRD 1 working headline — a proposal; may be refined during visual design.
  headline: "Turning Data Into Insight. Building Solutions That Matter.",
  intro:
    "Data engineer focused on analytics, data engineering, and applied automation — currently an intern at ALVA Digital Network. Previously supported bank-wide master data management at CIMB Niaga and shipped an interactive reporting stack on Vercel.",
  // Hero "at a glance" panel — each item restates a fact already verified
  // elsewhere on the site (projects.ts / experience.ts). Estimates stay labelled.
  atAGlance: [
    {
      value: "≈83%",
      label: "less time per campaign run with the Unified Scraper",
      note: "Estimate, not a benchmark",
    },
    {
      value: "IEEE",
      label: "first-author paper, ICITISEE 2025",
    },
    {
      value: "3",
      label: "organizations in data roles — ALVA, CIMB Niaga, ID/X Partners",
    },
  ],
  email: "haydarrizaldyputera@gmail.com",
  linkedin: "https://www.linkedin.com/in/haydar-rizaldy/",
  github: "https://github.com/HaydarRizaldy",
} as const;
