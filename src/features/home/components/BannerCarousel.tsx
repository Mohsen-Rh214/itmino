import React, { useState, useEffect, useCallback } from 'react';
import { slides } from '../../../store/slides';

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
  }, [currentIndex, slides.length]);

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
          <div 
            key={index} 
            className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.imageUrl})`}}
            aria-roledescription="slide"
            aria-label={`اسلاید ${index + 1} از ${slides.length}`}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative w-full h-full flex items-center justify-center text-white text-center p-4">
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif-display font-bold">{slide.title}</h2>
                  <p className="mt-2 md:text-lg opacity-90">{slide.subtitle}</p>
                  <a href="#" className="mt-6 inline-block bg-brand text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark transition-colors text-lg">
                    {slide.buttonText}
                  </a>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button onClick={prevSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/30 hover:bg-black/50 text-white cursor-pointer transition-colors z-10" aria-label="اسلاید قبلی">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/30 hover:bg-black/50 text-white cursor-pointer transition-colors z-10" aria-label="اسلاید بعدی">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="absolute bottom-4 right-0 left-0 z-10">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer ${currentIndex === slideIndex ? 'p-2 ring-2 ring-white/50' : 'bg-opacity-50 hover:bg-opacity-75'}`}
              aria-label={`رفتن به اسلاید ${slideIndex + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;