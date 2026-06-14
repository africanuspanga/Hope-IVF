import { ShieldCheck, Microscope } from "lucide-react";
import { SAFETY_CARDS } from "@/lib/site-data";

export function LabPrivacySafety() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
              Laboratory, Privacy & Safety
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-text leading-[1.1] mb-6">
              Careful processes. Clear communication. Respect for privacy.
            </h2>
            <p className="text-base md:text-lg text-deep-text/70 leading-relaxed mb-8">
              Fertility care requires trust at every step. Hope IVF International should clearly
              explain consultation privacy, consent, patient identification, and clinical safety
              processes using verified clinic information.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {SAFETY_CARDS.map((card) => (
                <div
                  key={card}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-100 p-4"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-brand-teal mt-0.5" />
                  <span className="text-sm font-semibold text-deep-text">{card}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-square max-w-lg mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal-light to-brand-magenta-light border border-slate-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl mb-6">
                  <Microscope className="h-12 w-12 text-brand-teal" />
                </div>
                <p className="text-deep-text/60 font-medium">Laboratory / microscopy image placeholder</p>
                <p className="text-xs text-deep-text/40 mt-2">Replace with verified clinic laboratory photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
