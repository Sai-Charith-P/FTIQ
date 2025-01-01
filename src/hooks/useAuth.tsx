'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { User } from '@/types'
import Cookies from 'js-cookie'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
}

interface RegisterData {
  name: string
  email: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      setLoading(false)
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        savedBusinesses: [],
        savedJobs: []
      }
      
      localStorage.setItem('user', JSON.stringify(mockUser))
      Cookies.set('user', 'authenticated', { expires: 7 })
      
      setUser(mockUser)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const register = async (userData: RegisterData) => {
    try {
      const mockUser: User = {
        id: '1',
        name: userData.name,
        email: userData.email,
        savedBusinesses: [],
        savedJobs: []
      }
      
      localStorage.setItem('user', JSON.stringify(mockUser))
      Cookies.set('user', 'authenticated', { expires: 7 })
      
      setUser(mockUser)
      router.push('/dashboard')
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    Cookies.remove('user')
    setUser(null)
    router.push('/')
  }

  const contextValue: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 