import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Hope IVF International",
  description:
    "Medical disclaimer for Hope IVF International. Website content is for education only and is not a substitute for professional medical advice.",
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHero
        title="Medical Disclaimer"
        subtitle="Important information about the content on this website."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6 md:p-8 mb-10">
            <p className="text-base md:text-lg text-amber-900/90 font-semibold leading-relaxed">
              Information on this website is for general education only and does not replace
              consultation with a qualified medical professional. Treatment suitability depends on
              individual medical assessment.
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">No doctor-patient relationship</h2>
            <p className="text-deep-text/70 leading-relaxed">
              Use of this website, including the appointment form, does not create a doctor-patient
              relationship. A professional relationship is established only after an in-person or
              telemedicine consultation with a qualified provider at our clinic.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">No guarantees</h2>
            <p className="text-deep-text/70 leading-relaxed">
              Hope IVF International does not guarantee pregnancy, treatment success, or specific
              medical outcomes. Fertility treatment results depend on many individual medical
              factors that your doctor will discuss with you.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">Not for emergencies</h2>
            <p className="text-deep-text/70 leading-relaxed">
              This website and appointment form are not for medical emergencies. If you believe you
              are experiencing a medical emergency, please contact emergency services or go to the
              nearest hospital immediately.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">Educational content</h2>
            <p className="text-deep-text/70 leading-relaxed">
              Articles and resources on this site are intended for general education. They should be
              reviewed by a qualified clinician before being relied upon for medical decisions.
              Always seek the advice of your doctor or other qualified health provider with any
              questions you may have regarding a medical condition.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">Accuracy</h2>
            <p className="text-deep-text/70 leading-relaxed">
              While we aim to provide accurate and up-to-date information, medical knowledge
              evolves. We do not guarantee that all content is current, complete, or applicable to
              your situation.
            </p>

            <p className="text-deep-text/70 leading-relaxed mt-10">
              If you have any health concerns, please contact Hope IVF International to book a
              private consultation with a qualified medical professional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
