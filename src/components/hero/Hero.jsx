import React from 'react'
import Button from '../button/Button.jsx'

const Hero = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Content Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
            <h1 className="mb-6">
              <span className="text-primary font-semibold text-2xl sm:text-3xl lg:text-[44.55px] leading-tight lg:leading-[52.9px] tracking-[0%]">Lessons and insights</span><br/>
              <span className="text-green font-semibold text-2xl sm:text-3xl lg:text-[44.55px] leading-tight lg:leading-[52.9px] tracking-[0%]">from 8 years</span>
            </h1>
            <p className="text-tertiary font-normal text-xs sm:text-sm lg:text-[11.14px] leading-tight lg:leading-[16.71px] tracking-[0%] mb-8 max-w-2xl">
              Where to grow your business as a photographer: site or social media?
            </p>
            <Button className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover-lift">
              Register Now
            </Button>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center justify-center flex-1">
            <img 
              src="/hero1.svg" 
              alt="Hero Illustration" 
              className="w-[200px] h-[200px] sm:w-[272.16px] sm:h-[283.30px] opacity-100 hover-scale cursor-pointer"
            />
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-green rounded-full hover-scale cursor-pointer"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full hover-scale cursor-pointer"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full hover-scale cursor-pointer"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
