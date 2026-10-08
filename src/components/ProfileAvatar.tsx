import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ShieldCheck, Sparkles, Camera, CheckCircle2, X } from 'lucide-react';

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
  const [imageSrc, setImageSrc] = useState<string>('/photo.jpg');
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize and load profile photo from localStorage or default /photo.jpg
  useEffect(() => {
    try {
      const saved = localStorage.getItem('deepshikha_profile_photo');
      if (saved) {
        setImageSrc(saved);
      } else {
        setImageSrc('/photo.jpg');
      }
    } catch {
      setImageSrc('/photo.jpg');
    }
  }, []);

  const sizeClasses = {
    sm: 'w-24 h-24 rounded-2xl',
    md: 'w-44 h-44 sm:w-48 sm:h-48 rounded-2xl',
    lg: 'w-52 h-52 sm:w-60 sm:h-60 rounded-3xl'
  };

  const innerRadiusClasses = {
    sm: 'rounded-[14px]',
    md: 'rounded-[14px]',
    lg: 'rounded-[20px]'
  };

  // Helper to persist updated photo to disk and localStorage
  const savePhotoPermanently = (dataUrl: string) => {
    setImageSrc(dataUrl);
    setImageError(false);
    try {
      localStorage.setItem('deepshikha_profile_photo', dataUrl);
    } catch (e) {
      console.warn('localStorage error:', e);
    }

    // Persist to disk via backend endpoint
    fetch('/api/save-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: dataUrl })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSaveSuccess(true);
          setTimeout(() => setSaveSuccess(false), 3000);
        }
      })
      .catch(err => console.error('Failed to save to disk:', err));
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        savePhotoPermanently(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <>
      <div 
        className={`relative group inline-block select-none cursor-pointer ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        title="Deepshikha Yadav — Professional Portrait"
      >
        {/* Hidden file input for changing photo */}
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFile(e.target.files[0]);
            }
          }}
        />

        {/* Ambient subtle warm glow beneath photo */}
        <div 
          className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 transition duration-500 blur-md opacity-50 group-hover:opacity-85 group-hover:scale-102"
          aria-hidden="true" 
        />

        {/* Professional Portrait Photo Frame */}
        <div className={`relative ${sizeClasses[size]} p-1.5 bg-gradient-to-b from-white via-pink-50/60 to-purple-50/60 border-2 border-pink-200/90 group-hover:border-purple-300 shadow-xl overflow-hidden backdrop-blur-sm transition-all duration-300`}>
          <div className={`w-full h-full ${innerRadiusClasses[size]} bg-slate-900 overflow-hidden relative shadow-inner`}>
            
            {/* Real Photograph Display */}
            {!imageError ? (
              <img 
                src={imageSrc} 
                alt="Deepshikha Yadav" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                onError={() => {
                  if (imageSrc !== '/profile-picture.jpg') {
                    setImageSrc('/profile-picture.jpg');
                  } else {
                    setImageError(true);
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-slate-900 to-purple-950 text-white">
                <span className="font-display font-bold text-2xl text-pink-300">DY</span>
                <span className="text-xs font-mono text-purple-200 mt-1">Deepshikha Yadav</span>
              </div>
            )}

            {/* Subtle bottom info bar on hover */}
            <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-2.5 pt-6 flex items-center justify-between transition-opacity duration-300 z-10 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight">Deepshikha Yadav</p>
                <p className="text-[9px] font-mono text-pink-200">SRMCEM '29</p>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-pink-300 shrink-0" />
            </div>

          </div>
        </div>

        {/* Verified Status Tag with Pastel Accents */}
        {showBadge && (
          <div className="absolute -bottom-2 -right-2 z-20 bg-white border border-pink-200/90 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-[10px] font-mono text-purple-950 font-semibold">B.Tech CSE</span>
            <ShieldCheck className="w-3 h-3 text-purple-600" />
          </div>
        )}
      </div>

      {/* Profile Photo Modal — portal to escape motion.div transform stacking context */}
      {showModal && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          style={{ animation: 'fadeInModal 0.2s ease' }}
          onClick={() => setShowModal(false)}
        >
          <style>{`@keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }`}</style>
          <div 
            className="bg-white rounded-3xl border border-purple-200 max-w-md w-full shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-purple-50 via-white to-pink-50">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <h3 className="font-display font-bold text-base text-[#0a1128]">Profile Portrait</h3>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 text-center space-y-4">
              {/* Photo Frame */}
              <div className="w-64 h-64 mx-auto rounded-2xl p-1 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 shadow-xl overflow-hidden">
                <img 
                  src={imageSrc} 
                  alt="Deepshikha Yadav" 
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>

              <div>
                <h4 className="text-xl font-bold font-display text-[#0a1128]">Deepshikha Yadav</h4>
                <p className="text-xs font-mono text-purple-800 font-semibold mt-0.5">
                  Full-Stack & Applied AI Engineer • SRMCEM '29
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-semibold mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Identity & Credentials</span>
                </div>
              </div>

              {saveSuccess && (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Photo saved permanently!</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="py-2 px-3.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 font-mono text-[11px] font-medium transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-purple-600" />
                  <span>Change photo</span>
                </button>
                {imageSrc !== '/photo.jpg' && (
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('deepshikha_profile_photo');
                      setImageSrc('/photo.jpg');
                    }}
                    className="py-2 px-3 rounded-xl text-slate-500 hover:text-slate-800 font-mono text-[11px] transition cursor-pointer"
                  >
                    Reset default
                  </button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
