import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OfferCard from "@/components/ui/OfferCard";
import { OFFERS, CATEGORIES } from "@/lib/data";

export const metadata = {
  title: "Local Offers – Hialeah Business Connect",
};

const CATEGORY_ICONS: Record<string, string> = {
  All:         "🏷️",
  Restaurants: "🍽️",
  Retail:      "🛍️",
  Services:    "🔧",
  Health:      "💊",
  Auto:        "🚗",
  Beauty:      "💅",
  Education:   "📚",
};

export default function OffersPage() {
  const hotOffers   = OFFERS.filter((o) => o.isHot);
  const otherOffers = OFFERS.filter((o) => !o.isHot);

  return (
    <>
      <Navbar />
      <main className="flex-grow" style={{ backgroundColor: "var(--color-surface)" }}>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "var(--color-primary-container)",
            minHeight: "210px",
          }}
        >
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="/assets/scenes/offers-coffee.jpg"
              alt="Local Hialeah business offers"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary-container) 35%, rgba(0,33,71,0.75) 100%)",
              }}
            />
          </div>

          {/* Dot-grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, transparent 100%)",
            }}
          />

          <div
            className="relative mx-auto px-4 md:px-10 py-12"
            style={{ maxWidth: "1280px" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
              <p
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Updated Weekly
              </p>
            </div>

            <h1
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "#ffffff",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Local Offers &amp; Deals
            </h1>
            <p
              className="text-base max-w-xl mb-6"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Exclusive promotions and discounts from businesses in Hialeah.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "🏷️", label: `${OFFERS.length} Active Deals` },
                { icon: "🔥", label: `${hotOffers.length} Hot This Week` },
                { icon: "🆓", label: "Always Free" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <span>{icon}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div
          className="mx-auto px-4 md:px-10 py-10"
          style={{ maxWidth: "1280px" }}
        >
          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer flex-shrink-0"
                style={
                  cat === "All"
                    ? {
                        backgroundColor: "var(--color-primary-container)",
                        color: "#ffffff",
                      }
                    : {
                        backgroundColor: "var(--color-surface-container)",
                        color: "var(--color-on-surface-variant)",
                        border: "1px solid var(--color-outline-variant)",
                      }
                }
              >
                <span className="text-sm leading-none">{CATEGORY_ICONS[cat] ?? "⋯"}</span>
                {cat}
              </button>
            ))}
          </div>

          {/* Hot deals */}
          {hotOffers.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <h2
                    className="font-bold"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "var(--color-primary-container)",
                      fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                    }}
                  >
                    🔥 Hot This Week
                  </h2>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "rgba(245,158,11,0.12)",
                      color: "#b45309",
                    }}
                  >
                    {hotOffers.length} deal{hotOffers.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <p
                  className="text-xs font-semibold hidden sm:block"
                  style={{ color: "var(--color-outline)" }}
                >
                  Expires soon · Grab them while they last
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {hotOffers.map((o) => (
                  <OfferCard key={o.id} offer={o} />
                ))}
              </div>
            </section>
          )}

          {/* All current offers */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <h2
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                  }}
                >
                  All Current Offers
                </h2>
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(17,92,185,0.08)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {OFFERS.length} total
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {OFFERS.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          </section>

          {/* CTA strip */}
          {otherOffers.length === 0 && (
            /* spacer when hot and all offers are the same set */
            <div className="mb-2" />
          )}
          <div
            className="rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary-container) 0%, #1a3a6e 100%)",
            }}
          >
            <div>
              <h3
                className="font-bold text-xl mb-1"
                style={{ fontFamily: "var(--font-outfit)", color: "#ffffff" }}
              >
                Are you a local business owner?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                List your business and post exclusive offers — always free.
              </p>
            </div>
            <Link
              href="/register"
              className="flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "var(--color-gold)", color: "#ffffff" }}
            >
              List Your Business →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
