import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HNO Stimm- & Hörzentrum Stuttgart | Stimme · Hören · Pädaudiologie",
  description:
    "Fachärztliche HNO-Praxis in Stuttgart mit Schwerpunkt auf Stimme, Hören und Pädaudiologie. Moderne Diagnostik, individuelle Beratung und digitale Services.",
};

export default function HomePage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>HNO Stimm- & Hörzentrum Stuttgart</h1>

      <p>
        Das <strong>HNO Stimm- & Hörzentrum Stuttgart</strong> ist eine fachärztliche
        Praxis mit Schwerpunkt auf Stimm- und Hördiagnostik, Pädaudiologie sowie
        der gesamten Hals-Nasen-Ohren-Heilkunde.
      </p>

      <h2>Unsere Schwerpunkte</h2>

      <h3>HNO allgemein</h3>
      <p>
        Diagnostik und Behandlung von Erkrankungen des Ohres, der Nase und des
        Halses – evidenzbasiert, individuell abgestimmt und mit klaren
        Therapieempfehlungen.
      </p>

      <h3>Pädaudiologie</h3>
      <p>
        Hör- und Sprachdiagnostik im Kindesalter, inklusive differenzierter
        Abklärung bei unklarem Hörverhalten oder sprachlicher
        Entwicklungsverzögerung.
      </p>

      <h3>Phoniatrie / Stimme</h3>
      <p>
        Abklärung von Stimm-, Sprech- und Schluckstörungen bei Erwachsenen und
        Jugendlichen, insbesondere bei beruflicher Stimmbelastung.
      </p>

      <h2>Medizinische Haltung</h2>
      <p>
        Medizinische Qualität entsteht durch Zeit, Erfahrung und sorgfältige
        Befundinterpretation. Im Mittelpunkt steht die Gesamtbetrachtung der
        individuellen Situation.
      </p>
    </main>
  );
}
