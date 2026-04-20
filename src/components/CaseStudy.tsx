import case_study from '../assets/case_study.jpg';

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-32 bg-surface-container-low px-6 md:px-0 overflow-hidden">
      <div className="max-w-[1920px] mx-auto md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-24 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden ambient-shadow aspect-[4/5] mx-auto max-w-lg lg:max-w-none">
              <img
                className="w-full h-full object-cover"
                alt="minimalist architectural shot"
                src={case_study}
              />
            </div>
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-secondary text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-[10px] md:text-[12px] uppercase ambient-shadow md:tracking-widest z-10">
              Award Winning 2023
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <span className="text-[10px] md:text-label-md uppercase tracking-[0.2em] text-secondary font-semibold mb-4 md:mb-6 block">
              Case Study
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6 md:mb-8 leading-tight">
              The Obsidian <br />Glass Pavilion
            </h2>
            <p className="text-sm md:text-xl text-on-surface-variant mb-8 md:mb-12 leading-relaxed max-w-lg">
              Situated in the heart of the coastal ridge, this project demanded a balance between extreme weather resistance and aesthetic transparency. 
              <span className="md:hidden"> We utilized reinforced smart-glass and local obsidian-flecked stone.</span>
            </p>
            <div className="grid grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
              <div>
                <p className="text-2xl md:text-4xl font-headline font-bold text-primary">12k</p>
                <p className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest font-bold md:mt-2">Sq. Ft Area</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-headline font-bold text-primary">0.0</p>
                <p className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest font-bold md:mt-2">Carbon Footprint</p>
              </div>
            </div>
            {/* <button className="flex items-center gap-3 md:gap-4 text-primary font-bold group text-sm md:text-lg">
              View Project Details
              <span className="material-symbols-outlined text-lg md:text-base group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
