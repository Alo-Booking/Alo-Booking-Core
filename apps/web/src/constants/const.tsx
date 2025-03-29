import { SearchTab, SearchTabLabel } from '@/models/tab.model'
import { LuConciergeBell, LuPlane, LuCarFront } from 'react-icons/lu'
import { TbBeach } from 'react-icons/tb'

export const SEARCH_TABS: SearchTab[] = [
  {
    label: SearchTabLabel.STAYS,
    icon: LuConciergeBell,
  },
  {
    label: SearchTabLabel.FLIGHTS,
    icon: LuPlane,
  },
  {
    label: SearchTabLabel.CAR,
    icon: LuCarFront,
  },
  {
    label: SearchTabLabel.TRAVEL_PACKAGE,
    icon: TbBeach,
  },
]
