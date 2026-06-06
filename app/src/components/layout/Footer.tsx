import Link from "next/link";

/** Inline BizGen logo mark — rounded-square with teal accent */
function BizGenLogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Rounded square container */}
      <rect x="4" y="4" width="92" height="92" rx="18" ry="18"
        fill="none" stroke="#0d9488" strokeWidth="5" />
      {/* "B" bar top */}
      <text
        x="50" y="44"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="28"
        fill="#0f172a"
      >Biz</text>
      {/* "Gen" in teal */}
      <text
        x="50" y="72"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="28"
        fill="#0d9488"
      >Gen</text>
      {/* Bottom accent line */}
      <line x1="24" y1="82" x2="76" y2="82" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t"
      style={{
        backgroundColor: "var(--color-primary-container)",
        borderColor: "var(--color-outline-variant)",
      }}
    >
      <div
        className="mx-auto px-10 py-12"
        style={{ maxWidth: "1280px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2
              className="font-bold text-xl mb-3"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-on-primary)",
              }}
            >
              Hialeah Business Connect
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-on-primary-container)" }}
            >
              Bridging local businesses, residents, and visitors in Hialeah, FL.
              Your digital town square for community commerce.
            </p>
          </div>

          <div>
            <h3
              className="font-semibold text-sm mb-3 tracking-wide uppercase"
              style={{ color: "var(--color-on-primary)" }}
            >
              Discover
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/directory", label: "Business Directory" },
                { href: "/offers", label: "Local Offers" },
                { href: "/kiosk", label: "Kiosk Locations" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "var(--color-on-primary-container)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold text-sm mb-3 tracking-wide uppercase"
              style={{ color: "var(--color-on-primary)" }}
            >
              Business Owners
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/register", label: "Add Your Business" },
                { href: "/admin", label: "Admin Dashboard" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "var(--color-on-primary-container)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-on-primary-container)" }}
          >
            © {new Date().getFullYear()} Hialeah Business Connect. All rights
            reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-on-primary-container)" }}
          >
            City of Hialeah, FL · Miami-Dade County
          </p>
        </div>
      </div>

      {/* ── BizGen powered-by strip ── */}
      <a
        href="https://www.bbtecnologies.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden border-t group"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
        aria-label="Powered by BizGen Technologies — Custom Solutions that scale with your business"
      >
        {/* Dot-grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(13,148,136,0.15) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Decorative teal circles */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(13,148,136,0.07)", filter: "blur(8px)" }} />
        <div className="absolute right-24 top-2 w-8 h-8 rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(13,148,136,0.1)", filter: "blur(4px)" }} />

        <div
          className="relative mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-0"
          style={{ maxWidth: "1280px" }}
        >
          {/* Logo + divider + text */}
          <div className="flex items-center gap-4 sm:flex-1">
            {/* Logo mark */}
            <div className="flex-shrink-0 transition-transform group-hover:scale-105">
              <BizGenLogo size={44} />
            </div>

            {/* Vertical divider */}
            <div className="hidden sm:block w-px self-stretch" style={{ backgroundColor: "rgba(13,148,136,0.35)" }} />

            {/* Text block */}
            <div>
              <p
                className="font-bold text-sm leading-tight"
                style={{ fontFamily: "var(--font-outfit)", color: "#ffffff" }}
              >
                Powered by{" "}
                <span style={{ color: "#2dd4bf" }}>BizGen</span>{" "}
                Technologies
              </p>
              {/* Teal underline accent */}
              <div className="mt-0.5 mb-1 h-0.5 w-10 rounded-full" style={{ backgroundColor: "#0d9488" }} />
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span style={{ color: "#2dd4bf" }}>Custom Solutions</span>{" "}
                that scale with your business
              </p>
            </div>
          </div>

          {/* Arrow affordance */}
          <div
            className="text-xs font-semibold flex items-center gap-1.5 transition-all group-hover:gap-2.5"
            style={{ color: "#2dd4bf" }}
          >
            www.bbtecnologies.com
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
        </div>
      </a>
    </footer>
  );
}
