# Milestones — Vertical Slice / Kanban

Work in small increments. Each milestone should produce a testable result. Do not start the next milestone until the acceptance criteria pass. Greg should inspect the existing repository before making changes and report its findings first.

## M0 — Repository reconnaissance & content audit
**Goal:** Understand current repository, confirm stack/domain setup, identify content and risks.
**Deliverable:** audit report; no broad refactor.
**Acceptance:** list current files, proposed structure, dependencies, known uncertainties, project links requiring verification, and security concerns. No secrets copied into report.

## M1 — Scaffold & design tokens
**Goal:** Establish runnable Next.js foundation and visual baseline.
**Deliverable:** app boots locally; global typography/colors/layout tokens; responsive shell; navbar/footer.
**Acceptance:** clean install, dev server and production build work; no unnecessary dependencies; reduced-motion baseline.

## M2 — Landing-page vertical slice
**Goal:** Build one complete user journey on the homepage.
**Deliverable:** hero, positioning, CTA, selected projects, contact footer.
**Acceptance:** responsive, semantic, keyboard accessible, real content only, links verified.

## M3 — Project directory
**Goal:** Make projects discoverable and credible.
**Deliverable:** typed project data, category filters (only if useful), project cards, repo/demo links.
**Acceptance:** projects can be added by editing data files; cards do not invent descriptions; empty/missing links handled.

## M4 — About & contact
**Goal:** Explain professional profile and make contact easy.
**Deliverable:** About page/section, contact links, social links.
**Acceptance:** no private home address; professional links verified; clear CTA.

## M5 — Bilingual CV web document
**Goal:** English and Indonesian CV, one-page A4 where readable.
**Deliverable:** language toggle, semantic HTML CV, optional photo, print CSS and PDF-saving CTA.
**Acceptance:** selectable text; correct A4 margins; no navigation/buttons in print; both versions proofread; PDF extraction test.

## M6 — SEO, metadata & polish
**Goal:** Prepare for public launch.
**Deliverable:** metadata, Open Graph, favicon, 404, loading/error states if relevant.
**Acceptance:** title/description correct; preview image; no broken links; build passes.

## M7 — Deployment & domain
**Goal:** Launch on edgiaxel.tech.
**Deliverable:** GitHub repository connected to Vercel; Cloudflare DNS configured.
**Acceptance:** HTTPS works; canonical domain and www behavior decided; production deployment tested; no secrets in repo.

## M8 — Final QA & submission
**Goal:** Ensure application-ready.
**Deliverable:** live site + CV PDFs + concise verification checklist.
**Acceptance:** test desktop/mobile, links, CV print in Chromium, keyboard, reduced motion, and content accuracy.

## Later backlog (not MVP)
- Scroll storytelling/parallax/GSAP sequences
- Blog or research archive
- CMS/admin content editing
- GitHub API automation
- Automated tailored CV builder
- Analytics
- Product/service pages
- Backend/database
