import Link from "next/link";
import { Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { CLINIC } from "@/lib/site-data";
import { HeroSlider } from "@/components/sections/hero-slider";

const HERO_POINTS = [
  "Confidential appointment",
  "Doctor-led assessment",
  "Personalized care plan",
  "Dar es Salaam clinic",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-soft-pink via-white to-soft-teal">
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-magenta/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-40 md:pb-44">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-teal mb-4">
                Fertility & IVF Care in Dar es Salaam
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-deep-text leading-[0.95] sm:text-6xl md:text-7xl">
                Advanced.
                <br />
                Compassionate.
                <br />
                <span className="text-brand-magenta">Fertility Care.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-deep-text/75 leading-relaxed max-w-xl">
                Hope IVF International provides confidential fertility consultations, IVF guidance,
                reproductive health support, and personalized care for couples and individuals in
                Tanzania.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-magenta/25 transition-all hover:bg-brand-magenta-dark hover:scale-[1.02]"
                >
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
                <a
                  href={`https://wa.me/${CLINIC.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 border border-brand-teal/20 px-6 py-3.5 text-base font-semibold text-brand-teal transition-all hover:bg-brand-teal-light hover:shadow-md"
                >
                  <MessageCircle className="h-5 w-5" />
                  Talk to Us on WhatsApp
                </a>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2 max-w-lg">
                {HERO_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-deep-text/80">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-magenta" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right image slider */}
            <div className="lg:pl-4">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
