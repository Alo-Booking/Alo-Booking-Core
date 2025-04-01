'use client'

import { useState } from 'react'
import { SEARCH_TABS } from '../../constants/const'
import { SearchTabLabel } from '../../models'

export const HeroTabs = () => {
  const [selectedTab, setSelectedTab] = useState(SearchTabLabel.STAYS)
  return (
    <ul className='flex gap-2 list-none'>
      {SEARCH_TABS.map((tab) => {
        const Icon = tab.icon
        const isSelected = selectedTab === tab.label
        return (
          <li key={tab.label}>
            <button
              className={`flex items-center justify-center rounded-full border border-white  px-4 py-1 select-none ${
                isSelected ? 'bg-white text-black' : 'bg-black/40 text-white '
              }`}
              onClick={() => setSelectedTab(tab.label)}
            >
              <Icon />
              <span className='ml-2 font-normal'>{tab.label}</span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
