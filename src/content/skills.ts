/**
 * Skills, certifications, languages — from the LinkedIn export ("Top skills",
 * Certifications, Languages sections). Nothing added beyond that evidence.
 */
export const skillGroups = [
  { title: "Data Engineering", items: ["SQL", "Python", "Pipelines"] },
  { title: "Data Management", items: ["MDM", "Data Quality", "Governance"] },
  {
    title: "Reporting & Analysis",
    items: ["Excel", "Interactive HTML reports", "Dashboards"],
  },
] as const;

export const certifications = [
  "Data Wrangling Python",
  "Python Fundamental for Data Science",
  "AI for Work & Career Readiness with Google AI Products — Certificate of Accomplishment",
  "Mini Bootcamp DQLab × UMN “Kampus Merdeka”",
] as const;

export const languages = [
  "Indonesian — Native or bilingual",
  "English — Professional working",
] as const;
