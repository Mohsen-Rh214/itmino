import React from 'react';
import { Product } from '../../../store/products';
import ProgressBar from '../../../components/ui/ProgressBar';

interface AmazingOfferCardProps {
  product: Product;
}

const AmazingOfferCard: React.FC<AmazingOfferCardProps> = ({ product }) => {
    // Make stock level deterministic based on product ID to prevent jumping on re-render
    const stockLevel = (product.id * 17 + 5) % 80 + 10; // Ensures a value between 10 and 90
    const stockSoldPercentage = 100 - stockLevel;

    return (
        <a href="#" className="block w-40 sm:w-48 flex-shrink-0 bg-white p-3 rounded-2xl border border-transparent hover:border-neutral-200/60 hover:shadow-lg transition-all duration-300 group">
            <div className="aspect-square w-full overflow-hidden bg-white rounded-xl">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>
            <div className="mt-3">
                <h3 className="text-neutral-800 font-semibold text-xs h-8 leading-tight truncate" title={product.name}>
                    {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="bg-accent-signal text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {product.discountPercentage}%
                    </span>
                    <p className="text-sm font-bold text-neutral-800">
                        {product.discountPrice.toLocaleString('fa-IR')}
                        <span className="text-xs font-normal mr-1 opacity-80"> تومان</span>
                    </p>
                </div>
                 <div className="mt-3 space-y-1.5">
                    <ProgressBar percentage={stockSoldPercentage} />
                    <p className="text-xs text-neutral-500 text-center">{stockSoldPercentage}% فروخته شد</p>
                </div>
            </div>
        </a>
    );
};

export default AmazingOfferCard;