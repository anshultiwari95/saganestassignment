import React from 'react'

const Caring = () => {
  return (
    <section className='bg-primary py-16 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h2 className='text-secondary font-semibold text-xl sm:text-2xl lg:text-[25.06px] leading-tight lg:leading-[30.63px] tracking-[0%] mb-4'>
            Caring is the new marketing
          </h2>
          <p className='text-tertiary font-normal text-xs sm:text-sm lg:text-[11.14px] leading-tight lg:leading-[16.71px] tracking-[0%] max-w-2xl mx-auto'>
            The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          
          {/* Card 1 */}
          <div className='relative rounded-lg overflow-hidden shadow-md hover-lift cursor-pointer'>
            <img src="/laptop1.svg" alt="Creating Streamlined Safeguarding Processes" className='w-full h-48 sm:h-56 lg:h-64 object-cover' />
            <div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 sm:p-6'>
              <h3 className='text-primary font-medium text-sm sm:text-base mb-3 leading-tight text-left'>
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <a href="#" className='text-green font-medium text-xs sm:text-sm hover-color transition-all duration-150 cursor-pointer'>
                Readmore →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className='relative rounded-lg overflow-hidden shadow-md hover-lift cursor-pointer'>
            <img src="/laptop2.svg" alt="Safeguarding Responsibilities" className='w-full h-48 sm:h-56 lg:h-64 object-cover' />
            <div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 sm:p-6'>
              <h3 className='text-primary font-medium text-sm sm:text-base mb-3 leading-tight text-left'>
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <a href="#" className='text-green font-medium text-xs sm:text-sm hover-color transition-all duration-150 cursor-pointer'>
                Readmore →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className='relative rounded-lg overflow-hidden shadow-md hover-lift cursor-pointer'>
            <img src="/laptop3.svg" alt="Revamping Membership Model" className='w-full h-48 sm:h-56 lg:h-64 object-cover' />
            <div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 sm:p-6'>
              <h3 className='text-primary font-medium text-sm sm:text-base mb-3 leading-tight text-left'>
                Revamping the Membership Model with Triathlon Australia
              </h3>
              <a href="#" className='text-green font-medium text-xs sm:text-sm hover-color transition-all duration-150 cursor-pointer'>
                Readmore →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Caring