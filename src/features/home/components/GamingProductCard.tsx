import React from 'react';
import { Product } from '../../../store/products';

const GamingProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-60 sm:w-64 bg-neutral-800/50 border border-neutral-700/60 rounded-2xl overflow-hidden flex flex-col h-full">
      <a href="#" className="block group">
        <div className="relative aspect-square w-full overflow-hidden bg-white">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <span className="absolute top-3 right-3 bg-accent-signal text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
            {product.discountPercentage}%
          </span>
        </div>
      </a>

      <div className="px-4 pb-4 flex flex-col flex-grow">
        <div className="w-full my-2">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>

        <h3 className="text-white font-semibold text-sm h-10 leading-tight mb-2" title={product.name}>
            <a href="#" className="hover:text-primary transition-colors">{product.name}</a>
        </h3>

        <div className="flex items-center justify-end mt-auto">
            <div className="flex flex-col items-end">
                <p className="text-xs text-neutral-400 line-through">
                    {product.originalPrice.toLocaleString('fa-IR')}
                </p>
                <p className="text-lg font-extrabold text-white">
                    {product.discountPrice.toLocaleString('fa-IR')}
                    <span className="text-xs font-normal mr-1 text-neutral-300"> تومان</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GamingProductCard;