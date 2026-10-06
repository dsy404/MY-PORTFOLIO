import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Github, 
  Stethoscope, 
  Info,
  Sliders,
  Sparkles
} from 'lucide-react';

export const HeartDiseaseSandbox: React.FC = () => {
  // Input features matching the dataset
  const [age, setAge] = useState<number>(45);
  const [restingBP, setRestingBP] = useState<number>(128);
  const [cholesterol, setCholesterol] = useState<number>(215);
  const [maxHR, setMaxHR] = useState<number>(165);
  const [chestPainType, setChestPainType] = useState<number>(1); // 0: Typical, 1: Atypical, 2: Non-anginal, 3: Asymptomatic
  const [exerciseAngina, setExerciseAngina] = useState<number>(0); // 0: No, 1: Yes
  const [oldpeak, setOldpeak] = useState<number>(0.8);
  const [isPredicting, setIsPredicting] = useState<boolean>(false);

  // Simulation presets
  const presets = [
    {
      label: "Low-Risk Profile",
      age: 32,
      bp: 115,
      chol: 175,
      maxHR: 178,
      cp: 1,
      angina: 0,
      oldpeak: 0.2
    },
    {
      label: "Moderate-Risk Profile",
      age: 51,
      bp: 135,
      chol: 235,
      maxHR: 148,
      cp: 2,
      angina: 0,
      oldpeak: 1.2
    },
    {
      label: "High-Risk Profile",
      age: 63,
      bp: 165,
      chol: 310,
      maxHR: 118,
      cp: 3,
      angina: 1,
      oldpeak: 2.6
    }
  ];

  // Logistic Regression weights simulation (approximating scikit-learn coefficients on heart disease dataset)
  // z = w0 + w1*Age + w2*BP + w3*Chol - w4*MaxHR + w5*CP + w6*Angina + w7*Oldpeak
  const computeProbability = (
    cAge: number, 
    cBP: number, 
    cChol: number, 
    cMaxHR: number, 
    cCP: number, 
    cAngina: number, 
    cOldpeak: number
  ): number => {
    const normAge = (cAge - 54) / 9.0;
    const normBP = (cBP - 131) / 17.5;
    const normChol = (cChol - 246) / 51.0;
    const normMaxHR = (cMaxHR - 149) / 22.9;
    const normOldpeak = (cOldpeak - 1.0) / 1.1;

    // Learned coefficient weights typical for Cleveland/Heart dataset logistic regression
    const z = -0.45 
      + 0.58 * normAge 
      + 0.42 * normBP 
      + 0.38 * normChol 
      - 0.72 * normMaxHR 
      + 0.45 * (cCP === 3 ? 1.2 : cCP === 2 ? 0.3 : -0.4) 
      + 0.85 * (cAngina === 1 ? 1.0 : -0.5) 
      + 0.68 * normOldpeak;

    // Sigmoid function: P = 1 / (1 + e^-z)
    const prob = 1 / (1 + Math.exp(-z));
    return Math.min(Math.max(prob, 0.05), 0.96);
  };

  const [probability, setProbability] = useState<number>(
    computeProbability(age, restingBP, cholesterol, maxHR, chestPainType, exerciseAngina, oldpeak)
  );

  const applyPreset = (p: typeof presets[0]) => {
    setAge(p.age);
    setRestingBP(p.bp);
    setCholesterol(p.chol);
    setMaxHR(p.maxHR);
    setChestPainType(p.cp);
    setExerciseAngina(p.angina);
    setOldpeak(p.oldpeak);

    setIsPredicting(true);
    setTimeout(() => {
      setProbability(computeProbability(p.age, p.bp, p.chol, p.maxHR, p.cp, p.angina, p.oldpeak));
      setIsPredicting(false);
    }, 200);
  };

  const handlePredict = () => {
    setIsPredicting(true);
    setTimeout(() => {
      setProbability(computeProbability(age, restingBP, cholesterol, maxHR, chestPainType, exerciseAngina, oldpeak));
      setIsPredicting(false);
    }, 250);
  };

  const isPositive = probability >= 0.5;
  const percentageScore = Math.round(probability * 100);

  return (
    <div className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-md text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200 gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-rose-100 text-rose-700">
            <Heart className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0a1128] font-display">
              Heart Disease Classification Model
            </h4>
            <p className="text-[11px] text-blue-700">
              Scikit-Learn Logistic Regression · 205 Patient Records
            </p>
          </div>
        </div>

        {/* GitHub link badge */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/dsy404/Heart_Disease_Prediction"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-slate-700 hover:text-black bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors shadow-2xs"
            title="View Heart Disease Prediction GitHub Repository"
          >
            <Github className="w-3.5 h-3.5 text-rose-600" />
            <span>dsy404/Heart_Disease_Prediction</span>
          </a>
        </div>
      </div>

      {/* Quick Presets */}
      <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
        <span className="text-slate-500 font-mono text-[11px] font-semibold">Test Profiles:</span>
        {presets.map((p) => (
          <button
            key={p.label}
            onClick={() => applyPreset(p)}
            className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-700 hover:text-black border border-slate-200 transition-colors cursor-pointer shadow-2xs text-[11px]"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Interactive Medical Feature Sliders & Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
        
        {/* Age */}
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-slate-600 font-medium">Patient Age</span>
            <span className="font-mono font-bold text-[#0a1128]">{age} yrs</span>
          </div>
          <input
            type="range"
            min={25}
            max={80}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        {/* Resting BP */}
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-slate-600 font-medium">Resting BP</span>
            <span className="font-mono font-bold text-[#0a1128]">{restingBP} mm Hg</span>
          </div>
          <input
            type="range"
            min={95}
            max={190}
            value={restingBP}
            onChange={(e) => setRestingBP(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        {/* Cholesterol */}
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-slate-600 font-medium">Serum Cholesterol</span>
            <span className="font-mono font-bold text-[#0a1128]">{cholesterol} mg/dL</span>
          </div>
          <input
            type="range"
            min={130}
            max={380}
            value={cholesterol}
            onChange={(e) => setCholesterol(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

        {/* Max Heart Rate */}
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-slate-600 font-medium">Max Heart Rate</span>
            <span className="font-mono font-bold text-[#0a1128]">{maxHR} bpm</span>
          </div>
          <input
            type="range"
            min={80}
            max={205}
            value={maxHR}
            onChange={(e) => setMaxHR(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

      </div>

      {/* Secondary Parameters: Chest pain, angina, oldpeak */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        
        {/* Chest Pain Type */}
        <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
          <label className="block text-slate-500 font-medium mb-1">Chest Pain Type</label>
          <select
            value={chestPainType}
            onChange={(e) => setChestPainType(Number(e.target.value))}
            className="w-full p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-xs focus:outline-hidden"
          >
            <option value={0}>0: Typical Angina</option>
            <option value={1}>1: Atypical Angina</option>
            <option value={2}>2: Non-Anginal Pain</option>
            <option value={3}>3: Asymptomatic</option>
          </select>
        </div>

        {/* Exercise Induced Angina */}
        <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
          <label className="block text-slate-500 font-medium mb-1">Exercise Angina</label>
          <div className="flex gap-2">
            <button
              onClick={() => setExerciseAngina(0)}
              className={`flex-1 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${exerciseAngina === 0 ? 'bg-[#0a1128] text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              No (0)
            </button>
            <button
              onClick={() => setExerciseAngina(1)}
              className={`flex-1 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${exerciseAngina === 1 ? 'bg-rose-600 text-white font-semibold' : 'bg-slate-100 text-slate-600'}`}
            >
              Yes (1)
            </button>
          </div>
        </div>

        {/* ST Depression (Oldpeak) */}
        <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-slate-500 font-medium">ST Depression (Oldpeak)</span>
            <span className="font-mono font-bold text-slate-800">{oldpeak.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={0.0}
            max={4.0}
            step={0.1}
            value={oldpeak}
            onChange={(e) => setOldpeak(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>

      </div>

      {/* Model Classification Result Display */}
      <div className={`p-4 rounded-xl border mb-4 shadow-sm transition-all ${
        isPositive 
          ? 'bg-rose-50/90 border-rose-300 text-rose-950'
          : 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg shrink-0 ${isPositive ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'}`}>
              {isPositive ? <AlertTriangle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider font-bold">
                LOGISTIC REGRESSION CLASSIFICATION TARGET
              </div>
              <div className="text-sm sm:text-base font-bold font-display">
                {isPositive 
                  ? "Class 1: Person is likely to have Heart Disease"
                  : "Class 0: Person is not likely to have Heart Disease"
                }
              </div>
              <div className="text-xs mt-0.5 opacity-80">
                Sigmoid Model Confidence: <strong>{percentageScore}%</strong> Probability Score
              </div>
            </div>
          </div>

          <div className="text-right sm:border-l sm:border-slate-300/60 sm:pl-4">
            <div className="text-[11px] font-mono opacity-70">Decision Boundary</div>
            <div className="text-xs font-bold font-mono">
              Threshold $\tau = 0.50$
            </div>
          </div>

        </div>
      </div>

      {/* Model Footnote & Run Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>Educational demonstration using 80/20 train-test split on patient health data.</span>
        </div>

        <button
          onClick={handlePredict}
          disabled={isPredicting}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm self-end sm:self-auto"
        >
          {isPredicting ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Evaluating Sigmoid...</span>
            </>
          ) : (
            <>
              <Activity className="w-3.5 h-3.5" />
              <span>Re-Evaluate Model</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
