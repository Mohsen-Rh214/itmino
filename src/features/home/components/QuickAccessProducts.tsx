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
  } else {
    timeLeft = { hours: 0, minutes: 0, seconds: 0 };
  }
  return timeLeft;
};

const TimerBox: React.FC<{ value: number }> = ({ value }) => (
  <span className="text-2xl sm:text-3xl font-extrabold text-neutral-800 bg-white/90 backdrop-blur-sm rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center tabular-nums shadow-md">
    {String(value).padStart(2, '0')}
  </span>
);

const ViewAllCard: React.FC = () => (
    <a href="#" className="flex flex-col items-center justify-center w-40 sm:w-48 flex-shrink-0 bg-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group h-full">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border-2 border-dashed border-white/20 group-hover:border-white/50 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </div>
        <p className="mt-4 font-bold text-white">مشاهده همه</p>
    </a>
);

const AmazingOffers: React.FC<{ products: Product[] }> = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState({ left: false, right: true });
  
  useDraggableScroll(scrollContainer);
  
  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const checkScrollability = () => {
    if (scrollContainer.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
        const canScrollLeft = scrollLeft > 1;
        const canScrollRight = scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 1;
        if (isScrollable.left !== canScrollLeft || isScrollable.right !== canScrollRight) {
            setIsScrollable({ left: canScrollLeft, right: canScrollRight });
        }
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      checkScrollability();
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      }
    };
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
        const scrollAmount = scrollContainer.current.clientWidth * 0.8;
        scrollContainer.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="w-full py-10 sm:py-12 bg-gradient-to-tr from-fuchsia-600 via-primary to-indigo-800" 
      aria-labelledby="amazing-offers-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Info Panel */}
            <div className="flex flex-col items-center justify-center text-center lg:w-1/4 flex-shrink-0">
                <img src="https://itmino.com/wp-content/uploads/2023/12/logo-amazing-v.png" alt="Amazing Offers Logo" className="h-20 w-auto" />
                <h2 id="amazing-offers-title" className="text-3xl font-extrabold text-white mt-4">
                    پیشنهادات شگفت‌انگیز
                </h2>
                <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4" dir="ltr">
                    <TimerBox value={timeLeft.hours} />
                    <span className="text-3xl font-bold text-white/50">:</span>
                    <TimerBox value={timeLeft.minutes} />
                    <span className="text-3xl font-bold text-white/50">:</span>
                    <TimerBox value={timeLeft.seconds} />
                </div>
            </div>

            {/* Carousel */}
            <div className="relative group/offers w-full lg:w-3/4">
                <div 
                    ref={scrollContainer}
                    className="flex space-x-3 rtl:space-x-reverse overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide cursor-grab items-stretch"
                >
                    {products.map(p => <AmazingOfferCard key={p.id} product={p} />)}
                    <ViewAllCard />
                </div>
                 {/* Navigation Buttons */}
                <button
                    onClick={() => scroll('left')}
                    disabled={!isScrollable.left}
                    className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 items-center justify-center shadow-md hover:bg-white transition-all z-10 disabled:cursor-not-allowed hover:scale-110 active:scale-100 disabled:opacity-0 hidden md:flex opacity-0 group-hover/offers:opacity-100"
                    aria-label="محصولات قبلی"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-neutral-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={() => scroll('right')}
                    disabled={!isScrollable.right}
                    className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 items-center justify-center shadow-md hover:bg-white transition-all z-10 disabled:cursor-not-allowed hover:scale-110 active:scale-100 disabled:opacity-0 hidden md:flex opacity-0 group-hover/offers:opacity-100"
                    aria-label="محصولات بعدی"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-neutral-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingOffers;