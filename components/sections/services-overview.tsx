import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { SERVICES } from "@/lib/services-data";

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Fertility, IVF, and women’s health services."
          subtitle="A range of confidential, doctor-led services to support your fertility and reproductive health journey."
          align="center"
        />
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
  );
}
