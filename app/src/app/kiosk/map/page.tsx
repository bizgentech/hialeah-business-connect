import Link from "next/link";
import Image from "next/image";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Kiosk Map – Hialeah Business Connect",
};

const BOTTOM_CATEGORIES = [
  "All",
  "Café & Food",
  "Retail",
  "Services",
  "Health",
  "Auto",
  "Financial",
  "More",
];

// Approximate pin positions on the map image (percent from top-left)
const PIN_POSITIONS = [
  { top: "38%", left: "24%" },
  { top: "44%", left: "66%" },
  { top: "26%", left: "48%" },
  { top: "58%", left: "32%" },
  { top: "35%", left: "54%" },
  { top: "62%", left: "56%" },
];

const NEIGHBORHOOD_LABELS = [
  { label: "WEST HIALEAH",    top: "30%", left: "18%" },
  { label: "EAST HIALEAH",    top: "30%", left: "66%" },
  { label: "HIALEAH GARDENS", top: "14%", left: "46%" },
  { label: "DOWNTOWN",        top: "60%", left: "44%" },
];

export default function KioskMapPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      {/* ── Header ── */}
      <header
        className="px-6 py-3 flex items-center gap-3 border-b flex-shrink-0"
        style={{
          backgroundColor: "var(--color-primary-container)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <Link
          href="/kiosk"
          className="px-3 py-1.5 rounded-lg text-sm font-semibold flex-shrink-0 transition-opacity hover:opacity-80"
          style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff" }}
        >
          ← Back
        </Link>

        {/* Search bar */}
        <div
          className="flex-grow flex items-center gap-2 px-4 py-2 rounded-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Search businesses, neighborhoods…
          </span>
        </div>

        {/* Scan to Send */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold flex-shrink-0 transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "rgba(255,255,255,0.12)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Scan to Send
        </button>

        {/* Title + location */}
        <div className="flex-shrink-0 text-right">
          <h1
            className="font-bold text-sm leading-none"
            style={{ fontFamily: "var(--font-outfit)", color: "#fff" }}
          >
            Explore Nearby
          </h1>
          <p
            className="text-xs mt-0.5 font-semibold"
            style={{ color: "var(--color-gold)" }}
          >
            Hialeah, FL
          </p>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-grow overflow-hidden">

        {/* Left sidebar */}
        <div
          className="w-80 flex-shrink-0 flex flex-col border-r overflow-hidden"
          style={{
            borderColor: "var(--color-outline-variant)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          {/* Filters */}
          <div
            className="p-4 border-b flex-shrink-0"
            style={{ borderColor: "var(--color-outline-variant)" }}
          >
            <div className="flex gap-2 mb-3">
              <select
                className="flex-1 rounded-lg px-3 py-2 text-sm outline-none"
                style={{
                  border: "1px solid var(--color-outline-variant)",
                  backgroundColor: "var(--color-surface-container-lowest)",
                  color: "var(--color-on-surface)",
                }}
              >
                <option>All Neighborhoods</option>
                <option>West Hialeah</option>
                <option>East Hialeah</option>
                <option>Hialeah Gardens</option>
                <option>Downtown Hialeah</option>
              </select>
              <select
                className="flex-1 rounded-lg px-3 py-2 text-sm outline-none"
                style={{
                  border: "1px solid var(--color-outline-variant)",
                  backgroundColor: "var(--color-surface-container-lowest)",
                  color: "var(--color-on-surface)",
                }}
              >
                <option>Sort: Nearby</option>
                <option>Sort: A–Z</option>
                <option>Sort: Featured</option>
              </select>
            </div>
            <p className="text-xs" style={{ color: "var(--color-outline)" }}>
              {BUSINESSES.length} businesses found
            </p>
          </div>

          {/* Business list */}
          <div className="overflow-y-auto flex-grow">
            {BUSINESSES.map((b, i) => (
              <Link
                key={b.id}
                href={`/directory/${b.id}`}
                className="flex gap-3 p-3 border-b transition-colors"
                style={{
                  borderColor: "var(--color-outline-variant)",
                  backgroundColor: "transparent",
                }}
              >
                {/* Photo thumbnail */}
                <div
                  className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative"
                  style={{ backgroundColor: "var(--color-surface-container)" }}
                >
                  {b.image ? (
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container-highest))",
                      }}
                    >
                      <span className="text-2xl opacity-50">🏪</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1 mb-0.5">
                    <p
                      className="font-semibold text-sm leading-snug"
                      style={{ color: "var(--color-primary-container)" }}
                    >
                      {b.name}
                    </p>
                    {b.isFeatured && (
                      <span
                        className="text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                      >
                        ★
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs mb-1.5"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {b.category} · {b.area}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-yellow-400 text-xs leading-none">★★★★★</span>
                      <span className="text-xs" style={{ color: "var(--color-outline)" }}>
                        {(i * 0.3 + 0.2).toFixed(1)} mi
                      </span>
                    </div>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-lg"
                      style={{
                        backgroundColor: "rgba(17,92,185,0.08)",
                        color: "var(--color-secondary)",
                      }}
                    >
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Map area ── */}
        <div
          className="flex-grow relative overflow-hidden"
          style={{ backgroundColor: "var(--color-surface-container)" }}
        >
          {/* Map scene */}
          <Image
            src="/assets/scenes/kiosk-map.jpg"
            alt="Stylized digital map of Hialeah business locations"
            fill
            className="object-cover opacity-75"
            sizes="70vw"
            priority
          />

          {/* Neighborhood labels */}
          <div className="absolute inset-0 pointer-events-none">
            {NEIGHBORHOOD_LABELS.map(({ label, top, left }) => (
              <div
                key={label}
                className="absolute px-2 py-1 rounded text-[11px] font-bold tracking-wider"
                style={{
                  top,
                  left,
                  transform: "translateX(-50%)",
                  color: "rgba(255,255,255,0.92)",
                  backgroundColor: "rgba(0,33,71,0.58)",
                  backdropFilter: "blur(4px)",
                  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Business pins */}
          <div className="absolute inset-0 pointer-events-none">
            {BUSINESSES.map((b, i) => {
              const pos = PIN_POSITIONS[i % PIN_POSITIONS.length];
              return (
                <div
                  key={b.id}
                  className="absolute flex flex-col items-center"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold shadow-lg"
                    style={{
                      backgroundColor: b.isFeatured
                        ? "var(--color-gold)"
                        : "var(--color-secondary)",
                      color: "#fff",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className="mt-1 px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap shadow-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.92)",
                      color: "var(--color-primary-container)",
                    }}
                  >
                    {b.name.split(" ").slice(0, 2).join(" ")}
                  </div>
                  {/* Pin stem */}
                  <div
                    className="w-0.5 h-2"
                    style={{
                      backgroundColor: b.isFeatured
                        ? "var(--color-gold)"
                        : "var(--color-secondary)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Coming-soon floating badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
            <div
              className="px-5 py-2.5 rounded-xl text-sm font-semibold backdrop-blur-sm shadow-ambient"
              style={{
                backgroundColor: "rgba(255,255,255,0.92)",
                color: "var(--color-primary-container)",
                border: "1px solid var(--color-outline-variant)",
              }}
            >
              🗺 Interactive Map — Coming Soon
            </div>
            <p
              className="text-xs text-center mt-1.5 font-medium"
              style={{
                color: "rgba(255,255,255,0.88)",
                textShadow: "0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Google Maps integration connects to live database
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t px-5 py-3 flex items-center gap-4 flex-shrink-0"
        style={{
          borderColor: "var(--color-outline-variant)",
          backgroundColor: "var(--color-surface)",
        }}
      >
        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-grow">
          {BOTTOM_CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
              style={
                i === 0
                  ? {
                      backgroundColor: "var(--color-primary-container)",
                      color: "#fff",
                    }
                  : {
                      backgroundColor: "var(--color-surface-container)",
                      color: "var(--color-on-surface-variant)",
                      border: "1px solid var(--color-outline-variant)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stats + CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p
              className="text-xs font-semibold"
              style={{ color: "var(--color-on-surface)" }}
            >
              Near You · Within 1 mi
            </p>
            <p className="text-xs" style={{ color: "var(--color-outline)" }}>
              {BUSINESSES.length} businesses found
            </p>
          </div>
          <Link
            href="/directory"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            View All Businesses
          </Link>
        </div>
      </div>
    </div>
  );
}
