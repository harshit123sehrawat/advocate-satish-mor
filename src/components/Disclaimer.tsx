"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const STORAGE_KEY = "disclaimer_accepted";

const DISCLAIMER_TEXT =
  "This website is for informational purposes only. The information provided does not constitute legal advice and should not be relied upon as such. Use of this website does not create an attorney-client relationship.";

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Disclaimer Component                                               */
/* ------------------------------------------------------------------ */
export default function Disclaimer() {
  const [visible, setVisible] = useState(false);

  /* Check localStorage after mount (avoid SSR mismatch) */
  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        // Small delay so it doesn't flash immediately on load
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage unavailable — show disclaimer anyway
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Silently fail if storage is unavailable
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-navy-900/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleAccept}
            aria-hidden="true"
          />

          {/* Disclaimer banner / modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Legal Disclaimer"
            className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 300,
            }}
          >
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden">
              {/* Glass card */}
              <div
                className="relative p-6 sm:p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,31,61,0.92) 0%, rgba(10,22,40,0.96) 100%)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  boxShadow:
                    "0 -8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Close button */}
                <button
                  onClick={handleAccept}
                  className="absolute top-4 right-4 p-1.5 rounded-full text-charcoal-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Close disclaimer"
                >
                  <CloseIcon />
                </button>

                {/* Content */}
                <div className="flex items-start gap-4">
                  {/* Shield icon */}
                  <div className="hidden sm:flex shrink-0 w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-700/10 border border-gold-500/20 text-gold-400">
                    <ShieldIcon />
                  </div>

                  <div className="flex-1 space-y-4">
                    {/* Title */}
                    <div>
                      <h2 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
                        <span className="sm:hidden text-gold-400">
                          <ShieldIcon />
                        </span>
                        Legal Disclaimer
                      </h2>
                      <div className="w-10 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mt-2" />
                    </div>

                    {/* Body text */}
                    <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed">
                      {DISCLAIMER_TEXT}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-1">
                      <motion.button
                        onClick={handleAccept}
                        className="btn-primary text-sm py-2.5 px-8 rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        I Understand
                      </motion.button>
                      <span className="text-xs text-charcoal-500">
                        By continuing, you accept this disclaimer.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative gold line at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
