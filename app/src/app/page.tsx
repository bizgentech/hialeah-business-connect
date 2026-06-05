import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BusinessCard from "@/components/ui/BusinessCard";
import OfferCard from "@/components/ui/OfferCard";
import Image from "next/image";
import { BUSINESSES, OFFERS, CATEGORIES, HOMEPAGE_SCENES } from "@/lib/data";

export default function HomePage() {
  const featured = BUSINESSES.filter((b) => b.isFeatured);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "var(--color-primary-container)" }}
        >
          <div
            className="mx-auto px-4 md:px-10 py-20 md:py-28"
            style={{ maxWidth: "1280px" }}
          >
            <div className="max-w-2xl">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--color-gold)" }}
              >
                City of Hialeah, FL
              </p>
              <h1
                className="font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "#ffffff",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Discover Hialeah&apos;s Best Local Businesses
              </h1>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "var(--color-on-primary-container)" }}
              >
                Connect with trusted local restaurants, shops, and services in
                your community. Free listings, real reviews, hyper-local deals.
              </p>

              {/* Search bar */}
              <div
                className="flex flex-col sm:flex-row gap-3 p-3 rounded-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex-grow relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search businesses, services..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-sm font-medium outline-none transition-all"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "var(--color-on-surface)",
                      border: "1px solid var(--color-outline-variant)",
                    }}
                  />
                </div>
                <Link
                  href="/directory"
                  className="px-6 py-3 rounded-lg text-sm font-bold text-white text-center transition-opacity hover:opacity-90 whitespace-nowrap"
                  style={{ backgroundColor: "var(--color-gold)" }}
                >
                  Search Directory
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative shape */}
          <div
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full opacity-10"
            style={{ backgroundColor: "var(--color-secondary)" }}
          />
        </section>

        {/* Category chips */}
        <section
          className="border-b"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-outline-variant)",
          }}
        >
          <div
            className="mx-auto px-4 md:px-10 py-4"
            style={{ maxWidth: "1280px" }}
          >
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={cat === "All" ? "/directory" : `/directory?category=${cat}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors"
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
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ backgroundColor: "var(--color-surface-container-low)" }}>
          <div
            className="mx-auto px-4 md:px-10 py-8"
            style={{ maxWidth: "1280px" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Local Businesses" },
                { value: "12", label: "Neighborhoods" },
                { value: "3", label: "Kiosk Locations" },
                { value: "100%", label: "Free to List" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p
                    className="font-bold text-3xl mb-1"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "var(--color-primary-container)",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scene strip — 4 Stitch community photos */}
        <section className="overflow-hidden" style={{ backgroundColor: "var(--color-surface-container)" }}>
          <div className="flex h-52 md:h-64">
            {HOMEPAGE_SCENES.map((scene, i) => (
              <div key={i} className="flex-1 relative overflow-hidden">
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="25vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Featured businesses */}
        <section className="py-16" style={{ backgroundColor: "var(--color-surface)" }}>
          <div
            className="mx-auto px-4 md:px-10"
            style={{ maxWidth: "1280px" }}
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2
                  className="font-bold text-3xl mb-2"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Featured Businesses
                </h2>
                <p style={{ color: "var(--color-on-surface-variant)" }}>
                  Highlighted members of our local community
                </p>
              </div>
              <Link
                href="/directory"
                className="text-sm font-semibold transition-colors hover:underline hidden md:block"
                style={{ color: "var(--color-secondary)" }}
              >
                View all →
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {featured.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </div>
        </section>

        {/* Local Offers */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--color-surface-container-low)" }}
        >
          <div
            className="mx-auto px-4 md:px-10"
            style={{ maxWidth: "1280px" }}
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2
                  className="font-bold text-3xl mb-2"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Local Offers & Deals
                </h2>
                <p style={{ color: "var(--color-on-surface-variant)" }}>
                  Exclusive promotions from Hialeah businesses
                </p>
              </div>
              <Link
                href="/offers"
                className="text-sm font-semibold transition-colors hover:underline hidden md:block"
                style={{ color: "var(--color-secondary)" }}
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {OFFERS.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA – Add Your Business */}
        <section
          className="py-20"
          style={{ backgroundColor: "var(--color-primary-container)" }}
        >
          <div
            className="mx-auto px-4 md:px-10 text-center"
            style={{ maxWidth: "1280px" }}
          >
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
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "var(--color-on-primary-container)" }}
            >
              List your business for free and reach thousands of residents and
              visitors looking for local services every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                Add Your Business — It&apos;s Free
              </Link>
              <Link
                href="/directory"
                className="px-8 py-4 rounded-lg font-bold transition-opacity hover:opacity-90"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
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

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ color: "var(--color-outline)" }}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
