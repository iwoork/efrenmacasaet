import Hero from "@/components/Hero";
import FounderNarrative from "@/components/FounderNarrative";
import WhatIBuild from "@/components/WhatIBuild";
import EnterpriseExperience from "@/components/EnterpriseExperience";
import HowIThink from "@/components/HowIThink";
import WritingInsights from "@/components/WritingInsights";
import CoreCompetencies from "@/components/CoreCompetencies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FounderNarrative />
      <WhatIBuild />
      <EnterpriseExperience />
      <HowIThink />
      <WritingInsights />
      <CoreCompetencies />
      <Footer />
    </main>
  );
}
