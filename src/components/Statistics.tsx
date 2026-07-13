"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/* ───────── Types ───────── */
interface StatItem {
  value: number | null; // null = non-numeric (e.g. "HC")
  suffix: string;
  label: string;
  displayOverride?: string; // shown instead of animated number
  icon: React.ReactNode;
}

/* ───────── Animated Counter Hook ───────── */
function useCounter(target: number | null, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || target === null) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * (target ?? 0)));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(target ?? 0);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return count;
}

/* ───────── SVG Icons ───────── */
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 21h19.5M3.75 3v18m4.5-18v18m4.5-18v18m4.5-18v18M5.25 6h.008v.008H5.25V6Zm0 3h.008v.008H5.25V9Zm0 3h.008v.008H5.25V12Zm4.5-6h.008v.008H9.75V6Zm0 3h.008v.008H9.75V9Zm0 3h.008v.008H9.75V12Zm4.5-6h.008v.008h-.008V6Zm0 3h.008v.008h-.008V9Zm0 3h.008v.008h-.008V12Z"
    />
  </svg>
);

const ScalesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
    />
  </svg>
);

/* ───────── Stats Data ───────── */
const stats: StatItem[] = [
  {
    value: 6,
    suffix: "+",
    label: "Years Experience",
    icon: <CalendarIcon />,
  },
  {
    value: 500,
    suffix: "+",
    label: "Consultations",
    icon: <UsersIcon />,
  },
  {
    value: 100,
    suffix: "+",
    label: "Property Matters",
    icon: <BuildingIcon />,
  },
  {
    value: null,
    suffix: "",
    label: "High Court Practice",
    displayOverride: "HC",
    icon: <ScalesIcon />,
  },
];

/* ───────── Single Stat Card ───────── */
function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatItem;
  index: number;
  isInView: boolean;
}) {
  const count = useCounter(stat.value, isInView);

  return (
    <motion.div
      className="flex flex-col items-center text-center px-4 py-8 sm:py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
    >
      {/* Icon */}
      <div className="text-gold-400 mb-4 opacity-80">{stat.icon}</div>

      {/* Number */}
      <span className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold gold-gradient-text leading-none tracking-tight">
        {stat.displayOverride
          ? stat.displayOverride
          : `${count}${stat.suffix}`}
      </span>

      {/* Gold accent line */}
      <div className="w-10 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mt-4 mb-3" />

      {/* Label */}
      <span className="text-sm sm:text-base font-medium tracking-wide text-white/80 uppercase">
        {stat.label}
      </span>
    </motion.div>
  );
}

/* ───────── Statistics Section ───────── */
export default function Statistics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-navy-800 overflow-hidden"
    >
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold-500/[0.04] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-navy-500/[0.15] blur-3xl" />
        {/* Top gold border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        {/* Bottom gold border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

