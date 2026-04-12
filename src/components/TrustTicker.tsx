export default function TrustTicker() {
  const items = [
    { icon: 'check_circle', text: '20+ Projects Completed' },
    { icon: 'history', text: '5+ Years Experience' },
    { icon: 'architecture', text: 'Architectural Excellence' }
  ];

  return (
    <section className="bg-surface-container-highest py-10 md:py-12 overflow-hidden">
      <div className="max-w-[1920px] mx-auto md:px-12">
        <p className="text-center font-headline text-[10px] tracking-widest uppercase text-on-surface-variant mb-6 md:mb-10 font-bold px-6 md:px-0">
          Achievements & Recognitions
        </p>
        <div className="flex md:flex-wrap md:justify-center items-center opacity-70 w-full overflow-hidden">
          <div className="mobile-marquee flex px-6 md:px-0">
            {/* Original items */}
            <div className="flex gap-12 md:gap-16 items-center pr-12 md:pr-16">
              {items.map((item, index) => (
                <div key={`orig-${index}`} className="flex-shrink-0 flex items-center gap-2 font-bold text-lg md:text-2xl text-primary whitespace-nowrap">
                  <span className="material-symbols-outlined">{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
            {/* Duplicated items for infinite marquee on mobile */}
            <div className="flex md:hidden gap-12 items-center pr-12" aria-hidden="true">
              {items.map((item, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 flex items-center gap-2 font-bold text-lg text-primary whitespace-nowrap">
                  <span className="material-symbols-outlined">{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
