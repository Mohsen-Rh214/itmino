import React, { useState, useEffect, useCallback } from 'react';
import { heroData } from '../../../store/hero';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="animate-fadeIn w-full" aria-label="بخش اصلی تبلیغات">
      <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] overflow-hidden">
        
        {/* Main Slider */}
        {heroData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
              loading={index === 0 ? 'eager' : 'lazy'} // Eager load the first image
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
               <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90 drop-shadow-sm">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.link}
                    className="mt-8 inline-block bg-accent-volt text-neutral-900 font-bold px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-volt focus:ring-offset-2 focus:ring-offset-neutral-900"
                  >
                    اکنون خرید کنید
                  </a>
                </div>
            </div>
          </div>
        ))}

        {/* Slider Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2 rtl:space-x-reverse">
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`اسلاید ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;