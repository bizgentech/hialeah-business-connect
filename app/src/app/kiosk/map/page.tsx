import Link from "next/link";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Kiosk Map – Hialeah Business Connect",
};

export default function KioskMapPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      {/* Kiosk header */}
      <header
        className="px-8 py-5 flex justify-between items-center border-b"
        style={{
          backgroundColor: "var(--color-primary-container)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/kiosk"
            className="px-3 py-1.5 rounded-lg text-sm font-semibold"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#ffffff",
            }}
          >
            ← Back
          </Link>
          <h1
            className="font-bold text-xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "#ffffff",
            }}
          >
            Explore Nearby
          </h1>
        </div>
        <p className="text-sm" style={{ color: "var(--color-gold)" }}>
          Hialeah, FL · Interactive Map
        </p>
      </header>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div
          className="w-80 flex-shrink-0 border-r overflow-y-auto"
          style={{
            borderColor: "var(--color-outline-variant)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <div className="p-4">
            <div className="relative mb-4">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: "var(--color-outline)" }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Filter businesses…"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm outline-none"
                style={{
                  backgroundColor: "var(--color-surface-container-lowest)",
                  border: "1px solid var(--color-outline-variant)",
                  color: "var(--color-on-surface)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              {BUSINESSES.map((b) => (
                <Link
                  key={b.id}
                  href={`/directory/${b.id}`}
                  className="p-3 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer block"
                  style={{
                    backgroundColor: "var(--color-surface-container-low)",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-primary-container)" }}
                    >
                      {b.name}
                    </p>
                    {b.isFeatured && (
                      <span
                        className="text-xs font-bold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                      >
                        ★
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {b.category} · {b.area}
                  </p>

                  {/* QR CTA */}
                  <div
                    className="mt-2 flex items-center gap-2 py-1.5 px-2 rounded-lg text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(17,92,185,0.08)",
                      color: "var(--color-secondary)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                    Scan to send to phone
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Map area */}
        <div
          className="flex-grow flex flex-col items-center justify-center gap-4 p-8"
          style={{ backgroundColor: "var(--color-surface-container)" }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: "var(--color-outline)" }}
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1="8" y1="2" x2="8" y2="18" />
            <line x1="16" y1="6" x2="16" y2="22" />
          </svg>
          <p
            className="text-lg font-semibold"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Interactive Map View
          </p>
          <p
            className="text-sm text-center max-w-xs"
            style={{ color: "var(--color-outline)" }}
          >
            Map integration (Google Maps or Mapbox) will be connected to the
            production database with live business coordinates.
          </p>
        </div>
      </div>
    </div>
  );
}
