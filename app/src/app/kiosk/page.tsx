import Link from "next/link";
import Image from "next/image";
import KioskClock from "@/components/ui/KioskClock";
import { BUSINESSES, CATEGORIES, OFFERS } from "@/lib/data";

export const metadata = {
  title: "Kiosk – Hialeah Business Connect",
};

const CATEGORY_ICONS: Record<string, string> = {
  Restaurants: "🍽️",
  Retail:      "🛍️",
  Services:    "🔧",
  Health:      "💊",
  Auto:        "🚗",
  Beauty:      "💅",
  Education:   "📚",
};

export default function KioskHomePage() {
  const featured = BUSINESSES.filter((b) => b.isFeatured);

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-primary-container)" }}
    >
      {/* ── Header ── */}
      <header
        className="px-8 py-4 flex items-center justify-between border-b flex-shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-3">
          {/* City seal */}
          <div
            className="w-11 h-11 rounded-full border-2 flex items-center justify-center flex-shrink-0"
            style={{
              borderColor: "var(--color-gold)",
              backgroundColor: "rgba(245,158,11,0.12)",
            }}
          >
            <span className="text-xl">🏛️</span>
          </div>
          <div>
            <p
              className="text-[10px] font-bold tracking-widest uppercase leading-none mb-0.5"
              style={{ color: "var(--color-gold)" }}
            >
              City of Hialeah
            </p>
            <h1
              className="font-bold text-lg leading-none"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "#ffffff",
              }}
            >
              Hialeah Business Connect
            </h1>
            <p
              className="text-xs mt-0.5"
              style={{ color: "var(--color-on-primary-container)" }}
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
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Admin ›
          </Link>
        </div>
      </header>

      {/* ── Search + Explore Map ── */}
      <div className="px-8 py-4 flex gap-4 flex-shrink-0">
        <div
          className="flex-grow flex items-center gap-3 px-5 py-3.5 rounded-2xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span
            className="text-base"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Search for restaurants, shops, services…
          </span>
        </div>
        <Link
          href="/kiosk/map"
          className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm whitespace-nowrap transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          </svg>
          EXPLORE MAP
        </Link>
      </div>

      {/* ── Categories ── */}
      <div className="px-8 pb-4 flex-shrink-0">
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--color-gold)" }}
        >
          Browse by Category
        </p>
        <div className="grid grid-cols-8 gap-2">
          {CATEGORIES.filter((c) => c !== "All").map((cat) => (
            <Link
              key={cat}
              href={`/directory?category=${cat}`}
              className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl text-center transition-all hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-2xl leading-none">
                {CATEGORY_ICONS[cat] ?? "⋯"}
              </span>
              <span
                className="text-xs font-semibold leading-tight"
                style={{ color: "#ffffff" }}
              >
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Main content: Featured + Offers ── */}
      <main className="flex-grow px-8 pb-4 flex gap-6 overflow-hidden min-h-0">

        {/* Left: Featured Nearby + Popular */}
        <div className="flex-grow min-w-0 flex flex-col gap-5 overflow-hidden">

          {/* Featured Nearby */}
          <div className="flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-3 flex-shrink-0">
              <p
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Featured Nearby
              </p>
              <Link
                href="/directory"
                className="text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                View All →
              </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide flex-shrink-0">
              {featured.map((b) => (
                <Link
                  key={b.id}
                  href={`/directory/${b.id}`}
                  className="flex-shrink-0 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    width: "210px",
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {/* Photo */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "110px", backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    {b.image ? (
                      <Image
                        src={b.image}
                        alt={b.name}
                        fill
                        className="object-cover"
                        sizes="210px"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
                        }}
                      >
                        <span className="text-4xl opacity-40">
                          {CATEGORY_ICONS[b.category] ?? "🏪"}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,33,71,0.65) 0%, transparent 55%)",
                      }}
                    />
                    <span
                      className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold"
                      style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                    >
                      ★ FEATURED
                    </span>
                  </div>

                  <div className="p-3">
                    <h3
                      className="font-bold text-sm leading-snug mb-0.5"
                      style={{
                        color: "#ffffff",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {b.name}
                    </h3>
                    <p
                      className="text-xs mb-1.5"
                      style={{ color: "var(--color-on-primary-container)" }}
                    >
                      {b.category} · {b.area}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 text-xs">★★★★★</span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        0.5 mi
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              {/* spacer */}
              <div className="flex-shrink-0 w-1" />
            </div>
          </div>

          {/* Popular Nearby */}
          <div>
            <p
              className="text-[10px] font-bold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Popular Nearby
            </p>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
              {BUSINESSES.map((b, i) => (
                <Link
                  key={b.id}
                  href={`/directory/${b.id}`}
                  className="flex-shrink-0 flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    minWidth: "170px",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg overflow-hidden relative flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  >
                    {b.image ? (
                      <Image
                        src={b.image}
                        alt={b.name}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-base">
                          {CATEGORY_ICONS[b.category] ?? "🏪"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold truncate"
                      style={{ color: "#ffffff" }}
                    >
                      {b.name}
                    </p>
                    <p
                      className="text-xs truncate"
                      style={{ color: "var(--color-on-primary-container)" }}
                    >
                      {b.category} · {(i * 0.3 + 0.2).toFixed(1)} mi
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Current Offers */}
        <div className="w-60 flex-shrink-0 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <p
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              Current Offers
            </p>
            <Link
              href="/offers"
              className="text-xs font-semibold transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              View All →
            </Link>
          </div>

          <div className="flex flex-col gap-2.5 overflow-y-auto scrollbar-hide flex-grow">
            {OFFERS.map((o) => (
              <div
                key={o.id}
                className="rounded-xl overflow-hidden flex-shrink-0"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Offer image */}
                {o.image && (
                  <div className="relative overflow-hidden" style={{ height: "72px" }}>
                    <Image
                      src={o.image}
                      alt={o.title}
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,33,71,0.75) 0%, transparent 55%)",
                      }}
                    />
                    <span
                      className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-xs font-bold"
                      style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                    >
                      {o.discount}
                    </span>
                    {o.isHot && (
                      <span className="absolute top-2 right-2 text-sm">🔥</span>
                    )}
                  </div>
                )}
                <div className="p-2.5">
                  <p
                    className="text-xs font-semibold leading-snug mb-0.5"
                    style={{ color: "#ffffff" }}
                  >
                    {o.title}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-on-primary-container)" }}
                  >
                    {o.businessName}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Expires {o.expires}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Bottom nav ── */}
      <nav
        className="px-8 py-3.5 border-t flex justify-around items-center flex-shrink-0"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          backgroundColor: "rgba(0,0,0,0.18)",
        }}
      >
        {[
          { href: "/kiosk",     icon: "🏠",  label: "Home"      },
          { href: "/directory", icon: "🏪",  label: "Directory" },
          { href: "/kiosk/map", icon: "🗺️", label: "Map"       },
          { href: "/offers",    icon: "🏷️", label: "Offers"    },
        ].map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <span className="text-xl leading-none">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
