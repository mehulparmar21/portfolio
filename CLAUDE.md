# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev            # dev server on http://localhost:3000
npm run build          # production build
npm run lint           # eslint (next core-web-vitals + typescript configs)
npx eslint src/app/page.tsx   # lint a single file
npx tsc --noEmit -p .  # typecheck
```

There is no test suite. Verify UI changes by running the dev server (`.claude/launch.json` defines `next-dev`) and checking both themes and a ~375px mobile width.

## Architecture

Single-page personal portfolio (Mehul Parmar, Technical Lead) on Next.js 16 App Router, React 19, Tailwind v4, TypeScript. All code lives in `src/app/` (the root `app/` from the scaffold was removed). Note the `@/*` path alias in `tsconfig.json` still points at the repo root, not `src/`.

- **Content is data in `src/app/page.tsx`.** The page is a server component holding arrays (`highlights`, `roles`, `projects`, `technicalSkills`) mapped into sections with ids `home`, `about`, `experience`, `projects`, `resume`, `contact`. Edit portfolio content there, not in markup.
  - `roles` store `start`/`end` as `"YYYY-MM"` strings (`end: null` = current role); `formatMonth`/`formatDuration` derive the displayed period and duration, and the current role gets the "Current" badge.
- **Section ids are shared contracts.** `Header.tsx` has its own `navLinks` list and uses an `IntersectionObserver` on those ids to highlight the active nav link; the footer in `page.tsx` builds links from a separate label list. Adding or renaming a section means updating all three.
- **Theming** is client-side: `ThemeProvider` (context + `localStorage` key `portfolio-theme`, default dark) toggles the `dark` class on `<html>`; `ThemeToggle` consumes `useTheme()`. `layout.tsx` sets `suppressHydrationWarning` on `<html>` for this.
- **Icons**: `lucide-react` plus hand-written SVGs in `components/SocialIcons.tsx`.
- **Static assets** in `public/`: the resume download is `public/Mehul Parmar.pdf` (linked as `/Mehul%20Parmar.pdf`), and the hero background is `public/developer-workspace.png`.

## Styling (`src/app/globals.css`)

Styling is almost entirely custom CSS classes, not Tailwind utilities. The file is layered:

1. Lines ~1–1845: an earlier design. Many of these classes (`.hero-orbit`, `.floating-card`, `.contact-form`, `.experience-*`, `.about-stats`, …) are no longer used by `page.tsx`.
2. From the `/* Target reference design overrides */` comment onward: the live design. It redefines the color tokens and styles the `target-*`, `journey-*`, `highlight-*`, `technical-skill-*` classes actually rendered, followed by the `850px`/`600px` responsive blocks.

Color rules:
- Theme tokens are defined in the override block under `:root` (dark values), `:root.dark`, and `:root:not(.dark)` (light values). Use these variables (`--foreground`, `--muted`, `--surface`, `--border`, `--accent`, `--accent-text`, `--timeline-line`, `--pill-*`, `--visual-bg`, `--mock-border`) instead of hex colors so both themes work; add a new token to both the dark and light blocks when needed.
- `--accent-text` is the text-safe accent (lighter in dark mode, darker in light mode); use it rather than `--accent` for accent-colored text.
- Exceptions: the hero always renders on a dark photo, and the `.mock-*` project thumbnails depict a light UI, so both keep fixed colors.
- Keep body text at 14px or larger and small labels at 12px or larger.
