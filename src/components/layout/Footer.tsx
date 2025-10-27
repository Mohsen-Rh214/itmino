import React from 'react';

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="text-[#A88562]">{icon}</div>
        <div>
            <p className="font-semibold text-white">{title}</p>
            <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
    </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2D2D] text-gray-300 mt-auto">
      {/* Services Bar */}
      <div className="bg-black/20">
        <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                title="تحویل اکسپرس"
                subtitle="در کمترین زمان ممکن"
            />
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                title="پشتیبانی ۲۴ ساعته"
                subtitle="حتی در روزهای تعطیل"
            />
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="ضمانت اصل بودن کالا"
                subtitle="تضمین کیفیت و اصالت"
            />
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 12H12V2.252z" /></svg>}
                title="۷ روز ضمانت بازگشت"
                subtitle="بازگشت وجه در صورت عدم رضایت"
            />
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About ITMINO */}
            <div className="lg:col-span-1">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                    <h1 className="text-4xl font-serif-display text-white font-semibold">آی تی مینو</h1>
                </a>
                <p className="text-gray-400 text-sm leading-relaxed">
                    فروشگاه تخصصی آی تی مینو، مرجع کامل خرید آنلاین قطعات کامپیوتر، لپ‌تاپ، موبایل و لوازم جانبی با بهترین قیمت و کیفیت.
                </p>
            </div>

            {/* Links */}
            <div>
                <h3 className="text-2xl font-serif-display text-white mb-4">دسترسی سریع</h3>
                <ul className="space-y-3 text-gray-400">
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">صفحه اصلی</a></li>
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">محصولات</a></li>
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">درباره ما</a></li>
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">تماس با ما</a></li>
                </ul>
            </div>

            {/* Customer Services */}
            <div>
                <h3 className="text-2xl font-serif-display text-white mb-4">خدمات مشتریان</h3>
                <ul className="space-y-3 text-gray-400">
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">راهنمای خرید</a></li>
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">روش‌های ارسال</a></li>
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">سوالات متداول</a></li>
                    <li><a href="#" className="hover:text-[#A88562] transition-colors">قوانین و مقررات</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h3 className="text-2xl font-serif-display text-white mb-4">عضویت در خبرنامه</h3>
                <p className="text-sm text-gray-400 mb-4">از جدیدترین تخفیف‌ها و محصولات باخبر شوید.</p>
                <form action="#">
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder="آدرس ایمیل شما" 
                            className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-r-md focus:outline-none focus:border-[#A88562] focus:ring-1 focus:ring-[#A88562] transition-colors"
                            aria-label="ایمیل برای خبرنامه"
                        />
                        <button type="submit" className="px-4 py-2 bg-[#A88562] text-white font-semibold rounded-l-md hover:bg-[#967558] transition-colors">
                            ثبت
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
      {/* Sub-Footer */}
      <div className="bg-black/30">
        <div className="container mx-auto px-6 py-4 text-center">
            <p className="text-sm text-gray-500">
                © ۱۴۰۴ آی تی مینو. تمامی حقوق برای این فروشگاه محفوظ است.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;