import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Doctor } from "@/lib/doctors-data";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="group flex flex-col rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-72 w-full bg-gradient-to-br from-brand-magenta-light to-brand-teal-light overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-40 w-40 rounded-full bg-white/80 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-bold text-brand-magenta">
              {doctor.name.split(" ").pop()?.charAt(0)}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-teal backdrop-blur-sm">
          {doctor.specialty}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="text-xl font-bold text-deep-text mb-1">{doctor.name}</h3>
        <p className="text-brand-magenta font-medium text-sm mb-4">{doctor.title}</p>
        <div className="space-y-2 mb-6">
          <p className="text-sm text-deep-text/70">
            <span className="font-semibold text-deep-text">Languages:</span>{" "}
            {doctor.languages.join(", ")}
          </p>
          <p className="text-sm text-deep-text/70">
            <span className="font-semibold text-deep-text">Focus:</span>{" "}
            {doctor.focusAreas.join(", ")}
          </p>
        </div>
        <p className="text-xs text-deep-text/50 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
          Profile placeholder — replace with verified qualifications and registration details.
        </p>
        <Link
          href={`/doctors#${doctor.slug}`}
          className="mt-auto inline-flex items-center gap-2 rounded-full bg-deep-text px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-magenta w-fit"
        >
          View Profile
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
