import BusinessList from '@/components/business/BusinessList'
import BusinessMap from '@/components/business/BusinessMap'
import { businessData } from '@/lib/sample-data'

export default function BusinessesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Business Directory
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BusinessList businesses={businessData} />
        <BusinessMap businesses={businessData} />
      </div>
    </div>
  )
} 