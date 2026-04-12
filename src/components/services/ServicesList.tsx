import { servicesData } from '../../data/services';

export default function ServicesList() {
  return (
    <>
      {/* Desktop List */}
      <div className="hidden md:block max-w-[1920px] mx-auto px-12 space-y-16 pb-24">
        {servicesData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={item.num} className="grid grid-cols-2 gap-16 items-center bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_20px_40px_rgba(11,44,107,0.04)]">
              {/* Image Block */}
              <div className={`h-full min-h-[500px] relative ${!isEven ? 'order-2' : 'order-1'}`}>
                <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
                <div className={`absolute bottom-6 ${!isEven ? 'left-6' : 'right-6'} bg-white/90 backdrop-blur px-4 py-2 rounded-xl`}>
                  <span className="text-secondary font-bold text-2xl font-headline">{item.num}</span>
                </div>
              </div>

              {/* Text Block */}
              <div className={`p-12 ${!isEven ? 'pl-16 order-1' : 'pr-16 order-2'}`}>
                <div className="mb-6">
                  <span className="text-secondary font-bold font-label uppercase tracking-widest text-xs">
                    {item.category}
                  </span>
                  <h3 className="font-headline text-4xl font-bold text-primary-container mt-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-primary-container font-bold text-base uppercase tracking-widest hover:gap-4 transition-all">
                  Inquire Service
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile List */}
      <div className="md:hidden px-6 py-12 flex flex-col gap-16">
        {servicesData.map((item) => (
          <article key={item.num} className="flex flex-col gap-8">
            <div className="relative">
              <img alt={item.title} className="rounded-3xl shadow-xl w-full aspect-[4/5] object-cover" src={item.image} />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
                <div className="text-secondary font-bold text-2xl font-headline leading-none">{item.num}</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-bold font-label uppercase tracking-widest text-[10px]">
                {item.category}
              </span>
              <h3 className="font-headline text-3xl font-extrabold text-primary-container leading-tight">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
