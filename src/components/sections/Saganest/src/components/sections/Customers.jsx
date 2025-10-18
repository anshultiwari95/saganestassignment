import React from 'react'

const Customers = () => {
  return (
    <section className='bg-light py-12 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-16 border-l-2 border-dotted border-blue-500'>
      <div className='max-w-5xl mx-auto w-full'>
        <div className='flex flex-col lg:flex-row gap-2 items-center'>
          <figure className='flex justify-start'>
            <img src="/tesla.svg" alt="Tesla" className='w-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] lg:rounded-[5.57px] opacity-100 hover-scale cursor-pointer' />
          </figure>
          
          <div className='space-y-6 sm:space-y-8 lg:w-[600px] lg:pr-16 opacity-100'>
            <blockquote className='space-y-[22.27px]'>
              <p className='text-tertiary text-xs sm:text-sm md:text-base leading-relaxed'>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<br/> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br/> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br/> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse<br/> eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br/> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum<br/> id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <footer className='space-y-1'>
                <h4 className='text-green font-semibold text-sm sm:text-base'>Tim Smith</h4>
                <p className='text-tertiary text-xs sm:text-sm'>British Dragon Boat Racing Association</p>
              </footer>
            </blockquote>
            <div className='flex items-center justify-between gap-[22.27px]'>
              <div className='flex items-center gap-[22.27px] flex-wrap'>
                <img src="/client1.svg" alt="Client 1" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
                <img src="/client2.svg" alt="Client 2" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
                <img src="/client3.svg" alt="Client 3" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
                <img src="/client4.svg" alt="Client 4" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
                <img src="/client5.svg" alt="Client 5" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
                <img src="/client6.svg" alt="Client 6" className='h-5 sm:h-6 md:h-8 w-auto hover-scale cursor-pointer' />
              </div>
              <a href="#" className='text-green font-medium text-xs sm:text-sm md:text-base hover-color transition-all duration-150 flex items-center gap-2 cursor-pointer whitespace-nowrap'>
                Meet all customers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customers
