export default function FloatingActions() {
  return (
    <>
      {/* Desktop View: Floating Actions */}
      <div className="hidden md:flex fixed bottom-12 right-12 flex-col gap-4 z-50">
        <a
          className="bg-white p-4 rounded-full shadow-xl text-[#0B2C6B] hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
          href="tel:1234567890"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
        </a>
        <a
          className="editorial-gradient p-4 rounded-full shadow-xl text-white hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
          href="https://wa.me/1234567890"
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            chat
          </span>
        </a>
      </div>

      {/* Mobile View: Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-xl shadow-[0px_-10px_30px_rgba(11,44,107,0.1)] rounded-t-xl border-t border-slate-200/20">
        <a className="flex flex-col items-center justify-center text-[#0B2C6B] px-8 py-2 active:scale-95 transition-transform" href="tel:1234567890">
          <span className="material-symbols-outlined" data-icon="call">call</span>
          <span className="font-bold text-[10px] uppercase tracking-widest mt-1">Call</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#0B2C6B] text-white rounded-lg px-8 py-2 active:scale-95 transition-transform" href="https://wa.me/1234567890">
          <span className="material-symbols-outlined" data-icon="chat" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          <span className="font-bold text-[10px] uppercase tracking-widest mt-1">WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
