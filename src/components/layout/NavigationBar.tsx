import React from 'react';

interface NavigationBarProps {
  isMegaMenuOpen: boolean;
  onCategoriesHover: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isMegaMenuOpen, onCategoriesHover }) => {
  return (
    <div className="bg-white border-b border-neutral-200 shadow-sm relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden lg:flex items-center h-12">
          <ul className="flex items-center gap-6">
            <li onMouseEnter={onCategoriesHover}>
              <a 
                href="#" 
                className="text-neutral-600 font-semibold text-base hover:text-primary transition-all duration-200 py-3 inline-flex items-center gap-1.5"
                aria-haspopup="true"
                aria-expanded={isMegaMenuOpen}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  دسته‌بندی‌ها
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 font-semibold text-base hover:text-primary transition-colors duration-200 py-3">
                تخفیف‌ها و پیشنهادها
              </a>
            </li>
              <li>
              <a href="#" className="text-neutral-600 font-semibold text-base hover:text-primary transition-colors duration-200 py-3">
                بلاگ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;