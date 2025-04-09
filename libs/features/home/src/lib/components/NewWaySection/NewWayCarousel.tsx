import {
  LuArrowLeft,
  LuArrowRight,
  LuBusFront,
  LuChefHat,
  LuWifi,
} from 'react-icons/lu'
import { PopularCard } from '../PopularSection/PopularCard'
import { CarouselItem } from '../../models'

export const NewWayCarousel = () => {
  const places: CarouselItem[] = [
    {
      id: 1,
      title: 'Miami Airport Marriott',
      price: '$2,753 / night',
      image: '/images/home/newway_carousel_hotel_1.webp',
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
      title: 'Radisson RED Miami Airport',
      price: '$1,863 / night',
      image: '/images/home/newway_carousel_hotel_2.webp',
      type: 'Hotel',
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
      title: 'Palmer Dadeland',
      price: '$758 / night',
      image: '/images/home/newway_carousel_hotel_3.webp',
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
      title: 'Marriott Miami West',
      price: '$1,563 / night',
      image: '/images/home/newway_carousel_hotel_4.webp',
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
  ]

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
