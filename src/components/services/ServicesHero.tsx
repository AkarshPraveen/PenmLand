export default function ServicesHero() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:block max-w-[1920px] mx-auto px-12 mb-20 text-center pt-32">
        <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
          Comprehensive Solutions
        </span>
        <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-primary-container leading-tight tracking-tight mb-6">
          Integrated Property<br />Excellence.
        </h2>
        <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl mx-auto">
          From structural engineering to interior aesthetics and legal compliance, we provide a full-spectrum approach to modern property development.
        </p>
      </section>

      {/* Mobile View */}
      <section className="md:hidden relative min-h-[500px] flex items-center justify-center overflow-hidden px-6 text-center bg-primary-container mt-14">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0B2C6B]/60 z-10"></div>
          <img
            alt="Architectural drawing"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrBgt7acI7lwiZMo8DUzsFpgoDjEer1-vxR-JFRnBmxpkWXsWK5jOqyXgvRcSsNalj2_7lCIeJKdtard0D85H3hkWHbzZ7BJbtysfh8QHSGwct4cctD8NvOiZuq38RwTK7bXnvD1q4L2sJKsLhuuD4Zve5Yj9Ig8qcE10rKcgx-lpSZDoD2L3YmCm4pEG4Jc4rTGAsev9ryZ_6FLtnHWLxN_baHaWsZYFiZuvAX1No59q8cWvWz5CO7VGEcRfJNqK_5VmqbKkItELu"
          />
        </div>
        <div className="relative z-20">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block font-bold">
            Comprehensive Solutions
          </span>
          <h2 className="font-headline text-4xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Integrated Property<br />Excellence.
          </h2>
          <p className="text-white/80 text-base leading-relaxed max-w-xs mx-auto">
            From structural engineering to interior aesthetics and legal compliance, we provide a full-spectrum approach to modern property development.
          </p>
        </div>
      </section>
    </>
  );
}
