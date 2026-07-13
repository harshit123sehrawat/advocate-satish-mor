import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Bail Matters Lawyer in Chandigarh | Advocate Satish Mor",
  description: "Secure regular and anticipatory bail in Chandigarh quickly. Advocate Satish Mor offers expert criminal defense and bail assistance at the High Court.",
  keywords: ["Bail Lawyer Chandigarh", "Anticipatory Bail Lawyer Chandigarh", "Regular Bail Advocate", "High Court Bail Lawyer", "Criminal Defense Lawyer"],
  openGraph: {
    description: "Secure regular and anticipatory bail in Chandigarh quickly. Advocate Satish Mor offers expert criminal defense and bail assistance at the High Court.",
  },
  twitter: {
    description: "Secure regular and anticipatory bail in Chandigarh quickly. Advocate Satish Mor offers expert criminal defense and bail assistance at the High Court.",
  },
};

export default function BailMattersPage() {
  return (
    <ServiceLayout 
      title="Bail Matters & Applications" 
      subtitle="Securing your liberty with swift and strategic bail applications across District Sessions Courts and the High Court."
    >
      <div className="flex flex-col gap-6 text-[var(--text-secondary)] text-lg leading-relaxed">
        <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">Expert Bail Lawyer in Chandigarh</h2>
        <p>
          Personal liberty is a fundamental right, and facing the threat of arrest or dealing with ongoing incarceration requires immediate, expert legal intervention. Advocate Satish Mor is a highly sought-after <strong>Bail Lawyer in Chandigarh</strong>, known for his swift and effective representation in bail matters before both the District Courts and the Punjab & Haryana High Court.
        </p>
        
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Types of Bail We Handle</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Anticipatory Bail:</strong> If you apprehend arrest due to a false or politically motivated FIR, we can move the Sessions Court or High Court for pre-arrest bail to protect your freedom.</li>
          <li><strong>Regular Bail:</strong> For individuals already in judicial or police custody, we file robust regular bail applications arguing on merits, parity, and constitutional rights.</li>
          <li><strong>Default Bail:</strong> Securing statutory bail if the investigating agency fails to file the charge sheet within the prescribed 60 or 90 days.</li>
          <li><strong>Transit Anticipatory Bail:</strong> Protecting you from arrest when an FIR is registered in a different state, allowing you time to approach the appropriate jurisdiction.</li>
          <li><strong>Cancellation of Bail:</strong> Defending against applications seeking to cancel bail that has already been granted to our clients.</li>
        </ul>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Our Approach to Bail Hearings</h3>
        <p>
          Bail hearings require sharp courtroom advocacy, a deep understanding of criminal jurisprudence, and the ability to effectively counter the prosecution's arguments. We meticulously analyze the FIR, identify discrepancies in the police investigation, and present compelling arguments to convince the court that our client is not a flight risk, will not tamper with evidence, and deserves liberty pending trial.
        </p>
      </div>
    </ServiceLayout>
  );
}
