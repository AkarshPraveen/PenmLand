import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white px-8 py-12 md:py-24">
      <div className="max-w-[1920px] mx-auto md:px-12 flex flex-col items-center gap-8 md:gap-12">
        <div className="text-center space-y-6 flex flex-col items-center">
          <img
            alt="PENM'LAND PROPERTIES"
            className="h-12 md:h-16 w-auto object-contain mx-auto"
            src={logo}
          />
          <p className="text-on-surface-variant max-w-xs md:max-w-md text-xs md:text-sm mx-auto">
            Defining the horizon through intentional architecture and uncompromising <span className="md:hidden">construction </span>standards.
          </p>
        </div>
        <div className="flex flex-row md:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-12 text-[10px] md:text-xs font-bold uppercase md:tracking-[0.2em] tracking-widest text-slate-400">
          <a className="hover:text-[#0B2C6B] transition-colors" href="#">Portfolio</a>
          <a className="hover:text-[#0B2C6B] transition-colors" href="#">Services</a>
          <a className="hover:text-[#0B2C6B] transition-colors" href="#">About</a>
          <a className="hover:text-[#0B2C6B] transition-colors" href="#">Legal</a>
        </div>
        <div className="pt-8 md:pt-12 border-t border-surface-container w-full text-center">
          <p className="font-label text-[10px] md:text-xs text-slate-400 md:mb-0 mb-4">
            © 2024 Penm'Land Properties. <span className="hidden md:inline">Built with Precision.</span><span className="md:hidden">Architectural Excellence.</span>
          </p>
          <div className="flex md:hidden justify-center gap-4 text-emerald-600 font-bold text-[10px]">
            <span>ISO 9001 Certified</span>
            <span>LEED Gold Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
