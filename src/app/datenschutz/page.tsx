import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | HNO Stimm- & Hörzentrum Stuttgart",
};

export default function DatenschutzPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Datenschutzerklärung</h1>
      <p>
        Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO
        folgen hier. Die vollständige Datenschutzerklärung wird bereitgestellt.
      </p>
    </main>
  );
}
