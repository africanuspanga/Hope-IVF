import { SectionHeader } from "@/components/ui/section-header";
import { DoctorCard } from "@/components/ui/doctor-card";
import { getDoctors } from "@/lib/cms/content";

export async function DoctorsPreview() {
  const DOCTORS = await getDoctors();
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Team"
          title="Meet our fertility and women’s health team."
          subtitle="Experienced specialists dedicated to supporting your fertility journey with care and confidentiality."
          align="center"
        />
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
