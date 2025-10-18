import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-secondary-gray text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12'>
          <div className='sm:col-span-2 lg:col-span-1'>
            <div className='flex items-center mb-4 sm:mb-6'>
              <img src="/logo.svg" alt="logo" className='mr-2 w-6 h-6 sm:w-8 sm:h-8 bg-white p-1 rounded' />
              <span className='text-white font-semibold text-2xl sm:text-3xl lg:text-[44.55px] leading-tight lg:leading-[52.9px] tracking-[0%]'>
                Nexcent
              </span>
            </div>
            <div className='mb-4 sm:mb-6'>
              <p className='text-gray-300 text-xs sm:text-sm mb-1'>Copyright © 2020 Landify UI Kit.</p>
              <p className='text-gray-300 text-xs sm:text-sm'>All rights reserved</p>
            </div>
            <div className='flex space-x-3 sm:space-x-4'>
              <a href="#" className='w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/instagram.svg" alt="instagram" className='w-3 h-3 sm:w-4 sm:h-4' />
              </a>
              <a href="#" className='w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/web.svg" alt="web" className='w-3 h-3 sm:w-4 sm:h-4' />
              </a>
              <a href="#" className='w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/twitter.svg" alt="twitter" className='w-3 h-3 sm:w-4 sm:h-4' />
              </a>
              <a href="#" className='w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/youtube.svg" alt="youtube" className='w-3 h-3 sm:w-4 sm:h-4' />
              </a>
            </div>
          </div>
          <div>
            <h3 className='text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6'>Company</h3>
            <ul className='space-y-2 sm:space-y-3'>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>About us</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Blog</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Contact us</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Pricing</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6'>Support</h3>
            <ul className='space-y-2 sm:space-y-3'>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Help center</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Terms of service</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Legal</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Privacy policy</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer text-sm sm:text-base'>Status</a></li>
            </ul>
          </div>
          <div className='sm:col-span-2 lg:col-span-1'>
            <h3 className='text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6'>Stay up to date</h3>
            <div className='flex'>
              <input 
                type="email" 
                placeholder="Your email address" 
                className='flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-gray-600 text-white placeholder-gray-400 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all duration-150 text-xs sm:text-sm'
              />
              <button className='px-3 py-2 sm:px-4 sm:py-3 bg-gray-600 hover:bg-primary-green hover-scale transition-all duration-150 rounded-r-lg cursor-pointer'>
                <img src="/send.svg" alt="send" className='w-4 h-4 sm:w-5 sm:h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer