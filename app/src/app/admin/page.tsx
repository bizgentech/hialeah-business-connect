import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Admin Dashboard – Hialeah Business Connect",
};

const stats = [
  {
    label: "Total Businesses",
    value: "412",
    change: "+12 this month",
    positive: true,
    icon: "🏪",
    accent: "var(--color-secondary)",
  },
  {
    label: "Pending Approval",
    value: "7",
    change: "Needs review",
    positive: false,
    icon: "⏳",
    accent: "#b45309",
  },
  {
    label: "Active Offers",
    value: "28",
    change: "+4 this week",
    positive: true,
    icon: "🏷️",
    accent: "var(--color-secondary)",
  },
  {
    label: "Kiosk Sessions",
    value: "1,240",
    change: "+18% vs last month",
    positive: true,
    icon: "📺",
    accent: "var(--color-secondary)",
  },
];

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar />
      <main
        className="flex-grow"
        style={{ backgroundColor: "var(--color-surface-container-low)" }}
      >
        {/* ── Admin accent bar ── */}
        <div
          className="border-b px-4 md:px-10 py-2.5 flex items-center gap-3"
          style={{
            backgroundColor: "var(--color-primary-container)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <span className="text-sm leading-none">🔑</span>
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Admin Panel
          </span>
          <span
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(245,158,11,0.2)",
              color: "var(--color-gold)",
              border: "1px solid rgba(245,158,11,0.3)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-gold)" }} />
            7 pending reviews
          </span>
        </div>

        <div
          className="mx-auto px-4 md:px-10 py-10"
          style={{ maxWidth: "1280px" }}
        >
          {/* Header */}
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
                Dashboard
              </h1>
              <p className="mt-1 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                Manage listings, approvals, and kiosk content for Hialeah Business Connect.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/admin/approvals"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                <span className="text-base leading-none">⏳</span>
                Review Submissions
                <span
                  className="px-1.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                >
                  7
                </span>
              </Link>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map(({ label, value, change, positive, icon, accent }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 shadow-ambient"
                style={{
                  border: "1px solid var(--color-outline-variant)",
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <p
                    className="text-xs font-semibold leading-tight"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {label}
                  </p>
                  <span className="text-xl leading-none flex-shrink-0">{icon}</span>
                </div>
                <p
                  className="font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                    fontSize: "clamp(1.6rem, 3vw, 2rem)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  className="text-xs font-semibold mt-1"
                  style={{ color: positive ? "var(--color-secondary)" : "#b45309" }}
                >
                  {positive ? "↑ " : "● "}{change}
                </p>
              </div>
            ))}
          </div>

          {/* Quick nav */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                href: "/admin/approvals",
                title: "Business Approvals",
                description: "Review and approve new business submissions",
                icon: "✅",
                badge: "7 pending",
                badgeAmber: true,
              },
              {
                href: "/admin/kiosk",
                title: "Kiosk & Ads",
                description: "Manage kiosk content and advertising campaigns",
                icon: "📺",
                badge: "3 kiosks",
                badgeAmber: false,
              },
              {
                href: "/directory",
                title: "Public Directory",
                description: "See the live public-facing business directory",
                icon: "🔍",
                badge: "View live",
                badgeAmber: false,
              },
            ].map(({ href, title, description, icon, badge, badgeAmber }) => (
              <Link
                key={href}
                href={href}
                className="bg-white rounded-xl p-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg block group"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl leading-none">{icon}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={
                      badgeAmber
                        ? { backgroundColor: "rgba(245,158,11,0.12)", color: "#b45309" }
                        : { backgroundColor: "rgba(17,92,185,0.08)", color: "var(--color-secondary)" }
                    }
                  >
                    {badge}
                  </span>
                </div>
                <h3
                  className="font-semibold text-base mb-1"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm mb-3" style={{ color: "var(--color-on-surface-variant)" }}>
                  {description}
                </p>
                <p
                  className="text-xs font-semibold transition-transform group-hover:translate-x-0.5"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Go →
                </p>
              </Link>
            ))}
          </div>

          {/* Recent listings table */}
          <div
            className="bg-white rounded-xl shadow-ambient overflow-hidden"
            style={{ border: "1px solid var(--color-outline-variant)" }}
          >
            <div
              className="px-6 py-4 border-b flex justify-between items-center"
              style={{ borderColor: "var(--color-outline-variant)" }}
            >
              <div>
                <h2
                  className="font-semibold text-base"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  Recent Listings
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-on-surface-variant)" }}>
                  {BUSINESSES.length} businesses in the directory
                </p>
              </div>
              <Link
                href="/directory"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  color: "var(--color-secondary)",
                  backgroundColor: "rgba(17,92,185,0.06)",
                  border: "1px solid rgba(17,92,185,0.12)",
                }}
              >
                View all →
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead style={{ backgroundColor: "var(--color-surface-container-low)" }}>
                  <tr>
                    {["Business", "Category", "Area", "Status", "Actions"].map((h) => (
                      <th
                        key={h}
                        className="px-6 py-3 text-left font-semibold text-xs tracking-wide uppercase whitespace-nowrap"
                        style={{ color: "var(--color-on-surface-variant)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BUSINESSES.map((b, i) => (
                    <tr
                      key={b.id}
                      className="transition-colors hover:bg-[var(--color-surface-container-low)]"
                      style={{
                        borderTop:
                          i > 0 ? "1px solid var(--color-outline-variant)" : undefined,
                      }}
                    >
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-semibold text-sm"
                            style={{ color: "var(--color-on-surface)" }}
                          >
                            {b.name}
                          </span>
                          {b.isFeatured && (
                            <span
                              className="px-1.5 py-0.5 rounded text-[10px] font-bold"
                              style={{
                                backgroundColor: "rgba(245,158,11,0.12)",
                                color: "#b45309",
                              }}
                            >
                              ★ Featured
                            </span>
                          )}
                        </div>
                      </td>
                      <td
                        className="px-6 py-3.5 text-sm"
                        style={{ color: "var(--color-on-surface-variant)" }}
                      >
                        {b.category}
                      </td>
                      <td
                        className="px-6 py-3.5 text-sm"
                        style={{ color: "var(--color-on-surface-variant)" }}
                      >
                        {b.area}
                      </td>
                      <td className="px-6 py-3.5">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={
                            b.isVerified
                              ? {
                                  backgroundColor: "rgba(17,92,185,0.08)",
                                  color: "var(--color-secondary)",
                                }
                              : {
                                  backgroundColor: "rgba(245,158,11,0.1)",
                                  color: "#b45309",
                                }
                          }
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ backgroundColor: "currentColor" }}
                          />
                          {b.isVerified ? "Verified" : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        <Link
                          href={`/directory/${b.id}`}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors"
                          style={{
                            color: "var(--color-secondary)",
                            backgroundColor: "rgba(17,92,185,0.06)",
                            border: "1px solid rgba(17,92,185,0.12)",
                          }}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
