import { VALIDATION } from "../../data/constants";
import SectionHeading from "../ui/SectionHeading";
import ElectricCard from "../ui/ElectricCard";
import { Award, CheckCircle2, ShieldCheck, FileText, Activity } from "lucide-react";

export default function Validation() {
  return (
    <section id="validation" className="bg-[#121414] py-24 sm:py-32 lg:py-40 border-t border-[#232727] relative overflow-hidden">
      {/* Background network grid decor */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(#9FE870 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          tagline={VALIDATION.tagline}
          headline={VALIDATION.headline}
          description={VALIDATION.description}
          wide
        />

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 xl:gap-20 items-start">
          {/* CPRI Test Reports Table */}
          <ElectricCard size={48} thickness={2} className="p-8 sm:p-10 bg-[#151818] overflow-x-auto">
            <div className="flex items-center gap-3.5 mb-8 text-[#9FE870]">
              <ShieldCheck size={20} />
              <span className="text-xs font-mono uppercase tracking-[2px] font-semibold">Short-Circuit Type-Test Matrix</span>
            </div>

            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b border-[#2D3232] pb-4 text-[#7D837D] text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                  <th className="pb-4 font-semibold">Rating / Type</th>
                  <th className="pb-4 font-semibold">Winding</th>
                  <th className="pb-4 font-semibold">System App</th>
                  <th className="pb-4 font-semibold">Testing Lab</th>
                  <th className="pb-4 font-semibold text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#232727] text-sm">
                {VALIDATION.cpriReports.map((report, idx) => (
                  <tr key={idx} className="hover:bg-[#1C1F1F]/40 transition-colors duration-200">
                    <td className="py-5 font-mono text-white font-semibold text-xs sm:text-sm">{report.rating}</td>
                    <td className="py-5">
                      <span className="bg-[#1A1D1D] border border-[#2D3232] px-2 py-0.5 rounded-sm text-xs font-mono text-[#A6ABA6]">
                        {report.winding === "Al" ? "Aluminium" : "Copper"}
                      </span>
                    </td>
                    <td className="py-5 text-xs text-[#A6ABA6] font-light">{report.application}</td>
                    <td className="py-5 text-xs text-[#A6ABA6] font-mono">{report.lab}</td>
                    <td className="py-5 text-right">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#9FE870] font-semibold uppercase tracking-wider bg-[#9FE870]/5 px-2.5 py-1 border border-[#9FE870]/20 rounded-sm">
                        <CheckCircle2 size={12} />
                        {report.status.split(" ")[0]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Special wind/WTG clearance note */}
            <div className="mt-8 p-4 bg-[#1C1F1F] border border-[#2D3232] flex items-center gap-3">
              <span className="bg-[#9FE870] text-black font-mono text-[9px] font-bold px-1.5 py-0.5 uppercase">FIRST IN INDIA</span>
              <p className="text-xs text-[#C2C7C2] font-light leading-relaxed">
                Ornet is the first manufacturer in India to successfully clear the 5.6 MVA Aluminium winding Short-Circuit Dynamic Test report at CPRI Bengaluru.
              </p>
            </div>
          </ElectricCard>

          {/* Side: Corporate Approvals and Testing Assets */}
          <div className="space-y-8">
            {/* Certifications Card */}
            <ElectricCard size={36} thickness={1.5} className="p-8 bg-[#151818] border border-[#232727]">
              <div className="flex items-center gap-3.5 mb-6 text-[#9FE870]">
                <Award size={18} />
                <span className="text-xs font-mono uppercase tracking-[2px] font-semibold">Quality Credentials</span>
              </div>

              <div className="space-y-6">
                {VALIDATION.certifications.map((cert, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <FileText size={18} className="text-[#9FE870] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-white text-sm font-semibold leading-none">{cert.value}</h4>
                      <p className="text-[10px] text-[#A6ABA6] tracking-wider uppercase mt-1.5 font-mono">{cert.label}</p>
                      <p className="text-xs text-[#7D837D] font-light leading-relaxed mt-2">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ElectricCard>

            {/* In-House Testing Laboratory assets */}
            <ElectricCard size={36} thickness={1.5} className="p-8 bg-[#151818] border border-[#232727]">
              <div className="flex items-center gap-3.5 mb-6 text-[#9FE870]">
                <Activity size={18} />
                <span className="text-xs font-mono uppercase tracking-[2px] font-semibold">Internal Laboratory</span>
              </div>

              <ul className="space-y-4">
                {VALIDATION.inHouseTesting.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-[#9FE870] text-xs font-mono mt-0.5">0{idx + 1}.</span>
                    <div>
                      <h5 className="text-xs font-semibold text-white uppercase tracking-wider">{item.title}</h5>
                      <p className="text-xs text-[#A6ABA6] font-light leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ElectricCard>
          </div>
        </div>
      </div>
    </section>
  );
}
