import { useState } from 'react';
import { UploadCloud, Cpu, LayoutGrid, CheckCircle2, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'REPORT',
      tagline: 'Citizen ground truth',
      desc: 'A citizen uploads a photo, shares their live device location, and optionally describes what they observe in plain language.',
      icon: UploadCloud,
      visual: {
        label: 'Citizen Submission',
        detail: 'Photo capture + GPS: 8.2412° N, 124.2447° E + "Water rising fast"',
        badge: 'Intake: 3.2 seconds',
        color: 'text-[#168AAD] bg-[#168AAD]/10',
      },
    },
    {
      num: '02',
      title: 'UNDERSTAND',
      tagline: 'AI extraction & triage',
      desc: 'AI analyzes the report and extracts the incident type, severity score, exact coordinates, and critical hazards such as blocked roads or trapped residents.',
      icon: Cpu,
      visual: {
        label: 'Extracted Attributes',
        detail: 'Type: Flash Flood · Severity: 92/100 · Road Impassable · Risk: Critical',
        badge: 'NLP & Vision Processed',
        color: 'text-[#F28C28] bg-[#F28C28]/10',
      },
    },
    {
      num: '03',
      title: 'PRIORITIZE',
      tagline: 'Geospatial ranking',
      desc: 'The incident immediately appears on a centralized command map and is systematically ranked by urgency in the responder queue.',
      icon: LayoutGrid,
      visual: {
        label: 'Centralized Map Pin',
        detail: 'Marker #1 Tier Red · Highway Arterial · Priority Queue Top 1',
        badge: 'Priority Ranked',
        color: 'text-[#DC2626] bg-[#DC2626]/10',
      },
    },
    {
      num: '04',
      title: 'RESPOND',
      tagline: 'Coordinated action',
      desc: 'Relevant organizations and local disaster teams review verified details, assign response units, and monitor status updates in real time.',
      icon: CheckCircle2,
      visual: {
        label: 'Action Dispatched',
        detail: 'Assigned: CDRRMO Rescue Team Bravo · Route: South Bypass',
        badge: 'Coordinated Response',
        color: 'text-[#16A34A] bg-[#16A34A]/10',
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-[#12304A]/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            03 / Process Flow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            How <span className="font-serif italic text-[#168AAD]">Alertify Works</span>
          </h2>
          <p className="mt-5 text-lg text-[#64747F] leading-relaxed">
            A clean, streamlined four-step progression designed to convert raw emergency friction into rapid, coordinated response.
          </p>

          {/* Visual Progression Badge */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-[#12304A]">
            <span className="px-3 py-1 bg-[#F5F7F8] rounded-full border border-[#12304A]/10">Citizen</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#168AAD]" />
            <span className="px-3 py-1 bg-[#F5F7F8] rounded-full border border-[#12304A]/10">AI Extraction</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#168AAD]" />
            <span className="px-3 py-1 bg-[#F5F7F8] rounded-full border border-[#12304A]/10">Incident Map</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#168AAD]" />
            <span className="px-3 py-1 bg-[#168AAD] text-white rounded-full">Response</span>
          </div>
        </div>

        {/* Editorial Four-Step Grid with Connecting Line */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-0.5 bg-[#12304A]/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedStep === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setSelectedStep(idx)}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#F5F7F8] border-2 border-[#168AAD] shadow-sm scale-[1.02]'
                      : 'bg-white border border-[#12304A]/10 hover:border-[#168AAD]/40 hover:bg-[#F5F7F8]/50'
                  }`}
                >
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#12304A]/40 group-hover:text-[#168AAD] transition-colors">
                      {step.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#168AAD] text-white'
                          : 'bg-[#12304A]/5 text-[#12304A] group-hover:bg-[#168AAD]/10 group-hover:text-[#168AAD]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-[#12304A] tracking-tight">
                    {step.title}
                  </h3>
                  <span className="text-xs font-mono text-[#168AAD] uppercase font-semibold block mt-0.5 mb-3">
                    {step.tagline}
                  </span>

                  <p className="text-sm text-[#64747F] leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Interactive Micro-Preview in selected card */}
                  <div className="mt-6 pt-4 border-t border-[#12304A]/10">
                    <span className={`inline-block text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${step.visual.color}`}>
                      {step.visual.badge}
                    </span>
                    <p className="text-xs text-[#12304A] font-medium mt-2">
                      {step.visual.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
