import { TitleSection } from '@alobooking/ui'
import { PopularCarousel } from './PopularCarousel'

export function PopularSection() {
  return (
    <section className='mx-auto my-20 px-20'>
      <TitleSection normalText='Discover the most' highlightText='popular' />
      <PopularCarousel />
    </section>
  )
}

export default PopularSection
