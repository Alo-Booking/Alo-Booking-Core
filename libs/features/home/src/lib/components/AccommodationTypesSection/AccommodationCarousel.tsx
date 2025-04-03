'use client'

import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import { AccommodationCard } from './AccommodationCard'

export const AccommodationCarousel = () => {
  const accommodations = [
    {
      name: 'Hotels',
      image:
        '/images/home/accommodation_carousel_hotels.webp',
    },
    {
      name: 'Resorts',
      image:
        '/images/home/accommodation_carousel_resorts.webp',
    },
    {
      name: 'Apartments',
      image:
        '/images/home/accommodation_carousel_apartments.webp',
    },
    {
      name: 'Homes',
      image:
        '/images/home/accommodation_carousel_homes.webp',
    },
  ]

  return (
    <div className='grid gap-6 md:grid-cols-4 mt-10 relative w-full'>
      <div className='h-48 z-10 absolute flex items-center -left-4 justify-start'>
        <LuArrowLeft className='bg-white/60  rounded-full size-8 p-1 absolute shadow-lg' />
      </div>
      {accommodations.map((accommodation, index) => (
        <AccommodationCard
          item={accommodation}
          key={index}
        />
      ))}
      <div className='h-48 z-10 absolute flex items-center -right-4 justify-end'>
        <LuArrowRight className='bg-white/60  rounded-full size-8 p-1 absolute shadow-lg' />
      </div>
    </div>
  )
}
