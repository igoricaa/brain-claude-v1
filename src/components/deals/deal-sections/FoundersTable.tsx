import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, ExternalLink } from "lucide-react"
import type { Founder } from "@/types"

interface FoundersTableProps {
  founders: Founder[]
  onAddFounder: () => void
}

export function FoundersTable({ founders, onAddFounder }: FoundersTableProps) {
  return (
    <Card className="hover-lift animate-slide-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Founders</CardTitle>
        <Button onClick={onAddFounder} variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add founder
        </Button>
      </CardHeader>
      <CardContent>
        {founders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Experience</th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Education</th>
                </tr>
              </thead>
              <tbody>
                {founders.map((founder) => (
                  <tr key={founder.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-medium text-sm">{founder.name}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-muted-foreground">{founder.title}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-2">
                        {founder.experience.map((exp, index) => (
                          <div key={index} className="text-sm">
                            <div className="flex items-center space-x-1">
                              <span className="font-medium text-neural-700">{exp.company}</span>
                              <ExternalLink className="h-3 w-3 text-muted-foreground" />
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {exp.position}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {exp.startDate} - {exp.endDate} ({exp.duration})
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-2">
                        {founder.education.map((edu, index) => (
                          <div key={index} className="text-sm">
                            <div className="font-medium text-neural-700">
                              {edu.startYear} - {edu.endYear}: {edu.institution}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {edu.degree} - {edu.field}
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p className="text-sm">No founders added yet.</p>
            <Button onClick={onAddFounder} variant="outline" size="sm" className="mt-2">
              <Plus className="mr-2 h-4 w-4" />
              Add first founder
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}