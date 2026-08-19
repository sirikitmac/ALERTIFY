export type IncidentSeverity = 'high' | 'medium' | 'low';
export type IncidentStatus = 'unverified' | 'analyzed' | 'dispatched' | 'resolved';

export interface IncidentReport {
  id: string;
  title: string;
  type: string;
  severity: IncidentSeverity;
  location: {
    name: string;
    area: string;
    coordinates: string;
    lat: number;
    lng: number;
  };
  timestamp: string;
  timeAgo: string;
  source: 'citizen_mobile' | 'community_lead' | 'sms_gateway' | 'web_upload';
  rawCitizenNote?: string;
  aiExtracted: {
    incidentType: string;
    severityScore: number;
    severityLabel: IncidentSeverity;
    hazardDetails: string;
    accessBlocked: boolean;
    peopleAtRiskEstimate?: string;
    confidence: number;
    keywords: string[];
  };
  status: IncidentStatus;
  imageUrl?: string;
  dispatchedTo?: string;
}

export interface DemoSample {
  id: string;
  title: string;
  category: string;
  citizenReport: {
    photoDescription: string;
    userCaption: string;
    locationName: string;
    coordinates: string;
    reportedTime: string;
  };
  aiExtraction: {
    incident: string;
    severity: IncidentSeverity;
    location: string;
    details: string;
    keyRisk: string;
    confidence: string;
    tags: string[];
  };
  mapPriority: {
    badge: string;
    rank: string;
    recommendedAction: string;
  };
}
