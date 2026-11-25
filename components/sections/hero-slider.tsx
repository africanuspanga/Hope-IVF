"use client";

/* eslint-disable @next/next/no-img-element -- slide images can be any uploaded URL */
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HeroSlide } from "@/lib/cms/content";

const IMAGE_SLIDE_MS = 7000;

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const current = slides[active] ?? slides[0];
  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);

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
      if (index === active) video.currentTime = 0;
      else video.pause();
    });
  }, [active]);

  useEffect(() => {
    const video = videoRefs.current[active];
    if (!video) return;
    if (paused) video.pause();
    else play(video);
  }, [active, paused, play]);

  // Image slides advance on a timer; video slides advance when they end.
  useEffect(() => {
    if (paused || count < 2 || current?.videoUrl) return;
    const timer = setTimeout(next, IMAGE_SLIDE_MS);
    return () => clearTimeout(timer);
  }, [active, paused, count, current, next]);

  // Hold back the other clips until the first one is rolling, so the page does
  // not spend the visitor's data on all of them at once.
  const warmNextSlides = () => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === 0 || video.preload === "auto") return;
      video.preload = "auto";
      video.load();
    });
  };

  if (!current) return null;

  return (
    <div className="relative">
      <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/70 bg-slate-100 shadow-2xl shadow-slate-300/50">
        {slides.map((slide, index) => {
          const style = { transform: `translateX(${(index - active) * 100}%)` };
          const className =
            "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out motion-reduce:transition-none";
          return slide.videoUrl ? (
            <video
              key={`${slide.videoUrl}-${index}`}
              ref={(node) => {
                videoRefs.current[index] = node;
              }}
              src={slide.videoUrl}
              poster={slide.posterUrl}
              aria-label={slide.label}
              aria-hidden={index !== active}
              muted
              playsInline
              autoPlay={index === 0}
              preload={index === 0 ? "auto" : "metadata"}
              onPlaying={index === 0 ? warmNextSlides : undefined}
              onEnded={() => count > 1 && next()}
              loop={count === 1}
              className={className}
              style={style}
            />
          ) : (
            <img
              key={`${slide.imageUrl}-${index}`}
              ref={() => {
                videoRefs.current[index] = null;
              }}
              src={slide.imageUrl}
              alt={slide.label}
              aria-hidden={index !== active}
              loading={index === 0 ? "eager" : "lazy"}
              className={className}
              style={style}
            />
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 px-2">
        <p className="text-sm font-semibold text-deep-text/70">{current.caption}</p>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slider" : "Pause slider"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-teal/20 bg-white text-brand-teal transition-colors hover:bg-brand-teal-light"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>

          {count > 1 && (
            <div className="flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}: ${slide.caption}`}
                  aria-current={index === active}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === active ? "w-8 bg-brand-magenta" : "w-2.5 bg-deep-text/20 hover:bg-deep-text/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
