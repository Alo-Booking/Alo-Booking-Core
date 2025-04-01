import { IconType } from 'react-icons'

export interface CarouselItem {
  id: number
  image: string
  title: string
  price: string
  type: string
  accommodations: { icon?: IconType; label: string }[]
}
