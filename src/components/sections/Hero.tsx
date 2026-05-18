import { HERO } from "../../data/constants";
import StatItem from "../ui/StatItem";
import Button from "../ui/Button";
import ScrollVideoExpand from "../ui/ScrollVideoExpand";

export default function Hero() {
  return (
    <ScrollVideoExpand src="/images/Testing/hero-video.mp4">
      <section className="relative min-h-screen flex items-center">
        {/* Light Cinematic Overlay for Text Legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#121414]/60 via-transparent to-transparent"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#121414]/40 via-transparent to-transparent"
          aria-hidden="true"
        ></div>

        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-32 md:py-48 w-full z-10">
          <div className="max-w-[900px] lg:max-w-[960px] xl:max-w-[1050px]">
            {/* Subheading tag */}
            <p className="text-[#9FE870] uppercase tracking-[8px] text-[11px] sm:text-xs font-semibold mb-6 sm:mb-8 animate-fade-in">
              {HERO.tagline}
            </p>

            {/* User Approved Headline Option C */}
            <h1 className="text-[clamp(34px,6.5vw,56px)] sm:text-[68px] md:text-[84px] lg:text-[96px] leading-[1.05] sm:leading-[0.92] font-extrabold tracking-[-1px] sm:tracking-[-2.5px] md:tracking-[-3px] max-w-[1050px] animate-fade-in-up">
              High-Performance Transformers <br className="hidden sm:block" />
              For India's{" "}
              <span className="text-[#9FE870] drop-shadow-[0_0_20px_rgba(159,232,112,0.15)]">
                Renewable Grid
              </span>
              .
            </h1>

            {/* Description */}
            {HERO.description && (
              <p className="mt-8 sm:mt-10 max-w-[720px] text-[#A6ABA6] text-base sm:text-lg md:text-xl xl:text-2xl leading-[1.75] sm:leading-[1.85] font-light animate-fade-in-up-slow">
                {HERO.description}
              </p>
            )}

            {/* User Approved Option B CTAs */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8 animate-fade-in-up-delayed">
              <Button variant="primary" href="#contact" accent>
                Speak to an engineering expert
              </Button>
              <Button
                variant="secondary"
                href="/Ornet Presentation.pdf"
                download="Ornet_Transformers_Profile.pdf"
              >
                Download company profile (PDF)
              </Button>
            </div>

            {/* Large Stat Dashboard Block */}
            <div className="max-w-4xl mt-6 sm:mt-10 md:mt-16 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl animate-cinema-reveal relative overflow-hidden">
              {/*--- Visual micro-conductor glow line ---*/}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9FE870]/40 to-transparent" />
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 sm:px-12 py-6 sm:py-8 relative z-10">
                {HERO.stats.map((stat) => (
                  <StatItem
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    description={stat.description}
                    electric={stat.electric}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative side strip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 opacity-40">
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent to-[#9FE870]" />
          <span className="text-[10px] tracking-[4px] uppercase vertical-text font-mono text-[#9FE870]">
            ORNET GRID STAGE 1
          </span>
          <div className="w-[1px] h-32 bg-gradient-to-t from-transparent to-[#9FE870]" />
        </div>
      </section>
    </ScrollVideoExpand>
  );
}
