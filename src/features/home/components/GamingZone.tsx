import React, { useRef, useState, useEffect } from 'react';
import { gamingProducts } from '../../../store/products';
import { useDraggableScroll } from '../../../hooks/useDraggableScroll';
import GamingProductCard from './GamingProductCard';

const GamingZone: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    const [isScrollable, setIsScrollable] = useState({ prev: false, next: true });
    useDraggableScroll(scrollContainer);

    const checkScrollability = () => {
        if (scrollContainer.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
            // For RTL, scrollLeft is negative. 0 is the start (right), -(scrollWidth - clientWidth) is the end (left).
            const canScrollPrev = scrollLeft < -1; // Can scroll back to the right
            const canScrollNext = scrollLeft > -(scrollWidth - clientWidth) + 1; // Can scroll further to the left
            
            if (isScrollable.prev !== canScrollPrev || isScrollable.next !== canScrollNext) {
                setIsScrollable({ prev: canScrollPrev, next: canScrollNext });
            }
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
    }, []);

    const scroll = (direction: 'prev' | 'next') => {
        if (scrollContainer.current) {
            const scrollAmount = scrollContainer.current.clientWidth * 0.8;
            // For RTL, 'next' scrolls left (negative), 'prev' scrolls right (positive).
            scrollContainer.current.scrollBy({ left: direction === 'next' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section 
            aria-labelledby="gaming-zone-title"
            className="w-full overflow-x-clip py-12" // Use overflow-x-clip to contain the bleed
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-8">
                    
                    {/* RIGHT SIDE: Info Panel (fixed width, first in DOM for RTL) */}
                    <div className="lg:w-72 xl:w-80 flex-shrink-0 flex items-center">
                        <div className="text-center lg:text-right w-full">
                            <h2 id="gaming-zone-title" className="text-3xl sm:text-4xl font-extrabold text-neutral-800">
                                Gaming Zone
                            </h2>
                            <p className="text-neutral-600 mt-4 text-sm sm:text-base leading-relaxed">
                                از جدیدترین سخت‌افزارها تا لوازم جانبی حرفه‌ای، هرآنچه برای یک تجربه گیمینگ بی‌نقص نیاز دارید.
                            </p>
                            <div className="mt-8">
                                <a href="#" className="inline-block bg-accent-volt text-neutral-900 font-bold px-6 py-3 rounded-full text-sm sm:text-base transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent-volt focus:ring-offset-2 focus:ring-offset-neutral-50">
                                    مشاهده همه
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* LEFT SIDE: Carousel (flex-grow) */}
                    <div className="flex-1 min-w-0 -ml-[calc(50vw-50%)]">
                        <div className="bg-neutral-900 border-[2px] border-neutral-500 h-full rounded-tr-[60px] py-8 rounded-br-[60px] pl-[calc(45vw-50%)]">
                            <div className="relative group/gaming h-full flex flex-col justify-center py-8 lg:py-0 pr-4 sm:pr-6 lg:pr-8">
                                <div 
                                    ref={scrollContainer}
                                    className="flex space-x-4 rtl:space-x-reverse overflow-x-auto pb-4 scrollbar-hide cursor-grab pl-4 sm:pl-6 lg:pl-8"
                                >
                                    {gamingProducts.map(product => (
                                        <GamingProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                                {/* Navigation Buttons */}
                                <button
                                    onClick={() => scroll('next')}
                                    disabled={!isScrollable.next}
                                    className="absolute top-1/2 left-2 lg:left-10 -translate-y-1/2 bg-neutral-700/80 backdrop-blur-sm rounded-full w-8 h-8 items-center justify-center shadow-md hover:bg-neutral-600 transition-all z-10 disabled:cursor-not-allowed hover:scale-110 active:scale-100 disabled:opacity-0 hidden lg:flex opacity-0 group-hover/gaming:opacity-100"
                                    aria-label="محصولات بعدی"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => scroll('prev')}
                                    disabled={!isScrollable.prev}
                                    className="absolute top-1/2 right-2 lg:right-10 -translate-y-1/2 bg-neutral-700/80 backdrop-blur-sm rounded-full w-8 h-8 items-center justify-center shadow-md hover:bg-neutral-600 transition-all z-10 disabled:cursor-not-allowed hover:scale-110 active:scale-100 disabled:opacity-0 hidden lg:flex opacity-0 group-hover/gaming:opacity-100"
                                    aria-label="محصولات قبلی"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GamingZone;
