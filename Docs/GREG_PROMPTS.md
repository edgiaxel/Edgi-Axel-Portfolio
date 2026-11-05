# Greg Prompts — One per Milestone

Use these prompts sequentially in Antigravity. Ask Greg to work only on the named milestone and not silently advance.

$antislop $antislop-ui $antislop-code $antislop-human 

Read all .md in Docs/ and README.md.

## M0 — Audit
```text
Read PROJECT_BRIEF.md, DESIGN_SYSTEM.md, CV_MASTER.md, IMPLEMENTATION_PLAN.md, and MILESTONES.md.
Inspect the current repository before changing anything. Produce an audit: existing stack/files, reusable components, dependency health, risks, content gaps, links to verify, and recommended minimal path to M1. Do not edit files yet. Do not expose, copy, or print secrets. If you detect credentials in tracked files or Git history, identify the affected file/commit safely and recommend rotation/remediation; never reproduce the secret.
```

## M1 — Scaffold
```text
Implement M1 only, following PROJECT_BRIEF.md, DESIGN_SYSTEM.md, and IMPLEMENTATION_PLAN.md. Set up Next.js App Router with TypeScript and Tailwind using current compatible official setup. Build global design tokens, responsive shell, navbar, and footer. Keep animations minimal and respect prefers-reduced-motion. Do not implement future milestones. Report files changed, commands run, and build status.
```

## M2 — Landing vertical slice
```text
Implement M2 only. Build a complete responsive homepage: hero with the approved current positioning “Web Developer | AI/ML Enthusiast | Creative Technology”, clear Projects and CV CTAs, selected project previews sourced from typed data, and contact/footer. Do not invent metrics, project status, awards, or claims. Preserve the existing architecture. Run lint/build and report issues.
```

## M3 — Projects
```text
Implement M3 only. Create typed project data and reusable project cards/grid. Use only project facts and links provided/verified in CV_MASTER.md or explicitly supplied by me. Handle missing demo/repository links gracefully. Do not claim projects are production-ready if they are prototypes. Make adding a project a data-only change where practical. Test responsive layout and build.
```

## M4 — About & Contact
```text
Implement M4 only. Add an About page/section and Contact page/section using approved content. Keep Edgi Axel’s professional identity separate from Axel Zeed; do not cross-link, mention, or merge those identities. Do not display home address or personal phone. Verify all social URLs from the data source. Run build.
```

## M5 — Bilingual CV
```text
Implement M5 only. Create a semantic, selectable-text CV page with English and Indonesian variants using CV_MASTER.md as source. Use a language toggle and optional profile photo. Provide a “Save as PDF” action using browser print and CSS @media print for A4 portrait. In print, hide site navigation/buttons and preserve logical text order. Do not use canvas, screenshot, or image-based PDF. Keep text comfortably readable; if one page cannot fit without tiny type, tell me and propose a two-page version. Do not publish private address or phone. Test both languages in print preview and verify text can be selected/copied.
```

## M6 — SEO & polish
```text
Implement M6 only: page metadata, canonical URL for https://edgiaxel.tech, Open Graph/Twitter preview metadata, favicon, 404 and any necessary loading/error states. Avoid adding heavy libraries. Check titles/descriptions and build.
```

## M7 — Deploy
```text
Prepare M7. Inspect Vercel/GitHub setup and give me exact deployment and Cloudflare DNS steps. Do not alter DNS or domain settings without my explicit approval. Never ask me to paste transfer codes, passwords, API keys, or tokens into chat or commit them. Configure only non-secret project settings. Verify HTTPS and canonical redirects after I confirm changes.
```

## M8 — QA
```text
Perform M8 final QA. Test production build, mobile and desktop layouts, keyboard navigation, focus visibility, prefers-reduced-motion, all links, and both CV print variants. Inspect A4 output for clipping, readability, and selectable text. Review repository for accidental secrets in current tracked files; do not print secrets. Provide a concise defects list and fix only defects within MVP scope.
```
