'use client'

import { useState } from 'react'
import { SearchTabLabel } from '../../../../../../features/home/src/lib/models'
import { SEARCH_TABS } from '../../../../../../features/home/src/lib/constants'

interface Props {
  listClassName?: string
  itemClassName?: string
  selectedClassName?: string
  unselectedClassName?: string
}

export function TabModules({
  itemClassName = 'border-white',
  listClassName = '',
  selectedClassName = 'bg-white text-black',
  unselectedClassName = 'bg-black/40 text-white',
}: Props) {
  const [selectedTab, setSelectedTab] = useState(
    SearchTabLabel.STAYS
  )

  return (
    <ul
      className={`flex gap-2 list-none ${listClassName} `}
    >
      {SEARCH_TABS.map((tab) => {
        const Icon = tab.icon
        const isSelected = selectedTab === tab.label
        return (
          <li key={tab.label}>
            <button
              className={`flex items-center justify-center rounded-full border  px-4 py-1 select-none ${
                isSelected
                  ? selectedClassName
                  : unselectedClassName
              } ${itemClassName}`}
              onClick={() => setSelectedTab(tab.label)}
            >
              <Icon />
              <span className='ml-2 font-normal'>
                {tab.label}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TabModules
