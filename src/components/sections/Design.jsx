import React from 'react'
import Button from '../button/Button'

const Design = () => {
  return (
    <section className='bg-primary py-12 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-16'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center'>
          <figure className='flex justify-center lg:justify-start'>
            <img src="/design.svg" alt="Design illustration" className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[307.34px] lg:h-[301.68px] opacity-100 hover-scale cursor-pointer' />
          </figure>
          <article className='space-y-2 sm:space-y-3 lg:space-y-4'>
            <h2 className='font-inter font-semibold text-lg sm:text-xl md:text-2xl lg:text-[25.06px] lg:leading-[30.63px] lg:tracking-[0%] text-[#4D4D4D] text-left'>
              How to design your site footer like <br/>we did
            </h2>
            <p className='font-inter font-normal text-xs sm:text-sm md:text-base lg:text-[9.74px] lg:leading-[13.92px] lg:tracking-[0%] text-[#717171] leading-relaxed max-w-lg'>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br/> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br/> libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br/> nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer <br/>in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br/> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <div className='pt-2 sm:pt-4'>
              <Button className='px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm lg:text-base font-medium hover-lift rounded-sm'>
                Learn More
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Design