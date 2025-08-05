import { Header } from "./Header"
import { Navigation } from "./Navigation"
import { NeuralBackground } from "@/components/ui/neural-background"

interface LayoutProps {
  children: React.ReactNode
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background relative">
      <NeuralBackground />
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <aside className="w-64 border-r bg-background/80 backdrop-blur-sm">
          <Navigation activeTab={activeTab} onTabChange={onTabChange} />
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="p-6 relative">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}