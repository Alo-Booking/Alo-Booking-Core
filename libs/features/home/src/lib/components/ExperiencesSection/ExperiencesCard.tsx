import Image from 'next/image'
import { LuArrowRight } from 'react-icons/lu'
import { ExperienceItem } from '../../models/experience-card'

interface Props {
  item: ExperienceItem
}

export const ExperiencesCard = ({ item }: Props) => {
  return (
    <div className='w-full h-[35rem] px-4 py-8 rounded-3xl shadow-md bg-cover bg-center flex flex-col justify-end relative'>
      <div className='absolute inset-0 rounded-3xl -z-10'>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className='rounded-3xl object-cover'
          priority
        />
      </div>

      <div className='absolute inset-0 rounded-3xl -z-5 bg-gradient-to-t from-black/80 via-transparent to-transparent'></div>

      <div className='flex justify-between items-center z-20'>
        <div className='text-white mt-2'>
          <h2 className='text-3xl font-semibold'>
            {item.title}
          </h2>
          <p>{item.description}</p>
        </div>

        <button className='border h-fit rounded-3xl px-4 py-1 '>
          <LuArrowRight className='text-white size-8' />
        </button>
      </div>
    </div>
  )
}
