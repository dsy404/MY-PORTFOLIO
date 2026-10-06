import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Bot, 
  GraduationCap, 
  Languages, 
  CalendarClock, 
  Users, 
  Sparkles, 
  RefreshCw,
  BookOpen,
  Volume2,
  Github
} from 'lucide-react';

export const PhoenixAISandbox: React.FC = () => {
  const [pipelineState, setPipelineState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedScenario, setSelectedScenario] = useState<string>('catch_up');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Hindi / English (Bilingual)');

  const scenarios = [
    {
      id: 'catch_up',
      label: '🔥 Catch-Up Mode (Missed 2 Weeks)',
      title: 'Class 10 Science: Chemical Reactions & Acids',
      barrier: 'Missed School (Illness / Harvest Season)',
      agentChain: ['Central Orchestrator', 'Catch-Up Agent', 'Teacher Agent', 'Parent Agent'],
      generatedOutput: {
        headline: "7-Day High-Yield Recovery Plan Generated",
        keyActions: [
          "Day 1-2: Balancing Chemical Equations (Foundation Concept - 25 mins)",
          "Day 3-4: Acids vs Bases pH scale with household kitchen examples",
          "Day 5: Auto-Quiz & Concept Mastery Checkpoint (Adaptive)",
        ],
        parentUpdate: "Parent Summary: Your child completed 2 recovered topics today and is 70% back on track with the school syllabus."
      }
    },
    {
      id: 'multilingual_teacher',
      label: '🌐 Multilingual AI Teacher',
      title: 'Class 9 Physics: Newton’s Laws of Motion',
      barrier: 'Language Difference (English Text ➔ Regional Language)',
      agentChain: ['Central Orchestrator', 'Language Agent', 'Teacher Agent', 'Voice Agent'],
      generatedOutput: {
        headline: "Localized Bilingual Lesson with Audio Notes",
        keyActions: [
          "Hindi Explanation: 'पहला नियम (Inertia) कहता है कि जब तक कोई बाहरी बल (External Force) न लगे, वस्तु अपनी स्थिति नहीं बदलती।'",
          "Real-World Analogy: Moving bus brakes and cricket ball catch mechanics",
          "Audio Notes: 3-minute bite-sized audio summary cached for offline listening"
        ],
        parentUpdate: "Parent Summary: Child learned Newton's Laws in preferred language with 100% conceptual clarity."
      }
    },
    {
      id: 'assessment_mentor',
      label: '📝 Adaptive Assessment & Mentor',
      title: 'Class 10 Mathematics: Quadratic Equations',
      barrier: 'Limited Teacher Access & Weak Foundation',
      agentChain: ['Central Orchestrator', 'Assessment Agent', 'Study Mentor', 'Parent Agent'],
      generatedOutput: {
        headline: "Weak Area Pinpointed: Factorization Method",
        keyActions: [
          "Diagnostic: Student understands quadratic formula but struggles with middle-term splitting",
          "Remedial Drill: 3 scaffolded micro-problems generated with instant hint prompts",
          "Mentor Schedule: 15-min practice added to Thursday's study streak"
        ],
        parentUpdate: "Parent Summary: Targeted practice scheduled for quadratic formulas. No tuition needed."
      }
    }
  ];

  const currentScenario = scenarios.find(s => s.id === selectedScenario) || scenarios[0];

  const handleRunPipeline = () => {
    setPipelineState('running');
    setActiveStep(1);

    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        setActiveStep(3);
        setTimeout(() => {
          setActiveStep(4);
          setPipelineState('completed');
        }, 320);
      }, 350);
    }, 350);
  };

  const handleReset = () => {
    setPipelineState('idle');
    setActiveStep(0);
  };

  return (
    <div className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200 gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0a1128] font-display">
              Phoenix AI Multi-Agent Education Simulator
            </h4>
            <p className="text-[11px] text-blue-700">
              Personal AI Learning Companion · Teaching, Assessment & Catch-Up Recovery
            </p>
          </div>
        </div>

        {/* Status Indicator & Repo Link */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="https://github.com/dsy404/Phoenix-AI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-slate-700 hover:text-black bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors shadow-2xs"
            title="View Phoenix AI GitHub Repository"
          >
            <Github className="w-3.5 h-3.5 text-blue-700" />
            <span>dsy404/Phoenix-AI</span>
          </a>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-slate-700">
              {pipelineState === 'idle' && 'SYSTEM READY'}
              {pipelineState === 'running' && 'AGENTS COLLABORATING...'}
              {pipelineState === 'completed' && 'RECOVERY ROADMAP READY'}
            </span>
            <span className={`w-2.5 h-2.5 rounded-full ${
              pipelineState === 'idle' ? 'bg-slate-400' :
              pipelineState === 'running' ? 'bg-amber-500 animate-ping' :
              'bg-emerald-500'
            }`} />
          </div>
        </div>
      </div>

      {/* Scenario Selection */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
        <span className="text-slate-500 font-mono text-[11px] font-semibold">Select Student Barrier:</span>
        {scenarios.map((sc) => (
          <button
            key={sc.id}
            onClick={() => {
              setSelectedScenario(sc.id);
              if (pipelineState === 'completed') handleReset();
            }}
            disabled={pipelineState === 'running'}
            className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer border ${
              selectedScenario === sc.id
                ? 'bg-[#0a1128] text-white border-[#0a1128] font-medium shadow-xs'
                : 'bg-white text-slate-700 hover:text-black border-slate-200'
            }`}
          >
            {sc.label}
          </button>
        ))}
      </div>

      {/* Subject & Barrier Meta */}
      <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-slate-500 font-medium">Topic:</span>{' '}
          <strong className="text-[#0a1128]">{currentScenario.title}</strong>
        </div>
        <div className="text-blue-700 font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span>Addressing: {currentScenario.barrier}</span>
        </div>
      </div>

      {/* Multi-Agent Orchestration Sequence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
        {currentScenario.agentChain.map((agentName, index) => {
          const isDone = activeStep > index;
          const isCurrent = activeStep === index + 1 && pipelineState === 'running';

          return (
            <div
              key={agentName}
              className={`p-3 rounded-xl border transition-all ${
                isDone
                  ? 'bg-blue-50/70 border-emerald-500 shadow-xs'
                  : isCurrent
                  ? 'bg-blue-100/60 border-blue-600 animate-pulse'
                  : 'bg-white border-slate-200 opacity-75'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  AGENT 0{index + 1}
                </span>
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <span className="text-[10px] font-mono text-blue-700 font-semibold">Active</span>
                )}
              </div>
              <div className="text-xs font-bold text-[#0a1128] leading-tight">
                {agentName}
              </div>
            </div>
          );
        })}
      </div>

      {/* Generated Educational Output Box */}
      <div className="p-4 rounded-xl bg-[#0a1128] text-white border border-[#162a5c] mb-4 shadow-sm">
        <div className="text-[11px] font-mono text-blue-300 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            AI COMPANION OUTPUT: {currentScenario.generatedOutput.headline}
          </span>
          <span className="text-slate-400 text-[10px]">Low-Bandwidth Cached</span>
        </div>

        <ul className="space-y-1.5 text-xs text-slate-200 font-sans mb-3">
          {currentScenario.generatedOutput.keyActions.map((act, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">·</span>
              <span>{act}</span>
            </li>
          ))}
        </ul>

        {/* Parent Digest strip */}
        <div className="pt-2.5 mt-2.5 border-t border-blue-900/60 flex items-start gap-2 text-[11px] text-blue-200 bg-blue-950/40 p-2 rounded-lg">
          <Users className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
          <span>{currentScenario.generatedOutput.parentUpdate}</span>
        </div>
      </div>

      {/* Action Controls & Philosophy Motto */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-[11px] text-slate-600 italic">
          "No child should fall behind because life got in the way."
        </div>

        <div className="flex items-center gap-2">
          {pipelineState === 'completed' && (
            <button
              onClick={handleReset}
              className="px-3 py-2 text-xs text-slate-700 hover:text-black rounded-lg bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Reset
            </button>
          )}

          <button
            onClick={handleRunPipeline}
            disabled={pipelineState === 'running'}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            {pipelineState === 'running' ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Orchestrating Agents...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simulate AI Learning Agent</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
