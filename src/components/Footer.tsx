import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-[1920px] mx-auto">
        <div className="space-y-6">
          <div className="h-10">
            <img alt="Penm'Land Properties" className="h-full w-auto object-contain" src={logo}/>
          </div>
          <p className="text-slate-500 font-plus-jakarta text-base leading-relaxed">
                              Setting the gold standard in premium construction and architectural development for over two decades.
                          </p>
        </div>
        <div className="space-y-6">
          <h5 className="text-[#0B2C6B] font-bold uppercase tracking-widest text-sm">Company</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-[#0B2C6B] transition-colors" href="#">Sustainability Report</a></li>
            <li><a className="text-slate-500 hover:text-[#0B2C6B] transition-colors" href="#">Investor Relations</a></li>
            <li><a className="text-slate-500 hover:text-[#0B2C6B] transition-colors" href="#">Our Team</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="text-[#0B2C6B] font-bold uppercase tracking-widest text-sm">Legal</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-[#0B2C6B] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 hover:text-[#0B2C6B] transition-colors" href="#">Terms of Service</a></li>
            <li><a className="text-slate-500 hover:text-[#0B2C6B] transition-colors" href="#">Cookie Settings</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="text-[#0B2C6B] font-bold uppercase tracking-widest text-sm">Connect</h5>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container cursor-pointer hover:bg-[#1FC28A] hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">share</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container cursor-pointer hover:bg-[#1FC28A] hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">mail</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>© 2024 Penm'Land Properties. Built with Precision.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span>London</span>
          <span>New York</span>
          <span>Dubai</span>
        </div>
      </div>
    </footer>
  );
}
