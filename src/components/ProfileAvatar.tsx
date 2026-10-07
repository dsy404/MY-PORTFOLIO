import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, Code2 } from 'lucide-react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  size = 'md',
  showBadge = true,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('/profile-picture.jpg');
  const [imageError, setImageError] = useState(false);

  // Initialize and load profile photo from localStorage or default asset
  useEffect(() => {
    try {
      const saved = localStorage.getItem('deepshikha_profile_photo');
      if (saved) {
        setImageSrc(saved);
      }
    } catch {}
  }, []);

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36 md:w-44 md:h-44',
    lg: 'w-48 h-48 md:w-56 md:h-56'
  };

  return (
    <div 
      className={`relative group inline-block select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ambient glow ring with Pastel Pink and Pastel Purple gradient */}
      <div 
        className="absolute -inset-3 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-fuchsia-300 transition duration-500 blur-md opacity-65 group-hover:opacity-100 group-hover:scale-105"
        aria-hidden="true"
      />

      {/* Rotating orbit ring in pastel purple and pink */}
      <div 
        className="absolute -inset-3.5 rounded-full border border-pink-200/80 border-t-purple-500 group-hover:border-t-pink-500 animate-[spin_10s_linear_infinite]"
        aria-hidden="true"
      />

      {/* Main Portrait Frame with pastel pink and purple borders */}
      <div className={`relative ${sizeClasses[size]} rounded-full p-1.5 bg-gradient-to-b from-white via-pink-50/50 to-purple-50/50 border-2 border-pink-200 group-hover:border-purple-300 shadow-xl overflow-hidden backdrop-blur-sm transition-all duration-300`}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0a1128] via-[#162a5c] to-[#0f1c3f] flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Portrait Photo Display */}
          {!imageError ? (
            <div className="w-full h-full relative">
              <img 
                src={imageSrc} 
                alt="Deepshikha Yadav" 
                className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                onError={() => {
                  if (imageSrc !== '/profile.png') {
                    setImageSrc('/profile.png');
                  } else {
                    setImageError(true);
                  }
                }}
              />
              {/* Soft bottom vignette for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a1128]/60 to-transparent pointer-events-none" />
            </div>
          ) : (
            /* Fallback Stylized Monogram in Pastel Purple & Pink */
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-300 via-purple-300 to-fuchsia-300 p-[1.5px] shadow-lg flex items-center justify-center mb-1 group-hover:rotate-3 transition-transform duration-300">
                <div className="w-full h-full rounded-2xl bg-[#0a1128] flex items-center justify-center">
                  <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider">
                    DY
                  </span>
                </div>
              </div>

              <div className="text-[10px] md:text-xs font-mono text-pink-200 tracking-wider uppercase font-semibold">
                Deepshikha
              </div>
              <div className="text-[9px] font-mono text-purple-200 flex items-center gap-1 mt-0.5">
                <Code2 className="w-2.5 h-2.5 text-pink-300" />
                <span>SRMCEM '29</span>
              </div>
            </div>
          )}

          {/* Interactive hover overlay with profile info */}
          <div className={`absolute inset-0 bg-[#0a1128]/85 backdrop-blur-xs flex flex-col items-center justify-center text-white transition-opacity duration-300 p-2 text-center z-10 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <Sparkles className="w-4 h-4 text-pink-300 mb-1 animate-bounce" />
            <span className="text-xs font-semibold text-white">Deepshikha Yadav</span>
            <span className="text-[10px] text-purple-200 mt-0.5">B.Tech CSE · SRMCEM '29</span>
          </div>

        </div>
      </div>

      {/* Verified Status Tag with Pastel Accents */}
      {showBadge && (
        <div className="absolute -bottom-2 -right-1 z-20 bg-white border border-pink-200/90 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-[10px] font-mono text-purple-950 font-semibold">B.Tech CSE</span>
          <ShieldCheck className="w-3 h-3 text-purple-600" />
        </div>
      )}
    </div>
  );
};
