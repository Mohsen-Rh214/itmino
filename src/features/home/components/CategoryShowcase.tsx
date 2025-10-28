import React from 'react';
import { categories } from '../../../store/categories';

const CategoryShowcase: React.FC = () => {
    return (
        <section aria-labelledby="category-title">
            <div className="flex items-center justify-between mb-4">
                <h2 id="category-title" className="text-2xl font-bold text-gray-800">خرید بر اساس دسته‌بندی</h2>
                <a href="#" className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors">مشاهده همه</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                    <a
                        key={index}
                        href="#"
                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg hover:shadow-brand/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center aspect-square text-center group"
                    >
                        <div className="text-brand-dark mb-2 transition-transform duration-300 group-hover:scale-110">
                            {category.icon}
                        </div>
                        <h3 className="font-semibold text-gray-700">{category.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default CategoryShowcase;