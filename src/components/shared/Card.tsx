'use client'

import { ReactNode } from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  href: string
  className?: string
  children?: ReactNode
}

export const Card = ({ title, description, href, className = '', children }: CardProps) => {
  return (
    <Link href={href} className="block">
      <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        {children}
      </div>
    </Link>
  )
}
