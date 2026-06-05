import Link from "next/link";
import Image from "next/image";
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

        {/* Map area — Stitch scene: kiosk-map.jpg */}
        <div
          className="flex-grow relative overflow-hidden"
          style={{ backgroundColor: "var(--color-surface-container)" }}
        >
          <Image
            src="/assets/scenes/kiosk-map.jpg"
            alt="Stylized digital map of Hialeah business locations"
            fill
            className="object-cover opacity-70"
            sizes="60vw"
            priority
          />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
            <div
              className="px-5 py-2.5 rounded-xl text-sm font-semibold backdrop-blur-sm shadow-ambient"
              style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                color: "var(--color-primary-container)",
                border: "1px solid var(--color-outline-variant)",
              }}
            >
              🗺 Interactive Map — Coming Soon
            </div>
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
            >
              Google Maps / Mapbox integration connects to live database
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
