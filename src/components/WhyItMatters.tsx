import { Clock, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export function WhyItMatters() {
  return (
    <section className="py-24 bg-[#F5F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            06 / The Core Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            Because <span className="font-serif italic text-[#168AAD]">response time matters.</span>
          </h2>
          <p className="mt-5 text-lg text-[#64747F] leading-relaxed">
            The goal is not to predict every disaster. The goal is to make the information generated immediately after a disaster easier to understand and act upon.
          </p>
        </div>

        {/* Large Visual Dual-Statement Anchor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Statement 1: Less time searching */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#12304A]/10 shadow-[0_4px_20px_rgba(18,48,74,0.03)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#64747F] font-bold block mb-2">
                Removing Information Friction
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#12304A] tracking-tight leading-tight">
                Less time searching.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#64747F] leading-relaxed">
                Emergency dispatchers often lose valuable golden hours manually sorting duplicate phone calls, ambiguous text threads, and unverified social media posts.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#12304A]/5 text-xs font-mono text-[#12304A]/70 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
              Reduces report triage lag
            </div>
          </div>

          {/* Statement 2: More time responding */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#12304A] text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#168AAD]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#168AAD]/20 text-[#168AAD] flex items-center justify-center mb-6 border border-[#168AAD]/30">
                <ShieldAlert className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#F28C28] font-bold block mb-2">
                Operational Clarity
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                More time responding.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                When incidents arrive pre-structured with verified coordinates, severity tags, and access warnings, responders can allocate personnel and equipment with speed and confidence.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2 relative z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Empowers human decision-makers
            </div>
          </div>

        </div>

        {/* Responsible Civic Positioning Card */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#12304A]/10 text-center max-w-4xl mx-auto shadow-xs">
          <p className="text-base sm:text-lg font-medium text-[#12304A] leading-relaxed">
            &ldquo;Alertify aims to reduce information delays and help relevant organizations make faster, more informed decisions when every second counts.&rdquo;
          </p>
          <span className="text-xs font-mono uppercase text-[#168AAD] font-semibold mt-3 block tracking-wider">
            Responsible Civic Technology Standard
          </span>
        </div>

      </div>
    </section>
  );
}
