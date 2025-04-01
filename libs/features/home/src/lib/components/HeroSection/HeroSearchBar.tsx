'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { SearchFormData, searchSchema } from '../../models'
import { zodResolver } from '@hookform/resolvers/zod'
import { LuCalendarDays, LuMapPin, LuUserRound } from 'react-icons/lu'

export const HeroSearchBar = () => {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  })

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    console.log('Form submitted:', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white mt-4 p-1 rounded-full flex '
    >
      <div className='px-3 py-4 flex divide-x-2 rounded-full'>
        <div className='px-3 text-black flex items-center gap-2'>
          <LuMapPin />
          <input
            className='placeholder:font-normal text-md placeholder:text-gray-400 focus:outline-none w-60'
            type='text'
            {...register('location')}
            placeholder='Where do you want to travel?'
          />
        </div>
        <div className='px-3 text-black flex items-center gap-2'>
          <LuCalendarDays />
          <input
            className='placeholder:font-normal text-md placeholder:text-gray-400 focus:outline-none w-32'
            type='text'
            {...register('dates')}
            placeholder='Select dates'
          />
        </div>
        <div className='px-3 text-black flex items-center gap-2'>
          <LuUserRound />
          <input
            className='placeholder:font-normal text-md placeholder:text-gray-400 focus:outline-none w-32'
            type='text'
            {...register('guests')}
            placeholder='How many?'
          />
        </div>
      </div>
      <button className='bg-[#F2C817] text-black rounded-full text-sm font-extrabold w-64 uppercase'>
        Search
      </button>
    </form>
  )
}
