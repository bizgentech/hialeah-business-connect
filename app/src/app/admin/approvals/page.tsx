import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    description:
      "Traditional Cuban cafetería serving breakfast and lunch since 2021.",
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
    description:
      "Licensed residential and commercial plumbing services for Miami-Dade.",
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

const contactFields = (sub: (typeof pending)[0]) => [
  { icon: "👤", label: "Submitted by", value: sub.submittedBy },
  { icon: "✉️",  label: "Email",        value: sub.email       },
  { icon: "📞", label: "Phone",         value: sub.phone       },
  { icon: "📅", label: "Submitted",     value: sub.submittedAt },
];

export default function ApprovalsPage() {
  return (
    <>
      <Navbar />
      <main
        className="flex-grow"
        style={{ backgroundColor: "var(--color-surface-container-low)" }}
      >
        {/* ── Attention banner ── */}
        <div
          className="border-b px-4 md:px-10 py-3 flex flex-wrap items-center gap-3"
          style={{
            backgroundColor: "rgba(245,158,11,0.07)",
            borderColor: "rgba(245,158,11,0.2)",
          }}
        >
          <span className="text-base leading-none">⏳</span>
          <p className="text-sm font-semibold" style={{ color: "#92400e" }}>
            {pending.length} businesses are awaiting review — approve or reject each submission below.
          </p>
          <Link
            href="/admin"
            className="ml-auto text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ color: "var(--color-secondary)" }}
          >
            ← Back to Dashboard
          </Link>
        </div>

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
              Business Approvals
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
                Business Approval Queue
              </h1>
              <p className="mt-1 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                Review each submission carefully. Approved listings go live immediately.
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold flex-shrink-0 self-start"
              style={{
                backgroundColor: "rgba(245,158,11,0.1)",
                color: "#b45309",
                border: "1px solid rgba(245,158,11,0.25)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#f59e0b" }}
              />
              {pending.length} Pending
            </span>
          </div>

          {/* Submission cards */}
          <div className="flex flex-col gap-5">
            {pending.map((sub, idx) => (
              <div
                key={sub.id}
                className="bg-white rounded-xl shadow-ambient overflow-hidden"
                style={{ border: "1px solid var(--color-outline-variant)" }}
              >
                {/* Card header strip */}
                <div
                  className="px-6 py-3 border-b flex items-center justify-between gap-4"
                  style={{
                    borderColor: "var(--color-outline-variant)",
                    backgroundColor: "var(--color-surface-container-low)",
                  }}
                >
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "var(--color-outline)" }}
                  >
                    Submission #{idx + 1} · {sub.submittedAt}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                    style={{
                      backgroundColor: "rgba(245,158,11,0.1)",
                      color: "#b45309",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{ backgroundColor: "#f59e0b" }}
                    />
                    Pending Review
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Business info */}
                    <div className="flex-grow">
                      <h2
                        className="font-bold text-xl mb-1"
                        style={{
                          fontFamily: "var(--font-outfit)",
                          color: "var(--color-primary-container)",
                        }}
                      >
                        {sub.name}
                      </h2>
                      <p
                        className="text-sm font-semibold mb-3"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        {sub.category} · {sub.area}
                      </p>
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: "var(--color-on-surface-variant)" }}
                      >
                        {sub.description}
                      </p>

                      {/* Contact details grid */}
                      <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-xl text-xs"
                        style={{
                          backgroundColor: "var(--color-surface-container-low)",
                          border: "1px solid var(--color-outline-variant)",
                        }}
                      >
                        {contactFields(sub).map(({ icon, label, value }) => (
                          <div key={label}>
                            <div className="flex items-center gap-1 mb-1">
                              <span className="text-sm leading-none">{icon}</span>
                              <p style={{ color: "var(--color-outline)" }}>{label}</p>
                            </div>
                            <p
                              className="font-semibold break-all"
                              style={{ color: "var(--color-on-surface)" }}
                            >
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex md:flex-col gap-2.5 shrink-0 md:min-w-[148px]">
                      <button
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                      >
                        ✓ Approve
                      </button>
                      <button
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
                        style={{
                          border: "1.5px solid var(--color-error)",
                          color: "var(--color-error)",
                        }}
                      >
                        ✕ Reject
                      </button>
                      <button
                        className="flex-1 md:flex-none px-5 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{
                          border: "1px solid var(--color-outline-variant)",
                          color: "var(--color-on-surface-variant)",
                          backgroundColor: "var(--color-surface-container-low)",
                        }}
                      >
                        Request Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-sm mt-8"
            style={{ color: "var(--color-outline)" }}
          >
            All caught up? New submissions appear here automatically.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
