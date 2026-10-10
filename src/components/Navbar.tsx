import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

const navLinks = [
  { name: 'Home', target: 'home' },
  { name: 'About', target: 'about' },
  { name: 'Journey', target: 'journey' },
  { name: 'Skills', target: 'skills' },
  { name: 'Projects', target: 'projects' },
  { name: 'Certificates', target: 'certificates' },
  { name: 'Resume', target: 'resume' }
];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.target));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].target);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Glass Navbar (Desktop) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-4xl rounded-full border border-[var(--color-blush)]/50 backdrop-blur-2xl ${
          isScrolled ? 'bg-[var(--color-cream)]/95 shadow-2xl shadow-[var(--color-plum)]/10 py-3' : 'bg-[var(--color-cream)]/60 py-4'
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => scrollTo('home')}
            className="text-[var(--color-plum)] font-display font-black text-xl tracking-tighter cursor-none group"
            data-cursor="hover"
          >
            DSY<span className="text-[var(--color-rose)] group-hover:animate-pulse">.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 bg-white/40 p-1 rounded-full border border-white/50">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.target)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-none relative ${
                  activeSection === link.target ? 'text-[var(--color-cream)]' : 'text-[var(--color-plum)] hover:text-[var(--color-rose)]'
                }`}
                data-cursor="hover"
              >
                {activeSection === link.target && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[var(--color-plum)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </div>

          {/* Contact CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="hidden md:flex px-5 py-2.5 bg-[var(--color-plum)] hover:bg-[#34242d] text-[var(--color-cream)] rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 cursor-none"
              data-cursor="hover"
            >
              Contact
            </button>
            
            <button
              className="md:hidden text-[var(--color-plum)] p-2 cursor-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-cream)]/95 backdrop-blur-3xl pt-32 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                onClick={() => scrollTo(link.target)}
                className="text-left text-4xl font-display font-black text-[var(--color-plum)] border-b border-[var(--color-lavender)] pb-4"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="mt-8 py-4 bg-[var(--color-plum)] text-[var(--color-cream)] rounded-full font-mono text-sm font-bold uppercase tracking-widest"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
