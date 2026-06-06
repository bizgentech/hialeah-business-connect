import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Kiosk & Ads Management – Admin",
};

const kiosks = [
  {
    id: "k1",
    name: "Kiosk A – Westland Mall",
    location: "West Hialeah",
    status: "Online",
    sessions: 412,
    lastActive: "2 min ago",
  },
  {
    id: "k2",
    name: "Kiosk B – City Hall Plaza",
    location: "Downtown Hialeah",
    status: "Online",
    sessions: 287,
    lastActive: "5 min ago",
  },
  {
    id: "k3",
    name: "Kiosk C – Palm Springs Mile",
    location: "East Hialeah",
    status: "Offline",
    sessions: 541,
    lastActive: "3 hrs ago",
  },
];

const ads = [
  {
    id: "a1",
    title: "Summer Splash Sale",
    advertiser: "Hialeah Auto Parts",
    type: "Banner",
    status: "Active",
    impressions: "4,210",
    ends: "Jun 30, 2026",
  },
  {
    id: "a2",
    title: "Grand Opening Special",
    advertiser: "Cafetería La Palma",
    type: "Interstitial",
    status: "Active",
    impressions: "1,850",
    ends: "Jun 15, 2026",
  },
  {
    id: "a3",
    title: "Health Month Promo",
    advertiser: "Salud Wellness Center",
    type: "Banner",
    status: "Paused",
    impressions: "3,100",
    ends: "Jul 1, 2026",
  },
];

export default function KioskAdminPage() {
  const onlineCount    = kiosks.filter((k) => k.status === "Online").length;
  const activeAds      = ads.filter((a) => a.status === "Active").length;
  const totalImpressions = ads.reduce(
    (sum, a) => sum + parseInt(a.impressions.replace(",", ""), 10),
    0
  );

  return (
    <>
      <Navbar />
      <main
        className="flex-grow"
        style={{ backgroundColor: "var(--color-surface-container-low)" }}
      >
        <div
          className="mx-auto px-4 md:px-10 py-10"
          style={{ maxWidth: "1280px" }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link
              href="/admin"
              className="hover:underline"
              style={{ color: "var(--color-secondary)" }}
            >
              Admin
            </Link>
            <span style={{ color: "var(--color-outline)" }}>›</span>
            <span style={{ color: "var(--color-on-surface-variant)" }}>
              Kiosk &amp; Ads
            </span>
          </div>

          {/* Page header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
            <div>
              <h1
                className="font-bold"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Kiosk &amp; Ads Management
              </h1>
              <p className="mt-1 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                Monitor kiosk locations and manage advertising campaigns.
              </p>
            </div>

            {/* Quick-stat chips */}
            <div className="flex gap-3 flex-shrink-0">
              {[
                { label: "Online", value: `${onlineCount}/${kiosks.length}` },
                { label: "Active Ads", value: String(activeAds) },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="px-4 py-2.5 rounded-xl text-center"
                  style={{
                    backgroundColor: "rgba(17,92,185,0.07)",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  <p
                    className="font-bold text-xl leading-none"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "var(--color-primary-container)",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-on-surface-variant)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Kiosk Locations ── */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-5">
              <h2
                className="font-bold text-xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Kiosk Locations
              </h2>
              <button
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                + Add Kiosk
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {kiosks.map((k) => {
                const isOnline = k.status === "Online";
                return (
                  <div
                    key={k.id}
                    className="bg-white rounded-xl p-5 shadow-ambient"
                    style={{
                      border: "1px solid var(--color-outline-variant)",
                      borderTop: `3px solid ${isOnline ? "#16a34a" : "var(--color-error)"}`,
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className="font-semibold text-sm leading-snug pr-2"
                        style={{ color: "var(--color-primary-container)" }}
                      >
                        {k.name}
                      </h3>
                      <span
                        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-bold flex-shrink-0"
                        style={
                          isOnline
                            ? { backgroundColor: "rgba(22,163,74,0.1)", color: "#15803d" }
                            : { backgroundColor: "rgba(186,26,26,0.08)", color: "var(--color-error)" }
                        }
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full inline-block${isOnline ? " animate-pulse" : ""}`}
                          style={{ backgroundColor: isOnline ? "#16a34a" : "var(--color-error)" }}
                        />
                        {k.status}
                      </span>
                    </div>

                    <p
                      className="text-xs mb-4 flex items-center gap-1"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      <span>📍</span>
                      {k.location}
                    </p>

                    {/* Stats mini-grid */}
                    <div
                      className="grid grid-cols-2 gap-3 p-3 rounded-lg mb-4"
                      style={{ backgroundColor: "var(--color-surface-container-low)" }}
                    >
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-wide mb-0.5"
                          style={{ color: "var(--color-outline)" }}
                        >
                          Sessions today
                        </p>
                        <p
                          className="font-bold text-xl"
                          style={{
                            fontFamily: "var(--font-outfit)",
                            color: "var(--color-primary-container)",
                          }}
                        >
                          {k.sessions}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-[10px] uppercase tracking-wide mb-0.5"
                          style={{ color: "var(--color-outline)" }}
                        >
                          Last active
                        </p>
                        <p
                          className="font-semibold text-sm"
                          style={{
                            color: isOnline ? "#15803d" : "var(--color-on-surface-variant)",
                          }}
                        >
                          {k.lastActive}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href="/kiosk"
                        className="flex-1 py-2 rounded-lg text-xs font-bold text-white text-center transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                      >
                        Preview
                      </Link>
                      <button
                        className="flex-1 py-2 rounded-lg text-xs font-semibold transition-opacity hover:opacity-80"
                        style={{
                          border: "1px solid var(--color-outline-variant)",
                          color: "var(--color-on-surface-variant)",
                        }}
                      >
                        Configure
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Ad Campaigns ── */}
          <section>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
              <div>
                <h2
                  className="font-bold text-xl"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Ad Campaigns
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-on-surface-variant)" }}>
                  {ads.length} campaigns · {activeAds} active ·{" "}
                  {totalImpressions.toLocaleString()} total impressions
                </p>
              </div>
              <button
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 self-start flex-shrink-0"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                + New Campaign
              </button>
            </div>

            <div
              className="bg-white rounded-xl shadow-ambient overflow-hidden"
              style={{ border: "1px solid var(--color-outline-variant)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead
                    style={{ backgroundColor: "var(--color-surface-container-low)" }}
                  >
                    <tr>
                      {[
                        "Campaign",
                        "Advertiser",
                        "Type",
                        "Status",
                        "Impressions",
                        "End Date",
                        "Actions",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left text-xs font-semibold tracking-wide uppercase whitespace-nowrap"
                          style={{ color: "var(--color-on-surface-variant)" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ads.map((ad, i) => (
                      <tr
                        key={ad.id}
                        className="transition-colors hover:bg-[var(--color-surface-container-low)]"
                        style={{
                          borderTop:
                            i > 0 ? "1px solid var(--color-outline-variant)" : undefined,
                        }}
                      >
                        <td
                          className="px-5 py-4 font-semibold whitespace-nowrap"
                          style={{ color: "var(--color-on-surface)" }}
                        >
                          {ad.title}
                        </td>
                        <td
                          className="px-5 py-4 whitespace-nowrap"
                          style={{ color: "var(--color-on-surface-variant)" }}
                        >
                          {ad.advertiser}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className="px-2 py-0.5 rounded text-xs font-semibold"
                            style={{
                              backgroundColor: "var(--color-surface-container)",
                              color: "var(--color-on-surface-variant)",
                            }}
                          >
                            {ad.type}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                            style={
                              ad.status === "Active"
                                ? { backgroundColor: "rgba(22,163,74,0.1)", color: "#15803d" }
                                : { backgroundColor: "rgba(245,158,11,0.1)", color: "#b45309" }
                            }
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{
                                backgroundColor:
                                  ad.status === "Active" ? "#16a34a" : "#f59e0b",
                              }}
                            />
                            {ad.status}
                          </span>
                        </td>
                        <td
                          className="px-5 py-4 font-semibold"
                          style={{ color: "var(--color-on-surface)" }}
                        >
                          {ad.impressions}
                        </td>
                        <td
                          className="px-5 py-4 whitespace-nowrap"
                          style={{ color: "var(--color-on-surface-variant)" }}
                        >
                          {ad.ends}
                        </td>
                        <td className="px-5 py-4">
                          <button
                            className="text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors"
                            style={{
                              color: "var(--color-secondary)",
                              backgroundColor: "rgba(17,92,185,0.06)",
                              border: "1px solid rgba(17,92,185,0.12)",
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
