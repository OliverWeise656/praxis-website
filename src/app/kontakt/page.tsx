import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | HNO Stimm- & Hörzentrum Stuttgart",
  description:
    "Kontakt und Anfahrt zum HNO Stimm- & Hörzentrum Stuttgart. Termine nach Vereinbarung.",
};

export default function KontaktPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Kontakt</h1>
      <p>HNO Stimm- & Hörzentrum Stuttgart</p>
    </main>
  );
}
