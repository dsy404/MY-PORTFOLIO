import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'achievements', 'education', 'certificates', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs' 
          : 'bg-white/80 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#home" 
            className="text-lg md:text-xl font-bold font-display tracking-tight text-[#0a1128] hover:text-purple-800 transition-colors flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 group-hover:scale-125 transition-transform" />
            <span>Deepshikha Yadav</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 transition-colors hover:text-purple-900 ${
                  activeSection === link.href.substring(1) ? 'text-purple-900 font-bold' : 'text-slate-600'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#resume');
              }}
              className="px-3 py-1.5 text-xs font-mono font-semibold text-purple-950 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-pink-200/90 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-pink-600" />
              <span>Resume</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-500 hover:text-purple-900 transition-colors hover:bg-purple-50/70 rounded-lg"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={onContactClick}
              className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#0a1128] via-purple-950 to-pink-950 hover:from-purple-900 hover:to-pink-900 active:from-black active:to-black rounded-lg transition-all shadow-sm shadow-purple-500/10 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-pink-300" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-black rounded-lg hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-6 py-5 shadow-xl backdrop-blur-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`py-2 text-base transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-blue-700 font-semibold' : 'text-slate-700 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 mt-2 border-t border-slate-200 flex items-center justify-between">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-black"
              >
                <Github className="w-4 h-4" />
                <span>github.com/{personalInfo.githubUsername}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="px-4 py-2 text-xs font-medium text-white bg-[#0a1128] rounded-lg shadow-sm"
              >
                Let's Connect
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
