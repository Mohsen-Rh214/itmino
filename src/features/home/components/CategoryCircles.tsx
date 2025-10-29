import React, { useRef } from 'react';
import { categories } from '../../../store/categories';
import { useDraggableScroll } from '../../../hooks/useDraggableScroll';

const CategoryCircles: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    useDraggableScroll(scrollContainer);

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="دسته‌بندی‌های سریع">
            <div 
                ref={scrollContainer}
                className="flex items-center space-x-6 pt-1 rtl:space-x-reverse overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide cursor-grab"
            >
                {categories.map((category) => (
                    <a
                        key={category.name}
                        href="#"
                        className="flex flex-col items-center justify-center flex-shrink-0 w-28 text-center group"
                    >
                        <div className={`relative w-24 h-24 rounded-full flex items-center justify-center ${category.bgColor} border-2 border-transparent group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300 ease-in-out`}>
                           <div className="text-neutral-600 group-hover:text-primary transition-colors duration-300">
                             {React.cloneElement(category.icon as React.ReactElement<any>, { className: 'h-10 w-10' })}
                           </div>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-neutral-700 group-hover:text-primary transition-colors duration-300">
                            {category.name}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default CategoryCircles;