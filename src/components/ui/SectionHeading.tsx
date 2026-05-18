interface SectionHeadingProps {
  tagline?: string;
  headline: string;
  description?: string;
  compact?: boolean;
  wide?: boolean;
  className?: string;
}

export default function SectionHeading({
  tagline,
  headline,
  description,
  compact,
  wide,
  className = ""
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        compact
          ? "max-w-[720px] mb-14 md:mb-18"
          : wide
          ? "max-w-[980px] mb-22 md:mb-32"
          : "max-w-[880px] mb-18 md:mb-28"
      } ${className}`}
    >
      {tagline && (
        <p className="text-[#9FE870] uppercase tracking-[6px] text-[11px] sm:text-sm font-medium mb-6 md:mb-8">
          {tagline}
        </p>
      )}
      <h2
        className={`text-balance ${
          compact
            ? "text-[clamp(28px,5vw,38px)] sm:text-[40px] md:text-[50px] lg:text-[58px]"
            : wide
            ? "text-[clamp(36px,6vw,48px)] sm:text-[52px] md:text-[72px] lg:text-[84px] leading-[1.05] sm:leading-[0.94]"
            : "text-[clamp(32px,5.5vw,42px)] sm:text-[48px] md:text-[62px] lg:text-[74px]"
        } leading-[1.1] sm:leading-[0.98] font-semibold tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]`}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={`mt-8 md:mt-12 text-[#A6ABA6] text-base md:text-lg xl:text-xl leading-[1.8] md:leading-[1.9] ${
            compact ? "max-w-[660px]" : wide ? "max-w-[820px]" : "max-w-[780px]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
