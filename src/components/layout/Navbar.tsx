import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Download, FileText, Zap, Shield, Factory, Activity, Network } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

  // Handle scroll state for pill shadow/background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (menu: string) => {
    if (mobileMenuOpen === menu) setMobileMenuOpen(null);
    else setMobileMenuOpen(menu);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 pointer-events-none">
      {/* Floating Pill Container */}
      <header 
        className={`pointer-events-auto mx-auto max-w-[1440px] rounded-full transition-all duration-300 ease-out border border-white/10 backdrop-blur-xl flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4 ${
          scrolled ? "bg-[#121414]/95 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" : "bg-[#121414]/70"
        }`}
      >
        <a href="/" className="flex items-center gap-2 z-10 shrink-0">
          <img
            src="/logo.png"
            alt="Ornet Transformers"
            className="h-8 sm:h-10 w-auto object-contain"
            decoding="async"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[12px] font-semibold uppercase tracking-[1.5px] text-gray-300">
          <a href="/" className="hover:text-white transition-colors">Home</a>

          {/* About Dropdown */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              About <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-[#1a1d1d] border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1">
                <a href="/about" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Ornet Group</a>
                <a href="/about/leadership" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Leadership</a>
                <a href="/about/life-at-ornet" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Life at Ornet</a>
                <a href="/about#mission-vision" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Mission & Vision</a>
                <a href="/about#who-we-are" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Who We Are</a>
              </div>
            </div>
          </div>

          {/* Products Mega Menu */}
          <div className="group py-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Products <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 w-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4">
              <div className="bg-[#1a1d1d] border border-white/10 rounded-2xl p-8 shadow-2xl flex max-w-[1400px] mx-auto text-left cursor-default">
                
                {/* Column 1: Product Family */}
                <div className="flex-1 pr-8 border-r border-white/5">
                  <h3 className="text-white text-sm font-bold tracking-[2px] mb-6 flex items-center gap-2"><Zap className="w-4 h-4 text-[#9FE870]" /> BY PRODUCT FAMILY</h3>
                  <div className="flex flex-col gap-4 font-mono text-[11px] text-gray-400">
                    <a href="/products/distribution-transformers" className="hover:text-[#9FE870] transition-colors">Distribution Transformers</a>
                    <a href="/products/power-transformers" className="hover:text-[#9FE870] transition-colors">Power Transformers</a>
                    <a href="/products/solar-inverter-duty-transformers" className="hover:text-[#9FE870] transition-colors">Solar Inverter-Duty Transformers</a>
                    <a href="/products/wind-transformers" className="hover:text-[#9FE870] transition-colors">Wind / WTG Transformers</a>
                    <a href="/products/compact-substations" className="hover:text-[#9FE870] transition-colors">Compact Sub-Stations (CSS)</a>
                    <a href="/products/furnace-special-transformers" className="hover:text-[#9FE870] transition-colors">Furnace & Special Transformers</a>
                  </div>
                </div>

                {/* Column 2: Voltage Class */}
                <div className="flex-1 px-8 border-r border-white/5">
                  <h3 className="text-white text-sm font-bold tracking-[2px] mb-6 flex items-center gap-2"><Activity className="w-4 h-4 text-[#9FE870]" /> BY VOLTAGE CLASS</h3>
                  <div className="flex flex-col gap-4 font-mono text-[11px] text-gray-400">
                    <a href="/products?kv=33" className="hover:text-white transition-colors">Up to 33 kV (LV & Dist.)</a>
                    <a href="/products?kv=66" className="hover:text-white transition-colors">66 kV Class</a>
                    <a href="/products?kv=132" className="hover:text-white transition-colors">132 kV Class</a>
                    <a href="/products/compact-substations#ratings" className="hover:text-white transition-colors">Up to 3.1 MVA CSS</a>
                    <a href="/products/wind-transformers#5-6-mva" className="hover:text-white transition-colors">5.6 MVA WTG Transformers</a>
                  </div>
                </div>

                {/* Column 3: Application */}
                <div className="flex-1 px-8 border-r border-white/5">
                  <h3 className="text-white text-sm font-bold tracking-[2px] mb-6 flex items-center gap-2"><Factory className="w-4 h-4 text-[#9FE870]" /> BY APPLICATION</h3>
                  <div className="flex flex-col gap-4 font-mono text-[11px] text-gray-400">
                    <a href="/solutions/solar-utility-ipp#products" className="hover:text-white transition-colors">Solar Power Plants</a>
                    <a href="/solutions/wind-hybrid#products" className="hover:text-white transition-colors">Wind & Hybrid Parks</a>
                    <a href="/solutions/utilities-discoms#products" className="hover:text-white transition-colors">Utilities & DISCOMS</a>
                    <a href="/solutions/industrial-captive#products" className="hover:text-white transition-colors">Industrial & Furnace</a>
                  </div>
                </div>

                {/* Column 4: Featured */}
                <div className="flex-[1.2] pl-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5 h-full flex flex-col justify-between">
                    <div>
                      <span className="bg-[#9FE870]/20 text-[#9FE870] px-2 py-1 rounded text-[9px] mb-4 inline-block">FEATURED</span>
                      <h4 className="text-lg text-white font-bold leading-tight mb-2 capitalize normal-case tracking-normal">Solar Inverter-Duty <br/>Transformers</h4>
                      <p className="text-gray-400 normal-case tracking-normal font-sans text-sm font-light mb-6">2–12.5 MVA, up to 60 MVA / 132 kV for utility-scale solar.</p>
                      <a href="/products/solar-inverter-duty-transformers" className="text-[#9FE870] normal-case tracking-normal font-sans text-sm flex items-center gap-2 hover:gap-3 transition-all">View product details <ArrowRight className="w-4 h-4"/></a>
                    </div>
                    <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3 normal-case tracking-normal font-sans text-sm text-gray-400">
                      <a href="/products" className="hover:text-white transition-colors">All products overview →</a>
                      <a href="/resources#catalogs" className="hover:text-white transition-colors">Download product catalog (PDF) →</a>
                      <a href="/resources#test-reports" className="hover:text-white transition-colors">View type test & CPRI reports →</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Solutions Mega Menu */}
          <div className="group py-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Solutions <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 w-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4">
              <div className="bg-[#1a1d1d] border border-white/10 rounded-2xl p-8 shadow-2xl flex max-w-[1200px] mx-auto text-left cursor-default">
                
                {/* Column 1: Segments */}
                <div className="flex-1 pr-8 border-r border-white/5">
                  <h3 className="text-white text-sm font-bold tracking-[2px] mb-6 flex items-center gap-2"><Network className="w-4 h-4 text-[#9FE870]" /> BY SEGMENT</h3>
                  <div className="flex flex-col gap-4 font-mono text-[11px] text-gray-400">
                    <a href="/solutions/solar-utility-ipp" className="hover:text-[#9FE870] transition-colors">Solar Utility & IPP</a>
                    <a href="/solutions/wind-hybrid" className="hover:text-[#9FE870] transition-colors">Wind & Hybrid Parks</a>
                    <a href="/solutions/utilities-discoms" className="hover:text-[#9FE870] transition-colors">Utilities & DISCOMS</a>
                    <a href="/solutions/industrial-captive" className="hover:text-[#9FE870] transition-colors">Industrial & Captive Power</a>
                  </div>
                </div>

                {/* Column 2: What You Get */}
                <div className="flex-1 px-8 border-r border-white/5">
                  <h3 className="text-white text-sm font-bold tracking-[2px] mb-6 flex items-center gap-2"><Shield className="w-4 h-4 text-[#9FE870]" /> ORNET ADVANTAGE</h3>
                  <div className="flex flex-col gap-4 font-mono text-[11px] text-gray-400">
                    <a href="/solutions/solar-utility-ipp#delivery" className="hover:text-white transition-colors">Faster commissioning & logistics</a>
                    <a href="/solutions#reliability" className="hover:text-white transition-colors">Zero-failure field performance</a>
                    <a href="/solutions/solar-utility-ipp#idts" className="hover:text-white transition-colors">Pre-tested IDTs for extreme climates</a>
                    <a href="/solutions#engineering-support" className="hover:text-white transition-colors">Engineering support & site services</a>
                  </div>
                </div>

                {/* Column 3: Featured Project */}
                <div className="flex-[1.2] pl-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/5 h-full flex flex-col justify-between">
                    <div>
                      <span className="bg-[#9FE870]/20 text-[#9FE870] px-2 py-1 rounded text-[9px] mb-4 inline-block">FLAGSHIP PROJECT</span>
                      <h4 className="text-lg text-white font-bold leading-tight mb-2 capitalize normal-case tracking-normal">Adani Khavda Hybrid Park</h4>
                      <p className="text-gray-400 normal-case tracking-normal font-sans text-sm font-light mb-6">Largest IDT deployment powering the world's biggest renewable energy park.</p>
                      <a href="/projects-customers#khavda" className="text-[#9FE870] normal-case tracking-normal font-sans text-sm flex items-center gap-2 hover:gap-3 transition-all">View case study <ArrowRight className="w-4 h-4"/></a>
                    </div>
                    <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3 normal-case tracking-normal font-sans text-sm text-gray-400">
                      <a href="/projects-customers" className="hover:text-white transition-colors">View all reference projects →</a>
                      <a href="/contact#engineering" className="hover:text-white transition-colors">Talk to an engineering expert →</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Mfg Dropdown */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Manufacturing & Quality <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-[#1a1d1d] border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1">
                <a href="/manufacturing-quality#facilities" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Manufacturing Facilities</a>
                <a href="/manufacturing-quality#testing" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Testing & Certifications</a>
                <a href="/manufacturing-quality#digital" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Digital Backbone</a>
              </div>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Projects & Customers <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-[#1a1d1d] border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1">
                <a href="/projects-customers#customers" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Major Customers</a>
                <a href="/projects-customers#projects" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Project Portfolio</a>
                <a href="/projects-customers#map" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Map of Installations</a>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Resources <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-[#1a1d1d] border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1">
                <a href="/resources" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors flex items-center gap-2"><Download className="w-4 h-4"/> Download Centre</a>
                <a href="/resources#catalogs" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Product Catalogs</a>
                <a href="/resources#test-reports" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Type Test & CPRI Reports</a>
                <a href="/resources#company-profile" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors flex items-center gap-2"><FileText className="w-4 h-4"/> Company Profile</a>
                <a href="/resources#policies" className="px-4 py-3 hover:bg-white/5 rounded-lg text-white transition-colors">Policies & Vendor Docs</a>
              </div>
            </div>
          </div>

          <a href="/careers" className="hover:text-white transition-colors">Careers</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-10 shrink-0">
          <a
            href="/contact"
            className="hidden lg:inline-flex bg-[#9FE870] hover:bg-[#b7ff8d] text-black px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[2px] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(159,232,112,0.2)] hover:shadow-[0_0_30px_rgba(159,232,112,0.4)]"
          >
            Contact
          </a>

          <button
            className="xl:hidden text-white p-2 cursor-pointer bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-[#121414] overflow-y-auto pointer-events-auto flex flex-col animate-fade-in">
          <div className="flex justify-between items-center p-6 sm:p-8 border-b border-white/10 sticky top-0 bg-[#121414]/90 backdrop-blur-xl z-10">
            <img src="/logo.png" alt="Ornet Transformers" className="h-8 w-auto" />
            <button
              onClick={() => setOpen(false)}
              className="text-white p-3 cursor-pointer bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col py-6 px-6 sm:px-8 text-white">
            <a href="/" className="py-4 text-xl font-light uppercase tracking-[2px] border-b border-white/5">Home</a>
            
            <div className="border-b border-white/5">
              <button onClick={() => toggleMobileMenu('about')} className="w-full py-4 flex items-center justify-between text-xl font-light uppercase tracking-[2px]">
                About <ChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen === 'about' ? 'rotate-180 text-[#9FE870]' : ''}`} />
              </button>
              {mobileMenuOpen === 'about' && (
                <div className="pb-4 pl-4 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-gray-400">
                  <a href="/about" className="hover:text-[#9FE870]">Ornet Group</a>
                  <a href="/about/leadership" className="hover:text-[#9FE870]">Leadership</a>
                  <a href="/about/life-at-ornet" className="hover:text-[#9FE870]">Life at Ornet</a>
                  <a href="/about#mission-vision" className="hover:text-[#9FE870]">Mission & Vision</a>
                </div>
              )}
            </div>

            <div className="border-b border-white/5">
              <button onClick={() => toggleMobileMenu('products')} className="w-full py-4 flex items-center justify-between text-xl font-light uppercase tracking-[2px]">
                Products <ChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen === 'products' ? 'rotate-180 text-[#9FE870]' : ''}`} />
              </button>
              {mobileMenuOpen === 'products' && (
                <div className="pb-4 pl-4 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider text-gray-400">
                  <div className="text-[#9FE870] font-bold">By Product Family</div>
                  <a href="/products/distribution-transformers" className="hover:text-white">Distribution Transformers</a>
                  <a href="/products/power-transformers" className="hover:text-white">Power Transformers</a>
                  <a href="/products/solar-inverter-duty-transformers" className="hover:text-white">Solar IDTs</a>
                  <a href="/products/wind-transformers" className="hover:text-white">Wind / WTG Transformers</a>
                  <div className="text-[#9FE870] font-bold mt-2">By Voltage Class</div>
                  <a href="/products?kv=33" className="hover:text-white">Up to 33 kV</a>
                  <a href="/products?kv=132" className="hover:text-white">132 kV Class</a>
                </div>
              )}
            </div>

            <div className="border-b border-white/5">
              <button onClick={() => toggleMobileMenu('solutions')} className="w-full py-4 flex items-center justify-between text-xl font-light uppercase tracking-[2px]">
                Solutions <ChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen === 'solutions' ? 'rotate-180 text-[#9FE870]' : ''}`} />
              </button>
              {mobileMenuOpen === 'solutions' && (
                <div className="pb-4 pl-4 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider text-gray-400">
                  <a href="/solutions/solar-utility-ipp" className="hover:text-white">Solar Utility & IPP</a>
                  <a href="/solutions/wind-hybrid" className="hover:text-white">Wind & Hybrid Parks</a>
                  <a href="/solutions/utilities-discoms" className="hover:text-white">Utilities & DISCOMS</a>
                  <a href="/solutions/industrial-captive" className="hover:text-white">Industrial & Captive</a>
                </div>
              )}
            </div>

            <a href="/manufacturing-quality" className="py-4 text-xl font-light uppercase tracking-[2px] border-b border-white/5">Manufacturing</a>
            <a href="/projects-customers" className="py-4 text-xl font-light uppercase tracking-[2px] border-b border-white/5">Projects</a>
            <a href="/resources" className="py-4 text-xl font-light uppercase tracking-[2px] border-b border-white/5">Resources</a>
            <a href="/careers" className="py-4 text-xl font-light uppercase tracking-[2px] border-b border-white/5">Careers</a>

            <div className="mt-8 mb-12">
              <a
                href="/contact"
                className="block text-center bg-[#9FE870] text-black px-8 py-4 rounded-full text-sm uppercase tracking-[2px] font-bold"
              >
                Talk to Engineering
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}


