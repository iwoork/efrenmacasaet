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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
