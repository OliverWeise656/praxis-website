import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pädaudiologie Stuttgart | Hör- & Sprachdiagnostik für Kinder",
  description:
    "Pädaudiologische Diagnostik in Stuttgart: Hörvermögen, Sprachentwicklung und AVWS-Abklärung bei Kindern.",
};

export default function PaedaudiologiePage() {
  return (
    <main className="prose max-w-3xl mx-auto p-8">
      <h1>Pädaudiologie</h1>

      <p>
        Die pädaudiologische Diagnostik befasst sich mit dem Hörvermögen, der
        Hörverarbeitung und der sprachlichen Entwicklung im Kindesalter.
      </p>
    </main>
  );
}
