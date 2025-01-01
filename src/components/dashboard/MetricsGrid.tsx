'use client'

import MetricCard from '@/components/shared/MetricCard'
import { TrendingUp, Briefcase, Building2, DollarSign } from 'lucide-react'

interface MetricsGridProps {
  metrics: {
    totalBusinesses: number
    activeJobs: number
    averageSalary: number
    marketGrowth: number
  }
}

const MetricsGrid = ({ metrics }: MetricsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Businesses"
        value={metrics.totalBusinesses.toLocaleString()}
        icon={Building2}
        trend={+8.1}
      />
      <MetricCard
        title="Active Jobs"
        value={metrics.activeJobs.toLocaleString()}
        icon={Briefcase}
        trend={+12.3}
      />
      <MetricCard
        title="Average Salary"
        value={`$${(metrics.averageSalary / 1000).toFixed(0)}k`}
        icon={DollarSign}
        trend={+5.2}
      />
      <MetricCard
        title="Market Growth"
        value={`${metrics.marketGrowth}%`}
        icon={TrendingUp}
        trend={+2.1}
      />
    </div>
  )
}

export default MetricsGrid 