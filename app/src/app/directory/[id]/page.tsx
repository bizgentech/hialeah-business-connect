import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import { BUSINESSES } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BusinessProfilePage({ params }: PageProps) {
  const { id } = await params;
  const business = BUSINESSES.find((b) => b.id === id);

  if (!business) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-grow" style={{ backgroundColor: "var(--color-surface)" }}>
        {/* Breadcrumb */}
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

        <div
          className="mx-auto px-4 md:px-10 py-12"
          style={{ maxWidth: "1280px" }}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-grow">
              {/* Header */}
              <div
                className="bg-white rounded-xl p-6 mb-6 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-24 h-24 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      border: "1px solid var(--color-outline-variant)",
                    }}
                  >
                    <BuildingIcon />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {business.isFeatured && (
                        <Badge variant="featured">★ Featured</Badge>
                      )}
                      {business.isVerified && (
                        <Badge variant="verified">✓ Verified</Badge>
                      )}
                    </div>
                    <h1
                      className="font-bold text-3xl mb-2"
                      style={{
                        fontFamily: "var(--font-outfit)",
                        color: "var(--color-primary-container)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {business.name}
                    </h1>
                    <p
                      className="font-semibold text-sm tracking-wide"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {business.category} · {business.area}
                    </p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div
                className="bg-white rounded-xl p-6 mb-6 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <h2
                  className="font-semibold text-lg mb-3"
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

              {/* Gallery placeholder */}
              <div
                className="bg-white rounded-xl p-6 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <h2
                  className="font-semibold text-lg mb-4"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--color-surface-container)",
                        border: "1px solid var(--color-outline-variant)",
                      }}
                    >
                      <ImageIcon />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
              {/* Contact card */}
              <div
                className="bg-white rounded-xl p-5 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <h3
                  className="font-semibold text-base mb-4"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Contact & Info
                </h3>
                <div className="flex flex-col gap-3">
                  {business.phone && (
                    <a
                      href={`tel:${business.phone}`}
                      className="flex items-center gap-3 transition-colors hover:opacity-80"
                    >
                      <span style={{ color: "var(--color-secondary)" }}>
                        <PhoneIcon />
                      </span>
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
                      className="flex items-center gap-3 transition-colors hover:opacity-80"
                    >
                      <span style={{ color: "var(--color-secondary)" }}>
                        <GlobeIcon />
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        Visit Website
                      </span>
                    </a>
                  )}
                  <div className="flex items-center gap-3">
                    <span style={{ color: "var(--color-secondary)" }}>
                      <MapPinIcon />
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {business.area}, Hialeah FL
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  {business.phone && (
                    <a
                      href={`tel:${business.phone}`}
                      className="w-full py-2.5 rounded-lg text-sm font-bold text-white text-center transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    >
                      Call Now
                    </a>
                  )}
                  <button
                    className="w-full py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--color-primary-container)" }}
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              {/* QR / Share */}
              <div
                className="bg-white rounded-xl p-5 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <h3
                  className="font-semibold text-base mb-3"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Share This Business
                </h3>
                <div
                  className="w-full aspect-square rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: "var(--color-surface-container)" }}
                >
                  <QrIcon />
                </div>
                <p
                  className="text-xs text-center"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  Scan QR to share on mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function BuildingIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-outline)" }}>
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-outline)" }}>
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function QrIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-outline)" }}>
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
