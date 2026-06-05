"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Business } from "@/components/ui/BusinessCard";
import { BUSINESSES, CATEGORIES, AREAS } from "@/lib/data";

export default function DirectoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [area, setArea] = useState("All Areas");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = BUSINESSES.filter((b) => {
    const matchSearch =
      !search ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "All" ||
      b.category.toLowerCase().includes(category.toLowerCase().replace(/s$/, ""));
    const matchArea = area === "All Areas" || b.area === area;
    const matchFeatured = !featuredOnly || b.isFeatured;
    return matchSearch && matchCategory && matchArea && matchFeatured;
  });

  return (
    <>
      <Navbar />
      <main className="flex-grow" style={{ backgroundColor: "var(--color-surface)" }}>
        <div
          className="mx-auto px-4 md:px-10 py-10"
          style={{ maxWidth: "1280px" }}
        >
          {/* Page header */}
          <div className="mb-6">
            <h1
              className="font-bold mb-1.5"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-primary-container)",
                fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Business Directory
            </h1>
            <p style={{ color: "var(--color-on-surface-variant)" }}>
              Discover trusted local businesses in Hialeah, FL
            </p>
          </div>

          {/* Search & filter bar */}
          <div
            className="bg-white p-3 rounded-xl mb-3 shadow-ambient"
            style={{ border: "1px solid var(--color-outline-variant)" }}
          >
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search businesses, services..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    border: "1px solid var(--color-outline-variant)",
                    color: "var(--color-on-surface)",
                  }}
                />
              </div>
              <div className="flex gap-2 flex-wrap md:flex-nowrap">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="rounded-lg px-3 py-2.5 text-sm outline-none"
                  style={{
                    border: "1px solid var(--color-outline-variant)",
                    backgroundColor: "var(--color-surface-container-lowest)",
                    color: "var(--color-on-surface)",
                  }}
                >
                  {AREAS.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
                <label
                  className="flex items-center gap-2 cursor-pointer rounded-lg px-3 py-2.5"
                  style={{
                    border: "1px solid var(--color-outline-variant)",
                    backgroundColor: "var(--color-surface-container-lowest)",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={(e) => setFeaturedOnly(e.target.checked)}
                    className="rounded"
                    style={{ accentColor: "var(--color-secondary)" }}
                  />
                  <span className="text-sm whitespace-nowrap" style={{ color: "var(--color-on-surface)" }}>
                    Featured Only
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-3.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
                style={
                  category === cat
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
              </button>
            ))}
          </div>

          {/* Results + map layout */}
          <div className="flex flex-col lg:flex-row gap-5">

            {/* Business grid */}
            <div className="flex-1 min-w-0">
              <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
                {filtered.length}{" "}
                {filtered.length === 1 ? "business" : "businesses"} found
              </p>

              {filtered.length === 0 ? (
                <div
                  className="text-center py-16 rounded-xl"
                  style={{
                    backgroundColor: "var(--color-surface-container-low)",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  <p
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    No businesses found
                  </p>
                  <p style={{ color: "var(--color-on-surface-variant)" }}>
                    Try adjusting your search or filters.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((b) => (
                    <GridBusinessCard key={b.id} business={b} />
                  ))}
                </div>
              )}
            </div>

            {/* Sticky right panel: map + top-result detail */}
            <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
              <div className="lg:sticky top-24 flex flex-col gap-4">

                {/* Map panel */}
                <div
                  className="rounded-xl overflow-hidden shadow-ambient relative"
                  style={{
                    height: "260px",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  <Image
                    src="/assets/scenes/directory-map.jpg"
                    alt="Stylized map of Hialeah business locations"
                    fill
                    className="object-cover opacity-65"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                  {/* Neighborhood labels */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[
                      { label: "WEST HIALEAH", top: "28%", left: "22%" },
                      { label: "EAST HIALEAH", top: "28%", left: "65%" },
                      { label: "DOWNTOWN", top: "62%", left: "45%" },
                    ].map(({ label, top, left }) => (
                      <div
                        key={label}
                        className="absolute px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider"
                        style={{
                          top,
                          left,
                          transform: "translateX(-50%)",
                          color: "rgba(255,255,255,0.9)",
                          backgroundColor: "rgba(0,33,71,0.6)",
                          backdropFilter: "blur(3px)",
                        }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  {/* Map label */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        color: "var(--color-primary-container)",
                        border: "1px solid var(--color-outline-variant)",
                      }}
                    >
                      🗺 Interactive Map
                    </div>
                  </div>
                </div>

                {/* Top-result highlight card */}
                {filtered[0] && (
                  <div
                    className="bg-white rounded-xl p-4 shadow-ambient"
                    style={{ border: "1px solid var(--color-outline-variant)" }}
                  >
                    <p
                      className="text-[10px] font-bold tracking-widest uppercase mb-3"
                      style={{ color: "var(--color-outline)" }}
                    >
                      Top Result
                    </p>
                    <div className="flex gap-3 mb-2.5">
                      <div
                        className="w-14 h-14 rounded-xl overflow-hidden relative flex-shrink-0"
                        style={{ backgroundColor: "var(--color-surface-container)" }}
                      >
                        {filtered[0].image ? (
                          <Image
                            src={filtered[0].image}
                            alt={filtered[0].name}
                            fill
                            className="object-cover"
                            sizes="56px"
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
                        <h3
                          className="font-semibold text-sm leading-snug"
                          style={{
                            fontFamily: "var(--font-outfit)",
                            color: "var(--color-primary-container)",
                          }}
                        >
                          {filtered[0].name}
                        </h3>
                        <p
                          className="text-xs mt-0.5 mb-1.5"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          {filtered[0].category} · {filtered[0].area}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <span className="text-yellow-400 text-xs leading-none">★★★★★</span>
                          <span className="text-xs" style={{ color: "var(--color-outline)" }}>4.8</span>
                          {filtered[0].isFeatured && (
                            <span
                              className="px-1.5 py-0.5 rounded text-[10px] font-bold"
                              style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}
                            >
                              ★ Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p
                      className="text-xs leading-relaxed line-clamp-2 mb-3"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {filtered[0].description}
                    </p>
                    <Link
                      href={`/directory/${filtered[0].id}`}
                      className="block w-full text-center py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                      View Details →
                    </Link>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ─── Compact grid card (directory-only) ───────────────────────────────── */
function GridBusinessCard({ business }: { business: Business }) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg flex flex-col"
      style={{ border: "1px solid var(--color-outline-variant)" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: "140px", backgroundColor: "var(--color-surface-container)" }}
      >
        {business.image ? (
          <Image
            src={business.image}
            alt={`${business.name} – ${business.category}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--color-surface-container-high) 0%, var(--color-surface-container-highest) 100%)",
            }}
          >
            <span className="text-4xl opacity-30">🏪</span>
          </div>
        )}
        {/* Badges */}
        {business.isFeatured && (
          <span
            className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            ★ Featured
          </span>
        )}
        {business.isVerified && (
          <span
            className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-xs font-bold text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            ✓
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        <p
          className="text-xs font-semibold tracking-wide mb-0.5"
          style={{ color: "var(--color-secondary)" }}
        >
          {business.category} · {business.area}
        </p>
        <h3
          className="font-semibold text-sm leading-snug mb-2"
          style={{
            fontFamily: "var(--font-outfit)",
            color: "var(--color-primary-container)",
          }}
        >
          {business.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-yellow-400 text-xs leading-none">★★★★★</span>
          <span className="text-xs" style={{ color: "var(--color-outline)" }}>
            4.8
          </span>
        </div>
        <p
          className="text-xs leading-relaxed line-clamp-2 mb-3 flex-grow"
          style={{ color: "var(--color-on-surface-variant)" }}
        >
          {business.description}
        </p>
        <Link
          href={`/directory/${business.id}`}
          className="block w-full text-center py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
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
