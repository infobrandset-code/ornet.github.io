import { useState } from "react";
import { MANUFACTURING, TIMELINE } from "../../data/constants";
import SectionHeading from "../ui/SectionHeading";
import ElectricCard from "../ui/ElectricCard";
import { Hammer, MapPin, Cpu, Calendar } from "lucide-react";
import ElectroBorder from "../ui/ElectroBorder";

export default function Manufacturing() {
  const [activeUnitId, setActiveUnitId] = useState("unit-2"); // Default to flagship Unit II

  const activeUnit = MANUFACTURING.units.find((u) => u.id === activeUnitId) || MANUFACTURING.units[1];

  return (
    <section id="manufacturing" className="bg-[#0F1111] py-24 sm:py-32 lg:py-40 border-t border-[#232727] relative overflow-hidden">
      {/* Background glowing overlays */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#9FE870]/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#9FE870]/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          tagline={MANUFACTURING.tagline}
          headline={MANUFACTURING.headline}
          wide
        />

        {/* Plant Forge tabs */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MANUFACTURING.units.map((unit) => {
            const isSelected = unit.id === activeUnitId;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnitId(unit.id)}
                className={`text-left p-6 sm:p-8 border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between min-h-[220px] ${
                  isSelected
                    ? "bg-[#151818] border-[#9FE870] shadow-[0_0_30px_rgba(159,232,112,0.03)]"
                    : "bg-[#121414]/30 border-[#232727] hover:border-[#2D3232] hover:bg-[#151818]/60"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#9FE870]">
                    <MapPin size={18} />
                    <span className="text-[10px] font-mono uppercase tracking-[1.5px] font-semibold">{unit.location.split(",")[1] || "Gujarat"}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-tight">{unit.name}</h3>
                  <p className="mt-3 text-xs text-[#A6ABA6] font-light leading-relaxed line-clamp-2">{unit.role}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#232727] flex items-center justify-between">
                  <span className="text-[11px] text-[#7D837D] uppercase tracking-wider font-mono">Annual Cap</span>
                  <span className="text-sm font-semibold text-white font-mono">{unit.capacity}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Unit detailed breakdown */}
        <div className="mt-12">
          <ElectricCard size={48} thickness={2} className="p-8 sm:p-12 lg:p-14 bg-[#151818]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 xl:gap-20 items-start">
              {/* Detailed specs */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-4">{activeUnit.name} Breakdown</h3>
                <p className="text-[#A6ABA6] text-sm sm:text-base font-light leading-relaxed mb-10">{activeUnit.role}</p>

                {/* Grid of physical metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 pb-10 border-b border-[#232727]">
                  <div>
                    <span className="text-[10px] text-[#7D837D] uppercase tracking-wider font-mono">Land Area</span>
                    <p className="text-lg font-mono text-white font-semibold mt-1">{activeUnit.landArea}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7D837D] uppercase tracking-wider font-mono">Plant Size</span>
                    <p className="text-lg font-mono text-white font-semibold mt-1">{activeUnit.plantArea}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7D837D] uppercase tracking-wider font-mono">Winding Range</span>
                    <p className="text-lg font-mono text-white font-semibold mt-1">{activeUnit.range.split(" - ")[1] || activeUnit.range}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7D837D] uppercase tracking-wider font-mono">Active Labor</span>
                    <p className="text-lg font-mono text-white font-semibold mt-1">{activeUnit.manpower.split(" ")[0]}+ Workers</p>
                  </div>
                </div>

                {/* Specialized Equipment features */}
                <div>
                  <h4 className="text-[10px] text-[#9FE870] font-mono uppercase tracking-[2px] font-semibold mb-6">Forge Assets & Advanced Machinery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {activeUnit.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 items-start bg-[#1C1F1F] p-5 border border-[#2D3232]">
                        <Cpu size={16} className="text-[#9FE870] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-[#C2C7C2] font-light leading-relaxed">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Graphic container with localized metadata */}
              <div 
                className="border border-[#2D3232] bg-[#1C1F1F] p-8 sm:p-10 flex flex-col justify-between min-h-[420px] h-full relative overflow-hidden bg-cover bg-center"
                style={{ 
                  backgroundImage: activeUnit.image ? `url('${activeUnit.image}')` : "none" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-[#121414]/90 to-[#121414]/60 z-0 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3.5 mb-6 text-[#9FE870]">
                    <Hammer size={18} />
                    <span className="text-xs font-mono uppercase tracking-[2px] font-semibold">Unit Testing Parameter</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-4">Routine & Type Testing Bounds</h4>
                  <p className="text-sm text-[#A6ABA6] font-light leading-relaxed">
                    Every sub-winding assembly must undergo full voltage-ratio, impedance, and core loss evaluation under dry environmental chambers.
                  </p>
                </div>

                <div className="mt-10 space-y-6 relative z-10">
                  <div className="p-4 border-l-2 border-[#9FE870] bg-[#121414]/70 backdrop-blur-md">
                    <p className="text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase">TESTING BOUNDARY RANGE</p>
                    <p className="text-white text-base sm:text-lg font-mono font-semibold mt-1">{activeUnit.testingRange}</p>
                  </div>
                  <p className="text-xs text-[#7D837D] font-light">
                    Fully mapped under real active transformer thermal monitoring to ensure continuous grid stabilization.
                  </p>
                </div>
              </div>
            </div>
          </ElectricCard>
        </div>

        {/* Milestone history timeline scrollbar */}
        <div className="mt-24 pt-20 border-t border-[#232727]">
          <div className="flex items-center gap-3.5 mb-12">
            <Calendar size={18} className="text-[#9FE870]" />
            <span className="text-xs font-mono uppercase tracking-[2.5px] text-[#9FE870] font-semibold">Ornet Corporate Timeline</span>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-8 px-4 sm:px-0 scrollbar-thin scrollbar-thumb-[#2A2F2F] scrollbar-track-transparent select-none mask-image">
            {TIMELINE.map((evt, idx) => (
              <ElectroBorder
                key={idx}
                className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 bg-[#151818]/40 p-8 transition-colors duration-400 group"
                borderColor="#9FE870"
                borderWidth={1.5}
                radius="12px"
                animationSpeed={0.5}
                distortion={0.1}
                glow={true}
                aura={false}
                glowBlur={10}
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                  <span className="text-4xl font-extrabold text-[#9FE870] font-mono leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(159,232,112,0.3)]">{evt.year}</span>
                  <h4 className="mt-5 text-lg font-semibold text-white tracking-tight">{evt.milestone}</h4>
                  <p className="mt-3 text-sm text-[#A6ABA6] font-light leading-relaxed">{evt.description}</p>
                </div>
              </ElectroBorder>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
