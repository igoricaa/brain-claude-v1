import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  DollarSign, 
  Calendar, 
  ExternalLink,
  FileText,
  TrendingUp,
  Shield,
  Award
} from "lucide-react"

interface Deal {
  id: string
  company: string
  logo?: string
  fundraise: string
  stage: string
  industries: string[]
  dualUseSignal: string[]
  grants: string[]
  submittedAt: string
  description: string
  founded: string
  location: string
  employees: string
}

const mockDeals: Deal[] = [
  {
    id: "1",
    company: "Senira",
    fundraise: "$2M seed",
    stage: "Seed",
    industries: ["fintech"],
    dualUseSignal: ["strategic domain", "deeptech"],
    grants: [],
    submittedAt: "5 days, 23 hours ago",
    description: "AI-powered financial risk assessment platform for enterprise clients",
    founded: "2023",
    location: "San Francisco, CA",
    employees: "12-15"
  },
  {
    id: "2", 
    company: "Croptell",
    fundraise: "$1M late seed",
    stage: "Late Seed",
    industries: ["ai/ml", "fintech"],
    dualUseSignal: [],
    grants: [],
    submittedAt: "6 days, 4 hours ago",
    description: "Machine learning platform for crop yield optimization and agricultural automation", 
    founded: "2022",
    location: "Austin, TX",
    employees: "8-12"
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

const getDualUseColor = (signal: string) => {
  const colors: Record<string, string> = {
    "strategic domain": "strategic",
    "deeptech": "deeptech",
    "other": "secondary"
  }
  return colors[signal.toLowerCase()] || "secondary"
}

export function FreshDeals() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-neural-700 to-neural-500 bg-clip-text text-transparent">
            Fresh Deals
          </h1>
          <p className="text-muted-foreground">
            New deals submitted but not yet sorted.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="hover-lift">
            <FileText className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-neural-600 to-neural-700 hover:from-neural-700 hover:to-neural-800 hover-lift">
            <TrendingUp className="mr-2 h-4 w-4" />
            Analyze All
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {mockDeals.map((deal, index) => (
          <Card 
            key={deal.id} 
            className="hover:shadow-lg transition-all duration-300 hover-lift animate-slide-up border-l-4 border-l-neural-400"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neural-100 to-neural-200 border">
                    <Building2 className="h-6 w-6 text-neural-700" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{deal.company}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        Founded {deal.founded}
                      </span>
                      <span>{deal.location}</span>
                      <span>{deal.employees} employees</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-lg font-semibold text-neural-700">
                    <DollarSign className="mr-1 h-4 w-4" />
                    {deal.fundraise}
                  </div>
                  <div className="text-sm text-muted-foreground">{deal.submittedAt}</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{deal.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {deal.industries.map((industry) => (
                  <Badge key={industry} variant={getIndustryColor(industry) as any}>
                    {industry}
                  </Badge>
                ))}
                {deal.dualUseSignal.map((signal) => (
                  <Badge key={signal} variant={getDualUseColor(signal) as any}>
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
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Ready for analysis</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Details
                  </Button>
                  <Button size="sm" className="bg-neural-600 hover:bg-neural-700">
                    Start Analysis
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}