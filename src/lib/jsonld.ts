import {
  SITE,
  PROJECTS,
  COMPETENCIES,
  ENTERPRISE_EXPERIENCE,
  WRITING_TOPICS,
  FAQ_ITEMS,
} from "./constants";

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    // WebSite
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#person` },
      inLanguage: "en-US",
    },

    // ProfilePage
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/#profilepage`,
      url: SITE.url,
      name: SITE.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      mainEntity: { "@id": `${SITE.url}/#person` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
          "#hero h1",
          "#hero p",
          "#narrative",
          "#what-i-build h2",
          "#competencies",
        ],
      },
      inLanguage: "en-US",
    },

    // Person (enriched)
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      givenName: "Efren",
      familyName: "Macasaet",
      additionalType: "https://schema.org/Founder",
      jobTitle: "AI Product & Engineering Leader",
      description: SITE.description,
      url: SITE.url,
      email: "efren@iwoork.com",
      sameAs: [SITE.linkedin, SITE.github],
      hasOccupation: {
        "@type": "Occupation",
        name: "AI Product & Engineering Leader",
        occupationalCategory: "15-1252.00",
        skills: [...COMPETENCIES].join(", "),
      },
      worksFor: PROJECTS.map((p) => ({
        "@type": "Organization",
        name: p.name,
        url: p.url,
      })),
      alumniOf: ENTERPRISE_EXPERIENCE.map((e) => ({
        "@type": "Organization",
        name: e.company,
      })),
      knowsAbout: [...COMPETENCIES],
    },

    // ItemList — Projects
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/#projects`,
      name: "Products Built by Efren Macasaet",
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          url: p.url,
          description: p.description,
          featureList: [...p.capabilities].join(", "),
          author: { "@id": `${SITE.url}/#person` },
          applicationCategory: "WebApplication",
        },
      })),
    },

    // ItemList — Competencies
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/#competencies`,
      name: "Core Competencies of Efren Macasaet",
      numberOfItems: COMPETENCIES.length,
      itemListElement: COMPETENCIES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c,
      })),
    },

    // FAQPage
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },

    // Article stubs — only for writing topics with real hrefs
    ...WRITING_TOPICS.filter((t) => t.href !== "#").map((t) => ({
      "@type": "Article",
      headline: t.title,
      description: t.summary,
      url: t.href,
      author: { "@id": `${SITE.url}/#person` },
    })),
  ],
};
