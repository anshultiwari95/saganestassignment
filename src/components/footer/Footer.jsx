import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary-gray text-white py-16 px-8 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col space-y-6 lg:w-1/3">
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" className="w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold">Nexcent</h2>
          </div>

          <div className="text-gray-400 text-sm leading-relaxed">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>

          <div className="flex space-x-4">
            {["instagram", "web", "twitter", "youtube"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-200"
              >
                <img src={`/${icon}.svg`} alt={icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:w-2/3">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {["About us", "Blog", "Contact us", "Pricing", "Testimonials"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-150 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help center", "Terms of service", "Legal", "Privacy policy", "Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-150 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay up to date</h3>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-[#4A4D52] text-gray-100 placeholder-gray-400 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:scale-105 transition-transform"
              >
                <img src="/send.svg" alt="send" className="w-5 h-5 opacity-80 hover:opacity-100" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;