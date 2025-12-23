import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F7F8F6] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm text-gray-600">
        
        {/* Praxis */}
        <div>
          <p className="font-medium text-gray-900">
            HNO Stimm- & Hörzentrum Stuttgart
          </p>
          <p className="mt-2">
            Fachärztliche Hals-Nasen-Ohren-Heilkunde<br />
            Schwerpunkt Stimme, Hören und Pädaudiologie
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-medium text-gray-900">Navigation</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/leistungen">Leistungen</Link></li>
            <li><Link href="/praxis">Praxis</Link></li>
            <li><Link href="/online-services">Online-Services</Link></li>
            <li><Link href="/termin">Termin</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <p className="font-medium text-gray-900">Rechtliches</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} HNO Stimm- & Hörzentrum Stuttgart
      </div>
    </footer>
  );
}
