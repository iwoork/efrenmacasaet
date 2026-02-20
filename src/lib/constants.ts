// Site-wide constants and content data

export const SITE = {
  name: "Efren Macasaet",
  title: "Efren Macasaet — Founder & AI Systems Builder",
  description:
    "Founder, product architect, and AI systems builder. Enterprise experience at Expedia, Walmart, and CNN. Now building intelligent, high-trust AI products.",
  url: "https://efrenmacasaet.com",
  linkedin: "https://linkedin.com/in/efrenmacasaet",
  github: "https://github.com/efrenmacasaet",
} as const;

export const HERO = {
  headline: "I Build Intelligent Systems That Scale.",
  subheadline:
    "Founder, product architect, and AI systems builder. Enterprise experience. Startup execution.",
  ctas: [
    { label: "Explore My Work", href: "#what-i-build" },
    { label: "Read My Thinking", href: "#writing" },
    {
      label: "Connect on LinkedIn",
      href: SITE.linkedin,
      external: true,
    },
  ],
} as const;

export const FOUNDER_NARRATIVE = {
  title: "From Enterprise Scale to Founder Execution",
  companies: ["Expedia Group", "Walmart", "CNN", "Shutterstock"],
  narrative:
    "Inside these environments, he led large-scale system initiatives, solved complex platform challenges, and aligned cross-functional teams.",
  founderQualities: [
    "High-trust",
    "Explainable",
    "Structured",
    "Scalable from day one",
  ],
} as const;

export const PROJECTS = [
  {
    name: "SearchStrata.com",
    url: "https://searchstrata.com",
    description:
      "AI-powered strata (condominium) document analysis platform designed to help buyers and property owners quickly understand complex strata packages.",
    capabilities: [
      "Upload and analyze strata documents (PDF/ZIP)",
      "Extract financial health indicators (CRF, budgets, special levies)",
      "Flag litigation, disputes, building condition risks",
      "Analyze insurance coverage",
      "AI-powered Q&A over uploaded documents",
      "Citation-backed responses for trust and explainability",
    ],
    role: "Founder & Product Architect",
  },
  {
    name: "HomeForPup.com",
    url: "https://homeforpup.com",
    description:
      "Community-driven platform for pet owners and breeders.",
    capabilities: [
      "Product-first marketplace thinking",
      "Community design",
      "User engagement architecture",
      "Founder-led product strategy",
    ],
    role: "Founder & Product Architect",
  },
] as const;

export const ENTERPRISE_EXPERIENCE = [
  {
    company: "Expedia Group",
    summary:
      "Built and contributed to large-scale platform initiatives across distributed systems and data ecosystems.",
  },
  {
    company: "Walmart",
    summary:
      "Worked within one of the world's largest retail infrastructures, navigating scale, performance, and reliability challenges.",
  },
  {
    company: "CNN",
    summary:
      "Operated in high-traffic, media-scale systems where resilience and uptime are critical.",
  },
  {
    company: "Shutterstock",
    summary:
      "Contributed to content platform systems powering one of the world's largest creative marketplaces.",
  },
] as const;

export const GLOBAL_EXPERIENCE = {
  title: "Global Experience",
  subtitle:
    "Building products and leading teams across international markets — adapting to diverse cultures, regulations, and user expectations.",
  cities: ["Singapore", "Hong Kong", "London", "Toronto", "Vancouver"],
} as const;

export const PRINCIPLES = [
  "AI must increase clarity, not hallucinate confidence.",
  "Trust is the foundation of intelligent systems.",
  "Platforms outperform isolated tools.",
  "Scale exposes architectural shortcuts.",
  "Founder velocity comes from technical depth.",
] as const;

export const WRITING_TOPICS = [
  {
    title: "Trusted AI Systems",
    summary:
      "Building AI that users can verify and trust. Why explainability isn't optional — it's the product.",
    href: "#",
  },
  {
    title: "Platform Unification",
    summary:
      "Why unified platforms beat point solutions. The compounding advantage of shared infrastructure.",
    href: "#",
  },
  {
    title: "Context-Aware Data Ecosystems",
    summary:
      "Designing data systems that understand context, not just store records. Making data work harder.",
    href: "https://www.linkedin.com/pulse/context-aware-data-ecosystems-efren-macasaet-gswwc",
  },
  {
    title: "Governance as Leverage",
    summary:
      "Using governance to accelerate, not slow down. Turning compliance into a competitive advantage.",
    href: "#",
  },
  {
    title: "Long-Term Systems Design",
    summary:
      "Architecting for the decade, not the quarter. Building systems that compound in value over time.",
    href: "#",
  },
] as const;

export const COMPETENCIES = [
  "AI System Architecture",
  "Retrieval-Augmented Generation (RAG)",
  "Structured Document Intelligence",
  "Platform Strategy",
  "Enterprise-to-Startup Translation",
  "Explainable AI Design",
  "Scalable SaaS Architecture",
  "Product Vision & Execution",
] as const;
