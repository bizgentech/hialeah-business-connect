import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Add Your Business – Hialeah Business Connect",
};

const BENEFITS = [
  { icon: "🆓", title: "Free Forever",     desc: "No fees, no credit card" },
  { icon: "✅", title: "Verified Badge",    desc: "Build customer trust"    },
  { icon: "📍", title: "On Kiosk Maps",    desc: "Reach walk-in traffic"   },
  { icon: "👥", title: "Local Community",  desc: "500+ businesses listed"  },
];

const REVIEW_STEPS = [
  { n: "1", label: "Submit your listing form"         },
  { n: "2", label: "Our team reviews within 48 hours" },
  { n: "3", label: "Email confirmation sent to you"   },
  { n: "4", label: "Your business goes live! 🎉"      },
];

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow" style={{ backgroundColor: "var(--color-surface)" }}>

        {/* ── Hero — split photo ── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "var(--color-primary-container)",
            minHeight: "340px",
          }}
        >
          {/* Scene photo: right half */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
            <Image
              src="/assets/scenes/homepage-boutique.jpg"
              alt="Local business interior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary-container) 0%, var(--color-primary-container) 5%, rgba(0,33,71,0.93) 22%, rgba(0,33,71,0.58) 52%, rgba(0,33,71,0.12) 82%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 lg:hidden"
              style={{ backgroundColor: "rgba(0,33,71,0.82)" }}
            />
          </div>

          {/* Dot-grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              maskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 42%, transparent 62%)",
              WebkitMaskImage:
                "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 42%, transparent 62%)",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 mx-auto px-4 md:px-10 flex items-center"
            style={{
              maxWidth: "1280px",
              minHeight: "340px",
              paddingTop: "4rem",
              paddingBottom: "4rem",
            }}
          >
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-gold)" }}
                />
                <p
                  className="text-xs font-bold tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Free Business Listing
                </p>
              </div>

              <h1
                className="font-bold mb-4 leading-[1.08]"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "#ffffff",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Grow Your Business in Hialeah
              </h1>

              <p
                className="text-base md:text-lg mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Join hundreds of local businesses connecting with residents and
                visitors every day. No fees, no hidden costs — ever.
              </p>

              {/* Benefit pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  "✓ 100% Free",
                  "✓ Verified Badge",
                  "✓ Kiosk Exposure",
                  "✓ Community Reach",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits strip ── */}
        <section
          style={{
            backgroundColor: "var(--color-surface-container-low)",
            borderBottom: "1px solid var(--color-outline-variant)",
          }}
        >
          <div
            className="mx-auto px-4 md:px-10 py-6"
            style={{ maxWidth: "1280px" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {BENEFITS.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ backgroundColor: "rgba(245,158,11,0.12)" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ color: "var(--color-primary-container)" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form + sidebar ── */}
        <div
          className="mx-auto px-4 md:px-10 py-12"
          style={{ maxWidth: "1280px" }}
        >
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Form ── */}
            <div className="flex-grow min-w-0">
              <form className="flex flex-col gap-6">

                {/* Step 1: Business Info */}
                <FormSection step="1" icon="🏪" title="Business Information">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Business Name"
                      required
                      placeholder="e.g. El Rincón Cubano"
                    />
                    <FormField
                      label="Category"
                      required
                      type="select"
                      options={[
                        "Select a category",
                        "Restaurant",
                        "Retail",
                        "Services",
                        "Health",
                        "Auto",
                        "Beauty",
                        "Education",
                      ]}
                    />
                  </div>
                  <FormField
                    label="Short Description"
                    required
                    type="textarea"
                    placeholder="Describe your business in 2–3 sentences. What makes you unique? (max 300 characters)"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Neighborhood / Area"
                      required
                      type="select"
                      options={[
                        "Select an area",
                        "West Hialeah",
                        "East Hialeah",
                        "Hialeah Gardens",
                        "Downtown Hialeah",
                      ]}
                    />
                    <FormField
                      label="Street Address"
                      placeholder="123 Palm Ave, Hialeah FL"
                      helper="Used for your map pin location"
                    />
                  </div>
                </FormSection>

                {/* Step 2: Contact */}
                <FormSection step="2" icon="📞" title="Contact Details">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Phone Number"
                      placeholder="(305) 555-0100"
                      type="tel"
                    />
                    <FormField
                      label="Website"
                      placeholder="https://yourbusiness.com"
                      type="url"
                    />
                    <FormField
                      label="Contact Email"
                      required
                      placeholder="owner@yourbusiness.com"
                      type="email"
                      helper="Used for listing confirmation — not shown publicly"
                    />
                    <FormField
                      label="Instagram Handle"
                      placeholder="@yourbusiness"
                      helper="Optional — shown on your public profile"
                    />
                  </div>
                </FormSection>

                {/* Step 3: Owner */}
                <FormSection step="3" icon="👤" title="Owner Information">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Owner / Manager Name"
                      required
                      placeholder="Full name"
                    />
                    <FormField
                      label="Owner Phone"
                      placeholder="(305) 555-0100"
                      type="tel"
                      helper="Private — never displayed on your listing"
                    />
                  </div>
                </FormSection>

                {/* Step 4: Marketing (optional) */}
                <FormSection
                  step="4"
                  icon="📣"
                  title="Marketing & Visibility"
                  optional
                >
                  <p
                    className="text-sm -mt-1"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    Choose how you&apos;d like to grow your presence. All options
                    are free during our launch period.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        id:  "opt-feature",
                        label: "Feature my listing in the homepage spotlight",
                        tag:  "Free during launch",
                      },
                      {
                        id:  "opt-newsletter",
                        label: "Include my business in the weekly community newsletter",
                        tag:  null,
                      },
                      {
                        id:  "opt-kiosk",
                        label: "Notify me about digital kiosk advertising opportunities",
                        tag:  "New",
                      },
                      {
                        id:  "opt-tips",
                        label: "Subscribe me to local business tips and resources",
                        tag:  null,
                      },
                    ].map(({ id, label, tag }) => (
                      <label
                        key={id}
                        htmlFor={id}
                        className="flex items-start gap-3 p-3 rounded-xl cursor-pointer"
                        style={{
                          backgroundColor: "var(--color-surface-container-lowest)",
                          border: "1px solid var(--color-outline-variant)",
                        }}
                      >
                        <input
                          id={id}
                          type="checkbox"
                          className="mt-0.5 flex-shrink-0"
                          style={{
                            accentColor: "var(--color-secondary)",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <span
                            className="text-sm font-medium leading-snug"
                            style={{ color: "var(--color-on-surface)" }}
                          >
                            {label}
                          </span>
                          {tag && (
                            <span
                              className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold align-middle"
                              style={{
                                backgroundColor: "rgba(245,158,11,0.14)",
                                color: "var(--color-gold)",
                              }}
                            >
                              {tag}
                            </span>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </FormSection>

                {/* Terms */}
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  <label
                    htmlFor="terms"
                    className="flex items-start gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-0.5 flex-shrink-0"
                      style={{
                        accentColor: "var(--color-secondary)",
                        width: "16px",
                        height: "16px",
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      I confirm that I am the owner or authorized representative
                      of this business and agree to the{" "}
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
                      . I understand that submitted listings are reviewed before
                      going live.
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white text-base transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "var(--color-gold)" }}
                  >
                    Submit Your Business for Review
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>

                  {/* Trust note */}
                  <div
                    className="flex items-center justify-center gap-2 mt-4"
                    style={{ color: "var(--color-outline)" }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <p className="text-xs text-center" style={{ color: "var(--color-on-surface-variant)" }}>
                      Reviewed within 2 business days · Email confirmation on
                      approval · Always free
                    </p>
                  </div>
                </div>

              </form>
            </div>

            {/* ── Sidebar ── */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <div className="lg:sticky top-24 flex flex-col gap-5">

                {/* Why list */}
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: "var(--color-primary-container)" }}
                >
                  <p
                    className="font-bold text-base mb-4"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "#ffffff",
                    }}
                  >
                    Why list with us?
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      { icon: "🆓", text: "100% free — no subscription, no setup fee" },
                      { icon: "🏛️", text: "City of Hialeah community platform" },
                      { icon: "📺", text: "Featured on kiosk screens across the city" },
                      { icon: "🔍", text: "Searchable by residents and visitors" },
                      { icon: "✅", text: "Verified badge builds customer trust" },
                      { icon: "📣", text: "Included in community promotions" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-start gap-2.5">
                        <span className="text-base leading-none mt-0.5 flex-shrink-0">
                          {icon}
                        </span>
                        <p
                          className="text-sm leading-snug"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review process */}
                <div
                  className="bg-white rounded-xl p-5 shadow-ambient"
                  style={{ border: "1px solid var(--color-outline-variant)" }}
                >
                  <p
                    className="font-bold text-sm mb-4"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "var(--color-primary-container)",
                    }}
                  >
                    Review Process
                  </p>
                  <div className="flex flex-col gap-3">
                    {REVIEW_STEPS.map(({ n, label }, i) => (
                      <div key={n} className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                          style={{
                            backgroundColor:
                              i === REVIEW_STEPS.length - 1
                                ? "var(--color-gold)"
                                : "var(--color-secondary)",
                            color: "#fff",
                          }}
                        >
                          {n}
                        </div>
                        <p
                          className="text-sm"
                          style={{ color: "var(--color-on-surface)" }}
                        >
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Help note */}
                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: "rgba(245,158,11,0.07)",
                    border: "1px solid rgba(245,158,11,0.22)",
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-1.5"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Need help?
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    Questions about listing your business? Reach out to the
                    Hialeah Business Connect team and we&apos;ll walk you
                    through it.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ─── Form section wrapper ────────────────────────────────────────────── */
interface FormSectionProps {
  step: string;
  icon: string;
  title: string;
  optional?: boolean;
  children: ReactNode;
}

function FormSection({ step, icon, title, optional, children }: FormSectionProps) {
  return (
    <div
      className="bg-white rounded-xl p-5 shadow-ambient"
      style={{ border: "1px solid var(--color-outline-variant)" }}
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
          style={{ backgroundColor: "var(--color-secondary)", color: "#fff" }}
        >
          {step}
        </div>
        <span className="text-lg leading-none" aria-hidden="true">
          {icon}
        </span>
        <h2
          className="font-bold text-base flex-grow"
          style={{
            fontFamily: "var(--font-outfit)",
            color: "var(--color-primary-container)",
          }}
        >
          {title}
        </h2>
        {optional && (
          <span
            className="px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: "var(--color-surface-container)",
              color: "var(--color-on-surface-variant)",
            }}
          >
            Optional
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

/* ─── Form field ──────────────────────────────────────────────────────── */
interface FormFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  options?: string[];
  helper?: string;
}

function FormField({
  label,
  required,
  placeholder,
  type = "text",
  options,
  helper,
}: FormFieldProps) {
  const inputStyle: CSSProperties = {
    backgroundColor: "var(--color-surface-container-lowest)",
    border: "1px solid var(--color-outline-variant)",
    color: "var(--color-on-surface)",
    borderRadius: "10px",
    width: "100%",
    padding: "11px 14px",
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
        {required && (
          <span
            className="ml-1 font-bold"
            style={{ color: "var(--color-gold)" }}
          >
            *
          </span>
        )}
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

      {helper && (
        <p
          className="text-xs mt-1.5"
          style={{ color: "var(--color-outline)" }}
        >
          {helper}
        </p>
      )}
    </div>
  );
}
