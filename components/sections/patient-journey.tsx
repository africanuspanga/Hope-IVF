import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { JourneyStep } from "@/components/ui/journey-step";

const STEPS = [
  {
    title: "Book a confidential appointment",
    description: "Reach out by phone, WhatsApp, or our online form to schedule your private visit.",
  },
  {
    title: "Meet the doctor and discuss your history",
    description: "Share your medical background, concerns, and goals in a comfortable setting.",
  },
  {
    title: "Complete recommended fertility tests",
    description: "The doctor will guide you through the right evaluations for your situation.",
  },
  {
    title: "Receive a personalized treatment plan",
    description: "Together, we’ll review your options and create a clear, realistic plan.",
  },
  {
    title: "Begin treatment with follow-up support",
    description: "You’ll receive ongoing care, monitoring, and compassionate communication.",
  },
];

export function PatientJourneySection() {
  return (
    <section className="py-16 md:py-24 bg-soft-teal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Patient Journey"
          title="A clear path from first consultation to next steps."
          subtitle="We guide patients step by step so they never feel alone or confused during the process."
          align="center"
        />

        <div className="relative mt-12 md:mt-16">
          <div className="grid gap-8 md:grid-cols-5">
            {STEPS.map((step, index) => (
              <JourneyStep
                key={step.title}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === STEPS.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/patient-journey"
            className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark hover:scale-[1.02]"
          >
            Explore Your Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
