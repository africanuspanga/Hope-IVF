import Link from "next/link";
import { Phone, Calendar, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background media */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/logo.png"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-magenta/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left content */}
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-teal mb-4">
                Fertility & IVF Care in Dar es Salaam
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-deep-text leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
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

              <p className="mt-5 text-sm text-deep-text/60 flex items-center gap-2 flex-wrap">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-magenta" />
                Private consultations
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Doctor-led care
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-magenta" />
                Dar es Salaam, Tanzania
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-100 px-4 py-2 text-sm font-medium text-deep-text hover:border-brand-magenta/30 transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-magenta" />
                  {CLINIC.phone}
                </a>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-100 px-4 py-2 text-sm font-medium text-deep-text">
                  <MapPin className="h-4 w-4 text-brand-teal" />
                  {CLINIC.location}
                </span>
              </div>
            </div>

            {/* Right floating card */}
            <div className="hidden lg:block">
              <div className="ml-auto max-w-md rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-deep-text mb-6">
                  Private fertility consultation
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Confidential appointment",
                    "Doctor-led assessment",
                    "Personalized care plan",
                    "Dar es Salaam clinic",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-deep-text/80">
                      <CheckCircle className="h-5 w-5 shrink-0 text-brand-magenta" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/appointment"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-magenta px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark"
                >
                  <Calendar className="h-5 w-5" />
                  Request Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
