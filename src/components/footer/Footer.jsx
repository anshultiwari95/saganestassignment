import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-secondary-gray py-16 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          
          {/* Column 1: Brand Section */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <div className='flex items-center mb-6'>
              <img src="/logo.svg" alt="logo" className='mr-2 w-8 h-8 bg-white p-1 rounded' />
              <span className='text-white font-semibold text-3xl sm:text-4xl lg:text-[44.55px] leading-tight lg:leading-[52.9px] tracking-[0%]'>
                Nexcent
              </span>
            </div>
            
            <div className='mb-6'>
              <p className='text-gray-300 text-sm mb-1'>Copyright © 2020 Landify UI Kit.</p>
              <p className='text-gray-300 text-sm'>All rights reserved</p>
            </div>

            <div className='flex space-x-4'>
              <a href="#" className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/instagram.svg" alt="instagram" className='w-4 h-4' />
              </a>
              <a href="#" className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/web.svg" alt="web" className='w-4 h-4' />
              </a>
              <a href="#" className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/twitter.svg" alt="twitter" className='w-4 h-4' />
              </a>
              <a href="#" className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary-green hover-scale transition-all duration-150 cursor-pointer'>
                <img src="/youtube.svg" alt="youtube" className='w-4 h-4' />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Company</h3>
            <ul className='space-y-3'>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>About us</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Blog</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Contact us</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Pricing</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Support</h3>
            <ul className='space-y-3'>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Help center</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Terms of service</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Legal</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Privacy policy</a></li>
              <li><a href="#" className='text-gray-300 hover:text-white hover-color transition-all duration-150 cursor-pointer'>Status</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <h3 className='text-white font-semibold text-lg mb-6'>Stay up to date</h3>
            <div className='flex'>
              <input 
                type="email" 
                placeholder="Your email address" 
                className='flex-1 px-4 py-3 bg-gray-600 text-white placeholder-gray-400 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all duration-150'
              />
              <button className='px-4 py-3 bg-gray-600 hover:bg-primary-green hover-scale transition-all duration-150 rounded-r-lg cursor-pointer'>
                <img src="/send.svg" alt="send" className='w-5 h-5' />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer