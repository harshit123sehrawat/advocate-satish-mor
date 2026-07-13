"use client";

import { FadeInLeft, FadeInRight, FadeInUp } from "@/components/animations/AnimationWrappers";

/* ── Icon components ────────────────────────────────────────────── */

function GraduationCapIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
    </svg>
  );
}

function CalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function BuildingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22V12h6v10" />
      <line x1="8" y1="6" x2="8" y2="6" />
      <line x1="12" y1="6" x2="12" y2="6" />
      <line x1="16" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* ── Data ───────────────────────────────────────────────────────── */

interface Highlight {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const highlights: Highlight[] = [
  { icon: GraduationCapIcon, label: "B.A. LL.B. Qualified" },
  { icon: CalendarIcon,      label: "6+ Years Experience" },
  { icon: BuildingIcon,      label: "High Court Practice" },
  { icon: ShieldCheckIcon,   label: "Property & Criminal Expert Lawyer" },
];

/* ── Component ──────────────────────────────────────────────────── */

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Decorative background orbs */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(58,107,170,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <FadeInUp className="mb-16 flex flex-col items-center text-center w-full">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--text-accent)" }}
          >
            About
          </p>
          <h2 className="section-title">
            Dedicated Legal Excellence
          </h2>
          <div className="gold-divider mx-auto mt-2" />
        </FadeInUp>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: Photo placeholder ─────────────────────────── */}
          <FadeInLeft>
            <div className="relative w-full max-w-md mx-auto lg:ml-0">
              {/* Gold border frame */}
              <div
                className="absolute -inset-3 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold-500), var(--gold-300), var(--gold-500))",
                  opacity: 0.6,
                }}
              />

              {/* Inner photo container */}
              <div
                className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl"
                style={{
                  background:
                    "linear-gradient(160deg, var(--navy-800) 0%, var(--navy-700) 40%, var(--navy-600) 100%)",
                }}
              >
                {/* Subtle pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)",
                  }}
                />

                {/* Radial glow behind initials */}
                <div
                  className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
                  }}
                />

                {/* Initials */}
                <span
                  className="gold-gradient-text relative select-none font-serif text-8xl font-bold tracking-wider sm:text-9xl"
                >
                  SM
                </span>

                {/* Bottom vignette */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, var(--navy-900), transparent)",
                    opacity: 0.5,
                  }}
                />
              </div>

              {/* ── Experience badge ────────────────────────────── */}
              <div
                className="glass-strong absolute -bottom-5 -right-5 flex items-center gap-3 rounded-xl px-5 py-3 shadow-lg sm:-right-8"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-extrabold"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gold-600), var(--gold-400))",
                    color: "var(--navy-900)",
                  }}
                >
                  6+
                </span>
                <div className="leading-tight">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Years of
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Experience
                  </p>
                </div>
              </div>

              {/* Corner decorative accent (top‑left) */}
              <div
                className="absolute -left-2 -top-2 h-8 w-8 rounded-tl-2xl border-l-[3px] border-t-[3px]"
                style={{ borderColor: "var(--gold-400)" }}
              />
              {/* Corner decorative accent (bottom‑right) */}
              <div
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-br-2xl border-b-[3px] border-r-[3px]"
                style={{ borderColor: "var(--gold-400)" }}
              />
            </div>
          </FadeInLeft>

          {/* ── Right: Text content ─────────────────────────────── */}
          <FadeInRight>
            <div className="flex flex-col gap-6">
              {/* Bio */}
              <div
                className="text-base leading-relaxed sm:text-lg flex flex-col gap-4"
                style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
              >
                <p>
                  Advocate Satish Mor is a highly respected legal professional in Chandigarh with over 6 years of extensive experience representing clients before the Punjab &amp; Haryana High Court and District Courts.
                </p>
                <p>
                  As an expert in both <strong>Criminal Litigation</strong> and <strong>Property Litigation</strong>, he handles a diverse range of complex cases. From bail matters, FIR quashing, and criminal defense to property disputes, civil disputes, and real estate litigation, his practice is built on a foundation of strong legal research and strategic court representation.
                </p>
                <p>
                  Whether you need meticulous legal documentation, insightful client counseling, or aggressive courtroom advocacy, Advocate Mor is committed to protecting your rights and delivering ethical, results-oriented legal solutions.
                </p>
              </div>

              {/* ── Highlights 2×2 grid ───────────────────────── */}
              <div className="mt-2 grid grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="glass-card group flex items-center gap-3 rounded-xl px-4 py-4"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 group-hover:brightness-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
                        color: "var(--text-accent)",
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className="text-sm font-medium leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
