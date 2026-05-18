import { useState } from "react";
import { SOLUTIONS } from "../../data/constants";
import SectionHeading from "../ui/SectionHeading";
import ElectricCard from "../ui/ElectricCard";
import { Sun, Wind, Grid, Factory, CheckCircle2, ChevronRight } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Sun: Sun,
  Wind: Wind,
  Grid: Grid,
  Factory: Factory
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("solar");

  const currentSol = SOLUTIONS.items.find((item) => item.id === activeTab) || SOLUTIONS.items[0];
  const IconComponent = ICON_MAP[currentSol.icon] || Sun;

  return (
    <section id="solutions" className="bg-[#0A0C0C] py-24 sm:py-32 lg:py-40 border-t border-[#232727] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(#9FE870 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#0A0C0C] to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          tagline={SOLUTIONS.tagline}
          headline={SOLUTIONS.headline}
          wide
        />

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 xl:gap-20 items-start">
          {/* Left panel: Control Board / Selector Buttons */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] text-[#A6ABA6] tracking-[3px] uppercase font-mono mb-2">Select Application Grid</p>
            {SOLUTIONS.items.map((item) => {
              const TabIcon = ICON_MAP[item.icon] || Sun;
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-6 sm:p-8 border flex items-center justify-between transition-all duration-500 ease-out cursor-pointer ${
                    isActive
                      ? "bg-[#151818] border-[#9FE870] shadow-[0_0_25px_rgba(159,232,112,0.04)]"
                      : "bg-[#121414]/40 border-[#232727] hover:border-[#2D3232] hover:bg-[#151818]/60"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 flex items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? "bg-[#9FE870] border-[#9FE870] text-black"
                          : "bg-[#1A1D1D] border-[#2A2F2F] text-[#A6ABA6]"
                      }`}
                    >
                      <TabIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-white tracking-tight">{item.title}</h3>
                      <p className="text-xs text-[#7D837D] tracking-wide mt-1 font-mono">{item.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-all duration-500 ${
                      isActive ? "text-[#9FE870] translate-x-1" : "text-[#7D837D]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right panel: Active Solution technical breakdown */}
          <ElectricCard size={48} thickness={2} className="p-8 sm:p-12 lg:p-14 min-h-[580px] flex flex-col justify-between bg-[#151818]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Technical breakdown content */}
              <div>
                <div className="flex items-center gap-3.5 mb-6 text-[#9FE870]">
                  <IconComponent size={24} />
                  <span className="text-xs font-mono uppercase tracking-[2px] font-semibold">Active Matrix Integration</span>
                </div>

                <h3 className="text-3xl font-light text-white tracking-tight mb-5">
                  {currentSol.title} Solutions
                </h3>

                <p className="text-[#A6ABA6] text-sm sm:text-base font-light leading-relaxed mb-8">
                  {currentSol.description}
                </p>

                {/* Transformer Specs Box */}
                <div className="bg-[#1A1D1D] border border-[#2A2F2F] p-5 mb-8">
                  <p className="text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase">Target Configuration</p>
                  <p className="text-white font-mono text-sm sm:text-base font-semibold mt-1">
                    {currentSol.transformerSpec}
                  </p>
                </div>
              </div>

              {/* Layout graphic showing active grid type */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#2A2F2F] bg-[#0A0C0C] p-6 flex flex-col justify-between">
                {/* Embedded dynamic CSS animation definitions */}
                <style>{`
                  @keyframes fluxPulse {
                    0%, 100% { opacity: 0.4; stroke-width: 1.5px; }
                    50% { opacity: 0.95; stroke-width: 2.2px; }
                  }
                  @keyframes fluxPulseFast {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: 20; }
                  }
                  @keyframes fluxFlow {
                    to { stroke-dashoffset: -20; }
                  }
                  @keyframes fluxSine {
                    0% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: 40; }
                  }
                  @keyframes fluxVibe {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(0.8px); }
                  }
                  .animate-flux-pulse {
                    animation: fluxPulse 2.5s infinite ease-in-out;
                  }
                  .animate-flux-pulse-fast {
                    stroke-dasharray: 6 4;
                    animation: fluxPulseFast 1s infinite linear;
                  }
                  .animate-flux-flow {
                    animation: fluxFlow 1.5s infinite linear;
                  }
                  .animate-flux-sine {
                    stroke-dasharray: 10 5;
                    animation: fluxSine 2s infinite linear;
                  }
                  .animate-flux-vibe {
                    animation: fluxVibe 0.15s infinite ease-in-out;
                  }
                `}</style>

                {/* Micro blueprint grid background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #1C2020 1px, transparent 1px), linear-gradient(to bottom, #1C2020 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                
                {/* Scientific telemetry header */}
                <div className="relative z-10 flex items-center justify-between border-b border-[#232727] pb-3 text-[10px] font-mono tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9FE870] animate-pulse" />
                    <span className="text-white uppercase">CORE DIAGNOSTIC RADAR: {activeTab}</span>
                  </div>
                  <span className="text-[#9FE870] font-semibold">SYS_ACTIVE_100%</span>
                </div>

                {/* SVG Visual Transformer Simulation */}
                <div className="relative flex-1 flex items-center justify-center py-4">
                  <svg className="w-full h-full max-h-[220px]" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Transformer Outer Shield Frame */}
                    <rect x="20" y="20" width="280" height="140" rx="2" stroke="#2D3232" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Core Iron Legs */}
                    <rect x="70" y="40" width="30" height="100" fill="#151818" stroke="#2D3232" strokeWidth="1.5" />
                    <rect x="145" y="40" width="30" height="100" fill="#151818" stroke="#2D3232" strokeWidth="1.5" />
                    <rect x="220" y="40" width="30" height="100" fill="#151818" stroke="#2D3232" strokeWidth="1.5" />
                    
                    {/* Core Iron Yokes */}
                    <rect x="50" y="30" width="220" height="15" fill="#151818" stroke="#2D3232" strokeWidth="1.5" />
                    <rect x="50" y="135" width="220" height="15" fill="#151818" stroke="#2D3232" strokeWidth="1.5" />

                    {/* Windings Coils (Copper/Al) */}
                    {/* Left Winding Wires */}
                    <path d="M 68 55 H 102 M 68 67 H 102 M 68 79 H 102 M 68 91 H 102 M 68 103 H 102 M 68 115 H 102 M 68 127 H 102" stroke={activeTab === 'industrial' ? '#E59866' : '#9FE870'} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                    {/* Middle Winding Wires */}
                    <path d="M 143 55 H 177 M 143 67 H 177 M 143 79 H 177 M 143 91 H 177 M 143 103 H 177 M 143 115 H 177 M 143 127 H 177" stroke={activeTab === 'industrial' ? '#E59866' : '#9FE870'} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                    {/* Right Winding Wires */}
                    <path d="M 218 55 H 252 M 218 67 H 252 M 218 79 H 252 M 218 91 H 252 M 218 103 H 252 M 218 115 H 252 M 218 127 H 252" stroke={activeTab === 'industrial' ? '#E59866' : '#9FE870'} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />

                    {/* Dynamic Flux Lines */}
                    {activeTab === 'solar' && (
                      <>
                        {/* Harmonic ripples */}
                        <path d="M 30 70 Q 75 110 120 70 T 210 70 T 290 70" stroke="#FF5733" strokeWidth="1.5" fill="none" opacity="0.75" className="animate-flux-pulse-fast" />
                        <path d="M 30 110 Q 75 70 120 110 T 210 110 T 290 110" stroke="#9FE870" strokeWidth="2" fill="none" className="animate-flux-pulse" />
                      </>
                    )}

                    {activeTab === 'wind' && (
                      <>
                        {/* Mechanical vibrations absorbed */}
                        <path d="M 50 145 H 270" stroke="#9FE870" strokeWidth="2.5" fill="none" className="animate-flux-vibe" />
                        {/* Reinforced frame clamps */}
                        <rect x="42" y="65" width="6" height="50" fill="#9FE870" opacity="0.3" rx="1" />
                        <rect x="272" y="65" width="6" height="50" fill="#9FE870" opacity="0.3" rx="1" />
                        <circle cx="45" cy="90" r="2" fill="#9FE870" />
                        <circle cx="275" cy="90" r="2" fill="#9FE870" />
                      </>
                    )}

                    {activeTab === 'utilities' && (
                      <>
                        {/* Large clean grid sine wave */}
                        <path d="M 30 90 A 45 45 0 0 1 120 90 A 45 45 0 0 0 210 90 A 45 45 0 0 1 290 90" stroke="#9FE870" strokeWidth="2" fill="none" className="animate-flux-sine" />
                      </>
                    )}

                    {activeTab === 'industrial' && (
                      <>
                        {/* Convection cooling loops and thermal heat flows */}
                        <path d="M 85 45 V 125 M 160 45 V 125 M 235 45 V 125" stroke="#E59866" strokeWidth="1.5" strokeDasharray="4 4" className="animate-flux-flow" />
                        {/* Heat cooling circulation path */}
                        <path d="M 45 35 H 275 V 145 H 45 Z" stroke="#3498DB" strokeWidth="1" strokeDasharray="6 3" opacity="0.5" className="animate-flux-flow" />
                      </>
                    )}
                  </svg>
                </div>

                {/* Live physical diagnostic telemetry panel */}
                <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-[#232727] pt-3 text-[10px] font-mono text-[#A6ABA6]">
                  {activeTab === 'solar' && (
                    <>
                      <div>
                        <span className="text-[#7D837D] uppercase block">Attenuated THD:</span>
                        <span className="text-white font-semibold">0.8% (Target &lt; 2.0%)</span>
                      </div>
                      <div>
                        <span className="text-[#7D837D] uppercase block">Electrostatic Shield:</span>
                        <span className="text-[#9FE870] font-semibold">ENGAGED / ACTIVE</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'wind' && (
                    <>
                      <div>
                        <span className="text-[#7D837D] uppercase block">Vib. Velocity:</span>
                        <span className="text-white font-semibold">0.02 mm/s (Safe &lt; 0.05)</span>
                      </div>
                      <div>
                        <span className="text-[#7D837D] uppercase block">Vibrational Clamp:</span>
                        <span className="text-[#9FE870] font-semibold">MAX ABSORPTION</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'utilities' && (
                    <>
                      <div>
                        <span className="text-[#7D837D] uppercase block">Dynamic Grid Load:</span>
                        <span className="text-white font-semibold">100% Nominal</span>
                      </div>
                      <div>
                        <span className="text-[#7D837D] uppercase block">BIL Tolerance:</span>
                        <span className="text-[#9FE870] font-semibold">125 kV (CPRI Checked)</span>
                      </div>
                    </>
                  )}
                  {activeTab === 'industrial' && (
                    <>
                      <div>
                        <span className="text-[#7D837D] uppercase block">Thermal Core Temp:</span>
                        <span className="text-white font-semibold">72°C (Continuous Rating)</span>
                      </div>
                      <div>
                        <span className="text-[#7D837D] uppercase block">VPD Moisture Index:</span>
                        <span className="text-[#9FE870] font-semibold">&lt;0.08% Dry Weight</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="mt-8 pt-8 border-t border-[#232727]">
              <p className="text-[10px] text-[#7D837D] font-mono tracking-[2px] uppercase mb-4 font-semibold">Engineering Enhancements</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentSol.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-[#9FE870] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#C2C7C2] font-light leading-snug">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </ElectricCard>
        </div>
      </div>
    </section>
  );
}
