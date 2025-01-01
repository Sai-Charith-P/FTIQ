'use client'

import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '@/hooks/useAuth'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </AuthProvider>
  )
}