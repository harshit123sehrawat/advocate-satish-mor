"use client";

import { useRef, ReactNode } from "react";
import { LazyMotion, domAnimation, m, useInView, Variant } from "framer-motion";

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/* Fade in from bottom */
export function FadeInUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/* Fade in from left */
export function FadeInLeft({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/* Fade in from right */
export function FadeInRight({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/* Scale in */
export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/* Stagger children container */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 } as Variant,
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  } as Variant,
};

