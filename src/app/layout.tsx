import type { Metadata } from "next";
import "./globals.css";
import { jsonLdGraph } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL("https://efrenmacasaet.com"),
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
  authors: [{ name: "Efren Macasaet", url: "https://efrenmacasaet.com" }],
  creator: "Efren Macasaet",
  publisher: "Efren Macasaet",
  alternates: {
    canonical: "/",
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://linkedin.com/in/efrenmacasaet" />
        <link rel="me" href="https://github.com/efrenmacasaet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
