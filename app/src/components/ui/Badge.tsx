import { ReactNode } from "react";

type BadgeVariant = "featured" | "verified" | "pending" | "category";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  featured: {
    backgroundColor: "var(--color-gold)",
    color: "#ffffff",
  },
  verified: {
    backgroundColor: "rgba(17, 92, 185, 0.1)",
    color: "var(--color-secondary)",
    border: "1px solid rgba(17, 92, 185, 0.2)",
  },
  pending: {
    backgroundColor: "rgba(245, 158, 11, 0.1)",
    color: "#b45309",
    border: "1px solid rgba(245, 158, 11, 0.3)",
  },
  category: {
    backgroundColor: "var(--color-surface-container)",
    color: "var(--color-on-surface-variant)",
    border: "1px solid var(--color-outline-variant)",
  },
};

export default function Badge({
  variant = "category",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${className}`}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
}
