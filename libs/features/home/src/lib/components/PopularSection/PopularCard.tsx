import Image from 'next/image'
import { CarouselItem } from '../../models/carousel'

interface Props {
  place: CarouselItem
}

export const PopularCard = ({ place }: Props) => {
  return (
    <div className=''>
      <div className='relative w-auto h-48 object-cover'>
        <Image
          src={place.image}
          alt={place.title}
          width={300}
          height={200}
          className='w-full h-full object-cover rounded-xl'
        />
        <span className='absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm'>
          {place.type}
        </span>
      </div>

      <div className='py-2'>
        <h3 className='font-semibold text-lg line-clamp-1'>{place.title}</h3>
        <p className='text-gray-600 text-sm mb-2'>{place.price}</p>

        <ul className='flex flex-wrap gap-2 text-xs text-gray-500'>
          {place.accommodations.map((inc, i) => {
            const Icon = typeof inc === 'string' ? null : inc.icon
            const label = typeof inc === 'string' ? inc : inc.label

            return (
              <li key={i} className='flex items-center gap-1'>
                {Icon && <Icon size={16} />}
                {label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
