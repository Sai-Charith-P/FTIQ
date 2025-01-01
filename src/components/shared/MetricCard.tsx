'use client'

import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: number
}

const MetricCard = ({ title, value, icon: Icon, trend }: MetricCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 dark:text-gray-400">{title}</h3>
        <Icon className="text-blue-500" size={24} />
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          {value}
        </p>
        {trend && (
          <p className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </p>
        )}
      </div>
    </div>
  )
}

export default MetricCard 