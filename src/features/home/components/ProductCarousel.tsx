import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../../../components/ui/ProductCard';
import ProductCardSkeleton from '../../../components/ui/ProductCardSkeleton';
import { Product } from '../../../store/products';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  link?: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, subtitle, link, products }) => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState({ left: false, right: true });

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

  const checkScrollability = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      // Added a small buffer (1px) for precision issues in some browsers
      const canScrollRight = scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth - 1;
      setIsScrollable({
        left: scrollLeft > 0,
        right: canScrollRight,
      });
    }
  };

  useEffect(() => {
    // Timeout to ensure content has loaded and dimensions are correct
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

  return (
    <section aria-labelledby={`carousel-title-${title.replace(/\s+/g, '-')}`} className="relative group">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
        <div>
            <h2 id={`carousel-title-${title.replace(/\s+/g, '-')}`} className="text-3xl md:text-4xl font-extrabold text-neutral-900">
            {title}
            </h2>
            {subtitle && <p className="text-neutral-500 mt-2">{subtitle}</p>}
        </div>
        {link && <a href={link} className="text-sm mt-2 sm:mt-0 font-bold text-primary hover:text-secondary transition-colors">
          مشاهده همه
        </a>}
      </div>
      
      <div className="relative">
        <div 
          ref={scrollContainer}
          className="flex space-x-6 rtl:space-x-reverse overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
        >
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-[240px] sm:w-[280px]">
                <ProductCardSkeleton />
              </div>
            ))
          ) : (
            products.map(product => (
              <div key={product.id} className="flex-shrink-0 w-[240px] sm:w-[280px]">
                <ProductCard {...product} />
              </div>
            ))
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          disabled={!isScrollable.left}
          className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
          aria-label="محصولات قبلی"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-neutral-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
         <button
          onClick={() => scroll('right')}
          disabled={!isScrollable.right}
          className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
          aria-label="محصولات بعدی"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-neutral-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
