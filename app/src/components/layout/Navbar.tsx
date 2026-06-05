"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Businesses" },
  { href: "/offers", label: "Offers" },
  { href: "/kiosk", label: "Kiosks" },
  { href: "/register", label: "Add Your Business" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop nav */}
      <nav
        className="hidden md:flex sticky top-0 z-50 w-full border-b"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-outline-variant)",
          boxShadow: "0 1px 3px rgba(0,33,71,0.06)",
        }}
      >
        <div
          className="flex justify-between items-center w-full mx-auto h-20 px-10"
          style={{ maxWidth: "1280px" }}
        >
          <Link
            href="/"
            className="font-bold text-xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-secondary)",
            }}
          >
            Hialeah Business Connect
          </Link>

          <div className="flex items-center gap-8">
            <div className="flex space-x-6">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-semibold tracking-wide transition-colors"
                    style={{
                      color: isActive
                        ? "var(--color-secondary)"
                        : "var(--color-on-surface-variant)",
                      borderBottom: isActive
                        ? "2px solid var(--color-secondary)"
                        : "2px solid transparent",
                      paddingBottom: "2px",
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/register"
              className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              Add Your Business Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile header */}
      <header
        className="md:hidden sticky top-0 z-50 flex items-center justify-between px-4 h-16 border-b"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-outline-variant)",
        }}
      >
        <Link
          href="/"
          className="font-bold text-lg"
          style={{
            fontFamily: "var(--font-outfit)",
            color: "var(--color-secondary)",
          }}
        >
          Hialeah Connect
        </Link>
        <button
          className="p-2"
          style={{ color: "var(--color-on-surface)" }}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>
    </>
  );
}
