import React from 'react';

const Header: React.FC = () => {
  const categories = ['لپ‌تاپ', 'موبایل', 'قطعات کامپیوتر', 'لوازم جانبی'];

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Right Side: Logo and Brand Name */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* A simple SVG logo for an IT shop */}
            <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <h1 className="text-2xl font-bold text-slate-800">
              آی تی مینو
              <span className="text-slate-500 font-normal hidden sm:inline"> | ITMINO</span>
            </h1>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-8 rtl:space-x-reverse">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  className="text-gray-700 font-semibold pb-2 border-b-2 border-transparent hover:text-brand hover:border-brand-light transition-all duration-300 ease-in-out"
                  aria-label={`دسته بندی ${category}`}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Left Side: Search, Actions & Mobile Menu */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {/* Search Bar */}
            <div className="hidden md:block relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 rtl:left-auto rtl:right-0 rtl:pr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </span>
                <input
                    type="text"
                    placeholder="جستجو..."
                    className="w-full py-2 pl-10 pr-4 rtl:pr-10 rtl:pl-4 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-brand transition-all duration-300"
                    aria-label="جستجوی محصول"
                />
            </div>
            
            {/* Cart Icon */}
            <button className="p-2 text-gray-600 hover:text-brand transition-colors focus:outline-none" aria-label="سبد خرید">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </button>

            {/* Sign in Button */}
            <a href="#" className="hidden sm:inline-block px-4 py-2 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-dark transition-colors">
              ورود / ثبت نام
            </a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="p-2 text-gray-600 hover:text-brand transition-colors focus:outline-none" aria-label="منوی اصلی">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;