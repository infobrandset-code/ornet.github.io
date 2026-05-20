import SectionHeading from "../ui/SectionHeading";
import ElectroBorder from "../ui/ElectroBorder";
import {
  Zap,
  Factory,
  Flame,
  Pickaxe,
  Train,
  FlaskConical,
  Network,
  Leaf,
} from "lucide-react";
import useInView from "../../hooks/useInView";

const INDUSTRIES = [
  { name: "Power Transmission", icon: Zap, delay: 0 },
  { name: "Cement", icon: Factory, delay: 100 },
  { name: "Metal Processing", icon: Flame, delay: 200 },
  { name: "Mining", icon: Pickaxe, delay: 300 },
  { name: "Railways", icon: Train, delay: 400 },
  { name: "Pharmaceutical", icon: FlaskConical, delay: 500 },
  { name: "Distribution", icon: Network, delay: 600 },
  { name: "Green Energy", icon: Leaf, delay: 700 },
];

export default function Industries() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="industries"
      className="py-24 sm:py-32 lg:py-40 bg-[#0A0B0B] border-t border-[#232727] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9FE870]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          tagline="SECTOR INTEGRATION"
          headline="Industries We Empower With Expertise"
          wide
        />

        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;

            return (
              <div
                key={idx}
                className={`group w-full transition-all duration-1000 ease-out transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${industry.delay}ms` }}
              >
                <ElectroBorder
                  className="w-full sm:h-[240px] bg-[#121414]/60 p-8 sm:p-10 flex flex-col items-center justify-center text-center aspect-square sm:aspect-auto transition-all duration-500 hover:bg-[#151818]"
                  borderColor="#9FE870"
                  borderWidth={1}
                  radius="16px"
                  animationSpeed={0.6}
                  distortion={0.05}
                  glow={true}
                  aura={false}
                  glowBlur={12}
                >
                  {/* Animated SVG Logo Wrapper */}
                  <div className="relative w-20 h-20 mx-auto sm:w-24 sm:h-24 mb-6 flex items-center justify-center">
                    {/* Rotating Dashed Outer Ring */}
                    <svg
                      className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="#2A2F2F"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="#9FE870"
                        strokeWidth="1"
                        strokeDasharray="30 120"
                        strokeLinecap="round"
                        className="opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </svg>

                    {/* Inner Pulsing Ring */}
                    <svg
                      className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_15s_linear_infinite_reverse] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="#9FE870"
                        strokeWidth="0.5"
                        strokeDasharray="60 40"
                        className="opacity-20 group-hover:opacity-60 transition-opacity duration-500"
                      />
                    </svg>

                    {/* Core Icon */}
                    <div className="relative z-10 text-[#A6ABA6] group-hover:text-[#9FE870] transition-colors duration-500 transform group-hover:scale-110">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* Hover Core Glow */}
                    <div className="absolute inset-0 bg-[#9FE870] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                  </div>

                  {/* Industry Label */}
                  <h4 className="w-full text-center text-sm sm:text-base font-semibold text-white tracking-wide uppercase font-mono">
                    {industry.name}
                  </h4>
                </ElectroBorder>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
