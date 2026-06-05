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
}

export default function BusinessCard({ business }: BusinessCardProps) {
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
            // Gradient placeholder — slot kept ready for future image
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-surface-container-high) 0%, var(--color-surface-container-highest) 100%)",
              }}
            >
              <StorefrontIcon />
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

function StorefrontIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-outline)" }}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function DirectionsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
