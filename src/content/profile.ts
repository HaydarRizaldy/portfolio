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
  headline: "Make the data work.",
  intro:
    "Data engineer focused on analytics, data engineering, and applied automation — currently an intern at ALVA Digital Network. Previously supported bank-wide master data management at CIMB Niaga and shipped an interactive reporting stack on Vercel.",
  // Hero terminal greeting. The second line cycles through `typewriter`.
  // Mirrors the GitHub profile typing banner (README.md) — keep both in sync.
  greeting: "Hi, I'm Haydar Rizaldy 👋",
  typewriter: [
    "SQL by Day, Python by Night",
    "SELECT * FROM life WHERE bugs = 0",
    "Automating the Boring Stuff",
    "It Works On My Machine",
    "Cleaning Data So You Don't Have To",
    "Debugging: Detective and Culprit",
    "Curious Mind, Clean Code",
    "Professional Googler of Errors",
    "Not a Bug, It's a Feature",
    "Ctrl+C, Ctrl+V, Ctrl+Pray",
    "Open to Collaborate - Let's Connect!",
  ],
  // Hero "Toolkit" panel — only tools the owner's work shows being used:
  // projects.ts tech lists, the Unified Scraper README (PostgreSQL migrations
  // and tests, GitHub Actions CI), and the public Credit Risk notebook (pandas,
  // scikit-learn). Every entry has an official logo in tool-logo.tsx.
  // Ordered: languages & database, data, platforms, automation & APIs.
  toolkit: [
    "Python", "PostgreSQL", "JavaScript",
    "pandas", "scikit-learn", "OpenCV",
    "Supabase", "Vercel", "Docker",
    "GitHub Actions", "Google Apps Script", "RapidAPI",
  ],
  email: "haydarrizaldyputera@gmail.com",
  linkedin: "https://www.linkedin.com/in/haydar-rizaldy/",
  github: "https://github.com/HaydarRizaldy",
} as const;
