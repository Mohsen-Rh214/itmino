import React from 'react';

const MainHeader: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-neutral-200/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4">
          {/* Right Side: Logo & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <div className="lg:hidden">
              <button className="p-2.5 text-neutral-500 rounded-full hover:bg-neutral-100 transition-colors focus:outline-none" aria-label="منوی اصلی">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="w-8 h-8 sm:w-9 sm:h-9 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 hidden sm:block">
                آی تی مینو
              </h1>
            </a>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 hidden md:flex justify-center px-4">
            <form className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="جستجوی محصول مورد نظر شما..."
                className="w-full py-3 pr-5 pl-12 text-neutral-700 bg-neutral-100/80 placeholder:text-neutral-500 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                aria-label="جستجوی محصول"
              />
              <button type="submit" className="absolute top-0 left-0 h-full px-4 text-neutral-500 hover:text-primary transition-colors rounded-full" aria-label="جستجو">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </form>
          </div>

          {/* Left Side: Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
              {/* Mobile Search Icon */}
              <button className="p-2.5 text-neutral-500 hover:text-primary rounded-full hover:bg-neutral-100 transition-all focus:outline-none md:hidden" aria-label="جستجو">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              
              {/* Cart Icon */}
              <button className="p-2.5 text-neutral-500 hover:text-primary rounded-full hover:bg-neutral-100 transition-all focus:outline-none hover:scale-110 active:scale-100" aria-label="سبد خرید">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </button>

              {/* Divider */}
              <div className="w-px h-6 bg-neutral-200/80 hidden sm:block mx-1"></div>

              {/* Sign in Button */}
              <a href="#" className="hidden sm:flex items-center gap-2 text-neutral-600 hover:text-primary font-semibold text-sm transition-colors rounded-full p-2.5 hover:bg-neutral-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="hidden lg:inline">ورود / ثبت نام</span>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;