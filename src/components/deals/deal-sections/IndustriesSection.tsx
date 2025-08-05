import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface IndustriesSectionProps {
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
}

export function IndustriesSection({ industries, dualUseSignals }: IndustriesSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Industries Card */}
      <Card className="hover-lift animate-slide-up">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Industries</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">AIN Core</h4>
            <div className="flex flex-wrap gap-2">
              {industries.ainCore.length > 0 ? (
                industries.ainCore.map((industry) => (
                  <Badge key={industry} variant="secondary">
                    {industry}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">-</span>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Other</h4>
            <div className="flex flex-wrap gap-2">
              {industries.other.map((industry) => (
                <Badge key={industry} variant="fintech">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
          
          {industries.veteranLed && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Veteran-led?</h4>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Veteran Led
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dual-use Signals Card */}
      <Card className="hover-lift animate-slide-up">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Dual-use signals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Strategic Domain Panel */}
          {dualUseSignals.strategicDomain.length > 0 && (
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="text-sm font-semibold text-amber-800 mb-3">Strategic domain</h4>
              <div className="grid grid-cols-1 gap-1">
                {dualUseSignals.strategicDomain.map((signal) => (
                  <div key={signal} className="text-xs text-amber-700 py-1">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deeptech Panel */}
          {dualUseSignals.deeptech.length > 0 && (
            <div className="bg-neural-700 p-4 rounded-lg text-white">
              <h4 className="text-sm font-semibold mb-3">Deeptech</h4>
              <div className="grid grid-cols-1 gap-1">
                {dualUseSignals.deeptech.map((signal) => (
                  <div key={signal} className="text-xs py-1 text-neural-100">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Panel */}
          {dualUseSignals.other.length > 0 && (
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Other</h4>
              <div className="grid grid-cols-1 gap-1">
                {dualUseSignals.other.map((signal) => (
                  <div key={signal} className="text-xs text-gray-600 py-1">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}