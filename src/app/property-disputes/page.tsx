import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Property Dispute Lawyer in Chandigarh | Land Dispute Advocate Satish Mor",
  description: "Expert Property Dispute Lawyer resolving land disputes, partition suits, illegal possession, and boundary conflicts in Chandigarh and Punjab & Haryana High Court.",
  keywords: ["Property Dispute Lawyer Chandigarh", "Land Dispute Lawyer Chandigarh", "Illegal Possession Lawyer", "Partition Suit Lawyer", "Property Advocate Chandigarh"],
};

export default function PropertyDisputesPage() {
  return (
    <ServiceLayout 
      title="Property & Land Disputes" 
      subtitle="Aggressive legal representation to protect your ownership rights, recover possession, and resolve complex land conflicts."
    >
      <div className="flex flex-col gap-6 text-[var(--text-secondary)] text-lg leading-relaxed">
        <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">Resolve Your Property Disputes Promptly</h2>
        <p>
          Property disputes can lock up your valuable assets in litigation for years if not handled correctly from the outset. Whether you are dealing with illegal encroachment, a family dispute over inherited land, or a breach of a sale agreement, you need an experienced <strong>Property Dispute Lawyer in Chandigarh</strong> to protect your interests.
        </p>
        
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Key Areas of Property Litigation</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Illegal Possession & Encroachment:</strong> Filing suits for eviction, mandatory injunctions, and recovery of possession against trespassers or illegal occupants.</li>
          <li><strong>Partition Suits:</strong> Legally demanding your rightful share in joint, ancestral, or Hindu Undivided Family (HUF) properties.</li>
          <li><strong>Specific Performance:</strong> Forcing the execution of a sale deed when a seller or buyer backs out of a signed agreement to sell.</li>
          <li><strong>Declaration & Injunction:</strong> Seeking court orders to declare you as the absolute owner and restraining others from interfering with your property rights.</li>
          <li><strong>Land Acquisition Matters:</strong> Challenging inadequate compensation or unlawful land acquisition by government authorities.</li>
          <li><strong>Landlord-Tenant Disputes:</strong> Handling rent disputes, eviction proceedings, and lease agreement breaches under the Rent Control Act.</li>
        </ul>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Strategic Litigation for Your Assets</h3>
        <p>
          Advocate Satish Mor brings years of trial experience to property litigation. We meticulously review revenue records (Jamabandi, Inteqal), title chains, and registered deeds to build an airtight case. We strive to resolve disputes through strategic negotiation when possible, and aggressive courtroom litigation when necessary.
        </p>
      </div>
    </ServiceLayout>
  );
}
