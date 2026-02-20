import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Efren Macasaet — AI Product & Engineering Leader",
  description:
    "AI product and engineering leader building intelligent systems at scale. Expertise in LLMs, RAG, AI agents, and scalable SaaS platforms. Enterprise experience at Expedia, Walmart, CNN, and Shutterstock. Now founding AI-powered products.",
  keywords: [
    "Efren Macasaet",
    "AI engineer",
    "AI product leader",
    "AI systems architect",
    "LLM engineering",
    "RAG architecture",
    "AI agents",
    "machine learning engineer",
    "AI SaaS founder",
    "generative AI",
    "AI product management",
    "AI platform engineering",
    "intelligent systems",
    "AI startup founder",
    "enterprise AI",
    "NLP engineer",
    "retrieval augmented generation",
    "AI infrastructure",
  ],
  openGraph: {
    title: "Efren Macasaet — AI Product & Engineering Leader",
    description:
      "AI product and engineering leader building intelligent systems at scale. Expertise in LLMs, RAG, AI agents, and scalable SaaS platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efren Macasaet — AI Product & Engineering Leader",
    description:
      "AI product and engineering leader building intelligent systems at scale. Expertise in LLMs, RAG, AI agents, and scalable SaaS platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Efren Macasaet",
  jobTitle: "AI Product & Engineering Leader",
  description:
    "AI product and engineering leader building intelligent systems at scale. Expertise in LLMs, RAG, AI agents, and scalable SaaS platforms.",
  url: "https://efrenmacasaet.com",
  sameAs: [
    "https://linkedin.com/in/efrenmacasaet",
    "https://github.com/efrenmacasaet",
  ],
  knowsAbout: [
    "AI System Architecture",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Generative AI",
    "AI Product Management",
    "Platform Strategy",
    "Scalable SaaS Architecture",
    "Machine Learning Engineering",
    "Natural Language Processing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
