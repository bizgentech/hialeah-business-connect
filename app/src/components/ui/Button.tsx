import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const styles: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-gold)",
    color: "#ffffff",
  },
  secondary: {
    backgroundColor: "var(--color-primary-container)",
    color: "#ffffff",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-secondary)",
    border: "1px solid var(--color-secondary)",
  },
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizes[size]} ${className}`}
      style={{ ...styles[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
}
