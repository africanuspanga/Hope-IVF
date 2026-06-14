import Link from "next/link";
import { ArrowRight, MapPin, HeartPulse, ShieldCheck } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
              About Hope IVF International
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-text leading-[1.1] mb-6">
              Specialist fertility care with privacy, clarity, and compassion.
            </h2>
            <p className="text-base md:text-lg text-deep-text/70 leading-relaxed mb-6">
              Hope IVF International is a fertility and women’s health clinic in Dar es Salaam
              dedicated to supporting patients through reproductive health assessment, fertility
              treatment planning, IVF guidance, and ongoing care. Our approach is personal,
              respectful, and designed to help every patient understand their options clearly.
            </p>
            <p className="text-base text-deep-text/70 leading-relaxed mb-8">
              We believe fertility care should feel safe, private, and human. From your first
              consultation to follow-up support, our team is here to guide you with dignity.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark hover:scale-[1.02]"
            >
              Learn About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-magenta-light to-brand-teal-light border border-slate-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg mb-4">
                  <HeartPulse className="h-10 w-10 text-brand-magenta" />
                </div>
                <p className="text-deep-text/60 font-medium">Clinic interior image placeholder</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: MapPin, label: "Dar es Salaam" },
                { icon: HeartPulse, label: "Fertility & IVF Focus" },
                { icon: ShieldCheck, label: "Confidential Patient Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-slate-50 border border-slate-100 p-4 text-center"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-brand-teal" />
                  <p className="text-sm font-semibold text-deep-text">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
