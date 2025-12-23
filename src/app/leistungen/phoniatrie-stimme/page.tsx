import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoniatrie & Stimme Stuttgart | Stimmstörungen fachärztlich abklären",
  description:
    "Phoniatrische Diagnostik in Stuttgart: Heiserkeit, Stimmermüdung, funktionelle Dysphonien und Schluckstörungen.",
};

export default function PhoniatriePage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Phoniatrie / Stimme</h1>

      <p>
        Die Phoniatrie befasst sich mit Stimm-, Sprech- und Schluckstörungen. Ein
        besonderer Fokus liegt auf funktionellen und belastungsabhängigen
        Stimmstörungen.
      </p>
    </main>
  );
}
