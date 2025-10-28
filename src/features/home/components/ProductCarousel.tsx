import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../../../components/ui/ProductCard';
import ProductCardSkeleton from '../../../components/ui/ProductCardSkeleton';
import { Product } from '../../../store/products';
import { useDraggableScroll } from '../../../hooks/useDraggableScroll';

interface ProductCarouselProps {
  title?: string;
  subtitle?: string;
  link?: string;
  products: Product[];
  theme?: 'light' | 'dark';
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, subtitle, link, products, theme = 'light' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState({ left: false, right: true });
  const [isHovered, setIsHovered] = useState(false);
  
  useDraggableScroll(scrollContainer);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

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
    const timer = setTimeout(checkScrollability, 100);
    const container = scrollContainer.current;
    container?.addEventListener('scroll', checkScrollability);
    window.addEventListener('resize', checkScrollability);
    return () => {
      clearTimeout(timer);
      container?.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [isLoading, products]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth * 0.8;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const titleColor = theme === 'dark' ? 'text-white' : 'text-neutral-800';
  const subtitleColor = theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500';
  const linkColor = theme === 'dark' ? 'text-white hover:text-white/80' : 'text-primary hover:text-primary/80';


  return (
    <section aria-labelledby={title ? `carousel-title-${title.replace(/\s+/g, '-')}` : undefined} className="w-full">
      {title && (
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6">
          <div>
              <h2 id={`carousel-title-${title.replace(/\s+/g, '-')}`} className={`text-3xl font-extrabold ${titleColor}`}>
              {title}
              </h2>
              {subtitle && <p className={`${subtitleColor} text-sm mt-1.5`}>{subtitle}</p>}
          </div>
          {link && <a href={link} className={`text-sm mt-2 sm:mt-0 font-bold ${linkColor} transition-all hover:-translate-x-1`}>
            مشاهده همه
          </a>}
        </div>
      )}
      
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={scrollContainer}
          className="flex space-x-3 rtl:space-x-reverse overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide cursor-grab"
        >
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-[200px] sm:w-[240px]">
                <ProductCardSkeleton />
              </div>
            ))
          ) : (
            products.map(product => (
              <div key={product.id} className="flex-shrink-0 w-[200px] sm:w-[240px]">
                <ProductCard {...product} />
              </div>
            ))
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          disabled={!isScrollable.left}
          className={`absolute top-1/2 -left-3 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white transition-all z-10 disabled:cursor-not-allowed hover:scale-110 active:scale-100 ${isHovered ? 'opacity-100' : 'opacity-0'} disabled:opacity-0`}
          aria-label="محصولات قبلی"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-neutral-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
         <button
          onClick={() => scroll('right')}
          disabled={!isScrollable.right}
          className={`absolute top-1/2 -right-3 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-white transition-all z-10 disabled:cursor-not-allowed hover:scale-110 active:scale-100 ${isHovered ? 'opacity-100' : 'opacity-0'} disabled:opacity-0`}
          aria-label="محصولات بعدی"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-neutral-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;