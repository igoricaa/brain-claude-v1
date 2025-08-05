import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  FolderOpen, 
  Clock, 
  Plus, 
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  FileText
} from "lucide-react"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navigationItems = [
  {
    id: "fresh-deals",
    label: "Fresh Deals",
    icon: FolderOpen,
    description: "New submissions"
  },
  {
    id: "dashboard",
    label: "Dashboard", 
    icon: BarChart3,
    description: "Analytics & metrics"
  },
  {
    id: "past-deals",
    label: "Past Deals",
    icon: Clock,
    description: "Historical deals"
  },
  {
    id: "deal-details",
    label: "Deal Details",
    icon: FileText,
    description: "Senira example"
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: TrendingUp,
    description: "Active investments"
  },
  {
    id: "companies",
    label: "Companies",
    icon: Users,
    description: "Company database"
  },
  {
    id: "library",
    label: "Library",
    icon: BookOpen,
    description: "Research & docs"
  },
  {
    id: "dual-use",
    label: "Dual-use",
    icon: Shield,
    description: "Defense tech"
  }
]

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [isCollapsed] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className={cn("font-semibold transition-all", isCollapsed && "sr-only")}>
          Navigation
        </h2>
        {!isCollapsed && (
          <Button 
            onClick={() => onTabChange("upload")}
            size="sm" 
            className="bg-neural-600 hover:bg-neural-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Upload Deal
          </Button>
        )}
      </div>
      
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            
            return (
              <li key={item.id}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start h-12 px-3",
                    isActive && "bg-neural-50 text-neural-900 hover:bg-neural-100"
                  )}
                  onClick={() => onTabChange(item.id)}
                >
                  <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </div>
                </Button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}