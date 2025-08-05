import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, User, ChevronDown } from "lucide-react"
import type { Assessment } from "@/types"

interface AssessmentSectionProps {
  assessment: Assessment
  onSave: () => void
  onSendToAffinity: () => void
}

export function AssessmentSection({ assessment, onSave, onSendToAffinity }: AssessmentSectionProps) {
  const getScoreColor = (score: number) => {
    if (score >= 0.8) return "text-green-600"
    if (score >= 0.6) return "text-yellow-600" 
    return "text-red-600"
  }

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'high': return "text-green-600 bg-green-50 border-green-200"
      case 'medium': return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case 'low': return "text-red-600 bg-red-50 border-red-200"
      default: return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  return (
    <Card className="hover-lift animate-slide-up">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Investment Assessment</CardTitle>
        <p className="text-sm text-muted-foreground">
          This final assessment of the company is required to send to Affinity. 
          Use the AI's recommendations as you see fit
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* AI Assessment */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full bg-neural-100">
              <Brain className="h-5 w-5 text-neural-700" />
            </div>
            <div>
              <h3 className="font-semibold">AI (Initial) Assessment</h3>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">Investment Recommendation</span>
                  <span className={`font-medium capitalize ${getScoreColor(assessment.aiAssessment.score.score)}`}>
                    {assessment.aiAssessment.score.recommendation}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">score:</span>
                  <span className={`font-bold ${getScoreColor(assessment.aiAssessment.score.score)}`}>
                    {assessment.aiAssessment.score.score.toFixed(2)} (good)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground">score confidence:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getConfidenceColor(assessment.aiAssessment.score.confidence)}`}>
                    {assessment.aiAssessment.score.confidence}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="text-sm leading-relaxed">
              {assessment.aiAssessment.analysis}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pros */}
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">Pros</h4>
              <ol className="space-y-2 text-sm text-emerald-700">
                {assessment.aiAssessment.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-medium mr-2">{index + 1}.</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Cons */}
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">Cons</h4>
              <ol className="space-y-2 text-sm text-red-700">
                {assessment.aiAssessment.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-medium mr-2">{index + 1}.</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Analyst Assessment */}
        <div className="border-t pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="p-2 rounded-full bg-gray-100">
              <User className="h-5 w-5 text-gray-700" />
            </div>
            <h3 className="font-semibold">Analyst (Final) Assessment</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 min-w-0">
                Final Recommendation:
              </label>
              <div className="relative">
                <select className="appearance-none bg-white border border-input rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-neural-600">
                  <option value="">---------</option>
                  <option value="pass">Pass</option>
                  <option value="potentially-interesting">Potentially Interesting</option>
                  <option value="strong-interest">Strong Interest</option>
                </select>
                <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Additional Notes:
              </label>
              <textarea
                className="w-full min-h-[100px] p-3 border border-input rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-neural-600"
                placeholder="Add your analysis and final thoughts..."
                defaultValue={assessment.analystAssessment?.notes || ''}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t">
          <Button variant="outline" onClick={onSave}>
            Save
          </Button>
          <Button 
            onClick={onSendToAffinity}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Send to Affinity
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}