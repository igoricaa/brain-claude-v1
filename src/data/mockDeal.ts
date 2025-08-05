import type { Deal } from "@/types"

export const mockDealData: Deal = {
  id: "senira-1",
  company: "Senira",
  website: "senira.ai",
  uploaded: "July 30, 2025",
  location: "Delaware, US",
  fundingRound: "seed",
  raising: "$2M",
  raisedToDate: undefined,
  investors: undefined,

  industries: {
    ainCore: [],
    other: ["Fintech"],
    veteranLed: true
  },

  dualUseSignals: {
    strategicDomain: [
      "Aerospace",
      "Analytics and Decision Support",
      "Biodefense Detection & Containment",
      "Chips",
      "Digital Identity and Access Management",
      "Electronic Health Records",
      "Geospatial Analysis and Mapping",
      "Maritime",
      "Microelectronics Quantifiable Assurance",
      "Sustainability",
      "Training & Workforce Development",
      "Trauma-Oriented Healthcare"
    ],
    deeptech: [
      "Artificial Intelligence & Machine Learning",
      "Bio-derived Energy Storage",
      "Computing chips",
      "Cybersecurity",
      "Directed Energy",
      "Energy and Resource Management",
      "Quantum Computing",
      "Renewable Energy Generation & Storage",
      "Robotic Process Automation (RPA)",
      "Secure Edge/IoT Computing",
      "Voice and Natural Language Processing (NLP)",
      "Wearable Technology"
    ],
    other: [
      "Supply Chain Resilience"
    ]
  },

  founders: [
    {
      id: "founder-1",
      name: "Michael Hougaard",
      title: "CEO",
      experience: [
        {
          company: "AsphaltGuard, Inc.",
          position: "President and Founder",
          startDate: "1996-04",
          endDate: "2001-09",
          duration: "2005 days"
        },
        {
          company: "Kuhn Loeb & Co",
          position: "Strategic Advisor", 
          startDate: "2021-07",
          endDate: "2023-06",
          duration: "730 days"
        },
        {
          company: "U.S. Congress",
          position: "Legislative Assistant",
          startDate: "1995-01",
          endDate: "1996-04",
          duration: "485 days"
        },
        {
          company: "U.S. Department of State",
          position: "Foreign Service Officer",
          startDate: "1996-04",
          endDate: "2001-09",
          duration: "2005 days"
        }
      ],
      education: [
        {
          institution: "The Fletcher School at Tufts University",
          degree: "Master of Arts",
          field: "MA, International Relations and Affairs",
          startYear: "2001",
          endYear: "2002"
        },
        {
          institution: "University of Utah",
          degree: "Bachelor of Arts",
          field: "BA, Political Science and Government, Cum Laude",
          startYear: "1990",
          endYear: "1994"
        }
      ]
    }
  ],

  grants: [],
  clinicalTrials: [],
  patentApplications: [],

  investmentFacts: {
    problem: "Corporate defaults have increased by 70% since 2023, with economic uncertainty, high interest rates, and debt load increasing corporate/SME risk. Financial institutions are facing billions in losses while carrying excess capital due to legacy credit risk management tools' inability to detect early warning signals.",
    productSolution: "AI-Driven Corporate Credit Intelligence, which detects SME default indicators 9-12 months over the horizon, empowers lenders to proactively mitigate risk and prevent loss, and identifies low-risk clients for portfolio growth.",
    traction: "B2B model with early revenue secured and subscription growth planned. The model includes base subscription fees ranging from $100k to $500k per client/year, and a one-time implementation fee of $100k.",
    businessModel: "$15.7B",
    intellectualProperty: "",
    marketSizing: "$15.7B",
    competition: "Senira positions itself as 1 of 4 known AI-startups exclusively focused on SME credit risk, highlighting its unique selling points: prediction accuracy (85%+), forecast horizon (9-12 months), autonomous updating, 24/7 portfolio surveillance, ease of integration, and delivery speed. Competitors named include Zest AI, Risk Seal, Oscilla, Uplinq, Judicial, and Oak North.",
    thesisFit: "The company may partially align with AIN's core focus due to its application of AI/ML in fintech to solve a real-world problem, which has potential dual-use applications (government and civilian). However, there's no explicit indication of a veteran-led team or direct application to defense tech, space, or sustainability."
  },

  assessment: {
    aiAssessment: {
      score: {
        score: 0.73,
        confidence: "high",
        recommendation: "potentially interesting"
      },
      analysis: "Senira's unique AI-driven financial intelligence platform, founded on an exclusive JSI partnership, addresses significant pain points in corporate and SME lending. The company's early traction, strong interdisciplinary team, and exclusive business model, combined with a substantial addressable market, position it well for growth. However, concerns about product scalability, regulatory risks, and the competitive landscape suggest a cautious approach.",
      pros: [
        "Exclusive JSI partnership - Unique access to cutting-edge AI technologies and R&D facilities.",
        "Large addressable market - Targets a significant problem in a $15.7B TAM with comprehensive AI solutions.",
        "Strong interdisciplinary team - Extensive experience across AI, financial services, and international relations.",
        "Early traction demonstrated - Engagement with reputable financial institutions in the US and plans for global expansion.",
        "High prediction accuracy - Claims of 85%+ accuracy in SME default predictions, offering competitive edge.",
        "Strategic go-to-market - Focused approach targeting SME lenders with limited AI capabilities, offering significant room for growth."
      ],
      cons: [
        "Limited seed round visibility - No information on previous funding rounds or co-investor development.",
        "Highly specialized market - While AI in financial services has growth potential, it is a niche competitive area.",
        "Unproven product scalability - Although the product has unique attributes, its ability to scale within a competitive market is not proven.",
        "Dependence on key partnerships - Reliance on exclusive partnership with JSI for technology might limit flexibility or scalability.",
        "Regulatory risks - Operating in financial services involves significant compliance and regulatory hurdles."
      ]
    },
    analystAssessment: {
      analyst: "Analyst Name",
      recommendation: "",
      notes: ""
    }
  }
}