"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BusinessCard from "@/components/ui/BusinessCard";
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
          className="mx-auto px-4 md:px-10 py-12"
          style={{ maxWidth: "1280px" }}
        >
          {/* Page header */}
          <div className="mb-8">
            <h1
              className="font-bold mb-2"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-primary-container)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Explore Local Businesses
            </h1>
            <p
              className="text-lg"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Find local restaurants, services, shops, and more in our community
              directory.
            </p>
          </div>

          {/* Search & filter bar */}
          <div
            className="bg-white p-4 rounded-xl mb-4 shadow-ambient"
            style={{ border: "1px solid var(--color-outline-variant)" }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search businesses..."
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
              <div className="flex gap-3 flex-wrap md:flex-nowrap">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="rounded-lg px-4 py-2.5 text-sm outline-none min-w-[150px]"
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
                <label className="flex items-center gap-2 cursor-pointer rounded-lg px-4 py-2.5 transition-colors"
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
                  <span className="text-sm" style={{ color: "var(--color-on-surface)" }}>
                    Featured Only
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
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
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Business list */}
            <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col gap-4">
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
                filtered.map((b) => <BusinessCard key={b.id} business={b} />)
              )}
            </div>

            {/* Map panel — Stitch scene: directory-map.jpg */}
            <div
              className="w-full lg:w-2/5 xl:w-1/3 lg:sticky top-24 rounded-xl overflow-hidden shadow-ambient relative"
              style={{
                height: "400px",
                border: "1px solid var(--color-outline-variant)",
              }}
            >
              <Image
                src="/assets/scenes/directory-map.jpg"
                alt="Stylized map of Hialeah business locations"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Overlay label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
                <div
                  className="px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.85)",
                    color: "var(--color-primary-container)",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  🗺 Interactive Map
                </div>
                <p
                  className="text-xs text-center px-8 font-medium"
                  style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                >
                  Full map connects to production database
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

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--color-outline)" }}>
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

