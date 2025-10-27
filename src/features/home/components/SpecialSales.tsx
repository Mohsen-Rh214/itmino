import React, { useState, useEffect } from 'react';
import ProductCard from '../../../components/ui/ProductCard';

const calculateTimeLeft = () => {
  const difference = +new Date(new Date().getFullYear() + 1, 0, 1) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

// Mock data for products
const specialProducts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920&auto=format&fit=crop',
    name: 'لپ تاپ اپل مک بوک پرو M2',
    originalPrice: 75000000,
    discountPrice: 69900000,
    discountPercentage: 7,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbf1?q=80&w=1920&auto=format&fit=crop',
    name: 'گوشی موبایل سامسونگ گلکسی S23 Ultra',
    originalPrice: 52000000,
    discountPrice: 48500000,
    discountPercentage: 7,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1593640424233-055b9fd9d37f?q=80&w=1920&auto=format&fit=crop',
    name: 'کارت گرافیک NVIDIA RTX 4080',
    originalPrice: 80000000,
    discountPrice: 72000000,
    discountPercentage: 10,
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop',
    name: 'صندلی گیمینگ حرفه‌ای RGB',
    originalPrice: 12000000,
    discountPrice: 9500000,
    discountPercentage: 21,
  },
];


const SpecialSales: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (timeLeft[interval as keyof typeof timeLeft] === undefined) {
      return null;
    }

    const unitMap: { [key: string]: string } = {
        days: 'روز',
        hours: 'ساعت',
        minutes: 'دقیقه',
        seconds: 'ثانیه'
    };

    return (
        <div key={interval} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-semibold text-[#2D2D2D]">
                {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
            </span>
            <span className="text-sm text-gray-500 mt-1">{unitMap[interval]}</span>
        </div>
    );
  });

  return (
    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200/80" aria-labelledby="special-sales-title">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="mb-6 md:mb-0 text-center md:text-right">
            <h2 id="special-sales-title" className="text-5xl font-serif-display font-semibold text-[#2D2D2D] flex items-center">
                فروش ویژه
            </h2>
            <p className="text-gray-500 mt-2">محصولات منتخب با زمان محدود</p>
        </div>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {timerComponents.length ? timerComponents : <span></span>}
        </div>

      </div>
      
      {/* Product cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialProducts.map(product => (
            <ProductCard 
                key={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                originalPrice={product.originalPrice}
                discountPrice={product.discountPrice}
                discountPercentage={product.discountPercentage}
            />
        ))}
      </div>
    </section>
  );
};

export default SpecialSales;