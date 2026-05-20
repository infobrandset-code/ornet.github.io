import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const products = [
    { label: "Power Transformers", href: "#products" },
    { label: "Solar Inverter-Duty", href: "#products" },
    { label: "Distribution Transformers", href: "#products" },
    { label: "Compact Substations (CSS)", href: "#products" },
  ];

  const industries = [
    { label: "Solar IPPs / EPC", href: "#solutions" },
    { label: "Wind WTG Developers", href: "#solutions" },
    { label: "DISCOMs & Utilities", href: "#solutions" },
    { label: "Continuous Process Plants", href: "#solutions" },
  ];

  const resources = [
    { label: "Company Profile (PDF)", href: "#" },
    { label: "CPRI Test Certificates", href: "#validation" },
    { label: "Production Facilities", href: "#manufacturing" },
    { label: "B2B spec contact", href: "#contact" },
  ];

  const certifications = [
    { label: "Bureau Veritas ISO 9001", href: "#validation" },
    { label: "BIS Approved (IS 1180)", href: "#validation" },
    { label: "IEC 60076 Standard", href: "#validation" },
  ];

  return (
    <footer className="border-t border-[#232727] bg-gradient-to-b from-[#121414] to-[#0F1111]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-20 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-14 lg:gap-20">
            <div className="sm:col-span-2 lg:col-span-2">
              <img
                src="/ornet.github.io/logo.png"
                alt="Ornet Transformers"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <p className="mt-8 md:mt-10 text-[#A6ABA6] text-sm sm:text-base leading-[1.9] max-w-[400px] font-light">
                ISO 9001:2015 certified manufacturer of high-voltage
                transmission, distribution, and specialty renewable energy grid
                transformers. Delivering zero-failure operational lifetimes.
              </p>
              <a
                href="#contact"
                className="mt-8 md:mt-10 inline-flex items-center gap-2 text-[#9FE870] hover:text-white text-sm uppercase tracking-[2.5px] font-semibold transition-all duration-500 ease-out group"
              >
                Contact Our Engineers
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-400"
                  strokeWidth={2}
                />
              </a>
            </div>

            <div>
              <h3 className="text-[#9FE870] uppercase tracking-[4px] text-[12px] mb-8 md:mb-10 font-semibold">
                Products
              </h3>
              <ul className="space-y-4 md:space-y-5 text-[#C2C7C2]">
                {products.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block hover:text-white transition-all duration-500 ease-out text-sm sm:text-base relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[#9FE870] after:transition-all after:duration-400 after:ease-out hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#9FE870] uppercase tracking-[4px] text-[12px] mb-8 md:mb-10 font-semibold">
                Industries
              </h3>
              <ul className="space-y-4 md:space-y-5 text-[#C2C7C2]">
                {industries.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block hover:text-white transition-all duration-500 ease-out text-sm sm:text-base relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[#9FE870] after:transition-all after:duration-400 after:ease-out hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#9FE870] uppercase tracking-[4px] text-[12px] mb-8 md:mb-10 font-semibold">
                Resources
              </h3>
              <ul className="space-y-4 md:space-y-5 text-[#C2C7C2]">
                {resources.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block hover:text-white transition-all duration-500 ease-out text-sm sm:text-base relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[#9FE870] after:transition-all after:duration-400 after:ease-out hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#9FE870] uppercase tracking-[4px] text-[12px] mb-8 md:mb-10 font-semibold">
                Certifications
              </h3>
              <ul className="space-y-4 md:space-y-5 text-[#C2C7C2]">
                {certifications.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block hover:text-white transition-all duration-500 ease-out text-sm sm:text-base relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[#9FE870] after:transition-all after:duration-400 after:ease-out hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 md:mt-20 flex flex-col xl:flex-row items-start xl:items-center gap-6 xl:gap-8 p-8 sm:p-10 border border-[#2A2F2F] bg-[#151818]">
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-5 xl:gap-8 text-[#C2C7C2] text-sm flex-1">
              <div className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="text-[#9FE870] shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-light text-xs sm:text-sm">
                  Medha / Borisana, Kadi Highway, Mehsana, Gujarat, India
                </span>
              </div>
              <span className="hidden xl:inline text-[#2D3232]">|</span>
              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#9FE870] shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:engineering@ornettransformers.com"
                  className="hover:text-white transition-colors duration-400 font-light text-xs sm:text-sm"
                >
                  engineering@ornettransformers.com
                </a>
              </div>
              <span className="hidden xl:inline text-[#2D3232]">|</span>
              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[#9FE870] shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="tel:+919879848856"
                  className="hover:text-white transition-colors duration-400 font-light text-xs sm:text-sm"
                >
                  +91 98798 48856
                </a>
              </div>
            </div>
            <div className="xl:ml-auto shrink-0 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-[#2D3232] hover:border-[#9FE870] flex items-center justify-center text-[#9FE870] hover:text-white hover:-translate-y-1 transition-all duration-500 ease-out"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pb-12 md:pb-14 pt-8 md:pt-10 border-t border-[#232727] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[#7D837D] text-sm">
          <p>
            © {new Date().getFullYear()} Ornet Transformers Pvt. Ltd. Part of
            Ornet Group. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4 uppercase tracking-[2.5px] text-[12px]">
            <a
              href="#"
              className="hover:text-white transition-all duration-500 ease-out relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[#9FE870] after:transition-all after:duration-400 after:ease-out hover:after:w-full"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-all duration-500 ease-out relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[#9FE870] after:transition-all after:duration-400 after:ease-out hover:after:w-full"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
