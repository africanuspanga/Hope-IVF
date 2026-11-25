import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Hope IVF International",
  description:
    "Privacy Policy for Hope IVF International. Learn how we protect patient information and handle data confidentially.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Your privacy and confidentiality are central to our care." />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-deep-text/80 leading-relaxed">
              Hope IVF International is committed to protecting the privacy and confidentiality of
              our patients and website visitors. This Privacy Policy explains how we collect, use,
              and safeguard your information.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">1. Information we collect</h2>
            <p className="text-deep-text/70 leading-relaxed">
              We may collect personal information such as your name, phone number, email address,
              city, age range, and health-related details when you submit an appointment request or
              contact form. This information is used solely for scheduling and communication
              purposes.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">2. How we use your information</h2>
            <ul className="space-y-2 text-deep-text/70">
              <li>To respond to appointment requests and inquiries</li>
              <li>To contact you using your preferred method</li>
              <li>To coordinate your care with our clinical team</li>
              <li>To improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">3. Confidentiality</h2>
            <p className="text-deep-text/70 leading-relaxed">
              Fertility care is deeply personal. We handle all patient information with strict
              confidentiality and do not share your information with third parties without your
              consent, except as required by law or for medical referral purposes.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">4. Data security</h2>
            <p className="text-deep-text/70 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect
              your personal information. However, no method of transmission over the internet is
              completely secure.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">5. Cookies and analytics</h2>
            <p className="text-deep-text/70 leading-relaxed">
              Our website may use cookies or analytics tools to understand how visitors use the site
              and improve user experience. You can adjust your browser settings to refuse cookies.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">6. Your rights</h2>
            <p className="text-deep-text/70 leading-relaxed">
              You have the right to access, update, or request deletion of your personal information.
              To make a request, please contact us using the details on our Contact page.
            </p>

            <h2 className="text-2xl font-bold text-deep-text mt-10 mb-4">7. Changes to this policy</h2>
            <p className="text-deep-text/70 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated effective date.
            </p>

            <p className="text-deep-text/70 leading-relaxed mt-10">
              If you have any questions about this Privacy Policy, please contact Hope IVF
              International.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
