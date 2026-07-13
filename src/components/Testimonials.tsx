"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/animations/AnimationWrappers";

/* ───── Types ───── */
interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

/* ───── Data ───── */
const testimonials: Testimonial[] = [
  {
    name: "Rajinder Singh",
    role: "Property Dispute Client, Chandigarh",
    text: "Advocate Satish Mor handled our property dispute with exceptional professionalism. His thorough knowledge of property law and dedication to our case resulted in a favorable outcome. Highly recommended for any property-related legal matter.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Civil Litigation Client, Mohali",
    text: "We were facing a complex civil case and were fortunate to have Advocate Mor represent us. His clear communication and strategic approach made the entire legal process much less stressful. Very grateful for his guidance.",
    rating: 5,
  },
  {
    name: "Gurpreet Singh",
    role: "Criminal Defense Client, Chandigarh",
    text: "When I was falsely accused, Advocate Satish Mor stood by me like a pillar of strength. His cross-examination skills and deep understanding of criminal law were exceptional. Thanks to his relentless efforts, I was fully acquitted.",
    rating: 5,
  },
  {
    name: "Harpreet Kaur",
    role: "Land Dispute Client, Panchkula",
    text: "Outstanding legal representation in our land dispute case. Advocate Mor's expertise in land ownership matters and his persistent efforts helped us secure our rightful property. A truly dedicated advocate.",
    rating: 5,
  },
  {
    name: "Vikram Sharma",
    role: "Succession Matter Client, Chandigarh",
    text: "Advocate Satish Mor provided excellent guidance in our inheritance and succession matter. His knowledge of succession law and compassionate approach during a difficult time was truly appreciated.",
    rating: 5,
  },
  {
    name: "Amandeep Gill",
    role: "Real Estate Client, Zirakpur",
    text: "Professional and reliable legal services for our real estate transaction. Advocate Mor ensured every document was properly reviewed and all legal aspects were thoroughly addressed. Peace of mind throughout the process.",
    rating: 5,
  },
];

/* ───── Helpers ───── */
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/* ───── Sub-components ───── */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < count ? "text-gold-500" : "text-charcoal-300 dark:text-charcoal-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="w-10 h-10 text-gold-500/30"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.293 0-2.397-.63-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.293 0-2.397-.63-2.917-1.179z" />
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full
                 border border-[var(--border-gold)] bg-[var(--bg-glass)]
                 backdrop-blur-md transition-all duration-300
                 hover:bg-gold-500/20 hover:border-gold-500
                 focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
    >
      <svg
        className={`w-5 h-5 text-gold-500 transition-transform duration-300
          ${direction === "prev" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        {direction === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

/* ───── Slide animation variants ───── */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

/* ═══════════════════════════════════════════
   Testimonials Section
   ═══════════════════════════════════════════ */
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  /* Navigate to a specific slide */
  const goTo = useCallback(
    (index: number, dir?: number) => {
      const newIndex = ((index % total) + total) % total;
      setDirection(dir ?? (newIndex > activeIndex ? 1 : -1));
      setActiveIndex(newIndex);
    },
    [activeIndex, total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1, 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1, -1), [activeIndex, goTo]);

  /* Auto-play (5 s) — pauses on hover */
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        setDirection(1);
        return (prev + 1) % total;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, total]);

  const current = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--gold-500) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--navy-400) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <FadeInUp>
          <div className="mb-12 text-center flex flex-col items-center">
            <span className="mb-4 inline-block rounded-full border border-[var(--border-gold)] bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-500">
              Testimonials
            </span>
            <h2 className="section-title w-full text-center">Client Testimonials</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4 text-center w-full">
              Hear from those who have trusted us with their most important legal
              matters.
            </p>
          </div>
        </FadeInUp>

        {/* ── Carousel ── */}
        <FadeInUp delay={0.2}>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* ── Navigation arrows (Absolute positioned outside card) ── */}
            <div className="hidden md:flex absolute top-1/2 -left-4 -translate-y-1/2 z-20">
              <ArrowButton direction="prev" onClick={goPrev} label="Previous testimonial" />
            </div>
            <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
              <ArrowButton direction="next" onClick={goNext} label="Next testimonial" />
            </div>

            {/* Card container — fixed height to prevent layout shifts */}
            <div className="relative mx-auto min-h-[380px] sm:min-h-[320px] max-w-[900px] w-[95%] sm:w-[85%] overflow-hidden px-2">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="glass-card flex flex-col items-center text-center mx-auto rounded-2xl p-8 sm:p-12 w-full"
                >
                  {/* Quote icon */}
                  <div className="mb-6 flex justify-center">
                    <QuoteIcon />
                  </div>

                  {/* Star rating */}
                  <div className="mb-6">
                    <StarRating count={current.rating} />
                  </div>

                  {/* Testimonial text */}
                  <blockquote
                    className="mb-10 text-base leading-relaxed sm:text-lg sm:leading-loose"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    &ldquo;{current.text}&rdquo;
                  </blockquote>

                  {/* Client info */}
                  <figcaption className="flex flex-col items-center gap-3">
                    {/* Avatar with initials */}
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-bold shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--gold-600), var(--gold-400))",
                        color: "var(--navy-900)",
                      }}
                    >
                      {getInitials(current.name)}
                    </div>

                    <div className="text-center">
                      <h4
                        className="font-semibold text-lg"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {current.name}
                      </h4>
                      <p
                        className="text-sm mt-0.5 uppercase tracking-wider font-medium"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        {current.role}
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* ── Bottom Controls (Mobile Arrows + Dots) ── */}
            <div className="mt-8 flex flex-col items-center justify-center gap-6">
              {/* Dot indicators */}
              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 bg-gold-500"
                        : "w-2.5 bg-charcoal-300 hover:bg-gold-400 dark:bg-charcoal-600"
                    }`}
                  />
                ))}
              </div>
              
              {/* Mobile Arrows */}
              <div className="flex md:hidden items-center justify-center gap-8 mt-2">
                <ArrowButton direction="prev" onClick={goPrev} label="Previous testimonial" />
                <ArrowButton direction="next" onClick={goNext} label="Next testimonial" />
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
