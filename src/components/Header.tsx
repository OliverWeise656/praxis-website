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
    <header className="border-b border-[#E3E6E4] bg-[#F7F8F6]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Praxisname / Logo */}
        <Link
          href="/"
          className="text-base font-medium tracking-wide text-[#1F3D3A]"
        >
          HNO Stimm- & Hörzentrum Stuttgart
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-[#1F3D3A] font-medium"
                    : "text-gray-500 hover:text-[#1F3D3A]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Termin Button */}
        <Link
          href="/termin"
          className="hidden md:inline-block rounded-md border border-[#1F3D3A] px-4 py-2 text-sm text-[#1F3D3A] hover:bg-[#1F3D3A] hover:text-white transition"
        >
          Termin
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t border-[#E3E6E4] px-6 py-4 flex flex-wrap gap-5 text-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "text-[#1F3D3A] font-medium"
                  : "text-gray-500"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
