"use client";

import Image from "next/image";
import { CLINIC } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CLINIC.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-white p-1.5 pr-5 shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-[#25D366]/50 animate-bounce-slow"
    >
      <span className="relative block h-12 w-12 overflow-hidden rounded-full">
        <Image
          src="/whatsapp.png"
          alt=""
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>
      <span className="text-sm font-semibold text-deep-text hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
