"use client";

import { useState, FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FadeInLeft, FadeInRight } from "@/components/animations/AnimationWrappers";

/* ───────── types ───────── */
interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const subjectOptions = [
  "Property Dispute",
  "Civil Litigation",
  "Real Estate",
  "Legal Consultation",
  "High Court Appeal",
  "Other",
];

/* ───────── icon primitives ───────── */
function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function EmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function LocationIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function SendIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  );
}

/* ───────── contact info items ───────── */
const contactItems = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+91 9416280805",
    href: "tel:+919416280805",
  },
  {
    icon: EmailIcon,
    label: "Email",
    value: "advsatishmor@gmail.com",
    href: "mailto:advsatishmor@gmail.com",
  },
  {
    icon: LocationIcon,
    label: "Location",
    value: "Punjab & Haryana High Court, Chandigarh",
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: "Mon-Sat: 9:00 AM - 6:00 PM",
  },
];

const socialLinks = [
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: TwitterIcon, label: "Twitter / X", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
];

/* ─────────────────────────────────────────────
   INPUT STYLES — shared Tailwind class string
   ───────────────────────────────────────────── */
const inputClasses =
  "w-full rounded-lg border border-[var(--border-medium)] bg-[var(--bg-secondary)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-all duration-300 focus:border-[var(--gold-500)] focus:ring-2 focus:ring-[var(--gold-500)]/20 focus:outline-none";

/* ═══════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════ */
export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          from_name: "Advocate Satish Mor Website",
          ...form,
        }),
      });
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setForm(initialForm);
        // Auto-hide toast after 5 s
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Web3Forms submission failed:", result);
        // In a real app, you might want to show an error toast here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-[var(--gold-500)]/[0.04] blur-[100px]" />
        <div className="absolute -right-40 bottom-1/4 h-[480px] w-[480px] rounded-full bg-[var(--navy-500)]/[0.06] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <div className="mb-16 flex flex-col items-center text-center w-full">
          <m.span
            className="mb-4 inline-block rounded-full border border-[var(--border-gold)] bg-[var(--gold-500)]/10 px-5 py-1.5 text-sm font-medium tracking-wide text-[var(--text-accent)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </m.span>

          <m.h2
            className="section-title mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Schedule a{" "}
            <span className="gold-gradient-text">Consultation</span>
          </m.h2>

          <m.div
            className="gold-divider mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <m.p
            className="section-subtitle mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Reach out to discuss your legal needs. We are committed to
            providing prompt, professional responses.
          </m.p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* ─── Left: Contact Info Card ─── */}
          <FadeInLeft className="lg:col-span-2">
            <div className="glass-card h-full rounded-2xl p-8 sm:p-10 text-left">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                Get In Touch
              </h3>
              <div className="gold-divider" />

              <address className="not-italic">
                <ul className="mt-8 space-y-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <div className="flex items-start gap-4 group">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--gold-500)]/10 text-[var(--text-accent)] transition-colors duration-300 group-hover:bg-[var(--gold-500)]/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[15px] font-medium text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--text-accent)]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="block">
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
                </ul>
              </address>

              {/* Google Maps Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-[var(--border-light)] h-48 bg-[var(--bg-primary)] flex flex-col items-center justify-center text-[var(--text-tertiary)] text-sm">
                <LocationIcon className="w-8 h-8 mb-2 opacity-50" />
                <span>Google Maps Embed Placeholder</span>
                <span className="text-xs mt-1">Latitude: 30.7412, Longitude: 76.7684</span>
              </div>

              {/* Social row */}
              <div className="mt-10 border-t border-[var(--border-light)] pt-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-light)] text-[var(--text-tertiary)] transition-all duration-300 hover:border-[var(--border-gold)] hover:bg-[var(--gold-500)]/10 hover:text-[var(--text-accent)]"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeInLeft>

          {/* ─── Right: Inquiry Form ─── */}
          <FadeInRight className="lg:col-span-3" delay={0.15}>
            <div className="glass-card rounded-2xl p-8 sm:p-10 text-left">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                Send an Inquiry
              </h3>
              <div className="gold-divider" />

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
                noValidate
              >
                {/* Row 1 — Name & Phone */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Row 2 — Email & Subject */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b6b80' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                      }}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3 — Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-[var(--text-secondary)]"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Briefly describe your legal matter…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary inline-flex items-center gap-2 text-base disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <SendIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* ── Success Toast ── */}
      <AnimatePresence>
        {submitted && (
          <m.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-50 px-6 py-4 shadow-lg dark:bg-emerald-950/80 dark:border-emerald-400/20">
              <CheckCircleIcon className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="font-semibold text-emerald-900 dark:text-emerald-200">
                  Message Sent!
                </p>
                <p className="text-sm text-emerald-700 dark:text-emerald-300/80">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="ml-4 text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                aria-label="Dismiss notification"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}

