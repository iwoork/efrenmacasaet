import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FounderNarrative from "@/components/FounderNarrative";
import WhatIBuild from "@/components/WhatIBuild";
import EnterpriseExperience from "@/components/EnterpriseExperience";
import GlobalExperience from "@/components/GlobalExperience";
import HowIThink from "@/components/HowIThink";
import WritingInsights from "@/components/WritingInsights";
import CoreCompetencies from "@/components/CoreCompetencies";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <FounderNarrative />
        </ScrollReveal>
        <ScrollReveal>
          <WhatIBuild />
        </ScrollReveal>
        <ScrollReveal>
          <EnterpriseExperience />
        </ScrollReveal>
        <ScrollReveal>
          <GlobalExperience />
        </ScrollReveal>
        <ScrollReveal>
          <HowIThink />
        </ScrollReveal>
        <ScrollReveal>
          <WritingInsights />
        </ScrollReveal>
        <ScrollReveal>
          <CoreCompetencies />
        </ScrollReveal>
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}
