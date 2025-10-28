import React from 'react';

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
    <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="text-primary">{icon}</div>
        <div>
            <p className="font-bold text-white text-base">{title}</p>
            <p className="text-sm text-neutral-400">{subtitle}</p>
        </div>
    </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-neutral-700">
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
                subtitle="بازگشت وجه سریع"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
            {/* About ITMINO */}
            <div className="lg:col-span-1">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                     <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h1 className="text-xl font-extrabold text-white">آی تی مینو</h1>
                </a>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    فروشگاه تخصصی آی تی مینو، مرجع کامل خرید آنلاین قطعات کامپیوتر، لپ‌تاپ، موبایل و لوازم جانبی با بهترین قیمت و کیفیت.
                </p>
            </div>

            {/* Useful Links */}
            <div>
                <h3 className="text-lg font-bold text-accent mb-4">دسترسی سریع</h3>
                <ul className="space-y-3 text-neutral-400">
                    <li><a href="#" className="hover:text-white transition-colors">صفحه اصلی</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">محصولات</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
                </ul>
            </div>

            {/* Customer Services */}
            <div>
                <h3 className="text-lg font-bold text-accent mb-4">خدمات مشتریان</h3>
                <ul className="space-y-3 text-neutral-400">
                    <li><a href="#" className="hover:text-white transition-colors">راهنمای خرید</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">روش‌های ارسال</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">حریم خصوصی</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h3 className="text-lg font-bold text-accent mb-4">عضویت در خبرنامه</h3>
                <p className="text-sm text-neutral-400 mb-4">از جدیدترین تخفیف‌ها و محصولات باخبر شوید.</p>
                <form action="#">
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder="ایمیل شما" 
                            className="w-full px-4 py-2 text-neutral-800 bg-neutral-100 rounded-r-lg focus:outline-none focus:bg-white"
                            aria-label="ایمیل برای خبرنامه"
                        />
                        <button type="submit" className="px-4 py-2 bg-primary text-white font-semibold rounded-l-lg hover:opacity-90 transition-opacity">
                            ثبت
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
      {/* Sub-Footer */}
      <div className="bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
            <p className="text-sm text-neutral-500">
                © ۱۴۰۴ آی تی مینو. تمامی حقوق برای این فروشگاه محفوظ است.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;