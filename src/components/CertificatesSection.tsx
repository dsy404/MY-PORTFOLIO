import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Search, 
  Sparkles,
  Layers,
  ZoomIn,
  X,
  FileCheck,
  Building,
  UserCheck,
  Download,
  Share2
} from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { CertificateItem } from '../types/portfolio';
import { AnimatedSection } from './AnimatedSection';

/**
 * Beautiful high-resolution SVG certificate mockup component that renders
 * official parchment texture, guilloche geometric patterns, gold/silver foil badge,
 * formal typography, and cryptographic signature lines.
 */
const CertificateVisualDocument: React.FC<{
  cert: CertificateItem;
  expanded?: boolean;
}> = ({ cert, expanded = false }) => {
  const getThemeColors = () => {
    switch (cert.badgeColor) {
      case 'purple':
        return {
          primary: '#581c87', // purple-900
          secondary: '#7e22ce', // purple-700
          accent: '#db2777', // pink-600
          foil: '#f43f5e',
          lightBg: '#faf5ff',
          borderGrad: 'from-purple-900 via-pink-600 to-purple-900',
          sealBg: 'from-purple-600 to-pink-500'
        };
      case 'pink':
        return {
          primary: '#831843', // pink-900
          secondary: '#be185d', // pink-700
          accent: '#9333ea', // purple-600
          foil: '#e11d48',
          lightBg: '#fdf2f8',
          borderGrad: 'from-pink-900 via-purple-600 to-pink-900',
          sealBg: 'from-pink-600 to-purple-500'
        };
      case 'amber':
        return {
          primary: '#78350f', // amber-900
          secondary: '#b45309', // amber-700
          accent: '#d97706', // amber-600
          foil: '#f59e0b',
          lightBg: '#fffbeb',
          borderGrad: 'from-amber-800 via-yellow-500 to-amber-800',
          sealBg: 'from-amber-500 to-yellow-400'
        };
      case 'emerald':
        return {
          primary: '#064e3b', // emerald-900
          secondary: '#047857', // emerald-700
          accent: '#0d9488', // teal-600
          foil: '#10b981',
          lightBg: '#ecfdf5',
          borderGrad: 'from-emerald-900 via-teal-600 to-emerald-900',
          sealBg: 'from-emerald-600 to-teal-500'
        };
      default:
        return {
          primary: '#581c87',
          secondary: '#7e22ce',
          accent: '#db2777',
          foil: '#f43f5e',
          lightBg: '#faf5ff',
          borderGrad: 'from-purple-900 via-pink-600 to-purple-900',
          sealBg: 'from-purple-600 to-pink-500'
        };
    }
  };

  const theme = getThemeColors();

  return (
    <div 
      className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl border-2 border-slate-300 shadow-xl overflow-hidden bg-white select-none transition-all duration-300 ${
        expanded ? 'max-w-3xl mx-auto shadow-2xl' : 'hover:shadow-2xl'
      }`}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, #ffffff 0%, ${theme.lightBg} 100%)`
      }}
    >
      {/* Intricate Classical Guilloche Ornamental Border */}
      <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-slate-300/80 rounded-xl pointer-events-none" />
      <div className="absolute inset-3 sm:inset-4 md:inset-5 border-2 border-slate-800/20 rounded-lg pointer-events-none" />

      {/* Corner Filigrees / Ornaments */}
      <div className="absolute top-4 left-4 text-slate-400 w-6 h-6 flex items-center justify-center font-serif text-xs select-none">
        ✦
      </div>
      <div className="absolute top-4 right-4 text-slate-400 w-6 h-6 flex items-center justify-center font-serif text-xs select-none">
        ✦
      </div>
      <div className="absolute bottom-4 left-4 text-slate-400 w-6 h-6 flex items-center justify-center font-serif text-xs select-none">
        ✦
      </div>
      <div className="absolute bottom-4 right-4 text-slate-400 w-6 h-6 flex items-center justify-center font-serif text-xs select-none">
        ✦
      </div>

      {/* Certificate Content Frame */}
      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 text-center z-10">
        
        {/* Certificate Header Top */}
        <div className="pt-1 sm:pt-2">
          {/* Organization / Issuer */}
          <div className="flex items-center justify-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-6 sm:w-12 h-px bg-slate-300" />
            <span 
              className="text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.25em] font-extrabold"
              style={{ color: theme.primary }}
            >
              {cert.issuer}
            </span>
            <span className="w-6 sm:w-12 h-px bg-slate-300" />
          </div>

          <h4 className="text-sm sm:text-lg md:text-2xl font-serif tracking-wider uppercase text-slate-900 font-bold">
            Certificate of Achievement
          </h4>
          <p className="text-[9px] sm:text-[11px] md:text-xs text-slate-500 font-serif italic mt-0.5">
            This certifies that
          </p>
        </div>

        {/* Recipient Name Highlight */}
        <div className="my-auto py-2">
          <div className="text-lg sm:text-2xl md:text-4xl font-serif font-black tracking-wide text-slate-950 capitalize drop-shadow-2xs">
            Deepshikha Yadav
          </div>
          <div className="w-32 sm:w-48 md:w-64 h-0.5 mx-auto bg-gradient-to-r from-transparent via-slate-400 to-transparent my-1 sm:my-2" />
          
          <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-serif max-w-lg mx-auto leading-tight px-4 line-clamp-2">
            has demonstrated verified excellence in <span className="font-semibold text-slate-900">{cert.title}</span>
          </p>

          <div className="mt-1 sm:mt-2 text-[9px] sm:text-[11px] font-mono text-purple-900 font-medium">
            Category: {cert.category}
          </div>
        </div>

        {/* Certificate Footer / Seal & Signature */}
        <div className="pt-2 border-t border-slate-200/90 flex items-end justify-between text-left">
          
          {/* Left: Issue Date & Credential ID */}
          <div className="text-[8px] sm:text-[10px] md:text-xs font-mono text-slate-600 leading-tight">
            <div><span className="font-semibold text-slate-800">Date:</span> {cert.date}</div>
            <div className="truncate max-w-[120px] sm:max-w-[200px]">
              <span className="font-semibold text-slate-800">ID:</span> {cert.credentialId || 'SRMCEM-VERIFIED'}
            </div>
            <div className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>{cert.status} Credential</span>
            </div>
          </div>

          {/* Center: Gold / Foil Emblem Medallion */}
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div 
              className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${theme.sealBg} text-white shadow-lg p-0.5 flex items-center justify-center relative group`}
            >
              <div className="w-full h-full rounded-full border-2 border-white/60 flex flex-col items-center justify-center p-1 text-center">
                <Award className="w-4 h-4 sm:w-6 sm:h-6 drop-shadow-xs" />
                <span className="text-[6px] sm:text-[8px] font-bold uppercase tracking-tighter leading-none mt-0.5">
                  Official
                </span>
              </div>
            </div>
          </div>

          {/* Right: Signature & Signatory */}
          <div className="text-right text-[8px] sm:text-[10px] md:text-xs font-mono text-slate-600 leading-tight">
            <div className="font-serif italic text-slate-800 text-xs sm:text-sm font-bold border-b border-slate-400 pb-0.5 inline-block">
              {cert.instructorOrSignatory ? 'Authorized Signatory' : 'Verified Issuer'}
            </div>
            <div className="text-[8px] sm:text-[9px] text-slate-500 max-w-[120px] sm:max-w-[180px] truncate ml-auto mt-0.5">
              {cert.instructorOrSignatory || cert.issuer}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export const CertificatesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCertificate(null);
      }
    };
    if (activeCertificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCertificate]);

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud & Global Hackathons',
    'Open Source & Web',
    'Academic & Specialization'
  ];

  const filteredCertificates = certificatesData.filter(cert => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getBadgeStyle = (badgeColor?: string) => {
    switch (badgeColor) {
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-800',
          iconBg: 'bg-purple-100 text-purple-700 border-purple-200',
          accentGradient: 'from-purple-500/15 via-pink-500/10 to-transparent'
        };
      case 'pink':
        return {
          bg: 'bg-pink-50',
          border: 'border-pink-200',
          text: 'text-pink-800',
          iconBg: 'bg-pink-100 text-pink-700 border-pink-200',
          accentGradient: 'from-pink-500/15 via-purple-500/10 to-transparent'
        };
      case 'amber':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          text: 'text-amber-800',
          iconBg: 'bg-amber-100 text-amber-700 border-amber-200',
          accentGradient: 'from-amber-500/15 via-pink-500/10 to-transparent'
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          text: 'text-emerald-800',
          iconBg: 'bg-emerald-100 text-emerald-700 border-emerald-200',
          accentGradient: 'from-emerald-500/15 via-teal-500/10 to-transparent'
        };
      default:
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-800',
          iconBg: 'bg-purple-100 text-purple-700 border-purple-200',
          accentGradient: 'from-purple-500/15 via-pink-500/10 to-transparent'
        };
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-slate-50/60 border-t border-slate-200">
      
      {/* Background multi-tone pastel pink & purple ambient glows */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200/35 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-200/35 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-purple-800 font-semibold mb-2 flex items-center gap-2">
                <span>VERIFIED ACCREDITATIONS & LICENSES</span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
                Certifications & Badges
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 rounded-full mt-4" />
              <p className="text-sm text-slate-600 mt-4 max-w-2xl leading-relaxed">
                Click any certificate to expand its high-resolution verified credential view, complete syllabus coverage, and digital authorization signatures.
              </p>
            </div>

            {/* Quick stats counter */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-white border border-purple-200/80 shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-[#0a1128]">
                    {certificatesData.length}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Total Credentials
                  </div>
                </div>
              </div>

              <div className="px-4 py-2.5 rounded-2xl bg-white border border-pink-200/80 shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-xl bg-pink-100 text-pink-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-emerald-600">
                    100%
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Filter Pills and Search Bar */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-900 to-pink-900 text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-purple-50/70'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Live Search input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search certificate, issuer or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-purple-400 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </AnimatedSection>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => {
            const badgeTheme = getBadgeStyle(cert.badgeColor);

            return (
              <AnimatedSection
                key={cert.id}
                direction="up"
                delay={0.08 * index}
                className="h-full"
              >
                <div 
                  onClick={() => setActiveCertificate(cert)}
                  className="h-full bg-white rounded-3xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCertificate(cert);
                    }
                  }}
                >
                  
                  {/* Subtle pastel top edge accent */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${badgeTheme.accentGradient}`} />

                  {/* Interactive Certificate Preview Graphic Thumbnail */}
                  <div className="p-5 pb-0 bg-gradient-to-b from-slate-50/70 to-white relative">
                    <div className="relative group/thumb overflow-hidden rounded-2xl">
                      <CertificateVisualDocument cert={cert} />
                      
                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-purple-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs rounded-2xl">
                        <div className="px-3.5 py-2 rounded-xl bg-white/95 text-purple-950 font-mono text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ZoomIn className="w-4 h-4 text-pink-600" />
                          <span>Click to Expand</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Row: Issuer & Date & Status Badge */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-900 line-clamp-1">
                            {cert.issuer}
                          </span>
                        </div>

                        {/* Status chip */}
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${badgeTheme.bg} ${badgeTheme.border} ${badgeTheme.text} shrink-0`}>
                          {cert.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold font-display text-[#0a1128] group-hover:text-purple-900 transition-colors mb-1.5 leading-snug">
                        {cert.title}
                      </h3>

                      {/* Date & Category tag */}
                      <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {cert.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-pink-700 font-medium">
                          <Layers className="w-3 h-3" />
                          {cert.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                        {cert.description}
                      </p>
                    </div>

                    <div>
                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cert.skills.slice(0, 4).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-purple-50/80 text-purple-900 border border-purple-200/60"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 text-slate-600">
                            +{cert.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Credential ID / Verification footer */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                        {cert.credentialId ? (
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 truncate mr-2" title={cert.credentialId}>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{cert.credentialId}</span>
                          </div>
                        ) : (
                          <div className="text-[11px] text-slate-400">
                            SRMCEM Certified
                          </div>
                        )}

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-xs font-medium text-purple-700 group-hover:text-purple-900 group-hover:underline flex items-center gap-1">
                            <span>Details</span>
                            <ZoomIn className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Empty state when search produces no results */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200">
            <Award className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold font-display text-slate-800">
              No matching certificates found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or clearing the filter to view all accreditations.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 text-xs font-medium rounded-xl bg-purple-100 text-purple-800 hover:bg-purple-200 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Expanded Certificate Modal View */}
      {activeCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveCertificate(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-3xl border border-purple-200 max-w-4xl w-full my-auto shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-purple-50/80 via-white to-pink-50/80 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-900 border border-purple-200">
                  <Award className="w-5 h-5 text-purple-700" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-purple-800 uppercase tracking-widest">
                    {activeCertificate.issuer}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#0a1128] leading-tight">
                    {activeCertificate.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* 1. EXPANDED VISUAL CERTIFICATE DOCUMENT */}
              <div className="relative group">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Official Verified Document</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Cryptographically Authenticated</span>
                  </div>
                </div>

                <div className="p-2 sm:p-4 bg-slate-900/5 rounded-3xl border border-slate-200/90 shadow-inner">
                  <CertificateVisualDocument cert={activeCertificate} expanded={true} />
                </div>
              </div>

              {/* 2. Metadata Grid Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl bg-gradient-to-r from-purple-50/60 via-pink-50/40 to-slate-50 border border-purple-100/80">
                <div className="p-2.5 rounded-xl bg-white/80 border border-purple-100/60">
                  <span className="text-[11px] font-mono text-slate-500 block">Issued Date</span>
                  <span className="text-xs font-mono font-bold text-slate-900">{activeCertificate.date}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/80 border border-purple-100/60">
                  <span className="text-[11px] font-mono text-slate-500 block">Track / Category</span>
                  <span className="text-xs font-mono font-semibold text-purple-900">{activeCertificate.category}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/80 border border-purple-100/60">
                  <span className="text-[11px] font-mono text-slate-500 block">Credential ID</span>
                  <span className="text-xs font-mono font-bold text-slate-800 truncate block" title={activeCertificate.credentialId}>
                    {activeCertificate.credentialId || 'SRMCEM-RECORD'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/80 border border-purple-100/60">
                  <span className="text-[11px] font-mono text-slate-500 block">Authentication</span>
                  <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {activeCertificate.status}
                  </span>
                </div>
              </div>

              {/* 3. Description & Authority */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-2">
                  Curriculum & Verification Summary
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200">
                  {activeCertificate.description}
                </p>
              </div>

              {/* 4. Verified Skills & Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-2.5">
                  Verified Skills & Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCertificate.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-purple-50 text-purple-900 border border-purple-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Signatory Banner */}
              {activeCertificate.instructorOrSignatory && (
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
                  <UserCheck className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>
                    Accredited & Authorized by: <strong className="text-slate-900">{activeCertificate.instructorOrSignatory}</strong>
                  </span>
                </div>
              )}

            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50/90 shrink-0">
              <div className="text-xs font-mono text-slate-500">
                Press <kbd className="px-1.5 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs font-bold">Esc</kbd> to exit
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition cursor-pointer"
                >
                  Close
                </button>

                {activeCertificate.verificationUrl && (
                  <a
                    href={activeCertificate.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-900 to-pink-900 hover:from-purple-800 hover:to-pink-800 rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Verify with Issuer</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
