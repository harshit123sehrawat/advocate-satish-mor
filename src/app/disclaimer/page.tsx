import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Advocate Satish Mor",
  description: "Read the legal disclaimer for Advocate Satish Mor. This website provides general information and does not constitute formal legal advice or attorney bond.",
  openGraph: {
    description: "Read the legal disclaimer for Advocate Satish Mor. This website provides general information and does not constitute formal legal advice or attorney bond.",
  },
  twitter: {
    description: "Read the legal disclaimer for Advocate Satish Mor. This website provides general information and does not constitute formal legal advice or attorney bond.",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full text-left">
        <h1 className="text-4xl font-serif font-bold text-[var(--text-primary)] mb-8">Legal Disclaimer</h1>
        <div className="text-[var(--text-secondary)] space-y-4">
          <p>
            As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By accessing this website, you acknowledge and confirm that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.</li>
            <li>The user wishes to gain more information about us for their own information and use.</li>
            <li>The information about us is provided to the user only on their specific request.</li>
            <li>Any information obtained or materials downloaded from this website is completely at the user&apos;s volition and any transmission, receipt, or use of this site would not create any lawyer-client relationship.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
