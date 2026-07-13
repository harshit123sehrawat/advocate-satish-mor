"use client";

import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Experience", href: "#experience" },
  { label: "FAQs", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */
function SunIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <m.line
        x1="3"
        x2="21"
        animate={open ? { y1: 12, y2: 12, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: "50%", originY: "50%" }}
      />
      <m.line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <m.line
        x1="3"
        x2="21"
        animate={open ? { y1: 12, y2: 12, rotate: -45 } : { y1: 18, y2: 18, rotate: 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: "50%", originY: "50%" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar Component                                                   */
/* ------------------------------------------------------------------ */
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  /* ---------- scroll detection ---------- */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // Determine active section via IntersectionObserver-like logic
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ---------- lock body scroll when mobile menu open ---------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ---------- smooth-scroll handler ---------- */
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ===== Main Navbar ===== */}
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 transition-all duration-500"
          style={{ height: scrolled ? 64 : 80 }}
        >
          {/* ----- Logo ----- */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group"
            aria-label="Go to homepage"
          >
            {/* Gold-bordered circle with initials */}
            <m.span
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-500 text-sm font-bold tracking-wider font-serif"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold-600), var(--gold-500))",
                color: "var(--navy-900)",
              }}
            >
              SM
            </m.span>

            <span className="hidden sm:flex flex-col leading-tight">
              <span
                className="text-base font-semibold font-serif tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                Advocate
              </span>
              <span className="gold-gradient-text text-sm font-bold tracking-wider">
                Satish Mor
              </span>
            </span>
          </a>

          {/* ----- Desktop Nav Links ----- */}
          <ul className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 hover:text-[var(--text-accent)] ${
                      isActive
                        ? "text-[var(--text-accent)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {/* Active underline indicator */}
                    {isActive && (
                      <m.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ----- Right Actions ----- */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 hover:border-[var(--border-gold)] hover:scale-105"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--text-secondary)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <m.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SunIcon />
                  </m.span>
                ) : (
                  <m.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <MoonIcon />
                  </m.span>
                )}
              </AnimatePresence>
            </button>

            {/* CTA – Book Consultation (desktop) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="btn-primary hidden sm:inline-flex items-center gap-2 !py-2.5 !px-5 !text-sm !rounded-lg"
              aria-label="Book a consultation"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Consultation
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-300"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--text-primary)",
              }}
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </div>
        </nav>
      </m.header>

      {/* ===== Mobile Drawer Overlay ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              style={{ background: "var(--bg-overlay)" }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <m.aside
              id="mobile-nav"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(80vw,320px)] flex flex-col glass-strong"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: "var(--border-light)" }}
              >
                <span className="font-serif font-bold gold-gradient-text text-lg">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <svg
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
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                      <m.li
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                            isActive
                              ? "text-[var(--text-accent)]"
                              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                          }`}
                          style={
                            isActive
                              ? { background: "rgba(201, 168, 76, 0.08)" }
                              : undefined
                          }
                          aria-current={isActive ? "page" : undefined}
                        >
                          {/* Gold dot for active */}
                          <span
                            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                              isActive ? "bg-gold-500 scale-100" : "bg-transparent scale-0"
                            }`}
                          />
                          {link.label}
                        </a>
                      </m.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer footer – CTA */}
              <div
                className="px-5 py-5 border-t"
                style={{ borderColor: "var(--border-light)" }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="btn-primary flex w-full items-center justify-center gap-2 !py-3 !text-sm"
                  aria-label="Book a consultation"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book Consultation
                </a>
              </div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

