import Link from "next/link";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Explore Nearby – Hialeah Business Connect",
};

/* ─── Category colour palette ────────────────────────────────── */
const CAT_BG: Record<string, string> = {
  Restaurant: "#f97316",
  Retail:     "#ec4899",
  Services:   "#8b5cf6",
  Health:     "#0d9488",
  Auto:       "#3b82f6",
};
const catBg = (cat: string) => CAT_BG[cat] ?? "#115cb9";

/* ─── Mock distances (kiosk — static/no geolocation) ─────────── */
const DIST = ["0.2 mi", "0.6 mi", "0.3 mi", "0.7 mi", "0.5 mi", "0.4 mi"];

/* ─── Map overlays ───────────────────────────────────────────── */
const PIN_POSITIONS = [
  { top: "38%", left: "22%" },
  { top: "44%", left: "68%" },
  { top: "24%", left: "47%" },
  { top: "60%", left: "30%" },
  { top: "33%", left: "56%" },
  { top: "64%", left: "58%" },
];

const NEIGHBORHOOD_LABELS = [
  { label: "WEST HIALEAH",     top: "30%", left: "16%" },
  { label: "EAST HIALEAH",     top: "30%", left: "70%" },
  { label: "HIALEAH GARDENS",  top: "11%", left: "46%" },
  { label: "DOWNTOWN HIALEAH", top: "64%", left: "46%" },
];

/* ─── Bottom category chips ──────────────────────────────────── */
const BOTTOM_CATS = [
  "All",
  "Café & Food",
  "Retail",
  "Services",
  "Health",
  "Auto",
  "Financial",
  "More",
];

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function KioskMapPage() {
  return (
    <div
      className="h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
    >

      {/* ══════════ HEADER ══════════ */}
      <header
        className="flex items-center gap-5 px-6 flex-shrink-0"
        style={{
          backgroundColor: "var(--color-primary-container)",
          height: "72px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Brand mark */}
        <Link
          href="/kiosk"
          className="flex items-center gap-3 flex-shrink-0 transition-opacity hover:opacity-80"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <LogoMark />
          </div>
          <div>
            <p
              className="text-white font-black text-base leading-none tracking-widest"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              HIALEAH
            </p>
            <p
              className="font-bold text-[10px] leading-none tracking-[0.18em] mt-0.5"
              style={{ color: "var(--color-gold)" }}
            >
              BUSINESS CONNECT
            </p>
          </div>
        </Link>

        {/* Divider */}
        <div
          className="h-9 w-px flex-shrink-0"
          style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
        />

        {/* Page title */}
        <div className="flex-shrink-0">
          <h1
            className="text-white font-bold text-xl leading-none"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Explore Nearby
          </h1>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
            Discover local businesses in Hialeah
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <HeaderBtn icon={<SearchSvg />} label="Search" />
          <HeaderBtn icon={<QRSvg />} label="Scan to Send" />
          <HeaderBtn icon={<GlobeSvg />} label="Español" />

          {/* City badge */}
          <div
            className="ml-2 px-3 py-2 rounded-xl flex-shrink-0 text-right"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-white font-bold text-xs leading-none">City of Hialeah</p>
            <p
              className="text-[10px] font-medium mt-0.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Florida
            </p>
          </div>
        </div>
      </header>

      {/* ══════════ BODY ══════════ */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── Sidebar ── */}
        <aside
          className="flex flex-col overflow-hidden flex-shrink-0 bg-white"
          style={{
            width: "388px",
            borderRight: "1px solid var(--color-outline-variant)",
          }}
        >
          {/* Search */}
          <div
            className="px-4 pt-4 pb-3 flex-shrink-0"
            style={{ borderBottom: "1px solid var(--color-outline-variant)" }}
          >
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                border: "1.5px solid var(--color-outline-variant)",
                backgroundColor: "var(--color-surface-container-lowest)",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: "var(--color-outline)", flexShrink: 0 }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-sm" style={{ color: "var(--color-outline)" }}>
                Search businesses, categories, or keywords…
              </span>
            </div>
          </div>

          {/* Filters */}
          <div
            className="px-4 py-3 flex-shrink-0"
            style={{ borderBottom: "1px solid var(--color-outline-variant)" }}
          >
            <p
              className="text-[10px] font-black uppercase tracking-[0.14em] mb-2.5"
              style={{ color: "var(--color-outline)" }}
            >
              Filters
            </p>
            <div className="flex gap-2">
              {["All Categories", "All Neighborhoods", "Sort: Nearby"].map((f) => (
                <button
                  key={f}
                  className="flex items-center justify-between gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold flex-1"
                  style={{
                    border: "1px solid var(--color-outline-variant)",
                    color: "var(--color-on-surface)",
                    backgroundColor: "var(--color-surface-container-lowest)",
                  }}
                >
                  <span className="truncate">{f}</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ flexShrink: 0 }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Business list */}
          <div className="overflow-y-auto flex-grow">
            {BUSINESSES.map((b, i) => {
              const bg = catBg(b.category);
              const isActive = i === 3;
              return (
                <Link
                  key={b.id}
                  href={`/directory/${b.id}`}
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors"
                  style={{
                    borderBottom: "1px solid var(--color-outline-variant)",
                    borderLeft: isActive
                      ? "3px solid var(--color-secondary)"
                      : "3px solid transparent",
                    backgroundColor: isActive
                      ? "rgba(17,92,185,0.04)"
                      : "transparent",
                  }}
                >
                  {/* Pin number badge */}
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
                    style={{ backgroundColor: bg, color: "#fff" }}
                  >
                    {i + 1}
                  </div>

                  {/* Category icon tile */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: bg }}
                  >
                    <CatIcon category={b.category} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-sm leading-snug truncate"
                      style={{
                        color: "var(--color-primary-container)",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {b.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {b.category} · {b.area}
                    </p>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: "var(--color-outline)" }}
                    >
                      {DIST[i]}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-1.5 flex-shrink-0 items-end">
                    <span
                      className="px-3 py-1.5 rounded-lg text-xs font-bold"
                      style={{
                        border: isActive
                          ? "1.5px solid var(--color-secondary)"
                          : "1px solid var(--color-outline-variant)",
                        color: isActive
                          ? "var(--color-secondary)"
                          : "var(--color-on-surface)",
                        backgroundColor: isActive
                          ? "rgba(17,92,185,0.06)"
                          : "transparent",
                      }}
                    >
                      Details
                    </span>
                    <span
                      className="flex items-center gap-1 text-[10px] font-semibold"
                      style={{ color: "var(--color-outline)" }}
                    >
                      <svg
                        width="10"
                        height="10"
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
                      Scan to send
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View more */}
          <div
            className="px-4 py-3 flex-shrink-0 flex items-center justify-center"
            style={{
              borderTop: "1px solid var(--color-outline-variant)",
              backgroundColor: "var(--color-surface-container-lowest)",
            }}
          >
            <Link
              href="/directory"
              className="flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-80"
              style={{ color: "var(--color-secondary)" }}
            >
              View More Businesses
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
          </div>
        </aside>

        {/* ── Map area ── */}
        <main
          className="flex-grow relative overflow-hidden"
          style={{ backgroundColor: "#ede9df" }}
        >
          {/* ── CSS/SVG map canvas ── */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, display: "block" }}
          >
            <defs>
              {/* City-block repeating pattern */}
              <pattern
                id="cityblocks"
                x="0"
                y="0"
                width="80"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                {/* Block fill */}
                <rect width="80" height="60" fill="#ede9df" />
                {/* Minor road lines (right + bottom edge) */}
                <rect x="76" y="0" width="4" height="60" fill="#f5f2eb" />
                <rect x="0" y="56" width="80" height="4" fill="#f5f2eb" />
              </pattern>
            </defs>

            {/* ── Base layer (block grid) ── */}
            <rect width="1000" height="700" fill="url(#cityblocks)" />

            {/* ── Water features ── */}
            {/* North canal strip */}
            <rect x="0" y="0" width="1000" height="14" fill="#aac8dc" opacity="0.85" />
            {/* Diagonal Miami Canal */}
            <path
              d="M 395 0 L 430 700"
              stroke="#aac8dc"
              strokeWidth="13"
              fill="none"
              opacity="0.8"
            />
            {/* Small east reservoir */}
            <ellipse cx="870" cy="120" rx="70" ry="38" fill="#aac8dc" opacity="0.6" />

            {/* ── Parks / green zones ── */}
            {/* Hialeah Park (NW corner – racetrack area) */}
            <rect x="0" y="14" width="158" height="195" rx="4" fill="#c2d8ac" opacity="0.75" />
            {/* Inner racetrack oval */}
            <ellipse
              cx="79"
              cy="111"
              rx="58"
              ry="78"
              fill="none"
              stroke="#b0cc98"
              strokeWidth="5"
              opacity="0.7"
            />
            <ellipse cx="79" cy="111" rx="45" ry="62" fill="#d6e8c4" opacity="0.5" />
            {/* Mid-city park */}
            <rect x="530" y="295" width="78" height="55" rx="3" fill="#c2d8ac" opacity="0.7" />
            {/* SE neighbourhood park */}
            <rect x="730" y="510" width="100" height="85" rx="3" fill="#c2d8ac" opacity="0.7" />
            {/* Small NE pocket park */}
            <rect x="810" y="60" width="55" height="45" rx="2" fill="#c2d8ac" opacity="0.6" />

            {/* ── Commercial / industrial blocks (slightly darker) ── */}
            {/* East industrial strip */}
            <rect x="800" y="160" width="200" height="180" fill="#e2ddd2" opacity="0.55" />

            {/* ── Palmetto Expressway SR-826 (diagonal) ── */}
            {/* Shadow / shoulder */}
            <path d="M 318 0 L 572 700" stroke="#d8d0c0" strokeWidth="20" strokeLinecap="round" />
            {/* Road surface */}
            <path d="M 318 0 L 572 700" stroke="#ede8dc" strokeWidth="14" />
            {/* Centre markings */}
            <path
              d="M 318 0 L 572 700"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray="24 16"
              opacity="0.7"
            />

            {/* ── Major E-W roads ── */}
            {/* W 49th St */}
            <line x1="0" y1="107" x2="1000" y2="107" stroke="#ffffff" strokeWidth="6" />
            {/* W 37th St */}
            <line x1="0" y1="214" x2="1000" y2="214" stroke="#ffffff" strokeWidth="6" />
            {/* W 25th St */}
            <line x1="0" y1="321" x2="1000" y2="321" stroke="#ffffff" strokeWidth="6" />
            {/* W 16th St */}
            <line x1="0" y1="428" x2="1000" y2="428" stroke="#ffffff" strokeWidth="6" />
            {/* W 8th St */}
            <line x1="0" y1="535" x2="1000" y2="535" stroke="#ffffff" strokeWidth="6" />
            {/* W 4th St */}
            <line x1="0" y1="620" x2="1000" y2="620" stroke="#ffffff" strokeWidth="4" />

            {/* ── Major N-S roads ── */}
            {/* NW 107th Ave / Red Rd */}
            <line x1="143" y1="0" x2="143" y2="700" stroke="#ffffff" strokeWidth="6" />
            {/* NW 87th Ave / Palm Ave */}
            <line x1="286" y1="0" x2="286" y2="700" stroke="#ffffff" strokeWidth="6" />
            {/* NW 57th Ave / E 4th Ave */}
            <line x1="500" y1="0" x2="500" y2="700" stroke="#ffffff" strokeWidth="6" />
            {/* NW 42nd Ave */}
            <line x1="643" y1="0" x2="643" y2="700" stroke="#ffffff" strokeWidth="5" />
            {/* NW 27th Ave */}
            <line x1="786" y1="0" x2="786" y2="700" stroke="#ffffff" strokeWidth="5" />
            {/* NW 12th Ave */}
            <line x1="929" y1="0" x2="929" y2="700" stroke="#ffffff" strokeWidth="4" />

            {/* ── Street name labels ── */}
            <text x="6" y="101" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">W 49th St</text>
            <text x="6" y="208" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">W 37th St</text>
            <text x="6" y="315" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">W 25th St</text>
            <text x="6" y="422" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">W 16th St</text>
            <text x="148" y="10" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">Red Rd</text>
            <text x="291" y="10" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">Palm Ave</text>
            <text x="505" y="10" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">E 4th Ave</text>
            <text x="648" y="10" fontSize="8" fill="#b0a898" fontFamily="system-ui, sans-serif" fontWeight="500">NW 42nd</text>

            {/* ── Expressway label ── */}
            <text
              x="340"
              y="60"
              fontSize="9"
              fill="#a89e8c"
              fontFamily="system-ui, sans-serif"
              fontWeight="700"
              letterSpacing="1"
              transform="rotate(20 340 60)"
            >
              PALMETTO EXPY SR-826
            </text>
          </svg>

          {/* Neighbourhood labels */}
          {NEIGHBORHOOD_LABELS.map(({ label, top, left }) => (
            <div
              key={label}
              className="absolute z-10 pointer-events-none"
              style={{ top, left, transform: "translateX(-50%)" }}
            >
              <span
                className="inline-block px-2.5 py-1 rounded-md text-[11px] font-black tracking-[0.13em]"
                style={{
                  color: "rgba(255,255,255,0.96)",
                  backgroundColor: "rgba(0,33,71,0.68)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.13)",
                  textShadow: "0 1px 2px rgba(0,0,0,0.45)",
                }}
              >
                {label}
              </span>
            </div>
          ))}

          {/* "You are here" marker */}
          <div
            className="absolute z-20"
            style={{ top: "50%", left: "46%", transform: "translate(-50%,-50%)" }}
          >
            {/* Label pill */}
            <div
              className="absolute whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-lg text-xs font-bold"
              style={{
                bottom: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0,33,71,0.92)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              You are here
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "#3b82f6" }}
              />
            </div>
            {/* Pulse ring */}
            <span
              className="animate-ping absolute inline-flex rounded-full opacity-25"
              style={{
                width: 36,
                height: 36,
                top: -8,
                left: -8,
                backgroundColor: "#3b82f6",
              }}
            />
            {/* Centre dot */}
            <div
              className="relative w-5 h-5 rounded-full border-[3px] border-white shadow-xl"
              style={{ backgroundColor: "#3b82f6" }}
            />
          </div>

          {/* Business pins */}
          {BUSINESSES.map((b, i) => {
            const pos = PIN_POSITIONS[i % PIN_POSITIONS.length];
            const pinColor = b.isFeatured ? "var(--color-gold)" : catBg(b.category);
            return (
              <div
                key={b.id}
                className="absolute z-10 pointer-events-none flex flex-col items-center"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: "translate(-50%, -100%)",
                }}
              >
                {/* Teardrop pin */}
                <svg
                  width="36"
                  height="46"
                  viewBox="0 0 36 46"
                  fill="none"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.38))" }}
                >
                  <path
                    d="M18 2C10.27 2 4 8.27 4 16c0 11.5 14 28 14 28S32 27.5 32 16C32 8.27 25.73 2 18 2z"
                    fill={pinColor}
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <circle cx="18" cy="15" r="7" fill="rgba(255,255,255,0.22)" />
                  <text
                    x="18"
                    y="15"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="system-ui, sans-serif"
                  >
                    {i + 1}
                  </text>
                </svg>

                {/* Name + distance card */}
                <div
                  className="mt-0.5 px-2.5 py-1.5 rounded-lg shadow-md text-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.96)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    minWidth: "90px",
                    maxWidth: "118px",
                  }}
                >
                  <p
                    className="text-[11px] font-bold leading-tight"
                    style={{ color: "var(--color-primary-container)" }}
                  >
                    {b.name.split(" ").slice(0, 2).join(" ")}
                  </p>
                  <p
                    className="text-[9px] font-semibold mt-0.5"
                    style={{ color: "var(--color-outline)" }}
                  >
                    {DIST[i]}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Zoom controls — top right */}
          <div
            className="absolute top-4 right-4 z-20 flex flex-col rounded-xl overflow-hidden shadow-lg"
            style={{ border: "1px solid rgba(0,0,0,0.12)" }}
          >
            <button
              className="w-10 h-10 bg-white flex items-center justify-center font-bold text-lg transition-colors hover:bg-gray-50"
              style={{ color: "var(--color-primary-container)" }}
              aria-label="Zoom in"
            >
              +
            </button>
            <div style={{ height: "1px", backgroundColor: "var(--color-outline-variant)" }} />
            <button
              className="w-10 h-10 bg-white flex items-center justify-center font-bold text-lg transition-colors hover:bg-gray-50"
              style={{ color: "var(--color-primary-container)" }}
              aria-label="Zoom out"
            >
              −
            </button>
          </div>

          {/* Reset map view — bottom right */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-xs font-bold shadow-lg transition-colors hover:bg-gray-50"
              style={{
                color: "var(--color-primary-container)",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <ResetSvg />
              Reset Map View
            </button>
          </div>

          {/* Coming-soon badge — bottom centre */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div
              className="px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm shadow-md whitespace-nowrap"
              style={{
                backgroundColor: "rgba(255,255,255,0.92)",
                color: "var(--color-primary-container)",
                border: "1px solid var(--color-outline-variant)",
              }}
            >
              🗺 Interactive Map — Coming Soon · Google Maps integration connects to live database
            </div>
          </div>
        </main>
      </div>

      {/* ══════════ BOTTOM CATEGORY BAR ══════════ */}
      <footer
        className="flex-shrink-0 flex items-center px-5 gap-4"
        style={{
          backgroundColor: "var(--color-primary-container)",
          height: "72px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Category chips */}
        <div className="flex items-center gap-2 flex-grow overflow-x-auto scrollbar-hide">
          {BOTTOM_CATS.map((cat, i) => (
            <button
              key={cat}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-opacity hover:opacity-90 flex-shrink-0"
              style={
                i === 0
                  ? {
                      backgroundColor: "#ffffff",
                      color: "var(--color-primary-container)",
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.82)",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }
              }
            >
              <BottomIcon name={cat} active={i === 0} />
              {cat}
            </button>
          ))}
        </div>

        {/* Stats + CTA */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <p className="text-xs font-bold text-white leading-none">
                Near You · Within 1 mi
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                {BUSINESSES.length} businesses found
              </p>
            </div>
          </div>

          <Link
            href="/directory"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-black transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-primary-container)",
            }}
          >
            View All Businesses
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </footer>

      {/* Sub-footer */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-6 py-2"
        style={{ backgroundColor: "rgba(0,20,45,0.97)" }}
      >
        <div />
        <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
          Supporting Hialeah&apos;s local businesses and community.
        </p>
        <div className="flex items-center gap-3">
          <span
            className="text-[11px] font-semibold"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            KIOSK ID: HIA-001
          </span>
          <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            v1.0
          </span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   HELPER COMPONENTS
   ════════════════════════════════════════════════════════════════ */

/* ── Header action button ─────────────────────────────────────── */
function HeaderBtn({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 flex-shrink-0"
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      {icon}
      {label}
    </button>
  );
}

/* ── Brand logo mark ──────────────────────────────────────────── */
function LogoMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

/* ── Header icon SVGs ─────────────────────────────────────────── */
function SearchSvg() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function QRSvg() {
  return (
    <svg
      width="14"
      height="14"
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
  );
}

function GlobeSvg() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

/* ── Reset map icon ───────────────────────────────────────────── */
function ResetSvg() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
    </svg>
  );
}

/* ── Sidebar category icon (white on colour tile) ─────────────── */
function CatIcon({ category }: { category: string }) {
  const s = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "white",
    strokeWidth: 2 as unknown as string,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (category) {
    case "Restaurant":
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
    case "Services":
    default:
      return (
        <svg {...s}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
  }
}

/* ── Bottom bar category chip icons ──────────────────────────── */
function BottomIcon({ name, active }: { name: string; active: boolean }) {
  const color = active ? "var(--color-primary-container)" : "rgba(255,255,255,0.78)";
  const s = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: color,
    strokeWidth: 2 as unknown as string,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "All":
      return (
        <svg {...s}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case "Café & Food":
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
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
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
    case "Financial":
      return (
        <svg {...s}>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );
    default:
      return (
        <svg {...s}>
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      );
  }
}
