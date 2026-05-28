"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalMotion() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        ".section-heading, .section-copy, .default-card, .media-card, .story-card, .table-card, .contact-form, .field-input",
        { autoAlpha: 1, y: 0 }
      );
      return;
    }

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf([
      ".section-heading",
      ".section-copy",
      ".default-card",
      ".media-card",
      ".story-card",
      ".table-card",
      ".contact-form",
      ".field-input",
    ]);

    const revealTargets = gsap.utils.toArray<HTMLElement>(
      ".section-heading, .section-copy, .default-card, .media-card, .story-card, .table-card, .contact-form"
    );

    revealTargets.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: isMobile ? 16 : 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: isMobile ? 0.45 : 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: isMobile ? "top 94%" : "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const inputTargets = gsap.utils.toArray<HTMLElement>(".field-input");
    inputTargets.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: isMobile ? 10 : 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: isMobile ? 0.3 : 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: isMobile ? "top 98%" : "top 94%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
