"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

export default function FramerProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

