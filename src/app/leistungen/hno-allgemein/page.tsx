import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HNO allgemein in Stuttgart | HNO Stimm- & Hörzentrum",
  description:
    "Fachärztliche HNO-Diagnostik in Stuttgart: Erkrankungen von Ohr, Nase und Hals, Hörstörungen, Schwindel und Schluckbeschwerden.",
};

export default function HnoAllgemeinPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>HNO allgemein</h1>

      <p>
        Die allgemeine Hals-Nasen-Ohren-Heilkunde bildet die Grundlage der
        fachärztlichen Tätigkeit.
      </p>

      <ul>
        <li>Erkrankungen des Ohres</li>
        <li>Hörstörungen und Schwindel</li>
        <li>Nase und Nasennebenhöhlen</li>
        <li>Hals- und Rachenbeschwerden</li>
        <li>Schluck- und Stimmauffälligkeiten</li>
      </ul>
    </main>
  );
}
