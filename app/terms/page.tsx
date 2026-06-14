import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Terms of Use | Hope IVF International",
  description:
    "Terms of Use for the Hope IVF International website. Please read these terms before using our site or appointment form.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" subtitle="Please read these terms carefully before using our website." />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-deep-text/80 leading-relaxed">
              These Terms of Use govern your access to and use of the Hope IVF International
              website. By using this website, you agree to these terms.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">1. Medical disclaimer</h2>
            <p className="text-deep-text/70 leading-relaxed">
              The information on this website is for general educational purposes only and does not
              constitute medical advice. It does not replace consultation with a qualified medical
              professional. Treatment suitability depends on individual medical assessment.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">2. Not for emergencies</h2>
            <p className="text-deep-text/70 leading-relaxed">
              This website and the appointment form are not for medical emergencies. If you are
              experiencing a medical emergency, contact emergency services or visit the nearest
              hospital immediately.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">3. Appointment requests</h2>
            <p className="text-deep-text/70 leading-relaxed">
              Submitting an appointment request does not create a doctor-patient relationship or
              guarantee an appointment. Our team will contact you to confirm availability and
              suitability.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">4. Intellectual property</h2>
            <p className="text-deep-text/70 leading-relaxed">
              All content on this website, including text, images, logos, and design, is the
              property of Hope IVF International unless otherwise stated. You may not reproduce,
              distribute, or modify content without permission.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">5. Accuracy of information</h2>
            <p className="text-deep-text/70 leading-relaxed">
              We strive to keep website information accurate and up to date, but we do not guarantee
              completeness or accuracy. Services, staff, and availability may change.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">6. Limitation of liability</h2>
            <p className="text-deep-text/70 leading-relaxed">
              Hope IVF International is not liable for any damages arising from your use of this
              website or reliance on its content, except where prohibited by law.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">7. Changes to terms</h2>
            <p className="text-deep-text/70 leading-relaxed">
              We may update these Terms of Use at any time. Continued use of the website after
              changes constitutes acceptance of the updated terms.
            </p>

            <p className="text-deep-text/70 leading-relaxed mt-10">
              If you have questions about these terms, please contact us through our Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
