import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | HNO Stimm- & Hörzentrum Stuttgart",
};

export default function ImpressumPage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Impressum</h1>
      <p>
        HNO Stimm- & Hörzentrum Stuttgart<br />
        Adresse<br />
        Telefon · E-Mail
      </p>
      <p>
        Angaben gemäß § 5 TMG.<br />
        Berufsbezeichnung: Facharzt für Hals-Nasen-Ohren-Heilkunde
      </p>
    </main>
  );
}
