"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <m.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          {/* Radial glow behind logo */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2
                          rounded-full bg-gradient-to-r from-gold-500/20 to-gold-300/10 blur-3xl"
            />
          </div>

          {/* SM Initials Logo */}
          <m.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            {/* Initials */}
            <m.span
              className="font-serif text-6xl font-bold tracking-wider
                         bg-gradient-to-br from-gold-400 via-gold-500 to-gold-300
                         bg-clip-text text-transparent
                         md:text-7xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              SM
            </m.span>

            {/* Scales / Justice Icon */}
            <m.div
              className="mt-6"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <svg
                className="h-10 w-10 text-gold-500/80"
                fill="none"
                viewBox="0 0 48 48"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {/* Balance beam center */}
                <line x1="24" y1="6" x2="24" y2="42" strokeLinecap="round" />
                {/* Base */}
                <line x1="16" y1="42" x2="32" y2="42" strokeLinecap="round" strokeWidth={2} />
                {/* Beam */}
                <m.line
                  x1="6"
                  y1="16"
                  x2="42"
                  y2="16"
                  strokeLinecap="round"
                  strokeWidth={2}
                  initial={{ rotate: -8 }}
                  animate={{ rotate: [-8, 8, -4, 4, 0] }}
                  transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                  style={{ transformOrigin: "24px 16px" }}
                />
                {/* Left pan */}
                <m.path
                  d="M6 16 C6 16, 2 26, 10 26 C18 26, 14 16, 14 16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                />
                {/* Right pan */}
                <m.path
                  d="M34 16 C34 16, 30 26, 38 26 C46 26, 42 16, 42 16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                />
                {/* Top ornament */}
                <circle cx="24" cy="6" r="2.5" fill="currentColor" stroke="none" />
              </svg>
            </m.div>

            {/* Underline */}
            <m.div
              className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-gold-500 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            />

            {/* Tagline */}
            <m.p
              className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-300/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              Advocate &amp; Legal Counsel
            </m.p>
          </m.div>

          {/* Loading dots */}
          <m.div
            className="absolute bottom-12 flex gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <m.div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-gold-500/50"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
