import React from 'react';
import { categories } from '../../../store/categories';

const FeaturedCategories: React.FC = () => {
    return (
        <section aria-labelledby="category-title">
            <div className="flex items-center justify-between mb-8">
                <h2 id="category-title" className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                    دسته‌بندی‌ها
                </h2>
                <a href="#" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                  مشاهده همه
                </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {categories.map((category) => (
                    <a
                        key={category.name}
                        href="#"
                        className="relative p-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center aspect-[5/4] text-center group"
                    >
                        <img src={category.imageUrl} alt={category.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
                        <div className="relative z-10 text-white flex flex-col items-center">
                            <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                                {category.icon}
                            </div>
                            <h3 className="font-bold text-base">{category.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCategories;
