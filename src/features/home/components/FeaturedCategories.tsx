import React from 'react';
import { categories } from '../../../store/categories';

const FeaturedCategories: React.FC = () => {
    return (
        <section aria-labelledby="category-title">
            <div className="flex items-center justify-between mb-4">
                <h2 id="category-title" className="text-3xl font-extrabold text-neutral-800">
                    دسته‌بندی محصولات
                </h2>
                <a href="#" className="text-sm font-bold text-primary hover:text-primary/80 transition-all hover:-translate-x-1">
                  مشاهده همه
                </a>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-10 gap-4">
                {categories.map((category) => (
                    <a
                        key={category.name}
                        href="#"
                        className="p-2 rounded-2xl hover:bg-neutral-100/80 transition-all duration-300 flex flex-col items-center justify-center aspect-square text-center group"
                    >
                        <div className="text-neutral-500 group-hover:text-primary transition-colors duration-300">
                            {React.cloneElement(category.icon as React.ReactElement<any>, { className: 'h-8 w-8' })}
                        </div>
                        <h3 className="font-semibold text-xs text-neutral-700 group-hover:text-primary mt-2 transition-colors duration-300">{category.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCategories;