import Image from "next/image";
import { ShieldCheck } from "lucide-react";
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
            <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-3xl border border-slate-100">
              <Image
                src="/images/fertility-image.jpg"
                alt="Fertility laboratory and care at Hope IVF International"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
