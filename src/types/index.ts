export interface User {
    id: string
    name: string
    email: string
    phone?: string
    company?: string
    location?: string
    position?: string
    bio?: string
    savedBusinesses: string[]
    savedJobs: string[]
  }
  
  export interface Business {
    id: string
    name: string
    sector: string
    description: string
    employeeCount: number
    location: string
    contact: string
    email: string
    website: string
    hours: string
    tags: string[]
    lat: number
    lng: number
  }
  
  export interface Job {
    id: string
    title: string
    company: string
    description: string
    type: string
    category: string
    salaryMin: number
    salaryMax: number
    experienceLevel: string
    postedDate: string
  }