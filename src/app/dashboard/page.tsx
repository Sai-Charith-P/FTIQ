'use client'

import MetricsGrid from '@/components/dashboard/MetricsGrid'
import TrendsChart from '@/components/dashboard/TrendsChart'
import { marketData } from '@/lib/sample-data'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Market Dashboard
      </h1>
      
      <MetricsGrid metrics={marketData.metrics} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TrendsChart data={marketData.trends} />
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Recent Updates
          </h2>
          {/* Add recent updates list here */}
        </div>
      </div>
    </div>
  )
} 