import { DealHeader } from "./deal-sections/DealHeader"
import { BasicDataCard } from "./deal-sections/BasicDataCard" 
import { IndustriesSection } from "./deal-sections/IndustriesSection"
import { FoundersTable } from "./deal-sections/FoundersTable"
import { DataTables } from "./deal-sections/DataTables"
import { InvestmentFacts } from "./deal-sections/InvestmentFacts"
import { AssessmentSection } from "./deal-sections/AssessmentSection"
import type { Deal } from "@/types"

interface DealDetailsProps {
  deal: Deal
}

export function DealDetails({ deal }: DealDetailsProps) {
  const handleDownloadDeck = () => {
    console.log("Download deck for", deal.company)
  }

  const handleRefreshData = () => {
    console.log("Refresh data for", deal.company)
  }

  const handleDelete = () => {
    console.log("Delete deal for", deal.company)
  }

  const handleAddFounder = () => {
    console.log("Add founder to", deal.company)
  }

  const handleAddGrant = () => {
    console.log("Add grant to", deal.company)
  }

  const handleAddPatent = () => {
    console.log("Add patent to", deal.company)
  }

  const handleSaveAssessment = () => {
    console.log("Save assessment for", deal.company)
  }

  const handleSendToAffinity = () => {
    console.log("Send to Affinity:", deal.company)
  }

  return (
    <div className="min-h-screen bg-background">
      <DealHeader
        company={deal.company}
        website={deal.website}
        onDownloadDeck={handleDownloadDeck}
        onRefreshData={handleRefreshData}
        onDelete={handleDelete}
      />
      
      <div className="px-6 py-6 space-y-8 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Basic Info & Data */}
          <div className="lg:col-span-1 space-y-6">
            <BasicDataCard
              uploaded={deal.uploaded}
              location={deal.location}
              fundingRound={deal.fundingRound}
              raising={deal.raising}
              raisedToDate={deal.raisedToDate}
              investors={deal.investors}
            />
          </div>

          {/* Right Columns - Industries & Content */}
          <div className="lg:col-span-2 space-y-8">
            <IndustriesSection
              industries={deal.industries}
              dualUseSignals={deal.dualUseSignals}
            />

            <FoundersTable
              founders={deal.founders}
              onAddFounder={handleAddFounder}
            />

            <DataTables
              grants={deal.grants}
              clinicalTrials={deal.clinicalTrials}
              patentApplications={deal.patentApplications}
              onAddGrant={handleAddGrant}
              onAddPatent={handleAddPatent}
            />
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="space-y-8">
          <InvestmentFacts facts={deal.investmentFacts} />
          
          <AssessmentSection
            assessment={deal.assessment}
            onSave={handleSaveAssessment}
            onSendToAffinity={handleSendToAffinity}
          />
        </div>
      </div>
    </div>
  )
}