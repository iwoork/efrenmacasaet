import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Efren Macasaet — Founder & AI Systems Builder",
  description:
    "Founder, product architect, and AI systems builder. Enterprise experience at Expedia, Walmart, and CNN. Now building intelligent, high-trust AI products.",
  keywords: [
    "Efren Macasaet",
    "AI Systems Builder",
    "Founder",
    "Product Architect",
    "SearchStrata",
    "RAG",
    "Enterprise AI",
  ],
  openGraph: {
    title: "Efren Macasaet — Founder & AI Systems Builder",
    description:
      "Founder, product architect, and AI systems builder. Enterprise experience at Expedia, Walmart, and CNN.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efren Macasaet — Founder & AI Systems Builder",
    description:
      "Founder, product architect, and AI systems builder. Enterprise experience at Expedia, Walmart, and CNN.",
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
  jobTitle: "Founder & AI Systems Builder",
  description:
    "Founder, product architect, and AI systems builder with enterprise experience at Expedia, Walmart, and CNN.",
  url: "https://efrenmacasaet.com",
  sameAs: [
    "https://linkedin.com/in/efrenmacasaet",
    "https://github.com/efrenmacasaet",
  ],
  knowsAbout: [
    "AI System Architecture",
    "Retrieval-Augmented Generation",
    "Platform Strategy",
    "Scalable SaaS Architecture",
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
