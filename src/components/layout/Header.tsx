import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-xl w-full sticky top-0 z-50 border-b border-neutral-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
        
          {/* Right Side: Logo and Categories */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="w-9 h-9 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h1 className="text-2xl font-extrabold text-neutral-900">
                آی تی مینو
              </h1>
            </a>
             <nav className="hidden lg:flex">
                <ul className="flex items-center">
                  <li>
                    <a href="#" className="text-neutral-600 font-bold text-sm hover:text-primary transition-colors duration-200 p-3 rounded-md flex items-center gap-2">
                        دسته‌بندی‌ها
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>

          {/* Left Side: Search, Actions & Mobile Menu */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {/* Search Bar */}
            <div className="hidden md:block relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 rtl:left-auto rtl:right-0 rtl:pr-3">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </span>
                <input
                    type="text"
                    placeholder="جستجوی محصول..."
                    className="w-full py-2.5 pl-10 pr-4 rtl:pr-10 rtl:pl-4 text-neutral-700 bg-neutral-100 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-primary transition-all duration-300 text-sm"
                    aria-label="جستجوی محصول"
                />
            </div>
              {/* Cart Icon */}
              <button className="p-2 text-neutral-500 hover:text-primary rounded-full hover:bg-neutral-200/60 transition-colors focus:outline-none" aria-label="سبد خرید">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </button>

              {/* Sign in Button */}
              <a href="#" className="hidden sm:inline-block px-5 py-2.5 text-sm font-bold text-white bg-primary rounded-full hover:opacity-90 transition-opacity">
                ورود / ثبت نام
              </a>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button className="p-2 text-neutral-500 rounded-full hover:bg-neutral-200/60 transition-colors focus:outline-none" aria-label="منوی اصلی">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;