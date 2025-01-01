'use client'

import { useState, useMemo } from 'react'
import JobList from '@/components/jobs/JobList'
import JobFilters, { JobFilters as JobFiltersType } from '@/components/jobs/JobFilters'
import { jobListings } from '@/lib/sample-data'

export default function JobsPage() {
  const [filters, setFilters] = useState<JobFiltersType>({
    search: '',
    type: '',
    category: '',
    experienceLevel: '',
    salaryRange: ''
  })

  const filteredJobs = useMemo(() => {
    return jobListings.filter(job => {
      if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase())) {
        return false
      }
      if (filters.type && job.type !== filters.type) {
        return false
      }
      if (filters.category && job.category !== filters.category) {
        return false
      }
      if (filters.experienceLevel && job.experienceLevel !== filters.experienceLevel) {
        return false
      }
      if (filters.salaryRange) {
        const [min, max] = filters.salaryRange.split('-').map(s => parseInt(s))
        if (max) {
          if (job.salaryMax < min * 1000 || job.salaryMin > max * 1000) {
            return false
          }
        } else {
          // Handle "150k+" case
          if (job.salaryMin < min * 1000) {
            return false
          }
        }
      }
      return true
    })
  }, [filters])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Job Board
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {filteredJobs.length} jobs found
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <JobFilters onFilterChange={setFilters} />
        </div>
        <div className="lg:col-span-3">
          <JobList jobs={filteredJobs} />
        </div>
      </div>
    </div>
  )
} 