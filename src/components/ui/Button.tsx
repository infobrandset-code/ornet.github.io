import React from "react";
import ElectricAccent from "./ElectricAccent";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  accent?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  download?: string | boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  href = "#",
  accent = false,
  onClick,
  download,
  children,
  className = ""
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-5 uppercase tracking-[2.5px] text-[11px] sm:text-xs font-semibold transition-all duration-500 ease-out text-center cursor-pointer";

  const styles = {
    primary:
      "bg-[#9FE870] hover:bg-[#b7ff8d] text-black hover:-translate-y-0.5 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15",
    secondary:
      "border border-[#3A4040] hover:border-[#9FE870] text-[#D6D9D6] hover:text-white hover:-translate-y-0.5",
  };

  const accentColor = variant === "primary" ? "#ffffff" : "#9FE870";

  return (
    <a
      href={href}
      onClick={onClick}
      download={download ? (typeof download === "string" ? download : "") : undefined}
      className={`${base} ${styles[variant]} relative group ${className}`}
    >
      {accent && <ElectricAccent color={accentColor} />}
      {children}
    </a>
  );
}
