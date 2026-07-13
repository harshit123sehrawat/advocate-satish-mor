"use client";

import { FadeInUp } from "@/components/animations/AnimationWrappers";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Extensive Experience",
    description: "Deep expertise in both Criminal and Property Law matters.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Strategic Representation",
    description: "Calculated and strategic legal representation in all court proceedings.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Strong Case Preparation",
    description: "Meticulous legal research and thorough preparation for every case.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Client-Focused Advice",
    description: "Honest, practical, and highly personalized legal counsel.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Transparent Communication",
    description: "Clear and straightforward communication at all times.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Timely Case Updates",
    description: "Keeping you informed about every development in your matter.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Courtroom Advocacy",
    description: "Exceptional negotiation skills and aggressive courtroom representation.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Ethical & Confidential",
    description: "Strict adherence to confidentiality and professional ethics.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function WhyChooseUs() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Decorative background radials */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 30%, rgba(201,168,76,0.04) 0%, transparent 50%), radial-gradient(circle at 90% 70%, rgba(58,107,170,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <FadeInUp className="mb-16 flex flex-col items-center text-center w-full">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--text-accent)" }}
          >
            Our Commitment to Excellence
          </p>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="gold-divider mx-auto" />
        </FadeInUp>

        {/* ── Responsive Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {timelineItems.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1} className="flex h-full">
              <article
                className="glass-card group flex w-full flex-col rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/5 text-left h-full"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-light)",
                }}
              >
                {/* Icon */}
                <div
                  className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))",
                    color: "var(--text-accent)",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="mb-3 text-xl font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>
              </article>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
