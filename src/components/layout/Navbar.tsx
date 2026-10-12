import React, { useState, useEffect } from 'react';
import { Page } from '../../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'contact', label: 'Kontak & Gabung' },
  ];

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 shadow-lg shadow-black/40'
            : 'bg-stone-950/60 backdrop-blur-sm border-b border-stone-850'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text wordmark in display face */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 focus:outline-none"
              aria-label="Kembali ke Beranda Damboris"
            >
              <span>Damboris</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
            </button>

            {/* Zone 2: 5–6 clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                      isActive
                        ? 'text-amber-400 font-semibold'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <button
                onClick={() => handleLinkClick('contact')}
                className="px-5 py-2.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all transform active:scale-95 shadow-md shadow-amber-500/10 whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Gabung Komunitas</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile hamburger toggle */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-900 border border-stone-800 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-stone-800 bg-stone-950/98 px-4 pt-3 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-amber-400/10 text-amber-400 border border-amber-400/30'
                        : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-xs text-amber-400">Aktif</span>}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-stone-850">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-3 px-4 text-center font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Gabung Komunitas Damboris</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
