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
    <div className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out group relative flex flex-col h-full animate-fadeIn">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
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
        <h3 className="text-neutral-800 font-bold text-sm h-10" title={name}>
          {name}
        </h3>
        <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-col items-start">
                <p className="text-xs text-neutral-400 line-through">
                    {originalPrice.toLocaleString('fa-IR')} تومان
                </p>
                <p className="text-base font-extrabold text-neutral-900">
                    {discountPrice.toLocaleString('fa-IR')}
                    <span className="text-xs font-normal"> تومان</span>
                </p>
            </div>
          
            <button className="bg-primary/10 text-primary rounded-full h-10 w-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" aria-label={`افزودن ${name} به سبد خرید`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H4.72l-.21-1.054A1 1 0 003 1z" />
                    <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;