'use client'

import { useState } from 'react'
import { Button } from '@/components/shared/Button'
import { Search, Filter } from 'lucide-react'

interface JobFiltersProps {
  onFilterChange: (filters: JobFilters) => void
}

export interface JobFilters {
  search: string
  type: string
  category: string
  experienceLevel: string
  salaryRange: string
}

const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship']
const JOB_CATEGORIES = ['Engineering', 'Design', 'Product', 'Marketing', 'Sales']
const EXPERIENCE_LEVELS = ['Entry', 'Mid', 'Senior', 'Lead']
const SALARY_RANGES = [
  '0-50k',
  '50k-100k',
  '100k-150k',
  '150k+'
]

export default function JobFilters({ onFilterChange }: JobFiltersProps) {
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    type: '',
    category: '',
    experienceLevel: '',
    salaryRange: ''
  })

  const handleFilterChange = (key: keyof JobFilters, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Job Type
          </label>
          <div className="flex flex-wrap gap-2">
            {JOB_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange('type', filters.type === type ? '' : type)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.type === type
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            <option value="">All Categories</option>
            {JOB_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Experience Level
          </label>
          <select
            value={filters.experienceLevel}
            onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            <option value="">All Levels</option>
            {EXPERIENCE_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Salary Range
          </label>
          <select
            value={filters.salaryRange}
            onChange={(e) => handleFilterChange('salaryRange', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            <option value="">All Ranges</option>
            {SALARY_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
} 