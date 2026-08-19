import { useState } from 'react';
import { DEMO_SAMPLES } from '../data/mockIncidents';
import { Camera, Sparkles, CheckCircle2, MapPin, AlertTriangle, ArrowRight, RefreshCw, Cpu, Layers } from 'lucide-react';

export function ProductDemo() {
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [activeStage, setActiveStage] = useState<number>(3); // All stages revealed or stepped
  const [isSimulating, setIsSimulating] = useState(false);

  const currentSample = DEMO_SAMPLES[selectedSampleIndex];

  const handleSimulate = (idx: number) => {
    setSelectedSampleIndex(idx);
    setIsSimulating(true);
    setActiveStage(1);
    
    setTimeout(() => {
      setActiveStage(2);
      setTimeout(() => {
        setActiveStage(3);
        setIsSimulating(false);
      }, 700);
    }, 600);
  };

  return (
    <section id="reports" className="py-24 bg-[#F5F7F8] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            04 / Interactive Demonstration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            From a photo to a <span className="font-serif italic text-[#168AAD]">prioritized incident.</span>
          </h2>
          <p className="mt-4 text-lg text-[#64747F] leading-relaxed">
            Witness how Alertify takes an unorganized raw citizen snapshot and translates it into operational intelligence within seconds.
          </p>
        </div>

        {/* Disaster Type Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-[#64747F] uppercase tracking-wider mr-2 font-semibold">
            Test Scenario:
          </span>
          {DEMO_SAMPLES.map((sample, idx) => (
            <button
              key={sample.id}
              onClick={() => handleSimulate(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedSampleIndex === idx
                  ? 'bg-[#12304A] text-white shadow-sm'
                  : 'bg-white text-[#12304A] border border-[#12304A]/10 hover:bg-white/80'
              }`}
            >
              <span>{sample.title}</span>
              {selectedSampleIndex === idx && isSimulating && (
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#168AAD]" />
              )}
            </button>
          ))}
        </div>

        {/* The 4-Step Interactive Transformation Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* STEP 1: Citizen Report */}
          <div className="bg-white rounded-2xl p-6 border border-[#12304A]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#168AAD] px-2.5 py-1 rounded bg-[#168AAD]/10 uppercase">
                  Step 1 · Citizen Report
                </span>
                <Camera className="w-4 h-4 text-[#64747F]" />
              </div>

              {/* Simulated Photo Card */}
              <div className="relative rounded-xl bg-[#12304A]/5 p-4 border border-dashed border-[#12304A]/20 mb-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#168AAD]/10 text-[#168AAD] mx-auto flex items-center justify-center mb-2">
                  <Camera className="w-6 h-6" />
                </div>
                <p className="text-xs font-semibold text-[#12304A] line-clamp-2">
                  {currentSample.citizenReport.photoDescription}
                </p>
                <span className="text-[10px] font-mono text-[#64747F] mt-2 block">
                  📍 {currentSample.citizenReport.coordinates}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-[#64747F]">
                <p className="italic text-[#12304A] font-medium bg-[#F5F7F8] p-2.5 rounded-lg border border-[#12304A]/5">
                  &ldquo;{currentSample.citizenReport.userCaption}&rdquo;
                </p>
                <div className="flex justify-between text-[11px] pt-1">
                  <span>Source: Citizen Mobile</span>
                  <span className="font-mono">{currentSample.citizenReport.reportedTime}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#12304A]/10 text-[11px] font-mono text-[#168AAD] flex items-center gap-1">
              <span>Status: Upload Received</span>
            </div>
          </div>

          {/* STEP 2: AI Analysis */}
          <div className="bg-white rounded-2xl p-6 border border-[#12304A]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#F28C28] px-2.5 py-1 rounded bg-[#F28C28]/10 uppercase">
                  Step 2 · AI Analysis
                </span>
                <Cpu className="w-4 h-4 text-[#F28C28]" />
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F7F8] border border-[#12304A]/5 space-y-3 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#64747F]">Model Extraction</span>
                  <span className="font-mono font-bold text-[#168AAD]">{currentSample.aiExtraction.confidence} Conf.</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#12304A]/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#F28C28] h-full rounded-full w-11/12 animate-pulse" />
                </div>

                <div className="space-y-1 text-xs">
                  <div className="text-[11px] font-mono text-[#64747F]">DETECTED HAZARDS:</div>
                  <div className="flex flex-wrap gap-1">
                    {currentSample.aiExtraction.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#12304A]/10 text-[#12304A]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#64747F] leading-relaxed">
                Computer vision classifies structural hazards while NLP extracts critical road access impedance.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#12304A]/10 text-[11px] font-mono text-[#F28C28] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Semantic Parsing Complete</span>
            </div>
          </div>

          {/* STEP 3: Structured Incident */}
          <div className="bg-[#12304A] text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded bg-white/10 uppercase">
                  Step 3 · Structured Record
                </span>
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
              </div>

              <div className="space-y-3">
                <div className="border-b border-white/10 pb-2">
                  <span className="text-[10px] font-mono uppercase text-white/50 block">CLASSIFIED INCIDENT</span>
                  <p className="text-sm font-bold text-white">{currentSample.aiExtraction.incident}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs border-b border-white/10 pb-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50 block">SEVERITY</span>
                    <span className="font-bold text-[#F28C28] uppercase">{currentSample.aiExtraction.severity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-white/50 block">LOCATION</span>
                    <span className="font-bold text-white truncate block">{currentSample.aiExtraction.location.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-[10px] font-mono uppercase text-white/50 block">OPERATIONAL IMPACT</span>
                  <p className="text-xs text-white/80 line-clamp-2 mt-0.5">
                    {currentSample.aiExtraction.details}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-300 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Attributes Ready</span>
            </div>
          </div>

          {/* STEP 4: Prioritized Map */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#DC2626]/30 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#DC2626] px-2.5 py-1 rounded bg-[#DC2626]/10 uppercase">
                  Step 4 · Prioritized Action
                </span>
                <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
              </div>

              {/* Priority Badge */}
              <div className="p-3.5 rounded-xl bg-[#DC2626]/5 border border-[#DC2626]/20 mb-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span className="text-xs font-extrabold text-[#DC2626]">
                    {currentSample.mapPriority.badge}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#12304A]">
                  {currentSample.mapPriority.rank}
                </p>
                <p className="text-[11px] text-[#64747F]">
                  {currentSample.mapPriority.recommendedAction}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#64747F]">
                <div className="flex justify-between">
                  <span>Queue Position:</span>
                  <span className="font-bold text-[#12304A]">Immediate Response</span>
                </div>
                <div className="flex justify-between">
                  <span>Routing:</span>
                  <span className="font-mono text-[#168AAD]">Corridor Cleared</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#12304A]/10 text-[11px] font-mono text-[#DC2626] font-semibold flex items-center justify-between">
              <span>Pinned on Responder Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
