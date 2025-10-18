import React from 'react'
import Button from '../button/Button'

const Design = () => {
  return (
    <section className='bg-primary py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
          <div className='flex justify-center lg:justify-start'>
            <img src="/design.svg" alt="Design illustration" className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[307.34px] lg:h-[301.68px] opacity-100 hover-scale cursor-pointer' />
          </div>
          <div className='space-y-4 sm:space-y-6 lg:space-y-8'>
            <h2 className='text-primary font-semibold text-lg sm:text-xl md:text-2xl lg:text-[25.06px] leading-tight lg:leading-[30.63px] tracking-[0%] text-left'>
              How to design your site footer like we did
            </h2>
            <p className='text-tertiary text-xs sm:text-sm md:text-base leading-relaxed max-w-lg'>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <div className='pt-2 sm:pt-4'>
              <Button className='px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm lg:text-base font-medium hover-lift'>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design