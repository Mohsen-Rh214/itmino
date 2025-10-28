import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  originalPrice,
  discountPrice,
  discountPercentage,
}) => {
  return (
    <a href="#" className="bg-white border border-neutral-200/60 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out group relative flex flex-col h-full">
      {/* Discount Badge */}
      <div className="absolute top-3 right-3 bg-accent-signal text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
        {discountPercentage}%
      </div>
      
      {/* Product Image */}
      <div className="aspect-square w-full overflow-hidden bg-neutral-50">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-neutral-800 font-semibold text-sm h-10 leading-tight" title={name}>
          {name}
        </h3>
        <div className="flex items-end justify-between mt-auto pt-2">
            <div className="flex flex-col items-start">
                <p className="text-xs text-neutral-400 line-through">
                    {originalPrice.toLocaleString('fa-IR')} تومان
                </p>
                <p className="text-lg font-extrabold text-neutral-900">
                    {discountPrice.toLocaleString('fa-IR')}
                    <span className="text-xs font-normal mr-1"> تومان</span>
                </p>
            </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;