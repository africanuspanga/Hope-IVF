"use client";

import { MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CLINIC.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-[#25D366]/50 animate-bounce-slow"
    >
      <MessageCircle className="h-5 w-5 fill-current" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
