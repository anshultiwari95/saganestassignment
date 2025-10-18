import React from 'react'

const Client = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        
        {/* Client Logos Grid */}
        <div className="flex flex-wrap justify-around items-center gap-12">
          {/* Client Logo Placeholders */}
          <div className="h-[34px] rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium"><img src="/client1.svg" alt="Client 1" /></span>
          </div>
          <div className="h-[34px] rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium"><img src="/client2.svg" alt="Client 2" /></span>
          </div>
          <div className="h-[34px] rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium"><img src="/client3.svg" alt="Client 3" /></span>
          </div>
          <div className="h-[34px] rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium"><img src="/client4.svg" alt="Client 4" /></span>
          </div>
          <div className="h-[34px] rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium"><img src="/client5.svg" alt="Client 5" /></span>
          </div>
          <div className="h-[34px] rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium"><img src="/client6.svg" alt="Client 6" /></span>
          </div>
          <div className="h-[34px] rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium"><img src="/client7.svg" alt="Client 6" /></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
