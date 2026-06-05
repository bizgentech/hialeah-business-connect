import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OfferCard from "@/components/ui/OfferCard";
import { OFFERS, CATEGORIES } from "@/lib/data";

export const metadata = {
  title: "Local Offers – Hialeah Business Connect",
};

export default function OffersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow" style={{ backgroundColor: "var(--color-surface)" }}>
        {/* Page hero */}
        <section
          className="border-b py-12"
          style={{
            backgroundColor: "var(--color-surface-container-low)",
            borderColor: "var(--color-outline-variant)",
          }}
        >
          <div
            className="mx-auto px-4 md:px-10"
            style={{ maxWidth: "1280px" }}
          >
            <h1
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-primary-container)",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Local Offers & Deals
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Exclusive promotions and discounts from businesses in Hialeah.
              New deals added weekly.
            </p>
          </div>
        </section>

        <div
          className="mx-auto px-4 md:px-10 py-12"
          style={{ maxWidth: "1280px" }}
        >
          {/* Category filter */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
                style={
                  cat === "All"
                    ? {
                        backgroundColor: "var(--color-primary-container)",
                        color: "#ffffff",
                      }
                    : {
                        backgroundColor: "var(--color-surface-container)",
                        color: "var(--color-on-surface-variant)",
                        border: "1px solid var(--color-outline-variant)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Hot deals */}
          <div className="mb-12">
            <h2
              className="font-bold text-2xl mb-6"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-primary-container)",
              }}
            >
              🔥 Hot This Week
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {OFFERS.filter((o) => o.isHot).map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          </div>

          {/* All offers */}
          <div>
            <h2
              className="font-bold text-2xl mb-6"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-primary-container)",
              }}
            >
              All Current Offers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {OFFERS.map((o) => (
                <OfferCard key={o.id} offer={o} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
