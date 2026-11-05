# AGENTS.md — Edgi Axel Portfolio

This file defines the working rules for AI coding agents (including Greg) contributing to this repository.

## 1. Project Identity

- **Project:** Edgi Axel's personal professional portfolio and website
- **Primary identity:** Edgi Axel
- **Domain:** `edgiaxel.tech`
- **Repository:** `edgiaxel-portfolio` (or the existing repository name until migration is confirmed)
- **Positioning:** Web Developer | AI/ML Enthusiast | Creative Technology
- This is a personal portfolio, not a company website.

### Identity boundary

Keep **Edgi Axel's professional identity separate from Axel Zeed's VTuber identity**.
- Do not mention, link, import, or merge the VTuber identity/branding into this website unless Axel explicitly requests it.
- Creative and digital-art experience may be included when relevant to professional positioning, but do not use VTuber lore, character branding, or VTuber social accounts as professional identity assets.
- **Zenity** is a possible future umbrella for creative/experimental projects. Do not present it as a registered company, agency, or official organization unless Axel confirms that status.

## 2. Current Goals and Scope

Build a modern, responsive, accessible, professional portfolio that presents Axel's skills, projects, education, experience, and contact information.

### MVP routes

- `/` — Landing page / introduction
- `/projects` — Project directory and project details as appropriate
- `/about` — Background, skills, experience, education, and professional context
- `/cv` — English and Indonesian CV, with print-friendly A4 output
- `/contact` — Professional contact links and contact information

### MVP priorities

1. Establish a clean, maintainable application foundation.
2. Make content accurate and easy to update.
3. Deliver responsive layouts and strong accessibility.
4. Provide a readable, ATS-friendly, selectable-text CV that can be printed or saved as PDF.
5. Deploy reliably to Vercel and connect `edgiaxel.tech` only after reviewing configuration.

### Explicitly out of scope unless requested

- Authentication, user accounts, database, CMS, or backend API
- AI chatbot or AI-powered personalization
- Automated CV tailoring/generation
- GitHub API integrations or live activity feeds
- Complex 3D scenes, heavy particle effects, or animation on every element
- Blog/research publishing system
- E-commerce, payments, or business operations

Keep a future-work list rather than silently expanding MVP scope.

## 3. Technology Decisions

Use the existing project state as the source of truth. If starting or migrating the application, the preferred stack is:

- **Next.js** — App Router
- **TypeScript** — strict typing where practical
- **Tailwind CSS** — styling and responsive utilities
- **Motion for React** — purposeful UI animation
- **Lucide React** — interface icons
- **Vercel** — deployment and hosting
- **Cloudflare DNS** — DNS management for the custom domain
- **Git + GitHub** — version control

Do not introduce additional libraries without a concrete need. Before adding a dependency, check whether the current stack already supports the requirement.

For advanced scroll choreography, consider GSAP + ScrollTrigger later; do not add it to MVP by default.

## 4. Design Direction

The visual direction is **a futuristic digital archive / experimental interface**, while remaining professional and readable.

### Design principles

- Dark graphite/navy foundation with restrained cyan/electric-blue accents and optional violet.
- Clear typography hierarchy; use monospace selectively for labels, metadata, and technical details.
- Layered panels and depth are welcome when they improve information structure.
- Animation should communicate hierarchy, transitions, or interaction—not merely decorate.
- Maintain strong contrast and legibility across desktop, tablet, and mobile.
- Avoid excessive glow, noisy backgrounds, tiny text, and effects that compete with content.
- Keep layouts intentional and distinctive without sacrificing usability.

### Motion and accessibility

- Respect `prefers-reduced-motion`.
- Provide visible keyboard focus.
- Ensure interactive elements are keyboard operable.
- Do not rely on animation to reveal essential information.
- Avoid scroll hijacking, forced delays, or motion that makes navigation harder.
- Prefer lightweight CSS or Motion for React; optimize before using complex animation systems.

## 5. Content Accuracy and Claims

The portfolio and CV represent Axel professionally. Accuracy takes precedence over impressive wording.

- Never invent employers, job titles, dates, project outcomes, metrics, users, awards, credentials, or responsibilities.
- Do not claim professional mastery of a technology merely because Axel has studied or experimented with it.
- Distinguish **used**, **currently learning**, and **interested in / exploring** when needed.
- Verify project stacks, status, role, and contribution before publishing.
- Do not publish draft, speculative, confidential, or sensitive project details without approval.
- Treat the CV master and project-planning documents as working sources; flag conflicting or unverified details for Axel rather than resolving them by guessing.
- Current GPA has been stated as **3.94 / 4.00**; confirm against an official record before final publication.
- Expected graduation is currently understood as **2027**; verify the official wording and date.
- Use English as the default site language unless a route or control explicitly selects Indonesian.

## 6. CV Requirements

The `/cv` page must support English and Indonesian versions.

- Use semantic HTML and selectable text; **never render the CV as a screenshot or image**.
- Keep the layout ATS-friendly: clear section headings, simple reading order, and conventional text structure.
- Print output should target **A4** and use `@media print`.
- Hide navigation, language controls, buttons, and non-CV UI in print.
- Preserve readable font sizes, margins, spacing, and contrast in print.
- Do not shrink text excessively just to force one page. Prefer a readable two-page CV over a cramped one-page CV if content requires it.
- A profile photo is optional; do not make the layout depend on it.
- Provide a clear browser print / “Save as PDF” path. Do not claim a PDF was generated server-side unless that feature actually exists.
- Keep English and Indonesian content structurally aligned and maintainable.

## 7. Code Quality and Architecture

- Prefer small, focused, reusable components over giant page components.
- Keep content/data separate from presentation where practical (for example, project metadata in typed data structures).
- Use descriptive filenames, component names, and variables.
- Use TypeScript types for project, experience, education, and CV data.
- Avoid duplicated content when a shared component or data source is appropriate.
- Do not introduce abstractions prematurely; optimize for clarity and maintainability.
- Follow existing repository conventions unless there is a clear reason to change them.
- Do not refactor unrelated code while implementing a milestone.
- Keep changes scoped to the current task and milestone.
- Add comments only when they explain non-obvious reasoning, constraints, or behavior.

## 8. Agent Workflow

Before making changes:

1. Inspect the repository, current branch, package scripts, dependencies, and existing implementation.
2. Read `README.md`, `PROJECT_BRIEF.md`, `DESIGN_SYSTEM.md`, `IMPLEMENTATION_PLAN.md`, `MILESTONES.md`, and relevant CV/content documents if present.
3. Identify the current milestone and its acceptance criteria.
4. Report material ambiguity, missing content, risks, or conflicting instructions before proceeding.

While implementing:

- Work on **one milestone at a time**.
- Make the smallest coherent change that satisfies the task.
- Do not skip ahead or implement future backlog items without approval.
- Do not overwrite user work or delete assets/configuration without explicit permission.
- Do not change DNS, domain settings, billing, production environment variables, or deployment configuration in ways that have external consequences without Axel's approval.
- If a command is destructive or irreversible, explain it and ask before executing.

After implementing:

1. Run relevant lint, type-check, build, and test commands available in the repository.
2. Fix issues introduced by the change.
3. Summarize files changed, implementation decisions, checks performed, and any remaining risks or manual steps.
4. Do not claim checks passed unless they were actually run.

## 9. Security and Privacy

Security is mandatory, including for a personal portfolio.

- **Never hardcode API keys, access tokens, passwords, private keys, or other secrets.**
- Never print, echo, expose, or copy secrets into logs, screenshots, documentation, issues, commits, or chat.
- Use environment variables for secrets and server-only configuration.
- Keep `.env*` files out of Git; allow a safe `.env.example` containing placeholder names only.
- Do not expose secret-bearing variables through `NEXT_PUBLIC_*` or client-side code.
- Before committing, inspect staged changes for secrets and personal information.
- If a secret is found in the repository or Git history, stop and notify Axel. Deleting it from the latest file is not sufficient: revoke/rotate it first, then coordinate history cleanup.
- Do not publish a residential address, private phone number, personal account identifiers, or other unnecessary sensitive information.
- Use only professional contact details explicitly approved by Axel.
- Avoid collecting visitor data. If analytics, forms, or third-party embeds are later added, explain their privacy implications and obtain approval.

## 10. SEO, Metadata, and Performance

- Add accurate page titles, descriptions, canonical URLs where appropriate, and Open Graph metadata.
- Use `edgiaxel.tech` as the production canonical domain only after deployment/domain setup is confirmed.
- Use meaningful alt text for informative images; decorative images should have empty alt text.
- Optimize images and avoid unnecessarily large assets.
- Avoid layout shifts and excessive client-side JavaScript.
- Ensure links have meaningful labels and external links are handled intentionally.
- Do not add analytics or tracking by default.

## 11. Responsive and Browser QA

Check at minimum:

- Mobile width (~360–390 px)
- Tablet width (~768 px)
- Desktop width (~1280 px and wider)

Review:

- Navigation and menu behavior
- Text wrapping and overflow
- Project cards and images
- Keyboard navigation and focus states
- Reduced-motion behavior
- CV language switching
- A4 print preview and selectable text
- Broken links, missing assets, console errors, and build warnings

## 12. Git and Change Management

- Use clear, conventional commit messages when committing is requested.
- Do not commit automatically unless Axel asks or the established workflow explicitly authorizes it.
- Never force-push, rewrite shared history, or delete branches without explicit approval.
- Keep generated files and local secrets out of commits unless intentionally required.
- Review `git diff` before finalizing changes.
- Do not change repository visibility or GitHub organization settings without approval.

## 13. Communication Style

When reporting to Axel:

- Be direct and specific.
- Explain tradeoffs briefly; do not bury important decisions.
- Ask only for information that blocks safe or accurate progress.
- Clearly separate verified facts, assumptions, and content awaiting confirmation.
- Prefer targeted edits and exact file/placement instructions when explaining code changes.
- Do not overwhelm Axel with unrelated recommendations.

## 14. Definition of Done

A task is complete only when:

- The requested scope and acceptance criteria are met.
- The implementation follows this document and the current project docs.
- Content is accurate or explicitly marked for verification.
- Responsive and accessibility considerations have been addressed.
- Relevant lint/type-check/build/tests have been run, with results reported honestly.
- No secrets or unapproved personal information were introduced.
- The final report states what changed, what was checked, and what remains.
