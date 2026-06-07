import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BusinessCard from "@/components/ui/BusinessCard";
import ScrollCarousel from "@/components/ui/ScrollCarousel";
import { BUSINESSES, OFFERS } from "@/lib/data";
import type { Offer } from "@/components/ui/OfferCard";

/* ─────────────────────────────────────────────────────────────────────────
   Category metadata — SVG icons defined inline below (CategoryIcon)
   ───────────────────────────────────────────────────────────────────────── */
const CATEGORIES = [
  "Restaurants",
  "Retail",
  "Services",
  "Health",
  "Auto",
  "Beauty",
  "Education",
] as const;

/* ─────────────────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  // All businesses, featured first — drives the horizontal scroll row
  const allBusinesses = [
    ...BUSINESSES.filter((b) => b.isFeatured),
    ...BUSINESSES.filter((b) => !b.isFeatured),
  ];
  // Business names with an active offer — drives "Hot Offer" badge on cards
  const offerBusinessNames = new Set(OFFERS.map((o) => o.businessName));

  return (
    <>
      <Navbar />
      <main className="flex-grow">

        {/* ══════════════════════════════════════════════════════════════
            HERO  —  deep navy left / warm local photo right
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "var(--color-primary-container)",
            minHeight: "620px",
          }}
        >
          {/* Full-bleed composite — navy already baked into left side of image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/scenes/hero-streetscape.png"
              alt="Hialeah commercial district — sunny storefronts, palm trees, blue sky"
              fill
              className="object-cover"
              style={{ objectPosition: "left center" }}
              sizes="100vw"
              priority
            />
          </div>

          {/* Subtle dot-grid — left quadrant only */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 35%, transparent 55%)",
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 35%, transparent 55%)",
            }}
          />

          {/* Gold accent bar — top-left edge */}
          <div
            className="absolute left-0 top-0 w-1 h-full pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--color-gold) 30%, var(--color-gold) 70%, transparent 100%)",
              opacity: 0.6,
            }}
          />

          {/* ── Hero content ── */}
          <div
            className="relative z-10 mx-auto px-4 md:px-12 flex items-center"
            style={{
              maxWidth: "1280px",
              minHeight: "620px",
              paddingTop: "5rem",
              paddingBottom: "5.5rem",
            }}
          >
            <div style={{ maxWidth: "500px" }}>

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(245,158,11,0.14)",
                    border: "1px solid rgba(245,158,11,0.30)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-gold)" }}
                  />
                  <span
                    className="text-[11px] font-bold tracking-[0.16em] uppercase"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Official Business Directory
                  </span>
                </div>
                <span
                  className="text-[11px] font-semibold hidden sm:block"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  City of Hialeah, FL
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "#ffffff",
                  fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.05,
                }}
              >
                Discover<br />
                Hialeah&apos;s{" "}
                <span
                  style={{
                    color: "var(--color-gold)",
                    display: "inline-block",
                  }}
                >
                  Best Local
                </span>
                <br />
                <span style={{ color: "var(--color-gold)" }}>Businesses</span>
              </h1>

              <p
                className="mb-8 leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.62)",
                  fontSize: "1.0625rem",
                  maxWidth: "400px",
                }}
              >
                Your guide to trusted restaurants, shops, and services
                in the Hialeah community.
              </p>

              {/* Search bar — large, clean, prominent */}
              <div
                className="flex items-center rounded-2xl overflow-hidden mb-8"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow:
                    "0 12px 48px rgba(0,0,0,0.38), 0 2px 8px rgba(0,0,0,0.18)",
                }}
              >
                <div className="pl-5 pr-3 flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                    style={{ color: "var(--color-outline)" }}
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search restaurants, services, shops…"
                  aria-label="Search businesses"
                  className="flex-grow py-4 text-sm font-medium outline-none bg-transparent"
                  style={{ color: "var(--color-on-surface)" }}
                />
                <Link
                  href="/directory"
                  className="flex-shrink-0 px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                  style={{ backgroundColor: "var(--color-gold)" }}
                >
                  Search Directory
                </Link>
              </div>

              {/* Locate Me — quick access to the interactive map */}
              <Link
                href="/kiosk/map"
                className="inline-flex items-center gap-2.5 mb-7 group transition-opacity hover:opacity-80"
              >
                <span
                  className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.22)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ color: "var(--color-gold)" }}>
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </span>
                <span className="text-sm font-bold" style={{ color: "#ffffff" }}>
                  Locate Me
                </span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  — Open nearby kiosk map
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ color: "rgba(255,255,255,0.3)" }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>

              {/* Clean number stats — no emoji */}
              <div className="flex items-center">
                {[
                  { value: "500+", label: "Local Businesses" },
                  { value: "12",   label: "Neighborhoods" },
                  { value: "100%", label: "Free to List" },
                ].map(({ value, label }, i) => (
                  <div key={label} className="flex items-center">
                    {i > 0 && (
                      <div
                        className="w-px h-8 mx-6"
                        style={{ backgroundColor: "rgba(255,255,255,0.16)" }}
                      />
                    )}
                    <div>
                      <p
                        className="text-2xl font-black leading-none"
                        style={{
                          fontFamily: "var(--font-outfit)",
                          color: "#ffffff",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {value}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "rgba(255,255,255,0.48)" }}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CATEGORY STRIP  —  clean line-icon tiles, premium panel
        ══════════════════════════════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "var(--color-surface)",
            borderBottom: "1px solid var(--color-outline-variant)",
            boxShadow: "0 4px 16px rgba(0,33,71,0.06)",
          }}
        >
          <div
            className="mx-auto px-4 md:px-12"
            style={{ maxWidth: "1280px" }}
          >
            {/* Label row */}
            <div className="flex items-center py-4 mb-1 px-4 md:px-0">
              <h2
                className="text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                Browse by Category
              </h2>
            </div>

            {/* Category tiles
                Mobile:  horizontal scroll row with flex-shrink-0 tiles
                Desktop: flex-1 tiles fill full width evenly (no overflow) */}
            <div className="flex overflow-x-auto md:overflow-x-visible scrollbar-hide gap-1 pb-5 md:pb-4 px-4 md:px-0">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={`/directory?category=${cat}`}
                  className="group flex flex-col items-center justify-center gap-2.5 py-5 px-3 rounded-xl flex-shrink-0 md:flex-1 transition-all duration-200 hover:bg-[var(--color-surface-container)] hover:-translate-y-0.5"
                  style={{
                    minWidth: "88px",
                    border: "1px solid var(--color-outline-variant)",
                    backgroundColor: "var(--color-surface-container-lowest)",
                  }}
                >
                  <span style={{ color: "var(--color-primary-container)" }}>
                    <CategoryIcon name={cat} size={24} />
                  </span>
                  <span
                    className="text-xs font-semibold whitespace-nowrap"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {cat}
                  </span>
                </Link>
              ))}

              {/* View All tile */}
              <Link
                href="/directory"
                className="group flex flex-col items-center justify-center gap-2.5 py-5 px-3 rounded-xl flex-shrink-0 md:flex-1 transition-all duration-200 hover:bg-[var(--color-surface-container)] hover:-translate-y-0.5"
                style={{
                  minWidth: "88px",
                  border: "1px solid var(--color-outline-variant)",
                  backgroundColor: "var(--color-surface-container-lowest)",
                }}
              >
                <span style={{ color: "var(--color-primary-container)" }}>
                  <GridViewIcon size={24} />
                </span>
                <span
                  className="text-xs font-semibold whitespace-nowrap"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  View All
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FEATURED BUSINESSES — horizontal scroll
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="py-12"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1280px" }}>
            {/* Section header */}
            <div className="flex items-end justify-between px-4 md:px-12 mb-6">
              <div>
                <p
                  className="text-[11px] font-bold tracking-[0.14em] uppercase mb-1.5"
                  style={{ color: "var(--color-gold)" }}
                >
                  Trusted by the Community
                </p>
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                    fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Featured Businesses
                </h2>
              </div>
              <Link
                href="/directory"
                className="text-sm font-semibold flex-shrink-0 ml-4 transition-opacity hover:opacity-70"
                style={{ color: "var(--color-secondary)" }}
              >
                View all →
              </Link>
            </div>

            {/* Horizontal scroll carousel with arrow controls */}
            <ScrollCarousel scrollStep={312}>
              {allBusinesses.map((b) => (
                <div
                  key={b.id}
                  className="flex-shrink-0"
                  style={{ width: "296px", scrollSnapAlign: "start" }}
                >
                  <BusinessCard
                    business={b}
                    variant="grid"
                    hasOffer={offerBusinessNames.has(b.name)}
                  />
                </div>
              ))}
            </ScrollCarousel>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            NAVY ACTION STRIP — 4 utility links
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: "var(--color-primary-container)" }}>
          <div className="mx-auto" style={{ maxWidth: "1280px" }}>
            <div className="flex flex-col sm:flex-row">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Explore Nearby",
                  desc: "Find businesses near you",
                  href: "/directory",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                  ),
                  label: "Exclusive Offers",
                  desc: "Save at local businesses",
                  href: "/offers",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  label: "Support Local",
                  desc: "Strengthen our community",
                  href: "/register",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  ),
                  label: "Find a Kiosk",
                  desc: "Visit a kiosk near you",
                  href: "/kiosk",
                },
              ].map(({ icon, label, desc, href }, i) => (
                <Link
                  key={label}
                  href={href}
                  className={`group flex items-center gap-4 px-6 md:px-8 py-5 flex-1 transition-all duration-150 hover:bg-white/5${
                    i < 3 ? " border-b sm:border-b-0 sm:border-r" : ""
                  }`}
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white leading-tight">
                      {label}
                    </p>
                    <p
                      className="text-xs mt-0.5 truncate"
                      style={{ color: "rgba(255,255,255,0.48)" }}
                    >
                      {desc}
                    </p>
                  </div>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="ml-auto flex-shrink-0 opacity-25 group-hover:opacity-55 transition-opacity"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            LOCAL OFFERS — horizontal scroll carousel
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="py-12"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="mx-auto" style={{ maxWidth: "1280px" }}>
            {/* Section header */}
            <div className="flex items-end justify-between px-4 md:px-12 mb-6">
              <div>
                <p
                  className="text-[11px] font-bold tracking-[0.14em] uppercase mb-1.5"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Exclusive to Hialeah
                </p>
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                    fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Current Offers
                </h2>
              </div>
              <Link
                href="/offers"
                className="text-sm font-semibold flex-shrink-0 ml-4 transition-opacity hover:opacity-70"
                style={{ color: "var(--color-secondary)" }}
              >
                View all →
              </Link>
            </div>

            {/* Horizontal scroll carousel with arrow controls */}
            <ScrollCarousel scrollStep={288}>
              {OFFERS.map((offer) => (
                <OfferScrollCard key={offer.id} offer={offer} />
              ))}
            </ScrollCarousel>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA  —  Add Your Business (unchanged section)
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-primary-container)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-36 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(245,158,11,0.20) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />
          <div
            className="relative mx-auto px-4 md:px-10 text-center"
            style={{ maxWidth: "780px" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(245,158,11,0.16)",
                border: "1px solid rgba(245,158,11,0.32)",
              }}
            >
              <span
                className="text-xs font-bold tracking-[0.16em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                🏛 Join the Directory
              </span>
            </div>
            <h2
              className="font-bold text-3xl md:text-4xl mb-4"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Own a Business in Hialeah?
            </h2>
            <p
              className="text-lg mb-8 max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              List your business for free and reach thousands of residents
              and visitors looking for local services every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 rounded-xl font-bold text-white text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                Add Your Business — It&apos;s Free
              </Link>
              <Link
                href="/directory"
                className="px-8 py-4 rounded-xl font-bold text-base transition-opacity hover:opacity-80"
                style={{
                  border: "2px solid rgba(255,255,255,0.30)",
                  color: "#ffffff",
                }}
              >
                Browse the Directory
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   GridViewIcon — used for the "View All" category tile
   ───────────────────────────────────────────────────────────────────────── */
function GridViewIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   CategoryIcon — premium Feather-style SVG line icons
   stroke="currentColor" so the parent's color drives icon tint
   ───────────────────────────────────────────────────────────────────────── */
function CategoryIcon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  const shared = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "Restaurants":
      // Fork + knife (utensils)
      return (
        <svg {...shared}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
        </svg>
      );
    case "Retail":
      // Shopping bag
      return (
        <svg {...shared}>
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "Services":
      // Wrench / tool
      return (
        <svg {...shared}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "Health":
      // Heart
      return (
        <svg {...shared}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "Auto":
      // Truck / car
      return (
        <svg {...shared}>
          <rect x="1" y="3" width="15" height="13" rx="1.5" />
          <path d="M16 8h4l3 3v3h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case "Beauty":
      // Scissors
      return (
        <svg {...shared}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "Education":
      // Open book
      return (
        <svg {...shared}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   OfferScrollCard — used in the Local Offers horizontal scroll section
   ───────────────────────────────────────────────────────────────────────── */
function OfferScrollCard({ offer }: { offer: Offer }) {
  return (
    <Link
      href="/offers"
      className="group flex-shrink-0 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
      style={{
        width: "272px",
        scrollSnapAlign: "start",
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-outline-variant)",
        boxShadow: "0 2px 8px rgba(0,33,71,0.07), 0 1px 2px rgba(0,33,71,0.04)",
      }}
    >
      {/* Image */}
      <div
        className="relative h-36 flex-shrink-0 overflow-hidden"
        style={{ backgroundColor: "var(--color-surface-container)" }}
      >
        {offer.image ? (
          <Image
            src={offer.image}
            alt={offer.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="272px"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, var(--color-surface-container-high) 0%, var(--color-surface-container-highest) 100%)",
            }}
          />
        )}

        {/* Bottom scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,33,71,0.48) 0%, transparent 55%)",
          }}
        />

        {/* Discount badge — top left */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="px-3 py-1 rounded-full text-xs font-black text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            {offer.discount}
          </span>
        </div>

        {/* Hot badge — top right */}
        {offer.isHot && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: "var(--color-error)" }}
            >
              🔥 Hot
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3
          className="font-bold text-sm leading-snug mb-1"
          style={{
            fontFamily: "var(--font-outfit)",
            color: "var(--color-primary-container)",
          }}
        >
          {offer.title}
        </h3>

        <p
          className="text-xs mb-1"
          style={{ color: "var(--color-secondary)" }}
        >
          {offer.businessName}
        </p>

        <p
          className="text-[11px] flex-grow mb-4"
          style={{ color: "var(--color-outline)" }}
        >
          Expires {offer.expires}
        </p>

        {/* CTA */}
        <div
          className="py-2 rounded-xl text-center text-xs font-bold text-white transition-opacity group-hover:opacity-90"
          style={{ backgroundColor: "var(--color-primary-container)" }}
        >
          Claim Offer →
        </div>
      </div>
    </Link>
  );
}
