import { Button } from "@/components/ui/button"
import { Download, RefreshCw, Trash2, ExternalLink, Edit } from "lucide-react"

interface DealHeaderProps {
  company: string
  website: string
  onDownloadDeck: () => void
  onRefreshData: () => void
  onDelete: () => void
}

export function DealHeader({ 
  company, 
  website, 
  onDownloadDeck, 
  onRefreshData, 
  onDelete 
}: DealHeaderProps) {
  const websiteUrl = website.startsWith('http') ? website : `https://${website}`
  
  return (
    <div className="bg-white border-b sticky top-14 z-40 animate-fade-in">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {company}
              </h1>
              <div className="flex items-center space-x-2 text-neural-600">
                <a 
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-neural-700 transition-colors hover-lift"
                >
                  <span className="font-medium">{website}</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                  <Edit className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              onClick={onDownloadDeck}
              className="hover-lift"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Deck
            </Button>
            <Button 
              variant="outline"
              onClick={onRefreshData}
              className="bg-neural-50 text-neural-700 hover:bg-neural-100 border-neural-200 hover-lift"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh data
            </Button>
            <Button 
              variant="destructive"
              onClick={onDelete}
              className="hover-lift"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}