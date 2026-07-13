import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Civil Lawyer in Chandigarh | Civil Litigation Advocate Satish Mor",
  description: "Advocate Satish Mor provides strategic civil litigation services in Chandigarh. We resolve complex civil disputes with dedicated High Court representation.",
  keywords: ["Civil Lawyer Chandigarh", "Civil Litigation Chandigarh", "Best Civil Advocate Chandigarh", "Contract Dispute Lawyer", "High Court Civil Lawyer"],
  openGraph: {
    description: "Advocate Satish Mor provides strategic civil litigation services in Chandigarh. We resolve complex civil disputes with dedicated High Court representation.",
  },
  twitter: {
    description: "Advocate Satish Mor provides strategic civil litigation services in Chandigarh. We resolve complex civil disputes with dedicated High Court representation.",
  },
};

export default function CivilLitigationPage() {
  return (
    <ServiceLayout 
      title="Civil Litigation" 
      subtitle="Comprehensive civil law representation for individuals and businesses, focusing on breach of contract, recovery suits, and injunctions."
    >
      <div className="flex flex-col gap-6 text-[var(--text-secondary)] text-lg leading-relaxed">
        <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">Experienced Civil Lawyer in Chandigarh</h2>
        <p>
          Civil litigation encompasses a wide array of legal disputes involving individuals, businesses, and government entities. From the lowest civil courts to the highest appellate courts, navigating these procedures requires a seasoned legal mind. Advocate Satish Mor is a highly respected <strong>Civil Lawyer in Chandigarh</strong>, offering end-to-end representation in all civil matters.
        </p>
        
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Our Civil Litigation Practice</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Recovery Suits:</strong> Filing civil suits for the recovery of money, unpaid dues, and damages for breach of contract or financial fraud.</li>
          <li><strong>Injunctions & Stay Orders:</strong> Obtaining temporary or permanent injunctions (stay orders) to prevent another party from taking harmful actions against your rights or property.</li>
          <li><strong>Breach of Contract:</strong> Representing clients in disputes arising from non-performance or violation of commercial and personal agreements.</li>
          <li><strong>Defamation Suits:</strong> Filing and defending civil suits for damages related to slander, libel, and damage to reputation.</li>
          <li><strong>Consumer Disputes:</strong> Representing clients before the District, State, and National Consumer Dispute Redressal Commissions.</li>
          <li><strong>Civil Appeals & Revisions:</strong> Challenging unfavorable lower court judgments before the District Judge and the Punjab & Haryana High Court.</li>
        </ul>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Thorough Preparation & Strong Advocacy</h3>
        <p>
          Success in civil litigation hinges on precise drafting of plaints and written statements, meticulous evidence gathering, and persuasive legal arguments. Advocate Mor ensures that your civil case is built on a solid foundation, minimizing delays and maximizing the likelihood of a favorable judgment.
        </p>
      </div>
    </ServiceLayout>
  );
}
