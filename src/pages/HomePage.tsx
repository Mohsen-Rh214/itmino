import React from 'react';
import BannerCarousel from '../features/home/components/BannerCarousel';
import SpecialSales from '../features/home/components/SpecialSales';
import KeySellingPoints from '../features/home/components/KeySellingPoints';
import CategoryShowcase from '../features/home/components/CategoryShowcase';
import BrandLogos from '../features/home/components/BrandLogos';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <BannerCarousel />
      <KeySellingPoints />
      <SpecialSales />
      <CategoryShowcase />
      <BrandLogos />
    </div>
  );
};

export default HomePage;