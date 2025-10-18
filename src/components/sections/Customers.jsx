import React from 'react'

const Customers = () => {
  return (
    <section className='bg-light py-16 px-4 sm:px-8 border-r-2 border-dotted border-light'>
      <div className='max-w-6xl mx-auto'>
        
        {/* Main Testimonial Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          
          {/* Tesla Logo */}
          <div className='flex justify-center lg:justify-start'>
            <img src="/tesla.svg" alt="Tesla" className='w-40 h-40 sm:w-48 sm:h-48 hover-scale cursor-pointer' />
          </div>
          
          {/* Testimonial Content */}
          <div className='space-y-6'>
            <p className='text-tertiary text-sm sm:text-base leading-relaxed'>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            
            <div className='space-y-1'>
              <h4 className='text-green font-semibold text-sm sm:text-base'>Tim Smith</h4>
              <p className='text-muted text-xs sm:text-sm'>British Dragon Boat Racing Association</p>
            </div>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div className='flex items-center gap-6 sm:gap-8 flex-wrap justify-center lg:justify-start'>
            <img src="/client1.svg" alt="Client 1" className='h-6 sm:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client2.svg" alt="Client 2" className='h-6 sm:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client3.svg" alt="Client 3" className='h-6 sm:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client4.svg" alt="Client 4" className='h-6 sm:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client5.svg" alt="Client 5" className='h-6 sm:h-8 w-auto hover-scale cursor-pointer' />
            <img src="/client6.svg" alt="Client 6" className='h-6 sm:h-8 w-auto hover-scale cursor-pointer' />
          </div>
          
          <a href="#" className='text-green font-medium text-sm sm:text-base hover-color transition-all duration-150 flex items-center gap-2 cursor-pointer'>
            Meet all customers →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Customers