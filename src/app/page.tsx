import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HNO Stimm- & Hörzentrum Stuttgart | Stimme · Hören · Pädaudiologie",
  description:
    "Fachärztliche HNO-Praxis in Stuttgart mit Schwerpunkt auf Stimme, Hören und Pädaudiologie. Moderne Diagnostik, individuelle Beratung und digitale Services.",
};

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      
      {/* HERO */}
      <section className="max-w-3xl mb-28">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
          Fachärztliche HNO · Stimme · Hören
        </p>

        <h1 className="text-4xl md:text-5xl font-medium leading-tight text-[#1F3D3A] mb-8">
          HNO Stimm- & Hörzentrum<br />
          Stuttgart
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-[#5F6F73] mb-10">
          Präzise Hals-Nasen-Ohren-Medizin mit spezialisierten Schwerpunkten
          in der Phoniatrie, Pädaudiologie sowie der modernen Hör- und
          Stimm­diagnostik.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/termin"
            className="inline-block rounded-md bg-[#1F3D3A] px-6 py-3 text-sm font-medium text-white hover:bg-[#16302E] transition"
          >
            Termin vereinbaren
          </a>

          <a
            href="/online-services"
            className="inline-block rounded-md border border-[#1F3D3A] px-6 py-3 text-sm font-medium text-[#1F3D3A] hover:bg-[#1F3D3A] hover:text-white transition"
          >
            Online-Services
          </a>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="prose max-w-3xl">
        <p>
          Das <strong>HNO Stimm- & Hörzentrum Stuttgart</strong> verbindet
          klassische Hals-Nasen-Ohren-Heilkunde mit spezialisierten
          Schwerpunkten auf Stimme, Hören und kindgerechter Diagnostik.
        </p>

        <p>
          Die medizinische Arbeit folgt einem klaren Prinzip: sorgfältige
          Untersuchung, verständliche Einordnung der Befunde und individuelle,
          maßvolle Empfehlungen – ohne Zeitdruck und ohne unnötige Maßnahmen.
        </p>
      </section>

    </main>
  );
}
