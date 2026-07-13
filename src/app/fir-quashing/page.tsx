import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "FIR Quashing Lawyer in Chandigarh | High Court Advocate Satish Mor",
  description: "Seek justice with expert FIR quashing services in Chandigarh. Advocate Satish Mor provides aggressive representation to protect your legal rights.",
  keywords: ["FIR Quashing Lawyer Chandigarh", "High Court Advocate Chandigarh", "Section 482 CrPC Quashing", "Cancel False FIR", "Criminal Defense Lawyer"],
  openGraph: {
    description: "Seek justice with expert FIR quashing services in Chandigarh. Advocate Satish Mor provides aggressive representation to protect your legal rights.",
  },
  twitter: {
    description: "Seek justice with expert FIR quashing services in Chandigarh. Advocate Satish Mor provides aggressive representation to protect your legal rights.",
  },
};

export default function FIRQuashingPage() {
  return (
    <ServiceLayout 
      title="FIR Quashing (High Court)" 
      subtitle="Seeking justice against false, frivolous, and maliciously instituted criminal proceedings at the Punjab & Haryana High Court."
    >
      <div className="flex flex-col gap-6 text-[var(--text-secondary)] text-lg leading-relaxed">
        <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">Quash False FIRs in Chandigarh High Court</h2>
        <p>
          Being implicated in a false or malicious criminal case can destroy reputations, drain finances, and cause immense mental harassment. Under the inherent powers of the High Court (historically Section 482 of the CrPC, now corresponding provisions under the BNSS), unjust criminal proceedings can be entirely quashed (cancelled) to prevent the abuse of the legal process.
        </p>
        <p>
          As an experienced <strong>High Court Advocate in Chandigarh</strong>, Advocate Satish Mor specializes in filing and arguing FIR quashing petitions before the Punjab & Haryana High Court.
        </p>
        
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Grounds for Quashing an FIR</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Absence of Offense:</strong> When the allegations in the FIR, even if taken at face value, do not constitute a cognizable criminal offense.</li>
          <li><strong>Compromise / Settlement:</strong> Quashing of FIRs in non-heinous crimes (such as matrimonial disputes, business disputes, or minor altercations) based on a mutual compromise or settlement between the parties.</li>
          <li><strong>Malicious Prosecution:</strong> When it is evident that the FIR was instituted with a malicious intent or an ulterior motive to seek vengeance.</li>
          <li><strong>Civil Dispute Given Criminal Color:</strong> Quashing cases where a purely civil or commercial dispute has been wrongly registered as a criminal case (e.g., cheating or fraud) to apply pressure.</li>
          <li><strong>Lack of Evidence:</strong> When the investigation relies on inherently improbable or absurd allegations that lack any evidentiary support.</li>
        </ul>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Protect Your Reputation and Future</h3>
        <p>
          Quashing an FIR is a specialized legal remedy that requires drafting a meticulous petition and presenting compelling arguments before a High Court Judge. Advocate Mor provides an honest assessment of your case&apos;s merits and works aggressively to ensure that frivolous criminal proceedings against you are permanently terminated.
        </p>
      </div>
    </ServiceLayout>
  );
}
