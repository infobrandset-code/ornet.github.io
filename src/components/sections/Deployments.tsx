import { useEffect, useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Network, Activity, Zap, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CLIENTS = [
  "ADANI GREEN ENERGY",
  "TATA POWER SOLAR",
  "RELIANCE INDUSTRIES",
  "STERLING & WILSON",
  "NTPC LIMITED",
  "AVAADA CLEAN ENERGY",
  "ADITYA BIRLA RENEWABLES",
  "AMBUJA CEMENTS",
];

const PROJECTS = [
  {
    id: "P-KVD-01",
    name: "2GW Khavda Hybrid Project",
    client: "Adani Green Energy",
    rating: "10/12.5 MVA, 33kV",
    status: "SYS_ACTIVE",
    winding: "Aluminium",
  },
  {
    id: "P-NTPC-02",
    name: "1255MW NTPC Khavda",
    client: "Sterling & Wilson",
    rating: "16.8 MVA, 33kV",
    status: "SYS_ACTIVE",
    winding: "Aluminium",
  },
  {
    id: "P-GUV-03",
    name: "150MW GUVNL Solar Plant",
    client: "Tata Power Solar",
    rating: "12.5 MVA, 33kV",
    status: "SYS_ACTIVE",
    winding: "Aluminium",
  },
  {
    id: "P-BESS-04",
    name: "BESS Demo Jamnagar",
    client: "Reliance Industries",
    rating: "18 MVA, 33kV",
    status: "DEPLOYED",
    winding: "Aluminium",
  },
  {
    id: "P-AMB-05",
    name: "200MW Khavda Ext.",
    client: "Ambuja Cements",
    rating: "10/12.5 MVA, 33kV",
    status: "DEPLOYED",
    winding: "Aluminium",
  },
  {
    id: "P-ABR-06",
    name: "67.5MW Chhattisgarh",
    client: "Aditya Birla Renewable",
    rating: "6.5 MVA, 33kV",
    status: "DEPLOYED",
    winding: "Aluminium",
  }
];

export default function Deployments() {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the table rows sequentially
      gsap.fromTo(
        ".radar-row",
        { opacity: 0, y: 20, x: -10 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="deployments" className="relative py-24 bg-[#121414] overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(#9FE870 1px, transparent 1px), linear-gradient(90deg, #9FE870 1px, transparent 1px)`,
             backgroundSize: '100px 100px',
             backgroundPosition: 'center center'
           }}
      />
      
      {/* Vignette fade for grid */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#121414] via-transparent to-[#121414] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <SectionHeading 
            headline="Grid Deployments & Marquee Clientele" 
            description="Powering the backbone of India's renewable transition. Trusted by the nation's largest independent power producers and EPCs with an impeccable zero-failure record."
          />
        </div>

        {/* Infinite Client Marquee */}
        <div className="mt-16 mb-24 relative">
          <div className="absolute top-0 left-0 w-8 h-px bg-[#9FE870]" />
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
            <Network className="w-3 h-3 text-[#9FE870]" />
            <span>Active Enterprise Partnerships</span>
          </div>
          
          <div className="flex overflow-hidden relative group">
            {/* Gradient masks for smooth edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#121414] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#121414] to-transparent z-10" />
            
            <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <div key={i} className="flex items-center mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl md:text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                    {client}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9FE870] mx-8 opacity-30" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Deployment Radar Table */}
        <div className="mt-16" ref={tableRef}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-light text-white flex items-center gap-3">
                <Activity className="w-6 h-6 text-[#9FE870]" />
                Live Deployment Radar
              </h3>
              <p className="text-sm text-gray-400 mt-2 font-mono uppercase tracking-wider">
                Real-time tracking of major grid installations
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9FE870] animate-pulse"></span>
                <span className="text-[#9FE870]">Sys_Active</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                <span className="text-gray-400">Deployed</span>
              </span>
            </div>
          </div>

          <div className="w-full overflow-x-auto border border-white/10 bg-black/40 backdrop-blur-xl rounded-sm">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
                  <th className="px-6 py-4 font-medium">Telemetry ID</th>
                  <th className="px-6 py-4 font-medium">Project Nomenclature</th>
                  <th className="px-6 py-4 font-medium">Operating Client</th>
                  <th className="px-6 py-4 font-medium">MVA / kV Class</th>
                  <th className="px-6 py-4 font-medium">Core Tech</th>
                  <th className="px-6 py-4 font-medium text-right">Grid Status</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                {PROJECTS.map((project, i) => (
                  <tr 
                    key={i} 
                    className="radar-row border-b border-white/5 hover:bg-white/5 transition-colors group cursor-default"
                  >
                    <td className="px-6 py-5 text-gray-500 group-hover:text-gray-300 transition-colors">
                      {project.id}
                    </td>
                    <td className="px-6 py-5 text-gray-200 font-medium group-hover:text-white transition-colors flex items-center gap-2">
                      <Zap className="w-3 h-3 text-[#9FE870] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {project.name}
                    </td>
                    <td className="px-6 py-5 text-gray-400 group-hover:text-[#9FE870] transition-colors">
                      {project.client}
                    </td>
                    <td className="px-6 py-5 text-gray-300">
                      {project.rating}
                    </td>
                    <td className="px-6 py-5 text-gray-400">
                      {project.winding}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] tracking-widest ${
                        project.status === 'SYS_ACTIVE' 
                          ? 'bg-[#9FE870]/10 text-[#9FE870] border border-[#9FE870]/30' 
                          : 'bg-white/5 text-gray-400 border border-white/10'
                      }`}>
                        {project.status === 'SYS_ACTIVE' && <ShieldCheck className="w-3 h-3" />}
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            <span>Displaying 6 of 100+ active utility installations</span>
            <span>Data Source: CPRI & Client Handover Logs</span>
          </div>
        </div>
      </div>
      
      {/* Inline styles for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
