# Technical Specifications — Efren Macasaet Portfolio Site

## Overview
A modern, founder-centric personal website for Efren Macasaet. The site serves as a professional landing page that positions Efren as a Founder & Product Architect and AI Systems Builder with enterprise credibility and startup execution.

---

## System Architecture

### Technology Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Animations | Framer Motion or CSS animations |
| Deployment | Vercel |
| Content | Static content initially, structured for MDX/CMS expansion |

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, theme
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Tailwind base + custom styles
├── components/
│   ├── Hero.tsx
│   ├── FounderNarrative.tsx
│   ├── WhatIBuild.tsx
│   ├── EnterpriseExperience.tsx
│   ├── HowIThink.tsx
│   ├── WritingInsights.tsx
│   ├── CoreCompetencies.tsx
│   ├── Footer.tsx
│   └── ui/                 # Reusable UI primitives
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       └── Card.tsx
├── lib/
│   └── constants.ts        # Site content, metadata, links
└── types/
    └── index.ts            # Shared TypeScript types
```

---

## Design System

### Color Palette (Dark Theme)
```
Background:       #0A0A0A (near-black)
Surface:          #141414 (card backgrounds)
Surface Hover:    #1A1A1A
Border:           #262626
Text Primary:     #EDEDED
Text Secondary:   #A1A1A1
Accent:           #FFFFFF (for emphasis)
Accent Secondary: #3B82F6 (blue, for links/CTAs)
```

### Typography
- **Font Family**: Inter (primary), system-ui fallback
- **Headline**: 48-72px, font-bold, tracking-tight
- **Subheadline**: 20-24px, font-normal, text-secondary
- **Body**: 16-18px, font-normal, leading-relaxed
- **Card Title**: 20-24px, font-semibold

### Spacing
- Section padding: `py-24` to `py-32`
- Container max-width: `max-w-6xl mx-auto px-6`
- Card gap: `gap-6` to `gap-8`

### Motion
- Entrance animations: fade-in + translate-y (subtle, 0.4-0.6s)
- Scroll-triggered reveals using Intersection Observer
- Hover states: scale(1.02) or border-color transitions
- No jarring or excessive animation

---

## Section Specifications

### 1. Hero Section
**Purpose**: First impression — establish identity and credibility instantly.

**Content**:
- Headline: "I Build Intelligent Systems That Scale."
- Subheadline: "Founder, product architect, and AI systems builder. Enterprise experience. Startup execution."
- CTA Buttons:
  - "Explore My Work" → scrolls to What I Build section
  - "Read My Thinking" → scrolls to Writing & Insights section
  - "Connect on LinkedIn" → external link (https://linkedin.com/in/efrenmacasaet — placeholder)

**Layout**: Centered, full viewport height (min-h-screen), vertically centered content.

**Animations**: Staggered fade-in for headline → subheadline → CTAs.

---

### 2. Founder Narrative Section
**Purpose**: Bridge enterprise credibility with founder identity.

**Content**:
- Section title: "From Enterprise Scale to Founder Execution"
- Enterprise logos/names: Expedia Group, Walmart, CNN
- Narrative text: Led large-scale system initiatives, solved complex platform challenges, aligned cross-functional teams
- Transition: Now builds AI-powered products that are high-trust, explainable, structured, scalable from day one

**Layout**: Two-part layout — enterprise credentials (left/top) and founder pivot (right/bottom).

---

### 3. What I Build Section
**Purpose**: Showcase founder-built products with specific capabilities.

**Content**:

#### SearchStrata.com Card
- Name: SearchStrata.com
- Description: AI-powered strata (condominium) document analysis platform
- Capabilities:
  - Upload and analyze strata documents (PDF/ZIP)
  - Extract financial health indicators (CRF, budgets, special levies)
  - Flag litigation, disputes, building condition risks
  - Analyze insurance coverage
  - AI-powered Q&A over uploaded documents
  - Citation-backed responses for trust and explainability
- Role: Founder & Product Architect

#### HomeForPup.com Card
- Name: HomeForPup.com
- Description: Community-driven platform for pet owners and breeders
- Focus areas:
  - Product-first marketplace thinking
  - Community design
  - User engagement architecture
  - Founder-led product strategy
- Role: Founder & Product Architect

**Layout**: Side-by-side cards on desktop, stacked on mobile.

---

### 4. Enterprise Experience Section
**Purpose**: Establish credibility through recognizable company names.

**Content** (3 cards):

| Company | Summary |
|---------|---------|
| Expedia Group | Built and contributed to large-scale platform initiatives across distributed systems and data ecosystems |
| Walmart | Worked within one of the world's largest retail infrastructures, navigating scale, performance, and reliability challenges |
| CNN | Operated in high-traffic, media-scale systems where resilience and uptime are critical |

**Layout**: Three-column grid on desktop, stacked on mobile. Minimal cards with company name and one-liner.

---

### 5. How I Think Section
**Purpose**: Reveal founder philosophy and decision-making lens.

**Content** (5 principles):
1. "AI must increase clarity, not hallucinate confidence."
2. "Trust is the foundation of intelligent systems."
3. "Platforms outperform isolated tools."
4. "Scale exposes architectural shortcuts."
5. "Founder velocity comes from technical depth."

**Layout**: Styled as blockquotes or principle cards. Could use a single-column centered layout or a staggered grid.

---

### 6. Writing & Insights Section
**Purpose**: Position Efren as a thought leader in AI and platform strategy.

**Content** (5 article placeholders):

| Theme | Description |
|-------|-------------|
| Trusted AI Systems | Building AI that users can verify and trust |
| Platform Unification | Why unified platforms beat point solutions |
| Context-Aware Data Ecosystems | Designing data systems that understand context |
| Governance as Leverage | Using governance to accelerate, not slow down |
| Long-Term Systems Design | Architecting for the decade, not the quarter |

Each entry: Title, short summary (2-3 sentences), link placeholder.

**Layout**: Grid of article preview cards (2-3 columns). Each card has title, summary, and "Read →" link.

---

### 7. Core Competencies Section
**Purpose**: Quick-scan skills overview.

**Content** (8 competencies):
- AI System Architecture
- Retrieval-Augmented Generation (RAG)
- Structured Document Intelligence
- Platform Strategy
- Enterprise-to-Startup Translation
- Explainable AI Design
- Scalable SaaS Architecture
- Product Vision & Execution

**Layout**: Tag/pill grid or compact card grid. 2-4 columns.

---

### 8. Closing / Footer Section
**Purpose**: Final call to action and contact.

**Content**:
- Headline: "Building the Next Generation of Trusted AI Systems."
- CTA Buttons:
  - "Let's Build" → mailto or contact form
  - "Get in Touch" → mailto or LinkedIn
- Footer: Copyright, social links (LinkedIn, GitHub — placeholders)

**Layout**: Centered, generous padding, clear visual separation from content above.

---

## Performance Requirements
- **Lighthouse Score**: > 90 across all categories (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Bundle Size**: < 200KB initial JS
- **Image Optimization**: Next.js Image component, WebP format, lazy loading
- **Static Generation**: Use `generateStaticParams` and SSG where possible

## SEO Requirements
- Page title: "Efren Macasaet — Founder & AI Systems Builder"
- Meta description referencing founder, AI systems, enterprise experience
- Open Graph tags (title, description, image, url)
- Twitter Card tags
- Semantic HTML (proper heading hierarchy, landmarks, sections)
- JSON-LD structured data (Person schema)
- Canonical URL
- robots.txt and sitemap.xml

## Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigable (all interactive elements focusable)
- Sufficient color contrast (4.5:1 minimum for body text)
- Alt text for all images
- Skip to content link
- Proper ARIA labels where needed
- Reduced motion media query respected

## Security Considerations
- No sensitive data stored client-side
- External links use `rel="noopener noreferrer"`
- Content Security Policy headers (via next.config.js or Vercel)
- No inline scripts

## Blog Expansion Structure
The site should be structured so a blog/writing section can be added later:
- Content directory structure ready for MDX files
- Potential integration with a headless CMS (Contentlayer, Sanity, or similar)
- Dynamic routing ready for `/blog/[slug]` pattern
- RSS feed capability
