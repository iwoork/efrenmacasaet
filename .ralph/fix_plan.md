# Ralph Fix Plan

## High Priority
- [x] Initialize Next.js project with TypeScript, TailwindCSS, and App Router
- [x] Configure TailwindCSS with dark theme color palette (neutral/slate tones, Vercel-inspired)
- [x] Set up global layout with custom fonts (Inter), base styles, and metadata
- [x] Build Hero section component (headline, subheadline, 3 CTA buttons, subtle entrance animation)
- [x] Build Founder Narrative section (enterprise logos, transition story, direct tone)
- [x] Build What I Build section (SearchStrata.com and HomeForPup.com project cards with capabilities)

## Medium Priority
- [x] Build Enterprise Experience section (Expedia, Walmart, CNN impact cards)
- [x] Build How I Think section (5 founder principles as styled quote/cards)
- [x] Build Writing & Insights section (article preview grid with title, summary, link placeholders)
- [x] Build Core Competencies section (skills grid: AI Architecture, RAG, Platform Strategy, etc.)
- [x] Build Closing/Footer section (headline, CTAs, social links)
- [x] Implement smooth scroll navigation between sections
- [x] Add scroll-triggered animations (fade-in, slide-up reveals)

## Low Priority
- [x] SEO optimization (meta tags, Open Graph, JSON-LD structured data)
- [x] Performance optimization (image optimization, static generation, lazy loading)
- [ ] Lighthouse audit and fix issues to achieve score > 90
- [ ] Set up blog-ready content structure (MDX or CMS integration prep)
- [ ] Add responsive refinements (mobile menu, touch interactions)
- [ ] Favicon and social share image assets
- [ ] Accessibility audit (keyboard nav, screen reader, contrast)

## Completed
- [x] Project initialization and Ralph configuration
- [x] Full Next.js 16 + TailwindCSS v4 + TypeScript project scaffolded
- [x] Dark theme configured via CSS-first Tailwind v4 @theme directive
- [x] All 8 site sections implemented as components
- [x] Global layout with metadata, SEO tags (OG, Twitter), and Inter font
- [x] Content data centralized in src/lib/constants.ts
- [x] TypeScript types defined in src/types/index.ts
- [x] Production build passing (static export)
- [x] ScrollReveal component with Intersection Observer (respects reduced motion)
- [x] Smooth scroll via CSS scroll-behavior
- [x] JSON-LD Person structured data
- [x] SEO: meta tags, OG tags, Twitter cards, keywords, robots

## Notes
- Design inspiration: Vercel, Linear, premium YC founder sites
- Dark/neutral theme throughout — no light mode needed initially
- Content tone: Direct, credible, confident — founder voice
- All section content is defined in portfolio.md at project root
- Technical stack: Next.js 16 (App Router) + TailwindCSS v4 + TypeScript
- Target deployment: Vercel
- Using Tailwind v4 CSS-first config (no tailwind.config.js needed)
- Static export enabled — all pages pre-rendered
- Performance: already using static generation, no images to optimize yet
