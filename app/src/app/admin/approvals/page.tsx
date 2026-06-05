import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Business Approvals – Admin",
};

const pending = [
  {
    id: "p1",
    name: "Cafetería La Palma",
    category: "Restaurant",
    area: "West Hialeah",
    submittedBy: "Maria Torres",
    email: "maria@lapalma.com",
    phone: "305-555-0201",
    submittedAt: "Jun 4, 2026",
    description: "Traditional Cuban cafetería serving breakfast and lunch since 2021.",
  },
  {
    id: "p2",
    name: "MiaMar Plumbing",
    category: "Services",
    area: "East Hialeah",
    submittedBy: "Carlos Vega",
    email: "carlos@miamarplumbing.com",
    phone: "305-555-0202",
    submittedAt: "Jun 3, 2026",
    description: "Licensed residential and commercial plumbing services for Miami-Dade.",
  },
  {
    id: "p3",
    name: "Estrella Fashions",
    category: "Retail",
    area: "Hialeah Gardens",
    submittedBy: "Ana Delgado",
    email: "ana@estrellafashions.com",
    phone: "305-555-0203",
    submittedAt: "Jun 2, 2026",
    description: "Women's clothing boutique with contemporary and formal wear.",
  },
];

export default function ApprovalsPage() {
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
            <span style={{ color: "var(--color-on-surface-variant)" }}>Business Approvals</span>
          </div>

          <div className="flex justify-between items-start mb-8">
            <div>
              <h1
                className="font-bold text-3xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Business Approval Queue
              </h1>
              <p className="mt-1" style={{ color: "var(--color-on-surface-variant)" }}>
                {pending.length} submissions awaiting review
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {pending.map((sub) => (
              <div
                key={sub.id}
                className="bg-white rounded-xl p-6 shadow-ambient"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex-grow">
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      <h2
                        className="font-semibold text-xl"
                        style={{
                          fontFamily: "var(--font-outfit)",
                          color: "var(--color-primary-container)",
                        }}
                      >
                        {sub.name}
                      </h2>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-semibold"
                        style={{
                          backgroundColor: "rgba(245,158,11,0.1)",
                          color: "#b45309",
                        }}
                      >
                        Pending Review
                      </span>
                    </div>
                    <p
                      className="text-sm font-semibold mb-3 tracking-wide"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {sub.category} · {sub.area}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {sub.description}
                    </p>

                    <div
                      className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-lg text-xs"
                      style={{ backgroundColor: "var(--color-surface-container-low)" }}
                    >
                      <div>
                        <p style={{ color: "var(--color-outline)" }}>Submitted by</p>
                        <p className="font-semibold mt-0.5" style={{ color: "var(--color-on-surface)" }}>{sub.submittedBy}</p>
                      </div>
                      <div>
                        <p style={{ color: "var(--color-outline)" }}>Email</p>
                        <p className="font-semibold mt-0.5" style={{ color: "var(--color-on-surface)" }}>{sub.email}</p>
                      </div>
                      <div>
                        <p style={{ color: "var(--color-outline)" }}>Phone</p>
                        <p className="font-semibold mt-0.5" style={{ color: "var(--color-on-surface)" }}>{sub.phone}</p>
                      </div>
                      <div>
                        <p style={{ color: "var(--color-outline)" }}>Submitted</p>
                        <p className="font-semibold mt-0.5" style={{ color: "var(--color-on-surface)" }}>{sub.submittedAt}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-3 shrink-0">
                    <button
                      className="px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                      ✓ Approve
                    </button>
                    <button
                      className="px-5 py-2.5 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
                      style={{
                        border: "1px solid var(--color-error)",
                        color: "var(--color-error)",
                      }}
                    >
                      ✕ Reject
                    </button>
                    <button
                      className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{
                        border: "1px solid var(--color-outline-variant)",
                        color: "var(--color-on-surface-variant)",
                      }}
                    >
                      Request Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
