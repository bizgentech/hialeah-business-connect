import Link from "next/link";

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
            <p
              className="text-xs font-semibold tracking-wide"
              style={{ color: "var(--color-gold)" }}
            >
              Powered by BizGen Technologies
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
    </footer>
  );
}
