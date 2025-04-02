import Image from 'next/image'

export function Footer() {
  return (
    <footer className='bg-[#002F88] text-white'>
      <div className='max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='flex flex-col items-start gap-2 justify-center'>
          <Image
            src='/images/footer_logo_default.webp'
            alt='Alo Booking Logo'
            width={100}
            height={100}
            className='w-auto h-auto'
          />
        </div>

        <div>
          <h3 className='font-bold mb-2 uppercase'>Services</h3>
          <ul className='space-y-1'>
            <li>Rent Cars</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Tours</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold mb-2 uppercase'>Legal</h3>
          <ul className='space-y-1'>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
            <li>Refunds policy</li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold mb-2 uppercase'>General info</h3>
          <div className='flex flex-col gap-2'>
            <button
              className={`w-[80px] border rounded-full px-2 py-1 flex items-center min-h-9 hover:bg-[#f5f5f5] hover:text-black transition-all duration-300 ease-in-out`}
            >
              <Image
                src='/images/eng_flag_button.webp'
                alt='Logo'
                width={25}
                height={25}
                className={'rounded-full'}
              />
              <span className='ml-2'>ENG</span>
            </button>
            <button className='w-[80px] justify-center border rounded-full px-2 py-1 flex items-center min-h-9 hover:bg-[#f5f5f5] hover:text-black transition-all duration-300 ease-in-out'>
              $ (USD)
            </button>
          </div>
        </div>
      </div>

      <div className='border-t border-white/20'>
        <p className='text-center py-4'>Alo Booking - All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
