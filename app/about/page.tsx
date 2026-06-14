import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Heart, Shield, Eye, Users, Sparkles, Landmark } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Hope IVF International",
  description:
    "Learn about Hope IVF International, a fertility and women’s health clinic in Dar es Salaam providing compassionate, ethical, and personalized reproductive care.",
};

const VALUES = [
  { icon: Heart, title: "Compassion", text: "We care for every patient with empathy, patience, and respect." },
  { icon: Shield, title: "Privacy", text: "Confidentiality is at the heart of everything we do." },
  { icon: Landmark, title: "Medical integrity", text: "Honest, ethical guidance without overpromising outcomes." },
  { icon: Eye, title: "Clarity", text: "We explain options clearly so patients can make informed decisions." },
  { icon: Users, title: "Respect", text: "Every patient’s journey, background, and choices are honored." },
  { icon: Sparkles, title: "Hope", text: "We support our patients with realistic optimism and steady guidance." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About Hope IVF International"
        subtitle="Compassionate fertility and women’s health care in Dar es Salaam."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-text leading-[1.1] mb-6">
                A clinic built on trust, privacy, and patient dignity.
              </h2>
              <p className="text-base md:text-lg text-deep-text/70 leading-relaxed mb-6">
                Hope IVF International is a fertility and women’s health clinic in Dar es Salaam,
                Tanzania. We are dedicated to supporting individuals and couples through
                reproductive health assessment, fertility treatment planning, IVF guidance, and
                ongoing care.
              </p>
              <p className="text-base text-deep-text/70 leading-relaxed mb-8">
                Our environment is designed to feel calm, private, and professional — not like a
                busy hospital. We take time to listen, explain, and guide each patient through their
                options with clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark"
                >
                  Explore Services
                </Link>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-white px-6 py-3 text-sm font-semibold text-brand-teal transition-all hover:bg-brand-teal-light"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-magenta-light to-soft-teal border border-slate-100 flex items-center justify-center">
              <p className="text-deep-text/60 font-medium">Clinic team / interior image placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-soft-pink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 md:p-10 border border-pink-100/60 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3 block">
                Mission
              </span>
              <p className="text-xl md:text-2xl font-semibold text-deep-text leading-relaxed">
                To provide compassionate, ethical, and personalized fertility and women’s health
                care that gives patients clarity, confidence, and hope.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 md:p-10 border border-pink-100/60 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-teal mb-3 block">
                Vision
              </span>
              <p className="text-xl md:text-2xl font-semibold text-deep-text leading-relaxed">
                To become a trusted fertility and reproductive health center for patients in
                Tanzania and the wider region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-text leading-[1.1]">
              What guides our care
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <value.icon className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="text-lg font-bold text-deep-text mb-2">{value.title}</h3>
                <p className="text-sm text-deep-text/70 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us / Philosophy */}
      <section className="py-16 md:py-24 bg-soft-teal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-3xl bg-gradient-to-br from-soft-teal to-brand-magenta-light border border-slate-100 flex items-center justify-center">
              <p className="text-deep-text/60 font-medium">Consultation room image placeholder</p>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
                Care Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-text leading-[1.1] mb-6">
                Patient-centered care with privacy at the center.
              </h2>
              <ul className="space-y-4">
                {[
                  "Private consultations in a calm, non-clinical atmosphere",
                  "Clear explanations of tests, treatments, and timelines",
                  "Respect for your decisions, culture, and comfort",
                  "Doctor-led care from assessment through follow-up",
                  "Commitment to ethical, responsible medical communication",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-text/80">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-magenta shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
