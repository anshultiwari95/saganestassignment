export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            About Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-tertiary max-w-3xl mx-auto">
            We are passionate developers creating exceptional digital experiences 
            that drive business growth and user engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center hover-lift cursor-pointer">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Fast Development</h3>
            <p className="text-tertiary text-sm sm:text-base">
              Rapid prototyping and development using modern frameworks and tools.
            </p>
          </div>

          <div className="text-center hover-lift cursor-pointer">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Quality Assurance</h3>
            <p className="text-tertiary text-sm sm:text-base">
              Rigorous testing and quality control to ensure flawless user experiences.
            </p>
          </div>

          <div className="text-center hover-lift cursor-pointer">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">User Focused</h3>
            <p className="text-tertiary text-sm sm:text-base">
              Every decision is made with the end user's experience in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
