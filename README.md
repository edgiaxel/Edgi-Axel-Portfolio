# Edgi Axel — Personal Portfolio

Professional portfolio for **Edgi Axel Limandibrata**.

**Current positioning:** Web Developer | AI/ML Enthusiast | Creative Technology  
**Domain:** https://edgiaxel.tech

## Objectives
- Present verified professional experience, projects, skills, education, and contact information.
- Provide a readable, ATS-friendly English and Indonesian CV.
- Keep content maintainable so future updates do not require redesigning the website.
- Launch a polished, responsive MVP first; advanced animation is a later milestone.

## Proposed stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion for React for restrained UI transitions
- Lucide React
- Vercel deployment
- Cloudflare DNS/domain management
- GitHub for source control and CI/deployment integration

## MVP routes
- `/` — landing page, introduction, selected projects, CTA
- `/projects` — categorized project listing
- `/about` — professional profile
- `/cv` — accessible web CV with English/Indonesian switch and PDF export/print
- `/contact` — contact and professional links

## Content source of truth
Keep structured profile/project data in typed files (e.g. `src/data/profile.ts`, `src/data/projects.ts`, `src/data/experience.ts`). Do not introduce a database or backend for the MVP.

## Development principles
- Mobile-first, accessible, semantic HTML.
- Respect `prefers-reduced-motion`.
- Keep animation purposeful and performant.
- Avoid exposing private contact/address information.
- Never commit API keys, tokens, passwords, or `.env` files.
- Every project entry must have verified claims, stack, links, and status.
