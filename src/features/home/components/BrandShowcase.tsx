import React from 'react';
import { brands } from '../../../store/brands';

const BrandShowcase: React.FC = () => {
    return (
        <section aria-labelledby="brands-title">
            <div className="text-center mb-8">
                <h2 id="brands-title" className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                    خرید بر اساس برند
                </h2>
                <p className="text-neutral-500 mt-2">برندهای معتبری که به آن‌ها اعتماد داریم</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {brands.map((brand, index) => (
                    <a 
                        href="#" 
                        key={index} 
                        className="bg-neutral-50 rounded-2xl p-6 flex items-center justify-center aspect-video hover:bg-white hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-neutral-200/80 transition-all duration-300" 
                        title={brand.name}
                    >
                        <div className="h-9 transition-all duration-300 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                            {brand.logo}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default BrandShowcase;
