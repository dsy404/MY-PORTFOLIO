import React, { useState } from 'react';
import { Sparkles, Copy, Check, Wand2, RefreshCw } from 'lucide-react';

export const GenZifyPlayground: React.FC = () => {
  const [inputText, setInputText] = useState("Hello, I am extremely busy today and I need to finish this report immediately.");
  const [intensity, setIntensity] = useState<'mild' | 'mid' | 'unhinged'>('mid');
  const [copied, setCopied] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const presets = [
    {
      label: "Work Email",
      text: "I hope this email finds you well. Could you please send me the project updates as soon as possible?"
    },
    {
      label: "Apology",
      text: "I am really sorry for being late. Traffic was terrible, but I am on my way now."
    },
    {
      label: "Study Session",
      text: "The computer science exam was very difficult, but I studied hard and I think I did great."
    }
  ];

  const translateToGenZ = (text: string, level: 'mild' | 'mid' | 'unhinged'): string => {
    let lower = text.toLowerCase();

    if (lower.includes("hope this email finds you well") || lower.includes("project updates")) {
      if (level === 'mild') return "Yo, drop the project updates real quick whenever you're free!";
      if (level === 'mid') return "Ayy what's good, hit me with those project updates ASAP no cap fr fr!";
      return "BESTIE WAKE UP, need those project slides rn or it's so over for me, on god 💀🔥";
    }

    if (lower.includes("sorry for being late") || lower.includes("traffic")) {
      if (level === 'mild') return "My bad for running late! Traffic is insane, pulling up right now.";
      if (level === 'mid') return "Huge L on the traffic, I got cooked on the highway but I'm speeding over rn fr!";
      return "Bro the traffic is actually diabolical 😭 I'm literally fighting for my life in an auto, arriving in 2 secs!";
    }

    if (lower.includes("exam was very difficult") || lower.includes("studied hard")) {
      if (level === 'mild') return "The CSE exam was brutal, but I locked in and think I passed easily.";
      if (level === 'mid') return "Professor tried to cook us with that exam but I locked in and went full demon mode fr!";
      return "That test was pure brainrot but I cooked, ate, and left no crumbs. Absolute academic rizz 💅💯";
    }

    // Dynamic replacement dictionary for custom input
    let res = text
      .replace(/\b(very|extremely|really)\b/gi, level === 'unhinged' ? "mega ultra" : "lowkey")
      .replace(/\b(busy|working hard)\b/gi, level === 'unhinged' ? "fighting demons in the trenches" : "locked in")
      .replace(/\b(hello|hi|greetings)\b/gi, level === 'unhinged' ? "yo chat" : "yo what's good")
      .replace(/\b(good|great|awesome|excellent)\b/gi, level === 'unhinged' ? "fire / certified banger" : "valid")
      .replace(/\b(bad|terrible|awful)\b/gi, level === 'unhinged' ? "straight garbage L" : "an L")
      .replace(/\b(truth|honestly|truly)\b/gi, "no cap")
      .replace(/\b(understand|got it)\b/gi, "bet")
      .replace(/\b(crazy|unbelievable)\b/gi, "delulu")
      .replace(/\b(immediately|right now|asap)\b/gi, "rn rn")
      .replace(/\b(friend|colleague)\b/gi, "bestie")
      .replace(/\b(cool|impressive)\b/gi, "rizz");

    if (level === 'mild') {
      res += " (real talk)";
    } else if (level === 'mid') {
      res += " fr fr no cap 🔥";
    } else {
      res += " 💀😭 absolutely cooked, on god!!";
    }

    return res;
  };

  const [outputText, setOutputText] = useState(translateToGenZ(inputText, intensity));

  const handleTranslate = () => {
    setIsTranslating(true);
    setTimeout(() => {
      setOutputText(translateToGenZ(inputText, intensity));
      setIsTranslating(false);
    }, 200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md text-left">
      
      {/* Playground Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200 gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0a1128] font-display">
              GenZify Interactive Sandbox
            </h4>
            <p className="text-[11px] text-blue-700">
              Test Deepshikha's creative language transformer live
            </p>
          </div>
        </div>

        {/* Slang Intensity Segmented Selector */}
        <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 text-xs shadow-2xs">
          <button
            onClick={() => { setIntensity('mild'); setOutputText(translateToGenZ(inputText, 'mild')); }}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${intensity === 'mild' ? 'bg-[#0a1128] text-white font-medium shadow-xs' : 'text-slate-600 hover:text-black'}`}
          >
            Mild
          </button>
          <button
            onClick={() => { setIntensity('mid'); setOutputText(translateToGenZ(inputText, 'mid')); }}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${intensity === 'mid' ? 'bg-[#0a1128] text-white font-medium shadow-xs' : 'text-slate-600 hover:text-black'}`}
          >
            Peak Gen-Z
          </button>
          <button
            onClick={() => { setIntensity('unhinged'); setOutputText(translateToGenZ(inputText, 'unhinged')); }}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${intensity === 'unhinged' ? 'bg-blue-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-black'}`}
          >
            Unhinged 🔥
          </button>
        </div>
      </div>

      {/* Preset Quick Click Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
        <span className="text-slate-500 font-mono text-[11px] font-semibold">Quick Presets:</span>
        {presets.map((p) => (
          <button
            key={p.label}
            onClick={() => {
              setInputText(p.text);
              setOutputText(translateToGenZ(p.text, intensity));
            }}
            className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-700 hover:text-[#0a1128] border border-slate-200 transition-colors cursor-pointer shadow-2xs"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input / Output Dual Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Input box */}
        <div className="flex flex-col">
          <label className="text-[11px] font-mono text-slate-600 font-semibold mb-1.5 flex items-center justify-between">
            <span>INPUT (FORMAL / STANDARD ENGLISH)</span>
            <span className="text-slate-400">{inputText.length} chars</span>
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 transition-colors resize-none font-sans shadow-2xs"
            placeholder="Type anything to transform into Gen-Z slang..."
          />
        </div>

        {/* Output box */}
        <div className="flex flex-col">
          <div className="text-[11px] font-mono text-blue-700 font-semibold mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Wand2 className="w-3 h-3 text-blue-600" />
              GENZIFY TRANSFORMED OUTPUT
            </span>
            <button
              onClick={handleCopy}
              className="text-slate-600 hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="text-[10px] font-semibold">{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
          <div className="w-full h-full min-h-[100px] p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 flex items-center relative overflow-hidden font-medium">
            <p className="leading-relaxed">{outputText}</p>
          </div>
        </div>

      </div>

      {/* Action button */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-[11px] text-slate-600 font-mono">
          Tokens: <span className="text-blue-700 font-semibold">"locked in"</span> · <span className="text-blue-700 font-semibold">"no cap"</span> · <span className="text-blue-700 font-semibold">"cooked"</span>
        </div>

        <button
          onClick={handleTranslate}
          disabled={isTranslating}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          {isTranslating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Wand2 className="w-3.5 h-3.5" />}
          <span>Re-GenZify</span>
        </button>
      </div>

    </div>
  );
};
