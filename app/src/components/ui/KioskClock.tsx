"use client";

import { useState, useEffect } from "react";

export default function KioskClock() {
  const [time, setTime] = useState<string | null>(null);
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <div className="text-right">
      <p
        className="font-bold text-2xl tabular-nums leading-none"
        style={{ color: "#ffffff", fontFamily: "var(--font-outfit)" }}
      >
        {time}
      </p>
      <p className="text-xs mt-0.5" style={{ color: "var(--color-on-primary-container)" }}>
        {date}
      </p>
    </div>
  );
}
