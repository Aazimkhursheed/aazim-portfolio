# Aazim Khursheed — Portfolio

Production-ready personal portfolio. React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # type-check + production build -> dist/
npm run preview     # preview the production build locally
npm run lint         # oxlint
```

## ⚠️ One open item before this ships

**Jab We Met's GitHub link is a placeholder.** You gave me the live demo URL but only said
"(Use the Jab We Met repository)" without the actual repo URL, and I won't invent one. It's
currently pointing at your GitHub profile (`https://github.com/AazimKhursheed`) instead of the
actual repo.

Fix it in `src/data/content.ts` — find the `Jab We Met` entry in `featuredProjects` and update
the `github` field:

```ts
{
  index: "03",
  name: "Jab We Met",
  ...
  github: "https://github.com/AazimKhursheed", // <-- replace with the real repo URL
  ...
}
```

## Project structure

```
src/
  components/
    ui/          — Button, Section, Eyebrow, Reveal (shared primitives)
    sections/     — Nav, Hero, About, Experience, FeaturedProjects,
                    AdditionalProjects, Skills, Contact, Footer
    projects/     — SmartAgriProject, OmniMindProject, JabWeMetProject
                    (three deliberately distinct layout templates)
                    + shared.tsx (small atoms reused across the three:
                    ProjectLinks, TechRow, FeatureGrid, BuildLog, Tradeoff)
  data/
    content.ts    — single source of truth for every fact on the site.
                    Edit this file to update any content — nothing is
                    hardcoded into components.
  hooks/
    useGithubActivity.ts — fetches real recent public GitHub activity for
                    the hero panel, client-side, with a graceful static
                    fallback if the API call fails.
  lib/
    utils.ts      — `cn()` class-merging helper
  index.css       — all design tokens (colors, fonts, spacing) as a
                    Tailwind v4 `@theme` block, plus base/reset styles
```

## Design tokens

All colors, fonts, and spacing live in `src/index.css` under `@theme`. To adjust the palette,
change the CSS custom properties there — Tailwind classes like `bg-bg-raised` or `text-accent-cyan`
are generated from those tokens automatically.

Project accent colors (set per-project in `content.ts` via the `accent` field):
- SmartAgri AI → green (`--color-accent-green`)
- OmniMind → cyan (`--color-accent-cyan`)
- Jab We Met → blue (`--color-accent-blue`)

## Fonts

- **Geist** (display/headings) — self-hosted, files in `public/fonts/`, loaded via `@font-face`
  in `index.css`. Only Medium (500) and SemiBold (600) weights are included, matching what's
  actually used.
- **Inter** (body) and **JetBrains Mono** (code/labels/mono captions) — loaded via Google Fonts
  in `index.html`.

## SEO

- Meta description, Open Graph, and Twitter Card tags are in `index.html`.
- `public/og-cover.svg` is the social preview image — swap it for a designed PNG/JPG version if
  you want something more polished than the placeholder SVG.
- `public/robots.txt` and `public/sitemap.xml` both reference `https://aazimkhursheed.dev/` —
  update both once you know the real deploy domain.
- JSON-LD `Person` schema is inlined in `index.html`'s `<head>`.

## Accessibility

Audited with axe-core (0 violations at time of writing): semantic landmarks, single `h1` with
unbroken heading order, keyboard-focus-visible states throughout, `prefers-reduced-motion`
respected globally, and text contrast checked against WCAG AA (4.5:1 for normal text).

If you add new sections or components, re-check contrast for any new text/background pairing —
don't assume a color that looks fine to your eye passes 4.5:1.

## Performance

Production build is ~120KB gzipped JS. All three project architecture diagrams are static inline
SVG (no charting library). Framer Motion is scoped to simple entrance/hover transitions — no
per-project custom animation systems.

## Deployment

This is a static Vite build — `npm run build` outputs to `dist/`, deployable as-is to Vercel,
Netlify, GitHub Pages, or any static host. No server/API routes are required; the only runtime
network call is the client-side GitHub activity fetch in the hero, which fails gracefully.
