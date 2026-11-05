# Design System — MVP

## Creative direction
**Futuristic digital archive / experimental interface**, with a restrained cyber-tech aesthetic. It should feel designed and distinctive without sacrificing readability or performance.

## Visual language
- Background: near-black / graphite / deep navy
- Surfaces: layered dark panels, subtle borders
- Accent: cyan/electric blue; violet used sparingly
- Text: high-contrast off-white; secondary gray
- Use glow only for focused accents, not every component

## Typography
- Display: modern geometric sans-serif
- Body: highly readable sans-serif
- Technical labels: monospace
- Establish a clear scale for display, headings, body, captions, and metadata.
- Avoid long paragraphs in narrow columns.

## Layout
- Responsive, mobile-first.
- Use a consistent content max-width and spacing scale.
- Landing page can use asymmetric composition, but core content must remain linear and understandable.
- Cards should have clear title, description, metadata, and actions.
- Navigation should be simple and predictable.

## Interaction
MVP:
- Smooth but non-disruptive anchor navigation
- Subtle hover/focus states
- Small entrance transitions
- Project card interaction
- CV language toggle
- Print/download CV action

Later:
- Scroll-triggered storytelling
- Parallax and layered panels
- GSAP ScrollTrigger for selected pinned sequences
- Custom cursor only if usability remains intact
- Optional sound is off by default

## Accessibility and performance
- Semantic landmarks and heading order
- Visible keyboard focus
- WCAG-conscious contrast
- `prefers-reduced-motion` support
- No scroll hijacking
- Lazy-load noncritical media
- Avoid huge video backgrounds and excessive blur/filter effects
- Ensure animations do not block reading or navigation

## CV print design
- A4 portrait
- One page where content permits
- Text remains selectable and searchable
- Use real HTML text, never a CV screenshot
- Strong hierarchy, compact spacing, simple columns only if reading order remains logical
- Include photo only if user decides it is appropriate for the target market; keep it optional/configurable
- English and Indonesian variants
