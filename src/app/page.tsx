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
      <section className="max-w-3xl mb-32">
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
      <section className="prose max-w-3xl mb-32">
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

      {/* LEISTUNGEN ÜBERSICHT */}
      <section className="mb-32">
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl font-medium text-[#1F3D3A] mb-4">
            Medizinische Schwerpunkte
          </h2>
          <p className="text-[#5F6F73] leading-relaxed">
            Die Praxis ist bewusst klar strukturiert. Jeder Schwerpunkt steht
            für eine differenzierte Diagnostik, nachvollziehbare Befund­
            interpretation und individuell abgestimmte Empfehlungen.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-3">
          
          {/* HNO allgemein */}
          <div>
            <h3 className="text-lg font-medium text-[#1F3D3A] mb-3">
              HNO allgemein
            </h3>
            <p className="text-sm text-[#5F6F73] leading-relaxed mb-4">
              Diagnostik und Behandlung von Erkrankungen des Ohres, der Nase
              und des Halses – leitlinienorientiert und individuell angepasst.
            </p>
            <a
              href="/leistungen/hno-allgemein"
              className="text-sm font-medium text-[#1F3D3A]"
            >
              Mehr erfahren →
            </a>
          </div>

          {/* Pädaudiologie */}
          <div>
            <h3 className="text-lg font-medium text-[#1F3D3A] mb-3">
              Pädaudiologie
            </h3>
            <p className="text-sm text-[#5F6F73] leading-relaxed mb-4">
              Hör- und Sprachdiagnostik im Kindesalter, inklusive differenzierter
              Abklärung bei unklarem Hörverhalten oder sprachlicher Entwicklung.
            </p>
            <a
              href="/leistungen/paedaudiologie"
              className="text-sm font-medium text-[#1F3D3A]"
            >
              Mehr erfahren →
            </a>
          </div>

          {/* Phoniatrie */}
          <div>
            <h3 className="text-lg font-medium text-[#1F3D3A] mb-3">
              Phoniatrie / Stimme
            </h3>
            <p className="text-sm text-[#5F6F73] leading-relaxed mb-4">
              Abklärung von Stimm-, Sprech- und Schluckstörungen, insbesondere
              bei beruflicher Stimm­belastung.
            </p>
            <a
              href="/leistungen/phoniatrie-stimme"
              className="text-sm font-medium text-[#1F3D3A]"
            >
              Mehr erfahren →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
