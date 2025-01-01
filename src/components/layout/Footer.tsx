import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">FinTech Hub</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connecting businesses and talent in the fintech industry.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/businesses" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    Business Directory
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    Job Board
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                    Market Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Email: contact@fintechhub.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} FinTech Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }

export default Footer