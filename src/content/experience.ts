/**
 * Experience timeline — condensed from the user's LinkedIn export.
 * Full task detail stays in the CV; the site surfaces editorial lines only
 * (PRD 3: clarity and evidence over exhaustive task lists).
 */
export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Engineer Intern",
    org: "ALVA Digital Network",
    period: "Oct 2026 – Present",
    location: "South Jakarta, Indonesia",
    summary:
      "Maintaining the data foundations behind campaign operations — collection, validation, and pipelines.",
    highlights: [
      "Collects, cleans, and validates data from internal and external sources to maintain accuracy and consistency.",
      "Maintains KOL and influencer databases supporting campaign operations.",
      "Extracts and transforms data with SQL, Python, and spreadsheets for campaign analysis and internal reporting.",
      "Supports database and pipeline monitoring, data documentation, and troubleshooting.",
    ],
    tags: ["SQL", "Python", "Data Quality", "Pipelines"],
  },
  {
    role: "Data Analyst Intern",
    org: "ALVA Digital Network",
    period: "Jul 2026 – Oct 2026",
    location: "South Jakarta, Indonesia",
    summary: "From raw data to dashboards and accessible web reporting.",
    highlights: [
      "Built and maintained performance dashboards in Excel and Lark tracking key metrics.",
      "Developed interactive HTML-based reports deployed through Vercel.",
      "Cleaned and analyzed raw data to surface trends and performance gaps.",
    ],
    tags: ["Excel", "Lark", "HTML Reports", "Vercel"],
  },
  {
    role: "Data Analyst Intern",
    org: "CIMB Niaga",
    period: "Aug 2022 – Dec 2022",
    location: "South Jakarta, Indonesia",
    summary:
      "Part of the bank-wide Master Data Management (MDM) project (Phase 1).",
    highlights: [
      "Supported MDM analysis in the customer and lending data domains.",
      "Contributed to data cleansing, matching, and merging across core and source systems.",
      "Helped improve customer-data completeness and accuracy for downstream banking use cases.",
    ],
    tags: ["MDM", "Banking", "Data Quality"],
  },
  {
    role: "Project-Based Intern — Data Science Virtual Internship",
    org: "ID/X Partners",
    period: "Jun 2022 – Jul 2022",
    location: "Jakarta, Indonesia",
    summary: "End-to-end credit-risk model on company-provided loan data.",
    highlights: [
      "Built a credit-risk prediction model covering accepted and rejected applications.",
      "Handled preprocessing, feature engineering, and model development for risk assessment.",
      "Delivered the final project as a complete workflow, from data preparation to evaluation.",
    ],
    tags: ["Machine Learning", "Python", "Credit Risk"],
  },
  {
    role: "AI Mastery Program",
    org: "Orbit Future Academy",
    period: "Feb 2022 – Jul 2022",
    location: "South Jakarta, Indonesia",
    highlights: [
      "Completed the program's assignments and built an application-based final project.",
    ],
    tags: ["AI Fundamentals"],
  },
  {
    role: "Assistant Laboratory Coordinator / Study Group Member",
    org: "Telkom University Artificial Intelligence Laboratory",
    period: "Feb 2020 – Jan 2022",
    location: "Bandung, Indonesia",
    summary: "Two years in the AI laboratory: one as member, one leading.",
    highlights: [
      "Led the study-group program as coordinator: structured curriculum, materials, and lectures (Feb 2021 – Jan 2022).",
      "Studied and implemented AI, machine learning, and deep learning fundamentals as a member (Feb 2020 – Jan 2021).",
    ],
    tags: ["AI", "ML", "Teaching"],
  },
];
