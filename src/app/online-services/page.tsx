import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online-Services | HNO Stimm- & Hörzentrum Stuttgart",
  description:
    "Digitale Angebote: Online-Tests, Online-Assistent und strukturierte Vorbereitung auf den HNO-Termin.",
};

export default function OnlineServicesPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Online-Services</h1>

      <p>
        Digitale Angebote unterstützen die medizinische Arbeit, ersetzen jedoch
        keine ärztliche Untersuchung.
      </p>
    </main>
  );
}
