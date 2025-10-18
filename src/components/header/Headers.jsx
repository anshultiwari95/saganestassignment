import React from 'react'
import Button from '../button/Button.jsx'

export const Headers = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="mr-2" 
            />
            <img 
              src="/nexcent.svg" 
              alt="Nexcent" 
              className="mr-2 w-[77.61px] h-[14.38px] opacity-100" 
            />
          </div>
          <div className="flex items-center space-x-8">
            <span className="font-inter font-medium text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-gray-900 cursor-pointer transition-colors">
              Home
            </span>
            <span className="font-inter font-medium text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-gray-900 cursor-pointer transition-colors">
              Features
            </span>
            <span className="font-inter font-medium text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-gray-900 cursor-pointer transition-colors">
              Community
            </span>
            <span className="font-inter font-medium text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-gray-900 cursor-pointer transition-colors">
              Blog
            </span>
            <span className="font-inter font-medium text-[11.14px] leading-[16.71px] tracking-[0%] text-center text-[#4D4D4D] hover:text-gray-900 cursor-pointer transition-colors">
              Pricing
            </span>  
            <Button icon={<img src="/arrow.svg" alt="Register" className="w-4 h-4" />} iconPosition="right">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Headers