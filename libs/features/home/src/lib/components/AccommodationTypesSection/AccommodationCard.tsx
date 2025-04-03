import Image from 'next/image'
import { AccommodationItem } from '../../models'

interface Props {
  item: AccommodationItem
}

export const AccommodationCard = ({ item }: Props) => {
  return (
    <div className='w-auto h-48 object-cover'>
      <Image
        src={item.image}
        alt='Hotels'
        className='w-full h-full object-cover rounded-t-3xl '
        width={300}
        height={200}
      />
      <div className='py-2 px-5 bg-white rounded-b-3xl'>
        <h3 className='text-black text-lg font-normal '>
          {item.name}
        </h3>
      </div>
    </div>
  )
}
