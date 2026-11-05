# Implementation Plan — Portfolio MVP

## Architecture
Next.js App Router + TypeScript + Tailwind CSS. Motion for React for small transitions. Static structured data in TypeScript. No backend/database for MVP.

## Suggested structure
```text
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    projects/page.tsx
    cv/page.tsx
    contact/page.tsx
    globals.css
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    home/
      Hero.tsx
      SelectedProjects.tsx
    projects/
      ProjectCard.tsx
      ProjectGrid.tsx
    cv/
      CVDocument.tsx
      CVLanguageToggle.tsx
      CVPrintButton.tsx
  data/
    profile.ts
    projects.ts
    experience.ts
    cv-en.ts
    cv-id.ts
public/
  images/
  cv/
```

## CV implementation requirements
- Render CV as semantic HTML with selectable text.
- Use CSS `@media print` for A4 layout, hiding navigation/buttons.
- Provide separate English and Indonesian content objects.
- Browser print dialog can save as PDF; label CTA “Download PDF / Save as PDF”.
- Test generated PDF text extraction and reading order.
- Optional photo controlled by profile data.
- Avoid canvas/SVG-as-text or screenshot-based PDF.
- Ensure links are visible/usable in printed version.

## Quality gates
- Build and lint pass.
- All links checked.
- Mobile viewport tested.
- Keyboard navigation and focus states tested.
- Reduced-motion mode tested.
- CV printed to A4 and inspected.
- CV PDF text selectable and copyable.
- No secret files or credentials committed.
- Lighthouse/performance pass at a reasonable target; don't optimize prematurely.
- Domain HTTPS and redirects verified.
