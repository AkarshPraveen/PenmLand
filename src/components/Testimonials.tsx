import { useState, useRef } from "react";

type TestimonialCardProps = {
  rating: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  className?: string; // For layout specific translations e.g. translate-y
};

function TestimonialCard({ rating, quote, authorName, authorTitle, authorImage, className = "" }: TestimonialCardProps) {
  return (
    <div className={`p-10 rounded-xl bg-surface-container-lowest ambient-shadow text-left ${className}`}>
      <div className="flex justify-start gap-1 text-secondary mb-6">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        ))}
      </div>
      <p className="text-on-surface-variant italic mb-10 leading-relaxed text-lg">"{quote}"</p>
      <div className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img alt={authorName} className="w-full h-full object-cover" src={authorImage} />
        </div>
        <div className="text-left">
          <p className="font-bold text-primary">{authorName}</p>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      quote: "The level of intentionality in their design process is unparalleled. They crafted an environment that feels alive.",
      authorName: "Julian Thorne",
      authorTitle: "CEO, Thorne Ventures",
      authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkCyzgLBMlHqPfOHe-NIbzsLPH7WijZnzbKSv_zIHhJO0cng2BJCxHtJWzbtW_apner2j0m9nI1Mldb0eGAMZ29VlGiXe03XpXDFZd6M2BvuATva57l0bvHRHKAgzLkvAItUaquM-TEFw9Wj33TYYKoj7dqB0dlpoxy13N21fIkJHGsxKY01Ap-6h7Qv51PEV69L5TP4-L70p8QRfGnCihWUroEnfd0P5uxd6OjvGhfCMkB8ruHllapERmW6DR5PmrXgb1PWf-hG_M"
    },
    {
      rating: 5,
      quote: "Penm'Land Property delivers projects with the precision of a Swiss watch. The gold standard of the industry.",
      authorName: "Elena Rodriguez",
      authorTitle: "Urban Planning Lab",
      authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS70OE06aVZQYT7FJqHcNi2elpjmxgjigqrEkaoyjeoA9pQX5XuR6E2YihKylrozhPJ0LU30aE9HBP-Ul0rxoQJY1v7B6ZiMLeT6DD9V3Oaa3CQ32Gyby-DIP5P1UlZBgsBYi83PO841I0ziaqqQaRQbvIA0pekP43mLv9lsTZ9TGZLTrbrEeKWRl1qv9Oj2J0ceFi96cUnT5gWoOdhunkkzzX3ZHRii5tB3TlylcRcB5COGn0XRUpIdhdK3EQG72J7jm5euD6eRcZ",
      className: "md:translate-y-8"
    },
    {
      rating: 5,
      quote: "A rare combination of technical engineering excellence and high-end artistic vision. Only builders we trust.",
      authorName: "Marcus Sterling",
      authorTitle: "Sterling Real Estate",
      authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi9y4nmuIAXNXlABuwDCJOgMDiLeRlL4KpZia5w3_W0qPOLkVxOKDfkxXNp9FR48SUbQS-9sFx34lPkFpQZSGZPRfz31uQ5pVTzYb2PLhFZVHrX-1Y-QhvKNeWG3El0ptdHHvRx3BRNXK81VXQjPXgA-38frb0katMSZA641ZA393hZT496Ajgy64nsUAOS1OuZ5TSXn9oy0aVhonKoUXVjCP4dF5z7hzhhqRQ55lWzVCFComMWLEptiWUx6Jm_iKyyLfNSXajlUDa"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const centerLine = container.scrollTop + container.clientHeight / 2;

    let closest = 0;
    let minDiff = Infinity;
    const items = container.querySelectorAll('.testimonial-item');
    
    items.forEach((item, index) => {
      const el = item as HTMLElement;
      // offsetTop is relative to the container since it's position:relative
      const itemCenter = el.offsetTop + el.clientHeight / 2;
      const diff = Math.abs(centerLine - itemCenter);
      
      if (diff < minDiff) {
        minDiff = diff;
        closest = index;
      }
    });

    if (activeIndex !== closest) {
      setActiveIndex(closest);
    }
  };

  return (
    <section className="py-16 md:py-32 px-6 md:px-0 bg-surface">
      <div className="max-w-[1920px] mx-auto md:px-12">
        <h2 className="text-2xl md:text-4xl font-headline font-bold text-primary text-center mb-10 md:mb-20">The Voice of Trust</h2>
        
        {/* Desktop View: Horizontal Snap Scroll without animation */}
        <div className="hidden md:flex overflow-x-auto snap-x snap-mandatory w-full pb-12 hide-scrollbar">
          <div className="flex gap-8 px-[10vw]">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-shrink-0 w-[400px] lg:w-[450px] xl:w-[25vw] snap-center">
                <TestimonialCard {...t} className="h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Vertical Snap Scroll with Dynamic Blur */}
        <div 
          className="flex md:hidden flex-col items-center relative w-full h-[450px] overflow-y-auto snap-y snap-mandatory hide-scrollbar no-scrollbar"
          ref={containerRef}
          onScroll={handleScroll}
        >
          <div className="w-full flex flex-col gap-6" style={{ padding: "120px 0" }}>
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div 
                  key={idx} 
                  className={`testimonial-item snap-center w-full transition-all duration-500 ease-out flex-shrink-0
                    ${isActive 
                      ? "p-6 rounded-xl bg-surface-container-lowest ambient-shadow z-10 border border-outline-variant/10 scale-100 opacity-100 blur-none aspect-auto min-h-[160px]" 
                      : "p-4 rounded-xl bg-surface-container-lowest/50 scale-90 opacity-60 blur-[2px] aspect-[21/9]"
                    }`}
                >
                  <div className="flex items-center gap-4 w-full h-full">
                    {isActive ? (
                      <>
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-fixed">
                          <img alt={t.authorName} className="w-full h-full object-cover" src={t.authorImage} />
                        </div>
                        <div className="flex-1 overflow-hidden flex flex-col justify-center">
                          <div className="flex gap-0.5 text-secondary mb-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            ))}
                          </div>
                          <p className="text-xs text-on-surface-variant italic line-clamp-2 leading-tight">"{t.quote}"</p>
                          <div className="mt-2">
                            <p className="font-bold text-primary text-[11px]">{t.authorName}</p>
                            <p className="text-[9px] text-on-surface-variant uppercase tracking-widest font-medium">{t.authorTitle}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img alt={t.authorName} className="w-full h-full object-cover" src={t.authorImage} />
                        </div>
                        <div className="flex-1 overflow-hidden flex flex-col justify-center">
                          <p className="text-[10px] text-on-surface-variant italic line-clamp-2">"{t.quote}"</p>
                          <p className="font-bold text-primary text-[10px] mt-1">{t.authorName}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

