import { SectionHeader } from "@/components/ui/section-header";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { getFaqs } from "@/lib/cms/content";

export async function FAQSection() {
  const HOME_FAQS = await getFaqs();
  if (HOME_FAQS.length === 0) return null;
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQs"
          title="Frequently asked questions"
          subtitle="Honest answers about fertility care, consultations, and what to expect."
          align="center"
        />
        <FAQAccordion faqs={HOME_FAQS} />
      </div>
    </section>
  );
}
