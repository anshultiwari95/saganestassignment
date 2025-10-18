import React from 'react'

const Reinvent = () => {
  return (
    <section className='bg-light py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
          <header className='space-y-4 sm:space-y-6'>
            <h2 className='text-secondary font-semibold text-lg sm:text-xl md:text-2xl lg:text-[25.06px] leading-tight lg:leading-[30.63px] tracking-[0%]'>
              Helping a local<br/>
              <span className='text-green'>business reinvent itself</span>
            </h2>
            <p className='text-light font-normal text-xs sm:text-sm lg:text-[11.14px] leading-tight lg:leading-[16.71px] tracking-[0%]'>
              We reached here with our hard work and dedication
            </p>
          </header>
          <div className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/members.svg" alt="members" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='text-primary font-semibold text-base sm:text-lg md:text-xl lg:text-2xl'>2,245,341</h3>
                <span className='text-tertiary text-xs sm:text-sm'>Members</span>
              </div>
            </article>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/club.svg" alt="club" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='text-primary font-semibold text-base sm:text-lg md:text-xl lg:text-2xl'>46,328</h3>
                <span className='text-tertiary text-xs sm:text-sm'>Clubs</span>
              </div>
            </article>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/bookings.svg" alt="bookings" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='text-primary font-semibold text-base sm:text-lg md:text-xl lg:text-2xl'>828,867</h3>
                <span className='text-tertiary text-xs sm:text-sm'>Event Bookings</span>
              </div>
            </article>
            <article className='flex items-center gap-3 sm:gap-4 hover-lift cursor-pointer'>
              <img src="/wallet.svg" alt="wallet" className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' />
              <div className='flex flex-col'>
                <h3 className='text-primary font-semibold text-base sm:text-lg md:text-xl lg:text-2xl'>1,926,436</h3>
                <span className='text-tertiary text-xs sm:text-sm'>Payments</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reinvent;