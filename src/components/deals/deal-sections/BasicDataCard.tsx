import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, DollarSign, Users, Edit } from "lucide-react"

interface BasicDataProps {
  uploaded: string
  location: string
  fundingRound: string
  raising: string
  raisedToDate?: string
  investors?: string[]
}

export function BasicDataCard({
  uploaded,
  location,
  fundingRound,
  raising,
  raisedToDate,
  investors
}: BasicDataProps) {
  return (
    <Card className="hover-lift animate-slide-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Basic Data</CardTitle>
        <Button variant="ghost" size="sm" className="p-2">
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Uploaded</span>
            </div>
            <span className="font-medium">{uploaded}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </div>
            <span className="font-medium">{location}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>Funding round</span>
            </div>
            <span className="font-medium capitalize">{fundingRound}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>Raising</span>
            </div>
            <span className="font-medium text-neural-700">{raising}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span>Raised to date</span>
            </div>
            <span className="font-medium">{raisedToDate || '-'}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Investors</span>
            </div>
            <span className="font-medium">
              {investors && investors.length > 0 ? investors.join(', ') : '-'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}