import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termin vereinbaren | HNO Stimm- & Hörzentrum Stuttgart",
  description:
    "Online-Terminvereinbarung über eTermin im HNO Stimm- & Hörzentrum Stuttgart.",
};

export default function TerminPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Terminvereinbarung</h1>
      <p>Die Terminvergabe erfolgt bevorzugt online über eTermin.</p>
    </main>
  );
}
