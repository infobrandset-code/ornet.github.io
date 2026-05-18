import React from "react";
import ElectricAccent from "./ElectricAccent";

interface ElectricCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  size?: number;
  thickness?: number;
  offset?: number;
  hoverGlow?: boolean;
}

export default function ElectricCard({
  children,
  className = "",
  glowColor = "#9FE870",
  size = 36,
  thickness = 1,
  offset = 0,
  hoverGlow = true
}: ElectricCardProps) {
  return (
    <div
      className={`relative group bg-[#151818] border border-[#232727] p-8 transition-all duration-500 ease-out hover:border-[#2D3232] ${
        hoverGlow
          ? "hover:bg-[#151818]/90 hover:shadow-[0_0_30px_rgba(159,232,112,0.03)]"
          : ""
      } ${className}`}
    >
      {/* Visual glowing corners */}
      <ElectricAccent size={size} thickness={thickness} color={glowColor} offset={offset} />
      
      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
