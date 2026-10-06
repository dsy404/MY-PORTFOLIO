import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Code2 } from 'lucide-react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  size = 'md',
  showBadge = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36 md:w-44 md:h-44',
    lg: 'w-48 h-48 md:w-56 md:h-56'
  };

  return (
    <div 
      className="relative group inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ambient glow ring with soft pastel gradient */}
      <div 
        className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-sky-200 via-purple-200 to-rose-200 opacity-60 group-hover:opacity-95 blur-md transition duration-500 group-hover:scale-105"
        aria-hidden="true"
      />

      {/* Rotating orbit ring */}
      <div 
        className="absolute -inset-3 rounded-full border border-sky-300/60 border-t-purple-400 group-hover:border-t-rose-400 animate-[spin_10s_linear_infinite]"
        aria-hidden="true"
      />

      {/* Main Portrait Frame */}
      <div className={`relative ${sizeClasses[size]} rounded-full p-1 bg-white border-2 border-purple-200 shadow-xl overflow-hidden backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.02]`}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0a1128] via-[#162a5c] to-[#0f1c3f] flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Abstract stylized developer avatar illustration */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            {/* Tech Monogram */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-sky-300 via-purple-300 to-rose-300 p-[1.5px] shadow-lg flex items-center justify-center mb-1 group-hover:rotate-3 transition-transform duration-300">
              <div className="w-full h-full rounded-2xl bg-[#0a1128] flex items-center justify-center">
                <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider">
                  DY
                </span>
              </div>
            </div>

            {/* Subtext label */}
            <div className="text-[10px] md:text-xs font-mono text-blue-200 tracking-wider uppercase font-semibold">
              Deepshikha
            </div>
            <div className="text-[9px] font-mono text-slate-300 flex items-center gap-1 mt-0.5">
              <Code2 className="w-2.5 h-2.5 text-sky-300" />
              <span>SRMCEM '29</span>
            </div>
          </div>

          {/* Interactive hover overlay */}
          <div className={`absolute inset-0 bg-[#0a1128]/95 backdrop-blur-xs flex flex-col items-center justify-center text-white transition-opacity duration-300 p-2 text-center ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Sparkles className="w-5 h-5 text-sky-400 mb-1 animate-bounce" />
            <span className="text-[11px] font-semibold text-white">Deepshikha Yadav</span>
            <span className="text-[9px] text-blue-200 mt-0.5">Computer Science</span>
            <span className="text-[8px] font-mono text-blue-300 mt-1">Lucknow, UP</span>
          </div>
        </div>
      </div>

      {/* Verified Status Tag */}
      {showBadge && (
        <div className="absolute -bottom-2 -right-1 bg-white border border-slate-200 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-800 font-semibold">B.Tech CSE</span>
          <ShieldCheck className="w-3 h-3 text-blue-600" />
        </div>
      )}
    </div>
  );
};
