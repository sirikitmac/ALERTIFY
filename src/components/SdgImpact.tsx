import { Building2, CloudRain, Scale, ArrowUpRight } from 'lucide-react';

export function SdgImpact() {
  const sdgs = [
    {
      badge: 'GOAL 11',
      title: 'Sustainable Cities & Communities',
      accentColor: 'border-[#F28C28] text-[#F28C28] bg-[#F28C28]/10',
      icon: Building2,
      subtitle: 'Target 11.5 · Disaster Risk Reduction & Resilient Infrastructure',
      description:
        'Help communities become structurally resilient by accelerating how disaster-related information is collected, organized, and communicated across barangays and municipal sectors.',
      metric: 'Real-time localized hazard indexing for urban corridors',
    },
    {
      badge: 'GOAL 13',
      title: 'Climate Action',
      accentColor: 'border-[#168AAD] text-[#168AAD] bg-[#168AAD]/10',
      icon: CloudRain,
      subtitle: 'Target 13.1 · Climate-Related Hazard Adaptive Capacity',
      description:
        'Support vulnerable coastal, riverbank, and slope communities in rapidly responding to severe typhoons, monsoon surges, and climate-induced landslides.',
      metric: 'Adaptive situational mapping during severe weather',
    },
    {
      badge: 'GOAL 16',
      title: 'Peace, Justice & Strong Institutions',
      accentColor: 'border-[#12304A] text-[#12304A] bg-[#12304A]/10',
      icon: Scale,
      subtitle: 'Target 16.6 · Transparent, Accountable & Responsive Public Service',
      description:
        'Foster transparent, verified communication channels between citizens on the ground and civic disaster risk management councils (CDRRMO/LGU), ensuring no community is overlooked.',
      metric: 'Auditable incident timeline and verified responder accountability',
    },
  ];

  return (
    <section id="analytics" className="py-24 bg-[#F5F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            08 / Global Sustainability Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            Built for <span className="font-serif italic text-[#168AAD]">resilient communities.</span>
          </h2>
          <p className="mt-5 text-lg text-[#64747F] leading-relaxed">
            Alertify contributes to the United Nations Sustainable Development Goals by supporting more informed, coordinated, and inclusive disaster response.
          </p>
        </div>

        {/* Three Editorial Sections (Not a generic icon grid) */}
        <div className="space-y-8">
          {sdgs.map((sdg, index) => {
            const Icon = sdg.icon;
            return (
              <div
                key={sdg.badge}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#12304A]/10 shadow-[0_4px_24px_rgba(18,48,74,0.03)] hover:shadow-md transition-shadow duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Badge & Icon */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full border ${sdg.accentColor}`}>
                        {sdg.badge}
                      </span>
                      <span className="text-xs font-mono text-[#64747F]">UN SDG ALIGNMENT</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12304A] tracking-tight leading-snug">
                      {sdg.title}
                    </h3>

                    <p className="text-xs font-mono text-[#168AAD] uppercase font-semibold">
                      {sdg.subtitle}
                    </p>
                  </div>

                  {/* Right Column: Narrative & Civic Impact */}
                  <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-[#12304A]/10 lg:pl-8">
                    <p className="text-base sm:text-lg text-[#64747F] leading-relaxed">
                      {sdg.description}
                    </p>

                    <div className="pt-3 flex items-center gap-2 text-xs font-mono text-[#12304A] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#168AAD]" />
                      <span>Impact Vector: {sdg.metric}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
