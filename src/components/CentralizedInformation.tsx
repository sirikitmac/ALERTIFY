import { useState } from 'react';
import { INITIAL_INCIDENTS } from '../data/mockIncidents';
import { IncidentReport, IncidentSeverity } from '../types';
import { MapPin, Filter, Layers, Radio, Shield, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

export function CentralizedInformation() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | IncidentSeverity>('all');
  const [activeIncidentId, setActiveIncidentId] = useState<string>(INITIAL_INCIDENTS[0].id);

  const filteredIncidents = INITIAL_INCIDENTS.filter((inc) => {
    if (selectedFilter === 'all') return true;
    return inc.severity === selectedFilter;
  });

  const activeIncident = INITIAL_INCIDENTS.find((inc) => inc.id === activeIncidentId) || INITIAL_INCIDENTS[0];

  return (
    <section id="map" className="py-24 bg-white border-y border-[#12304A]/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#168AAD] mb-3">
            05 / Unified Situational Awareness
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12304A] tracking-tight leading-[1.15]">
            From scattered reports to <span className="font-serif italic text-[#168AAD]">one clearer picture.</span>
          </h2>
          <p className="mt-5 text-lg text-[#64747F] leading-relaxed">
            During major hazards, reports flow in from every neighborhood simultaneously. Alertify synthesizes these disjointed accounts into a centralized operational view, giving commanders instant clarity on where resources are needed most.
          </p>
        </div>

        {/* Large Dedicated Responder Interface Visualizer */}
        <div className="rounded-3xl bg-[#12304A] p-4 sm:p-6 shadow-2xl border border-[#12304A] text-white">
          
          {/* Top Interface Control Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#168AAD] flex items-center justify-center">
                <Radio className="w-4 h-4 text-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                  <span>Incident Command Center</span>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.2 rounded">
                    LIVE
                  </span>
                </h3>
                <p className="text-xs text-white/60 font-mono">
                  Region: Northern Mindanao Sector · Active Monitoring
                </p>
              </div>
            </div>

            {/* Severity Filter Controls */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 self-start md:self-auto">
              <span className="text-xs text-white/50 px-2 flex items-center gap-1 font-mono">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === 'all' ? 'bg-[#168AAD] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                All ({INITIAL_INCIDENTS.length})
              </button>
              <button
                onClick={() => setSelectedFilter('high')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedFilter === 'high' ? 'bg-[#DC2626] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" /> High
              </button>
              <button
                onClick={() => setSelectedFilter('medium')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedFilter === 'medium' ? 'bg-[#F28C28] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" /> Med
              </button>
            </div>
          </div>

          {/* Core Visualizer Split: Left Incident List & Right Geographic Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            
            {/* Left: Filtered Incident Queue (5 cols) */}
            <div className="lg:col-span-5 space-y-3 max-h-[440px] overflow-y-auto pr-1">
              <div className="flex items-center justify-between text-xs text-white/60 font-mono px-1">
                <span>PRIORITIZED FEED</span>
                <span>{filteredIncidents.length} INCIDENTS</span>
              </div>

              {filteredIncidents.map((inc) => {
                const isSelected = inc.id === activeIncidentId;
                const isHigh = inc.severity === 'high';

                return (
                  <div
                    key={inc.id}
                    onClick={() => setActiveIncidentId(inc.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-150 border ${
                      isSelected
                        ? 'bg-white/15 border-[#168AAD] shadow-md'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            inc.severity === 'high'
                              ? 'bg-[#DC2626]'
                              : inc.severity === 'medium'
                              ? 'bg-[#F28C28]'
                              : 'bg-[#16A34A]'
                          }`}
                        />
                        <span className="text-xs font-mono font-bold text-white/90">
                          {inc.id}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-white/50 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {inc.timeAgo} ago
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">{inc.title}</h4>
                    
                    <div className="flex items-center gap-2 text-xs text-white/70">
                      <MapPin className="w-3.5 h-3.5 text-[#168AAD] shrink-0" />
                      <span className="truncate">{inc.location.name}</span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                      <span className="text-white/80">{inc.aiExtracted.incidentType}</span>
                      <span className={`capitalize font-bold ${isHigh ? 'text-[#DC2626]' : 'text-[#F28C28]'}`}>
                        {inc.severity} Severity
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Operational Focus & Interactive Map Canvas (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              {/* Map Canvas */}
              <div className="relative h-64 sm:h-72 rounded-2xl bg-[#0d2235] border border-white/10 overflow-hidden p-4">
                
                {/* SVG Radar Map & Topography */}
                <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
                  <defs>
                    <radialGradient id="radar" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#168AAD" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#12304A" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="50%" cy="50%" r="40%" fill="url(#radar)" />
                  <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#168AAD" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#168AAD" strokeWidth="0.5" />
                  <path d="M 0 140 Q 200 80, 400 200 T 800 180" fill="none" stroke="#168AAD" strokeWidth="2" strokeOpacity="0.3" />
                  <path d="M 120 0 L 120 300 M 280 0 L 280 300" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.1" />
                </svg>

                {/* Status Bar */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    GRID SYNCHRONIZATION ACTIVE
                  </span>
                  <span>LAT/LNG: {activeIncident.location.coordinates}</span>
                </div>

                {/* Visual Pin Highlights on Map Canvas */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#DC2626]/20 animate-ping absolute -top-1" />
                    <div className="w-9 h-9 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg relative z-10">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="bg-[#12304A]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20 mt-2 shadow-sm">
                      {activeIncident.location.name}
                    </div>
                  </div>
                </div>

                {/* Coordinate Watermark */}
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/40">
                  REF: SECTOR_ILG_{activeIncident.id}
                </div>
              </div>

              {/* Inspector Details Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F28C28] font-bold">
                    Incident Assessment & Dispatch Routing
                  </span>
                  <span className="text-xs text-white/60 font-mono">
                    AI Accuracy: {activeIncident.aiExtracted.confidence}%
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  <strong className="text-white font-semibold">Hazard Summary: </strong>
                  {activeIncident.aiExtracted.hazardDetails}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <span className="text-white/50 block text-[10px] font-mono">VULNERABILITY ASSESSMENT</span>
                    <span className="text-white font-medium">{activeIncident.aiExtracted.peopleAtRiskEstimate || 'Monitored zone'}</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <span className="text-white/50 block text-[10px] font-mono">DISPATCH STATUS</span>
                    <span className="text-emerald-300 font-medium">{activeIncident.dispatchedTo || 'Assigned to Sector Lead'}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
