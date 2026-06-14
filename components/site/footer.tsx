import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/site-data";
import { SERVICES } from "@/lib/services-data";

export function Footer() {
  const quickLinks = NAV_LINKS.filter((l) => ["/", "/about", "/services", "/doctors", "/appointment", "/contact"].includes(l.href));
  const serviceLinks = SERVICES.slice(0, 7);

  return (
    <footer className="bg-deep-text text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" aria-label="Hope IVF International home">
              <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-2xl bg-white transition-transform hover:scale-105">
                <Image src="/logo.png" alt={`${CLINIC.name} logo`} fill sizes="(max-width: 768px) 80px, 96px" className="object-contain p-1" />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              Compassionate fertility and women’s health care in Dar es Salaam, Tanzania. Private
              consultations, IVF guidance, and personalized treatment planning.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-magenta" />
                <span>{CLINIC.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-magenta" />
                <span>{CLINIC.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-brand-magenta" />
                <span>{CLINIC.whatsapp}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-magenta" />
                <span>{CLINIC.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-brand-magenta" />
                <span>{CLINIC.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-brand-magenta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 hover:text-brand-magenta transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-brand-magenta transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/70 hover:text-brand-magenta transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-disclaimer"
                  className="text-sm text-white/70 hover:text-brand-magenta transition-colors"
                >
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed mb-3">
            Information on this website is for general education only and does not replace
            consultation with a qualified medical professional. Treatment suitability depends on
            individual medical assessment.
          </p>
          <p className="text-xs text-white/50 leading-relaxed mb-6">
            This website and appointment form are not for medical emergencies. If you are
            experiencing a medical emergency, please contact emergency services or visit the nearest
            hospital immediately.
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
