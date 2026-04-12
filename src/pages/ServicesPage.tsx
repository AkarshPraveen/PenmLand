import Navbar from '../components/Navbar';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesCTA from '../components/services/ServicesCTA';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col bg-surface">
      <Navbar />
      <main className="md:pt-0 pt-0 pb-0">
        <ServicesHero />
        <ServicesList />
        <ServicesCTA />
      </main>
      <Footer />
      
      {/* Mobile only Sticky Bottom Navigation Bar (Same as home page but re-declared or exported) 
          For exact parity I will add the specific mobile bottom bar here 
      */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-xl shadow-[0px_-10px_30px_rgba(11,44,107,0.06)] rounded-t-[2.5rem] border-t border-slate-100">
        <a className="flex flex-col items-center justify-center text-[#0B2C6B] px-8 py-2 active:scale-95 transition-transform tap-highlight-none" href="tel:1234567890">
          <span className="material-symbols-outlined mb-1" data-icon="call">call</span>
          <span className="font-label text-[9px] font-bold uppercase tracking-widest">Call</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#0B2C6B] text-white rounded-2xl px-8 py-2 active:scale-95 transition-transform shadow-lg shadow-blue-900/20 tap-highlight-none" href="https://wa.me/1234567890">
          <span className="material-symbols-outlined mb-1" data-icon="chat" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          <span className="font-label text-[9px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
      </nav>

      {/* FAB - Edit Note for Mobile specific to Services page */}
      <button className="md:hidden fixed bottom-28 right-6 w-14 h-14 bg-[#1FC28A] text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
      </button>
    </div>
  );
}
