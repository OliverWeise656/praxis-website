import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | HNO Stimm- & Hörzentrum Stuttgart",
  description:
    "Übersicht der Leistungen: HNO allgemein, Pädaudiologie sowie Phoniatrie und Stimmmedizin in Stuttgart.",
};

export default function LeistungenPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Leistungen</h1>

      <p>
        Die Praxis bietet eine fachärztliche Versorgung mit klaren Schwerpunkten
        in der Stimm- und Hördiagnostik sowie der pädaudiologischen Abklärung.
      </p>

      <ul>
        <li>HNO allgemein</li>
        <li>Pädaudiologie</li>
        <li>Phoniatrie / Stimme</li>
      </ul>
    </main>
  );
}
