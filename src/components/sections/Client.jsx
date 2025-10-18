import React from 'react'

const Client = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Clients
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 lg:gap-12 items-center justify-items-center">
          <div className="h-6 sm:h-8 md:h-[34px] flex items-center justify-center">
            <img src="/client1.svg" alt="Client 1" className="w-full h-full object-contain" />
          </div>
          <div className="h-6 sm:h-8 md:h-[34px] flex items-center justify-center">
            <img src="/client2.svg" alt="Client 2" className="w-full h-full object-contain" />
          </div>
          <div className="h-6 sm:h-8 md:h-[34px] flex items-center justify-center">
            <img src="/client3.svg" alt="Client 3" className="w-full h-full object-contain" />
          </div>
          <div className="h-6 sm:h-8 md:h-[34px] flex items-center justify-center">
            <img src="/client4.svg" alt="Client 4" className="w-full h-full object-contain" />
          </div>
          <div className="h-6 sm:h-8 md:h-[34px] flex items-center justify-center">
            <img src="/client5.svg" alt="Client 5" className="w-full h-full object-contain" />
          </div>
          <div className="h-6 sm:h-8 md:h-[34px] flex items-center justify-center">
            <img src="/client6.svg" alt="Client 6" className="w-full h-full object-contain" />
          </div>
          <div className="h-6 sm:h-8 md:h-[34px] flex items-center justify-center">
            <img src="/client7.svg" alt="Client 7" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
