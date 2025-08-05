import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter,
  Building2, 
  DollarSign, 
  Calendar, 
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Award
} from "lucide-react"

interface PastDeal {
  id: string
  company: string
  fundraise: string
  stage: string
  industries: string[]
  dualUseSignal: string[]
  grants: string[]
  submittedAt: string
  assessment: "passed" | "declined" | "pending"
  description: string
  founded: string
  location: string
}

const mockPastDeals: PastDeal[] = [
  {
    id: "1",
    company: "3WAVES Virtual Motion",
    fundraise: "$5M series A", 
    stage: "Series A",
    industries: ["ai/ml", "hardware", "defense tech"],
    dualUseSignal: ["strategic domain", "deeptech"],
    grants: [],
    submittedAt: "JUN 17, 2025",
    assessment: "passed",
    description: "Advanced motion capture technology for military training and simulation",
    founded: "2022",
    location: "Boston, MA"
  },
  {
    id: "2",
    company: "Ntelcare",
    fundraise: "$3M seed",
    stage: "Seed", 
    industries: ["healthcare", "ai/ml", "hardware"],
    dualUseSignal: [],
    grants: [],
    submittedAt: "JUN 17, 2025",
    assessment: "declined",
    description: "AI-powered remote patient monitoring for chronic disease management",
    founded: "2023",
    location: "Seattle, WA"
  },
  {
    id: "3",
    company: "JotLogs",
    fundraise: "$500K seed",
    stage: "Seed",
    industries: ["healthcare"],
    dualUseSignal: [],
    grants: [],
    submittedAt: "JUN 16, 2025", 
    assessment: "declined",
    description: "Digital health platform for medication adherence tracking",
    founded: "2024",
    location: "Austin, TX"
  },
  {
    id: "4",
    company: "mlroncol",
    fundraise: "$15M seed",
    stage: "Seed",
    industries: ["life sciences", "healthcare"],
    dualUseSignal: [],
    grants: [],
    submittedAt: "JUN 16, 2025",
    assessment: "pending",
    description: "Machine learning platform for oncology drug discovery",
    founded: "2021",
    location: "San Francisco, CA"
  },
  {
    id: "5",
    company: "Quantum Signals",
    fundraise: "$7M seed",
    stage: "Seed",
    industries: ["fintech", "ai/ml"],
    dualUseSignal: [],
    grants: [],
    submittedAt: "JUN 16, 2025",
    assessment: "passed",
    description: "Quantum-enhanced financial modeling and risk assessment",
    founded: "2023",
    location: "New York, NY"
  }
]

const getIndustryColor = (industry: string) => {
  const colors: Record<string, string> = {
    fintech: "fintech",
    healthcare: "healthcare", 
    "ai/ml": "aiml",
    hardware: "hardware",
    "life sciences": "lifesciences",
    "defense tech": "defensetech"
  }
  return colors[industry.toLowerCase()] || "secondary"
}

const getAssessmentIcon = (assessment: string) => {
  switch (assessment) {
    case "passed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "declined":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    default:
      return null
  }
}

const getAssessmentColor = (assessment: string) => {
  switch (assessment) {
    case "passed":
      return "text-green-700 bg-green-50 border-green-200"
    case "declined":
      return "text-red-700 bg-red-50 border-red-200"
    case "pending":
      return "text-yellow-700 bg-yellow-50 border-yellow-200"
    default:
      return "text-gray-700 bg-gray-50 border-gray-200"
  }
}

export function PastDeals() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredDeals, setFilteredDeals] = useState(mockPastDeals)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (!query) {
      setFilteredDeals(mockPastDeals)
      return
    }
    
    const filtered = mockPastDeals.filter(deal => 
      deal.company.toLowerCase().includes(query.toLowerCase()) ||
      deal.description.toLowerCase().includes(query.toLowerCase()) ||
      deal.industries.some(industry => 
        industry.toLowerCase().includes(query.toLowerCase())
      )
    )
    setFilteredDeals(filtered)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Past Deals</h1>
          <p className="text-muted-foreground">
            Historical deals with assessment results
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by company name..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredDeals.map((deal) => (
          <Card key={deal.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neural-100 to-neural-200 border flex-shrink-0">
                    <Building2 className="h-6 w-6 text-neural-700" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold">{deal.company}</h3>
                      <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getAssessmentColor(deal.assessment)}`}>
                        <div className="flex items-center space-x-1">
                          {getAssessmentIcon(deal.assessment)}
                          <span className="capitalize">{deal.assessment}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {deal.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {deal.industries.map((industry) => (
                        <Badge key={industry} variant={getIndustryColor(industry) as any}>
                          {industry}
                        </Badge>
                      ))}
                      {deal.dualUseSignal.map((signal) => (
                        <Badge key={signal} variant="strategic">
                          <Shield className="mr-1 h-3 w-3" />
                          {signal}
                        </Badge>
                      ))}
                      {deal.grants.length > 0 && (
                        <Badge variant="outline">
                          <Award className="mr-1 h-3 w-3" />
                          {deal.grants.length} grants
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {deal.submittedAt}
                      </span>
                      <span>Founded {deal.founded}</span>
                      <span>{deal.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="flex items-center text-lg font-semibold text-neural-700 mb-2">
                    <DollarSign className="mr-1 h-4 w-4" />
                    {deal.fundraise}
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredDeals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No deals found matching your search.</p>
        </div>
      )}
    </div>
  )
}