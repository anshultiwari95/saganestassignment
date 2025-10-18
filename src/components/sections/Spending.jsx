import React from 'react'
import Button from '../button/Button.jsx'

const Spending = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex flex-col items-center justify-center flex-1 order-2 lg:order-1">
            <img 
              src="/spending.svg" 
              alt="Spending Illustration" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              The unseen of spending three years<br/>
              at Pixelgrade
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <Button className="w-auto px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spending