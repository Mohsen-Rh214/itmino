import React from 'react';

const HeaderTopBar: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white text-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
        {/* Promo Message */}
        <div>
          <span>ارسال رایگان برای سفارشات بالای ۵۰۰ هزار تومان</span>
        </div>
        
        {/* Utility Links */}
        <div className="hidden sm:flex items-center space-x-4 rtl:space-x-reverse">
          <a href="#" className="hover:text-primary transition-colors">پشتیبانی</a>
          <a href="#" className="hover:text-primary transition-colors">فروشگاه‌ها</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;