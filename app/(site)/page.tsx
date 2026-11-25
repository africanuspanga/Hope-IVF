import { HeroSection } from "@/components/sections/hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { AboutPreview } from "@/components/sections/about-preview";
import { WhenToSeekHelp } from "@/components/sections/when-to-seek-help";
import { ServicesOverview } from "@/components/sections/services-overview";
import { PatientJourneySection } from "@/components/sections/patient-journey";
import { DoctorsPreview } from "@/components/sections/doctors-preview";
import { LabPrivacySafety } from "@/components/sections/lab-privacy-safety";
import { PatientStories } from "@/components/sections/patient-stories";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <WhenToSeekHelp />
      <ServicesOverview />
      <PatientJourneySection />
      <DoctorsPreview />
      <LabPrivacySafety />
      <PatientStories />
      <FAQSection />
      <CTASection />
    </>
  );
}
