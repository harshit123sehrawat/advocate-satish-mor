import { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Criminal Lawyer in Chandigarh | Advocate Satish Mor",
  description: "Top Criminal Lawyer in Chandigarh offering expert defense in bail matters, criminal trials, FIR quashing, and white-collar crimes at Punjab & Haryana High Court.",
  keywords: ["Criminal Lawyer in Chandigarh", "Best Criminal Lawyer Chandigarh", "Criminal Advocate in Chandigarh", "Criminal Defense Lawyer"],
};

export default function CriminalLawPage() {
  return (
    <ServiceLayout 
      title="Criminal Law Representation" 
      subtitle="Expert legal defense and strategic advocacy for all criminal matters in Chandigarh, Mohali, Panchkula, and the Punjab & Haryana High Court."
    >
      <div className="flex flex-col gap-6 text-[var(--text-secondary)] text-lg leading-relaxed">
        <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">Strategic Criminal Defense in Chandigarh</h2>
        <p>
          Facing criminal charges can be one of the most daunting experiences in life. Advocate Satish Mor is recognized as a leading <strong>Criminal Lawyer in Chandigarh</strong>, providing aggressive and strategic defense for individuals accused of various offenses under the Indian Penal Code (IPC), Bharatiya Nyaya Sanhita (BNS), and other special laws.
        </p>
        <p>
          Our criminal defense practice is built on the pillars of thorough legal research, meticulous case preparation, and exceptional courtroom advocacy. We ensure that your constitutional rights are protected at every stage of the criminal justice system—from police investigations to trial and appellate courts.
        </p>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Our Criminal Law Services</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Anticipatory and Regular Bail:</strong> Securing freedom and preventing unwarranted arrest in sensitive matters.</li>
          <li><strong>Criminal Trials:</strong> Robust defense strategies in complex criminal trials before District Courts and the High Court.</li>
          <li><strong>FIR Quashing:</strong> Moving the High Court under Section 482 CrPC (or corresponding BNSS provisions) to quash false and frivolous FIRs.</li>
          <li><strong>White-Collar Crimes:</strong> Defending against allegations of fraud, embezzlement, forgery, and economic offenses.</li>
          <li><strong>Cheque Bounce (NI Act):</strong> Prosecution and defense in Section 138 Negotiable Instruments Act cases.</li>
          <li><strong>Cyber Crimes:</strong> Legal representation in cases involving cyber fraud, data theft, and IT Act violations.</li>
        </ul>

        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-6 mb-3">Why Choose Us for Criminal Matters?</h3>
        <p>
          As an experienced <strong>Criminal Advocate in Chandigarh</strong>, Advocate Mor understands the severe personal and professional consequences of criminal litigation. We maintain strict confidentiality, provide transparent assessments of your case, and work tirelessly to achieve an acquittal or the most favorable outcome possible.
        </p>
      </div>
    </ServiceLayout>
  );
}
