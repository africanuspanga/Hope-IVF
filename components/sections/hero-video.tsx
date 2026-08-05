"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React does not reliably set the muted property via the attribute,
    // and mobile browsers (iOS Safari, Chrome Android) only autoplay
    // when the video element is muted at the property level.
    video.muted = true;
    video.playsInline = true;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay can be blocked (e.g. Low Power Mode); retry on first
        // user interaction so the video still starts without a refresh.
        const resume = () => {
          video.play().catch(() => {});
          window.removeEventListener("touchstart", resume);
          window.removeEventListener("click", resume);
        };
        window.addEventListener("touchstart", resume, { once: true });
        window.addEventListener("click", resume, { once: true });
      });
    };

    tryPlay();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/logo.png"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
