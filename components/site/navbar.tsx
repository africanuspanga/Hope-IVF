"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-pink-100/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo only */}
          <Link href="/" className="flex items-center group" aria-label="Hope IVF International home">
            <div className="relative h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Hope IVF International"
                fill
                sizes="(max-width: 1024px) 56px, 80px"
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-magenta ${
                  scrolled ? "text-deep-text/80" : "text-deep-text/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA only */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-brand-magenta px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark hover:scale-[1.02] hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-deep-text hover:bg-pink-50 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-pink-100/60 bg-white/95 backdrop-blur-xl shadow-xl px-4 py-5">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-deep-text hover:bg-pink-50 hover:text-brand-magenta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 border-t border-pink-100 pt-5">
              <a
                href="tel:+255XXXXXXXXX"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal-light px-5 py-3 text-sm font-semibold text-brand-teal transition-all hover:bg-brand-teal/10"
              >
                <Phone className="h-4 w-4" />
                Call Clinic
              </a>
              <Link
                href="/appointment"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-magenta px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 transition-all hover:bg-brand-magenta-dark"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
