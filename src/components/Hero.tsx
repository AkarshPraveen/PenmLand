import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-12 md:pt-32 pb-16 md:pb-24 overflow-hidden md:min-h-screen flex items-center bg-surface-container-lowest px-6 md:px-0">
      <div className="max-w-[1920px] mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-12 md:gap-12 items-center w-full">
        {/* Text Content */}
        <div className="lg:col-span-6 z-10 mb-8 md:mb-0">
          <span className="inline-block label-md uppercase tracking-[0.2em] text-secondary font-semibold mb-4 md:mb-6 text-[10px] md:text-[12px]">
            Legacy in Every Stone
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-headline font-extrabold text-primary md:leading-[1.1] leading-[1.1] mb-6 md:mb-8">
            Architecture <br />That Breathes.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl md:leading-relaxed leading-relaxed mb-8 md:mb-10 lg:mx-0">
            <span className="hidden md:inline">We transcend the standard of high-end construction by merging structural precision with a visionary aesthetic.</span>
            <span className="md:hidden">We transcend the standard of high-end construction by merging structural precision with a visionary aesthetic. Every project is a curated masterpiece.</span>
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-center lg:justify-start">
            <Link to="/projects" className="editorial-gradient text-white flex items-center justify-center w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold ambient-shadow hover:-translate-y-1 md:hover:translate-y-[-2px] active:scale-95 transition-transform md:transition-transform">
              Explore Portfolio
            </Link>
            <button className="border border-outline-variant/30 text-primary w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold active:bg-surface-container-low hover:bg-surface-container-low transition-colors">
              Our Vision
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-6 relative h-[400px] md:h-[600px] w-full rounded-2xl md:rounded-none overflow-hidden md:overflow-visible ambient-shadow md:shadow-none">
          <div className="hidden md:block absolute inset-0 rounded-2xl overflow-hidden ambient-shadow">
            <img
              className="w-full h-full object-cover"
              alt="ultra-modern luxury villa with floor to ceiling glass walls"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWWCFhqy8vDLySihOF2HO6t4J0u4eAx4aithVEK60h64jDpB4hC8z0xIy441BLUJCB9GYHaCHEP3m_R2yh2UKrMMsVRlcMv5ke_a7zq8_kewPTj1SRyjDU7oCc-5Bnu6ZYFUuc5WrZCqbKX7ITirfIxCGqFUNMFO5WZDebNcZUUpWVIC0whQScOkTVcKqhb5BhEsAPV9l5S0vKxkATTEa9iaCOl94hM5n-AO6kx0n0zUAwLyIB_pADSe1E2POy1thHb8lpn6MvnJkb"
            />
          </div>
          <img
            className="md:hidden w-full h-full object-cover"
            alt="ultra-modern luxury villa with floor to ceiling glass walls"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWWCFhqy8vDLySihOF2HO6t4J0u4eAx4aithVEK60h64jDpB4hC8z0xIy441BLUJCB9GYHaCHEP3m_R2yh2UKrMMsVRlcMv5ke_a7zq8_kewPTj1SRyjDU7oCc-5Bnu6ZYFUuc5WrZCqbKX7ITirfIxCGqFUNMFO5WZDebNcZUUpWVIC0whQScOkTVcKqhb5BhEsAPV9l5S0vKxkATTEa9iaCOl94hM5n-AO6kx0n0zUAwLyIB_pADSe1E2POy1thHb8lpn6MvnJkb"
          />

          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 lg:right-auto bg-white/90 backdrop-blur-lg p-6 rounded-xl md:ambient-shadow max-w-xs md:mx-0">
            <p className="text-primary font-bold text-sm md:text-base md:mb-1">End to End Home Solutions</p>
            <p className="text-[11px] md:text-xs text-on-surface-variant md:mt-0 mt-1">
              <span className="hidden md:inline">Integrating eco-conscious stone and steel.</span>
              <span className="md:hidden">Integrating eco-conscious stone and steel into the modern residential landscape.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
