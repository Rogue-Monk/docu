"use client";

import { HeroSection } from "@/components/marketing/HeroSection";
import { FeaturesBentoGrid } from "@/components/marketing/FeaturesBentoGrid";
import { PlatformIntegration } from "@/components/marketing/PlatformIntegration";

export default function LandingPage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <FeaturesBentoGrid />
      <PlatformIntegration />
    </main>
  );
}
