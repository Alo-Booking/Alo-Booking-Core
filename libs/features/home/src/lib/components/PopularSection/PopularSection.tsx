import { PopularCarousel } from './PopularCarousel'

export function PopularSection() {
  return (
    <section className=' mx-auto py-20 px-20'>
      <h2 className='text-5xl font-normal mb-6'>
        Discover the most <span className='font-bold'>popular</span>
      </h2>

      <PopularCarousel />
    </section>
  )
}

export default PopularSection
