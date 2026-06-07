import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BusinessCard from "@/components/ui/BusinessCard";
import OfferCard from "@/components/ui/OfferCard";
import { BUSINESSES, OFFERS, HOMEPAGE_SCENES } from "@/lib/data";

/* Per-category emoji icons for the category strip */
const CATEGORY_ICONS: Record<string, string> = {
  Restaurants: "🍽️",
  Retail:      "🛍️",
  Services:    "🔧",
  Health:      "💊",
  Auto:        "🚗",
  Beauty:      "💅",
  Education:   "📚",
};

/* Labels for the 4-photo scene strip */
const SCENE_LABELS = [
  "Local Dining",
  "Fashion & Boutique",
  "Health & Wellness",
  "Casual Dining",
];

export default function HomePage() {
  const featured  = BUSINESSES.filter((b) => b.isFeatured);
  const hotOffer  = OFFERS.find((o) => o.isHot) ?? null;

  return (
    <>
      <Navbar />
      <main className="flex-grow">

        {/* ══════════════════════════════════════════════════
            HERO  —  navy editorial left / warm photo right
        ══════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "var(--color-primary-container)",
            minHeight: "600px",
          }}
        >
          {/* Right-side photo */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[60%]">
            <Image
              src="/assets/scenes/homepage-restaurant.jpg"
              alt="Sunny Hialeah local business street"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            {/* Navy-to-transparent gradient — dark left edge fades into photo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary-container) 0%, var(--color-primary-container) 4%, rgba(0,33,71,0.94) 20%, rgba(0,33,71,0.55) 50%, rgba(0,33,71,0.12) 80%, transparent 100%)",
              }}
            />
            {/* Mobile overlay — keeps text legible on small screens */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{ backgroundColor: "rgba(0,33,71,0.86)" }}
            />
          </div>

          {/* Dot-grid texture on the dark half */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 40%, transparent 62%)",
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 40%, transparent 62%)",
            }}
          />

          {/* Decorative location pins */}
          <span
            className="absolute hidden lg:flex flex-col items-center pointer-events-none"
            style={{ right: "40%", top: "22%" }}
            aria-hidden="true"
          >
            <span className="w-3 h-3 rounded-full border-2 border-white opacity-40" />
            <span className="w-px h-5 bg-white opacity-25 mx-auto" />
          </span>
          <span
            className="absolute hidden lg:flex flex-col items-center pointer-events-none"
            style={{ right: "26%", top: "56%" }}
            aria-hidden="true"
          >
            <span
              className="w-4 h-4 rounded-full border-2 opacity-60 animate-pulse"
              style={{ borderColor: "var(--color-gold)" }}
            />
            <span
              className="w-px h-6 opacity-40 mx-auto"
              style={{ backgroundColor: "var(--color-gold)" }}
            />
          </span>

          {/* ── Hero content ── */}
          <div
            className="relative z-10 mx-auto px-4 md:px-10 flex items-center"
            style={{
              maxWidth: "1280px",
              minHeight: "600px",
              paddingTop: "5rem",
              paddingBottom: "6rem",
            }}
          >
            <div style={{ maxWidth: "540px" }}>

              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{
                  backgroundColor: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.35)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--color-gold)" }}
                />
                <span
                  className="text-xs font-bold tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Official Business Directory · City of Hialeah, FL
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "#ffffff",
                  fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.07,
                }}
              >
                Discover Hialeah&apos;s{" "}
                <span style={{ color: "var(--color-gold)" }}>
                  Best Local
                  <br />
                  Businesses
                </span>
              </h1>

              <p
                className="text-base md:text-lg mb-8 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.70)", maxWidth: "420px" }}
              >
                Connect with trusted local restaurants, shops, and services.
                Free listings, verified reviews, and hyper-local deals.
              </p>

              {/* Search bar */}
              <div
                className="rounded-2xl p-1.5 mb-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.30)",
                }}
              >
                <div className="flex flex-col sm:flex-row gap-1.5">
                  {/* Location chip */}
                  <div
                    className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span
                      className="text-xs font-semibold whitespace-nowrap"
                      style={{ color: "rgba(255,255,255,0.70)" }}
                    >
                      Hialeah, FL
                    </span>
                  </div>

                  {/* Text input */}
                  <div className="flex-grow relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        style={{ color: "var(--color-outline)" }}
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Search restaurants, services, shops…"
                      aria-label="Search businesses"
                      className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-medium outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "var(--color-on-surface)",
                      }}
                    />
                  </div>

                  {/* CTA */}
                  <Link
                    href="/directory"
                    className="px-6 py-3 rounded-xl text-sm font-bold text-white text-center transition-opacity hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: "var(--color-gold)" }}
                  >
                    Search →
                  </Link>
                </div>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "🏪", label: "500+ Businesses" },
                  { icon: "📍", label: "12 Neighborhoods" },
                  { icon: "🎯", label: "28 Active Deals" },
                  { icon: "🆓", label: "Free to List" },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.82)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    <span aria-hidden="true">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CATEGORY STRIP  —  floating white panel
        ══════════════════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "var(--color-surface)",
            borderBottom: "1px solid var(--color-outline-variant)",
          }}
        >
          <div
            className="mx-auto px-4 md:px-10"
            style={{ maxWidth: "1280px" }}
          >
            {/* Label row */}
            <div className="flex items-center justify-between pt-6 pb-3">
              <h2
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                Browse by Category
              </h2>
              <Link
                href="/directory"
                className="text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--color-secondary)" }}
              >
                View All →
              </Link>
            </div>

            {/* Category grid — wraps on mobile, single row on desktop */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-5">
              {Object.entries(CATEGORY_ICONS).map(([cat, icon]) => (
                <Link
                  key={cat}
                  href={`/directory?category=${cat}`}
                  className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all hover:-translate-y-0.5 group"
                  style={{
                    backgroundColor: "var(--color-surface-container-low)",
                    color: "var(--color-on-surface-variant)",
                    border: "1px solid var(--color-outline-variant)",
                    minWidth: "80px",
                  }}
                >
                  <span className="text-2xl leading-none" aria-hidden="true">
                    {icon}
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {cat}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SCENE STRIP  —  4 community photos with labels
        ══════════════════════════════════════════════════ */}
        <section
          className="overflow-hidden"
          style={{ backgroundColor: "var(--color-surface-container)" }}
        >
          <div className="flex h-48 md:h-60">
            {HOMEPAGE_SCENES.map((scene, i) => (
              <div key={i} className="flex-1 relative overflow-hidden group">
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                  priority={i === 0}
                />
                {/* Bottom scrim + label */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,33,71,0.70) 0%, transparent 55%)",
                  }}
                />
                <p
                  className="absolute bottom-3 left-3 text-xs font-bold text-white hidden sm:block"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
                >
                  {SCENE_LABELS[i]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FEATURED BUSINESSES  —  image-card grid
        ══════════════════════════════════════════════════ */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div
            className="mx-auto px-4 md:px-10"
            style={{ maxWidth: "1280px" }}
          >
            {/* Header */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "var(--color-gold)" }}
                >
                  Trusted by the Community
                </p>
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                  }}
                >
                  Featured Businesses
                </h2>
              </div>
              <Link
                href="/directory"
                className="text-sm font-semibold transition-colors hover:underline hidden md:block"
                style={{ color: "var(--color-secondary)" }}
              >
                View all →
              </Link>
            </div>

            {/* 1 → 2 → 3 column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featured.map((b) => (
                <BusinessCard key={b.id} business={b} variant="grid" />
              ))}
            </div>

            {/* Mobile "view all" */}
            <div className="mt-6 md:hidden">
              <Link
                href="/directory"
                className="block w-full text-center py-3 rounded-xl text-sm font-semibold"
                style={{
                  border: "1px solid var(--color-outline-variant)",
                  color: "var(--color-secondary)",
                }}
              >
                View all businesses →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LOCAL OFFERS & DEALS
        ══════════════════════════════════════════════════ */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--color-surface-container-low)" }}
        >
          <div
            className="mx-auto px-4 md:px-10"
            style={{ maxWidth: "1280px" }}
          >
            {/* Header */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Exclusive to Hialeah
                </p>
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                  }}
                >
                  Local Offers &amp; Deals
                </h2>
              </div>
              <Link
                href="/offers"
                className="text-sm font-semibold transition-colors hover:underline hidden md:block"
                style={{ color: "var(--color-secondary)" }}
              >
                View all →
              </Link>
            </div>

            {/* Hot deal spotlight */}
            {hotOffer && (
              <div
                className="rounded-2xl mb-7 p-6 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-container) 0%, #1a3a6e 100%)",
                }}
              >
                {/* Background photo (low opacity) */}
                {hotOffer.image && (
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden sm:block pointer-events-none">
                    <Image
                      src={hotOffer.image}
                      alt=""
                      fill
                      className="object-cover opacity-20"
                      sizes="40vw"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--color-primary-container) 0%, transparent 100%)",
                      }}
                    />
                  </div>
                )}
                {/* Dot grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    >
                      🔥 Hot Deal
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      {hotOffer.businessName} · {hotOffer.category}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-xl text-white mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {hotOffer.title}
                  </h3>
                  <p
                    className="text-sm mb-4 max-w-sm"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {hotOffer.description}
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span
                      className="text-4xl font-black"
                      style={{
                        fontFamily: "var(--font-outfit)",
                        color: "var(--color-gold)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {hotOffer.discount}
                    </span>
                    <Link
                      href="/offers"
                      className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.24)",
                      }}
                    >
                      Claim Offer →
                    </Link>
                    <span
                      className="text-xs hidden sm:block"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      Expires {hotOffer.expires}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Offer card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {OFFERS.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>

            {/* Mobile "view all" */}
            <div className="mt-6 md:hidden">
              <Link
                href="/offers"
                className="block w-full text-center py-3 rounded-xl text-sm font-semibold"
                style={{
                  border: "1px solid var(--color-outline-variant)",
                  color: "var(--color-secondary)",
                }}
              >
                View all offers →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CTA  —  Add Your Business
        ══════════════════════════════════════════════════ */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-primary-container)" }}
        >
          {/* Dot-grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Gold glow bottom-centre */}
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
            {/* Eyebrow */}
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
