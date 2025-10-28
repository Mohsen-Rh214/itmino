import React from 'react';
import { Product } from '../../../store/products';
import { Spotlight } from '../../../store/spotlight';

interface BrandSpotlightProps {
  spotlight: Spotlight;
  products: Product[];
  reverseLayout?: boolean;
}

const SpotlightProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <a href="#" className="flex-shrink-0 w-40 group">
    <div className="aspect-square w-full bg-neutral-100/70 rounded-2xl overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" 
        loading="lazy"
      />
    </div>
    <h4 className="text-xs font-bold text-neutral-700 mt-2 truncate">{product.name}</h4>
    <p className="text-sm font-extrabold text-neutral-900">{product.discountPrice.toLocaleString('fa-IR')} تومان</p>
  </a>
);

const BrandSpotlight: React.FC<BrandSpotlightProps> = ({ spotlight, products, reverseLayout = false }) => {
  return (
    <section className="bg-neutral-50 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" aria-labelledby={`brand-spotlight-${spotlight.brandName}`}>
      <div className={`flex flex-col justify-center p-8 ${reverseLayout ? 'lg:order-2' : ''}`}>
        <h3 id={`brand-spotlight-${spotlight.brandName}`} className="text-sm font-bold text-primary">{spotlight.brandName}</h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2">{spotlight.title}</h2>
        <p className="text-neutral-600 mt-4 max-w-md">{spotlight.description}</p>
        
        <div className="mt-8">
          <div className="flex space-x-4 rtl:space-x-reverse overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {products.map(p => <SpotlightProductCard key={p.id} product={p} />)}
          </div>
        </div>
         <div className="mt-6">
            <a href="#" className="font-bold text-primary hover:text-secondary transition-colors text-sm">
              مشاهده همه محصولات {spotlight.brandName} &rarr;
            </a>
          </div>
      </div>
      <div className={`relative w-full min-h-[300px] lg:h-auto ${reverseLayout ? 'lg:order-1' : ''}`}>
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