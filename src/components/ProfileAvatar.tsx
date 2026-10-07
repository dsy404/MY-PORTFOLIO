import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Sparkles, Code2, Camera, RotateCcw, Check, CheckCircle2, Upload } from 'lucide-react';

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
  const [isDragging, setIsDragging] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('/profile-picture.jpg');
  const [imageError, setImageError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync photo with server disk endpoint so it persists on filesystem
  const persistToServer = async (base64Data: string) => {
    try {
      const res = await fetch('/api/save-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64Data })
      });
      if (res.ok) {
        setIsSaved(true);
      }
    } catch {
      // If server route is unreachable, localStorage still preserves it
    }
  };

  // Initialize and load saved profile photo from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('deepshikha_profile_photo');
      if (saved) {
        setImageSrc(saved);
        setIsSaved(true);
        if (saved.startsWith('data:')) {
          persistToServer(saved);
        }
      } else {
        setIsSaved(true);
      }
    } catch {
      setIsSaved(true);
    }
  }, []);

  // Process, square-crop, and compress image to optimal 480x480 resolution
  const processAndSavePhoto = (dataUrl: string) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const minDim = Math.min(img.width, img.height);
      const startX = (img.width - minDim) / 2;
      const startY = (img.height - minDim) / 2;
      const targetSize = 480;
      canvas.width = targetSize;
      canvas.height = targetSize;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, startX, startY, minDim, minDim, 0, 0, targetSize, targetSize);
        const optimized = canvas.toDataURL('image/jpeg', 0.92);
        setImageSrc(optimized);
        setImageError(false);
        setIsSaved(true);
        setShowSavedToast(true);
        setTimeout(() => setShowSavedToast(false), 3500);

        try {
          localStorage.setItem('deepshikha_profile_photo', optimized);
        } catch (err) {
          console.warn('LocalStorage quota note:', err);
        }
        persistToServer(optimized);
      }
    };
    img.onerror = () => {
      setImageSrc(dataUrl);
      setIsSaved(true);
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3500);
      try {
        localStorage.setItem('deepshikha_profile_photo', dataUrl);
      } catch {}
      persistToServer(dataUrl);
    };
    img.src = dataUrl;
  };

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          processAndSavePhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const resetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('deepshikha_profile_photo');
    } catch {}
    setImageSrc('/profile-picture.jpg');
    setImageError(false);
    setIsSaved(true);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3500);
  };

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
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden file input for uploading custom photo */}
      <input 
        ref={fileInputRef}
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={handleFileUpload}
      />

      {/* Floating Save Confirmation Toast */}
      {showSavedToast && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono text-[11px] font-semibold shadow-xl flex items-center gap-1.5 animate-bounce">
          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
          <span>Profile Photo Saved!</span>
        </div>
      )}

      {/* Outer ambient glow ring with Pastel Pink and Pastel Purple gradient */}
      <div 
        className={`absolute -inset-3 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-fuchsia-300 transition duration-500 blur-md ${
          isDragging ? 'opacity-100 scale-110' : 'opacity-65 group-hover:opacity-100 group-hover:scale-105'
        }`}
        aria-hidden="true"
      />

      {/* Rotating orbit ring in pastel purple and pink */}
      <div 
        className="absolute -inset-3.5 rounded-full border border-pink-200/80 border-t-purple-500 group-hover:border-t-pink-500 animate-[spin_10s_linear_infinite]"
        aria-hidden="true"
      />

      {/* Main Portrait Frame with pastel pink and purple borders */}
      <div className={`relative ${sizeClasses[size]} rounded-full p-1.5 bg-gradient-to-b from-white via-pink-50/50 to-purple-50/50 border-2 ${
        isDragging ? 'border-pink-500 scale-105' : 'border-pink-200 group-hover:border-purple-300'
      } shadow-xl overflow-hidden backdrop-blur-sm transition-all duration-300`}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0a1128] via-[#162a5c] to-[#0f1c3f] flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Portrait Photo Display */}
          {!imageError ? (
            <div className="w-full h-full relative cursor-pointer" onClick={() => fileInputRef.current?.click()}>
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
            <div className="relative z-10 flex flex-col items-center justify-center text-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
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

          {/* Dragging Overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-purple-900/90 backdrop-blur-xs flex flex-col items-center justify-center text-white z-20">
              <Upload className="w-6 h-6 text-pink-300 animate-bounce mb-1" />
              <span className="text-xs font-bold font-mono">Drop photo here</span>
            </div>
          )}

          {/* Interactive hover overlay with profile info & photo controls */}
          <div className={`absolute inset-0 bg-[#0a1128]/85 backdrop-blur-xs flex flex-col items-center justify-center text-white transition-opacity duration-300 p-2 text-center z-10 ${
            isHovered && !isDragging ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <Sparkles className="w-4 h-4 text-pink-300 mb-0.5 animate-bounce" />
            <span className="text-[11px] font-semibold text-white">Deepshikha Yadav</span>
            <span className="text-[9px] text-purple-200">B.Tech CSE · SRMCEM</span>
            
            {/* Quick action button to upload/replace user's picture */}
            <div className="flex items-center gap-1.5 mt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-[9px] font-mono font-semibold flex items-center gap-1 text-white border border-pink-300/40 backdrop-blur-xs transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                title="Choose photo from device"
              >
                <Camera className="w-2.5 h-2.5 text-white" />
                <span>Change Photo</span>
              </button>

              {imageSrc !== '/profile-picture.jpg' && (
                <button
                  type="button"
                  onClick={resetPhoto}
                  className="p-1 rounded-full bg-white/15 hover:bg-white/25 text-white/80 hover:text-white transition cursor-pointer"
                  title="Reset to default picture"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                </button>
              )}
            </div>

            {/* Saved indicator in hover */}
            <div className="flex items-center gap-1 mt-1 text-[8px] font-mono text-emerald-400">
              <Check className="w-2.5 h-2.5" />
              <span>Saved in portfolio</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Camera Button with Pastel Purple & Pink Accents */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          fileInputRef.current?.click();
        }}
        aria-label="Upload profile picture"
        title="Upload or change profile picture"
        className="absolute -top-1 -right-1 z-20 p-2 rounded-full bg-white border border-pink-200 text-purple-700 hover:text-pink-600 hover:border-pink-300 shadow-md transition-all duration-200 hover:scale-110 cursor-pointer group/cam"
      >
        <Camera className="w-3.5 h-3.5 text-purple-600 group-hover/cam:text-pink-600 group-hover/cam:rotate-12 transition-all" />
      </button>

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
