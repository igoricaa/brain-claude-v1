import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { FreshDeals } from '@/components/deals/FreshDeals'
import { Dashboard } from '@/components/dashboard/Dashboard'
import { PastDeals } from '@/components/deals/PastDeals'
import { DealDetails } from '@/components/deals/DealDetails'
import { mockDealData } from '@/data/mockDeal'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('fresh-deals')
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null)

  const renderContent = () => {
    if (selectedDealId) {
      return <DealDetails deal={mockDealData} />
    }

    switch (activeTab) {
      case 'fresh-deals':
        return <FreshDeals />
      case 'dashboard':
        return <Dashboard />
      case 'past-deals':
        return <PastDeals />
      case 'deal-details':
        return <DealDetails deal={mockDealData} />
      default:
        return <FreshDeals />
    }
  }

  const handleTabChange = (tab: string) => {
    if (tab === 'deal-details') {
      setSelectedDealId('senira-1')
    } else {
      setSelectedDealId(null)
    }
    setActiveTab(tab)
  }

  return (
    <Layout activeTab={activeTab} onTabChange={handleTabChange}>
      {renderContent()}
    </Layout>
  )
}

export default App
