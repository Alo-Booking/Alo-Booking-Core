import Image from 'next/image'
import { CarouselItem } from '../../models'

interface Props {
  place: CarouselItem
}

export const PopularCard = ({ place }: Props) => {
  return (
    <div>
      <div className='relative w-auto h-48 object-cover'>
        <Image
          src={place.image}
          alt={place.title}
          width={300}
          height={200}
          className='w-full h-full object-cover rounded-3xl'
        />
        <span className='absolute top-3 left-3 bg-black text-white px-4 py-2 rounded-full text-xs font-semibold uppercase'>
          {place.type}
        </span>
      </div>

      <div className='py-2'>
        <h3 className='font-semibold text-lg line-clamp-1'>
          {place.title}
        </h3>
        <p className='text-gray-600 text-sm mb-2'>
          {place.price}
        </p>

        <ul className='flex flex-wrap gap-2 text-xs text-gray-500'>
          {place.accommodations.map((accom, i) => {
            const Icon = accom.icon

            return (
              <li
                key={i}
                className='flex items-center gap-1'
              >
                <Icon size={16} />
                {accom.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
