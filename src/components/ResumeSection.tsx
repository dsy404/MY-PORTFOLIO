import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Sparkles, 
  Code2, 
  FolderGit2,
  CheckCircle2,
  LayoutTemplate,
  Layers
} from 'lucide-react';
import { resumeData, personalInfo } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'paper' | 'cards'>('paper');

  const handleCopyText = async () => {
    const textContent = `
DEEPSHIKHA YADAV
${resumeData.location} | ${resumeData.phone} | ${resumeData.email} | ${resumeData.linkedin} | ${resumeData.github}

OBJECTIVE
${resumeData.objective}

EDUCATION
${resumeData.education.institution} — Expected Graduation: ${resumeData.education.expectedGraduation}
${resumeData.education.degree} — CGPA: ${resumeData.education.cgpa} — ${resumeData.education.standing}

TECHNICAL SKILLS
${resumeData.technicalSkills.map(s => `● ${s.category}: ${s.skills.join(', ')}`).join('\n')}

PROJECTS
${resumeData.projects.map(p => `${p.title} | ${p.techStack} | ${p.githubUrl}\n${p.highlights.map(h => `● ${h}`).join('\n')}`).join('\n\n')}

TRAINING PROGRAM
${resumeData.trainingPrograms.map(t => `${t.title} — ${t.institution} — ${t.period}\n${t.highlights.map(h => `● ${h}`).join('\n')}`).join('\n\n')}

OPEN SOURCE CONTRIBUTIONS
${resumeData.openSource.map(o => `${o.program}\n${o.contributions.map(c => `● ${c}`).join('\n')}`).join('\n\n')}

CERTIFICATIONS
${resumeData.certifications.map(c => `● ${c.name} (${c.date})`).join('\n')}
`.trim();

    try {
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Background Soft Pastel Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-700 font-semibold mb-2 flex items-center gap-2">
                <span>CURRICULUM VITAE & QUALIFICATIONS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
                Resume
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-sky-400 rounded-full mt-4" />
              <p className="text-sm text-slate-600 mt-3 max-w-2xl">
                Official academic and engineering resume highlighting multi-agent orchestration, reinforcement learning environments, and open-source contributions.
              </p>
            </div>

            {/* Action Buttons Toolbar */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* View Mode Switcher */}
              <div className="p-1 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-1 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setViewMode('paper')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold ${
                    viewMode === 'paper' 
                      ? 'bg-white text-[#0a1128] shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Document Paper View"
                >
                  <LayoutTemplate className="w-3.5 h-3.5" />
                  <span>Document View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-semibold ${
                    viewMode === 'cards' 
                      ? 'bg-white text-[#0a1128] shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Interactive Cards View"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Interactive Grid</span>
                </button>
              </div>

              {/* Copy Plain Text */}
              <button
                type="button"
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-purple-50 text-purple-900 border border-purple-200/80 hover:bg-purple-100 transition shadow-2xs cursor-pointer"
                title="Copy formatted resume text to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-600" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              {/* Print / Save PDF */}
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] transition shadow-md shadow-navy-950/20 cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-sky-300" />
                <span>Print / Save PDF</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* MODE 1: Official Typeset Document Paper View */}
        {viewMode === 'paper' && (
          <AnimatedSection direction="up" delay={0.1}>
            <div className="relative max-w-4xl mx-auto rounded-3xl bg-white border border-slate-300 shadow-2xl overflow-hidden print:border-none print:shadow-none print:m-0 print:p-0">
              
              {/* Document Header Bar with Mac style controls (Hidden during print) */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-slate-100/90 border-b border-slate-200 text-xs font-mono text-slate-600 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  <span className="ml-2 font-semibold text-slate-700">Deepshikha_Yadav_Resume.pdf</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-700 font-semibold text-[11px]">
                  <Sparkles className="w-3 h-3 text-purple-600" />
                  <span>ATS-Optimized Formal Layout</span>
                </div>
              </div>

              {/* Document Printable Body */}
              <div className="p-8 sm:p-12 md:p-16 text-slate-900 bg-white font-sans text-[13px] leading-relaxed selection:bg-blue-100">
                
                {/* 1. Header */}
                <div className="text-center pb-6 border-b-2 border-slate-900 mb-6">
                  <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-950 uppercase mb-2">
                    {resumeData.name}
                  </h1>
                  
                  {/* Contact Row */}
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {resumeData.location}
                    </span>
                    <span className="text-slate-300">|</span>
                    <a href={`tel:${resumeData.phone}`} className="hover:text-blue-700 transition">
                      {resumeData.phone}
                    </a>
                    <span className="text-slate-300">|</span>
                    <a href={`mailto:${resumeData.email}`} className="text-blue-700 hover:underline">
                      {resumeData.email}
                    </a>
                    <span className="text-slate-300">|</span>
                    <a 
                      href={resumeData.linkedinUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-blue-700 hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>{resumeData.linkedin}</span>
                      <ExternalLink className="w-2.5 h-2.5 print:hidden" />
                    </a>
                    <span className="text-slate-300">|</span>
                    <a 
                      href={resumeData.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-blue-700 hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>{resumeData.github}</span>
                      <ExternalLink className="w-2.5 h-2.5 print:hidden" />
                    </a>
                  </div>
                </div>

                {/* 2. Objective */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-900 mb-2">
                    OBJECTIVE
                  </h2>
                  <p className="text-slate-800 text-[12.5px] leading-relaxed text-justify">
                    {resumeData.objective}
                  </p>
                </div>

                {/* 3. Education */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-900 mb-2.5">
                    EDUCATION
                  </h2>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-950 text-[13px]">
                      <span>{resumeData.education.institution}</span>
                      <span className="font-mono text-xs font-semibold text-slate-700">
                        Expected Graduation: {resumeData.education.expectedGraduation}
                      </span>
                    </div>
                    <div className="text-[12.5px] text-slate-800">
                      <span>{resumeData.education.degree}</span>
                      <span className="mx-2 text-slate-400">—</span>
                      <span className="font-semibold text-slate-950">CGPA: {resumeData.education.cgpa}</span>
                      <span className="mx-2 text-slate-400">—</span>
                      <span className="italic text-slate-700">{resumeData.education.standing}</span>
                    </div>
                  </div>
                </div>

                {/* 4. Technical Skills */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-900 mb-2.5">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="space-y-1 text-[12.5px]">
                    {resumeData.technicalSkills.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5">
                        <span className="font-bold text-slate-950 shrink-0 w-36 sm:w-40 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 inline-block" />
                          <span>{item.category}:</span>
                        </span>
                        <span className="text-slate-800">
                          {item.skills.join(', ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Projects */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-900 mb-3">
                    PROJECTS
                  </h2>
                  <div className="space-y-4">
                    {resumeData.projects.map((proj, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[13px]">
                          <div>
                            <span className="font-bold text-slate-950">{proj.title}</span>
                            <span className="mx-1.5 text-slate-400">|</span>
                            <span className="italic text-slate-700 text-xs font-mono">{proj.techStack}</span>
                          </div>
                          <a 
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-blue-700 hover:underline shrink-0"
                          >
                            {proj.githubUrl.replace('https://', '')}
                          </a>
                        </div>
                        <ul className="space-y-1 text-[12.5px] text-slate-800 list-disc list-outside pl-5">
                          {proj.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="leading-snug">
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Training Program */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-900 mb-2.5">
                    TRAINING PROGRAM
                  </h2>
                  {resumeData.trainingPrograms.map((prog, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-950 text-[13px]">
                        <span>{prog.title} — {prog.institution}</span>
                        <span className="font-mono text-xs font-semibold text-slate-700">
                          {prog.period}
                        </span>
                      </div>
                      <ul className="space-y-1 text-[12.5px] text-slate-800 list-disc list-outside pl-5">
                        {prog.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="leading-snug">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 7. Open Source Contributions */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-900 mb-2.5">
                    OPEN SOURCE CONTRIBUTIONS
                  </h2>
                  {resumeData.openSource.map((oss, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="font-bold text-slate-950 text-[13px]">
                        {oss.program}
                      </div>
                      <ul className="space-y-1 text-[12.5px] text-slate-800 list-disc list-outside pl-5">
                        {oss.contributions.map((c, cIdx) => (
                          <li key={cIdx} className="leading-snug">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* 8. Certifications */}
                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 pb-1 border-b border-slate-900 mb-2.5">
                    CERTIFICATIONS
                  </h2>
                  <ul className="space-y-1 text-[12.5px] text-slate-800 list-disc list-outside pl-5">
                    {resumeData.certifications.map((cert, idx) => (
                      <li key={idx} className="leading-snug">
                        <span className="font-semibold text-slate-950">{cert.name}</span>
                        <span className="text-slate-600 font-mono text-xs ml-1.5">({cert.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom bar with verified authenticity */}
              <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2 print:hidden font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified credentials from Shri Ramswaroop Memorial College of Engineering and Management</span>
                </div>
                <div className="text-slate-500">
                  Last updated: 2026
                </div>
              </div>

            </div>
          </AnimatedSection>
        )}

        {/* MODE 2: Interactive Modern Cards Grid */}
        {viewMode === 'cards' && (
          <AnimatedSection direction="up" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Objective Banner (Full Width) */}
              <div className="md:col-span-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-50/70 via-white to-sky-50/70 border border-purple-200 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Target Role & Professional Focus</span>
                </div>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {resumeData.objective}
                </p>
              </div>

              {/* Education Card (5 cols) */}
              <div className="md:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-800 uppercase tracking-wider mb-3">
                    <GraduationCap className="w-4 h-4 text-sky-600" />
                    <span>Academic Foundation</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#0a1128] mb-1">
                    {resumeData.education.institution}
                  </h3>
                  <p className="text-xs text-indigo-700 font-semibold mb-4">
                    {resumeData.education.degree}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200/80">
                      <div className="text-[10px] font-mono text-sky-800 font-bold uppercase">1st Year CGPA</div>
                      <div className="text-base font-extrabold text-[#0a1128] mt-0.5">{resumeData.education.cgpa}</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-200/80">
                      <div className="text-[10px] font-mono text-purple-800 font-bold uppercase">Graduation</div>
                      <div className="text-base font-extrabold text-[#0a1128] mt-0.5">{resumeData.education.expectedGraduation}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
                  <span>Current Standing:</span>
                  <span className="font-semibold text-slate-900">{resumeData.education.standing}</span>
                </div>
              </div>

              {/* Skills Matrix (7 cols) */}
              <div className="md:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-800 uppercase tracking-wider mb-4">
                  <Code2 className="w-4 h-4 text-purple-600" />
                  <span>Technical Competencies Matrix</span>
                </div>
                <div className="space-y-3">
                  {resumeData.technicalSkills.map((item, idx) => (
                    <div key={idx} className="pb-2.5 border-b border-slate-100 last:border-b-0">
                      <div className="text-xs font-mono font-bold text-slate-700 mb-1.5">
                        {item.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2.5 py-0.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200 text-xs font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Breakdown (12 cols) */}
              <div className="md:col-span-12 space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <span>Featured Engineering Projects on Resume</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {resumeData.projects.map((proj, idx) => (
                    <div 
                      key={idx}
                      className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-purple-300 transition-all shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-base font-bold font-display text-[#0a1128]">
                            {proj.title}
                          </h4>
                          <a 
                            href={proj.githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-slate-500 hover:text-indigo-600 transition"
                            title="Open GitHub"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="text-xs font-mono text-indigo-700 font-semibold mb-3">
                          {proj.techStack}
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-outside pl-4 mb-4">
                          {proj.highlights.slice(0, 3).map((h, hIdx) => (
                            <li key={hIdx}>{h}</li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 hover:text-blue-900 pt-3 border-t border-slate-100"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Training (12 cols) */}
              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Certifications */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-3">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Verified Certifications</span>
                  </div>
                  <div className="space-y-3">
                    {resumeData.certifications.map((cert, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/70 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-900">{cert.name}</div>
                          <div className="text-[11px] font-mono text-slate-500 mt-0.5">{cert.date}</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training Program & GSSoC */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-3">
                    <FolderGit2 className="w-4 h-4 text-emerald-600" />
                    <span>Structured Training & Open Source</span>
                  </div>
                  <div className="space-y-3">
                    {resumeData.trainingPrograms.map((prog, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                          <span>{prog.title}</span>
                          <span className="font-mono text-[11px] text-emerald-800">{prog.period}</span>
                        </div>
                        <div className="text-[11px] text-slate-600 mt-1">{prog.institution}</div>
                      </div>
                    ))}
                    {resumeData.openSource.map((oss, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/70">
                        <div className="text-xs font-bold text-slate-900">{oss.program}</div>
                        <div className="text-[11px] text-slate-600 mt-1">{oss.contributions[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </AnimatedSection>
        )}

      </div>
    </section>
  );
};
