import { SearchBar, Tabs } from '@/components'

export default function Index() {
  return (
    <section className='relative w-full h-[100vh] bg-[url(/images/home_hero_background.webp)] bg-cover bg-center flex flex-col items-center text-center text-white px-0 py-4 justify-center'>
      <h1 className='text-7xl font-bold max-w-[900px] leading-tight select-none'>
        {'Discover new experiences & create new stories.'}
      </h1>
      <div className='mt-16 text-lg font-semibold'>
        <Tabs />
        <SearchBar />
      </div>
    </section>
  )
}
