import React from 'react';
import BannerCarousel from '../features/home/components/BannerCarousel';
import SpecialSales from '../features/home/components/SpecialSales';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerCarousel />
      <SpecialSales />
    </div>
  );
};

export default HomePage;