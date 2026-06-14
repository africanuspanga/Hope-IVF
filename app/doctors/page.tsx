import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { DoctorCard } from "@/components/ui/doctor-card";
import { DOCTORS } from "@/lib/doctors-data";

export const metadata: Metadata = {
  title: "Our Doctors | Hope IVF International",
  description:
    "Meet the fertility and women’s health team at Hope IVF International in Dar es Salaam. Doctor profiles should be replaced with verified qualifications.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="Meet Our Fertility & Women’s Health Team"
        subtitle="Experienced specialists committed to compassionate, confidential care."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 md:p-6 mb-12">
            <p className="text-sm md:text-base text-amber-900/80 leading-relaxed">
              <strong>Important:</strong> Doctor profiles below are placeholders. Please replace
              them with verified qualifications, professional registration details, languages
              spoken, areas of focus, and clinic schedules before publishing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-soft-pink p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-4">
              What to expect from our team
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Respectful, confidential consultations",
                "Clear explanations of your options",
                "Evidence-based treatment recommendations",
                "Support in English, Swahili, and other languages as available",
                "Ongoing follow-up and communication",
                "Ethical, honest medical guidance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-deep-text/80">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-magenta shrink-0" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
