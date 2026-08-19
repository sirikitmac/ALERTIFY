import { useState } from 'react';
import { MessageSquare, Image, PhoneCall, Share2, Layers, ArrowDown, Sparkles } from 'lucide-react';

export function TheProblem() {
  const [activeSnippet, setActiveSnippet] = useState<number | null>(null);

  const fragmentedReports = [
    { text: '“Flooding in Tibanga, water up to chest near bridge”', channel: 'Social Media', icon: Share2, color: 'border-blue-200' },
    { text: '“Road blocked near junction by huge fallen branch”', channel: 'SMS Message', icon: MessageSquare, color: 'border-amber-200' },
    { text: '“Need help with elderly evacuation at Sitio 4”', channel: 'Emergency Call', icon: PhoneCall, color: 'border-red-200' },
    { text: '“Landslide reported along the national bypass”', channel: 'Citizen Report', icon: MessageSquare, color: 'border-purple-200' },
    { text: '“Photo attached: utility cables in flooded water”', channel: 'Photo Upload', icon: Image, color: 'border-teal-200' },
  ];

  return (
    <section id="incidents" className="py-24 bg-white border-y border-[#12304A]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            01 / The Reality of Disasters
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            When disaster strikes, <span className="font-serif italic text-[#168AAD]">information becomes critical.</span>
          </h2>
          <p className="mt-5 text-lg text-[#64747F] leading-relaxed">
            Disasters can be sudden and unavoidable. What happens in the hours immediately afterward matters. During typhoons, floods, and landslides, citizens naturally share vital updates — but vital information gets trapped across fragmented silos.
          </p>
        </div>

        {/* Visual Convergence Storytelling Component */}
        <div className="relative rounded-3xl bg-[#F5F7F8] p-8 sm:p-12 border border-[#12304A]/10 shadow-[0_4px_24px_rgba(18,48,74,0.03)]">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F28C28] font-bold">
              The Challenge: Fragmented Information
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#12304A] mt-1">
              Scattered across channels, lost in noise
            </h3>
          </div>

          {/* Top Layer: Scattered Citizen Snippets Floating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {fragmentedReports.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveSnippet(idx)}
                  onMouseLeave={() => setActiveSnippet(null)}
                  className={`p-4 rounded-xl bg-white border ${item.color} shadow-xs transition-all duration-200 ${
                    activeSnippet === idx ? 'scale-[1.02] shadow-md ring-1 ring-[#168AAD]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#64747F] mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Icon className="w-3.5 h-3.5 text-[#168AAD]" />
                      {item.channel}
                    </span>
                    <span>Unverified</span>
                  </div>
                  <p className="text-sm font-medium text-[#12304A] italic">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Convergence Stream Indicator */}
          <div className="flex flex-col items-center justify-center my-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#168AAD] bg-[#168AAD]/10 px-4 py-1.5 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
              ALERTIFY STRUCTURED INGESTION ENGINE
            </div>
            <ArrowDown className="w-6 h-6 text-[#168AAD] animate-bounce" />
          </div>

          {/* Bottom Destination: Visual Convergence Box */}
          <div className="bg-[#12304A] text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#168AAD]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <div className="pt-4 md:pt-0 md:px-4">
                <span className="text-xs font-mono tracking-widest text-[#F28C28] uppercase font-bold block mb-1">
                  Unified Source
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  ONE PLACE
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Every citizen report, photo, and geolocation converges into a singular intake stream.
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:px-4">
                <span className="text-xs font-mono tracking-widest text-[#168AAD] uppercase font-bold block mb-1">
                  Geospatial Triage
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  ONE INCIDENT MAP
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Incidents are plotted with exact GPS coordinates, road conditions, and hazard severity.
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:px-4">
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold block mb-1">
                  Actionable Command
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  ONE CLEARER PICTURE
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Responders immediately know what happened, where it happened, and what needs attention first.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
