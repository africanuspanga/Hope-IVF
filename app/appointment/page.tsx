import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book an Appointment | Hope IVF International",
  description:
    "Request a confidential fertility or women’s health appointment at Hope IVF International in Dar es Salaam. Our team will contact you privately.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        label="Book Now"
        title="Book a Confidential Appointment"
        subtitle="Share your details and our team will contact you privately to confirm your visit."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AppointmentForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-soft-pink border border-pink-100/60 p-6 md:p-8">
                <h3 className="text-xl font-bold text-deep-text mb-5">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-deep-text/80">
                    <Phone className="h-5 w-5 shrink-0 text-brand-magenta" />
                    <span>{CLINIC.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-deep-text/80">
                    <MessageCircle className="h-5 w-5 shrink-0 text-brand-magenta" />
                    <span>{CLINIC.whatsapp}</span>
                  </div>
                  <div className="flex items-start gap-3 text-deep-text/80">
                    <Mail className="h-5 w-5 shrink-0 text-brand-magenta" />
                    <span>{CLINIC.email}</span>
                  </div>
                  <div className="flex items-start gap-3 text-deep-text/80">
                    <MapPin className="h-5 w-5 shrink-0 text-brand-magenta" />
                    <span>{CLINIC.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-deep-text/80">
                    <Clock className="h-5 w-5 shrink-0 text-brand-magenta" />
                    <span>{CLINIC.hours}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-brand-teal-light border border-brand-teal/10 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-6 w-6 text-brand-teal" />
                  <h3 className="text-lg font-bold text-deep-text">Your privacy matters</h3>
                </div>
                <p className="text-sm text-deep-text/70 leading-relaxed">
                  All appointment requests are handled confidentially. We will contact you using your
                  preferred method and never share your information without consent.
                </p>
              </div>

              <div className="rounded-3xl bg-amber-50 border border-amber-100 p-6 md:p-8">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Not for emergencies</h3>
                <p className="text-sm text-amber-900/70 leading-relaxed">
                  This website and appointment form are not for medical emergencies. If you are
                  experiencing an emergency, please contact emergency services or visit the nearest
                  hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
