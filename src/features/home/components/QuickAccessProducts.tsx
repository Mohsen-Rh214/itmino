import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../../../store/products';

const calculateTimeLeft = () => {
  const difference = +new Date().setHours(24, 0, 0, 0) - +new Date();
  let timeLeft: { [key: string]: number } = {};

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const TimerBox: React.FC<{ value: number }> = ({ value }) => (
  <span className="text-xl font-bold text-white bg-white/10 rounded-md py-1 px-2">
    {String(value).padStart(2, '0')}
  </span>
);

const QuickProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <a href="#" className="flex-shrink-0 w-48 text-center group">
    <div className="aspect-square w-full bg-neutral-800 rounded-2xl overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300" 
        loading="lazy"
      />
    </div>
    <div className="mt-3 px-1">
      <h4 className="text-sm font-bold text-neutral-100 truncate">{product.name}</h4>
      <p className="text-xs text-neutral-400 line-through mt-1">{product.originalPrice.toLocaleString('fa-IR')} تومان</p>
      <p className="text-base font-extrabold text-white">{product.discountPrice.toLocaleString('fa-IR')} تومان</p>
    </div>
  </a>
);

const QuickAccessProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const scrollContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth * 0.7;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-neutral-900 py-10 sm:py-12" aria-labelledby="quick-access-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-8">
          {/* Info & Controls */}
          <div className="flex-shrink-0 md:w-64 text-center md:text-right">
            <h2 id="quick-access-title" className="text-3xl font-extrabold text-white">بهترین تخفیف‌ها</h2>
            <p className="text-neutral-400 mt-2">فرصت را از دست ندهید!</p>
            <div dir="ltr" className="flex items-center justify-center md:justify-start space-x-2 my-4">
              {Object.values(timeLeft).map((value, index) => (
                <React.Fragment key={index}>
                  <TimerBox value={value} />
                  {index < Object.values(timeLeft).length - 1 && <span className="text-xl text-neutral-600">:</span>}
                </React.Fragment>
              ))}
            </div>
            <a href="#" className="text-sm font-bold text-accent hover:text-white transition-colors">
              مشاهده همه &rarr;
            </a>
          </div>

          {/* Carousel */}
          <div className="flex-grow min-w-0 relative">
            <div 
              ref={scrollContainer}
              className="flex space-x-6 rtl:space-x-reverse overflow-x-auto pb-4 scrollbar-hide"
            >
              {products.map(p => <QuickProductCard key={p.id} product={p} />)}
            </div>
             <button
                onClick={() => scroll('left')}
                className="absolute top-1/2 -left-5 -translate-y-1/2 bg-neutral-700/60 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-neutral-600 transition-all z-10 hidden md:flex"
                aria-label="تخفیف‌های قبلی"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
             <button
                onClick={() => scroll('right')}
                className="absolute top-1/2 -right-5 -translate-y-1/2 bg-neutral-700/60 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-neutral-600 transition-all z-10 hidden md:flex"
                aria-label="تخفیف‌های بعدی"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessProducts;