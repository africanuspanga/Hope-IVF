import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar, FileText } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us | Hope IVF International",
  description:
    "Contact Hope IVF International in Dar es Salaam, Tanzania. Phone, WhatsApp, email, location, opening hours, and appointment booking.",
};

const WHAT_TO_BRING = [
  "Previous medical reports",
  "Ultrasound reports",
  "Hormone test results",
  "Semen analysis if available",
  "Medication list",
  "Partner details if attending together",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Hope IVF International"
        subtitle="We are here to answer your questions and help you book a private consultation."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-deep-text mb-6">Clinic Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <MapPin className="h-6 w-6 text-brand-magenta shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-deep-text mb-1">Location</h3>
                    <p className="text-sm text-deep-text/70">{CLINIC.address}</p>
                    <p className="text-xs text-deep-text/50 mt-1">Landmark and directions placeholder</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <Phone className="h-6 w-6 text-brand-magenta shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-deep-text mb-1">Phone</h3>
                    <p className="text-sm text-deep-text/70">{CLINIC.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <MessageCircle className="h-6 w-6 text-brand-magenta shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-deep-text mb-1">WhatsApp</h3>
                    <p className="text-sm text-deep-text/70">{CLINIC.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <Mail className="h-6 w-6 text-brand-magenta shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-deep-text mb-1">Email</h3>
                    <p className="text-sm text-deep-text/70">{CLINIC.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <Clock className="h-6 w-6 text-brand-magenta shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-deep-text mb-1">Opening Hours</h3>
                    <p className="text-sm text-deep-text/70">{CLINIC.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Map + What to bring */}
            <div className="space-y-8">
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-brand-magenta-light to-brand-teal-light border border-slate-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-10 w-10 text-brand-teal mx-auto mb-3" />
                  <p className="text-deep-text/60 font-medium">Google Maps placeholder</p>
                  <p className="text-xs text-deep-text/40 mt-1">
                    Embed your clinic location map here
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-soft-pink border border-pink-100/60 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <FileText className="h-6 w-6 text-brand-magenta" />
                  <h3 className="text-lg font-bold text-deep-text">What to bring to your first appointment</h3>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {WHAT_TO_BRING.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-deep-text/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-magenta" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
