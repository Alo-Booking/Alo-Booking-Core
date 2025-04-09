import { ReactNode } from 'react'
import './global.css'
import { Footer, Header } from '@/components'

export const metadata = {
  title: 'Aloo Booking',
  description:
    'Aloo Booking - Discover new experiences & create new stories.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='es'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
