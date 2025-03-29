import { IconType } from 'react-icons'

export enum SearchTabLabel {
  STAYS = 'Stays',
  FLIGHTS = 'Flights',
  CAR = 'Car rentals',
  TRAVEL_PACKAGE = 'Travel package',
}

export interface SearchTab {
  label: SearchTabLabel
  icon: IconType
}
