"use client";

import { m } from "framer-motion";
import {
  StaggerContainer,
  staggerItem,
  FadeInUp,
} from "@/components/animations/AnimationWrappers";

/* ───── Practice area data ───── */
interface PracticeArea {
  title: string;
  items: string[];
}

const criminalLaw: PracticeArea = {
  title: "Criminal Law",
  items: [
    "Bail Applications (Regular & Anticipatory Bail)",
    "Criminal Trials",
    "FIR Quashing",
    "Cheque Bounce Cases (NI Act)",
    "White Collar Crimes",
    "Cyber Crime Matters",
    "Domestic Violence Cases",
    "IPC/BNS Offences",
    "Criminal Appeals & Revisions",
  ],
};

const propertyLaw: PracticeArea = {
  title: "Property Law",
  items: [
    "Property Disputes",
    "Title Verification",
    "Sale Deed & Registry",
    "Partition Suits",
    "Land Disputes",
    "Builder Disputes",
    "Property Documentation",
    "Mutation & Revenue Matters",
  ],
};

function AreaCard({ area, delay, index }: { area: PracticeArea, delay: number, index: number }) {
  return (
    <m.article
      variants={staggerItem}
      className="glass-card group relative rounded-2xl p-6 sm:p-8 h-full flex flex-col text-left"
    >
      {/* Gold accent number */}
      <span
        className="absolute right-6 top-6 font-serif text-5xl font-bold leading-none opacity-10 transition-opacity duration-300 group-hover:opacity-20"
        style={{ color: "var(--gold-500)" }}
      >
        0{index + 1}
      </span>

      {/* Icon container */}
      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-colors duration-300 shadow-lg"
        style={{
          background: "linear-gradient(135deg, var(--gold-500), var(--gold-400))",
          color: "var(--navy-900)",
        }}
      >
        {index === 0 ? (
          // Criminal Law Icon (Scales/Gavel like)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ) : (
          // Property Law Icon (Building)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        )}
      </div>

      {/* Title */}
      <h3
        className="mb-6 font-serif text-2xl font-bold leading-snug"
        style={{ color: "var(--text-primary)" }}
      >
        {area.title}
      </h3>

      {/* List */}
      <ul className="flex flex-col gap-3">
        {area.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 text-gold-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-sm sm:text-base leading-snug font-medium text-[var(--text-secondary)]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="mt-auto pt-8">
        <a 
          href={index === 0 ? "/criminal-law" : "/property-law"}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-500 hover:text-gold-400 transition-colors duration-300"
        >
          View Service Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Hover gold-glow border overlay */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1.5px var(--gold-500), 0 0 24px rgba(201,168,76,0.12)",
        }}
      />
    </m.article>
  );
}

/* ───── Component ───── */
export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "var(--gold-500)" }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--navy-400)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <FadeInUp className="mb-16 flex flex-col items-center text-center w-full">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--text-accent)" }}
          >
            Comprehensive Legal Services
          </p>

          <h2 className="section-title">
            Practice <span className="gold-gradient-text">Areas</span>
          </h2>

          <div className="gold-divider mx-auto mt-2" />

          <p className="section-subtitle mx-auto mt-4 max-w-2xl">
            Expert legal representation across a wide spectrum of criminal and property law matters with a proven track record of success at the High Court and District Courts.
          </p>
        </FadeInUp>

        {/* ── Card grid ── */}
        <StaggerContainer
          className="grid gap-8 lg:gap-12 md:grid-cols-2 items-stretch max-w-5xl mx-auto"
          staggerDelay={0.1}
        >
          <AreaCard area={criminalLaw} delay={0.1} index={0} />
          <AreaCard area={propertyLaw} delay={0.2} index={1} />
        </StaggerContainer>
      </div>
    </section>
  );
}

