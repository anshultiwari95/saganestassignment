import React from 'react'
import Button from '../button/Button.jsx'

export const Headers = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="mr-2 w-6 h-6 sm:w-8 sm:h-8" 
            />
            <img 
              src="/nexcent.svg" 
              alt="Nexcent" 
              className="mr-2 w-16 h-3 sm:w-[77.61px] sm:h-[14.38px] opacity-100" 
            />
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <span className="font-inter font-medium text-xs sm:text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Home
            </span>
            <span className="font-inter font-medium text-xs sm:text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Features
            </span>
            <span className="font-inter font-medium text-xs sm:text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Community
            </span>
            <span className="font-inter font-medium text-xs sm:text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Blog
            </span>
            <span className="font-inter font-medium text-xs sm:text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Pricing
            </span>  
            <Button icon={<img src="/arrow.svg" alt="Register" className="w-3 h-3 sm:w-4 sm:h-4" />} iconPosition="right" className="text-xs sm:text-sm px-3 py-2 sm:px-6 sm:py-3">
              Register Now
            </Button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 rounded-md transition-all duration-150">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Headers