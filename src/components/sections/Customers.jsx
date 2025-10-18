import React from 'react';

const Customers = () => {
  return (
    <section className="bg-light py-16 px-8 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <figure className="flex-shrink-0">
          <img
            src="/tesla.svg"
            alt="Tesla"
            className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] rounded-xl hover-scale transition-transform duration-300"
          />
        </figure>

        <div className="flex flex-col justify-between lg:max-w-[700px]">
          <blockquote className="space-y-4">
            <p className="text-tertiary text-sm sm:text-base leading-relaxed">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
              tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
              mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
              eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
              placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
              Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <footer>
              <h4 className="text-green font-semibold text-base">Tim Smith</h4>
              <p className="text-muted text-sm">
                British Dragon Boat Racing Association
              </p>
            </footer>
          </blockquote>

          <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
            <div className="flex items-center gap-5 flex-wrap">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <img 
                  key={num}
                  src={`/client${num}.svg`} 
                  alt={`Client ${num}`} 
                  className="h-6 w-auto hover:opacity-80 transition" 
                />
              ))}
            </div>

            <a
              href="#"
              className="text-green font-medium text-sm hover-color transition flex items-center gap-1"
            >
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;