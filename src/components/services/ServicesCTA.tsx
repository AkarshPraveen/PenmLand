export default function ServicesCTA() {
  return (
    <>
      {/* Desktop CTA */}
      <section className="hidden md:block max-w-[1920px] mx-auto px-12 mb-24">
        <div className="bg-primary-container rounded-3xl py-20 px-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-24"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to break ground on your next landmark?
            </h2>
            <p className="text-on-primary-container text-lg mb-10 opacity-80">
              Partner with Penm'Land Properties for architectural excellence that stands the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-secondary text-white px-10 py-5 rounded-xl font-headline font-bold text-sm tracking-widest transition-transform hover:scale-105 active:scale-95">
                CONSULT OUR TEAM
              </button>
              <button className="border border-white/20 text-white px-10 py-5 rounded-xl font-headline font-bold text-sm tracking-widest hover:bg-white/10 transition-colors">
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile CTA */}
      <section className="md:hidden mt-8 mx-6 bg-primary-container rounded-[2.5rem] p-10 text-center relative overflow-hidden shadow-2xl shadow-blue-900/30">
        <div className="absolute top-0 right-0 w-32 h-full bg-[#1FC28A]/10 -skew-x-12 translate-x-12"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-2xl font-bold text-white mb-4 leading-tight">
            Ready to break ground on your next landmark?
          </h2>
          <p className="text-white/70 text-sm mb-10 leading-relaxed">
            Partner with Penm'Land Properties for architectural excellence that stands the test of time.
          </p>
          <div className="flex flex-col gap-4">
            <button className="bg-secondary text-white py-4 rounded-xl font-headline font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform">
              CONSULT OUR TEAM
            </button>
            <button className="border border-white/30 text-white py-4 rounded-xl font-headline font-bold text-[10px] uppercase tracking-[0.2em] active:bg-white/10 transition-colors">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
