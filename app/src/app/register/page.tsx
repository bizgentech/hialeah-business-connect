import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Add Your Business – Hialeah Business Connect",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow" style={{ backgroundColor: "var(--color-surface)" }}>
        {/* Hero */}
        <section
          className="py-16 border-b"
          style={{
            backgroundColor: "var(--color-primary-container)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div
            className="mx-auto px-4 md:px-10 text-center"
            style={{ maxWidth: "800px" }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Free Business Listing
            </p>
            <h1
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "#ffffff",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Add Your Business to Hialeah Business Connect
            </h1>
            <p
              className="text-lg"
              style={{ color: "var(--color-on-primary-container)" }}
            >
              Join hundreds of local businesses connecting with residents and
              visitors every day. No fees, no hidden costs.
            </p>
          </div>
        </section>

        {/* Form */}
        <div
          className="mx-auto px-4 md:px-10 py-16"
          style={{ maxWidth: "800px" }}
        >
          <form className="flex flex-col gap-8">
            {/* Business basics */}
            <fieldset>
              <legend
                className="font-bold text-xl mb-6"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Business Information
              </legend>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField label="Business Name *" placeholder="e.g. El Rincón Cubano" />
                  <FormField label="Category *" type="select" options={["Select a category", "Restaurant", "Retail", "Services", "Health", "Auto", "Beauty", "Education"]} />
                </div>
                <FormField label="Short Description *" type="textarea" placeholder="Describe your business in 2–3 sentences (max 300 characters)..." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField label="Neighborhood / Area *" type="select" options={["Select an area", "West Hialeah", "East Hialeah", "Hialeah Gardens", "Downtown Hialeah"]} />
                  <FormField label="Street Address" placeholder="123 Palm Ave" />
                </div>
              </div>
            </fieldset>

            {/* Contact */}
            <fieldset>
              <legend
                className="font-bold text-xl mb-6"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Contact Details
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField label="Phone Number" placeholder="(305) 555-0100" type="tel" />
                <FormField label="Website" placeholder="https://yourbusiness.com" type="url" />
                <FormField label="Contact Email *" placeholder="owner@yourbusiness.com" type="email" />
                <FormField label="Instagram Handle" placeholder="@yourbusiness" />
              </div>
            </fieldset>

            {/* Owner */}
            <fieldset>
              <legend
                className="font-bold text-xl mb-6"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-primary-container)",
                }}
              >
                Owner Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField label="Owner / Manager Name *" placeholder="Full name" />
                <FormField label="Your Phone" placeholder="(305) 555-0100" type="tel" />
              </div>
            </fieldset>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded"
                style={{ accentColor: "var(--color-secondary)" }}
              />
              <label
                htmlFor="terms"
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                I confirm that I am the owner or authorized representative of
                this business and agree to the{" "}
                <a
                  href="#"
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-white text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              Submit Your Business for Review
            </button>

            <p
              className="text-sm text-center"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Listings are reviewed within 2 business days. You&apos;ll receive
              an email confirmation once approved.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  options?: string[];
}

function FormField({ label, placeholder, type = "text", options }: FormFieldProps) {
  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--color-surface-container-lowest)",
    border: "1px solid var(--color-outline-variant)",
    color: "var(--color-on-surface)",
    borderRadius: "8px",
    width: "100%",
    padding: "10px 14px",
    fontSize: "14px",
    outline: "none",
    fontFamily: "var(--font-inter)",
  };

  return (
    <div>
      <label
        className="block text-sm font-semibold mb-1.5"
        style={{ color: "var(--color-on-surface)" }}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      ) : type === "select" && options ? (
        <select style={inputStyle}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} style={inputStyle} />
      )}
    </div>
  );
}
