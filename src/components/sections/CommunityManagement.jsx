import React from 'react'

const CommunityManagement = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 sm:mb-12">
          <h2 className="font-inter font-semibold text-lg sm:text-xl md:text-2xl lg:text-[25.06px] lg:leading-[30.63px] lg:tracking-[0%] text-center text-gray-900 mb-3 sm:mb-4">
            Manage your entire community in a single system
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Who is Nextcent suitable for?
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <article className="bg-white border border-gray-100 rounded-xl p-8 sm:p-10 lg:p-12 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <figure className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <img src="/membership.svg" alt="Membership Organisations" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </figure>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Membership Organisations
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </article>
          <article className="bg-white border border-gray-100 rounded-xl p-8 sm:p-10 lg:p-12 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <figure className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <img src="/associates.svg" alt="National Associations" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </figure>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              National Associations
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </article>
          <article className="bg-white border border-gray-100 rounded-xl p-8 sm:p-10 lg:p-12 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
            <figure className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <img src="/club.svg" alt="Clubs And Groups" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </figure>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Clubs And Groups
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default CommunityManagement
