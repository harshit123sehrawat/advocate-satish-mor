"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const statsBarVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 1.0 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "6+", label: "Years Experience" },
  { value: "500+", label: "Consultations" },
  { value: "100+", label: "Property & Criminal Matters" },
];

/* ------------------------------------------------------------------ */
/*  Floating decorative SVGs                                           */
/* ------------------------------------------------------------------ */

function ScalesOfJustice({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* pillar */}
      <line x1="36" y1="14" x2="36" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* base */}
      <line x1="24" y1="58" x2="48" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* beam */}
      <line x1="14" y1="22" x2="58" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* left pan */}
      <path d="M14 22 L8 38 Q14 44 20 38 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* right pan */}
      <path d="M58 22 L52 38 Q58 44 64 38 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* top ornament */}
      <circle cx="36" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function Gavel({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* handle */}
      <line x1="16" y1="48" x2="36" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* head */}
      <rect
        x="32"
        y="16"
        width="20"
        height="10"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(45 42 21)"
      />
      {/* sound block */}
      <line x1="10" y1="54" x2="28" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="8" y="52" width="22" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function LegalDocument({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="56"
      height="68"
      viewBox="0 0 56 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* page with folded corner */}
      <path
        d="M6 4 H38 L50 16 V64 H6 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* fold */}
      <path d="M38 4 V16 H50" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* text lines */}
      <line x1="14" y1="26" x2="42" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="14" y1="34" x2="42" y2="34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="14" y1="42" x2="34" y2="42" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* seal circle */}
      <circle cx="34" cy="54" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Phone icon for Call Now button                                     */
/* ------------------------------------------------------------------ */

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden hero-pattern"
    >
      {/* ---- subtle dot-grid background ---- */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border-medium) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ---- floating decorative SVGs ---- */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden="true">
        {/* Scales – top-left area */}
        <div className="absolute top-[14%] left-[6%] animate-float text-gold-500/20 dark:text-gold-400/15">
          <ScalesOfJustice />
        </div>

        {/* Gavel – right side */}
        <div className="absolute top-[28%] right-[8%] animate-float-slow text-navy-400/20 dark:text-navy-300/15">
          <Gavel />
        </div>

        {/* Document – bottom-left */}
        <div className="absolute bottom-[22%] left-[12%] animate-float-slow text-gold-500/15 dark:text-gold-400/10">
          <LegalDocument />
        </div>

        {/* Extra scales – bottom-right, smaller */}
        <div className="absolute bottom-[30%] right-[14%] animate-float text-navy-300/15 dark:text-navy-200/10 scale-75">
          <ScalesOfJustice />
        </div>
      </div>

      {/* ---- main content ---- */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-8 lg:px-12 pt-28 pb-16 md:pt-32 md:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* gold divider accent */}
        <motion.div variants={fadeUp} className="gold-divider mb-6" />

        {/* heading */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] tracking-tight max-w-4xl"
        >
          <strong>Advocate Satish Mor</strong>  Experienced <span className="gold-gradient-text">Criminal &amp; Civil Lawyer</span> in Punjab and Haryana High Court
        </motion.h1>

        {/* subheading */}
        <motion.div
          variants={fadeUp}
          className="mt-8 mx-auto w-full max-w-3xl flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 text-base sm:text-lg lg:text-xl font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          <span className="flex items-center gap-2"><span className="text-[var(--gold-500)]">•</span> Criminal Defense</span>
          <span className="flex items-center gap-2"><span className="text-[var(--gold-500)]">•</span> Bail Matters</span>
          <span className="flex items-center gap-2"><span className="text-[var(--gold-500)]">•</span> Trial Advocacy</span>
          <span className="flex items-center gap-2"><span className="text-[var(--gold-500)]">•</span> Property Disputes</span>
          <span className="flex items-center gap-2"><span className="text-[var(--gold-500)]">•</span> Civil Litigation</span>
          <span className="flex items-center gap-2"><span className="text-[var(--gold-500)]">•</span> Legal Consultation</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary text-center text-base">
            Book Consultation
          </a>

          <a
            href="tel:+919416280805"
            className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
          >
            <PhoneIcon />
            Call Now
          </a>
        </motion.div>
      </motion.div>

      {/* ---- stats bar ---- */}
      <motion.div
        className="relative z-10 w-full shrink-0"
        variants={statsBarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pb-10 md:pb-14">
          <div className="glass-card rounded-2xl px-6 py-6 md:px-10 md:py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-[var(--border-light)]">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statItem}
                className="flex flex-col items-center text-center px-4"
              >
                <span
                  className="text-3xl md:text-4xl font-bold font-serif gold-gradient-text"
                >
                  {stat.value}
                </span>
                <span
                  className="mt-1 text-sm md:text-base"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ---- bottom gradient overlay for section transition ---- */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-[5]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
      />
    </header>
  );
}

