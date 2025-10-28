import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
            {/* About ITMINO */}
            <div className="lg:col-span-2">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                     <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h1 className="text-xl font-extrabold text-white">آی تی مینو</h1>
                </a>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                    فروشگاه تخصصی آی تی مینو، مرجع کامل خرید آنلاین قطعات کامپیوتر، لپ‌تاپ، موبایل و لوازم جانبی با بهترین قیمت و کیفیت.
                </p>
            </div>

            {/* Useful Links */}
            <div>
                <h3 className="text-lg font-bold text-white mb-5">دسترسی سریع</h3>
                <ul className="space-y-4 text-neutral-400">
                    <li><a href="#" className="hover:text-primary transition-colors">صفحه اصلی</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">محصولات</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">درباره ما</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">تماس با ما</a></li>
                </ul>
            </div>

            {/* Customer Services */}
            <div>
                <h3 className="text-lg font-bold text-white mb-5">خدمات مشتریان</h3>
                <ul className="space-y-4 text-neutral-400">
                    <li><a href="#" className="hover:text-primary transition-colors">راهنمای خرید</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">روش‌های ارسال</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">حریم خصوصی</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-5">عضویت در خبرنامه</h3>
                <p className="text-sm text-neutral-400 mb-4">از جدیدترین تخفیف‌ها و محصولات باخبر شوید.</p>
                <form action="#">
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="ایمیل شما" 
                            className="w-full px-4 py-3 text-neutral-800 bg-neutral-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/40 transition-colors text-sm"
                            aria-label="ایمیل برای خبرنامه"
                        />
                        <button type="submit" className="absolute top-1/2 -translate-y-1/2 left-1.5 rtl:left-auto rtl:right-1.5 px-4 py-2 bg-accent-volt text-neutral-900 font-bold rounded-full transition-transform transform hover:scale-105 active:scale-95 text-sm">
                            ثبت
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
      {/* Sub-Footer */}
      <div className="bg-neutral-900 border-t border-neutral-800/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
            <p className="text-sm text-neutral-500">
                © ۱۴۰۴ آی تی مینو. تمامی حقوق برای این فروشگاه محفوظ است.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;