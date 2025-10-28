import React, { useState, useEffect, useCallback } from 'react';
import { heroData } from '../../../store/hero';

// Data for the smaller promotional banners
const promoBanners = [
  {
    title: 'لپ‌تاپ‌های گیمینگ',
    subtitle: 'قدرت و سرعت بی‌نظیر',
    imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto-format&fit=crop',
    link: '#',
  },
  {
    title: 'گوشی‌های هوشمند پرچمدار',
    subtitle: 'تکنولوژی در دستان شما',
    imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbf1?q=80&w=800&auto-format&fit=crop',
    link: '#',
  },
  {
    title: 'لوازم جانبی ضروری',
    subtitle: 'کامل‌کننده تجربه شما',
    imageUrl: 'https://images.unsplash.com/photo-1550009158-94ae795ab202?q=80&w=800&auto-format&fit=crop',
    link: '#',
  },
];


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
    <section className="animate-fadeIn" aria-label="بخش اصلی تبلیغات">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-auto lg:h-[450px]">
        
        {/* Main Slider */}
        <div className="relative rounded-3xl overflow-hidden lg:col-span-3 w-full h-[300px] sm:h-[450px]">
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
                 <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90 drop-shadow-sm">
                      {slide.subtitle}
                    </p>
                    <a
                      href={slide.link}
                      className="mt-8 inline-block bg-accent-volt text-neutral-900 font-bold px-8 py-3.5 rounded-full text-base transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-volt focus:ring-offset-2 focus:ring-offset-neutral-900"
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
        
        {/* Promo Banners */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4">
          {promoBanners.slice(0, 2).map((banner, index) => (
            <a 
              key={index} 
              href={banner.link} 
              className="relative rounded-3xl overflow-hidden group h-48 sm:h-auto lg:h-full flex-1"
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end text-white p-4">
                <h3 className="font-bold text-lg">{banner.title}</h3>
                <p className="text-sm opacity-80">{banner.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;