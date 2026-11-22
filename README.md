<div align="center">

<img src="public/favicon-192x192.png" alt="HR monogram" width="72" height="72" />

# Haydar Rizaldy — Portfolio

**Data & Technology Professional** — analytics, data engineering, and applied automation.

[**Live site**](https://haydarrizaldy.vercel.app) ·
[LinkedIn](https://www.linkedin.com/in/haydar-rizaldy/) ·
[GitHub](https://github.com/HaydarRizaldy) ·
[Email](mailto:haydarrizaldyputera@gmail.com)

</div>

[![Homepage of haydarrizaldy.vercel.app](docs/screenshot.png)](https://haydarrizaldy.vercel.app)

## About

Source code for my personal portfolio at **[haydarrizaldy.vercel.app](https://haydarrizaldy.vercel.app)**.
I'm a data engineer focused on analytics, data engineering, and applied automation — currently an intern at
ALVA Digital Network. Previously I supported bank-wide master data management at CIMB Niaga and shipped an
interactive reporting stack on Vercel.

## Pages

| Page | What's there |
|---|---|
| [Home](https://haydarrizaldy.vercel.app) | Introduction, at-a-glance highlights, featured projects, experience, contact |
| [About](https://haydarrizaldy.vercel.app/about) | Experience timeline, education, skills & certifications |
| [Projects](https://haydarrizaldy.vercel.app/projects) | Curated work with a case study for each project |

## Featured projects

| Project | Summary | Links |
|---|---|---|
| **Unified Social Media Scraper** | Hosted, team-shared app that queues Instagram & TikTok comment scraping and thumbnail downloads on a server worker — an estimated 83% less time per campaign run (estimate, not a benchmark). | [Case study](https://haydarrizaldy.vercel.app/projects/unified-scraper) · repository is private |
| **Yellow Cart Preview** | Internal web app that plays TikTok Shop (yellow-cart) videos on desktop, with details, MP4 download, and the post's comments. | [Case study](https://haydarrizaldy.vercel.app/projects/yellow-cart-preview) · repository is private |
| **Insight Capture** | Internal web app that reads KOL insight recordings and screenshots into numbers with text recognition and copies the Lark PM metrics. | [Case study](https://haydarrizaldy.vercel.app/projects/insight-capture) · repository is private |
| **Personalized Online Course Recommender** | Research on course recommendation with truncated SVD and clustering — first-author paper at IEEE ICITISEE 2025. | [Case study](https://haydarrizaldy.vercel.app/projects/course-recommender) · [DOI](https://doi.org/10.1109/ICITISEE68184.2025.11355135) |
| **Credit Risk Prediction** | End-to-end credit-risk model, from preprocessing to evaluation — final project of the ID/X Partners data-science virtual internship. | [Case study](https://haydarrizaldy.vercel.app/projects/credit-risk-prediction) · [Repository](https://github.com/HaydarRizaldy/Credit-Risk-Prediction-and-Analysis) |

## Built with

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with light/dark design tokens
- `next/font` — Inter, Space Grotesk, Fira Code
- Deployed on [Vercel](https://vercel.com)

## Features

- Light and dark themes that follow the system setting, with a manual toggle
- Typewriter greeting that respects reduced-motion preferences
- Reusable case-study template (challenge → solution → capabilities → impact → contribution)
- Screenshot carousels on case studies (buttons, dots, arrow keys, swipe); internal-tool screenshots are redacted
- SEO metadata, generated Open Graph image, sitemap, and robots.txt
- Accessible navigation: skip link, visible focus states, semantic landmarks

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Site copy lives in [`src/content/`](src/content) (profile, experience, education, skills, projects), so most text
changes don't touch components. Pushes to `main` deploy to production automatically on Vercel.

---

<div align="center">

© Haydar Rizaldy · <a href="https://haydarrizaldy.vercel.app">haydarrizaldy.vercel.app</a>

</div>
