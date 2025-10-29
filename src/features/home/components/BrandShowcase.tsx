import React from 'react';
import { brands } from '../../../store/brands';

const BrandShowcase: React.FC = () => {
    // Duplicate the brands array for a seamless loop
    const extendedBrands = [...brands, ...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,...brands,];

    return (
        <section aria-labelledby="brands-title">
            <div className="text-center mb-8">
                <h2 id="brands-title" className="text-3xl font-extrabold text-neutral-800">
                    خرید بر اساس برند
                </h2>
                <p className="text-neutral-500 mt-1.5 text-sm">برندهای معتبری که به آن‌ها اعتماد داریم</p>
            </div>
            <div className="relative w-full overflow-hidden group border-[3px] rounded-[30px] bg-neutral-100 py-4 shadow">
                <div className="flex justify-end animate-marquee group-hover:[animation-play-state:paused]">
                    {extendedBrands.map((brand, index) => (
                        <a 
                            href="#" 
                            key={index} 
                            className="flex-shrink-0 mr-10 p-3 w-36 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center hover:bg-white hover:shadow-lg hover:-translate-y-0.5 border border-transparent hover:border-neutral-200/80 transition-all duration-300"
                            title={brand.name}
                        >
                            <div className="h-8 transition-all p duration-300 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                                {brand.logo}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandShowcase;