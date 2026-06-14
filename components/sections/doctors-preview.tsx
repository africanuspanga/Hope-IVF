import { SectionHeader } from "@/components/ui/section-header";
import { DoctorCard } from "@/components/ui/doctor-card";
import { DOCTORS } from "@/lib/doctors-data";

export function DoctorsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Team"
          title="Meet our fertility and women’s health team."
          subtitle="Experienced specialists dedicated to supporting your fertility journey with care and confidentiality."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-deep-text/60 bg-slate-50 rounded-2xl p-4 max-w-2xl mx-auto">
          Doctor profiles should include verified qualifications, professional registration details,
          languages, and areas of focus.
        </p>
      </div>
    </section>
  );
}
