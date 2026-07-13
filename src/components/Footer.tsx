"use client";

import { motion } from "framer-motion";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, staggerItem } from "@/components/animations/AnimationWrappers";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */
interface FooterLink {
  label: string;
  href: string;
}

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Experience", href: "#experience" },
  { label: "FAQs", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const PRACTICE_AREAS: FooterLink[] = [
  { label: "Property Disputes", href: "#practice-areas" },
  { label: "Civil Litigation", href: "#practice-areas" },
  { label: "Criminal Defense", href: "#practice-areas" },
  { label: "High Court Appeals", href: "#practice-areas" },
  { label: "Inheritance & Succession", href: "#practice-areas" },
  { label: "Legal Consultation", href: "#practice-areas" },
];

const BOTTOM_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-lg font-semibold text-white mb-5 relative inline-block">
      {children}
      <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full" />
    </h3>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-charcoal-300 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer Component                                                   */
/* ------------------------------------------------------------------ */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative">
      {/* ── Gold gradient separator ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent mt-px" />

      {/* ── Main footer content ── */}
      <div className="bg-navy-900 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(201,168,76,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(58,107,170,0.1) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8">
          {/* ── 4-column grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1 — Brand */}
            <FadeInUp delay={0} className="md:col-span-2 lg:col-span-1">
              <div className="space-y-5">
                {/* Logo */}
                <a href="#hero" className="inline-flex items-center gap-3 group">
                  <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-700 shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-shadow duration-300">
                    <span className="font-serif text-lg font-bold text-navy-900 leading-none">
                      SM
                    </span>
                  </div>
                  <span className="font-serif text-xl font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">
                    Advocate Satish Mor
                  </span>
                </a>

                {/* Description */}
                <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs">
                  Professional legal services with a focus on property law, criminal defense, and
                  civil litigation before the Punjab &amp; Haryana High Court.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-3 pt-1">
                  <SocialButton href="#" label="LinkedIn">
                    <LinkedInIcon />
                  </SocialButton>
                  <SocialButton href="#" label="Twitter / X">
                    <TwitterIcon />
                  </SocialButton>
                  <SocialButton href="#" label="Facebook">
                    <FacebookIcon />
                  </SocialButton>
                </div>
              </div>
            </FadeInUp>

            {/* Column 2 — Quick Links */}
            <FadeInUp delay={0.1}>
              <FooterColumnTitle>Quick Links</FooterColumnTitle>
              <nav aria-label="Footer Quick Links">
                <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                  {QUICK_LINKS.map((link) => (
                    <motion.div key={link.label} variants={staggerItem}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-300 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors duration-300" />
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </nav>
            </FadeInUp>

            {/* Column 3 — Practice Areas */}
            <FadeInUp delay={0.2}>
              <FooterColumnTitle>Practice Areas</FooterColumnTitle>
              <nav aria-label="Footer Practice Areas">
                <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                  {PRACTICE_AREAS.map((area) => (
                    <motion.div key={area.label} variants={staggerItem}>
                      <a
                        href={area.href}
                        className="flex items-center gap-2 text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-300 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors duration-300" />
                        {area.label}
                      </a>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </nav>
            </FadeInUp>

            {/* Column 4 — Contact */}
            <FadeInUp delay={0.3}>
              <FooterColumnTitle>Contact</FooterColumnTitle>
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+919416280805"
                  className="flex items-start gap-3 text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-300 group"
                >
                  <span className="mt-0.5 shrink-0 text-gold-500/70 group-hover:text-gold-400 transition-colors duration-300">
                    <PhoneIcon />
                  </span>
                  <span>+91 9416280805</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:advsatishmor@gmail.com"
                  className="flex items-start gap-3 text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-300 group"
                >
                  <span className="mt-0.5 shrink-0 text-gold-500/70 group-hover:text-gold-400 transition-colors duration-300">
                    <MailIcon />
                  </span>
                  <span>advsatishmor@gmail.com</span>
                </a>

                {/* Address */}
                <address className="flex items-start gap-3 text-sm text-charcoal-400 not-italic">
                  <span className="mt-0.5 shrink-0 text-gold-500/70">
                    <MapPinIcon />
                  </span>
                  <span>
                    Punjab &amp; Haryana High Court,
                    <br />
                    Chandigarh
                  </span>
                </address>
              </div>
            </FadeInUp>
          </div>

          {/* ── Separator ── */}
          <div className="mt-14 mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* ── Bottom bar ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
            <p>&copy; 2026 Advocate Satish Mor. All Rights Reserved. | Last Updated: July 2026</p>

            <div className="flex items-center gap-1.5">
              {BOTTOM_LINKS.map((link, i) => (
                <span key={link.label} className="flex items-center gap-1.5">
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                  {i < BOTTOM_LINKS.length - 1 && (
                    <span className="text-charcoal-700">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Back to top ── */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-navy-800 border border-gold-500/30 text-gold-400 shadow-lg shadow-navy-900/50 hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUpIcon />
      </motion.button>
    </footer>
  );
}
