'use client'

import { Business } from '@/types'
import { Card } from '@/components/shared/Card'

interface BusinessListProps {
  businesses: Business[]
}

const BusinessList = ({ businesses }: BusinessListProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Businesses
      </h2>
      <div className="grid gap-4">
        {businesses.map((business) => (
          <Card
            key={business.id}
            title={business.name}
            description={business.description}
            href={`/businesses/${business.id}`}
          >
            <div className="mt-4 flex flex-wrap gap-2">
              {business.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BusinessList 