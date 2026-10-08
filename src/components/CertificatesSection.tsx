import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  UserCheck,
  Trophy,
  Globe,
  Star,
  Cpu,
  Rocket
} from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { CertificateItem } from '../types/portfolio';
import { AnimatedSection } from './AnimatedSection';

/**
 * High-Fidelity Visual Certificate Document matching the user's authentic credentials:
 * 1. Google Solution Challenge 2026: Build with AI (Dark modern theme, red/green/blue pills, H2S badge, wireframe globe)
 * 2. ELUSOC 2026: Summer of Code (Parchment retro typography, Rank 63 highlighted, EduLinkUp verification)
 * 3. CodeBlitz 2.0: Craftora & OSEN (OSEN, Craftora, ElevenLabs logos, dual signatures)
 * 4. EY & Microsoft: AI Skills Passport (Corporate azure blue & dark border, dual EY/Microsoft logos)
 * 5. Kaggle & Google: 5-Day AI Agents Intensive (Kaggle teal & Google colorway, hologram turntable badge)
 * 6. Coderush 2.0: BBDNIIT (Gold ribbon seal, AICTE/NBA/GeeksforGeeks banner, triple signatories)
 * 7. AttentionX AI Hackathon: UnsaidTalks (Modern dark & gold curved wave layout, Raghav Chopra signature)
 * 8. Adivya 2.0: Enginow (Modern Enginow developer hackathon layout, gold star badge, Team dy.deepshikha04aug)
 * 9. CodeStrike 2026: Unstop & Bytebattle (Navy blue chevron ribbon, Bytebattle medallion, SRMCEM representation)
 * 10. Tech Talk: Generative AI & LLMs (Deep purple cyber circuit theme, CSI SRMCEM x D'CODERS)
 * 11. QuizOff 2026: CampusCrew (Soft sky blue tech layout, CampusCrew rocket emblem, Unstop co-brand)
 */
export const CertificateVisualDocument: React.FC<{
  cert: CertificateItem;
  expanded?: boolean;
}> = ({ cert, expanded = false }) => {

  // Render the original attached certificate image if it exists
  if (cert.image) {
    const isPdf = cert.image.toLowerCase().endsWith('.pdf');
    return (
      <div className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden select-none bg-slate-900 border border-slate-700/50 flex items-center justify-center ${expanded ? 'max-w-3xl mx-auto' : ''}`}>
        {isPdf ? (
          <embed src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf" className="w-full h-full" />
        ) : (
          <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
        )}
      </div>
    );
  }

  // 1. Google Solution Challenge 2026: Build with AI (Dark theme)
  if (cert.id === 'google-solution-challenge-2026') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#0d0f12] text-white flex flex-col justify-between border border-slate-700/80 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-2">
          <div className={`flex items-center gap-1 font-mono font-bold tracking-tight text-slate-200 ${expanded ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-xs'}`}>
            <span className="text-blue-400 font-serif">{`{`}</span>
            <span className="text-white">Build</span>
            <span className="text-blue-400">❖</span>
            <span className="text-white">with AI</span>
            <span className="text-blue-400 font-serif">{`}`}</span>
          </div>

          <div className={`font-mono text-slate-400 flex items-center gap-1 ${expanded ? 'text-[10px] sm:text-xs' : 'text-[8px] sm:text-[9px]'}`}>
            <span>Powered by</span>
            <span className="font-extrabold text-blue-400 tracking-wider">H2S</span>
          </div>
        </div>

        {/* Center */}
        <div className="relative z-10 text-center my-auto py-1">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <div className="flex items-center gap-0.5">
              <span className={`rounded-full bg-blue-500 inline-block transform -rotate-45 ${expanded ? 'w-3 h-3' : 'w-2 h-2'}`} />
              <span className={`rounded-full bg-rose-500 inline-block transform rotate-12 ${expanded ? 'w-3 h-3' : 'w-2 h-2'}`} />
              <span className={`rounded-full bg-emerald-400 inline-block transform rotate-45 ${expanded ? 'w-3 h-3' : 'w-2 h-2'}`} />
            </div>
            <span className={`font-display font-black tracking-tight text-white ${expanded ? 'text-lg sm:text-2xl md:text-3xl' : 'text-xs sm:text-sm'}`}>
              Solution Challenge
            </span>
          </div>

          <div className={`flex items-center justify-center gap-1 font-mono uppercase tracking-[0.18em] text-slate-400 font-semibold mb-1 ${expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'}`}>
            <span>➔</span>
            <span>CERTIFICATE OF PARTICIPATION</span>
          </div>

          <p className={`text-slate-400 font-mono ${expanded ? 'text-[10px] sm:text-xs mb-1' : 'text-[7px] sm:text-[8px] mb-0.5'}`}>
            This certificate is awarded to
          </p>

          <div className={`font-display font-black text-white tracking-wide border-b border-slate-700/80 inline-block ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl pb-1.5 px-6' : 'text-sm sm:text-base pb-0.5 px-3'
          }`}>
            Deepshikha Yadav
          </div>

          <p className={`text-slate-300 max-w-lg mx-auto font-sans leading-tight ${
            expanded ? 'text-[10px] sm:text-xs mt-2.5' : 'text-[7px] sm:text-[8px] mt-1 line-clamp-2'
          }`}>
            in recognition of their successful prototype submission for <strong className="text-white font-semibold">Solution Challenge 2026: Build with AI</strong> and their contribution to the spirit of innovation.
          </p>
        </div>

        {/* Footer */}
        <div className={`relative z-10 flex items-center justify-between font-mono text-slate-400 border-t border-slate-800 ${
          expanded ? 'pt-2.5 text-[9px] sm:text-[11px]' : 'pt-1.5 text-[7px] sm:text-[8px]'
        }`}>
          <div className={`flex items-center gap-1 rounded-full bg-slate-900 border border-slate-700 ${expanded ? 'px-2.5 py-1' : 'px-1.5 py-0.5'}`}>
            <Globe className={expanded ? 'w-3.5 h-3.5 text-blue-400' : 'w-2.5 h-2.5 text-blue-400'} />
            <span>Dated: {cert.date}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className={`rounded-full bg-rose-500 ${expanded ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />
            <span className="text-slate-300 font-semibold">ID: {cert.credentialId}</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. ELUSOC 2026: Summer of Code (Rank 63 highlighted)
  if (cert.id === 'elusoc-2026-rank-63') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#faf8f5] text-slate-900 flex flex-col justify-between border-2 border-amber-900/20 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        <div className="text-center pt-0.5">
          <div className={`mx-auto rounded-xl border-2 border-amber-700 bg-amber-50 flex items-center justify-center shadow-xs ${
            expanded ? 'w-10 h-10 sm:w-12 sm:h-12 mb-2' : 'w-6 h-6 mb-1'
          }`}>
            <Trophy className={expanded ? 'w-5 h-5 sm:w-6 sm:h-6 text-amber-700' : 'w-3 h-3 text-amber-700'} />
          </div>
          <div className={`font-mono font-bold uppercase tracking-[0.18em] text-slate-600 ${
            expanded ? 'text-[10px] sm:text-xs' : 'text-[7px] sm:text-[8px]'
          }`}>
            THIS CERTIFICATE IS AWARDED TO
          </div>
        </div>

        {/* Recipient */}
        <div className="text-center my-auto py-0.5">
          <div className={`font-mono font-black tracking-wider text-slate-950 uppercase border-b border-slate-300 inline-block ${
            expanded ? 'text-xl sm:text-3xl md:text-5xl pb-2 px-4' : 'text-xs sm:text-sm pb-1 px-2'
          }`}>
            DEEPSHIKHA YADAV
          </div>

          <div className={`grid grid-cols-4 gap-1 sm:gap-2 max-w-xl mx-auto font-mono text-left ${
            expanded ? 'mt-3.5' : 'mt-1.5'
          }`}>
            <div className={`rounded-lg bg-amber-50/70 border border-amber-200/80 ${expanded ? 'p-2' : 'p-1'}`}>
              <span className={`text-slate-500 block uppercase font-bold ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>Event</span>
              <span className={`font-black text-slate-900 ${expanded ? 'text-xs' : 'text-[8px]'}`}>ELUSOC 2026</span>
            </div>

            <div className={`rounded-lg bg-amber-50/70 border border-amber-200/80 ${expanded ? 'p-2' : 'p-1'}`}>
              <span className={`text-slate-500 block uppercase font-bold ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>Role</span>
              <span className={`font-black text-slate-900 ${expanded ? 'text-xs' : 'text-[8px]'}`}>Contributor</span>
            </div>

            <div className={`rounded-lg bg-amber-100 border-2 border-amber-500 text-amber-950 shadow-xs ${expanded ? 'p-2' : 'p-1'}`}>
              <span className={`text-amber-800 block uppercase font-black ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>Achievement</span>
              <span className={`font-black flex items-center gap-0.5 text-amber-900 ${expanded ? 'text-xs sm:text-sm' : 'text-[8px]'}`}>
                <Trophy className={expanded ? 'w-3 h-3 text-amber-700' : 'w-2 h-2 text-amber-700'} />
                <span>{cert.rank}</span>
              </span>
            </div>

            <div className={`rounded-lg bg-amber-50/70 border border-amber-200/80 ${expanded ? 'p-2' : 'p-1'}`}>
              <span className={`text-slate-500 block uppercase font-bold ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>Issue Date</span>
              <span className={`font-black text-slate-900 ${expanded ? 'text-xs' : 'text-[8px]'}`}>{cert.date}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={expanded ? 'space-y-2' : 'space-y-1'}>
          <div className={`rounded-xl bg-amber-50/90 border border-amber-300 flex items-center justify-between font-mono ${
            expanded ? 'p-2 sm:p-2.5 text-[10px] sm:text-xs' : 'p-1 text-[7px] sm:text-[8px]'
          }`}>
            <span className="text-slate-600 font-bold uppercase">CERTIFICATE ID:</span>
            <span className="font-black text-amber-900 tracking-wider">ELUSOC-2026-CON-063</span>
          </div>

          <div className={`rounded-xl bg-emerald-50 border border-emerald-300 flex items-center gap-1.5 font-mono text-emerald-900 ${
            expanded ? 'p-2 text-[9px] sm:text-[11px]' : 'p-1 text-[6px] sm:text-[7px]'
          }`}>
            <CheckCircle2 className={expanded ? 'w-3.5 h-3.5 text-emerald-600 shrink-0' : 'w-2 h-2 text-emerald-600 shrink-0'} />
            <span className="font-bold">AUTHENTICITY CONFIRMED:</span>
            <span className="text-emerald-800 truncate">EduLinkUp Official Digital Record</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. CodeBlitz 2.0 (Craftora & OSEN with partner logos and dual signatures)
  if (cert.id === 'codeblitz-2026') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-white text-slate-900 flex flex-col justify-between border-2 border-rose-500 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        {/* Partner Logos */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className={`flex items-center gap-2 font-bold font-mono ${expanded ? 'text-xs' : 'text-[8px]'}`}>
            <span className="text-blue-900">OSEN</span>
            <span className="text-indigo-600">craftora</span>
            <span className="text-slate-800">Vakh</span>
            <span className="text-slate-900 font-black">IIElevenLabs</span>
            <span className="text-slate-700">LPPGC</span>
          </div>
        </div>

        {/* Title & Body */}
        <div className="text-center my-auto py-1">
          <h4 className={`font-serif uppercase tracking-widest text-slate-900 font-bold mb-0.5 ${
            expanded ? 'text-base sm:text-2xl' : 'text-[10px] sm:text-xs'
          }`}>
            CERTIFICATE OF PARTICIPATION
          </h4>
          <p className={`text-slate-500 font-serif italic mb-1 ${expanded ? 'text-[10px] sm:text-xs' : 'text-[7px] sm:text-[8px]'}`}>
            This certificate is proudly presented to
          </p>

          <div className={`font-serif italic text-slate-950 font-bold mb-1 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl' : 'text-sm sm:text-base'
          }`}>
            Deepshikha Yadav
          </div>

          <p className={`text-slate-700 font-sans max-w-md mx-auto leading-tight ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px] line-clamp-2'
          }`}>
            {cert.description}
          </p>
          <p className={`text-slate-500 max-w-sm mx-auto leading-tight ${
            expanded ? 'text-[10px] sm:text-xs mt-1' : 'text-[7px] sm:text-[8px] mt-0.5'
          }`}>
            In recognition of dedication, creativity, collaboration, and contribution.
          </p>
        </div>

        {/* Dual Signatures & Verification ID */}
        <div className={`flex items-end justify-between border-t border-slate-200 font-mono ${
          expanded ? 'pt-2.5 text-xs' : 'pt-1.5 text-[8px]'
        }`}>
          <div>
            <div className={`font-serif italic text-slate-800 font-bold ${expanded ? 'text-sm' : 'text-[9px]'}`}>Vikash</div>
            <div className={`font-bold text-slate-900 ${expanded ? 'text-[10px]' : 'text-[7px]'}`}>Vikash Kumar Yadav</div>
            <div className={`text-slate-500 ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>Founder, OSEN</div>
          </div>

          <div className="text-center">
            <span className={`text-slate-400 ${expanded ? 'text-[9px]' : 'text-[7px]'}`}>ID: {cert.credentialId}</span>
          </div>

          <div className="text-right">
            <div className={`font-serif italic text-slate-800 font-bold ${expanded ? 'text-sm' : 'text-[9px]'}`}>Aryan Pandey</div>
            <div className={`font-bold text-slate-900 ${expanded ? 'text-[10px]' : 'text-[7px]'}`}>Aryan Pandey</div>
            <div className={`text-slate-500 ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>Programme Manager, OSEN</div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Microsoft & EY AI Skills Passport
  if (cert.id === 'ey-microsoft-ai-skills') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-white text-slate-900 flex flex-col justify-between border-4 border-slate-900 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
        style={{ boxShadow: 'inset 0 0 0 3px #0284c7' }}
      >
        {/* EY + Microsoft Logos Header */}
        <div className="flex items-center gap-4 border-b border-slate-200 pb-2">
          <div className="flex items-center gap-1 font-sans font-black text-slate-950">
            <span className={`text-amber-500 font-black ${expanded ? 'text-2xl' : 'text-sm'}`}>EY</span>
            <span className={`text-slate-500 font-normal leading-tight ml-1 ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>
              Building a better<br />working world
            </span>
          </div>

          <div className="h-5 w-px bg-slate-300" />

          <div className={`flex items-center gap-1 font-sans font-bold text-slate-800 ${expanded ? 'text-sm' : 'text-[9px]'}`}>
            <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
              <span className="bg-rose-500 rounded-2xs" />
              <span className="bg-emerald-500 rounded-2xs" />
              <span className="bg-blue-500 rounded-2xs" />
              <span className="bg-amber-500 rounded-2xs" />
            </div>
            <span>Microsoft</span>
          </div>
        </div>

        {/* Certificate Title & Recipient */}
        <div className="text-center my-auto py-1">
          <h4 className={`font-display uppercase tracking-widest text-slate-950 font-black mb-0.5 ${
            expanded ? 'text-base sm:text-2xl' : 'text-[10px] sm:text-xs'
          }`}>
            CERTIFICATE OF COMPLETION
          </h4>
          <p className={`text-slate-500 font-sans mb-1 ${expanded ? 'text-[10px] sm:text-xs' : 'text-[7px] sm:text-[8px]'}`}>
            This is to certify that
          </p>

          <div className={`font-display font-extrabold text-slate-950 mb-1 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl' : 'text-sm sm:text-base'
          }`}>
            Deepshikha Yadav
          </div>

          <p className={`text-slate-600 mb-1 ${expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'}`}>
            has successfully completed the course
          </p>

          <div className={`font-bold font-display text-blue-950 ${expanded ? 'text-sm sm:text-lg md:text-xl' : 'text-xs'}`}>
            {cert.title}
          </div>
          <div className={`text-slate-500 ${expanded ? 'text-xs' : 'text-[8px]'}`}>
            offered by {cert.issuer}
          </div>
        </div>

        <div className={`text-slate-500 text-center border-t border-slate-200 ${
          expanded ? 'text-[8px] sm:text-[10px] pt-2.5' : 'text-[6px] sm:text-[7px] pt-1.5'
        }`}>
          Covers Sustainability, Business & Technology • ID: EY-MSFT-AIPASS-DY2026
        </div>
      </div>
    );
  }

  // 5. Kaggle & Google: 5-Day AI Agents
  if (cert.id === 'kaggle-google-ai-agents') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-white text-slate-900 flex flex-col justify-between border-4 border-slate-900 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1e2329] rounded-l-[80px] pointer-events-none -mr-4 flex items-center justify-center p-3">
          <div className={`rounded-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-500 p-0.5 shadow-2xl flex items-center justify-center ${
            expanded ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-10 h-10'
          }`}>
            <div className="w-full h-full bg-[#1e2329] rounded-xl flex items-center justify-center text-purple-300">
              <Sparkles className={expanded ? 'w-8 h-8' : 'w-5 h-5'} />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-2">
          <span className={`font-display font-black text-[#20beff] ${expanded ? 'text-xl sm:text-2xl' : 'text-sm'}`}>kaggle</span>
          <span className="text-slate-300">|</span>
          <span className={`font-display font-bold text-slate-800 ${expanded ? 'text-lg sm:text-xl' : 'text-xs'}`}>
            <span className="text-blue-600">G</span>
            <span className="text-rose-600">o</span>
            <span className="text-amber-500">o</span>
            <span className="text-blue-600">g</span>
            <span className="text-emerald-600">l</span>
            <span className="text-rose-600">e</span>
          </span>
        </div>

        {/* Body Text */}
        <div className="my-auto py-1 max-w-[65%]">
          <p className={`font-mono text-slate-500 uppercase tracking-wider mb-0.5 ${expanded ? 'text-[9px] sm:text-[11px]' : 'text-[6px] sm:text-[7px]'}`}>
            THIS CERTIFIES THAT
          </p>

          <div className={`font-display font-black text-slate-950 mb-0.5 ${expanded ? 'text-xl sm:text-3xl md:text-4xl' : 'text-xs sm:text-sm'}`}>
            Deepshikha Yadav
          </div>

          <p className={`font-mono text-slate-500 uppercase tracking-wider mb-1 ${expanded ? 'text-[9px] sm:text-[11px]' : 'text-[6px] sm:text-[7px]'}`}>
            HAS SUCCESSFULLY EARNED THE BADGE
          </p>

          <div className={`font-display font-black text-slate-900 border-b-2 border-slate-900 pb-0.5 inline-block ${
            expanded ? 'text-sm sm:text-lg md:text-xl' : 'text-[9px] sm:text-[10px]'
          }`}>
            {cert.title}
          </div>
        </div>

        <div className={`font-mono text-slate-500 ${expanded ? 'text-[9px] sm:text-[11px]' : 'text-[7px] sm:text-[8px]'}`}>
          ON {cert.date.toUpperCase()} • VERIFIED KAGGLE ID: {cert.credentialId}
        </div>
      </div>
    );
  }

  // 6. Coderush 2.0 Hackathon (BBDNIIT)
  if (cert.id === 'coderush-2026') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#fffdfa] text-slate-900 flex flex-col justify-between border-2 border-amber-600 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        <div className="absolute inset-1.5 border border-amber-200 rounded-xl pointer-events-none" />

        {/* Top Header: BBDNIIT + Affiliations */}
        <div className="flex items-center justify-between border-b border-amber-200 pb-1.5 relative z-10">
          <div>
            <div className={`font-display font-black text-amber-950 tracking-wider ${expanded ? 'text-sm sm:text-base' : 'text-[9px] sm:text-[10px]'}`}>
              BBDNIIT, LUCKNOW
            </div>
            <div className={`text-slate-500 font-mono ${expanded ? 'text-[9px]' : 'text-[6px]'}`}>
              AICTE Approved • NBA Accredited • CSI Lucknow Chapter
            </div>
          </div>
          <div className={`px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 font-mono font-bold ${
            expanded ? 'text-[10px]' : 'text-[7px]'
          }`}>
            GeeksforGeeks
          </div>
        </div>

        {/* Center */}
        <div className="text-center my-auto py-1 relative z-10">
          <div className={`inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono font-bold uppercase tracking-wider mb-1 ${
            expanded ? 'text-[10px]' : 'text-[7px]'
          }`}>
            <Award className={expanded ? 'w-3 h-3 text-amber-700' : 'w-2 h-2 text-amber-700'} />
            <span>CERTIFICATE OF PARTICIPATION</span>
          </div>

          <p className={`text-slate-500 font-serif italic ${expanded ? 'text-xs mb-1' : 'text-[7px] mb-0.5'}`}>
            This is proudly presented to
          </p>

          <div className={`font-serif font-black text-slate-950 border-b border-amber-300 inline-block px-4 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl pb-1 mb-1.5' : 'text-xs sm:text-sm pb-0.5 mb-1'
          }`}>
            Deepshikha Yadav
          </div>

          <p className={`text-slate-700 font-sans max-w-md mx-auto leading-tight ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px] line-clamp-2'
          }`}>
            {cert.description}
          </p>
        </div>

        {/* 3 Signatures */}
        <div className={`grid grid-cols-3 gap-1 border-t border-amber-200 text-center font-mono relative z-10 ${
          expanded ? 'pt-2 text-xs' : 'pt-1 text-[7px]'
        }`}>
          <div>
            <div className={`font-serif italic font-bold text-slate-800 ${expanded ? 'text-xs' : 'text-[8px]'}`}>Anurag S.</div>
            <div className="text-slate-600 font-bold">Dr. Anurag Srivastava</div>
            <div className="text-slate-400">HOD IT & Convener</div>
          </div>
          <div>
            <div className={`font-serif italic font-bold text-slate-800 ${expanded ? 'text-xs' : 'text-[8px]'}`}>Laxmi V.</div>
            <div className="text-slate-600 font-bold">Dr. Laxmi Vajpeyi</div>
            <div className="text-slate-400">President, IIC</div>
          </div>
          <div>
            <div className={`font-serif italic font-bold text-slate-800 ${expanded ? 'text-xs' : 'text-[8px]'}`}>V.K. Singh</div>
            <div className="text-slate-600 font-bold">Dr. V.K. Singh</div>
            <div className="text-slate-400">Director Engineering</div>
          </div>
        </div>
      </div>
    );
  }

  // 7. AttentionX AI Hackathon (UnsaidTalks)
  if (cert.id === 'attentionx-ai-hackathon') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#0e121a] text-white flex flex-col justify-between border border-amber-500/60 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 via-purple-500/5 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-black text-amber-400 ${expanded ? 'text-base sm:text-lg' : 'text-xs'}`}>
              UnsaidTalks
            </span>
            <span className={`text-slate-400 font-mono ${expanded ? 'text-[10px]' : 'text-[7px]'}`}>Education Pvt. Ltd.</span>
          </div>
          <div className={`px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono border border-amber-400/40 ${
            expanded ? 'text-[10px]' : 'text-[7px]'
          }`}>
            AI Hackathon Track
          </div>
        </div>

        {/* Center */}
        <div className="text-center my-auto py-1 relative z-10">
          <div className={`font-mono uppercase tracking-[0.2em] text-amber-300 font-bold mb-0.5 ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'
          }`}>
            CERTIFICATE OF PARTICIPATION
          </div>
          <p className={`text-slate-400 font-sans ${expanded ? 'text-xs mb-1' : 'text-[7px] mb-0.5'}`}>
            This certificate is awarded to
          </p>
          <div className={`font-display font-black text-white tracking-wide border-b border-amber-500/40 inline-block px-4 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl pb-1 mb-1.5' : 'text-xs sm:text-sm pb-0.5 mb-1'
          }`}>
            Deepshikha Yadav
          </div>
          <p className={`text-slate-300 max-w-md mx-auto leading-tight ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px] line-clamp-2'
          }`}>
            {cert.description}
          </p>
        </div>

        {/* Footer */}
        <div className={`flex items-end justify-between border-t border-slate-800 text-slate-400 font-mono relative z-10 ${
          expanded ? 'pt-2.5 text-xs' : 'pt-1.5 text-[8px]'
        }`}>
          <div>
            <span className="block text-slate-500">Date: {cert.date}</span>
            <span className="text-amber-400">ID: {cert.credentialId}</span>
          </div>
          <div className="text-right">
            <div className={`font-serif italic text-amber-300 ${expanded ? 'text-sm' : 'text-[9px]'}`}>Raghav Chopra</div>
            <div className="text-white font-bold">Raghav Chopra</div>
            <div className="text-slate-500">Founder & CEO, UnsaidTalks</div>
          </div>
        </div>
      </div>
    );
  }

  // 8. Adivya 2.0 - Developer Hackathon (Enginow)
  if (cert.id === 'adivya-2026-hackathon') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#120f24] text-white flex flex-col justify-between border border-pink-500/60 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-900/60 pb-1.5">
          <div className="flex items-center gap-2">
            <span className={`font-display font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent ${
              expanded ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm'
            }`}>
              enginow
            </span>
            <span className={`text-slate-400 font-mono ${expanded ? 'text-[10px]' : 'text-[7px]'}`}>Hackathon Series</span>
          </div>
          <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-mono border border-pink-500/40 ${
            expanded ? 'text-[10px]' : 'text-[7px]'
          }`}>
            <Star className={expanded ? 'w-3 h-3 text-pink-400' : 'w-2 h-2 text-pink-400'} />
            <span>Adivya 2.0</span>
          </div>
        </div>

        {/* Center */}
        <div className="text-center my-auto py-1">
          <div className={`font-mono uppercase tracking-[0.2em] text-pink-300 font-bold mb-0.5 ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'
          }`}>
            CERTIFICATE OF APPRECIATION
          </div>
          <p className={`text-slate-400 font-sans ${expanded ? 'text-xs mb-1' : 'text-[7px] mb-0.5'}`}>
            Awarded to Team dy.deepshikha04aug (SRMCEM)
          </p>
          <div className={`font-display font-black text-white tracking-wide border-b border-pink-500/50 inline-block px-4 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl pb-1 mb-1.5' : 'text-xs sm:text-sm pb-0.5 mb-1'
          }`}>
            Deepshikha Yadav
          </div>
          <p className={`text-slate-300 max-w-md mx-auto leading-tight ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px] line-clamp-2'
          }`}>
            {cert.description}
          </p>
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between border-t border-purple-900/60 text-slate-400 font-mono ${
          expanded ? 'pt-2.5 text-xs' : 'pt-1.5 text-[8px]'
        }`}>
          <span>SRMCEM Representative</span>
          <span className="text-pink-300 font-semibold">ID: {cert.credentialId}</span>
        </div>
      </div>
    );
  }

  // 9. CodeStrike 2026 (Bytebattle & Unstop)
  if (cert.id === 'codestrike-2026') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#0a192f] text-white flex flex-col justify-between border-2 border-cyan-500/60 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-black text-cyan-400 ${expanded ? 'text-sm sm:text-base' : 'text-[10px] sm:text-xs'}`}>
              BYTEBATTLE
            </span>
            <span className={`text-slate-400 font-mono ${expanded ? 'text-[10px]' : 'text-[7px]'}`}>Global Community</span>
          </div>
          <span className={`px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono font-bold ${
            expanded ? 'text-[10px]' : 'text-[7px]'
          }`}>
            Unstop Partnered
          </span>
        </div>

        {/* Center */}
        <div className="text-center my-auto py-1">
          <div className={`font-mono uppercase tracking-[0.2em] text-cyan-300 font-bold mb-0.5 ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'
          }`}>
            OFFICIAL CODING CHAMPIONSHIP
          </div>
          <p className={`text-slate-400 font-sans ${expanded ? 'text-xs mb-1' : 'text-[7px] mb-0.5'}`}>
            Presented to
          </p>
          <div className={`font-display font-black text-white tracking-wide border-b border-cyan-500/50 inline-block px-4 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl pb-1 mb-1.5' : 'text-xs sm:text-sm pb-0.5 mb-1'
          }`}>
            Deepshikha Yadav
          </div>
          <p className={`text-slate-300 max-w-md mx-auto leading-tight ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px] line-clamp-2'
          }`}>
            {cert.description}
          </p>
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between border-t border-slate-700 text-slate-400 font-mono ${
          expanded ? 'pt-2.5 text-xs' : 'pt-1.5 text-[8px]'
        }`}>
          <span>Date: {cert.date}</span>
          <span className="text-cyan-300 font-bold">{cert.credentialId}</span>
        </div>
      </div>
    );
  }

  // 10. Tech Talk: Generative AI and LLMs (CSI SRMCEM x D'CODERS)
  if (cert.id === 'srmcem-genai-llm-techtalk') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#180d2b] text-white flex flex-col justify-between border-2 border-purple-500/60 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-900/60 pb-1.5">
          <div className="flex items-center gap-2">
            <span className={`font-display font-black text-purple-300 ${expanded ? 'text-sm sm:text-base' : 'text-[10px] sm:text-xs'}`}>
              CSI_SRMCEM × D'CODERS
            </span>
          </div>
          <div className={`flex items-center gap-1 font-mono text-pink-300 ${expanded ? 'text-[10px]' : 'text-[7px]'}`}>
            <Cpu className={expanded ? 'w-3 h-3' : 'w-2 h-2'} />
            <span>Dept of CSE & AIML</span>
          </div>
        </div>

        {/* Center */}
        <div className="text-center my-auto py-1">
          <div className={`font-mono uppercase tracking-[0.2em] text-purple-300 font-bold mb-0.5 ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'
          }`}>
            CERTIFICATE OF PARTICIPATION
          </div>
          <p className={`text-slate-400 font-sans ${expanded ? 'text-xs mb-1' : 'text-[7px] mb-0.5'}`}>
            This certifies that
          </p>
          <div className={`font-display font-black text-white tracking-wide border-b border-purple-500/50 inline-block px-4 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl pb-1 mb-1.5' : 'text-xs sm:text-sm pb-0.5 mb-1'
          }`}>
            Deepshikha Yadav
          </div>
          <p className={`text-slate-300 max-w-md mx-auto leading-tight ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'
          }`}>
            actively participated in the <strong className="text-pink-300 font-semibold">Tech Talk on Generative AI & Large Language Models</strong> with speaker Arjit Verma.
          </p>
        </div>

        {/* 3 Signatures */}
        <div className={`grid grid-cols-3 gap-1 border-t border-purple-900/60 text-center font-mono text-slate-400 ${
          expanded ? 'pt-2 text-xs' : 'pt-1 text-[7px]'
        }`}>
          <div>
            <div className={`font-serif italic font-bold text-purple-200 ${expanded ? 'text-xs' : 'text-[8px]'}`}>Sandeep D.</div>
            <div className="text-white font-bold">Dr. Sandeep Dubey</div>
            <div className="text-slate-400">HOD AIML & DS</div>
          </div>
          <div>
            <div className={`font-serif italic font-bold text-purple-200 ${expanded ? 'text-xs' : 'text-[8px]'}`}>Pankaj K.</div>
            <div className="text-white font-bold">Dr. Pankaj Kumar</div>
            <div className="text-slate-400">HOD CSE</div>
          </div>
          <div>
            <div className={`font-serif italic font-bold text-purple-200 ${expanded ? 'text-xs' : 'text-[8px]'}`}>Akhil P.</div>
            <div className="text-white font-bold">Er. Akhil Pandey</div>
            <div className="text-slate-400">President, IIC</div>
          </div>
        </div>
      </div>
    );
  }

  // 11. QuizOff 2026: India's Biggest AI Quiz (CampusCrew & Unstop)
  if (cert.id === 'quizoff-2026-ai-quiz') {
    return (
      <div 
        className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl shadow-xl overflow-hidden bg-[#f0f9ff] text-slate-900 flex flex-col justify-between border-2 border-sky-400 select-none ${
          expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sky-200 pb-1.5">
          <div className="flex items-center gap-1.5">
            <Rocket className={expanded ? 'w-4 h-4 text-sky-600' : 'w-3 h-3 text-sky-600'} />
            <span className={`font-display font-black text-sky-950 ${expanded ? 'text-sm sm:text-base' : 'text-[10px] sm:text-xs'}`}>
              CampusCrew
            </span>
          </div>
          <span className={`px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-mono font-bold ${
            expanded ? 'text-[10px]' : 'text-[7px]'
          }`}>
            Hosted on Unstop
          </span>
        </div>

        {/* Center */}
        <div className="text-center my-auto py-1">
          <div className={`font-mono uppercase tracking-[0.2em] text-sky-800 font-bold mb-0.5 ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'
          }`}>
            CERTIFICATE OF MERIT & PARTICIPATION
          </div>
          <p className={`text-slate-500 font-sans ${expanded ? 'text-xs mb-1' : 'text-[7px] mb-0.5'}`}>
            Awarded to
          </p>
          <div className={`font-display font-black text-sky-950 border-b border-sky-300 inline-block px-4 ${
            expanded ? 'text-xl sm:text-3xl md:text-4xl pb-1 mb-1.5' : 'text-xs sm:text-sm pb-0.5 mb-1'
          }`}>
            Deepshikha Yadav
          </div>
          <p className={`text-slate-700 font-sans max-w-md mx-auto leading-tight ${
            expanded ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px] line-clamp-2'
          }`}>
            {cert.description}
          </p>
        </div>

        {/* Footer */}
        <div className={`flex items-end justify-between border-t border-sky-200 font-mono ${
          expanded ? 'pt-2 text-xs' : 'pt-1 text-[8px]'
        }`}>
          <div>
            <div className="text-slate-500">Date: {cert.date}</div>
            <div className="text-sky-800 font-bold">ID: {cert.credentialId}</div>
          </div>
          <div className="text-right">
            <div className={`font-serif italic font-bold text-sky-900 ${expanded ? 'text-sm' : 'text-[9px]'}`}>Aaradhya Gupta</div>
            <div className="text-slate-700 font-bold">Aaradhya Gupta</div>
            <div className="text-slate-500">Founder, CampusCrew</div>
          </div>
        </div>
      </div>
    );
  }

  // Generic fallback
  return (
    <div 
      className={`relative w-full aspect-[1.414/1] rounded-2xl md:rounded-3xl border-2 border-slate-300 shadow-xl overflow-hidden bg-white text-slate-900 flex flex-col justify-between select-none ${
        expanded ? 'p-6 sm:p-10 max-w-3xl mx-auto' : 'p-3.5 sm:p-4.5'
      }`}
    >
      <div className="text-center pt-1">
        <div className={`font-mono font-bold uppercase tracking-[0.2em] text-purple-900 ${expanded ? 'text-xs' : 'text-[8px]'}`}>
          {cert.issuer}
        </div>
        <h4 className={`font-serif uppercase tracking-wider font-bold text-slate-900 ${expanded ? 'text-base sm:text-lg' : 'text-[10px] sm:text-xs'}`}>
          Certificate of Participation
        </h4>
      </div>

      <div className="text-center my-auto py-1">
        <p className={`text-slate-500 font-serif italic ${expanded ? 'text-xs mb-1' : 'text-[7px] mb-0.5'}`}>Presented to</p>
        <div className={`font-serif font-black text-slate-950 ${expanded ? 'text-xl sm:text-3xl' : 'text-xs sm:text-sm'}`}>
          Deepshikha Yadav
        </div>
        <p className={`text-slate-700 max-w-md mx-auto ${expanded ? 'text-xs sm:text-sm mt-1' : 'text-[8px] mt-0.5'}`}>
          for participation in <strong className="text-slate-950">{cert.title}</strong>
        </p>
      </div>

      <div className={`flex items-end justify-between border-t border-slate-200 font-mono text-slate-600 ${
        expanded ? 'pt-2 text-xs' : 'pt-1 text-[8px]'
      }`}>
        <div>Date: {cert.date}</div>
        <div className="text-emerald-700 font-bold flex items-center gap-1">
          <CheckCircle2 className={expanded ? 'w-3 h-3' : 'w-2 h-2'} />
          <span>{cert.status}</span>
        </div>
        <div>ID: {cert.credentialId || 'VERIFIED'}</div>
      </div>
    </div>
  );
};

export const CertificatesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  // Close modal on Escape key & freeze scroll
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
    'Cloud & Global Hackathons',
    'Open Source & Web',
    'AI & Machine Learning',
    'Academic & Specialization'
  ];

  const filteredCertificates = certificatesData.filter(cert => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.rank && cert.rank.toLowerCase().includes(searchQuery.toLowerCase())) ||
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
                Certificates & Accreditations
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 rounded-full mt-4" />
              <p className="text-sm text-slate-600 mt-4 max-w-2xl leading-relaxed">
                Full official certificates displayed in each card. Click any certificate to open an enlarged high-resolution view, inspect complete accreditation details, and verify credentials.
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

              <div className="px-4 py-2.5 rounded-2xl bg-white border border-amber-200/80 shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg font-bold font-mono text-amber-900">
                    Rank 63
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    ELUSOC 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter & Search Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-white rounded-2xl border border-slate-200/90 shadow-xs">
            
            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition cursor-pointer ${
                      isActive 
                        ? 'bg-purple-900 text-white shadow-xs' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] md:w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search certificate, rank or skill..."
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

        {/* Certificates Grid: Every card displays the complete full certificate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => {
            const badgeTheme = getBadgeStyle(cert.badgeColor);

            return (
              <AnimatedSection
                key={cert.id}
                direction="up"
                delay={0.05 * index}
                className="h-full"
              >
                <div 
                  onClick={() => setActiveCertificate(cert)}
                  className="h-full bg-white rounded-3xl border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/15 hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col justify-between overflow-hidden group relative cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCertificate(cert);
                    }
                  }}
                >
                  
                  {/* Top color ribbon accent */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${badgeTheme.accentGradient}`} />

                  {/* Complete Full Certificate Document rendered directly in the card */}
                  <div className="p-3.5 sm:p-4.5 bg-gradient-to-b from-slate-50/70 to-white relative">
                    <div className="relative group/thumb overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group-hover:border-purple-300">
                      
                      {/* Fully rendered certificate document */}
                      <CertificateVisualDocument cert={cert} expanded={false} />
                      
                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-purple-950/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs rounded-2xl">
                        <div className="px-3.5 py-2 rounded-xl bg-white/95 text-purple-950 font-mono text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <ZoomIn className="w-4 h-4 text-pink-600" />
                          <span>Click to Enlarge / Inspect</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Details & Metadata */}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Issuer & Rank/Status chip */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-900 line-clamp-1">
                          {cert.issuer}
                        </span>

                        {cert.rank ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 shrink-0 flex items-center gap-1">
                            <Trophy className="w-3 h-3 text-amber-700" />
                            <span>{cert.rank}</span>
                          </span>
                        ) : (
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${badgeTheme.bg} ${badgeTheme.border} ${badgeTheme.text} shrink-0`}>
                            {cert.status}
                          </span>
                        )}
                      </div>

                      {/* Certificate Title */}
                      <h3 className="text-base font-bold font-display text-[#0a1128] group-hover:text-purple-900 transition-colors mb-1.5 leading-snug">
                        {cert.title}
                      </h3>

                      {/* Date & Category */}
                      <div className="flex items-center gap-2.5 text-[11px] font-mono text-slate-500 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {cert.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-pink-700 font-medium truncate">
                          <Layers className="w-3 h-3 shrink-0" />
                          <span className="truncate">{cert.category}</span>
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* Verified Skills tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {cert.skills.slice(0, 3).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-purple-50/80 text-purple-900 border border-purple-200/60"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 text-slate-600">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Credential ID and Inspect Action */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                        {cert.credentialId ? (
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 truncate mr-2" title={cert.credentialId}>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{cert.credentialId}</span>
                          </div>
                        ) : (
                          <div className="text-[11px] text-slate-400">
                            Official Accreditation
                          </div>
                        )}

                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-xs font-semibold text-purple-700 group-hover:text-purple-900 group-hover:underline flex items-center gap-1">
                            <span>Inspect</span>
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

      {/* Expanded Certificate Modal View — rendered via portal to escape SectionPopup CSS transform stacking context */}
      {activeCertificate && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          style={{ animation: 'fadeInModal 0.2s ease' }}
          onClick={() => setActiveCertificate(null)}
          role="dialog"
          aria-modal="true"
        >
          <style>{`@keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }`}</style>
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
                  <div className="text-xs font-mono font-bold text-purple-800 uppercase tracking-widest flex items-center gap-2">
                    <span>{activeCertificate.issuer}</span>
                    {activeCertificate.rank && (
                      <span className="px-2 py-0.2 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[10px]">
                        ★ {activeCertificate.rank}
                      </span>
                    )}
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
                    <span>Expanded High-Resolution Certificate Document</span>
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
                  <span className="text-[11px] font-mono text-slate-500 block">Category</span>
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
                    {activeCertificate.rank ? activeCertificate.rank : activeCertificate.status}
                  </span>
                </div>
              </div>

              {/* 3. Description & Authority */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-2">
                  Credential Details & Achievement
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
        </div>,
        document.body
      )}

    </section>
  );
};
