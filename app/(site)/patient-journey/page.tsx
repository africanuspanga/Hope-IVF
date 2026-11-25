import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { JourneyStep } from "@/components/ui/journey-step";
import { Calendar, FileText, Heart, ClipboardCheck, Stethoscope, Microscope, ClipboardList, Phone, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Journey | Hope IVF International",
  description:
    "Understand the step-by-step fertility care journey at Hope IVF International, from first appointment to treatment and follow-up support in Dar es Salaam.",
};

const STEPS = [
  {
    title: "Book a confidential appointment",
    description: "Contact us by phone, WhatsApp, or the online form to schedule your private visit.",
  },
  {
    title: "Before your first visit",
    description: "Gather your medical reports, test results, medication list, and partner details if attending together.",
  },
  {
    title: "First consultation",
    description: "Meet the doctor, share your history, and discuss your goals, concerns, and questions.",
  },
  {
    title: "Recommended tests",
    description: "Complete fertility evaluations such as hormone tests, ultrasound, and semen analysis if indicated.",
  },
  {
    title: "Treatment planning",
    description: "Review your results and co-create a personalized, realistic treatment plan.",
  },
  {
    title: "Begin treatment with follow-up support",
    description: "Start your recommended pathway with monitoring, communication, and compassionate care.",
  },
];

const CHECKLIST = [
  "Previous medical reports",
  "Ultrasound reports",
  "Hormone test results",
  "Semen analysis if available",
  "Medication list",
  "Partner details if attending together",
];

const SECTIONS = [
  {
    icon: FileText,
    title: "What to bring",
    text: "Bring any previous medical reports, ultrasound images, hormone test results, semen analysis, a list of current medications, and your partner if possible.",
  },
  {
    icon: Stethoscope,
    title: "First consultation",
    text: "Your first visit is a conversation. The doctor will review your history, answer questions, and recommend next steps without pressure.",
  },
  {
    icon: Microscope,
    title: "Recommended tests",
    text: "Tests are tailored to your situation. Common evaluations include blood tests, pelvic ultrasound, and semen analysis.",
  },
  {
    icon: ClipboardList,
    title: "Treatment planning",
    text: "Once results are ready, the doctor will explain your options and help you choose a path that aligns with your goals and medical needs.",
  },
  {
    icon: Heart,
    title: "Emotional support",
    text: "Fertility care can be emotional. We encourage open communication and can discuss support resources available to you.",
  },
  {
    icon: Phone,
    title: "Follow-up care",
    text: "You will receive clear instructions for next steps, follow-up appointments, and how to reach our team with questions.",
  },
];

export default function PatientJourneyPage() {
  return (
    <>
      <PageHero
        label="Your Journey"
        title="Your Fertility Journey, Explained Step by Step"
        subtitle="From first contact to ongoing care, we guide you with clarity, privacy, and compassion."
      />

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-soft-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
              Step by Step
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-text leading-[1.1]">
              What to expect
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
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
      </section>

      {/* Info sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <section.icon className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-bold text-deep-text mb-2">{section.title}</h3>
                <p className="text-sm text-deep-text/70 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 md:py-24 bg-soft-pink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 md:p-12 border border-pink-100/60 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="h-8 w-8 text-brand-magenta" />
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text">What to bring to your first appointment</h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3 text-deep-text/80">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-magenta/10 text-brand-magenta">
                    <Users className="h-3 w-3" />
                  </span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark"
              >
                <Calendar className="h-4 w-4" />
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
