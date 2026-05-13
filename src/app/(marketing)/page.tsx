"use client";

import { HeroSection } from "@/components/marketing/HeroSection";
import { FeaturesBentoGrid } from "@/components/marketing/FeaturesBentoGrid";
import { PlatformIntegration } from "@/components/marketing/PlatformIntegration";

export default function LandingPage() {
  return (
    <main className="pb-24 pt-20">
      <HeroSection />
      <FeaturesBentoGrid />
      <PlatformIntegration />
    </main>
  );
}
