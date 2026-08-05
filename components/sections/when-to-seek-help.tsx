import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { WHEN_TO_SEEK_HELP } from "@/lib/site-data";

export function WhenToSeekHelp() {
  return (
    <section className="py-16 md:py-24 bg-soft-pink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
            Fertility Guidance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-text leading-[1.1] mb-5">
            When should you talk to a fertility specialist?
          </h2>
          <p className="text-base md:text-lg text-deep-text/70 leading-relaxed">
            If you have been trying to conceive without success, or you are facing reproductive
            health concerns, an early consultation can help you understand the next step.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHEN_TO_SEEK_HELP.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 pt-7 shadow-sm border border-pink-100/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-magenta/10 hover:border-brand-magenta/30"
            >
              <span
                aria-hidden="true"
                className="absolute -top-1 right-4 text-5xl font-bold text-pink-100 transition-colors duration-300 group-hover:text-brand-magenta/20 select-none"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-magenta-light text-brand-magenta mb-5 transition-colors duration-300 group-hover:bg-brand-magenta group-hover:text-white">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="relative text-base font-bold text-deep-text mb-2">{item.title}</h3>
              <p className="relative text-sm text-deep-text/65 leading-relaxed">{item.description}</p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-magenta to-brand-teal transition-all duration-300 group-hover:w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark hover:scale-[1.02]"
          >
            Book a Private Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
