import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full flex items-center justify-between px-12 py-6 bg-transparent z-10'>
      <div className='flex items-center'>
        <Image
          src='/images/header_logo_default.webp'
          alt='Logo'
          width={150}
          height={100}
        />
      </div>
      <nav>
        <ul className={'flex gap-4 text-sm list-none'}>
          <li className={styles['header-nav__item']}>
            <button className={`min-w-[80px] ${styles['header-nav__button']}`}>
              <Image
                src='/images/home_hero_flag_button.webp'
                alt='Logo'
                width={25}
                height={25}
                className={'rounded-full'}
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
