import React from 'react';
import { brands } from '../../../store/brands';

const BrandLogos: React.FC = () => {
    return (
        <section aria-labelledby="brands-title">
            <h2 id="brands-title" className="text-2xl font-bold text-gray-800 text-center mb-6">
                برندهای معتبر
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {brands.map((brand, index) => (
                        <a href="#" key={index} className="focus:outline-none" title={brand.name}>
                            <div className="h-10 transition-all duration-300 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
                                {brand.logo}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;