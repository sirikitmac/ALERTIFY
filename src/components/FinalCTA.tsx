import { ArrowRight, Compass } from 'lucide-react';

interface FinalCTAProps {
  onOpenExplorer: () => void;
}

export function FinalCTA({ onOpenExplorer }: FinalCTAProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#12304A] text-white relative overflow-hidden">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#168AAD]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F28C28] block mb-4">
          Resilience in Action
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.12]">
          When every moment matters, <span className="font-serif italic text-[#168AAD]">clarity matters too.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
          See how Alertify turns citizen reports into actionable incident information.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            id="final-cta-explore-btn"
            onClick={onOpenExplorer}
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-[#168AAD] hover:bg-white hover:text-[#12304A] active:scale-[0.98] transition-all duration-200 rounded-full shadow-lg shadow-[#168AAD33] cursor-pointer group"
          >
            <Compass className="w-5 h-5 text-white group-hover:text-[#12304A] transition-colors" />
            <span>Explore Alertify</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:text-[#12304A] group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
}
