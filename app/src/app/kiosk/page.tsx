import Link from "next/link";
import { BUSINESSES, CATEGORIES } from "@/lib/data";

export const metadata = {
  title: "Kiosk – Hialeah Business Connect",
};

export default function KioskHomePage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-primary-container)" }}
    >
      {/* Kiosk header */}
      <header className="px-8 py-6 flex justify-between items-center">
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-1"
            style={{ color: "var(--color-gold)" }}
          >
            City of Hialeah
          </p>
          <h1
            className="font-bold text-2xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "#ffffff",
            }}
          >
            Hialeah Business Connect
          </h1>
        </div>
        <div className="text-right">
          <p
            className="text-xs"
            style={{ color: "var(--color-on-primary-container)" }}
          >
            Touch to explore
          </p>
          <Link
            href="/admin"
            className="text-xs font-semibold mt-1 block transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Admin ›
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow px-8 py-4">
        {/* Search */}
        <div
          className="flex items-center gap-3 p-4 rounded-2xl mb-8"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Search for restaurants, shops, services…
          </span>
        </div>

        {/* Category grid */}
        <div className="mb-8">
          <h2
            className="font-semibold text-sm uppercase tracking-widest mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            Browse by Category
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {CATEGORIES.filter((c) => c !== "All").map((cat) => (
              <Link
                key={cat}
                href={`/directory?category=${cat}`}
                className="py-4 rounded-xl text-center font-semibold transition-all hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured businesses */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2
              className="font-semibold text-sm uppercase tracking-widest"
              style={{ color: "var(--color-gold)" }}
            >
              Featured Nearby
            </h2>
            <Link
              href="/kiosk/map"
              className="text-sm font-semibold"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              View Map →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {BUSINESSES.filter((b) => b.isFeatured).map((b) => (
              <Link
                key={b.id}
                href={`/directory/${b.id}`}
                className="p-5 rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-bold"
                    style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                  >
                    ★ Featured
                  </span>
                </div>
                <h3
                  className="font-bold text-lg mb-1"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "#ffffff",
                  }}
                >
                  {b.name}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-on-primary-container)" }}>
                  {b.category} · {b.area}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer nav */}
      <nav
        className="px-8 py-5 border-t flex justify-between items-center"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <Link
          href="/directory"
          className="flex flex-col items-center gap-1 text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          <span className="text-2xl">🏪</span> Directory
        </Link>
        <Link
          href="/kiosk/map"
          className="flex flex-col items-center gap-1 text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          <span className="text-2xl">🗺️</span> Map
        </Link>
        <Link
          href="/offers"
          className="flex flex-col items-center gap-1 text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          <span className="text-2xl">🏷️</span> Offers
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-xs font-semibold"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          <span className="text-2xl">🌐</span> Web
        </Link>
      </nav>
    </div>
  );
}
