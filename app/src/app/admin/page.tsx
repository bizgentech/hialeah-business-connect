import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { BUSINESSES } from "@/lib/data";

export const metadata = {
  title: "Admin Dashboard – Hialeah Business Connect",
};

const stats = [
  { label: "Total Businesses", value: "412", change: "+12 this month", positive: true },
  { label: "Pending Approval", value: "7", change: "Needs review", positive: false },
  { label: "Active Offers", value: "28", change: "+4 this week", positive: true },
  { label: "Kiosk Sessions", value: "1,240", change: "+18% vs last month", positive: true },
];

export default function AdminDashboardPage() {
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
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-1"
                style={{ color: "var(--color-secondary)" }}
              >
                Admin Panel
              </p>
              <h1
                className="font-bold text-3xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Dashboard
              </h1>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/approvals"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                Review Submissions
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {stats.map(({ label, value, change, positive }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {label}
                </p>
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
                  className="text-xs font-semibold"
                  style={{
                    color: positive
                      ? "var(--color-secondary)"
                      : "var(--color-gold)",
                  }}
                >
                  {change}
                </p>
              </div>
            ))}
          </div>

          {/* Quick nav */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { href: "/admin/approvals", title: "Business Approvals", description: "Review and approve new business submissions", icon: "✓" },
              { href: "/admin/kiosk", title: "Kiosk & Ads Management", description: "Manage kiosk content and ad campaigns", icon: "📺" },
              { href: "/directory", title: "View Public Directory", description: "See the live public-facing business directory", icon: "🔍" },
            ].map(({ href, title, description, icon }) => (
              <Link
                key={href}
                href={href}
                className="bg-white rounded-xl p-6 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg block"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <span className="text-3xl block mb-3">{icon}</span>
                <h3
                  className="font-semibold text-base mb-1"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-primary-container)",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {description}
                </p>
              </Link>
            ))}
          </div>

          {/* Recent businesses */}
          <div
            className="bg-white rounded-xl shadow-ambient overflow-hidden"
            style={{ border: "1px solid var(--color-outline-variant)" }}
          >
            <div
              className="px-6 py-4 border-b flex justify-between items-center"
              style={{ borderColor: "var(--color-outline-variant)" }}
            >
              <h2
                className="font-semibold text-lg"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Recent Listings
              </h2>
              <Link
                href="/directory"
                className="text-sm font-semibold"
                style={{ color: "var(--color-secondary)" }}
              >
                View all
              </Link>
            </div>
            <table className="w-full text-sm">
              <thead
                style={{ backgroundColor: "var(--color-surface-container-low)" }}
              >
                <tr>
                  {["Business", "Category", "Area", "Status", "Actions"].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left font-semibold text-xs tracking-wide uppercase"
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
                      borderTop: i > 0 ? "1px solid var(--color-outline-variant)" : undefined,
                    }}
                  >
                    <td className="px-6 py-4">
                      <span
                        className="font-semibold"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        {b.name}
                      </span>
                    </td>
                    <td
                      className="px-6 py-4"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {b.category}
                    </td>
                    <td
                      className="px-6 py-4"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {b.area}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold"
                        style={
                          b.isVerified
                            ? {
                                backgroundColor: "rgba(17,92,185,0.1)",
                                color: "var(--color-secondary)",
                              }
                            : {
                                backgroundColor: "rgba(245,158,11,0.1)",
                                color: "#b45309",
                              }
                        }
                      >
                        {b.isVerified ? "Verified" : "Pending"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/directory/${b.id}`}
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-secondary)" }}
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
      </main>
    </>
  );
}
