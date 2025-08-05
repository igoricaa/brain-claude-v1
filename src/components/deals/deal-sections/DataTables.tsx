import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, FlaskConical, Lightbulb } from "lucide-react"
import type { Grant, ClinicalTrial, PatentApplication } from "@/types"

interface DataTablesProps {
  grants: Grant[]
  clinicalTrials: ClinicalTrial[]
  patentApplications: PatentApplication[]
  onAddGrant: () => void
  onAddPatent: () => void
}

export function DataTables({ 
  grants, 
  clinicalTrials, 
  patentApplications, 
  onAddGrant, 
  onAddPatent 
}: DataTablesProps) {
  return (
    <div className="space-y-6">
      {/* Grants Table */}
      <Card className="hover-lift animate-slide-up">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Grants
          </CardTitle>
        </CardHeader>
        <CardContent>
          {grants.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Granting Agency</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Obligated amount</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Potential amount</th>
                  </tr>
                </thead>
                <tbody>
                  {grants.map((grant, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 text-sm">{grant.name}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{grant.date}</td>
                      <td className="py-3 px-4 text-sm">{grant.grantingAgency}</td>
                      <td className="py-3 px-4 text-sm font-medium">${grant.obligatedAmount.toLocaleString()}</td>
                      <td className="py-3 px-4 text-sm">${grant.potentialAmount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground mb-4">
                No grants found. This usually indicates that the company has not received grants, 
                but it also happens if company name does not match SBIR records.
              </p>
              <Button onClick={onAddGrant} variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add grant
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Clinical Trials Table */}
      <Card className="hover-lift animate-slide-up">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <FlaskConical className="mr-2 h-5 w-5" />
            Clinical Trials
          </CardTitle>
        </CardHeader>
        <CardContent>
          {clinicalTrials.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Start date</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Completion date</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {clinicalTrials.map((trial, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 text-sm">{trial.title}</td>
                      <td className="py-3 px-4 text-sm">{trial.status}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{trial.startDate}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{trial.completionDate}</td>
                      <td className="py-3 px-4 text-sm">{trial.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">
                No clinical trials found on clinicaltrials.gov.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Patent Applications Table */}
      <Card className="hover-lift animate-slide-up">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Lightbulb className="mr-2 h-5 w-5" />
            Patent Applications
          </CardTitle>
          <Button onClick={onAddPatent} variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add patent application
          </Button>
        </CardHeader>
        <CardContent>
          {patentApplications.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Application #</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Filing Date</th>
                    <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Inventors</th>
                  </tr>
                </thead>
                <tbody>
                  {patentApplications.map((patent, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 text-sm">{patent.title}</td>
                      <td className="py-3 px-4 text-sm font-mono">{patent.applicationNumber}</td>
                      <td className="py-3 px-4 text-sm">{patent.status}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{patent.filingDate}</td>
                      <td className="py-3 px-4 text-sm">{patent.inventors.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground mb-4">
                No patent application information found.
              </p>
              <Button onClick={onAddPatent} variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add patent
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}