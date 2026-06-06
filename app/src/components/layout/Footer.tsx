import Link from "next/link";

/** Inline BizGen logo — rounded rectangle, horizontal BizGen wordmark + TECHNOLOGIES */
function BizGenLogo() {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center rounded-xl px-3 py-2 transition-transform group-hover:scale-105"
      style={{
        border: "2px solid #2dd4bf",
        minWidth: "80px",
        background: "rgba(45,212,191,0.06)",
      }}
    >
      {/* BizGen wordmark */}
      <p
        className="font-bold leading-none tracking-tight"
        style={{ fontSize: "1.15rem", fontFamily: "Georgia, serif" }}
      >
        <span style={{ color: "#ffffff" }}>Biz</span>
        <span style={{ color: "#2dd4bf" }}>Gen</span>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.55rem", verticalAlign: "super" }}>®</span>
      </p>
      {/* TECHNOLOGIES label */}
      <p
        className="tracking-widest uppercase mt-0.5"
        style={{
          fontSize: "0.38rem",
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.18em",
          fontFamily: "var(--font-outfit, sans-serif)",
        }}
      >
        Technologies
      </p>
    </div>
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
        href="https://www.bgtecnologies.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden border-t group"
        style={{
          backgroundColor: "rgba(0,0,0,0.25)",
          borderColor: "rgba(45,212,191,0.2)",
        }}
        aria-label="Powered by BizGen Technologies — visit www.bgtecnologies.com"
      >
        {/* Dot-grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(45,212,191,0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Decorative teal glows */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(45,212,191,0.08)", filter: "blur(20px)" }} />
        <div className="absolute right-28 top-1 w-10 h-10 rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(45,212,191,0.12)", filter: "blur(8px)" }} />

        <div
          className="relative mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center gap-5 sm:gap-0"
          style={{ maxWidth: "1280px" }}
        >
          {/* Logo + divider + text */}
          <div className="flex items-center gap-5 sm:flex-1">
            {/* Logo */}
            <BizGenLogo />

            {/* Vertical divider */}
            <div className="hidden sm:block w-px self-stretch" style={{ backgroundColor: "rgba(45,212,191,0.3)" }} />

            {/* Text block */}
            <div>
              <p
                className="font-bold leading-tight"
                style={{ fontFamily: "var(--font-outfit)", color: "#ffffff", fontSize: "0.95rem" }}
              >
                Powered by{" "}
                <span style={{ color: "#2dd4bf" }}>BizGen</span>{" "}
                Technologies
              </p>
              {/* Teal underline accent */}
              <div className="mt-1 mb-1.5 h-0.5 w-10 rounded-full" style={{ backgroundColor: "#2dd4bf" }} />
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                <span style={{ color: "#5eead4" }}>Custom Solutions</span>{" "}
                that scale with your business
              </p>
            </div>
          </div>

          {/* URL affordance */}
          <div
            className="text-xs font-semibold flex items-center gap-1.5 transition-all group-hover:gap-2.5"
            style={{ color: "#5eead4" }}
          >
            www.bgtecnologies.com
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
