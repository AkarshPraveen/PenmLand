export default function CTA() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 md:px-12 pb-20 md:pb-32 bg-surface">
      <div className="editorial-gradient rounded-[2.5rem] p-10 md:p-24 text-center relative overflow-hidden ambient-shadow">
        <div className="relative z-10 w-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white mb-6 md:mb-8">Ready to Build Your Legacy?</h2>
          <p className="text-white/80 text-sm md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Connect with our lead architects to discuss your upcoming project and receive a tailored <span className="md:hidden">structural </span>consultation.
          </p>
          <button className="bg-secondary text-on-primary md:text-[#002114] w-full sm:w-auto font-bold px-8 md:px-12 py-4 md:py-5 rounded-lg md:rounded-xl text-sm md:text-lg hover:scale-105 active:scale-95 transition-transform duration-300">
            Begin Your Consultation
          </button>
        </div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </section>
  );
}
