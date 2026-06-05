export interface Offer {
  id: string;
  businessName: string;
  category: string;
  title: string;
  description: string;
  discount: string;
  expires: string;
  image?: string;
  isHot?: boolean;
}

interface OfferCardProps {
  offer: Offer;
}

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg"
      style={{ border: "1px solid var(--color-outline-variant)" }}
    >
      <div
        className="h-36 flex items-center justify-center relative"
        style={{ backgroundColor: "var(--color-surface-container)" }}
      >
        {offer.image ? (
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: "var(--color-outline)" }}
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
        )}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold text-white"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          {offer.discount}
        </div>
        {offer.isHot && (
          <div
            className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold text-white"
            style={{ backgroundColor: "var(--color-error)" }}
          >
            🔥 Hot
          </div>
        )}
      </div>

      <div className="p-4">
        <p
          className="text-xs font-semibold tracking-wide mb-1"
          style={{ color: "var(--color-secondary)" }}
        >
          {offer.businessName} · {offer.category}
        </p>
        <h3
          className="font-semibold text-base mb-2"
          style={{
            fontFamily: "var(--font-outfit)",
            color: "var(--color-primary-container)",
          }}
        >
          {offer.title}
        </h3>
        <p
          className="text-sm mb-3 leading-relaxed"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          {offer.description}
        </p>
        <div className="flex justify-between items-center">
          <p
            className="text-xs"
            style={{ color: "var(--color-outline)" }}
          >
            Expires {offer.expires}
          </p>
          <button
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
}
