import React from 'react';

const points = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        title: "تحویل اکسپرس",
        subtitle: "در کمترین زمان ممکن"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
        title: "پشتیبانی ۲۴ ساعته",
        subtitle: "حتی در روزهای تعطیل"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "ضمانت اصل بودن کالا",
        subtitle: "تضمین کیفیت و اصالت"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 12H12V2.252z" /></svg>,
        title: "۷ روز ضمانت بازگشت",
        subtitle: "بازگشت وجه سریع و آسان"
    }
];

const KeySellingPoints: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6" aria-label="ویژگی‌های کلیدی فروشگاه">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
        {points.map((point, index) => (
          <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="text-brand flex-shrink-0">
              {point.icon}
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base text-gray-800">{point.title}</p>
              <p className="text-xs md:text-sm text-gray-500">{point.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeySellingPoints;