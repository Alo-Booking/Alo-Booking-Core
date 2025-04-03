import { IconType } from 'react-icons'
import { TitleSection } from '@alobooking/ui'
import { FaSwimmingPool } from 'react-icons/fa'
import {
  LuChefHat,
  LuBusFront,
  LuBike,
  LuWifi,
} from 'react-icons/lu'

export const AccommodationExtraServices = () => {
  const services: {
    icon: IconType
    text: string
  }[] = [
    {
      icon: LuChefHat,
      text: 'Desayuno incluido',
    },
    {
      icon: FaSwimmingPool,
      text: 'Piscina',
    },
    {
      icon: LuBusFront,
      text: 'Traslado',
    },
    {
      icon: LuBike,
      text: 'Actividades',
    },
    {
      icon: LuBusFront,
      text: 'Traslado',
    },
    {
      icon: LuWifi,
      text: 'Wi-Fi',
    },
  ]

  return (
    <div className='pt-32 pb-10 flex justify-between w-full px-10 '>
      <TitleSection
        normalText='Navega según los'
        highlightText='servicios extras'
        customClassName='text-white w-[25rem]'
      />
      <div className='flex gap-5'>
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <div
              key={index}
              className='flex flex-col p-2 rounded-full bg-white items-center justify-center gap-2 size-32'
            >
              <Icon className='text-4xl' />
              <h3 className='text-center text-sm'>
                {service.text}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
