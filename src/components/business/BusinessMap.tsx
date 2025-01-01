'use client'

import { useState } from 'react'
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api'
import { Business } from '@/types'

interface BusinessMapProps {
  businesses: Business[]
}

const BusinessMap = ({ businesses }: BusinessMapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const mapCenter = {
    lat: businesses[0]?.lat || 40.7128,
    lng: businesses[0]?.lng || -74.0060
  }

  const mapStyles = {
    height: '500px',
    width: '100%'
  }

  if (loadError) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-[500px] flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400">
            Error loading map
          </p>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-[500px] flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={mapCenter}
        options={{
          styles: [
            {
              featureType: 'all',
              elementType: 'all',
              stylers: [
                { saturation: -100 }
              ]
            }
          ]
        }}
      >
        {businesses.map((business) => (
          <Marker
            key={business.id}
            position={{
              lat: business.lat,
              lng: business.lng
            }}
            title={business.name}
          />
        ))}
      </GoogleMap>
    </div>
  )
}

export default BusinessMap 