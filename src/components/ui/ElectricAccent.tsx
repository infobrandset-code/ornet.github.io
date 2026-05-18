interface ElectricAccentProps {
  size?: number;
  thickness?: number;
  color?: string;
  offset?: number;
}

export default function ElectricAccent({
  size = 36,
  thickness = 2,
  color = "#9FE870",
  offset = 0
}: ElectricAccentProps) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <span
        className="absolute rounded-[1px] opacity-20 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:animate-corner-glow"
        style={{ top: offset, left: offset, width: size, height: thickness, backgroundColor: color }}
      />
      <span
        className="absolute rounded-[1px] opacity-20 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:animate-corner-glow"
        style={{ top: offset, left: offset, width: thickness, height: size, backgroundColor: color }}
      />
      <span
        className="absolute rounded-[1px] opacity-20 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:animate-corner-glow-br"
        style={{ bottom: offset, right: offset, width: size, height: thickness, backgroundColor: color }}
      />
      <span
        className="absolute rounded-[1px] opacity-20 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:animate-corner-glow-br"
        style={{ bottom: offset, right: offset, width: thickness, height: size, backgroundColor: color }}
      />
    </div>
  );
}
