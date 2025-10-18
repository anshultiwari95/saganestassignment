import React from 'react'
import Button from '../button/Button'

const Demo = () => {
  return (
    <section className='bg-primary py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 lg:space-y-8'>
          <h1 className='text-primary font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[44.55px] leading-tight lg:leading-[52.9px] tracking-[0%] max-w-3xl'>
            Pellentesque suscipit<br/> fringilla libero eu.
          </h1>
          <div className='pt-2 sm:pt-4'>
            <Button className='px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm md:text-lg font-medium hover-lift'>
              Get a Demo 
              <img src="/arrow.svg" alt="next" className='ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo