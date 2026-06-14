import { ShieldCheck, ClipboardList, Stethoscope, Microscope } from "lucide-react";
import { TRUST_ITEMS } from "@/lib/site-data";

const ICONS = [ShieldCheck, ClipboardList, Stethoscope, Microscope];

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal-light text-brand-teal">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-deep-text mb-1">{item.title}</h3>
                <p className="text-sm text-deep-text/60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
