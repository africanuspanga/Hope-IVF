import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { getResourceBySlug, RESOURCES } from "@/lib/resources-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESOURCES.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: "Resource Not Found" };
  return {
    title: `${resource.title} | Hope IVF International`,
    description: resource.excerpt,
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-soft-pink via-white to-soft-teal pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-magenta/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-magenta transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to resources
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-brand-magenta" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta">
              {resource.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-text leading-[1.1]">
            {resource.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 border border-amber-100 p-4 md:p-6 mb-10">
            <p className="text-sm text-amber-900/80 leading-relaxed">
              <strong>Medical review notice:</strong> This article is for general education only
              and should be reviewed by a qualified clinician before publishing. It does not replace
              professional medical advice.
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-deep-text/80 leading-relaxed mb-8">{resource.excerpt}</p>
            <p className="text-base md:text-lg text-deep-text/70 leading-relaxed whitespace-pre-line">
              {resource.content}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
