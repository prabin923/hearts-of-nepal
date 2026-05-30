"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = {
  src: string;
  alt: string;
  caption: string;
};

type ImageSliderProps = {
  slides: Slide[];
  intervalMs?: number;
};

export default function ImageSlider({ slides, intervalMs = 5000 }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [next, intervalMs]);

  const onTouchEnd = (clientX: number) => {
    if (touchStart.current === null) return;
    const delta = touchStart.current - clientX;
    touchStart.current = null;
    if (Math.abs(delta) < 48) return;
    if (delta > 0) next();
    else prev();
  };

  return (
    <div className="slider">
      <div
        className="slider__viewport"
        onTouchStart={(e) => {
          touchStart.current = e.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0]?.clientX ?? 0)}
      >
        {slides.map((slide, i) => (
          <figure
            key={slide.src}
            className={`slider__slide${i === index ? " slider__slide--active" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} className="slider__image" />
            <figcaption className="slider__caption">{slide.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="slider__controls">
        <button type="button" className="slider__btn" onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <div className="slider__dots" role="tablist" aria-label="Slides">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`slider__dot${i === index ? " slider__dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" className="slider__btn" onClick={next} aria-label="Next slide">
          ›
        </button>
      </div>
    </div>
  );
}
