import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Proof from "./components/sections/Proof";
import Products from "./components/sections/Products";
import Solutions from "./components/sections/Solutions";
import Deployments from "./components/sections/Deployments";
import Industries from "./components/sections/Industries";
import Manufacturing from "./components/sections/Manufacturing";
import Validation from "./components/sections/Validation";
import CultureCSR from "./components/sections/CultureCSR";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#121414] text-white selection:bg-[#9FE870] selection:text-black overflow-x-hidden antialiased font-sans">
      {/* Sticky navigation bar */}
      <Navbar />

      {/* Main content blocks */}
      <main className="relative z-10">
        {/* Section 1: Hero banner */}
        <Hero />

        {/* Section 2: Financial Strength and Khavda Proof of Traction */}
        <Proof />

        {/* Section 3: High-Voltage Transformer Products */}
        <Products />

        {/* Section 4: Grid Solutions tabs */}
        <Solutions />

        {/* Section 4.5: Grid Deployments and Clientele */}
        <Deployments />

        {/* Section 4.8: Industries Empowered */}
        <Industries />

        {/* Section 5: Plant Manufacturing and timeline milestones */}
        <Manufacturing />

        {/* Section 6: Quality Type-Test Verification and Labs */}
        <Validation />

        {/* Section 7: Corporate People and CSR Programs */}
        <CultureCSR />

        {/* Section 8: Direct Contact & specification builder */}
        <ContactForm />
      </main>

      {/* Multi-column corporate footer */}
      <Footer />
    </div>
  );
}
