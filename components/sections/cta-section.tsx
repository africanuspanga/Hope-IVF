import Link from "next/link";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta via-brand-magenta to-brand-teal" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5">
          Take the first step with confidence.
        </h2>
        <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
          Speak with our team privately and book a consultation with Hope IVF International in Dar
          es Salaam.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-brand-magenta shadow-lg transition-all hover:bg-white/90 hover:scale-[1.02] w-full sm:w-auto"
          >
            <Calendar className="h-5 w-5" />
            Book Appointment
          </Link>
          <a
            href={`https://wa.me/${CLINIC.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/20 w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
          <a
            href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/20 w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call Clinic
          </a>
        </div>
      </div>
    </section>
  );
}
