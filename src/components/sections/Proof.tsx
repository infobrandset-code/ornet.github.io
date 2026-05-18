import { TRACTION } from "../../data/constants";
import SectionHeading from "../ui/SectionHeading";
import ElectricCard from "../ui/ElectricCard";
import { TrendingUp, Award, Landmark, Zap } from "lucide-react";
import useInView from "../../hooks/useInView";

export default function Proof() {
  const [ref] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="proof" className="bg-[#121414] py-24 sm:py-32 lg:py-40 border-t border-[#232727] relative overflow-hidden">
      {/* Dynamic background network grid design */}
      <div className="absolute inset-0 opacity-[0.02] grid-network-glow pointer-events-none" style={{ backgroundImage: "radial-gradient(#9FE870 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          tagline={TRACTION.tagline}
          headline={TRACTION.headline}
          description={TRACTION.description}
          wide
        />

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Financial Growth Trajectory Card */}
          <ElectricCard size={48} thickness={2} className="p-8 sm:p-10 flex flex-col justify-between h-full bg-[#151818]">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-sm bg-[#1A1D1D] border border-[#2A2F2F] flex items-center justify-center text-[#9FE870]">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">Financial Growth Trajectory</h3>
              </div>

              <p className="text-[#A6ABA6] font-light leading-relaxed mb-8 text-sm sm:text-base">
                Our operations run on 100% internal cash accruals. By maintaining a zero-debt status, we protect our client supply chains from external macroeconomic shocks, ensuring long-term project viability.
              </p>

              {/* Revenue Steps */}
              <div className="space-y-6">
                {TRACTION.financials.years.map((y, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-[#2D3232]">
                    <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#9FE870] drop-shadow-[0_0_6px_rgba(159,232,112,0.6)]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-[#A6ABA6] text-xs sm:text-sm tracking-wide uppercase font-mono">{y.label}</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{y.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#232727] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#9FE870] font-semibold tracking-wider uppercase font-mono">
                <Landmark size={15} />
                <span>Debt-Free Stability</span>
              </div>
              <div className="text-xs text-[#7D837D] font-light leading-tight sm:text-right max-w-[280px]">
                {TRACTION.financials.growthDescription}
              </div>
            </div>
          </ElectricCard>

          {/* Adani Khavda Infrastructure Leadership */}
          <ElectricCard size={48} thickness={2} className="p-8 sm:p-10 flex flex-col justify-between h-full bg-[#151818]">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-sm bg-[#1A1D1D] border border-[#2A2F2F] flex items-center justify-center text-[#9FE870]">
                  <Zap size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">{TRACTION.khavda.title}</h3>
              </div>

              <p className="text-[#A6ABA6] font-light leading-relaxed mb-8 text-sm sm:text-base">
                {TRACTION.khavda.description}
              </p>

              {/* Grid load statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {TRACTION.khavda.stats.map((s, idx) => (
                  <div key={idx} className="bg-[#1A1D1D] border border-[#2A2F2F] p-5 text-center sm:text-left">
                    <p className="text-3xl font-extrabold text-[#9FE870] font-mono leading-none tracking-tight">
                      {s.value}
                    </p>
                    <p className="mt-2 text-[10px] sm:text-[11px] text-[#A6ABA6] uppercase tracking-[1.5px] font-semibold leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#232727] flex items-center gap-4">
              <Award size={18} className="text-[#9FE870] shrink-0" />
              <p className="text-xs text-[#7D837D] font-light">
                Supplying inverter-duty grid loads in the world's largest 30,000 MW hybrid energy park.
              </p>
            </div>
          </ElectricCard>
        </div>

        {/* Highlight Banner - Cash Flows & Infomerics rating */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 border border-[#2A2F2F] bg-[#151818]/60 backdrop-blur-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex gap-4 items-start">
            <div className="text-[#9FE870] font-mono text-xs font-semibold tracking-widest uppercase border border-[#9FE870]/20 px-2 py-0.5 mt-1">STATUS</div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-1">Fiscal Self-Funding Model</h4>
              <p className="text-[#A6ABA6] text-xs font-light">0% external commercial bank loans. 100% of reserves retained for machinery expansion.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="text-[#9FE870] font-mono text-xs font-semibold tracking-widest uppercase border border-[#9FE870]/20 px-2 py-0.5 mt-1">RATING</div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-1">BBB- Stable (Seeking AA Stable)</h4>
              <p className="text-[#A6ABA6] text-xs font-light">Rated by Infomerics. Strong creditworthiness backed by solid operating cash accruals.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="text-[#9FE870] font-mono text-xs font-semibold tracking-widest uppercase border border-[#9FE870]/20 px-2 py-0.5 mt-1">RECORD</div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-1">Zero Failure Site Record</h4>
              <p className="text-[#A6ABA6] text-xs font-light">All custom windings passed dynamic short-circuit type tests at CPRI labs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
