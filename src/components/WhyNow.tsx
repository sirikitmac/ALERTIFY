import { Smartphone, Zap, Network, Globe } from 'lucide-react';

export function WhyNow() {
  return (
    <section className="py-24 bg-white border-y border-[#12304A]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            07 / The Urgent Context
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            The disaster is <span className="font-serif italic text-[#168AAD]">only the beginning.</span>
          </h2>
          <p className="mt-5 text-lg text-[#64747F] leading-relaxed">
            Extreme weather events, flash floods, and changing climate patterns increasingly test the resilience of our cities. At the same time, citizens carry high-resolution sensors and digital connectivity right in their pockets.
          </p>
        </div>

        {/* Large Editorial Statement Banner */}
        <div className="rounded-3xl bg-[#F5F7F8] p-8 sm:p-14 border border-[#12304A]/10 shadow-[0_4px_24px_rgba(18,48,74,0.03)] mb-12">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28C28] block mb-4">
              The Digital Era Reality
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.18]">
              Information already exists.
            </h3>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#168AAD] font-serif italic tracking-tight leading-[1.18] mt-1 sm:mt-2">
              The challenge is making sense of it in time.
            </h3>
            <p className="mt-6 text-base sm:text-lg text-[#64747F] leading-relaxed max-w-2xl">
              Technology provides the missing bridge between distributed citizen awareness and authoritative emergency response.
            </p>
          </div>
        </div>

        {/* 3 Focused Macro Shifts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-2xl bg-white border border-[#12304A]/10">
            <div className="w-10 h-10 rounded-xl bg-[#12304A]/5 text-[#12304A] flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-[#F28C28]" />
            </div>
            <h4 className="text-base font-bold text-[#12304A]">
              Intensifying Climate Hazards
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[#64747F] leading-relaxed">
              Unprecedented rainfalls trigger hyper-localized flash flooding and landslides with little advance warning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#12304A]/10">
            <div className="w-10 h-10 rounded-xl bg-[#12304A]/5 text-[#12304A] flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5 text-[#168AAD]" />
            </div>
            <h4 className="text-base font-bold text-[#12304A]">
              Ubiquitous Citizen Observers
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[#64747F] leading-relaxed">
              Communities naturally capture real-time visual proof, creating an untapped wealth of ground truth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#12304A]/10">
            <div className="w-10 h-10 rounded-xl bg-[#12304A]/5 text-[#12304A] flex items-center justify-center mb-4">
              <Network className="w-5 h-5 text-[#12304A]" />
            </div>
            <h4 className="text-base font-bold text-[#12304A]">
              AI Synthesizing the Gap
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[#64747F] leading-relaxed">
              Modern neural language and vision models can structure thousands of reports per second without fatigue.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
