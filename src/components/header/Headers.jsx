"use client"
import React, { useState } from 'react'
import Button from '../button/Button.jsx'

export const Headers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center gap-[5.57px]">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 opacity-100" 
            />
            <img 
              src="/nexcent.svg" 
              alt="Nexcent" 
              className="w-16 h-3 sm:w-[77.61px] sm:h-[14.38px] lg:w-[107.536px] lg:h-[16.706px] opacity-100" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
            <a href="#" className="font-inter font-medium text-sm md:text-base lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-left md:text-center lg:text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Home
            </a>
            <a href="#" className="font-inter font-medium text-sm md:text-base lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-left md:text-center lg:text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Features
            </a>
            <a href="#" className="font-inter font-medium text-sm md:text-base lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-left md:text-center lg:text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Community
            </a>
            <a href="#" className="font-inter font-medium text-sm md:text-base lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-left md:text-center lg:text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Blog
            </a>
            <a href="#" className="font-inter font-medium text-sm md:text-base lg:text-[11.14px] lg:leading-[16.71px] lg:tracking-[0%] text-left md:text-center lg:text-center text-[#4D4D4D] hover:text-primary-green hover:scale-105 cursor-pointer transition-all duration-200 px-2 py-1 rounded-md hover:bg-green-50">
              Pricing
            </a>  
            <Button icon={<img src="/arrow.svg" alt="Register" className="w-3 h-3 sm:w-4 sm:h-4" />} iconPosition="right" className="text-xs sm:text-sm px-3 py-2 sm:px-6 sm:py-3">
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 rounded-md transition-all duration-150" 
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-sm font-inter font-medium text-left text-[#4D4D4D] hover:text-primary-green hover:bg-green-50 rounded-md transition-all duration-200"
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-sm font-inter font-medium text-left text-[#4D4D4D] hover:text-primary-green hover:bg-green-50 rounded-md transition-all duration-200"
              >
                Features
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-sm font-inter font-medium text-left text-[#4D4D4D] hover:text-primary-green hover:bg-green-50 rounded-md transition-all duration-200"
              >
                Community
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-sm font-inter font-medium text-left text-[#4D4D4D] hover:text-primary-green hover:bg-green-50 rounded-md transition-all duration-200"
              >
                Blog
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-sm font-inter font-medium text-left text-[#4D4D4D] hover:text-primary-green hover:bg-green-50 rounded-md transition-all duration-200"
              >
                Pricing
              </a>
              <div className="pt-2">
                <Button 
                  icon={<img src="/arrow.svg" alt="Register" className="w-4 h-4" />} 
                  iconPosition="right" 
                  className="w-full text-sm px-4 py-3"
                  onClick={closeMobileMenu}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Headers