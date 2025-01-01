import { Card } from '@/components/shared/Card'

const cards = [
  {
    title: 'Financial Dashboard',
    description: 'Track key financial metrics and trends in real-time.',
    href: '/dashboard'
  },
  {
    title: 'FinTech Directory',
    description: 'Explore innovative financial technology companies.',
    href: '/businesses'
  },
  {
    title: 'Job Board',
    description: 'Find exciting career opportunities in FinTech.',
    href: '/jobs'
  }
];

export default function Home() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        Welcome to FinTechIQ
      </h1>
      <p className="text-xl mb-8 text-center text-gray-600 dark:text-gray-400">
        Your hub for financial technology intelligence, trends, and opportunities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Card key={card.href} {...card} />
        ))}
      </div>
    </div>
  )
}