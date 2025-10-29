import React, { useRef } from 'react';
import { Product } from '../../../store/products';
import { Spotlight } from '../../../store/spotlight';
import { useDraggableScroll } from '../../../hooks/useDraggableScroll';

interface BrandSpotlightProps {
  spotlight: Spotlight;
  products: Product[];
  reverseLayout?: boolean;
}

const SpotlightProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <a href="#" className="flex-shrink-0 w-32 group">
    <div className="aspect-square w-full bg-white rounded-2xl overflow-hidden border border-neutral-200/60">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
        loading="lazy"
      />
    </div>
    <h4 className="text-xs font-semibold text-neutral-700 mt-2 truncate">{product.name}</h4>
    <p className="text-sm font-bold text-neutral-900">{product.discountPrice.toLocaleString('fa-IR')} تومان</p>
  </a>
);

const BrandSpotlight: React.FC<BrandSpotlightProps> = ({ spotlight, products, reverseLayout = false }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  useDraggableScroll(scrollContainer);
  
  return (
    <section className={`bg-gray-200 border border-white rounded-3xl shadow overflow-hidden grid grid-cols-1 lg:grid-cols-2`} aria-labelledby={`brand-spotlight-${spotlight.brandName}`}>
      <div className={`flex flex-col justify-center p-6 md:p-8 lg:p-10 ${reverseLayout ? 'lg:order-2 bg-multi-corner-gradient' : 'bg-[#D7DEE8]'}`}>
        <h3 id={`brand-spotlight-${spotlight.brandName}`} className="text-sm font-bold text-primary">{spotlight.brandName}</h3>
        <h2 className="text-3xl font-extrabold text-neutral-800 mt-2">{spotlight.title}</h2>
        <p className={`${reverseLayout ? 'text-black' : 'text-neutral-600'} mt-4 max-w-md text-sm leading-relaxed`}>{spotlight.description}</p>
        
        <div className="mt-8">
          <div ref={scrollContainer} className="flex space-x-3 rtl:space-x-reverse overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide cursor-grab">
            {products.map(p => <SpotlightProductCard key={p.id} product={p} />)}
          </div>
        </div>
         <div className="mt-6">
            <a href="#" className="font-bold text-primary hover:text-primary/80 transition-all text-sm inline-block hover:-translate-x-1">
              مشاهده همه محصولات {spotlight.brandName} &rarr;
            </a>
          </div>
      </div>
      <div className={`relative w-full min-h-[250px] lg:h-auto ${reverseLayout ? 'lg:order-1' : ''}`}>
        <img 
          src={spotlight.bannerUrl} 
          alt={`${spotlight.brandName} spotlight`} 
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default BrandSpotlight;