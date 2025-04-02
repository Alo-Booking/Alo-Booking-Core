'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-12 py-4 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#0E1B83]' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center'>
        <Image
          src='/images/header_logo_default.webp'
          alt='Logo'
          width={120}
          height={100}
          className={`w-auto h-auto`}
        />
      </div>
      <nav>
        <ul className={'flex gap-4 text-sm list-none'}>
          <li className={styles['header-nav__item']}>
            <button className={`min-w-[80px] ${styles['header-nav__button']}`}>
              <Image
                src='/images/eng_flag_button.webp'
                alt='Logo'
                width={25}
                height={25}
                className={'rounded-full w-auto h-auto'}
              />
              <span className='ml-2'>ENG</span>
            </button>
          </li>

          <li className={styles['header-nav__item']}>
            <button
              className={`min-w-[80px] justify-center ${styles['header-nav__button']}`}
            >
              $ (USD)
            </button>
          </li>

          <li className={styles['header-nav__item']}>
            <button
              className={`min-w-[150px] justify-center ${styles['header-nav__button']}`}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
