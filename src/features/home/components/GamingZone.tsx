import React from 'react';
import ProductCarousel from './ProductCarousel';
import { gamingProducts } from '../../../store/products';

const GamingZone: React.FC = () => {
    return (
        <section className="bg-neutral-900 py-12" aria-labelledby="gaming-zone-title">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <ProductCarousel 
                    title="Gaming Zone"
                    subtitle="تجهیزات حرفه‌ای برای گیمرهای حرفه‌ای"
                    link="#"
                    products={gamingProducts}
                    theme="dark"
                />
             </div>
        </section>
    );
};

export default GamingZone;
