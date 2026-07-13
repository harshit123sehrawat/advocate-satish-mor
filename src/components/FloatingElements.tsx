"use client";

import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";

/* ================================================================
   1. WhatsApp Floating Button
   ================================================================ */
export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Always visible when near the top, otherwise show on scroll down
          if (currentScrollY < 100) {
            setIsVisible(true);
          } else {
            setIsVisible(currentScrollY > lastScrollY);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.a
          href="https://wa.me/919416280805"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full
                     bg-[#25d366] shadow-[0_4px_20px_rgba(37,211,102,0.4)]
                     hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)]
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500
                     md:bottom-6 md:right-6"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25d366] opacity-20" />

          {/* WhatsApp SVG icon */}
          <svg
            className="relative z-10 h-7 w-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </m.a>
      )}
    </AnimatePresence>
  );
}

/* ================================================================
   2. Back-to-Top Button
   ================================================================ */
export function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-[90px] right-6 z-50 flex h-11 w-11 items-center justify-center
                     rounded-full border border-gold-500/30
                     bg-gradient-to-br from-gold-600 to-gold-500
                     text-navy-900 shadow-[0_4px_20px_rgba(201,168,76,0.3)]
                     hover:shadow-[0_8px_30px_rgba(201,168,76,0.45)]
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500
                     dark:from-gold-500 dark:to-gold-400
                     md:bottom-[90px] md:right-6"
          initial={{ opacity: 0, scale: 0.4, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Arrow Up Icon */}
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </m.button>
      )}
    </AnimatePresence>
  );
}

/* ================================================================
   3. Mobile Consultation Bar
   ================================================================ */
export function MobileConsultationBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show bar after a small scroll so it doesn't appear on initial load
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          className="fixed inset-x-0 bottom-0 z-40 md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
        >
          {/* Subtle top border glow */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

          <div
            className="flex items-stretch gap-0 bg-navy-900/95 backdrop-blur-lg
                        dark:bg-navy-900/98"
          >
            {/* Call Now */}
            <a
              href="tel:+919416280805"
              className="flex flex-1 items-center justify-center gap-2 px-4 py-3
                         text-sm font-semibold text-white transition-colors
                         active:bg-navy-700"
              aria-label="Call Now"
            >
              {/* Phone Icon */}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Now</span>
            </a>

            {/* Divider */}
            <div className="w-px self-stretch bg-white/10" />

            {/* Book Consultation */}
            <a
              href="#contact"
              className="flex flex-1 items-center justify-center gap-2 px-4 py-3
                         text-sm font-semibold text-navy-900
                         bg-gradient-to-r from-gold-500 to-gold-400
                         active:from-gold-600 active:to-gold-500
                         dark:text-navy-900"
              aria-label="Book Consultation"
            >
              {/* Calendar Icon */}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Book Consultation</span>
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}




