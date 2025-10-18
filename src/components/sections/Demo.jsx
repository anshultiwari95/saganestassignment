import React from 'react'
import Button from '../button/Button'

const Demo = () => {
  return (
    <section className='bg-primary py-16 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8'>
          
          {/* Main Heading */}
          <h1 className='text-primary font-semibold text-2xl sm:text-3xl lg:text-[44.55px] leading-tight lg:leading-[52.9px] tracking-[0%] max-w-3xl'>
            Pellentesque suscipit<br/> fringilla libero eu.
          </h1>
          
          {/* CTA Button */}
          <div className='pt-2 sm:pt-4'>
            <Button className='px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-medium hover-lift'>
              Get a Demo 
              <img src="/arrow.svg" alt="next" className='ml-2 w-4 h-4 sm:w-5 sm:h-5' />
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Demo