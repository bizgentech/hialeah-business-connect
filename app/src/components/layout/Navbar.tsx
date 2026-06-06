"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Inlined from /public/assets/logo.svg — Stitch asset, geometric H + growth arrow */
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        d="M20 20V80M20 50H80M80 20V80"
        stroke="#002147"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M40 35L50 25L60 35M50 25V65"
        stroke="#f59e0b"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="75" r="5" fill="#00bcd4" />
    </svg>
  );
}

const navLinks = [
  { href: "/",          label: "Home"             },
  { href: "/directory", label: "Businesses"        },
  { href: "/offers",    label: "Offers"            },
  { href: "/kiosk",     label: "Kiosks"            },
  { href: "/register",  label: "Add Your Business" },
  { href: "/admin",     label: "Admin"             },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
            className="flex items-center gap-2.5 font-bold text-xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-secondary)",
            }}
          >
            <LogoMark size={36} />
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

      {/* ── Mobile header ── */}
      <header
        className="md:hidden sticky top-0 z-50 flex items-center justify-between px-4 h-16 border-b"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-outline-variant)",
          boxShadow: "0 1px 3px rgba(0,33,71,0.06)",
        }}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 font-bold text-lg"
          style={{
            fontFamily: "var(--font-outfit)",
            color: "var(--color-secondary)",
          }}
        >
          <LogoMark size={28} />
          Hialeah Connect
        </Link>

        <button
          className="p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-on-surface)" }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            /* X close icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="21" y2="6"  />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </header>

      {/* ── Mobile slide-down menu ── */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col"
          style={{ top: "64px" }}
        >
          {/* Backdrop — tap to close */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(0,33,71,0.45)",
              backdropFilter: "blur(2px)",
            }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <nav
            className="relative w-full border-b"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-outline-variant)",
              boxShadow: "0 8px 24px rgba(0,33,71,0.18)",
            }}
          >
            <ul className="flex flex-col py-2">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-5 py-4 text-base font-semibold transition-colors"
                      style={{
                        color: isActive
                          ? "var(--color-secondary)"
                          : "var(--color-on-surface)",
                        backgroundColor: isActive
                          ? "rgba(17,92,185,0.06)"
                          : "transparent",
                        borderLeft: isActive
                          ? "3px solid var(--color-secondary)"
                          : "3px solid transparent",
                      }}
                    >
                      {label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ opacity: 0.35 }}>
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="px-5 py-4 border-t" style={{ borderColor: "var(--color-outline-variant)" }}>
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                Add Your Business Free →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
