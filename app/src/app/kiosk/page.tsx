import Link from "next/link";
import Image from "next/image";
import KioskClock from "@/components/ui/KioskClock";
import { BUSINESSES, CATEGORIES, OFFERS } from "@/lib/data";

export const metadata = {
  title: "Kiosk – Hialeah Business Connect",
};

/* ─── Mock distances ─────────────────────────────────────────── */
const MOCK_DIST = ["0.2 mi", "0.5 mi", "0.4 mi", "0.7 mi", "0.3 mi", "0.6 mi"];

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function KioskHomePage() {
  const cats = CATEGORIES.filter((c) => c !== "All");

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-primary-container)" }}
    >

      {/* ══════════ HEADER ══════════ */}
      <header
        className="px-8 py-4 flex items-center justify-between flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-3">
          {/* Brand icon tile */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: "rgba(245,158,11,0.14)",
              border: "1.5px solid var(--color-gold)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>

          <div>
            <p
              className="text-[10px] font-black tracking-[0.18em] uppercase leading-none mb-0.5"
              style={{ color: "var(--color-gold)" }}
            >
              City of Hialeah
            </p>
            <h1
              className="font-bold text-lg leading-none"
              style={{ fontFamily: "var(--font-outfit)", color: "#ffffff" }}
            >
              Hialeah Business Connect
            </h1>
            <p
              className="text-xs mt-0.5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Discover local. Support Hialeah.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <KioskClock />
          <Link
            href="/admin"
            className="text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.18)" }}
          >
            Admin ›
          </Link>
        </div>
      </header>

      {/* ══════════ SCROLLABLE BODY ══════════ */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden">

        {/* ── Hero / Welcome Banner ── */}
        <div className="px-8 pt-6 pb-5">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ height: "220px" }}
          >
            {/* Background image */}
            <Image
              src="/assets/scenes/hero-streetscape.png"
              alt="Hialeah commercial street"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 90vw, 100vw"
              priority
            />

            {/* Navy gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,22,52,0.95) 30%, rgba(0,22,52,0.72) 65%, rgba(0,22,52,0.45) 100%)",
              }}
            />

            {/* Dot-grid texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                opacity: 0.09,
              }}
            />

            {/* Gold left accent bar */}
            <div
              className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full"
              style={{ backgroundColor: "var(--color-gold)" }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-10">
              <div className="flex items-center justify-between w-full gap-8">

                {/* Left: welcome text */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-black tracking-[0.2em] uppercase mb-2.5"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Welcome
                  </p>
                  <h2
                    className="font-black leading-tight mb-3"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "#ffffff",
                      fontSize: "1.875rem",
                      maxWidth: "460px",
                    }}
                  >
                    Hialeah Business Connect
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.68)", maxWidth: "400px" }}
                  >
                    Discover local businesses, offers, and places near you.
                  </p>
                </div>

                {/* Right: primary CTAs */}
                <div className="flex flex-col gap-3 flex-shrink-0">
                  <Link
                    href="/kiosk/map"
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base whitespace-nowrap transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: "var(--color-gold)",
                      color: "var(--color-primary-container)",
                      fontSize: "1rem",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Explore Nearby
                  </Link>

                  <Link
                    href="/offers"
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base whitespace-nowrap transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "#ffffff",
                      border: "1.5px solid rgba(255,255,255,0.28)",
                      fontSize: "1rem",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    View Current Offers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Search ── */}
        <div className="px-8 pb-6">
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.09)",
              border: "1.5px solid rgba(255,255,255,0.14)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span
              className="text-lg"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Search for restaurants, shops, services…
            </span>
          </div>
        </div>

        {/* ── Category Grid ── */}
        <div className="px-8 pb-6">
          <div className="flex items-center justify-between mb-4">
            <p
              className="text-xs font-black tracking-[0.16em] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              Browse by Category
            </p>
            <Link
              href="/directory"
              className="text-xs font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cats.length}, 1fr)` }}>
            {cats.map((cat) => (
              <Link
                key={cat}
                href={`/directory?category=${cat}`}
                className="flex flex-col items-center gap-2.5 py-4 px-2 rounded-2xl text-center transition-all hover:scale-105"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.11)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <KioskCatIcon category={cat} />
                </div>
                <span
                  className="text-xs font-bold leading-tight"
                  style={{ color: "#ffffff" }}
                >
                  {cat}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Featured Nearby + Current Offers ── */}
        <div className="px-8 pb-6 flex gap-6 items-start">

          {/* Left: Featured Nearby */}
          <div className="flex-grow min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-xs font-black tracking-[0.16em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Featured Nearby
              </p>
              <Link
                href="/directory"
                className="text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                View All →
              </Link>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
              {BUSINESSES.map((b, i) => (
                <Link
                  key={b.id}
                  href={`/directory/${b.id}`}
                  className="flex-shrink-0 rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                  style={{
                    width: "242px",
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: b.isFeatured
                      ? "1.5px solid var(--color-gold)"
                      : "1px solid rgba(255,255,255,0.11)",
                  }}
                >
                  {/* Photo */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "140px", backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    {b.image ? (
                      <Image
                        src={b.image}
                        alt={b.name}
                        fill
                        className="object-cover"
                        sizes="242px"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
                        }}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="1.5"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                    )}

                    {/* Bottom scrim */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,33,71,0.72) 0%, transparent 55%)",
                      }}
                    />

                    {/* Badge */}
                    {b.isFeatured ? (
                      <span
                        className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-xs font-black"
                        style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                      >
                        ★ FEATURED
                      </span>
                    ) : b.isVerified ? (
                      <span
                        className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-xs font-bold"
                        style={{
                          backgroundColor: "rgba(17,92,185,0.88)",
                          color: "#fff",
                        }}
                      >
                        ✓ Verified
                      </span>
                    ) : null}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3
                      className="font-bold text-sm leading-snug mb-1"
                      style={{
                        color: "#ffffff",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {b.name}
                    </h3>
                    <p
                      className="text-xs mb-2.5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {b.category} · {b.area}
                    </p>
                    <div className="flex items-center justify-between">
                      <span style={{ color: "#facc15", fontSize: "11px" }}>
                        ★★★★★
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {MOCK_DIST[i]}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              {/* Trailing spacer */}
              <div className="flex-shrink-0 w-2" />
            </div>
          </div>

          {/* Right: Current Offers */}
          <div className="flex-shrink-0" style={{ width: "312px" }}>
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-xs font-black tracking-[0.16em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Current Offers
              </p>
              <Link
                href="/offers"
                className="text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                View All →
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {OFFERS.map((o) => (
                <div
                  key={o.id}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.11)",
                  }}
                >
                  {/* Offer image */}
                  {o.image && (
                    <div
                      className="relative overflow-hidden"
                      style={{ height: "82px" }}
                    >
                      <Image
                        src={o.image}
                        alt={o.title}
                        fill
                        className="object-cover"
                        sizes="312px"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,33,71,0.82) 0%, transparent 55%)",
                        }}
                      />
                      {/* Discount badge */}
                      <span
                        className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-xs font-black"
                        style={{
                          backgroundColor: "var(--color-gold)",
                          color: "var(--color-primary-container)",
                        }}
                      >
                        {o.discount}
                      </span>
                      {/* Hot badge */}
                      {o.isHot && (
                        <span
                          className="absolute top-2.5 right-2.5 px-2 py-1 rounded-lg text-xs font-black"
                          style={{
                            backgroundColor: "var(--color-error)",
                            color: "#fff",
                          }}
                        >
                          HOT
                        </span>
                      )}
                    </div>
                  )}

                  <div className="px-4 py-3">
                    <p
                      className="text-sm font-bold leading-snug mb-0.5"
                      style={{ color: "#ffffff" }}
                    >
                      {o.title}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {o.businessName}
                    </p>
                    <p
                      className="text-xs mt-1.5 font-medium"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      Expires {o.expires}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ BOTTOM NAV ══════════ */}
      <nav
        className="flex-shrink-0 flex justify-around items-center px-4 py-3.5"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(0,0,0,0.22)",
        }}
      >
        {[
          {
            href: "/kiosk",
            label: "Home",
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
          },
          {
            href: "/directory",
            label: "Directory",
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            ),
          },
          {
            href: "/kiosk/map",
            label: "Map",
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
            ),
          },
          {
            href: "/offers",
            label: "Offers",
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            ),
          },
        ].map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1.5 px-8 py-2 rounded-xl font-bold transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.72)", fontSize: "11px" }}
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   CATEGORY ICONS  (white SVG on frosted tile)
   ════════════════════════════════════════════════════════════════ */
function KioskCatIcon({ category }: { category: string }) {
  const s = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "rgba(255,255,255,0.85)",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (category) {
    case "Restaurants":
      return (
        <svg {...s}>
          <path d="M18 8h1a4 4 0 010 8h-1" />
          <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case "Retail":
      return (
        <svg {...s}>
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      );
    case "Services":
      return (
        <svg {...s}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
          <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" />
        </svg>
      );
    case "Health":
      return (
        <svg {...s}>
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      );
    case "Auto":
      return (
        <svg {...s}>
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case "Beauty":
      return (
        <svg {...s}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "Education":
      return (
        <svg {...s}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    default:
      return (
        <svg {...s}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}
