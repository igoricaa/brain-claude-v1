import { Button } from "@/components/ui/button"
import { Search, Bell, Settings, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2 hover-lift" href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neural-600 to-neural-700 shadow-md">
              <span className="text-sm font-bold text-white">AI</span>
            </div>
            <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-neural-700 to-neural-500 bg-clip-text text-transparent">
              brAIN
            </span>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search companies, deals..."
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-8 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[300px]"
              />
            </div>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative hover-lift">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse-subtle"></span>
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <User className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}