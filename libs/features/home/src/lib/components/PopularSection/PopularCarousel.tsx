'use client'

import {
  LuArrowLeft,
  LuArrowRight,
  LuBusFront,
  LuChefHat,
  LuWifi,
} from 'react-icons/lu'
import { PopularCard } from './PopularCard'
import { CarouselItem } from '../../models/carousel'
import { useState } from 'react'

export const PopularCarousel = () => {
  const [places, setPlaces] = useState<CarouselItem[]>([
    {
      id: 1,
      title: 'Treasure Beach, Jamaica',
      price: '$198 / night',
      image: '/images/home/popular_carousel_hotel_1.webp',
      type: 'Hotel',
      accommodations: [
        {
          label: 'Breakfast included',
          icon: LuChefHat,
        },
        {
          label: 'Wi-Fi',
          icon: LuWifi,
        },
      ],
    },
    {
      id: 2,
      title: 'Guatapé, Medellín, Colombia',
      price: '$66 / night',
      image: '/images/home/popular_carousel_hotel_2.webp',
      type: 'Cabin',
      accommodations: [
        {
          label: 'Transportation included',
          icon: LuBusFront,
        },
        {
          label: 'Wi-Fi',
          icon: LuWifi,
        },
      ],
    },
    {
      id: 3,
      title: 'Noord, Aruba',
      price: '$198 / night',
      image: '/images/home/popular_carousel_hotel_3.webp',
      type: 'Hotel',
      accommodations: [
        {
          label: 'Breakfast included',
          icon: LuChefHat,
        },
        {
          label: 'Wi-Fi',
          icon: LuWifi,
        },
      ],
    },
    {
      id: 4,
      title: 'Necoclí, Colombia',
      price: '$30 / night',
      image: '/images/home/popular_carousel_hotel_4.webp',
      type: 'Hotel',
      accommodations: [
        {
          label: 'Breakfast included',
          icon: LuChefHat,
        },
        {
          label: 'Wi-Fi',
          icon: LuWifi,
        },
      ],
    },
  ])

  return (
    <div className='grid gap-6 md:grid-cols-4 mt-10 relative'>
      <div className='h-48 z-10 absolute flex items-center -left-4 justify-start'>
        <LuArrowLeft className='bg-white/60  rounded-full size-8 p-1 absolute shadow-lg' />
      </div>
      {places.map((place) => (
        <PopularCard place={place} key={place.id} />
      ))}
      <div className='h-48 z-10 absolute flex items-center -right-4 justify-end'>
        <LuArrowRight className='bg-white/60  rounded-full size-8 p-1 absolute shadow-lg' />
      </div>
    </div>
  )
}
