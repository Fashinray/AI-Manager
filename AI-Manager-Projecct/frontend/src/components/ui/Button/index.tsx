// src/components/ui/Button.tsx

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  const base = "px-4 py-2 rounded-lg text-sm font-medium transition";

  const styles =
    variant === "primary"
      ? "accent-btn hover:opacity-95"
      : "bg-[color:var(--surface)] text-[color:var(--text)] border border-[color:var(--border)] hover:bg-[color:var(--input)]";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

export default Button;