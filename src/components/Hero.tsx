import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { HeroVisualMap } from './HeroVisualMap';

interface HeroProps {
  onOpenExplorer: () => void;
}

export function Hero({ onOpenExplorer }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="overview"
      className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Ambience: Subtle Soft Geographic Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#168AAD]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F28C28]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Content (approx 58% width) */}
          <div className="lg:col-span-7 flex flex-col gap-6 py-4">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-gray-200/80 rounded-full w-fit shadow-xs">
              <div className="w-2 h-2 rounded-full bg-[#F28C28] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64747F]">
                AI-Powered Disaster Incident Reporting
              </span>
            </div>

            {/* Main Headline with Serif Italic Punchline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-[#12304A]">
              A disaster may be unpredictable.<br />
              <span className="text-[#168AAD] italic font-serif">
                The response shouldn&apos;t be.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg leading-relaxed text-[#64747F] max-w-lg font-normal">
              Alertify turns scattered disaster reports into structured, prioritized incidents — helping organizations understand where help is needed first.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                id="hero-primary-cta"
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-4 bg-[#12304A] text-white rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                <span>See How It Works</span>
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onOpenExplorer}
                className="px-8 py-4 border-2 border-[#12304A] text-[#12304A] rounded-lg font-medium hover:bg-[#12304A] hover:text-white active:scale-[0.98] transition-colors cursor-pointer"
              >
                <span>Explore Map</span>
              </button>
            </div>

            {/* 4-Item Editorial Breakdown Strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-[#168AAD] tracking-widest uppercase">
                  01 Report
                </span>
                <p className="text-xs text-[#64747F] leading-snug">
                  Citizen-led mobile data capture.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-[#168AAD] tracking-widest uppercase">
                  02 Understand
                </span>
                <p className="text-xs text-[#64747F] leading-snug">
                  AI analysis & intent mapping.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-[#168AAD] tracking-widest uppercase">
                  03 Prioritize
                </span>
                <p className="text-xs text-[#64747F] leading-snug">
                  Location-based severity sorting.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-[#168AAD] tracking-widest uppercase">
                  04 Respond
                </span>
                <p className="text-xs text-[#64747F] leading-snug">
                  Informed agency coordination.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Dedicated Product Visual Holder (approx 42% width) */}
          <div className="lg:col-span-5 w-full">
            <HeroVisualMap />
          </div>

        </div>
      </div>
    </section>
  );
}

