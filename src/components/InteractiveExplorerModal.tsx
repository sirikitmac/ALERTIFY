import { useState, FormEvent } from 'react';
import { X, Camera, MapPin, Sparkles, CheckCircle2, AlertTriangle, Radio, Shield, Send, ArrowRight } from 'lucide-react';
import { INITIAL_INCIDENTS } from '../data/mockIncidents';
import { IncidentReport, IncidentSeverity } from '../types';

interface InteractiveExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InteractiveExplorerModal({ isOpen, onClose }: InteractiveExplorerModalProps) {
  const [activeTab, setActiveTab] = useState<'citizen_submit' | 'responder_triage'>('citizen_submit');
  const [incidents, setIncidents] = useState<IncidentReport[]>(INITIAL_INCIDENTS);
  
  // Citizen form state
  const [incidentType, setIncidentType] = useState('Flooding');
  const [locationArea, setLocationArea] = useState('Tibanga Highway Cross');
  const [citizenNote, setCitizenNote] = useState('Tubig baha nagkalalom dapit sa intersection. Dili na maagian.');
  const [isProcessing, setIsProcessing] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState<IncidentReport | null>(null);

  if (!isOpen) return null;

  const handleSubmitSimulation = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const isSevere = incidentType === 'Flooding' || incidentType === 'Landslide';
      const newInc: IncidentReport = {
        id: `INC-${Date.now().toString().slice(-4)}`,
        title: `${incidentType} Reported at ${locationArea}`,
        type: incidentType,
        severity: isSevere ? 'high' : 'medium',
        location: {
          name: locationArea,
          area: `${locationArea}, Iligan City`,
          coordinates: '8.2440° N, 124.2490° E',
          lat: 8.244,
          lng: 124.249,
        },
        timestamp: 'Just now',
        timeAgo: '1m',
        source: 'citizen_mobile',
        rawCitizenNote: citizenNote,
        aiExtracted: {
          incidentType,
          severityScore: isSevere ? 94 : 65,
          severityLabel: isSevere ? 'high' : 'medium',
          hazardDetails: `AI verified citizen account: ${citizenNote.slice(0, 80)}. Access road monitored.`,
          accessBlocked: isSevere,
          peopleAtRiskEstimate: isSevere ? 'Active caution for local traffic & residents' : 'Standard caution',
          confidence: 95.8,
          keywords: ['citizen_upload', 'verified_gps', incidentType.toLowerCase()],
        },
        status: 'analyzed',
        dispatchedTo: 'Pending Commander Review',
      };

      setIncidents([newInc, ...incidents]);
      setJustSubmitted(newInc);
      setIsProcessing(false);
    }, 1200);
  };

  const handleUpdateStatus = (id: string, newStatus: 'dispatched' | 'resolved') => {
    setIncidents(
      incidents.map((item) =>
        item.id === id ? { ...item, status: newStatus, dispatchedTo: newStatus === 'dispatched' ? 'Rescue Unit Assigned' : 'Incident Closed' } : item
      )
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12304A]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#12304A]/10 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Navigation */}
        <div className="bg-[#12304A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#168AAD] flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Alertify Interactive Simulator
              </h3>
              <p className="text-xs text-white/60 font-mono">
                Experience Citizen Report → AI Triage → Responder Action
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/10 p-1 rounded-xl text-xs font-medium">
              <button
                onClick={() => {
                  setActiveTab('citizen_submit');
                  setJustSubmitted(null);
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'citizen_submit' ? 'bg-[#168AAD] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                1. Citizen Intake
              </button>
              <button
                onClick={() => setActiveTab('responder_triage')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'responder_triage' ? 'bg-[#168AAD] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                2. Responder Triage ({incidents.length})
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#F5F7F8]">
          
          {activeTab === 'citizen_submit' ? (
            <div className="max-w-2xl mx-auto space-y-6">
              
              {!justSubmitted ? (
                <form onSubmit={handleSubmitSimulation} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#12304A]/10 shadow-xs space-y-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#168AAD] uppercase">
                      Simulate a Ground-Truth Report
                    </span>
                    <h4 className="text-xl font-bold text-[#12304A] mt-1">
                      Submit Disaster Observation
                    </h4>
                    <p className="text-xs text-[#64747F] mt-1">
                      See how Alertify automatically categorizes what you provide.
                    </p>
                  </div>

                  {/* Photo Holder Mockup */}
                  <div className="p-4 rounded-xl border border-dashed border-[#168AAD]/40 bg-[#168AAD]/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#168AAD]/20 text-[#168AAD] flex items-center justify-center">
                        <Camera className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#12304A] block">simulated_flood_scene_088.jpg</span>
                        <span className="text-[10px] font-mono text-[#64747F]">Device camera attached (2.4 MB)</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                      GEO-TAGGED
                    </span>
                  </div>

                  {/* Hazard Category Select */}
                  <div>
                    <label className="block text-xs font-bold text-[#12304A] mb-1.5 uppercase font-mono">
                      Incident Category
                    </label>
                    <select
                      value={incidentType}
                      onChange={(e) => setIncidentType(e.target.value)}
                      className="w-full text-sm font-medium p-3 rounded-xl border border-[#12304A]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#168AAD]"
                    >
                      <option value="Flooding">Flash Flooding & Road Inundation</option>
                      <option value="Landslide">Landslide & Slope Collapse</option>
                      <option value="Infrastructure">Downed Power Lines & Pole Damage</option>
                      <option value="Accessibility">Bridge Blocked / Evacuation Route</option>
                    </select>
                  </div>

                  {/* Location Area Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#12304A] mb-1.5 uppercase font-mono">
                      Location / Barangay
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={locationArea}
                        onChange={(e) => setLocationArea(e.target.value)}
                        className="w-full text-sm p-3 pl-9 rounded-xl border border-[#12304A]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#168AAD]"
                        placeholder="e.g. Tibanga Highway Junction"
                        required
                      />
                      <MapPin className="w-4 h-4 text-[#168AAD] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  {/* Citizen Text Note */}
                  <div>
                    <label className="block text-xs font-bold text-[#12304A] mb-1.5 uppercase font-mono">
                      Citizen Description (Plain text or local dialect)
                    </label>
                    <textarea
                      rows={3}
                      value={citizenNote}
                      onChange={(e) => setCitizenNote(e.target.value)}
                      className="w-full text-sm p-3 rounded-xl border border-[#12304A]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#168AAD]"
                      placeholder="Describe what you see..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#168AAD] hover:bg-[#12304A] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin text-[#F28C28]" />
                        <span>AI Analyzing & Structuring...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit & Process Incident</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success & AI Extraction Card */
                <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-500/30 shadow-md space-y-5 animate-in zoom-in-95">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#12304A]">
                        Report Successfully Structured by AI
                      </h4>
                      <p className="text-xs text-[#64747F]">
                        Reference: {justSubmitted.id} · Priority Assigned
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#12304A] text-white p-5 rounded-xl space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-xs">
                      <span className="font-mono text-white/60">PARSED HAZARD</span>
                      <span className="font-bold text-[#F28C28] uppercase">{justSubmitted.severity} SEVERITY</span>
                    </div>
                    <p className="text-sm font-semibold">{justSubmitted.title}</p>
                    <p className="text-xs text-white/80">{justSubmitted.aiExtracted.hazardDetails}</p>
                    <div className="text-[11px] font-mono text-emerald-300 flex justify-between pt-1 border-t border-white/10">
                      <span>Coordinates: {justSubmitted.location.coordinates}</span>
                      <span>Confidence: {justSubmitted.aiExtracted.confidence}%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setActiveTab('responder_triage')}
                      className="flex-1 py-3 px-4 rounded-xl font-semibold text-white bg-[#12304A] hover:bg-[#168AAD] transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <span>View in Responder Queue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setJustSubmitted(null)}
                      className="py-3 px-4 rounded-xl font-medium text-[#12304A] bg-[#F5F7F8] hover:bg-[#12304A]/10 text-sm"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Responder Triage View */
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#64747F] px-1 font-mono">
                <span>CENTRALIZED INCIDENT TRIAGE LIST</span>
                <span>{incidents.length} TOTAL REPORTS</span>
              </div>

              <div className="space-y-3">
                {incidents.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-xl border border-[#12304A]/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.severity === 'high' ? 'bg-[#DC2626]' : 'bg-[#F28C28]'
                          }`}
                        />
                        <span className="text-xs font-mono font-bold text-[#12304A]">{item.id}</span>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                            item.severity === 'high'
                              ? 'bg-[#DC2626]/10 text-[#DC2626]'
                              : 'bg-[#F28C28]/10 text-[#F28C28]'
                          }`}
                        >
                          {item.severity}
                        </span>
                        <span className="text-[10px] font-mono text-[#64747F]">
                          {item.location.coordinates}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#12304A]">{item.title}</h4>
                      <p className="text-xs text-[#64747F] max-w-xl">{item.aiExtracted.hazardDetails}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.status !== 'dispatched' && item.status !== 'resolved' && (
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'dispatched')}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#168AAD] text-white hover:bg-[#12304A] transition-colors cursor-pointer"
                        >
                          Dispatch Team
                        </button>
                      )}
                      {item.status === 'dispatched' && (
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'resolved')}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#16A34A] text-white hover:bg-[#16A34A]/80 transition-colors cursor-pointer"
                        >
                          Mark Resolved
                        </button>
                      )}
                      {item.status === 'resolved' && (
                        <span className="text-xs font-mono text-emerald-600 font-bold px-2 py-1 bg-emerald-50 rounded">
                          ✓ Resolved
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
