"use client";

/**
 * ScrollCarousel — seamless infinite horizontal scroll carousel.
 *
 * How the loop works:
 *  1. Children are rendered THREE times in a row (first copy | middle copy | last copy).
 *  2. On mount, scrollLeft is silently set to the start of the middle copy.
 *  3. After every scroll animation settles (`scrollend` event, or a 150 ms debounce
 *     on older browsers), we check if scrollLeft drifted into the first or last copy.
 *     If so, we silently snap back to the equivalent position in the middle copy —
 *     same visual content, user never sees the jump.
 *  4. Arrow buttons call scrollBy({ behavior:"smooth" }), same as before.
 *  5. Mobile touch-swipe works naturally via overflow-x:auto.
 *
 * The "period" of the loop is: count × scrollStep
 *  where scrollStep = cardWidth + gap  (must match the props passed in)
 */

import { Children, cloneElement, isValidElement, useCallback, useEffect, useRef } from "react";

export default function ScrollCarousel({
  children,
  scrollStep = 316,
}: {
  children: React.ReactNode;
  /**
   * Pixels to advance per arrow click — should equal cardWidth + gap.
   * Also used to compute the "copy width" for the loop reset.
   */
  scrollStep?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const resetting = useRef(false); // guard against reset→scroll→reset loops

  /* ── Triple the children with unique keys for each copy ── */
  const childArray = Children.toArray(children);
  const count = childArray.length;
  const copyWidth = count * scrollStep; // distance of one full copy in pixels

  const tripled = [0, 1, 2].flatMap((copyIdx) =>
    childArray.map((child, itemIdx) =>
      isValidElement(child)
        ? cloneElement(child as React.ReactElement, { key: `c${copyIdx}-${itemIdx}` })
        : child
    )
  );

  /* ── Jump to middle copy on mount ── */
  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = copyWidth;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Silent reset: called after each scroll animation settles ── */
  const reset = useCallback(() => {
    const el = trackRef.current;
    if (!el || resetting.current) return;

    const sl = el.scrollLeft;
    if (sl >= copyWidth * 2) {
      resetting.current = true;
      el.scrollLeft = sl - copyWidth;
    } else if (sl < copyWidth) {
      resetting.current = true;
      el.scrollLeft = sl + copyWidth;
    }
    // Clear the guard after one frame so genuine future scrolls still trigger resets
    if (resetting.current) {
      requestAnimationFrame(() => {
        resetting.current = false;
      });
    }
  }, [copyWidth]);

  /* ── Attach scroll-end listeners ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Primary: scrollend (Chrome 114+, Firefox 109+, Safari 18+)
    el.addEventListener("scrollend", reset);

    // Fallback: debounced scroll event for older browsers
    let debounce: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(debounce);
      debounce = setTimeout(reset, 150);
    };
    const needsFallback = !("onscrollend" in window);
    if (needsFallback) el.addEventListener("scroll", onScroll);

    return () => {
      el.removeEventListener("scrollend", reset);
      if (needsFallback) el.removeEventListener("scroll", onScroll);
      clearTimeout(debounce);
    };
  }, [reset]);

  /* ── Arrow handlers ── */
  const scroll = (dir: "left" | "right") =>
    trackRef.current?.scrollBy({
      left: dir === "right" ? scrollStep : -scrollStep,
      behavior: "smooth",
    });

  return (
    <div className="relative">
      {/* ← Left arrow — pointer/desktop only */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="hidden sm:flex absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full transition-all duration-150 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,33,71,0.22), 0 1px 3px rgba(0,33,71,0.10)",
          border: "1px solid rgba(0,33,71,0.09)",
        }}
      >
        <svg
          width="13" height="13" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ color: "#002147" }} aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {tripled}
      </div>

      {/* → Right arrow — pointer/desktop only */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="hidden sm:flex absolute right-1.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full transition-all duration-150 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,33,71,0.22), 0 1px 3px rgba(0,33,71,0.10)",
          border: "1px solid rgba(0,33,71,0.09)",
        }}
      >
        <svg
          width="13" height="13" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ color: "#002147" }} aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
