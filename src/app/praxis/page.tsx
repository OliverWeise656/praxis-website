import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praxis | HNO Stimm- & Hörzentrum Stuttgart",
  description:
    "Philosophie, medizinischer Ansatz und Ablauf im HNO Stimm- & Hörzentrum Stuttgart.",
};

export default function PraxisPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Praxis</h1>

      <h2>Philosophie</h2>
      <p>
        Medizinische Qualität entsteht durch Sorgfalt, Erfahrung und Zeit für
        Einordnung. Im Mittelpunkt steht die individuelle Situation der
        Patientinnen und Patienten.
      </p>

      <h2>Ablauf / Termine</h2>
      <p>
        Untersuchungen erfolgen nach Terminvereinbarung. Je nach Fragestellung
        kann eine Abklärung ein- oder mehrzeitig erfolgen.
      </p>
    </main>
  );
}
