import React from 'react';
import ProductCarousel from './ProductCarousel';
import { gamingProducts } from '../../../store/products';

const GamingZone: React.FC = () => {
    return (
        <section 
            className="w-full bg-neutral-900 py-10 sm:py-14 relative overflow-hidden" 
            aria-labelledby="gaming-zone-title"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-10" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1605679513813-4318a6df2f4b?q=80&w=1920&auto=format&fit=crop')"}}
            ></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <style>{`
                    #gaming-zone-carousel .text-neutral-900 { color: #f1f5f9; }
                    #gaming-zone-carousel .text-neutral-500 { color: #94a3b8; }
                    #gaming-zone-carousel .hover\\:text-secondary:hover { color: #c026d3; }
                `}</style>
                <div id="gaming-zone-carousel">
                    <ProductCarousel 
                        title="Gaming Zone"
                        subtitle="تجهیزات حرفه‌ای برای گیمرهای حرفه‌ای"
                        products={gamingProducts}
                        link="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default GamingZone;