"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/hero/lab-microscope.jpg",
    alt: "Embryologist examining a sample under the microscope in the Hope IVF International laboratory",
    caption: "Our embryology laboratory",
  },
  {
    src: "/images/hero/embryology-lab.jpg",
    alt: "Microscope and incubator in the Hope IVF International embryology laboratory",
    caption: "Modern equipment, carefully maintained",
  },
  {
    src: "/images/hero/cryo-storage.jpg",
    alt: "Embryologist opening a cryogenic storage tank at Hope IVF International",
    caption: "On-site cryopreservation",
  },
];

const INTERVAL_MS = 6000;

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Honor the OS "reduce motion" setting — hold the first slide instead of
    // cycling for people who are sensitive to movement.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 bg-slate-100 shadow-2xl shadow-slate-300/50">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Caption scrim */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-text/85 via-deep-text/40 to-transparent pt-20 pb-6 px-6">
          <div className="flex items-end justify-between gap-4">
            <p className="text-sm font-semibold text-white drop-shadow-sm">
              {SLIDES[active].caption}
            </p>
            <div className="flex shrink-0 gap-2">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === active}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
