import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    color: 'bg-blue-500',
    title: 'جدیدترین لپ‌تاپ‌ها رسید',
    subtitle: 'قدرت و زیبایی را در کنار هم تجربه کنید',
    buttonText: 'مشاهده محصولات',
  },
  {
    color: 'bg-slate-700',
    title: 'تخفیف ویژه لوازم جانبی',
    subtitle: 'تا ۳۰٪ تخفیف برای مدت محدود',
    buttonText: 'خرید کنید',
  },
  {
    color: 'bg-emerald-500',
    title: 'گوشی‌های هوشمند پرچمدار',
    subtitle: 'تکنولوژی فردا، امروز در دستان شما',
    buttonText: 'بررسی مدل‌ها',
  },
];

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="h-64 md:h-96 rounded-lg overflow-hidden relative group shadow-lg mb-8" aria-label="اسلایدر بنرهای تبلیغاتی">
      <div
        style={{ transform: `translateX(${currentIndex * 100}%)` }}
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
      >
        {slides.map((slide, index) => (
          <div key={index} className={`w-full h-full flex-shrink-0 ${slide.color} flex items-center justify-center text-white text-center p-4`}>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 md:text-lg">{slide.subtitle}</p>
              <a href="#" className="mt-4 inline-block bg-white text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button onClick={prevSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" aria-label="اسلاید قبلی">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" aria-label="اسلاید بعدی">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer ${currentIndex === slideIndex ? 'p-2' : 'bg-opacity-50'}`}
              aria-label={`رفتن به اسلاید ${slideIndex + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;