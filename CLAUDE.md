# CLAUDE.md — Project Guide

## Project Overview
Strategic consulting website for Nicolas — thought leadership and frameworks for AI-native organizational transformation. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## IMPORTANT: Brand Name Privacy
The brand name "ildhu" must NEVER appear in any user-facing UI, page content, metadata, or component text. Use "Nicolas" as the public-facing name. "ildhu" is the internal project codename only.

## Design System (from docs/BRAND.md)
- **Always dark mode** — `#080808` background, never light mode
- **Fonts**: Libre Baskerville (serif headlines), Inter (body/UI)
- **Primary accent**: Ember `#FF6B35`
- **Section accents**: emerald `#34D399`, gold `#FACC15`, magenta `#FF4D6A`, violet `#A855F7`, cyan `#00C8FF`, coral `#FF6B6B`
- **Hero gradient**: ember → ember-soft → gold → emerald → cyan (hero headline only)
- **Voice**: Human-first, AI is implicit context. Never put "AI" front and center.

## Tech Stack
- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4
- shadcn/ui (dark mode, custom theme)
- Libre Baskerville + Inter via next/font/google

## Package Manager
**Use `bun` exclusively.** Never use `npm`, `yarn`, or `pnpm` for install, run, or script commands.
- `bun install` (not npm install)
- `bun run dev` (not npm run dev)
- `bun add <pkg>` (not npm install <pkg>)

## Structure
- `src/app/` — App Router pages and layout
- `src/components/` — React components
- `docs/` — Brand guidelines and prototype reference (not deployed)

## Commands
- `bun run dev` — Start dev server (Turbopack)
- `bun run build` — Production build
- `bun run lint` — ESLint

## Key Decisions
- Single-page site with smooth scrolling between sections
- Server Components by default (static content, no client-side data fetching needed)
- Client Components only for: scroll animations (IntersectionObserver), nav scroll behavior
- CSS custom properties for brand tokens, integrated with Tailwind theme
