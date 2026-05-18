import useCountUp from "../../hooks/useCountUp";
import useInView from "../../hooks/useInView";

interface StatItemProps {
  value: string;
  label: string;
  description?: string;
  electric?: boolean;
}

export default function StatItem({
  value,
  label,
  description,
  electric = false,
}: StatItemProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { value: countedValue, opacity } = useCountUp(value, {
    enabled: inView,
    duration: 2000,
  });

  return (
    <div
      ref={ref}
      className="text-center sm:text-left flex flex-col justify-center h-full"
    >
      <p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-[-1px] leading-none transition-opacity duration-300 font-sans"
        style={{ color: electric ? "#9FE870" : "#ffffff", opacity }}
      >
        {countedValue}
      </p>
      <p className="mt-3 text-[#b7ff8d] uppercase tracking-[2px] sm:tracking-[2.5px] text-[10px] sm:text-[11px] md:text-xs leading-snug font-semibold">
        {label}
      </p>
      {description && (
        <p className="mt-1.5 text-[#A6ABA6] text-[11px] sm:text-[12px] leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
