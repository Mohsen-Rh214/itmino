import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../../../store/products';
import AmazingOfferCard from './AmazingOfferCard';
import { useDraggableScroll } from '../../../hooks/useDraggableScroll';

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
  <span className="text-lg font-bold text-neutral-800 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 tabular-nums shadow-sm">
    {String(value).padStart(2, '0')}
  </span>
);

const QuickAccessProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState({ left: false, right: true });
  const [isHovered, setIsHovered] = useState(false);
  
  useDraggableScroll(scrollContainer);
  
  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const checkScrollability = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      const canScrollRight = scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 1;
      setIsScrollable({
        left: scrollLeft > 1,
        right: canScrollRight,
      });
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      const timer = setTimeout(checkScrollability, 150);
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      
      return () => {
        clearTimeout(timer);
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [products]);

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
    <section 
      className="w-full py-10 sm:py-12 relative bg-neutral-900" 
      aria-labelledby="quick-access-title"
    >
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=1920&auto=format&fit=crop')"}}
        ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5.293l6.293-6.293a1 1 0 111.414 1.414L13.414 8.707H18a1 1 0 01.954 1.287l-2 8a1 1 0 01-.954.713H6a1 1 0 01-.954-.713l-2-8A1 1 0 014 8h4.586L2.293 1.707a1 1 0 011.414-1.414L10 6.586V2a1 1 0 011.3-.954z" clipRule="evenodd" />
                </svg>
                <h2 id="quick-access-title" className="text-xl md:text-2xl font-extrabold text-white">
                  پیشنهادات شگفت‌انگیز
                </h2>
            </div>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <span className='text-sm text-white/90 font-semibold'>زمان باقی‌مانده:</span>
            <div dir="ltr" className="flex items-center space-x-1.5">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <React.Fragment key={unit}>
                  <TimerBox value={value} />
                  {index < Object.entries(timeLeft).length - 1 && <span className="text-lg font-bold text-white/50">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        
        <div 
          className="relative" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainer}
            className="flex space-x-3 rtl:space-x-reverse overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide cursor-grab"
          >
            {products.map(p => <AmazingOfferCard key={p.id} product={p} />)}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!isScrollable.left}
            className={`absolute top-1/2 -left-2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white transition-all z-20 disabled:cursor-not-allowed hover:scale-110 active:scale-100 ${isHovered ? 'opacity-100' : 'opacity-0'} disabled:opacity-0`}
            aria-label="پیشنهادات قبلی"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-neutral-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!isScrollable.right}
            className={`absolute top-1/2 -right-2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white transition-all z-20 disabled:cursor-not-allowed hover:scale-110 active:scale-100 ${isHovered ? 'opacity-100' : 'opacity-0'} disabled:opacity-0`}
            aria-label="پیشنهادات بعدی"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-neutral-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessProducts;