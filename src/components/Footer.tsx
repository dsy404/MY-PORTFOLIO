import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1128] text-white border-t border-[#162a5c] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-950/80">
          
          {/* Identity & Subtitle */}
          <div className="text-center md:text-left">
            <a 
              href="#home" 
              className="text-xl font-bold font-display text-white hover:text-blue-300 transition-colors inline-block mb-1"
            >
              Deepshikha Yadav
            </a>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              B.Tech CSE Student | Full-Stack Developer | AI Enthusiast | Open Source Contributor
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0f1c3f] text-slate-300 hover:text-white hover:bg-blue-900/60 transition-colors border border-blue-900/40"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0f1c3f] text-slate-300 hover:text-white hover:bg-blue-900/60 transition-colors border border-blue-900/40"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#0f1c3f] text-slate-300 hover:text-white hover:bg-blue-900/60 transition-colors border border-blue-900/40"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all cursor-pointer shadow-sm shadow-purple-500/20 ml-2"
              title="Back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3 text-center sm:text-left">
          <div>
            © 2026 Deepshikha Yadav. Built with curiosity and code.
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-pink-400" />
            <span>Lucknow, Uttar Pradesh · SRMCEM '29</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
