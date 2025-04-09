import { TabModules, TitleSection } from '@alobooking/ui'
import { NewWayCarousel } from './NewWayCarousel'

export function NewWaySection() {
  return (
    <section className='mx-auto my-20 px-20'>
      <TitleSection
        normalText='Discover new way to'
        highlightText='travel'
      />
      <TabModules
        itemClassName='border-[#2F3030]'
        selectedClassName='bg-[#2F3030] text-white'
        unselectedClassName='bg-white text-[#2F3030]'
      />
      <NewWayCarousel />
    </section>
  )
}

export default NewWaySection
