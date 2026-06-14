"use client";

import { useState } from "react";
import { Calendar, CheckCircle, Loader2 } from "lucide-react";

const REASONS = [
  "Fertility consultation",
  "IVF consultation",
  "IUI consultation",
  "Male fertility concern",
  "PCOS",
  "Fibroids",
  "Endometriosis",
  "Gynecology consultation",
  "Other",
];

const CONTACT_METHODS = ["Phone", "WhatsApp", "Email"];

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    email: "",
    city: "",
    preferredDate: "",
    preferredTime: "",
    preferredDoctor: "",
    reason: "",
    tryingFor: "",
    ageRange: "",
    previousTests: "",
    contactMethod: "WhatsApp",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with real integration (Supabase, email service, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-brand-teal-light border border-brand-teal/10 p-8 md:p-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-deep-text mb-3">Thank You</h3>
        <p className="text-deep-text/70 max-w-md mx-auto">
          Your appointment request has been received. Our team will contact you privately to confirm
          your visit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-semibold text-deep-text">
            Full name <span className="text-brand-magenta">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-deep-text">
            Phone number <span className="text-brand-magenta">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="+255 XXX XXX XXX"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-sm font-semibold text-deep-text">
            WhatsApp number
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="+255 XXX XXX XXX"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-deep-text">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-semibold text-deep-text">
            City / country
          </label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="Dar es Salaam, Tanzania"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="preferredDate" className="text-sm font-semibold text-deep-text">
            Preferred appointment date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="preferredTime" className="text-sm font-semibold text-deep-text">
            Preferred time
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="preferredDoctor" className="text-sm font-semibold text-deep-text">
            Preferred doctor (optional)
          </label>
          <input
            id="preferredDoctor"
            name="preferredDoctor"
            value={formData.preferredDoctor}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="Any available doctor"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-semibold text-deep-text">
            Reason for visit <span className="text-brand-magenta">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
          >
            <option value="">Select a reason</option>
            {REASONS.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="tryingFor" className="text-sm font-semibold text-deep-text">
            Trying to conceive for how long?
          </label>
          <input
            id="tryingFor"
            name="tryingFor"
            value={formData.tryingFor}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="e.g., 1 year"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="ageRange" className="text-sm font-semibold text-deep-text">
            Age range (optional)
          </label>
          <input
            id="ageRange"
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
            placeholder="e.g., 30-35"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="previousTests" className="text-sm font-semibold text-deep-text">
            Have you done previous fertility tests?
          </label>
          <select
            id="previousTests"
            name="previousTests"
            value={formData.previousTests}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="contactMethod" className="text-sm font-semibold text-deep-text">
            Preferred contact method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all"
          >
            {CONTACT_METHODS.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-deep-text">
          Additional message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-deep-text placeholder:text-deep-text/40 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 outline-none transition-all resize-none"
          placeholder="Share anything else we should know..."
        />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-magenta focus:ring-brand-magenta"
        />
        <label htmlFor="consent" className="text-xs text-deep-text/70 leading-relaxed">
          I agree to be contacted by Hope IVF International regarding my appointment request. I
          understand this form is not for emergencies.
        </label>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Calendar className="h-5 w-5" />
              Request Appointment
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-xs text-deep-text/50">
        This form is for appointment requests only and is not monitored for medical emergencies.
      </p>
    </form>
  );
}
