import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed top-8 right-6 z-50 flex flex-col gap-4 hidden md:flex cursor-none">
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-white/70 backdrop-blur-md rounded-full border border-[var(--color-lavender)] flex items-center justify-center text-[var(--color-plum)] shadow-lg hover:scale-110 hover:bg-[var(--color-rose)] hover:text-white hover:border-[var(--color-rose)] transition-all"
        data-cursor="hover"
      >
        <Github size={18} />
      </a>
      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-white/70 backdrop-blur-md rounded-full border border-[var(--color-lavender)] flex items-center justify-center text-[var(--color-plum)] shadow-lg hover:scale-110 hover:bg-[var(--color-rose)] hover:text-white hover:border-[var(--color-rose)] transition-all"
        data-cursor="hover"
      >
        <Linkedin size={18} />
      </a>
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-white/70 backdrop-blur-md rounded-full border border-[var(--color-lavender)] flex items-center justify-center text-[var(--color-plum)] shadow-lg hover:scale-110 hover:bg-[var(--color-rose)] hover:text-white hover:border-[var(--color-rose)] transition-all"
        data-cursor="hover"
      >
        <Mail size={18} />
      </a>
    </div>
  );
};
