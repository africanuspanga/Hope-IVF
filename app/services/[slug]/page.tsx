import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Icon } from "@/components/ui/icon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Hope IVF International`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.title,
    description: service.shortDescription,
    url: `https://hopeivfinternational.com/services/${service.slug}`,
    mainEntity: {
      "@type": "MedicalProcedure",
      name: service.title,
      procedureType: service.category,
      description: service.fullDescription,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-soft-pink via-white to-soft-teal pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-magenta/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-magenta transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-magenta-light text-brand-magenta">
              <Icon name={service.icon} className="h-5 w-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta">
              {service.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-deep-text leading-[1.1] max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-deep-text/70 max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* What is */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">What is this service?</h2>
            <p className="text-base md:text-lg text-deep-text/70 leading-relaxed">{service.whatIs}</p>
          </div>

          <div className="aspect-[16/9] w-full rounded-3xl bg-gradient-to-br from-brand-magenta-light to-brand-teal-light border border-slate-100 flex items-center justify-center mb-12">
            <p className="text-deep-text/60 font-medium">Service image placeholder</p>
          </div>

          {/* Who may need it */}
          {service.whoMayNeedIt && service.whoMayNeedIt.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">Who may need it?</h2>
              <ul className="space-y-3">
                {service.whoMayNeedIt.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-text/80">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-teal mt-0.5" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common reasons */}
          {service.commonReasons && service.commonReasons.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">Common reasons or symptoms</h2>
              <ul className="space-y-3">
                {service.commonReasons.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-text/80">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-magenta shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Consultation */}
          {service.consultation && service.consultation.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">
                What happens during consultation
              </h2>
              <ul className="space-y-3">
                {service.consultation.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-text/80">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-magenta mt-0.5" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tests */}
          {service.tests && service.tests.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">Tests that may be recommended</h2>
              <ul className="space-y-3">
                {service.tests.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-text/80">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-teal shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Treatment options */}
          {service.treatmentOptions && service.treatmentOptions.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">Treatment options</h2>
              <ul className="space-y-3">
                {service.treatmentOptions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-text/80">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-teal mt-0.5" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Risks */}
          {service.risks && service.risks.length > 0 && (
            <div className="mb-12 rounded-2xl bg-slate-50 border border-slate-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-brand-magenta" />
                <h2 className="text-xl md:text-2xl font-bold text-deep-text">Risks and limitations</h2>
              </div>
              <ul className="space-y-3">
                {service.risks.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-deep-text/80">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-magenta shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-6">Frequently asked questions</h2>
              <FAQAccordion faqs={service.faqs} />
            </div>
          )}

          {/* CTA */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-magenta to-brand-teal p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Book a private consultation</h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto">
              Speak with our team to learn whether {service.title.toLowerCase()} is right for your
              situation.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-brand-magenta shadow-lg transition-all hover:bg-white/90 hover:scale-[1.02]"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
