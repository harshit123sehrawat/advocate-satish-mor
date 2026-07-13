"use client";

import { motion } from "framer-motion";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/animations/AnimationWrappers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const trustStatements = [
  "Confidential Legal Consultation",
  "Personalized Legal Strategy",
  "Professional Court Representation",
  "Transparent Legal Process",
  "Dedicated Client Support"
];

export default function ServiceLayout({ title, subtitle, children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Banner for Service Page */}
        <section className="relative overflow-hidden bg-[var(--bg-secondary)] py-16 sm:py-24 border-b border-[var(--border-light)]">
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, var(--gold-500) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <FadeInUp>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="gold-gradient-text">{title}</span>
              </h1>
              <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Content Column */}
              <div className="lg:col-span-8 prose-custom">
                {children}
              </div>

              {/* Sidebar: Trust & Conversion */}
              <div className="lg:col-span-4">
                <FadeInRight>
                  <div className="glass-card rounded-2xl p-8 sticky top-28">
                    <h3 className="font-serif text-2xl font-bold mb-6 text-[var(--text-primary)]">
                      Why Choose Us
                    </h3>
                    <ul className="flex flex-col gap-4 mb-8">
                      {trustStatements.map((statement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-[var(--gold-500)] flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          <span className="text-[var(--text-secondary)] font-medium">
                            {statement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-4">
                      <a href="/#contact" className="btn-primary w-full text-center">
                        Book Consultation
                      </a>
                      <a href="tel:+919416280805" className="btn-secondary w-full flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                      </a>
                    </div>
                  </div>
                </FadeInRight>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
