"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    src: "/videos/hero-1.mp4",
    poster: "/videos/hero-1-poster.jpg",
    label: "Hope IVF International: an overview of our fertility services",
    caption: "Our fertility services",
  },
  {
    src: "/videos/hero-2.mp4",
    poster: "/videos/hero-2-poster.jpg",
    label: "5D ultrasound scanning, now available at Hope IVF International",
    caption: "5D ultrasound — now available",
  },
];

export function HeroSlider() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Mobile browsers only autoplay a video that is muted at the *property*
  // level — React does not reliably set that through the attribute alone.
  const play = useCallback((video: HTMLVideoElement) => {
    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => {
      // Autoplay can still be blocked (e.g. iOS Low Power Mode). Retry on the
      // first interaction so the slider starts without needing a refresh.
      const resume = () => {
        video.play().catch(() => {});
        window.removeEventListener("touchstart", resume);
        window.removeEventListener("click", resume);
      };
      window.addEventListener("touchstart", resume, { once: true });
      window.addEventListener("click", resume, { once: true });
    });
  }, []);

  // Each video restarts from the top when it becomes the active slide. The
  // outgoing one is only paused, so it holds its last frame while sliding out.
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) {
        video.currentTime = 0;
      } else {
        video.pause();
      }
    });
  }, [active]);

  useEffect(() => {
    const video = videoRefs.current[active];
    if (!video) return;
    if (paused) video.pause();
    else play(video);
  }, [active, paused, play]);

  // Hold back the other clips until the first one is rolling, so the page does
  // not spend the visitor's data on all of them at once.
  const warmNextSlides = () => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === 0 || video.preload === "auto") return;
      video.preload = "auto";
      video.load();
    });
  };

  return (
    <div className="relative">
      <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/70 bg-slate-100 shadow-2xl shadow-slate-300/50">
        {SLIDES.map((slide, index) => (
          <video
            key={slide.src}
            ref={(node) => {
              videoRefs.current[index] = node;
            }}
            src={slide.src}
            poster={slide.poster}
            aria-label={slide.label}
            aria-hidden={index !== active}
            muted
            playsInline
            autoPlay={index === 0}
            preload={index === 0 ? "auto" : "metadata"}
            onPlaying={index === 0 ? warmNextSlides : undefined}
            onEnded={() => setActive((current) => (current + 1) % SLIDES.length)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translateX(${(index - active) * 100}%)` }}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 px-2">
        <p className="text-sm font-semibold text-deep-text/70">{SLIDES[active].caption}</p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? "Play video" : "Pause video"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-teal/20 bg-white text-brand-teal transition-colors hover:bg-brand-teal-light"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>

          <div className="flex gap-2">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show video ${index + 1}: ${slide.caption}`}
                aria-current={index === active}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-8 bg-brand-magenta"
                    : "w-2.5 bg-deep-text/20 hover:bg-deep-text/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
