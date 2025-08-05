import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { InvestmentFacts as InvestmentFactsType } from "@/types"

interface InvestmentFactsProps {
  facts: InvestmentFactsType
}

export function InvestmentFacts({ facts }: InvestmentFactsProps) {
  const factItems = [
    { label: "Problem", value: facts.problem },
    { label: "Product/solution", value: facts.productSolution },
    { label: "Traction", value: facts.traction },
    { label: "Business model", value: facts.businessModel },
    { label: "Intellectual property", value: facts.intellectualProperty },
    { label: "Market sizing", value: facts.marketSizing },
    { label: "Competition", value: facts.competition },
    { label: "Thesis fit", value: facts.thesisFit }
  ]

  return (
    <Card className="hover-lift animate-slide-up">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Investment Facts</CardTitle>
        <p className="text-sm text-muted-foreground">
          Investment facts are suggested by AI and editable by you. All fields that are left non-blank 
          will be sent to Affinity with your Investment Assessment (see below). url
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {factItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {item.label}
              </label>
              <div className="min-h-[100px] p-3 bg-muted/30 rounded-md border border-input">
                <textarea
                  className="w-full h-full resize-none bg-transparent border-none outline-none text-sm"
                  defaultValue={item.value}
                  placeholder={`Enter ${item.label.toLowerCase()}...`}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}