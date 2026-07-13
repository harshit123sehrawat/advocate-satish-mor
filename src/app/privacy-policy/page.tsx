import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Advocate Satish Mor",
  description: "Privacy policy and data protection guidelines for Advocate Satish Mor.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full text-left">
        <h1 className="text-4xl font-serif font-bold text-[var(--text-primary)] mb-8">Privacy Policy</h1>
        <div className="text-[var(--text-secondary)] space-y-4">
          <p>
            <strong>Last Updated:</strong> Placeholder Date
          </p>
          <p>
            This Privacy Policy outlines how Advocate Satish Mor collects, uses, and protects your personal information when you use our website or engage our legal services in Chandigarh.
          </p>
          <p>
            [Placeholder: Detailed legal text regarding data collection, cookies, third-party services, and user rights will be placed here to satisfy compliance requirements.]
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
