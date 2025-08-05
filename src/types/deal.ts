export interface Founder {
  id: string
  name: string
  title: string
  experience: Experience[]
  education: Education[]
}

export interface Experience {
  company: string
  position: string
  startDate: string
  endDate: string
  duration: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  startYear: string
  endYear: string
}

export interface Grant {
  name: string
  date: string
  grantingAgency: string
  obligatedAmount: number
  potentialAmount: number
}

export interface ClinicalTrial {
  title: string
  status: string
  startDate: string
  completionDate: string
  details: string
}

export interface PatentApplication {
  title: string
  applicationNumber: string
  status: string
  filingDate: string
  inventors: string[]
}

export interface InvestmentFacts {
  problem: string
  productSolution: string
  traction: string
  businessModel: string
  intellectualProperty: string
  marketSizing: string
  competition: string
  thesisFit: string
}

export interface AssessmentScore {
  score: number
  confidence: 'low' | 'medium' | 'high'
  recommendation: 'potentially interesting' | 'pass' | 'strong interest'
}

export interface Assessment {
  aiAssessment: {
    score: AssessmentScore
    analysis: string
    pros: string[]
    cons: string[]
  }
  analystAssessment?: {
    analyst: string
    recommendation: string
    notes: string
  }
}

export interface Deal {
  id: string
  company: string
  website: string
  uploaded: string
  location: string
  fundingRound: string
  raising: string
  raisedToDate?: string
  investors?: string[]
  
  // Industries and classifications
  industries: {
    ainCore: string[]
    other: string[]
    veteranLed: boolean
  }
  
  dualUseSignals: {
    strategicDomain: string[]
    deeptech: string[]
    other: string[]
  }
  
  // Detailed sections
  founders: Founder[]
  grants: Grant[]
  clinicalTrials: ClinicalTrial[]
  patentApplications: PatentApplication[]
  investmentFacts: InvestmentFacts
  assessment: Assessment
}