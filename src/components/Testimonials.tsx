import { useState, useRef, useEffect } from "react";
import { type TestimonialData, testimonialsData as testimonials } from '../data/testimonials';

function TestimonialCard({ rating, quote, authorName, authorTitle, authorImage, className = "" }: TestimonialData) {
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

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // For pausing autoscroll during manual touch
  const isTouchingRef = useRef(false);
  const touchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = () => {
    isTouchingRef.current = true;
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    touchTimeoutRef.current = setTimeout(() => {
      isTouchingRef.current = false;
    }, 4000);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const centerLine = container.scrollTop + container.clientHeight / 2;

    let closest = 0;
    let minDiff = Infinity;
    const items = container.querySelectorAll('.testimonial-item');

    items.forEach((item, index) => {
      const el = item as HTMLElement;
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

  // Continuous loop Auto-scroll effect
  useEffect(() => {
    // Only apply on mobile where the view is actually used
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    let animationId: number;
    let lastTime = performance.now();
    let accumulatedScroll = 0;

    const scrollLoop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isTouchingRef.current && containerRef.current) {
        const container = containerRef.current;
        // Adjust speed here (pixels per millisecond)
        accumulatedScroll += 0.06 * delta;

        if (accumulatedScroll >= 1) {
          const scrollAmount = Math.floor(accumulatedScroll);
          container.scrollTop += scrollAmount;
          accumulatedScroll -= scrollAmount;

          const items = container.querySelectorAll('.testimonial-item');
          if (items.length > testimonials.length) {
            const firstSetStart = items[0] as HTMLElement;
            const secondSetStart = items[testimonials.length] as HTMLElement;
            // The exact distance between identical items in set 1 and set 2
            const distanceToLoop = secondSetStart.offsetTop - firstSetStart.offsetTop;

            // Loop back seamlessly
            if (container.scrollTop >= distanceToLoop) {
              container.scrollTop -= distanceToLoop;
            }
          }
        }
      }
      animationId = requestAnimationFrame(scrollLoop);
    };

    animationId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationId);
  }, [testimonials.length]);

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

        {/* Mobile View: Continuous Smooth Scroll with Dynamic Blur */}
        <div
          className="flex md:hidden flex-col items-center relative w-full h-[350px] overflow-y-auto hide-scrollbar no-scrollbar"
          ref={containerRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div className="w-full flex flex-col gap-1" style={{ padding: "120px 0" }}>
            {[0, 1].map((loopIdx) => (
              <div key={loopIdx} className="w-full flex flex-col gap-3" aria-hidden={loopIdx === 1}>
                {testimonials.map((t, idx) => {
                  // Track globally across both identical sets (6 items total)
                  const globalIdx = loopIdx * testimonials.length + idx;
                  const isActive = globalIdx === activeIndex;

                  return (
                    <div
                      key={idx}
                      className={`testimonial-item w-full transition-all duration-300 ease-linear flex-shrink-0
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
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

