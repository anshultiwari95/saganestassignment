import React from 'react'
import Button from '../button/Button'

const Design = () => {
  return (
    <section className='bg-primary py-16 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left Section - Illustration */}
          <div className='flex justify-center lg:justify-start'>
            <img src="/design.svg" alt="Design illustration" className='w-[250px] h-[250px] sm:w-[307.34px] sm:h-[301.68px] opacity-100 hover-scale cursor-pointer' />
          </div>
          
          {/* Right Section - Content */}
          <div className='space-y-6 sm:space-y-8'>
            <h2 className='text-primary font-semibold text-xl sm:text-2xl lg:text-[25.06px] leading-tight lg:leading-[30.63px] tracking-[0%] text-left'>
              How to design your site footer like we did
            </h2>
            
            <p className='text-tertiary text-sm sm:text-base leading-relaxed max-w-lg'>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            
            <div className='pt-2 sm:pt-4'>
              <Button className='px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover-lift'>
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