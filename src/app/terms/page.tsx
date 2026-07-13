import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Advocate Satish Mor",
  description: "Review terms of service for Advocate Satish Mor's website. Understand the conditions governing legal consultations, representation and digital services.",
  openGraph: {
    description: "Review terms of service for Advocate Satish Mor's website. Understand the conditions governing legal consultations, representation and digital services.",
  },
  twitter: {
    description: "Review terms of service for Advocate Satish Mor's website. Understand the conditions governing legal consultations, representation and digital services.",
  },
};

export default function TermsConditions() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full text-left">
        <h1 className="text-4xl font-serif font-bold text-[var(--text-primary)] mb-8">Terms & Conditions</h1>
        <div className="text-[var(--text-secondary)] space-y-4">
          <p>
            <strong>Last Updated:</strong> Placeholder Date
          </p>
          <p>
            These Terms & Conditions govern your use of our website and outline the professional engagement terms for Advocate Satish Mor's legal services.
          </p>
          <p>
            [Placeholder: Detailed legal text regarding attorney-client privilege, consultation fees, jurisdiction, and limitation of liability will be placed here.]
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
