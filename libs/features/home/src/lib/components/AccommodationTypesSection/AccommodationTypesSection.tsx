import { TitleSection } from '@alobooking/ui'
import { AccommodationExtraServices } from './AccommodationExtraServices'
import { AccommodationCarousel } from './AccommodationCarousel'

export function AccommodationTypesSection() {
  return (
    <section className='rounded-[10rem] bg-[#0E1B83] px-20 py-10 flex flex-col items-center mb-20'>
      <TitleSection
        normalText='Explore by'
        highlightText='accommodation types'
        customClassName='text-white'
      />
      <AccommodationCarousel />
      <AccommodationExtraServices />
    </section>
  )
}

export default AccommodationTypesSection
