'use client'

import { useAuth } from '@/hooks/useAuth'
import ProfileForm from '@/components/profile/ProfileForm'
import { User } from '@/types'

export default function ProfilePage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">
          Please log in to view your profile.
        </div>
      </div>
    )
  }

  const handleUpdateProfile = async (updatedData: Partial<User>) => {
    try {
      // In a real app, you would make an API call here
      console.log('Updating profile:', updatedData)
      
      // Update the user in localStorage to persist changes
      const updatedUser = { ...user, ...updatedData }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      
      // Show success message
      alert('Profile updated successfully!')
    } catch (error) {
      console.error('Failed to update profile:', error)
      alert('Failed to update profile. Please try again.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <ProfileForm user={user} onUpdate={handleUpdateProfile} />
    </div>
  )
} 