import React, { useState } from 'react';
import { megaMenuData } from '../../store/megaMenu';

interface MegaMenuProps {
  isOpen: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen }) => {
  const [activeCategory, setActiveCategory] = useState(megaMenuData[0]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-neutral-200 z-40 animate-fadeIn"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-6">
          {/* Main Categories List */}
          <div className="w-1/4 border-l border-neutral-200 pl-6 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6">
            <ul className="space-y-2">
              {megaMenuData.map((category) => (
                <li key={category.name}>
                  <button
                    onMouseEnter={() => setActiveCategory(category)}
                    className={`w-full text-right px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 flex justify-between items-center ${
                      activeCategory.name === category.name
                        ? 'bg-primary/10 text-primary'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub Categories & Promo */}
          <div className="w-3/4 flex gap-8">
            {/* Sub Categories */}
            <div className="flex-grow grid grid-cols-2 gap-x-12">
              {activeCategory.subCategories.map((column, colIndex) => (
                <div key={colIndex}>
                  <ul className="space-y-3.5">
                    {column.map((sub) => (
                      <li key={sub.name}>
                        <a href={sub.link} className="text-neutral-500 hover:text-primary transition-colors text-sm font-medium">
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Promo Image */}
            <div className="w-1/3 flex-shrink-0">
              <a href={activeCategory.promoLink} className="relative rounded-2xl overflow-hidden group block h-full">
                <img src={activeCategory.promoImage} alt={activeCategory.promoTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold">{activeCategory.promoTitle}</h4>
                  <p className="text-xs opacity-90">{activeCategory.promoSubtitle}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;