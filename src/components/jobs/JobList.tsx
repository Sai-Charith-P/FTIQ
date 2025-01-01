'use client'

import { useState } from 'react'
import { Job } from '@/types'
import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'
import { Briefcase, DollarSign, Calendar } from 'lucide-react'

interface JobListProps {
  jobs: Job[]
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id} title={job.title} description={job.description} href={`/jobs/${job.id}`}>
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <DollarSign className="w-4 h-4 mr-2" />
              <span>${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                {job.type}
              </span>
              <span className="px-2 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">
                {job.category}
              </span>
              <span className="px-2 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded">
                {job.experienceLevel}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 