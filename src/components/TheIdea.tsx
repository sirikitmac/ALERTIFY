import { Camera, MapPin, FileText, ArrowRight, ShieldCheck, Cpu, Users } from 'lucide-react';

export function TheIdea() {
  return (
    <section className="py-24 bg-[#F5F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            02 / The Core Concept
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            What if every report could become <span className="font-serif italic text-[#168AAD]">actionable information?</span>
          </h2>
          <p className="mt-5 text-lg text-[#64747F] leading-relaxed">
            During disasters, citizens on the ground are the first observers. By combining a quick photo with automatic coordinates, Alertify’s AI interprets unstructured raw data into unambiguous, prioritized clarity.
          </p>
        </div>

        {/* The Equation Transformation Visual */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#12304A]/10 shadow-[0_4px_24px_rgba(18,48,74,0.04)] mb-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Side: 3 Simple Elements */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#64747F] uppercase block mb-1">
                Citizen Input (Simple & Fast)
              </span>

              <div className="space-y-3">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F5F7F8] border border-[#12304A]/5">
                  <div className="w-10 h-10 rounded-lg bg-[#168AAD]/10 text-[#168AAD] flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#12304A]">1. Photo Evidence</h4>
                    <p className="text-xs text-[#64747F]">Direct snapshot of flood, landslide, or damage</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F5F7F8] border border-[#12304A]/5">
                  <div className="w-10 h-10 rounded-lg bg-[#F28C28]/10 text-[#F28C28] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#12304A]">2. Precise Location</h4>
                    <p className="text-xs text-[#64747F]">Device GPS tag with street coordinates</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F5F7F8] border border-[#12304A]/5">
                  <div className="w-10 h-10 rounded-lg bg-[#12304A]/10 text-[#12304A] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#12304A]">3. Optional Description</h4>
                    <p className="text-xs text-[#64747F]">Short voice or text snippet from the observer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Transformation Arrow */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-2">
              <div className="w-12 h-12 rounded-full bg-[#168AAD] text-white flex items-center justify-center shadow-md rotate-90 lg:rotate-0">
                <ArrowRight className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#168AAD] font-semibold mt-2 text-center">
                AI Extraction
              </span>
            </div>

            {/* Output Side: Structured Incident Card */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold tracking-wider text-[#DC2626] uppercase block mb-1">
                Structured Incident Result
              </span>

              <div className="rounded-2xl bg-[#12304A] text-white p-6 shadow-md border border-[#12304A] space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse" />
                    <span className="text-sm font-bold tracking-wide">Flooding Detected</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#DC2626]/20 text-[#DC2626] border border-[#DC2626]/30 font-bold">
                    HIGH SEVERITY
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-white/50 block font-mono text-[10px]">INCIDENT TYPE</span>
                    <span className="font-semibold text-white">Urban Flash Flood</span>
                  </div>
                  <div>
                    <span className="text-white/50 block font-mono text-[10px]">LOCATION</span>
                    <span className="font-semibold text-white">Tibanga Crossing</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-white/50 block font-mono text-[10px]">DETAILS & ACCESS</span>
                    <span className="font-medium text-white/90">Road blocked · Water level ~0.9m · Vehicles stranded</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70 font-mono">
                  <span>GPS: 8.2412° N, 124.2447° E</span>
                  <span className="text-[#168AAD] font-semibold">Priority #1 Assigned</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* The Three-Part Core Statement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="p-8 rounded-2xl bg-white border border-[#12304A]/10 shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-[#168AAD]/10 text-[#168AAD] flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#12304A] leading-snug">
              Citizens provide the information.
            </h3>
            <p className="mt-3 text-sm text-[#64747F] leading-relaxed">
              Anyone on site can submit a ground-truth photo and coordinates in seconds without technical hurdles.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#12304A]/10 shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-[#F28C28]/10 text-[#F28C28] flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#12304A] leading-snug">
              Alertify organizes it.
            </h3>
            <p className="mt-3 text-sm text-[#64747F] leading-relaxed">
              AI parses visual and spatial signals, categorizes hazard severity, and prioritizes the incident map automatically.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#12304A]/10 shadow-xs relative">
            <div className="w-12 h-12 rounded-xl bg-[#12304A]/10 text-[#12304A] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#12304A] leading-snug">
              Responders decide what to do next.
            </h3>
            <p className="mt-3 text-sm text-[#64747F] leading-relaxed">
              Responders maintain full human authority, dispatching crews armed with structured situational awareness.
            </p>
          </div>

        </div>

        {/* Responsible Positioning Statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded-xl bg-[#12304A]/5 text-xs text-[#64747F] font-medium leading-relaxed">
          <span className="font-bold text-[#12304A]">Responsible Design Note:</span> Alertify does not replace emergency responders or make automated final decisions. It organizes fragmented incoming intelligence so human commanders can act with speed and confidence.
        </div>

      </div>
    </section>
  );
}
