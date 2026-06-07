"use client";

import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";

export interface Business {
  id: string;
  name: string;
  category: string;
  area: string;
  description: string;
  phone?: string;
  website?: string;
  image?: string | null;
  galleryImages?: string[];
  isFeatured?: boolean;
  isVerified?: boolean;
}

interface BusinessCardProps {
  business: Business;
  /**
   * "compact" (default) — horizontal thumbnail card, used in /directory
   * "grid"              — vertical image-top card, used on homepage featured grid
   */
  variant?: "compact" | "grid";
  /** Show a "Hot Offer" badge when this business has an active offer */
  hasOffer?: boolean;
}

export default function BusinessCard({
  business,
  variant = "compact",
  hasOffer = false,
}: BusinessCardProps) {
  if (variant === "grid") return <GridCard business={business} hasOffer={hasOffer} />;
  return <CompactCard business={business} />;
}

/* ─── Grid card — image top, used on homepage ─────────────────────── */
function GridCard({ business, hasOffer = false }: { business: Business; hasOffer?: boolean }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 group flex flex-col"
      style={{
        border: "1px solid var(--color-outline-variant)",
        borderTop: business.isFeatured
          ? "3px solid var(--color-gold)"
          : "1px solid var(--color-outline-variant)",
        boxShadow:
          "0 2px 8px rgba(0,33,71,0.07), 0 1px 2px rgba(0,33,71,0.04)",
      }}
    >
      {/* Image */}
      <div
        className="relative h-44 flex-shrink-0 overflow-hidden"
        style={{ backgroundColor: "var(--color-surface-container)" }}
      >
        {business.image ? (
          <Image
            src={business.image}
            alt={`${business.name} – ${business.category} in ${business.area}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--color-surface-container-high) 0%, var(--color-surface-container-highest) 100%)",
            }}
          >
            <StorefrontIcon size={40} />
          </div>
        )}

        {/* Bottom scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,33,71,0.55) 0%, transparent 55%)",
          }}
        />

        {/* Featured / Verified badge — top right */}
        <div className="absolute top-2.5 right-2.5 z-10">
          {business.isFeatured && (
            <Badge variant="featured">★ Featured</Badge>
          )}
          {!business.isFeatured && business.isVerified && (
            <Badge variant="verified">✓ Verified</Badge>
          )}
        </div>

        {/* Hot Offer badge — top left */}
        {hasOffer && (
          <div className="absolute top-2.5 left-3 z-10">
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black text-white tracking-wide"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              🔥 Hot Offer
            </span>
          </div>
        )}

        {/* Category pill — bottom left */}
        <span
          className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-full text-xs font-bold text-white z-10"
          style={{
            backgroundColor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          {business.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Area */}
        <p
          className="text-xs font-semibold mb-1 flex items-center gap-1"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          <PinIcon />
          {business.area}
        </p>

        {/* Name */}
        <h3
          className="font-bold text-base leading-snug mb-2"
          style={{
            fontFamily: "var(--font-outfit)",
            color: "var(--color-primary-container)",
          }}
        >
          {business.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-2 flex-grow mb-4"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          {business.description}
        </p>

        {/* Footer row */}
        <div
          className="flex justify-between items-center pt-3"
          style={{ borderTop: "1px solid var(--color-outline-variant)" }}
        >
          <div className="flex gap-2.5" style={{ color: "var(--color-outline)" }}>
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                title="Call"
                className="transition-colors hover:text-[--color-secondary]"
              >
                <PhoneIcon />
              </a>
            )}
            {business.website && (
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                title="Website"
                className="transition-colors hover:text-[--color-secondary]"
              >
                <GlobeIcon />
              </a>
            )}
          </div>
          <Link
            href={`/directory/${business.id}`}
            className="text-sm font-bold transition-colors hover:underline"
            style={{ color: "var(--color-secondary)" }}
          >
            View Business →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Compact card — horizontal thumbnail, used in /directory ──────── */
function CompactCard({ business }: { business: Business }) {
  return (
    <div
      className="bg-white rounded-xl p-4 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg group"
      style={{ border: "1px solid var(--color-outline-variant)" }}
    >
      <div className="flex gap-4 items-start">
        {/* Thumbnail */}
        <div
          className="w-20 h-20 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
          style={{
            backgroundColor: "var(--color-surface-container)",
            border: "1px solid var(--color-outline-variant)",
          }}
        >
          {business.image ? (
            <Image
              src={business.image}
              alt={`${business.name} – ${business.category} in ${business.area}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-surface-container-high) 0%, var(--color-surface-container-highest) 100%)",
              }}
            >
              <StorefrontIcon size={28} />
            </div>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex justify-between items-start mb-1 gap-2">
            <h3
              className="font-semibold text-base leading-snug"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-primary-container)",
              }}
            >
              {business.name}
            </h3>
            <div className="shrink-0">
              {business.isFeatured && (
                <Badge variant="featured">★ Featured</Badge>
              )}
              {!business.isFeatured && business.isVerified && (
                <Badge variant="verified">✓ Verified</Badge>
              )}
            </div>
          </div>

          <p
            className="text-sm font-semibold mb-2 tracking-wide"
            style={{ color: "var(--color-secondary)" }}
          >
            {business.category} · {business.area}
          </p>

          <p
            className="text-sm mb-3 line-clamp-2 leading-relaxed"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            {business.description}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex gap-3" style={{ color: "var(--color-outline)" }}>
              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="transition-colors hover:text-[--color-secondary]"
                  title="Call"
                >
                  <PhoneIcon />
                </a>
              )}
              {business.website && (
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[--color-secondary]"
                  title="Website"
                >
                  <GlobeIcon />
                </a>
              )}
              <button
                className="transition-colors hover:text-[--color-secondary]"
                title="Directions"
              >
                <DirectionsIcon />
              </button>
            </div>
            <Link
              href={`/directory/${business.id}`}
              className="text-sm font-semibold transition-colors hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              View Business
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared icons ──────────────────────────────────────────────────── */
function StorefrontIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ color: "var(--color-outline)" }}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function DirectionsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
