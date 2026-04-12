import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isServices = location.pathname === '/services';
  const isProjects = location.pathname === '/projects';
  const isContact = location.pathname === '/contact';

  const menuItems = [
    { name: 'Home', path: '/', isActive: isHome },
    { name: 'Services', path: '/services', isActive: isServices },
    { name: 'Portfolio', path: '/projects', isActive: isProjects },
    { name: 'Contact Us', path: '/contact', isActive: isContact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto w-full">
        <div className="text-2xl font-black tracking-[0.1em] uppercase text-[#0B2C6B] font-headline">
          <Link to="/">
            <img
              alt="PENM'LAND PROPERTIES"
              className="h-10 w-auto object-contain"
              src={logo}
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className={`font-headline text-xs tracking-widest uppercase hover:text-primary-container transition-colors font-bold ${
                item.isActive ? 'text-primary border-b-2 border-secondary pb-1' : 'text-slate-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="bg-primary-container text-on-primary font-bold px-8 py-3 rounded-xl scale-95 duration-200 ease-in-out hover:scale-100 editorial-gradient">
          Get a Quote
        </button>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center px-6 py-4 w-full">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-200 w-8 flex justify-start"
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            alt="PENM'LAND PROPERTIES"
            className="h-8 w-auto object-contain"
            src={logo}
          />
        </Link>
        <div className="w-8"></div> {/* Spacer to keep logo strictly centered since search button was removed */}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-lowest border-t border-slate-100 shadow-xl flex flex-col px-6 py-8 gap-6 z-40">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-headline text-lg tracking-widest uppercase transition-colors font-bold ${
                item.isActive ? 'text-secondary' : 'text-primary-container'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="mt-4 bg-primary-container text-on-primary font-bold px-8 py-4 rounded-xl active:scale-95 duration-200 w-full editorial-gradient text-sm">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
