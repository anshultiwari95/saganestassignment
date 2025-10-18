import React from 'react'

const Reinvent = () => {
  return (
    <section className='bg-light py-12 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-16'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center'>
          <header className='space-y-4 sm:space-y-6'>
            <h2 className='font-inter font-semibold text-lg sm:text-xl md:text-2xl lg:text-[25.06px] lg:leading-[30.63px] lg:tracking-[0%] text-[#4D4D4D]'>
              Helping a local<br/>
              <span className='text-green'>business reinvent itself</span>
            </h2>
            <p className='font-inter font-normal text-xs sm:text-sm lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-[#18191F]'>
              We reached here with our hard work and dedication
            </p>
          </header>
          <div className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/members.svg" alt="members" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[19.49px] lg:leading-[25.06px] lg:tracking-[0%] text-[#4D4D4D]'>2,245,341</h3>
                <span className='font-inter font-normal text-xs sm:text-sm lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-[#717171]'>Members</span>
              </div>
            </article>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/club.svg" alt="club" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[19.49px] lg:leading-[25.06px] lg:tracking-[0%] text-[#4D4D4D]'>46,328</h3>
                <span className='font-inter font-normal text-xs sm:text-sm lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-[#717171]'>Clubs</span>
              </div>
            </article>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/bookings.svg" alt="bookings" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[19.49px] lg:leading-[25.06px] lg:tracking-[0%] text-[#4D4D4D]'>828,867</h3>
                <span className='font-inter font-normal text-xs sm:text-sm lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-[#717171]'>Event Bookings</span>
              </div>
            </article>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/wallet.svg" alt="wallet" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='font-inter font-bold text-base sm:text-lg md:text-xl lg:text-[19.49px] lg:leading-[25.06px] lg:tracking-[0%] text-[#4D4D4D]'>1,926,436</h3>
                <span className='font-inter font-normal text-xs sm:text-sm lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-[#717171]'>Payments</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reinvent;