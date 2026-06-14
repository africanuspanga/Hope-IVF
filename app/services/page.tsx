import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/ui/service-card";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services-data";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Services | Hope IVF International",
  description:
    "Explore fertility, IVF, IUI, male fertility, fertility preservation, women’s health, and reproductive surgery services at Hope IVF International in Dar es Salaam.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Fertility & Women’s Health Services"
        subtitle="Comprehensive, confidential, and doctor-led reproductive health services in Dar es Salaam."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">
              Services available at Hope IVF International
            </h2>
            <p className="text-deep-text/70">
              Each service below links to detailed educational information. Availability and
              suitability depend on individual medical assessment.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-soft-pink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-brand-magenta mb-3">
              Service Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-deep-text leading-[1.1]">
              How our care is organized
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl bg-white p-6 md:p-8 border border-pink-100/60 shadow-sm"
              >
                <h3 className="text-lg font-bold text-deep-text mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((slug) => {
                    const service = SERVICES.find((s) => s.slug === slug);
                    return service ? (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="flex items-center gap-2 text-sm text-deep-text/70 hover:text-brand-magenta transition-colors"
                        >
                          <Icon name={service.icon} className="h-4 w-4 text-brand-teal" />
                          {service.title}
                        </Link>
                      </li>
                    ) : (
                      <li key={slug} className="text-sm text-deep-text/50 italic">
                        {slug.replace(/-/g, " ")} — coming soon
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
