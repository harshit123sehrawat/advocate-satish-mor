"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/animations/AnimationWrappers";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does legal consultation cost?",
    answer: "Consultation fees vary depending on the complexity of the matter. Please contact us directly to discuss your case and get an accurate estimate.",
  },
  {
    question: "How do I hire an advocate in Chandigarh?",
    answer: "You can hire an advocate by scheduling an initial consultation, discussing your legal matter, and signing a formal engagement agreement.",
  },
  {
    question: "Do you appear before Punjab & Haryana High Court?",
    answer: "Yes, Advocate Satish Mor extensively practices and appears before the Punjab & Haryana High Court in Chandigarh.",
  },
  {
    question: "Can consultations happen online?",
    answer: "Yes, we offer secure online legal consultations via video call or phone for clients who cannot visit our Chandigarh office in person.",
  },
  {
    question: "How long do civil cases take?",
    answer: "The timeline for civil cases in India depends on the court's schedule, case complexity, and evidence required. While some matters settle quickly through mediation, contested litigation may take several months to years.",
  },
  {
    question: "How are property disputes handled?",
    answer: "We handle property disputes through thorough title verification, mediation when possible, and aggressive civil litigation when necessary to protect your ownership rights.",
  },
  {
    question: "Do you handle criminal cases?",
    answer: "Yes, Advocate Satish Mor is an experienced criminal lawyer providing robust defense in various criminal matters, ensuring your rights are protected at every stage of the legal process.",
  },
  {
    question: "What documents should I bring?",
    answer: "For your first consultation, please bring all relevant documents related to your case, including property papers, FIR copies, court notices, previous legal correspondence, and identity proof.",
  },
];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <FadeInUp delay={index * 0.1}>
      <div
        className={`glass-card rounded-2xl overflow-hidden transition-all duration-400 ${
          isOpen ? "border-[var(--border-gold)]" : ""
        }`}
      >
        {/* Question button */}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
          className="w-full flex items-center gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2 rounded-2xl"
        >
          {/* Gold number */}
          <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[var(--gold-600)] to-[var(--gold-400)] flex items-center justify-center text-[var(--navy-900)] font-bold text-sm sm:text-base shadow-[var(--shadow-gold)]">
            {index + 1}
          </span>

          {/* Question text */}
          <span className="flex-1 font-semibold text-[var(--text-primary)] text-base sm:text-lg leading-snug group-hover:text-[var(--text-accent)] transition-colors duration-300">
            {item.question}
          </span>

          {/* Expand / collapse icon */}
          <m.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[var(--border-gold)] flex items-center justify-center text-[var(--text-accent)] text-xl font-light select-none"
          >
            +
          </m.span>
        </button>

        {/* Answer panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <m.div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
                opacity: { duration: 0.3, delay: 0.05 },
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                {/* Small gold divider between Q and A */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-300)] rounded-full mb-4 ml-13 sm:ml-14" />

                <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base ml-13 sm:ml-14 text-left">
                  {item.answer}
                </p>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </FadeInUp>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Subtle radial background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(201,168,76,0.04) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(58,107,170,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <FadeInUp>
          <div className="flex flex-col items-center text-center w-full mb-14 sm:mb-16">
            <h2 className="section-title">
              Frequently Asked{" "}
              <span className="gold-gradient-text">Questions</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4">
              Find answers to common questions about our legal services,
              consultations, and practice areas.
            </p>
          </div>
        </FadeInUp>

        {/* ── Accordion list ── */}
        <div className="mx-auto max-w-3xl flex flex-col gap-4 sm:gap-5">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              item={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


