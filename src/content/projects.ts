/**
 * Project case studies — PRD 5 and 6. Order per case study: hero, visuals,
 * challenge, solution, key capabilities, impact, contribution, tech details.
 * Accuracy rules: estimates are labelled as estimates; unverified metrics stay
 * out; private repos are never linked.
 */
export type Capability = { title: string; detail: string };

// width/height = intrinsic pixel size of the image file (keeps aspect ratio correct).
export type Visual = { src: string; alt: string; width: number; height: number; caption?: string };

export type Project = {
  slug: string;
  title: string;
  summary: string; // one-sentence value proposition for the listing card
  role: string;
  cardLabel: string; // short "type · role" eyebrow for cards; full `role` shows on the case study
  tags: string[];
  // First visual is the card thumbnail; two or more show as slides on the case study.
  visuals?: Visual[];
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
      "A hosted, team-shared app that queues Instagram and TikTok comment scraping and thumbnail downloads on a server worker — compressing a manual campaign workflow by an estimated 83%.",
    role: "Sole Developer & Project Creator — internal tool, built end-to-end",
    cardLabel: "Internal tool · Sole developer",
    tags: ["Automation", "Web App", "Queues"],
    visuals: [
      {
        src: "/images/unified-scraper.webp",
        alt: "Unified Scraper web application after a completed run: campaign setup, post URLs, selected comment and thumbnail tasks, file output, and a live process log of comments collected per post (employer branding and client data blurred).",
        width: 1200,
        height: 1810,
        caption: "A finished run: campaign setup, task selection, packaged results, and the live process log. Employer branding and client/campaign data blurred.",
      },
      {
        src: "/images/unified-scraper-history.webp",
        alt: "Unified Scraper run history: a searchable, status-filtered list of past comment and thumbnail runs, each with link count, API requests, timestamp, a Succeeded, Partial, Failed, or Cancelled status, and Download and delete buttons (employer branding and campaign names blurred).",
        width: 1600,
        height: 910,
        caption: "Run history: every comment and thumbnail run with its status, API use, and a re-download button. Employer branding and campaign names blurred.",
      },
      {
        src: "/images/unified-scraper-admin.webp",
        alt: "Unified Scraper admin page: worker health with last check-in, API usage against the RapidAPI billing-period plan and the app's daily Instagram and TikTok limits, a filterable queue-and-runs table with status, timing, and API counts, and an accounts table with admin and turn-off controls (employer branding, campaign names, and people's names blurred).",
        width: 1600,
        height: 2735,
        caption: "The admin page: worker health, API usage against the plan and daily limits, the run queue, and account controls. Employer branding, campaign names, and people's names blurred.",
      },
    ],
    challenge:
      "Social-media campaign runs used to be a patchwork: separate scripts for comments and thumbnails, URLs pasted ad hoc, results scattered across folders, and long manual supervision. A single campaign could take around an hour of hands-on work.",
    solution:
      "A hosted internal web app where a campaign becomes a task tab: validated Instagram/TikTok links join a shared server queue as separate comment and thumbnail jobs, picked up one at a time by an isolated Docker worker. Progress and logs update live; finished runs download as one ZIP with an Excel comments workbook and named thumbnails, kept privately for 30 days. Paid API calls are budgeted against daily per-platform caps, and an admin page watches worker health, usage, the queue, and accounts. A guided walkthrough and a tool switcher tie it to the team's other tools, and a nightly job clears expired runs and files.",
    capabilities: [
      {
        title: "Shared queue & isolated worker",
        detail:
          "Server-saved task tabs of up to 100 cleaned, de-duplicated links; each task runs as its own job on a pull-only Docker worker, with retries, Stop run, and live progress and logs.",
      },
      {
        title: "API budget & failure triage",
        detail:
          "Each run's paid requests are checked against daily per-platform caps before it starts; failed links are grouped by reason and can be re-queued in one click.",
      },
      {
        title: "Packaged results & history",
        detail:
          "One ZIP per run with a comments workbook and position-named thumbnails, plus a searchable History of every run with re-download for 30 days.",
      },
      {
        title: "Admin page & team sign-in",
        detail:
          "Worker health, API usage, everyone's runs, and account controls for admins; Lark sign-in for the team, row-level security, signed download links, and server-only secrets.",
      },
    ],
    stats: [
      { value: "60 → 10 min", label: "per campaign run", note: "Estimate" },
      { value: "Whole team", label: "can sign in", note: "Via Lark sign-in" },
    ],
    impact: [
      {
        text: "Estimated reduction of a campaign run from roughly 60 minutes to about 10 minutes (≈83% less elapsed time).",
        caveat: "Owner estimate from comparable workflows — not a formal benchmark.",
      },
      {
        text: "Open to the whole team: anyone in the department can sign in with their Lark account, and their first sign-in creates their account — no setup on their computer.",
        caveat: "Describes who has access, not how many people use it.",
      },
    ],
    contribution:
      "Designed and built the entire application independently: the interface, the scraping adapters, the queue and worker with live monitoring, the API budgeting, the export pipeline, the admin page, and the sign-in and security hardening.",
    tech: ["Python", "JavaScript", "Vercel Functions", "Supabase", "Docker", "Lark sign-in", "RapidAPI", "TikWM API"],
    repositoryNote: "Internal company application. The repository is private — source code, credentials, and campaign data are not published.",
  },
  {
    slug: "yellow-cart-preview",
    title: "Yellow Cart Preview",
    summary:
      "An internal web app that plays TikTok Shop (yellow-cart) videos on desktop — with details, MP4 download, and the post's comments — where TikTok normally shows them only in its mobile app.",
    role: "Sole Developer & Project Creator — internal tool, built end-to-end",
    cardLabel: "Internal tool · Sole developer",
    tags: ["Web App", "TikTok Shop", "Internal Tool"],
    visuals: [
      {
        src: "/images/yellow-cart-preview.webp",
        alt: "Yellow Cart Preview web application with a box for pasting TikTok links and a list of ten links, each marked with a yellow-cart badge and Preview, open, copy, and remove buttons (employer branding, links, and creator handles blurred).",
        width: 1200,
        height: 1260,
        caption: "The link list, with TikTok Shop videos marked by the yellow-cart badge. Employer branding, links, and creator handles blurred.",
      },
      {
        src: "/images/yellow-cart-preview-details.webp",
        alt: "Yellow Cart Preview player popup on the Details tab: a 9:16 video player beside the yellow-cart badge, duration, post date, view/like/comment/share/save tiles, an HD/SD switch, and Download MP4, Download cover, and Open on TikTok buttons (video, creator, caption, and figures blurred).",
        width: 1600,
        height: 917,
        caption: "The player's Details tab: badges, engagement tiles, quality switch, and downloads. Video, creator, caption, and figures blurred.",
      },
      {
        src: "/images/yellow-cart-preview-comments.webp",
        alt: "Yellow Cart Preview player popup on the Comments tab: a note about TikWM limits, the First 14 days only switch, a live-check status line, and a list of comments with dates and like counts (video, creator, and commenter names blurred).",
        width: 1600,
        height: 917,
        caption: "The player's Comments tab: live checking, the first-14-days switch, and comment threads. Video, creator, and commenter names blurred.",
      },
    ],
    challenge:
      "TikTok hides yellow-cart (TikTok Shop) videos from its desktop site and embeds, so checking campaign content meant reaching for a phone — no easy way to watch, download, or read comments from a desktop workflow.",
    solution:
      "A signed-in internal web app: paste TikTok links, and each one previews in a 9:16 player with its details, stats, MP4 and cover downloads, and the post's comments. The browser reads video data from TikWM, a third-party service built on TikTok's app feed, so Shop videos play. Videos are never stored; each person's link list is saved to their account and cleared after 30 days.",
    capabilities: [
      {
        title: "Saved, checked link list",
        detail:
          "Links are checked as you type, normalized, and de-duplicated; the list follows you to any browser you sign in to, and links are deleted 30 days after they're added.",
      },
      {
        title: "Desktop player & downloads",
        detail:
          "HD/SD player with automatic fallback, creator and engagement details, a yellow-cart badge, and MP4/cover downloads with consistent file names.",
      },
      {
        title: "Live comments & 14-day view",
        detail:
          "Paged comments and reply threads, refreshed every 30 seconds while open, with a switch to show only comments from a video's first 14 days.",
      },
      {
        title: "Team-only sign-in & hardening",
        detail:
          "Lark sign-in limited to the team, sharing accounts and a tool switcher with the Unified Scraper and Insight Capture; a guided walkthrough, signed session cookies, a strict Content-Security-Policy, and server-only secrets.",
      },
    ],
    impact: [
      {
        text: "Lets the team review TikTok Shop videos and their comments from a desktop browser, without switching to the mobile app.",
      },
    ],
    contribution:
      "Designed and built the whole tool independently: the interface, the TikWM client with rate limiting and caching, the comments views, the Lark sign-in reused from the Unified Scraper, and the offline test suite.",
    tech: ["JavaScript", "Vercel Functions", "Supabase", "Lark sign-in", "TikWM API"],
    repositoryNote: "Internal company application. The repository is private — source code, credentials, and team data are not published.",
  },
  {
    slug: "insight-capture",
    title: "Insight Capture",
    summary:
      "An internal web app that reads KOL insight screen recordings and screenshots into numbers with text recognition, then copies the Lark PM metrics straight into project tracking and reports.",
    role: "Sole Developer & Project Creator — internal tool, built end-to-end",
    cardLabel: "Internal tool · Sole developer",
    tags: ["Web App", "OCR", "Internal Tool"],
    visuals: [
      {
        src: "/images/insight-capture.webp",
        alt: "Insight Capture web application: a box for Lark and Google Drive links, a drop zone for videos and screenshots, and a list of four read insight videos, each with post and screenshot counts, its source, and Results, copy, open, log, and remove buttons, with one item's process log open (employer branding, KOL names, and numbers blurred).",
        width: 1600,
        height: 1385,
        caption: "Adding insights and reading them in turn, with one item's process log open. Employer branding, KOL names, and numbers blurred.",
      },
      {
        src: "/images/insight-capture-results.webp",
        alt: "Insight Capture results pop-up for a recording with four stories: story tabs, the source screenshot with thumbnails, Copy PM metrics, Copy all numbers, and Download numbers buttons, and tiles for Reach, Impressions, Likes, Comments, Saves, Shares, and additional numbers (KOL content, names, and every value blurred).",
        width: 1600,
        height: 805,
        caption: "Results for a recording with four stories: each number beside the screenshot it came from, ready to copy. KOL content, names, and values blurred.",
      },
    ],
    challenge:
      "KOL campaign reporting depends on insight screens that creators send as screen recordings and screenshots — Instagram Stories, Reels, and TikTok, in English or Indonesian. Every reach, impression, like, comment, save, and share had to be read off those screens and typed into Lark PM and decks by hand.",
    solution:
      "A signed-in internal web app: add Lark or Google Drive links (single files, folders, or Drive searches) or drop and paste files, and each item is read in turn. A Python reader picks stable frames from each recording, runs text recognition, pairs every label with its number, and splits a recording that moves between several stories into one result per post. Results show each number beside the screenshot it came from, ready to copy in a layout that pastes cleanly into Lark PM, docs, and slides.",
    capabilities: [
      {
        title: "Recordings & screenshots to numbers",
        detail:
          "Frame selection, OpenCV and RapidOCR text recognition, and label–number pairing in English and Indonesian; no AI service or API key involved.",
      },
      {
        title: "Lark & Google Drive sources",
        detail:
          "File, folder, and Drive search links, plus drag, drop, and paste; Lark files open with each person's own access, and Drive through a dedicated script.",
      },
      {
        title: "Checkable, copy-ready results",
        detail:
          "The six Lark PM metrics first, every other number on demand, low-confidence flags, a per-item process log, and Excel/CSV and proof-screenshot downloads.",
      },
      {
        title: "Saved lists, team sign-in & hardening",
        detail:
          "Lists, numbers, and screenshots saved privately per account for 30 days, with a nightly clean-up; Lark sign-in shared with the Unified Scraper and Yellow Cart Preview, and encrypted, server-only Lark tokens.",
      },
    ],
    impact: [
      {
        text: "Replaces reading insight screens and retyping each metric with a paste-ready copy, with every number traceable to the screenshot it came from.",
      },
    ],
    contribution:
      "Designed and built the whole tool independently: the frame-selection and text-recognition reader, the number parsing for English and Indonesian screens, the Lark and Google Drive integrations, the results and copy formats, and the sign-in, storage, and clean-up.",
    tech: ["Python", "OpenCV", "RapidOCR", "JavaScript", "Vercel Functions", "Supabase", "Google Apps Script", "Lark sign-in"],
    repositoryNote: "Internal company application. The repository is private — source code, credentials, and client data are not published.",
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
