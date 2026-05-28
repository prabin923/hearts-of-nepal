 "use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const pageRef = useRef<HTMLElement | null>(null);
  const slides = [
    {
      src: "/assets/gallery-1.jpg",
      alt: "Heart of Nepal community gathering",
      caption: "Community-led programs with measurable impact",
    },
    {
      src: "/assets/midday-1.jpg",
      alt: "Students receiving midday meals",
      caption: "Midday meals improving attendance and concentration",
    },
    {
      src: "/assets/education-1.jpg",
      alt: "Scholarship support for students",
      caption: "Scholarships that unlock long-term education outcomes",
    },
    {
      src: "/assets/financial-1.jpg",
      alt: "Women empowerment training in Nepal",
      caption: "Women empowerment creating sustainable local leadership",
    },
    {
      src: "/assets/gallery-extra-1.jpg",
      alt: "Community activity in Nepal",
      caption: "Field coordination with local partners and schools",
    },
    {
      src: "/assets/gallery-extra-2.jpg",
      alt: "Community program event",
      caption: "Grassroots engagement across target communities",
    },
    {
      src: "/assets/gallery-extra-3.jpg",
      alt: "Program impact snapshot",
      caption: "Integrated education and nutrition interventions",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        ".gsap-hero-eyebrow, .gsap-hero-title, .gsap-hero-copy, .gsap-hero-actions .btn, .gsap-hero-metrics .metric-card, .gsap-reveal",
        { opacity: 1, y: 0, scale: 1 }
      );
      return;
    }

    const cleanupFns: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-hero-eyebrow",
        { y: isMobile ? 14 : 24 },
        { y: 0, duration: isMobile ? 0.42 : 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        ".gsap-hero-title",
        { y: isMobile ? 20 : 36 },
        {
          y: 0,
          duration: isMobile ? 0.6 : 0.9,
          ease: "power3.out",
          delay: isMobile ? 0.04 : 0.08,
        }
      );

      gsap.fromTo(
        ".gsap-hero-copy",
        { y: isMobile ? 14 : 24 },
        {
          y: 0,
          duration: isMobile ? 0.48 : 0.7,
          ease: "power3.out",
          delay: isMobile ? 0.1 : 0.16,
        }
      );

      gsap.fromTo(
        ".gsap-hero-actions .btn",
        { y: isMobile ? 10 : 18 },
        {
          y: 0,
          duration: isMobile ? 0.36 : 0.55,
          ease: "power2.out",
          delay: isMobile ? 0.14 : 0.22,
          stagger: isMobile ? 0.05 : 0.08,
        }
      );

      gsap.fromTo(
        ".gsap-hero-metrics .metric-card",
        { y: isMobile ? 10 : 18, scale: 0.98 },
        {
          y: 0,
          scale: 1,
          duration: isMobile ? 0.35 : 0.5,
          ease: "power2.out",
          delay: isMobile ? 0.18 : 0.28,
          stagger: isMobile ? 0.04 : 0.07,
        }
      );

      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: isMobile ? 18 : 36 },
          {
            y: 0,
            duration: isMobile ? 0.5 : 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: isMobile ? "top 94%" : "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      if (!isMobile) {
        gsap.utils.toArray<HTMLElement>(".btn").forEach((button) => {
        const onEnter = () => {
          gsap.to(button, {
            y: -3,
            scale: 1.01,
            duration: 0.22,
            ease: "power2.out",
            overwrite: "auto",
          });
        };
        const onLeave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.24,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        button.addEventListener("mouseenter", onEnter);
        button.addEventListener("mouseleave", onLeave);
        cleanupFns.push(() => {
          button.removeEventListener("mouseenter", onEnter);
          button.removeEventListener("mouseleave", onLeave);
        });
      });
      }

      if (!isMobile) {
        gsap
          .utils.toArray<HTMLElement>(".media-card, .default-card, .metric-card")
          .forEach((card) => {
          const setX = gsap.quickTo(card, "x", { duration: 0.25, ease: "power2.out" });
          const setY = gsap.quickTo(card, "y", { duration: 0.25, ease: "power2.out" });
          const setRotX = gsap.quickTo(card, "rotationX", {
            duration: 0.25,
            ease: "power2.out",
          });
          const setRotY = gsap.quickTo(card, "rotationY", {
            duration: 0.25,
            ease: "power2.out",
          });

          const onMove = (event: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = (event.clientX - centerX) / (rect.width / 2);
            const dy = (event.clientY - centerY) / (rect.height / 2);

            setX(dx * 4);
            setY(dy * 4);
            setRotX(-dy * 2);
            setRotY(dx * 2);
          };

          const onLeave = () => {
            setX(0);
            setY(0);
            setRotX(0);
            setRotY(0);
          };

          card.addEventListener("mousemove", onMove);
          card.addEventListener("mouseleave", onLeave);
          cleanupFns.push(() => {
            card.removeEventListener("mousemove", onMove);
            card.removeEventListener("mouseleave", onLeave);
          });
        });
      }
    }, pageRef);

    return () => {
      cleanupFns.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!pageRef.current) return;

    const activeCaption = pageRef.current.querySelector(
      ".slider-slide-active .slider-caption"
    );
    if (!activeCaption) return;

    gsap.fromTo(
      activeCaption,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [activeSlide]);

  const goToPrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 45;

    if (Math.abs(delta) < threshold) return;
    if (delta > 0) {
      goToNext();
    } else {
      goToPrev();
    }
  };

  const steps = [
    {
      number: "01",
      title: "Assess local baseline",
      description:
        "Start with school and community health mapping to identify nutrition, learning, and safety gaps.",
    },
    {
      number: "02",
      title: "Unify all field data",
      description:
        "Bring school records, meal logs, and scholarship outcomes into one transparent dashboard.",
    },
    {
      number: "03",
      title: "Build action protocol",
      description:
        "Create evidence-backed intervention plans for midday meals, scholarships, and women-led livelihoods.",
    },
    {
      number: "04",
      title: "Support and retest",
      description:
        "Deploy locally, measure impact quarterly, then refine with partners and community leaders.",
    },
  ];

  const membershipItems = [
    "School nutrition sponsorship tracking",
    "Scholarship impact and student progression updates",
    "Women empowerment program milestones",
    "Field media reports and quarterly reviews",
    "Partner helpdesk and rapid response coordination",
    "Priority onboarding for volunteer and donor teams",
  ];

  return (
    <main className="page-shell" ref={pageRef}>
      <div className="promo-bar">
        <div className="content-container promo-inner">
          <p className="promo-text">
            Support campaign: expand 3 districts before monsoon season.
          </p>
          <a href="#membership" className="promo-link">
            Become a member
          </a>
        </div>
      </div>

      <section id="home" className="hero">
        <img
          src="/assets/gallery-1.jpg"
          alt="Community members in Nepal"
          className="hero-media"
        />
        <div className="content-container hero-inner">
          <p className="eyebrow gsap-hero-eyebrow">Health Intelligence for Communities</p>
          <h1 className="hero-title gsap-hero-title">
            Get better at building healthier communities, every year.
          </h1>
          <p className="hero-copy gsap-hero-copy">
            A precise, data-informed social impact platform for nutrition,
            education, and women empowerment across Nepal.
          </p>
          <div className="button-row gsap-hero-actions">
            <a href="#membership" className="btn btn-primary">
              Become a member
            </a>
            <a href="#programs" className="btn btn-secondary">
              See how it works
            </a>
          </div>

          <div className="hero-metrics gsap-hero-metrics">
            <article className="metric-card">
              <p className="metric-value">1,200+</p>
              <p className="metric-label">children receiving daily meals</p>
            </article>
            <article className="metric-card">
              <p className="metric-value">340+</p>
              <p className="metric-label">students supported by scholarships</p>
            </article>
            <article className="metric-card">
              <p className="metric-value">80+</p>
              <p className="metric-label">women in empowerment cohorts</p>
            </article>
          </div>
        </div>
      </section>

      <section id="programs" className="section section-split gsap-reveal">
        <div className="content-container">
          <div className="split-grid">
            <div>
              <h2 className="section-heading">How it works</h2>
              <p className="section-copy">
                Inspired by world-class health product clarity, adapted for
                social impact delivery in Nepal.
              </p>
              <div className="button-row mt-5">
                <a href="/our-work" className="btn btn-secondary">
                  Explore all programs
                </a>
                <a href="/impact" className="btn btn-ghost-light">
                  View impact dashboard
                </a>
              </div>
            </div>

            <div className="steps-grid">
              {steps.map((step) => (
                <article key={step.number} className="default-card">
                  <p className="step-index">{step.number}</p>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-copy">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section gsap-reveal">
        <div className="content-container split-grid why-grid">
          <div>
            <h2 className="section-heading">Why we exist</h2>
            <p className="section-copy">
              Structural caste and gender inequalities still limit access to
              nutrition, quality education, and financial independence for many
              families in Nepal.
            </p>
            <p className="section-copy">
              Heart of Nepal addresses these exclusions through practical,
              evidence-backed local interventions.
            </p>
          </div>
          <div className="media-image-wrap">
            <img
              src="/assets/why-we-exist.jpg"
              alt="Why Heart of Nepal exists"
              className="media-image"
            />
          </div>
        </div>
      </section>

      <section className="section gsap-reveal">
        <div className="content-container">
          <h2 className="section-heading">Model of change</h2>
          <p className="section-copy">
            Three integrated pillars drive long-term community outcomes.
          </p>
          <div className="card-grid">
            <article className="media-card">
              <div className="media-image-wrap">
                <img src="/assets/educate.jpg" alt="Educate pillar" className="media-image" />
              </div>
              <h3 className="card-title mt-4">Educate</h3>
              <p className="card-copy">Scholarships, tuition support, and school continuity pathways.</p>
              <a href="/our-work/education-support" className="btn btn-secondary mt-4">
                Open education support
              </a>
            </article>
            <article className="media-card">
              <div className="media-image-wrap">
                <img src="/assets/nourish.jpg" alt="Nourish pillar" className="media-image" />
              </div>
              <h3 className="card-title mt-4">Nourish</h3>
              <p className="card-copy">Mid-day meal implementation to improve attendance and learning.</p>
              <a href="/our-work/midday-meals" className="btn btn-secondary mt-4">
                Open mid-day meals
              </a>
            </article>
            <article className="media-card">
              <div className="media-image-wrap">
                <img src="/assets/empower.jpg" alt="Empower pillar" className="media-image" />
              </div>
              <h3 className="card-title mt-4">Empower</h3>
              <p className="card-copy">Women-led savings groups and household resilience pathways.</p>
              <a href="/our-work/financial-empowerment" className="btn btn-secondary mt-4">
                Open empowerment work
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="stories" className="section gsap-reveal">
        <div className="content-container media-section">
          <article className="media-card">
            <div className="media-image-wrap">
              <img
                src="/assets/midday-2.jpg"
                alt="Midday meal program in a school"
                className="media-image"
              />
            </div>
            <h3 className="card-title mt-4">Nutrition at Scale</h3>
            <p className="card-copy">
              Mid-day Meals has served 730,000+ meals and remains a primary
              intervention for attendance and concentration.
            </p>
            <div className="button-row mt-4">
              <a href="/impact" className="btn btn-ghost-light">
                View impact report
              </a>
              <a href="/our-work/midday-meals" className="btn btn-secondary">
                Program details
              </a>
            </div>
          </article>
          <article className="media-card">
            <div className="media-image-wrap">
              <img
                src="/assets/financial-2.jpg"
                alt="Women participating in empowerment training"
                className="media-image"
              />
            </div>
            <h3 className="card-title mt-4">Women-Led Change</h3>
            <p className="card-copy">
              Women&apos;s self-help groups are tracked through recurring
              savings and participation dashboards in the impact view.
            </p>
            <div className="button-row mt-4">
              <a href="/stories" className="btn btn-ghost-light">
                Read full story
              </a>
              <a href="/our-work/financial-empowerment" className="btn btn-secondary">
                Program details
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section gallery-section gsap-reveal">
        <div className="content-container">
          <h2 className="section-heading">Moments from the field</h2>
          <p className="section-copy">
            Stories captured through our education, nutrition, and empowerment
            initiatives across Nepal.
          </p>

          <div className="slider-shell">
            <div
              className="slider-viewport"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {slides.map((slide, index) => (
                <figure
                  key={slide.src}
                  className={`slider-slide ${
                    index === activeSlide ? "slider-slide-active" : ""
                  }`}
                >
                  <img src={slide.src} alt={slide.alt} className="slider-image" />
                  <figcaption className="slider-caption">{slide.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="slider-controls">
              <button
                type="button"
                aria-label="Previous slide"
                className="slider-arrow"
                onClick={goToPrev}
              >
                ‹
              </button>
              <div className="slider-dots">
                {slides.map((slide, index) => (
                  <button
                    key={`${slide.src}-dot`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    className={`slider-dot ${
                      index === activeSlide ? "slider-dot-active" : ""
                    }`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next slide"
                className="slider-arrow"
                onClick={goToNext}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="section gsap-reveal">
        <div className="content-container">
          <h2 className="section-heading">Membership details</h2>
          <p className="section-copy">
            Your membership includes practical tools and transparent updates,
            designed for donors, volunteers, and partners.
          </p>
          <div className="membership-layout">
            <div className="membership-card">
              <p className="membership-meta">MEMBERSHIP / COMMUNITY INTELLIGENCE</p>
              <h3 className="mt-2 text-[30px] font-bold leading-[1.2] tracking-[-0.338px] text-[#18181b]">
                Build a healthier future with one focused contribution.
              </h3>
              <p className="mt-2 max-w-[65ch] text-[#18181b]">
                Primary members receive quarterly impact reviews, on-ground
                project updates, and invitations to partner-led sessions.
              </p>
              <div className="button-row mt-5">
                <a href="/get-involved" className="btn btn-primary">
                  Become a Member
                </a>
                <a href="/get-involved" className="btn btn-secondary">
                  Schedule a Call
                </a>
              </div>
            </div>

            <aside className="default-card">
              <h3 className="card-title">Your membership includes</h3>
              <ul className="include-list">
                {membershipItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="/get-involved" className="btn btn-primary w-full mt-3">
                Get started
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section testimonials gsap-reveal">
        <div className="content-container">
          <h2 className="section-heading">
            Verified impact highlights
          </h2>
          <p className="section-copy">
            Grounded in implementation data from active field programs.
          </p>
          <div className="card-grid mt-7">
            <article className="default-card">
              <p className="quote">730,000+ meals served through school nutrition delivery.</p>
              <p className="quote-meta">Program: Mid-day Meals</p>
            </article>
            <article className="default-card">
              <p className="quote">Five integrated programs operate across education, nutrition, and empowerment.</p>
              <p className="quote-meta">Portfolio coverage</p>
            </article>
            <article className="default-card">
              <p className="quote">Pipaltar and Battar mother&apos;s groups are actively tracked in the impact dashboard.</p>
              <p className="quote-meta">Women&apos;s savings governance</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-final gsap-reveal">
        <div className="content-container final-cta">
          <h2 className="section-heading">Your contribution starts here</h2>
          <p className="section-copy">
            Partner with Heart of Nepal to expand evidence-backed programs in
            nutrition, education, and women empowerment.
          </p>
          <div className="button-row mt-5">
            <a href="/get-involved" className="btn btn-primary">
              Contact Team
            </a>
            <a href="/about" className="btn btn-secondary">
              Learn about our team
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
