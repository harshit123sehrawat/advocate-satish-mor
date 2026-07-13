import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Property Lawyer in Chandigarh | Advocate Satish Mor",
  description: "Resolve property disputes efficiently in Chandigarh with Advocate Satish Mor. Expert in title verification, civil litigation and real estate solutions.",
  keywords: ["Property Lawyer Chandigarh", "Property Dispute Lawyer", "Real Estate Lawyer Chandigarh", "Land Dispute Lawyer Chandigarh", "Property Advocate Chandigarh"],
  openGraph: {
    description: "Resolve property disputes efficiently in Chandigarh with Advocate Satish Mor. Expert in title verification, civil litigation and real estate solutions.",
  },
  twitter: {
    description: "Resolve property disputes efficiently in Chandigarh with Advocate Satish Mor. Expert in title verification, civil litigation and real estate solutions.",
  },
};

export default function PropertyLawPage() {
  return (
    <ServiceLayout 
      title="Property & Real Estate Law" 
      subtitle="Comprehensive legal solutions for complex property disputes, real estate transactions, and land ownership matters in Chandigarh."
    >
      <div className="flex flex-col gap-6 text-[var(--text-secondary)] text-lg leading-relaxed">
        <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">Leading Property Lawyer in Chandigarh</h2>
        <p>
          Real estate and property investments are among the most significant financial assets. When disputes arise over ownership, boundaries, or inheritance, you need a highly experienced <strong>Property Lawyer in Chandigarh</strong> to safeguard your rights. Advocate Satish Mor provides unparalleled legal expertise in property and real estate law.
        </p>
        <p>
          We represent property owners, buyers, developers, and landlords in civil courts, revenue courts, and the Punjab & Haryana High Court. From resolving family partition suits to litigating commercial real estate disputes, our approach is strategic, thorough, and focused on securing clear legal title and possession for our clients.
        </p>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Comprehensive Property Legal Services</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Property Disputes:</strong> Civil litigation concerning ownership, adverse possession, and boundary conflicts.</li>
          <li><strong>Title Verification:</strong> Exhaustive legal scrutiny of property documents to ensure clear and marketable title before purchase.</li>
          <li><strong>Partition Suits:</strong> Legal division of joint family properties (HUF) and co-owned real estate.</li>
          <li><strong>Sale Deed & Registry:</strong> Drafting, reviewing, and registering sale deeds, lease agreements, and power of attorneys.</li>
          <li><strong>Builder & RERA Disputes:</strong> Representing homebuyers against builders for delayed possession and contract breaches.</li>
          <li><strong>Revenue & Mutation Matters:</strong> Handling matters before revenue authorities regarding mutation (Intqal), demarcation, and land records.</li>
        </ul>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Secure Your Property Rights</h3>
        <p>
          Property litigation can be complex and prolonged. As an expert <strong>Property Dispute Lawyer</strong>, Advocate Mor emphasizes meticulous documentation review and proactive legal strategies. Whether you are seeking to recover possession from an illegal occupant or defending your ownership rights, we offer aggressive representation and practical legal counsel.
        </p>
      </div>
    </ServiceLayout>
  );
}
