import React from 'react';

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; subtitle: string }> = ({ icon, title, subtitle }) => (
    <a href="#" className="flex items-center space-x-4 rtl:space-x-reverse group p-2 sm:p-4 rounded-2xl transition-colors duration-300 hover:bg-neutral-100/60">
        <div className="text-primary text-2xl transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <div>
            <p className="font-bold text-neutral-800 text-sm">{title}</p>
            <p className="text-xs text-neutral-500">{subtitle}</p>
        </div>
    </a>
);

const ServicesBar: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn" aria-label="Our Services">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 py-6 border-y border-neutral-200/80">
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                title="تحویل اکسپرس"
                subtitle="در کمترین زمان ممکن"
            />
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                title="پشتیبانی ۲۴ ساعته"
                subtitle="حتی در روزهای تعطیل"
            />
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="ضمانت اصل بودن کالا"
                subtitle="تضمین کیفیت و اصالت"
            />
            <ServiceItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 12H12V2.252z" /></svg>}
                title="۷ روز ضمانت بازگشت"
                subtitle="بازگشت وجه سریع"
            />
        </div>
    </section>
  );
};

export default ServicesBar;