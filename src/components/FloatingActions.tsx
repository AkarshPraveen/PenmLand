export default function FloatingActions() {
  return (
    <>
      {/* Mobile only Sticky Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-xl shadow-[0px_-10px_30px_rgba(11,44,107,0.06)] rounded-t-[1.5rem] border-t border-slate-100">
        <a className="flex flex-col items-center justify-center text-[#0B2C6B] px-8 py-2 active:scale-95 transition-transform tap-highlight-none" href="tel:1234567890">
          <span className="material-symbols-outlined mb-1 text-primary-container" data-icon="call">call</span>
          <span className="font-label text-[9px] font-bold uppercase tracking-widest text-[#0B2C6B]">Call</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#0B2C6B] text-white rounded-2xl px-8 py-2 active:scale-95 transition-transform shadow-lg shadow-blue-900/20 tap-highlight-none" href="https://wa.me/1234567890">
          <span className="material-symbols-outlined mb-1" data-icon="chat" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          <span className="font-label text-[9px] font-bold uppercase tracking-widest text-white">WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
