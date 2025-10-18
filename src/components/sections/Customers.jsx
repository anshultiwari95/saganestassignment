import React from 'react'

const Customers = () => {
  return (
    <section className='bg-light py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-r-2 border-dotted border-light'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16'>
          <div className='flex justify-center lg:justify-start'>
            <img src="/tesla.svg" alt="Tesla" className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 hover-scale cursor-pointer' />
          </div>
          <div className='space-y-4 sm:space-y-6'>
            <p className='text-tertiary text-xs sm:text-sm md:text-base leading-relaxed'>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <div className='space-y-1'>
              <h4 className='text-green font-semibold text-sm sm:text-base'>Tim Smith</h4>
              <p className='text-muted text-xs sm:text-sm'>British Dragon Boat Racing Association</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8'>
          <div className='flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center lg:justify-start'>
            <img src="/client1.svg" alt="Client 1" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client2.svg" alt="Client 2" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client3.svg" alt="Client 3" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client4.svg" alt="Client 4" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client5.svg" alt="Client 5" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client6.svg" alt="Client 6" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
          </div>
          <a href="#" className='text-green font-medium text-xs sm:text-sm md:text-base hover-color transition-all duration-150 flex items-center gap-2 cursor-pointer'>
            Meet all customers →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Customers