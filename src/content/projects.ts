/**
 * Project case studies — PRD 5 and 6. Order per case study: hero, visual,
 * challenge, solution, key capabilities, impact, contribution, tech details.
 * Accuracy rules: estimates are labelled as estimates; unverified metrics stay
 * out; private repos are never linked.
 */
export type Capability = { title: string; detail: string };

export type Project = {
  slug: string;
  title: string;
  summary: string; // one-sentence value proposition for the listing card
  role: string;
  cardLabel: string; // short "type · role" eyebrow for cards; full `role` shows on the case study
  tags: string[];
  // width/height = intrinsic pixel size of the image file (keeps aspect ratio correct).
  visual?: { src: string; alt: string; width: number; height: number; caption?: string };
  challenge: string;
  solution: string;
  capabilities: Capability[];
  // Headline figures shown large in the Impact section; each must restate an `impact` item.
  stats?: { value: string; label: string; note?: string }[];
  impact: { text: string; caveat?: string }[]; // caveat = labelled estimate / non-benchmark note
  contribution: string;
  authors?: string;
  tech: string[];
  link?: { label: string; href: string };
  repositoryNote?: string;
};

export const projects: Project[] = [
  {
    slug: "unified-scraper",
    title: "Unified Social Media Scraper",
    summary:
      "A single queue-driven app for Instagram and TikTok comment extraction and thumbnail downloads — compressing a manual campaign workflow by an estimated 83%.",
    role: "Sole Developer & Project Creator — internal tool, built end-to-end",
    cardLabel: "Internal tool · Sole developer",
    tags: ["Automation", "Web App", "Queues"],
    visual: {
      src: "/images/unified-scraper.webp",
      alt: "Unified Scraper web application showing campaign setup, post-URL validation, run configuration, and a live activity monitor (employer branding redacted).",
      width: 1022,
      height: 1055,
      caption: "Campaign setup, URL validation, and the live process monitor. Employer branding redacted; no client data shown.",
    },
    challenge:
      "Social-media campaign runs used to be a patchwork: separate scripts for comments and thumbnails, URLs pasted ad hoc, results scattered across folders, and long manual supervision. A single campaign could take around an hour of hands-on work.",
    solution:
      "A centralized internal web application where a campaign becomes a task: validated Instagram/TikTok URLs go into a server-side queue with configurable comment and thumbnail jobs. Progress and logs stream live; finished runs export as Excel/JPG inside a single ZIP, with task history and API-usage monitoring kept in the app.",
    capabilities: [
      {
        title: "Campaign-based task setup",
        detail:
          "Brand, campaign, period, and phase captured per run; up to 100 Instagram or TikTok URLs validated before a job starts.",
      },
      {
        title: "Server-side queue execution",
        detail:
          "Selected tasks join a server queue independently; progress, process logs, and failures are observable in real time.",
      },
      {
        title: "Packaged outputs & history",
        detail:
          "Each run ships as a ZIP with per-task Excel (comments) and JPG (thumbnails) outputs, plus stored run history.",
      },
      {
        title: "Controlled access & monitoring",
        detail:
          "Authentication with server-side credential handling, and API-usage monitoring per platform.",
      },
    ],
    stats: [
      { value: "60 → 10 min", label: "per campaign run", note: "Estimate" },
      { value: "3", label: "users so far", note: "Wider access intended" },
    ],
    impact: [
      {
        text: "Estimated reduction of a campaign run from roughly 60 minutes to about 10 minutes (≈83% less elapsed time).",
        caveat: "Owner estimate from comparable workflows — not a formal benchmark.",
      },
      {
        text: "Three users have adopted it so far, with wider departmental access intended as the tool matures.",
        caveat: "Adoption is growth-stage, not department-wide — reported as such.",
      },
    ],
    contribution:
      "Designed and built the entire application independently: the interface, the scraping services, the queue architecture with live monitoring, the export pipeline, and the authentication/credential handling.",
    tech: ["Web application", "Vercel", "Supabase", "Docker", "Server-side queues"],
    repositoryNote: "Internal company application. The repository is private — source code, credentials, and campaign data are not published.",
  },
  {
    slug: "course-recommender",
    title: "Personalized Online Course Recommender",
    summary:
      "Research on personalizing online-course recommendations with truncated SVD and clustering, published at IEEE ICITISEE 2025.",
    role: "First author — research & recommendation modeling",
    cardLabel: "IEEE paper · First author",
    tags: ["Research", "Recommender Systems", "Clustering"],
    challenge:
      "Online course platforms treat every learner the same; coarse popularity-based suggestions miss individual skill needs, so capable learners plateau and material about the right topic never reaches them.",
    solution:
      "A recommender built on learner–course interaction data: TF-IDF features compressed with Truncated Singular Value Decomposition, learner segments discovered by clustering (with several clustering approaches compared), and cluster-conditioned collaborative filtering to personalize suggestions — evaluated with RMSE and MAE.",
    capabilities: [
      {
        title: "Latent-factor text modeling",
        detail: "TF-IDF features reduced by Truncated SVD to capture course–learner structure.",
      },
      {
        title: "Learner segmentation",
        detail: "K-Means, DBSCAN, Gaussian Mixture, and Agglomerative clustering compared for grouping.",
      },
      {
        title: "Cluster-conditioned filtering",
        detail: "Collaborative filtering within clusters to rank courses per learner profile.",
      },
      {
        title: "Error-based evaluation",
        detail: "RMSE and MAE used to compare configuration performance.",
      },
    ],
    impact: [
      {
        text: "Published in the 2025 9th International Conference on Information Technology, Information Systems and Electrical Engineering (ICITISEE), pp. 181–186.",
      },
    ],
    contribution:
      "Led the research and publication as first author: the recommendation approaches, the learner-segmentation experiments, and the evaluation design behind the clustering comparison.",
    authors:
      "Haydar Rizaldy P. P., Aditya Firman Ihsan, Rosa Reska Riskiana, Z. K. A. Baizal — School of Computing, Telkom University, Bandung, Indonesia",
    tech: ["Data Science", "Recommender Systems", "Clustering", "Collaborative Filtering"],
    link: {
      label: "DOI 10.1109/ICITISEE68184.2025.11355135",
      href: "https://doi.org/10.1109/ICITISEE68184.2025.11355135",
    },
  },
  {
    slug: "credit-risk-prediction",
    title: "Credit Risk Prediction",
    summary:
      "End-to-end credit-risk model from preprocessing to evaluation, delivered as the final project of a data-science virtual internship at ID/X Partners.",
    role: "Data Science Virtual Intern — ID/X Partners",
    cardLabel: "Internship project",
    tags: ["Machine Learning", "Classification"],
    challenge:
      "Lenders need to judge application risk on the full picture of behavior and capacity — income, credit history, and loan purpose — which manual screening handles slowly and inconsistently.",
    solution:
      "A supervised classification workflow on company-provided loan data covering both accepted and rejected applications: structured preprocessing and feature engineering feeding a model that predicts application risk, evaluated end-to-end from raw data to performance measurement.",
    capabilities: [
      {
        title: "Data preprocessing",
        detail: "Cleaning and preparing raw loan-application data for modeling.",
      },
      {
        title: "Feature engineering",
        detail: "Derived predictive features from applicant and loan attributes.",
      },
      {
        title: "Model development",
        detail: "Machine learning classification to separate risk levels.",
      },
      {
        title: "End-to-end delivery",
        detail: "Complete workflow from data preparation to model evaluation.",
      },
    ],
    impact: [
      {
        text: "Delivered as the internship's final project, demonstrating the full data-science lifecycle on real lending data.",
      },
    ],
    contribution:
      "Independently developed the end-to-end solution during the internship — no published benchmark metrics exist, and none are claimed here.",
    tech: ["Python", "Machine Learning", "Classification", "Feature Engineering"],
    link: {
      label: "View repository on GitHub",
      href: "https://github.com/HaydarRizaldy/Credit-Risk-Prediction-and-Analysis",
    },
  },
];
