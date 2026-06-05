import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Kiosk & Ads Management – Admin",
};

const kiosks = [
  { id: "k1", name: "Kiosk A – Westland Mall", location: "West Hialeah", status: "Online", sessions: 412, lastActive: "2 min ago" },
  { id: "k2", name: "Kiosk B – City Hall Plaza", location: "Downtown Hialeah", status: "Online", sessions: 287, lastActive: "5 min ago" },
  { id: "k3", name: "Kiosk C – Palm Springs Mile", location: "East Hialeah", status: "Offline", sessions: 541, lastActive: "3 hrs ago" },
];

const ads = [
  { id: "a1", title: "Summer Splash Sale", advertiser: "Hialeah Auto Parts", type: "Banner", status: "Active", impressions: "4,210", ends: "Jun 30, 2026" },
  { id: "a2", title: "Grand Opening Special", advertiser: "Cafetería La Palma", type: "Interstitial", status: "Active", impressions: "1,850", ends: "Jun 15, 2026" },
  { id: "a3", title: "Health Month Promo", advertiser: "Salud Wellness Center", type: "Banner", status: "Paused", impressions: "3,100", ends: "Jul 1, 2026" },
];

export default function KioskAdminPage() {
  return (
    <>
      <Navbar />
      <main
        className="flex-grow"
        style={{ backgroundColor: "var(--color-surface-container-low)" }}
      >
        <div
          className="mx-auto px-4 md:px-10 py-12"
          style={{ maxWidth: "1280px" }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/admin" style={{ color: "var(--color-secondary)" }} className="hover:underline">
              Admin
            </Link>
            <span style={{ color: "var(--color-outline)" }}>›</span>
            <span style={{ color: "var(--color-on-surface-variant)" }}>Kiosk & Ads</span>
          </div>

          <h1
            className="font-bold text-3xl mb-10"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-primary-container)",
            }}
          >
            Kiosk & Ads Management
          </h1>

          {/* Kiosks */}
          <section className="mb-12">
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
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                + Add Kiosk
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {kiosks.map((k) => (
                <div
                  key={k.id}
                  className="bg-white rounded-xl p-5 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: "var(--color-primary-container)" }}
                    >
                      {k.name}
                    </h3>
                    <span
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={
                        k.status === "Online"
                          ? { backgroundColor: "rgba(17,92,185,0.1)", color: "var(--color-secondary)" }
                          : { backgroundColor: "rgba(186,26,26,0.1)", color: "var(--color-error)" }
                      }
                    >
                      {k.status}
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "var(--color-on-surface-variant)" }}>
                    {k.location}
                  </p>
                  <div className="flex justify-between text-xs">
                    <div>
                      <p style={{ color: "var(--color-outline)" }}>Sessions today</p>
                      <p className="font-bold text-base" style={{ color: "var(--color-primary-container)" }}>{k.sessions}</p>
                    </div>
                    <div className="text-right">
                      <p style={{ color: "var(--color-outline)" }}>Last active</p>
                      <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>{k.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Link
                      href="/kiosk"
                      className="flex-1 py-2 rounded-lg text-xs font-semibold text-white text-center transition-opacity hover:opacity-90"
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
              ))}
            </div>
          </section>

          {/* Ads */}
          <section>
            <div className="flex justify-between items-center mb-5">
              <h2
                className="font-bold text-xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Ad Campaigns
              </h2>
              <button
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                + New Campaign
              </button>
            </div>
            <div
              className="bg-white rounded-xl shadow-ambient overflow-hidden"
              style={{ border: "1px solid var(--color-outline-variant)" }}
            >
              <table className="w-full text-sm">
                <thead style={{ backgroundColor: "var(--color-surface-container-low)" }}>
                  <tr>
                    {["Campaign", "Advertiser", "Type", "Status", "Impressions", "End Date", "Actions"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3 text-left text-xs font-semibold tracking-wide uppercase"
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
                      style={{ borderTop: i > 0 ? "1px solid var(--color-outline-variant)" : undefined }}
                    >
                      <td className="px-5 py-4 font-semibold" style={{ color: "var(--color-on-surface)" }}>{ad.title}</td>
                      <td className="px-5 py-4" style={{ color: "var(--color-on-surface-variant)" }}>{ad.advertiser}</td>
                      <td className="px-5 py-4" style={{ color: "var(--color-on-surface-variant)" }}>{ad.type}</td>
                      <td className="px-5 py-4">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-semibold"
                          style={
                            ad.status === "Active"
                              ? { backgroundColor: "rgba(17,92,185,0.1)", color: "var(--color-secondary)" }
                              : { backgroundColor: "var(--color-surface-container-high)", color: "var(--color-on-surface-variant)" }
                          }
                        >
                          {ad.status}
                        </span>
                      </td>
                      <td className="px-5 py-4" style={{ color: "var(--color-on-surface-variant)" }}>{ad.impressions}</td>
                      <td className="px-5 py-4" style={{ color: "var(--color-on-surface-variant)" }}>{ad.ends}</td>
                      <td className="px-5 py-4">
                        <button className="text-xs font-semibold" style={{ color: "var(--color-secondary)" }}>
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
