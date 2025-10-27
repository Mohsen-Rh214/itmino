import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1555774698-231a4736f004?q=80&w=2070&auto=format&fit=crop',
    title: 'مجموعه جدید لپ‌تاپ‌های حرفه‌ای',
    subtitle: 'قدرت، ظرافت و کارایی در یکجا',
    buttonText: 'مشاهده کلکسیون',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1542491170-1b7a42167a4d?q=80&w=1925&auto=format&fit=crop',
    title: 'تخفیف‌های انحصاری لوازم جانبی',
    subtitle: 'فضای کاری خود را ارتقا دهید',
    buttonText: 'خرید اکسسوری',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=2070&auto=format&fit=crop',
    title: 'پیشگام در تکنولوژی موبایل',
    subtitle: 'نوآوری‌هایی که الهام‌بخش هستند',
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
    <section className="h-[30rem] md:h-[36rem] rounded-lg overflow-hidden relative group shadow-lg mb-12" aria-label="اسلایدر بنرهای تبلیغاتی">
       <div className="w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-serif-display font-semibold">{slide.title}</h2>
                <p className="mt-4 md:text-xl opacity-80">{slide.subtitle}</p>
                <a href="#" className="mt-8 inline-block bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Left Arrow */}
      <button onClick={prevSlide} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" aria-label="اسلاید قبلی">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" aria-label="اسلاید بعدی">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="absolute bottom-5 right-0 left-0">
        <div className="flex items-center justify-center gap-3">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`transition-all w-2.5 h-2.5 bg-white rounded-full cursor-pointer ${currentIndex === slideIndex ? 'scale-150 ring-2 ring-white/50' : 'bg-opacity-50'}`}
              aria-label={`رفتن به اسلاید ${slideIndex + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;