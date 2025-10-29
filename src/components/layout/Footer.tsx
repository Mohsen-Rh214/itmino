import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a href={href} aria-label={label} className="text-neutral-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 py-12 sm:py-16">
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
                <div className="mt-6">
                    <h4 className="text-md font-bold text-white mb-3">ما را دنبال کنید</h4>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <SocialIcon href="#" label="اینستاگرام">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
                        </SocialIcon>
                        <SocialIcon href="#" label="تلگرام">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.222 8.337c-.31.139-.642.23-.984.271.358-.215.633-.556.762-.95.326.193.684.333 1.059.406-.308-.328-.729-.533-1.192-.533-1.18 0-2.137.957-2.137 2.137 0 .168.018.332.055.489-1.776-.089-3.351-.939-4.404-2.232-.184.316-.289.684-.289 1.074 0 .74.377 1.392.95 1.774-.351-.011-.68-.108-.969-.267v.027c0 1.034.734 1.897 1.707 2.093-.178.048-.366.074-.559.074-.137 0-.27-.013-.402-.038.272.848 1.06 1.466 1.994 1.482-.729.571-1.647.912-2.646.912-.172 0-.342-.01-.51-.03 1.042.668 2.279 1.057 3.606 1.057 4.327 0 6.695-3.585 6.695-6.695 0-.102-.002-.203-.007-.304.46-.332.859-.747 1.174-1.217z"/></svg>
                        </SocialIcon>
                         <SocialIcon href="#" label="لینکدین">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-2v-2.834c0-.671-.012-1.532-.932-1.532s-1.076.73-1.076 1.484v2.882h-2v-6h2v.911c.277-.524.956-1.078 1.89-1.078 2.022 0 2.396 1.33 2.396 3.059v3.108z"/></svg>
                        </SocialIcon>
                    </div>
                </div>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500 text-center sm:text-right">
                © ۱۴۰۴ آی تی مینو. تمامی حقوق برای این فروشگاه محفوظ است.
            </p>
            <div className="flex items-center gap-4">
                <img src="https://www.digikala.com/statics/img/png/rezi.png" alt="Trust Seal 1" className="h-12 w-auto" />
                <img src="https://www.digikala.com/statics/img/png/kasbokar.png" alt="Trust Seal 2" className="h-12 w-auto" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;