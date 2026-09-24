import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResumeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center group-hover:border-blue-400 transition-colors">
            <span className="font-bold text-sm tracking-wider text-blue-400">HM</span>
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
            HEMANTH MAMIDI
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors tracking-wide relative py-1 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenResumeModal && (
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-900/60 border border-blue-800/60 hover:border-blue-500 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>
          )}

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14]/95 border-b border-slate-800 px-6 py-4 space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-blue-400 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            {onOpenResumeModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-slate-800 text-blue-300 border border-blue-800/60 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Official Resume</span>
              </button>
            )}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Hemanth</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

