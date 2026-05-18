import React, { useState } from "react";
import { CONTACT } from "../../data/constants";
import ElectricCard from "../ui/ElectricCard";
import SectionHeading from "../ui/SectionHeading";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    application: "Solar Inverter-Duty",
    capacity: "6.25 MVA - 12.5 MVA",
    winding: "High-Grade Copper (Cu)",
    voltage: "33 kV System",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        application: "Solar Inverter-Duty",
        capacity: "6.25 MVA - 12.5 MVA",
        winding: "High-Grade Copper (Cu)",
        voltage: "33 kV System",
        notes: ""
      });
    }, 4500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-[#121414] py-24 sm:py-32 lg:py-40 border-t border-[#232727] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: "radial-gradient(#9FE870 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeading
          tagline="B2B ENGINEERING INTAKE"
          headline={CONTACT.headline}
          description={CONTACT.description}
          wide
        />

        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 xl:gap-20 items-start">
          {/* Left Panel: Corporate Addresses & Channels */}
          <div className="space-y-8">
            <ElectricCard size={36} thickness={1.5} className="p-8 bg-[#151818]" hoverGlow={false}>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-6">Direct Channels</h3>
              <div className="space-y-6">
                {CONTACT.channels.map((ch, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-sm bg-[#1A1D1D] border border-[#2A2F2F] flex items-center justify-center text-[#9FE870] shrink-0">
                      {idx === 0 ? <Mail size={16} /> : <Phone size={16} />}
                    </div>
                    <div>
                      <p className="text-[10px] text-[#A6ABA6] tracking-wider uppercase font-mono">{ch.title}</p>
                      {idx === 0 ? (
                        <a href={`mailto:${ch.value}`} className="text-white hover:text-[#9FE870] transition-colors duration-300 font-mono text-sm mt-1 block">
                          {ch.value}
                        </a>
                      ) : (
                        <a href={`tel:${ch.value.replace(/\s+/g, "")}`} className="text-white hover:text-[#9FE870] transition-colors duration-300 font-mono text-sm mt-1 block">
                          {ch.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ElectricCard>

            <ElectricCard size={36} thickness={1.5} className="p-8 bg-[#151818]" hoverGlow={false}>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-6">Manufacturing Plants</h3>
              <div className="space-y-6">
                {CONTACT.addresses.map((addr, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-sm bg-[#1A1D1D] border border-[#2A2F2F] flex items-center justify-center text-[#9FE870] shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="text-white text-xs font-mono uppercase tracking-wider font-semibold">{addr.name}</h4>
                      <p className="text-xs text-[#A6ABA6] font-light leading-relaxed mt-1.5">{addr.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ElectricCard>
          </div>

          {/* Right Panel: Spec-builder Form */}
          <ElectricCard size={48} thickness={2} className="p-8 sm:p-12 lg:p-14 bg-[#151818]">
            {submitted ? (
              <div className="min-h-[450px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#9FE870]/10 border border-[#9FE870]/20 flex items-center justify-center text-[#9FE870] mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-3">Specification Log Transmitted</h3>
                <p className="text-sm text-[#A6ABA6] max-w-[480px] font-light leading-relaxed mb-6">
                  Thank you. Your mechanical requirements have been compiled into a secure parameter log and dispatched directly to our Chief Technical Architect's desk.
                </p>
                <div className="bg-[#1C1F1F] border border-[#2D3232] p-5 text-left font-mono text-[11px] text-[#9FE870] w-full max-w-[440px] rounded-sm">
                  <p className="border-b border-[#2D3232] pb-1.5 mb-2 font-bold">TRANSMISSION SUMMARY:</p>
                  <p>APPLICATION: {formData.application}</p>
                  <p>CAPACITY: {formData.capacity}</p>
                  <p>VOLTAGE CLASS: {formData.voltage}</p>
                  <p>WINDING MATERIAL: {formData.winding}</p>
                  <p className="mt-2 text-[10px] text-[#7D837D]">STATUS: ARCHITECT ASSIGNED</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight border-b border-[#232727] pb-4">
                  Compile Engineering Specification
                </h3>

                {/* Personal Info fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase mb-2">Contact Name *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light"
                      placeholder="e.g. Narendra Patel"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase mb-2">Company Name *</label>
                    <input
                      required
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light"
                      placeholder="e.g. Torrent Power Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase mb-2">Engineering Email *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light font-mono"
                      placeholder="e.g. npatel@torrent.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase mb-2">Direct Phone *</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light font-mono"
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                </div>

                {/* Specs Choice fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#232727]">
                  <div>
                    <label htmlFor="application" className="block text-[10px] text-[#9FE870] font-mono tracking-widest uppercase mb-2">System Application</label>
                    <select
                      id="application"
                      name="application"
                      value={formData.application}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light"
                    >
                      {CONTACT.specBuilder.applications.map((app) => (
                        <option key={app} value={app} className="bg-[#151818]">{app}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="capacity" className="block text-[10px] text-[#9FE870] font-mono tracking-widest uppercase mb-2">Transformer Rating</label>
                    <select
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light"
                    >
                      {CONTACT.specBuilder.ratings.map((rate) => (
                        <option key={rate} value={rate} className="bg-[#151818]">{rate}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="winding" className="block text-[10px] text-[#9FE870] font-mono tracking-widest uppercase mb-2">Winding Material</label>
                    <select
                      id="winding"
                      name="winding"
                      value={formData.winding}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light"
                    >
                      {CONTACT.specBuilder.windings.map((wind) => (
                        <option key={wind} value={wind} className="bg-[#151818]">{wind}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="voltage" className="block text-[10px] text-[#9FE870] font-mono tracking-widest uppercase mb-2">Primary Voltage Class</label>
                    <select
                      id="voltage"
                      name="voltage"
                      value={formData.voltage}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light"
                    >
                      {CONTACT.specBuilder.voltages.map((volt) => (
                        <option key={volt} value={volt} className="bg-[#151818]">{volt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-[10px] text-[#A6ABA6] font-mono tracking-widest uppercase mb-2">Technical Requirements / Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-[#1A1D1D] border border-[#2D3232] focus:border-[#9FE870] focus:outline-none p-3.5 text-sm text-white font-light"
                    placeholder="Describe specific dielectric conditions, ambient desert/marine temperatures, harmonics, or auxiliary switchgear requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9FE870] hover:bg-[#b7ff8d] text-black font-semibold text-xs tracking-[2px] uppercase py-4.5 sm:py-5 flex items-center justify-center gap-3 transition-all duration-500 ease-out cursor-pointer hover:-translate-y-0.5 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/25"
                >
                  <Send size={15} />
                  Transmit Technical Log
                </button>
              </form>
            )}
          </ElectricCard>
        </div>
      </div>
    </section>
  );
}
