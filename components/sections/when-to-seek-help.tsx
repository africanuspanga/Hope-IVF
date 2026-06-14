import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { WHEN_TO_SEEK_HELP } from "@/lib/site-data";

export function WhenToSeekHelp() {
  return (
    <section className="py-16 md:py-24 bg-soft-pink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-text leading-[1.1] mb-5">
            When should you talk to a fertility specialist?
          </h2>
          <p className="text-base md:text-lg text-deep-text/70 leading-relaxed">
            If you have been trying to conceive without success, or you are facing reproductive
            health concerns, an early consultation can help you understand the next step.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHEN_TO_SEEK_HELP.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-pink-100/60 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CheckCircle className="h-6 w-6 text-brand-magenta mb-4" />
              <h3 className="text-base font-bold text-deep-text mb-2">{item.title}</h3>
              <p className="text-sm text-deep-text/65 leading-relaxed">{item.description}</p>
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
