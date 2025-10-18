import React from 'react';
import Button from '../button/Button';

const Demo = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 bg-light">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="font-semibold text-center max-w-3xl text-secondary-gray" style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontSize: 'var(--font-size-3xl)',
            lineHeight: 'var(--line-height-xl)',
            letterSpacing: '0%',
          }}>
            Pellentesque suscipit<br/> fringilla libero eu.
          </h1>
          <div className="pt-2 sm:pt-4">
            <Button className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-xs sm:text-sm md:text-lg font-medium hover-lift">
              Get a Demo 
              <img src="/arrow.svg" alt="next" className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Demo;