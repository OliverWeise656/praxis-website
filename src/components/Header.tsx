"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/praxis", label: "Praxis" },
  { href: "/online-services", label: "Online-Services" },
  { href: "/termin", label: "Termin" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Praxisname */}
        <Link href="/" className="text-lg font-semibold text-gray-900">
          HNO Stimm- & Hörzentrum Stuttgart
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-gray-900 ${
                pathname === item.href
                  ? "text-gray-900 font-medium"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/termin"
          className="hidden md:inline-block rounded-md border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
        >
          Termin
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t border-gray-200 px-6 py-3 flex flex-wrap gap-4 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${
              pathname === item.href
                ? "text-gray-900 font-medium"
                : "text-gray-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
