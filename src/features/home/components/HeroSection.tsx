import React from 'react';
import { heroData } from '../../../store/hero';

const HeroPanel: React.FC<{ item: typeof heroData[0], isLarge: boolean }> = ({ item, isLarge }) => {
  return (
    <a href={item.link} className={`relative rounded-3xl overflow-hidden group w-full h-full text-white p-8 flex flex-col justify-end ${isLarge ? 'row-span-2' : ''} animate-fadeIn`}>
      <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="relative z-10">
        <h3 className={`font-extrabold ${isLarge ? 'text-4xl' : 'text-2xl'}`}>{item.title}</h3>
        <p className={`mt-2 ${isLarge ? 'text-base' : 'text-sm'} opacity-90`}>{item.subtitle}</p>
      </div>
    </a>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 h-[500px]"
      aria-label="بخش اصلی تبلیغات"
    >
      <div className="lg:col-span-2 row-span-2 h-full">
        <HeroPanel item={heroData[0]} isLarge={true} />
      </div>
      <div className="h-full">
        <HeroPanel item={heroData[1]} isLarge={false} />
      </div>
      <div className="h-full">
        <HeroPanel item={heroData[2]} isLarge={false} />
      </div>
    </section>
  );
};

export default HeroSection;