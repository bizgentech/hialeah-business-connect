import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OfferCard from "@/components/ui/OfferCard";
import type { Business } from "@/components/ui/BusinessCard";
import { BUSINESSES, OFFERS } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Mock hours — same for all businesses in MVP (no hours field in data schema)
const MOCK_HOURS = [
  { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM", open: true },
  { days: "Saturday",        hours: "10:00 AM – 4:00 PM", open: true },
  { days: "Sunday",          hours: "Closed",              open: false },
];

export default async function BusinessProfilePage({ params }: PageProps) {
  const { id } = await params;
  const business = BUSINESSES.find((b) => b.id === id);
  if (!business) notFound();

  const relatedOffers    = OFFERS.filter((o) => o.businessName === business.name);
  const relatedBusinesses = BUSINESSES.filter(
    (b) => b.category === business.category && b.id !== business.id
  );
  const galleryImages = business.galleryImages ?? [];

  return (
    <>
      <Navbar />
      <main className="flex-grow" style={{ backgroundColor: "var(--color-surface)" }}>

        {/* ── Hero banner — full bleed ── */}
        <div
          className="relative overflow-hidden w-full"
          style={{
            height: "clamp(280px, 32vw, 400px)",
            backgroundColor: "var(--color-primary-container)",
          }}
        >
          {business.image ? (
            <Image
              src={business.image}
              alt={`${business.name} – ${business.category}`}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-secondary) 100%)",
              }}
            />
          )}

          {/* Gradient scrim: strong at bottom, fades to top */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,33,71,0.92) 0%, rgba(0,33,71,0.55) 35%, rgba(0,33,71,0.08) 100%)",
            }}
          />

          {/* Business identity — anchored at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <div
              className="mx-auto px-4 md:px-10 pb-6 pt-4"
              style={{ maxWidth: "1280px" }}
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {business.isFeatured && (
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                  >
                    ★ Featured
                  </span>
                )}
                {business.isVerified && (
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: "var(--color-secondary)", color: "#fff" }}
                  >
                    ✓ Verified Business
                  </span>
                )}
              </div>
              <h1
                className="font-bold mb-1.5"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "#ffffff",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 12px rgba(0,0,0,0.35)",
                }}
              >
                {business.name}
              </h1>
              <p
                className="text-sm font-semibold"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {business.category} · {business.area}, Hialeah FL
              </p>
            </div>
          </div>
        </div>

        {/* ── Breadcrumb ── */}
        <div
          className="border-b"
          style={{
            backgroundColor: "var(--color-surface-container-low)",
            borderColor: "var(--color-outline-variant)",
          }}
        >
          <div
            className="mx-auto px-4 md:px-10 py-3 flex items-center gap-2 text-sm"
            style={{ maxWidth: "1280px" }}
          >
            <Link
              href="/"
              className="transition-colors hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              Home
            </Link>
            <span style={{ color: "var(--color-outline)" }}>›</span>
            <Link
              href="/directory"
              className="transition-colors hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              Directory
            </Link>
            <span style={{ color: "var(--color-outline)" }}>›</span>
            <span style={{ color: "var(--color-on-surface-variant)" }}>
              {business.name}
            </span>
          </div>
        </div>

        {/* ── Page body ── */}
        <div
          className="mx-auto px-4 md:px-10 py-8"
          style={{ maxWidth: "1280px" }}
        >
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Left main column ── */}
            <div className="flex-grow min-w-0 flex flex-col gap-5">

              {/* Quick stats bar */}
              <div
                className="flex flex-wrap items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "var(--color-surface-container-lowest)",
                  border: "1px solid var(--color-outline-variant)",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 text-sm leading-none">★★★★★</span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: "var(--color-primary-container)" }}
                  >
                    4.8
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-outline)" }}>
                    (124 reviews)
                  </span>
                </div>

                <div
                  className="w-px h-4 hidden sm:block"
                  style={{ backgroundColor: "var(--color-outline-variant)" }}
                />

                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <span className="text-sm font-semibold" style={{ color: "#16a34a" }}>
                    Open Now
                  </span>
                  <span className="text-sm hidden sm:inline" style={{ color: "var(--color-on-surface-variant)" }}>
                    · Closes 6:00 PM
                  </span>
                </div>

                <div
                  className="w-px h-4 hidden md:block"
                  style={{ backgroundColor: "var(--color-outline-variant)" }}
                />
                <span
                  className="text-sm font-medium hidden md:block"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {business.category} · {business.area}
                </span>
              </div>

              {/* About */}
              <div
                className="bg-white rounded-xl p-5 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <h2
                  className="font-bold text-lg mb-3"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  About This Business
                </h2>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {business.description}
                </p>
              </div>

              {/* Gallery */}
              <div
                className="bg-white rounded-xl p-5 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <h2
                  className="font-bold text-lg mb-4"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Photo Gallery
                </h2>
                <GalleryGrid name={business.name} images={galleryImages} />
              </div>

              {/* Current offers — only if this business has offers */}
              {relatedOffers.length > 0 && (
                <div
                  className="bg-white rounded-xl p-5 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2
                      className="font-bold text-lg"
                      style={{
                        fontFamily: "var(--font-outfit)",
                        color: "var(--color-primary-container)",
                      }}
                    >
                      Current Offers & Deals
                    </h2>
                    <Link
                      href="/offers"
                      className="text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      View All →
                    </Link>
                  </div>
                  <div
                    className={`grid gap-4 ${
                      relatedOffers.length === 1
                        ? "grid-cols-1 sm:max-w-sm"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}
                  >
                    {relatedOffers.map((offer) => (
                      <OfferCard key={offer.id} offer={offer} />
                    ))}
                  </div>
                </div>
              )}

              {/* Related businesses */}
              {relatedBusinesses.length > 0 && (
                <div
                  className="bg-white rounded-xl p-5 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2
                      className="font-bold text-lg"
                      style={{
                        fontFamily: "var(--font-outfit)",
                        color: "var(--color-primary-container)",
                      }}
                    >
                      More {business.category} Businesses
                    </h2>
                    <Link
                      href="/directory"
                      className="text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      See All →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedBusinesses.slice(0, 2).map((b) => (
                      <RelatedCard key={b.id} business={b} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="lg:sticky top-24 flex flex-col gap-4">

                {/* Primary CTAs */}
                <div
                  className="bg-white rounded-xl p-4 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <div className="flex flex-col gap-2.5">
                    {business.phone && (
                      <a
                        href={`tel:${business.phone}`}
                        className="w-full py-3 rounded-xl text-sm font-bold text-white text-center transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                        style={{ backgroundColor: "var(--color-gold)" }}
                      >
                        <PhoneIcon />
                        Call Now
                      </a>
                    )}
                    <button
                      className="w-full py-3 rounded-xl text-sm font-bold text-white text-center transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                      style={{ backgroundColor: "var(--color-primary-container)" }}
                    >
                      <MapPinIcon />
                      Get Directions
                    </button>
                    {business.website && (
                      <a
                        href={business.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl text-sm font-bold text-center transition-opacity hover:opacity-80 flex items-center justify-center gap-2"
                        style={{
                          border: "2px solid var(--color-outline-variant)",
                          color: "var(--color-secondary)",
                        }}
                      >
                        <GlobeIcon />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>

                {/* Contact details */}
                <div
                  className="bg-white rounded-xl p-4 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <h3
                    className="text-[11px] font-bold tracking-widest uppercase mb-3"
                    style={{ color: "var(--color-outline)" }}
                  >
                    Contact
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {business.phone && (
                      <a
                        href={`tel:${business.phone}`}
                        className="flex items-center gap-3 transition-opacity hover:opacity-80"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(17,92,185,0.08)" }}
                        >
                          <PhoneIcon />
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--color-on-surface)" }}
                        >
                          {business.phone}
                        </span>
                      </a>
                    )}
                    {business.website && (
                      <a
                        href={business.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 transition-opacity hover:opacity-80"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(17,92,185,0.08)" }}
                        >
                          <GlobeIcon />
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          Visit Website
                        </span>
                      </a>
                    )}
                    <div className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(17,92,185,0.08)" }}
                      >
                        <MapPinIcon />
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--color-on-surface)" }}
                        >
                          {business.area}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--color-on-surface-variant)" }}
                        >
                          Hialeah, FL 33012
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business hours */}
                <div
                  className="bg-white rounded-xl p-4 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="text-[11px] font-bold tracking-widest uppercase"
                      style={{ color: "var(--color-outline)" }}
                    >
                      Business Hours
                    </h3>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: "rgba(34,197,94,0.12)",
                        color: "#16a34a",
                      }}
                    >
                      Open Now
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {MOCK_HOURS.map(({ days, hours, open }) => (
                      <div key={days} className="flex justify-between items-baseline gap-3">
                        <span
                          className="text-xs flex-shrink-0"
                          style={{ color: "var(--color-on-surface-variant)" }}
                        >
                          {days}
                        </span>
                        <span
                          className="text-xs font-medium text-right"
                          style={{
                            color: open
                              ? "var(--color-on-surface)"
                              : "var(--color-outline)",
                          }}
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location / map card */}
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <div className="relative overflow-hidden" style={{ height: "140px" }}>
                    <Image
                      src="/assets/scenes/profile-map.jpg"
                      alt={`Map – ${business.area}, Hialeah FL`}
                      fill
                      className="object-cover opacity-80"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-sm"
                        style={{
                          backgroundColor: "rgba(0,33,71,0.72)",
                          color: "#ffffff",
                        }}
                      >
                        📍 {business.area}
                      </div>
                    </div>
                  </div>
                  <div
                    className="px-3 py-2.5 flex items-center justify-between"
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {business.area}, Hialeah FL 33012
                    </p>
                    <button
                      className="text-xs font-semibold transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Directions →
                    </button>
                  </div>
                </div>

                {/* QR / Share */}
                <div
                  className="bg-white rounded-xl p-4 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <h3
                    className="text-[11px] font-bold tracking-widest uppercase mb-3"
                    style={{ color: "var(--color-outline)" }}
                  >
                    Share This Business
                  </h3>
                  <div
                    className="w-full rounded-xl flex items-center justify-center mb-2"
                    style={{
                      height: "110px",
                      backgroundColor: "var(--color-surface-container)",
                    }}
                  >
                    <QrIcon />
                  </div>
                  <p
                    className="text-xs text-center"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    Scan to open on mobile
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ─── Gallery grid ────────────────────────────────────────────────────── */
function GalleryGrid({ name, images }: { name: string; images: string[] }) {
  if (images.length === 0) {
    return (
      <div
        className="rounded-xl flex flex-col items-center justify-center gap-2"
        style={{
          height: "180px",
          background:
            "linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container-highest))",
          border: "1px solid var(--color-outline-variant)",
        }}
      >
        <span className="text-4xl opacity-25">📷</span>
        <p className="text-sm" style={{ color: "var(--color-outline)" }}>
          No photos yet
        </p>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative rounded-xl overflow-hidden" style={{ height: "260px" }}>
        <Image
          src={images[0]}
          alt={`${name} photo`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 720px"
        />
      </div>
    );
  }

  // 2+ images: editorial — first image large (left, full height), rest stack right
  return (
    <div className="grid grid-cols-2 gap-2" style={{ height: "320px" }}>
      {/* Large featured image — spans both rows */}
      <div className="row-span-2 relative rounded-xl overflow-hidden">
        <Image
          src={images[0]}
          alt={`${name} photo 1`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 360px"
        />
      </div>

      {/* Second image */}
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src={images[1]}
          alt={`${name} photo 2`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 25vw, 180px"
        />
      </div>

      {/* Third image or gradient filler */}
      {images[2] ? (
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={images[2]}
            alt={`${name} photo 3`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 180px"
          />
        </div>
      ) : (
        <div
          className="rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container-highest))",
          }}
        />
      )}
    </div>
  );
}

/* ─── Related business card ───────────────────────────────────────────── */
function RelatedCard({ business }: { business: Business }) {
  return (
    <Link
      href={`/directory/${business.id}`}
      className="flex gap-3 p-3 rounded-xl bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg"
      style={{ border: "1px solid var(--color-outline-variant)" }}
    >
      <div
        className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative"
        style={{ backgroundColor: "var(--color-surface-container)" }}
      >
        {business.image ? (
          <Image
            src={business.image}
            alt={business.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container-highest))",
            }}
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1">
          <h3
            className="font-semibold text-sm leading-snug"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-primary-container)",
            }}
          >
            {business.name}
          </h3>
          {business.isFeatured && (
            <span
              className="px-1.5 py-0.5 rounded text-[10px] font-bold flex-shrink-0"
              style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
            >
              ★
            </span>
          )}
        </div>
        <p
          className="text-xs mt-0.5 mb-1"
          style={{ color: "var(--color-secondary)" }}
        >
          {business.category} · {business.area}
        </p>
        <p
          className="text-xs line-clamp-1"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          {business.description}
        </p>
      </div>
    </Link>
  );
}

/* ─── Icon helpers ────────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ color: "var(--color-secondary)" }}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ color: "var(--color-secondary)" }}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ color: "var(--color-secondary)" }}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function QrIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ color: "var(--color-outline)" }}
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
