import { CSR_DATA } from "../../data/constants";
import SectionHeading from "../ui/SectionHeading";
import ElectricCard from "../ui/ElectricCard";
import { Heart, Globe, Users } from "lucide-react";

export default function CultureCSR() {
  return (
    <section id="culture" className="bg-[#0A0C0C] py-24 sm:py-32 lg:py-40 border-t border-[#232727] relative overflow-hidden">
      {/* Visual glowing layout lines */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: "radial-gradient(#9FE870 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          tagline={CSR_DATA.tagline}
          headline={CSR_DATA.headline}
          wide
        />

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CSR_DATA.projects.map((proj, idx) => (
            <ElectricCard
              key={idx}
              size={36}
              thickness={1.5}
              className="p-8 sm:p-10 flex flex-col justify-between h-full bg-[#151818]"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6 text-[#9FE870]">
                  {idx === 0 ? <Heart size={20} /> : idx === 1 ? <Globe size={20} /> : <Users size={20} />}
                  <span className="text-[10px] font-mono uppercase tracking-[1.5px] font-semibold">CSR Matrix Item</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug mb-3">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#9FE870] font-mono uppercase tracking-widest font-semibold mb-6">
                  {proj.partner}
                </p>

                <p className="text-[#A6ABA6] text-xs sm:text-sm font-light leading-relaxed mb-8">
                  {proj.description}
                </p>

                {proj.motto && (
                  <p className="italic text-xs text-[#7D837D] border-l border-[#2D3232] pl-4 py-1 mb-8 leading-relaxed">
                    "{proj.motto}"
                  </p>
                )}
              </div>

              {/* Localized impact summary */}
              <div className="pt-6 border-t border-[#232727]">
                <p className="text-[10px] text-[#7D837D] font-mono tracking-widest uppercase mb-1">Impact Scope</p>
                <p className="text-white text-xs sm:text-sm font-light leading-snug">
                  {proj.impact}
                </p>
              </div>
            </ElectricCard>
          ))}
        </div>

        {/* Culture statement block */}
        <div className="mt-20 p-8 sm:p-12 border border-[#2D3232] bg-[#151818]/50 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-[#9FE870]/10 border border-[#9FE870]/20 text-[10px] text-[#9FE870] font-mono tracking-widest uppercase px-3 py-1 rounded-sm">
              PEOPLE & INTEGRITY
            </span>
            <h4 className="text-2xl sm:text-3xl font-light text-white tracking-tight mt-6 mb-4">
              Our Winding Workforce Commitment
            </h4>
            <p className="text-sm text-[#A6ABA6] font-light leading-relaxed">
              We believe heavy engineering is only as stable as the physical hands that guide the copper conductors. We support our technicians with fully air-conditioned assembly halls, clean-room ventilation, continuous technical training, and state-certified safety protections.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-5 bg-[#1C1F1F] border border-[#2D3232]">
              <span className="text-3xl font-mono font-extrabold text-[#9FE870]">100%</span>
              <p className="text-[10px] text-[#7D837D] uppercase tracking-wider mt-2 font-semibold">Equal Pay & Safety compliance</p>
            </div>
            <div className="p-5 bg-[#1C1F1F] border border-[#2D3232]">
              <span className="text-3xl font-mono font-extrabold text-[#9FE870]">500+</span>
              <p className="text-[10px] text-[#7D837D] uppercase tracking-wider mt-2 font-semibold">Skilled engineers & technicians</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
