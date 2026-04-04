// Site-wide constants and content data

export const SITE = {
  name: "Efren Macasaet",
  title: "Efren Macasaet — AI Product & Engineering Leader",
  description:
    "AI product and engineering leader building intelligent systems at scale. Expertise in LLMs, RAG, AI agents, and scalable SaaS platforms. Enterprise experience at Expedia, Walmart, CNN, and Shutterstock. Now founding AI-powered products.",
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
    "Inside these environments, I led large-scale system initiatives, solved complex platform challenges, and aligned cross-functional teams.",
  founderQualities: [
    "Production-ready",
    "End-to-end",
    "Enterprise-grade",
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
      "The AI platform for responsible dog breeders.",
    capabilities: [
      "Product-first marketplace thinking",
      "Community design",
      "User engagement architecture",
      "Founder-led product strategy",
    ],
    role: "Founder & Product Architect",
  },
  {
    name: "CoffeeBrewNotes.com",
    url: "https://coffeebrewnotes.com",
    description:
      "Mobile-first brewing journal and analytics platform for home coffee enthusiasts — log brews in seconds and discover what makes your best cups great.",
    capabilities: [
      "Quick brew logging with smart defaults and grinder memory",
      "Bean library with roast dates, freshness tracking, and brew history",
      "Analytics dashboard with heatmaps, score trends, and bean leaderboards",
      "Built-in timer with lap support and method-specific presets",
      "Offline-first architecture with automatic sync",
    ],
    role: "Founder & Product Architect",
  },
  {
    name: "ComposeGTM.com",
    url: "https://composegtm.com",
    description:
      "AI-powered platform that transforms a single business description into a complete go-to-market strategy with channel recommendations, budget allocation, and ready-to-execute content in minutes.",
    capabilities: [
      "AI-generated GTM strategy from a simple text prompt",
      "Multi-channel content creation — blog, email, social, video, and ads",
      "Autonomous AI agents for each marketing channel",
      "Integration with 15+ platforms including Google Ads, Meta, Mailchimp, and WordPress",
      "Budget allocation, Gantt timeline scheduling, and performance analytics",
    ],
    role: "Founder & Product Architect",
  },
  {
    name: "ExpatHelpers.com",
    url: "https://expathelpers.com",
    description:
      "Resource platform helping expats navigate relocation, legal, and lifestyle challenges abroad.",
    capabilities: [
      "Curated relocation guides and country-specific resources",
      "Community-driven advice and local expert connections",
      "Practical tools for visa, housing, and cost-of-living planning",
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
  "Turn domain complexity into simple answers.",
  "Let AI agents do the work end-to-end.",
  "Build for production from day one.",
  "Apply enterprise rigor at startup speed.",
  "Solve the whole problem, not a slice of it.",
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

export const FAQ_ITEMS = [
  {
    question: "What does Efren Macasaet specialize in?",
    answer:
      "Efren Macasaet specializes in AI product development and systems architecture, with deep expertise in large language models (LLMs), retrieval-augmented generation (RAG), AI agents, and scalable SaaS platforms. He combines enterprise engineering experience with founder execution to build intelligent systems at scale.",
  },
  {
    question: "What products has Efren Macasaet built?",
    answer:
      "Efren has founded and built several AI-powered products: SearchStrata.com, an AI-powered strata document analysis platform; HomeForPup.com, the AI platform for responsible dog breeders; ComposeGTM.com, an AI-powered go-to-market strategy and content platform; CoffeeBrewNotes.com, a mobile-first brewing journal and analytics platform; and ExpatHelpers.com, a resource platform for expats navigating relocation abroad.",
  },
  {
    question: "What is his approach to AI development?",
    answer:
      "Efren builds AI systems that turn domain complexity into simple answers. He designs autonomous AI agents that do the work end-to-end, applies enterprise rigor at startup speed, and builds for production from day one. Every product solves the whole problem, not a slice of it.",
  },
  {
    question: "Where has Efren Macasaet worked?",
    answer:
      "Efren has enterprise experience at Expedia Group, Walmart, CNN, and Shutterstock, where he led large-scale platform initiatives across distributed systems and data ecosystems. He has built products and led teams across Singapore, Hong Kong, London, Toronto, and Vancouver.",
  },
  {
    question: "What is SearchStrata.com?",
    answer:
      "SearchStrata.com is an AI-powered strata (condominium) document analysis platform that helps buyers and property owners understand complex strata packages. It uses RAG to extract financial health indicators, flag litigation risks, analyze insurance coverage, and provide citation-backed AI Q&A over uploaded documents.",
  },
  {
    question: "What are Efren Macasaet's core competencies?",
    answer:
      "His core competencies include AI System Architecture, Retrieval-Augmented Generation (RAG), Structured Document Intelligence, Platform Strategy, Enterprise-to-Startup Translation, Explainable AI Design, Scalable SaaS Architecture, and Product Vision & Execution.",
  },
  {
    question: "How can you contact Efren Macasaet?",
    answer:
      "You can reach Efren Macasaet via email at efren@iwoork.com or connect with him on LinkedIn at linkedin.com/in/efrenmacasaet. His open-source work is available on GitHub at github.com/efrenmacasaet.",
  },
] as const;

export const SECTION_SUMMARIES = {
  founderNarrative:
    "Efren Macasaet brings enterprise engineering experience from Expedia Group, Walmart, CNN, and Shutterstock to AI-powered product development as a founder.",
  whatIBuild:
    "AI-powered products built from zero to production — including SearchStrata.com, HomeForPup.com, ComposeGTM.com, CoffeeBrewNotes.com, and ExpatHelpers.com.",
  enterpriseExperience:
    "Platform engineering and distributed systems experience at Expedia Group, Walmart, CNN, and Shutterstock — proven at enterprise scale.",
  globalExperience:
    "Building products and leading teams across Singapore, Hong Kong, London, Toronto, and Vancouver — adapting to diverse cultures, regulations, and user expectations.",
  howIThink:
    "Design principles centered on turning complexity into clarity, autonomous AI agents, and production-ready execution at startup speed.",
  writingInsights:
    "Perspectives on trusted AI systems, platform unification, context-aware data ecosystems, governance, and long-term systems design.",
  coreCompetencies:
    "Deep expertise spanning AI system architecture, RAG, structured document intelligence, platform strategy, explainable AI design, and scalable SaaS architecture.",
} as const;
