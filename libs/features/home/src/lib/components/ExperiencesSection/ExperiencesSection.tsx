'use client'

import { TitleSection } from '@alobooking/ui'
import { ExperiencesCard } from './ExperiencesCard'
import { useState } from 'react'

export function ExperiencesSection() {
  const [experiences] = useState([
    {
      title: 'Rental Cars',
      description: 'Find +150 destinations',
      image: '/images/home/experience_carousel_cars.webp',
    },
    {
      title: 'Hotels',
      description: 'Find +175 destinations',
      image: '/images/home/experience_carousel_hotels.webp',
    },
    {
      title: 'Flights',
      description: 'Find +180 destinations',
      image:
        '/images/home/experience_carousel_flights.webp',
    },
    {
      title: 'Tours',
      description: 'Find +50 destinations',
      image: '/images/home/experience_carousel_tours.webp',
    },
  ])

  return (
    <section className='mx-auto px-20 mb-20'>
      <TitleSection
        normalText='Explore by'
        highlightText='experiences'
      />
      <div className='grid gap-6 md:grid-cols-4 mt-10 relative'>
        {experiences.map((experience, index) => (
          <ExperiencesCard item={experience} key={index} />
        ))}
      </div>
    </section>
  )
}

export default ExperiencesSection
