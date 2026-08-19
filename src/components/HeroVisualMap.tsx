import { useState } from 'react';
import { Eye, Camera, Sparkles, ShieldAlert, MapPin, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export function HeroVisualMap() {
  // Step 2 (Report It) is initially prominent by default, hovering shifts focus smoothly
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentHighlight = hoveredStep !== null ? hoveredStep : activeStep;

  const steps = [
    {
      id: '01',
      title: '01 — SPOT IT',
      subtitle: 'See something?',
      desc: 'Citizen notices a flood, blocked road, or landslide in their neighborhood.',
      icon: Eye,
      pill: 'OBSERVE',
      theme: {
        colorName: 'teal',
        textColor: 'text-teal-700',
        activeText: 'text-teal-900',
        badgeBg: 'bg-teal-100 text-teal-800 border-teal-200',
        iconBg: 'bg-teal-600 text-white',
        idleIconBg: 'bg-teal-50 text-teal-600 border-teal-200',
        activeBorder: 'border-teal-500 ring-2 ring-teal-500/20 shadow-lg shadow-teal-500/10',
        activeBg: 'bg-teal-50/60',
        idleBg: 'bg-white/80 hover:bg-teal-50/30',
        lineColor: 'bg-teal-500',
      },
      renderDetail: (isFocused: boolean) => (
        <div
          className={`flex items-center justify-between text-xs p-2.5 rounded-xl border transition-all duration-200 ${
            isFocused
              ? 'bg-white border-teal-200 shadow-xs text-teal-950'
              : 'bg-gray-50/80 border-gray-100 text-[#64747F]'
          }`}
        >
          <span className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>Hazard Spotted: Rising water near highway</span>
          </span>
          <span className="text-[10px] font-mono font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
            Live Observation
          </span>
        </div>
      ),
    },
    {
      id: '02',
      title: '02 — REPORT IT',
      subtitle: 'Photo + location',
      desc: 'Quick photo upload with auto-GPS coordinates and optional description.',
      icon: Camera,
      pill: 'REPORT',
      theme: {
        colorName: 'blue',
        textColor: 'text-blue-700',
        activeText: 'text-blue-900',
        badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
        iconBg: 'bg-blue-600 text-white',
        idleIconBg: 'bg-blue-50 text-blue-600 border-blue-200',
        activeBorder: 'border-blue-500 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10',
        activeBg: 'bg-blue-50/60',
        idleBg: 'bg-white/80 hover:bg-blue-50/30',
        lineColor: 'bg-blue-500',
      },
      renderDetail: (isFocused: boolean) => (
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div
            className={`p-2 rounded-xl border flex items-center gap-2 transition-all duration-200 ${
              isFocused
                ? 'bg-white border-blue-200 shadow-xs text-blue-950 font-semibold'
                : 'bg-gray-50/80 border-gray-100 text-[#64747F]'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-mono text-[11px] truncate">1 Photo Snapshot</span>
          </div>
          <div
            className={`p-2 rounded-xl border flex items-center gap-1.5 transition-all duration-200 ${
              isFocused
                ? 'bg-white border-blue-200 shadow-xs text-blue-950 font-semibold'
                : 'bg-gray-50/80 border-gray-100 text-[#64747F]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-mono text-[10px] truncate">8.241° N, 124.245° E</span>
          </div>
        </div>
      ),
    },
    {
      id: '03',
      title: '03 — AI ANALYZE',
      subtitle: 'Incident + severity + details',
      desc: 'Alertify automatically extracts hazard severity, road access, and key risks.',
      icon: Sparkles,
      pill: 'UNDERSTAND',
      theme: {
        colorName: 'indigo',
        textColor: 'text-indigo-700',
        activeText: 'text-indigo-900',
        badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        iconBg: 'bg-indigo-600 text-white',
        idleIconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
        activeBorder: 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-lg shadow-indigo-500/10',
        activeBg: 'bg-indigo-50/60',
        idleBg: 'bg-white/80 hover:bg-indigo-50/30',
        lineColor: 'bg-indigo-500',
      },
      renderDetail: (isFocused: boolean) => (
        <div
          className={`p-2.5 rounded-xl border transition-all duration-200 space-y-1.5 ${
            isFocused
              ? 'bg-[#12304A] text-white border-indigo-400 shadow-sm'
              : 'bg-[#12304A]/90 text-white/90 border-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Flooding detected
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-400/30">
              Severity: High
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/75 font-mono pt-0.5">
            <span>Location: Tibanga</span>
            <span className="text-emerald-300 font-medium">Road possibly blocked</span>
          </div>
        </div>
      ),
    },
    {
      id: '04',
      title: '04 — RESPONDERS ACT',
      subtitle: 'Prioritized for attention',
      desc: 'Structured incident plotted onto prioritized responder map for rapid dispatch.',
      icon: ShieldAlert,
      pill: 'RESPOND',
      theme: {
        colorName: 'orange',
        textColor: 'text-orange-700',
        activeText: 'text-orange-900',
        badgeBg: 'bg-orange-100 text-orange-800 border-orange-200',
        iconBg: 'bg-orange-600 text-white',
        idleIconBg: 'bg-orange-50 text-orange-600 border-orange-200',
        activeBorder: 'border-orange-500 ring-2 ring-orange-500/20 shadow-lg shadow-orange-500/10',
        activeBg: 'bg-orange-50/60',
        idleBg: 'bg-white/80 hover:bg-orange-50/30',
        lineColor: 'bg-orange-500',
      },
      renderDetail: (isFocused: boolean) => (
        <div
          className={`p-2.5 rounded-xl border flex items-center justify-between transition-all duration-200 ${
            isFocused
              ? 'bg-orange-50/90 border-orange-300 shadow-xs'
              : 'bg-gray-50/80 border-gray-100 text-[#64747F]'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping" />
            <div>
              <span className="font-extrabold text-orange-700 text-[11px] block leading-tight tracking-wide">
                🔴 HIGH PRIORITY · TIBANGA
              </span>
              <span className="text-[#12304A] text-xs font-semibold">
                Road possibly blocked · Priority Queue Top 1
              </span>
            </div>
          </div>
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        </div>
      ),
    },
  ];

  return (
    <div
      id="hero-how-it-works-visual"
      className="bg-white rounded-[32px] sm:rounded-[36px] w-full shadow-2xl overflow-hidden border border-gray-200/90 ring-1 ring-black/5 relative flex flex-col transition-all"
    >
      {/* Background Subtle Dot Grid Canvas */}
      <div className="absolute inset-0 bg-[#F5F7F8]/70 bg-[radial-gradient(#12304A15_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Top Window Header */}
      <div className="relative inset-x-0 top-0 h-14 bg-white/90 backdrop-blur-md flex items-center justify-between px-6 border-b border-gray-200/80 z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#12304A] font-mono bg-[#12304A]/5 px-3 py-1 rounded-full border border-[#12304A]/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#168AAD] animate-pulse" />
            HOW ALERTIFY WORKS
          </span>
        </div>
      </div>

      {/* Continuous 4-Step Interactive Flow Container */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-3.5">
        
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isFocused = currentHighlight === idx;
          const isCompleted = currentHighlight > idx;

          return (
            <div key={step.id} className="relative">
              
              {/* Vertical Connector Path */}
              {idx < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-[-16px] w-0.5 z-0">
                  <div
                    className={`h-full transition-colors duration-300 ${
                      isCompleted || isFocused
                        ? step.theme.lineColor
                        : 'bg-gray-200'
                    }`}
                  />
                  {isFocused && (
                    <div
                      className={`absolute top-1/2 -left-[3px] -translate-y-1/2 w-2 h-2 rounded-full ${step.theme.lineColor} animate-ping`}
                    />
                  )}
                </div>
              )}

              {/* Step Card with Bold Hierarchy & Hover Interaction */}
              <div
                id={`hero-flow-step-${step.id}`}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-250 border ${
                  isFocused
                    ? `${step.theme.activeBorder} ${step.theme.activeBg} -translate-y-0.5 scale-[1.015]`
                    : `${step.theme.idleBg} border-gray-200/80`
                }`}
              >
                <div className="flex items-start gap-3.5">
                  
                  {/* Step Icon Box */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 border ${
                      isFocused
                        ? `${step.theme.iconBg} shadow-sm scale-105`
                        : `${step.theme.idleIconBg}`
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Core Content */}
                  <div className="flex-1 min-w-0">
                    
                    {/* Step Title (Bold Primary Visual Anchor) */}
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h3
                        className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors duration-150 ${
                          isFocused ? step.theme.activeText : step.theme.textColor
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span
                        className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border transition-colors ${
                          isFocused
                            ? step.theme.badgeBg
                            : 'bg-gray-100 text-[#64747F] border-gray-200'
                        }`}
                      >
                        {step.pill}
                      </span>
                    </div>

                    {/* Subtitle / Question */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#12304A]">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Step Micro-Preview */}
                    <div className="mt-1">
                      {step.renderDetail(isFocused)}
                    </div>

                  </div>

                </div>
              </div>

            </div>
          );
        })}

        {/* Bottom Flow Summary Bar */}
        <div className="mt-1 pt-3 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-mono text-[#64747F]">
          <span className="flex items-center gap-1.5 font-bold text-[#12304A]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            SPOT → REPORT → UNDERSTAND → RESPOND
          </span>
          <span className="text-[#168AAD] font-bold flex items-center gap-1">
            <span>Instant Triage</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

      </div>

    </div>
  );
}
