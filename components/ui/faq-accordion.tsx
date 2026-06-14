"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen ? "border-brand-magenta/20 bg-white shadow-md" : "border-slate-100 bg-white/60"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-semibold text-deep-text pr-4">
                {faq.question}
              </span>
              <span
                className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "bg-brand-magenta text-white rotate-180" : "bg-slate-100 text-deep-text"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 md:px-6 md:pb-6">
                <p className="text-sm md:text-base text-deep-text/75 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
