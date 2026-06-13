# Authoritative Project Context & State: DZ Insights

This file serves as the authoritative source of truth for the codebase architecture, design system, file structures, and historical migrations of the `dz-news` (DZ Insights) and `DZ-Analytica` projects.

---

## 1. Project Architecture

The application is split into two interconnected layers:

1. **Subdomain Application (`dz-news`)**:
   - Built on React 18, Vite, TypeScript, and TailwindCSS.
   - Served as a static site with Vercel serverless functions for backend operations.
   - Dynamically fetches news database resources from the main repository's public raw CDN.
2. **Main Repository Database (`DZ-Analytica`)**:
   - Contains the structured article content in [articles.json](file:///C:/Users/LENOVO/antigravity/DZ-Analytica/src/data/articles.json).
   - Serves as the raw CDN back-end for the news feed.

---

## 2. File Locations & Structure

### Subdomain Portal (`dz-news`)
* **Main App Logic**: [App.tsx](file:///C:/Users/LENOVO/.gemini/antigravity/scratch/dz-news/src/App.tsx) — Handles views (`feed`, `world-cup`, `admin`), language switching (`ar`, `en`, `fr`), and full-page takeover rendering.
* **World Cup Dashboard Component**: [WorldCupReport.tsx](file:///C:/Users/LENOVO/.gemini/antigravity/scratch/dz-news/src/components/WorldCupReport.tsx) — Multi-tab, highly styled simulation interface utilizing Barlow Condensed typography.
* **Serverless Authentication Endpoint**: [api/auth.js](file:///C:/Users/LENOVO/.gemini/antigravity/scratch/dz-news/api/auth.js) — Validates administrative authorization server-side.

### Content Repository (`DZ-Analytica`)
* **Database File**: [articles.json](file:///C:/Users/LENOVO/antigravity/DZ-Analytica/src/data/articles.json) — Multi-language (`ar`, `en`, `fr`) records containing slugs, titles, excerpts, body content (HTML strings), and keywords.

---

## 3. Important Design Decisions

* **Full-Page Takeover Layout**: Clicking "Read Full Report" on any article does not trigger a modal popup. Instead, it conditionally replaces the main content view with a full-screen dedicated page layout.
* **Barlow Condensed + Inter Font Hierarchy**:
  - Headings and statistics use the impact-heavy `Barlow Condensed` Google font.
  - Body text and tables render in clean, legible `Inter` (sans-serif) or `Cairo` (for Arabic text).
* **Strict Server-Side Auth**: To prevent client-side reverse-engineering of the administrator credentials, password checking (`dzanalytica2026`) is handled server-side at `/api/auth` instead of hardcoding validation strings in the React bundle.

---

## 4. Coding Conventions

* **TypeScript**: Enforce strict type safety. Avoid unused imports (which break build pipelines on Vercel).
* **Dynamic Direction**: Maintain RTL alignment mapping for Arabic (`dir="rtl"`, `lang="ar"`) and LTR for English/French.
* **CSS classes**: Reuse CSS rules established in `WorldCupReport.tsx` (e.g., `.world-cup-report-page`, `.wcr-hero-headline`, `.wcr-gauge-card`) to ensure visual alignment.

---

## 5. Migration History (Recent Changes)

* **v1.0 (Modal Overlay)**: Selected articles opened in a framer-motion modal pop-up over the main feed.
* **v2.0 (Redesign takeover)**: Obsolete modal code removed. Articles are now rendered as full-screen takeovers with layout stylings matching the premium World Cup report dashboard (gauges, checklists, watermark heroes).
* **CMS Auth Security**: Moved administrative validation from client-side Javascript variables into a Vercel-compliant Node API router.
* **Professional Article Expansion**: Replaced short placeholder descriptions with long-form tactical analyses, specific expected goals (xG) projections, team lineups, and B2B economic market assessments.
