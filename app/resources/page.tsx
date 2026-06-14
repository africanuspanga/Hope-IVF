import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { ArrowRight, BookOpen } from "lucide-react";
import { RESOURCES } from "@/lib/resources-data";

export const metadata: Metadata = {
  title: "Resources & Blog | Hope IVF International",
  description:
    "Educational articles about IVF, fertility, IUI, PCOS, fibroids, endometriosis, and reproductive health from Hope IVF International in Dar es Salaam.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Fertility & Reproductive Health Resources"
        subtitle="Educational articles to help you understand fertility, treatments, and what to expect."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 md:p-6 mb-12">
            <p className="text-sm md:text-base text-amber-900/80 leading-relaxed">
              <strong>Important:</strong> Medical articles on this page should be reviewed by a
              qualified clinician before publishing. They are for general education only and do not
              replace professional medical advice.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => (
              <article
                key={resource.slug}
                className="group flex flex-col rounded-3xl bg-slate-50 border border-slate-100 p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-magenta-light text-brand-magenta">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-2">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold text-deep-text mb-3 group-hover:text-brand-magenta transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-deep-text/70 leading-relaxed flex-1 mb-5">
                  {resource.excerpt}
                </p>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal group-hover:text-brand-magenta transition-colors"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
