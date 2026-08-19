export function Vision() {
  return (
    <section className="py-28 sm:py-36 bg-white relative overflow-hidden">
      {/* Background Subtle Accent Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#168AAD]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-6 inline-block">
          09 / The Alertify Vision
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#12304A] tracking-tight leading-[1.14]">
          Information should move as fast as <span className="font-serif italic text-[#168AAD]">the situation does.</span>
        </h2>

        {/* Four Poetic Vision Pillars */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-[#F5F7F8] border border-[#12304A]/5">
            <span className="text-xs font-mono text-[#168AAD] font-bold block mb-1">01</span>
            <p className="text-base sm:text-lg text-[#12304A] font-semibold leading-snug">
              Where communities never have to search through scattered reports to understand what is happening around them.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F7F8] border border-[#12304A]/5">
            <span className="text-xs font-mono text-[#F28C28] font-bold block mb-1">02</span>
            <p className="text-base sm:text-lg text-[#12304A] font-semibold leading-snug">
              Where citizens can effortlessly contribute ground truth in seconds using standard everyday devices.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F7F8] border border-[#12304A]/5">
            <span className="text-xs font-mono text-[#168AAD] font-bold block mb-1">03</span>
            <p className="text-base sm:text-lg text-[#12304A] font-semibold leading-snug">
              Where disaster response organizations have an unambiguous, prioritized picture of emerging incidents.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F7F8] border border-[#12304A]/5">
            <span className="text-xs font-mono text-[#12304A] font-bold block mb-1">04</span>
            <p className="text-base sm:text-lg text-[#12304A] font-semibold leading-snug">
              Where artificial intelligence turns raw, fragmented information into coordinated human action.
            </p>
          </div>

        </div>

        {/* Climax Epigraph */}
        <div className="mt-14 max-w-2xl mx-auto">
          <p className="text-sm font-mono text-[#64747F] uppercase tracking-wider">
            &ldquo;Alertify doesn&apos;t prevent the disaster. It helps people make sense of what happens next.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
