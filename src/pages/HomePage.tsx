import React from 'react';
import BannerCarousel from '../features/home/components/BannerCarousel';
import SpecialSales from '../features/home/components/SpecialSales';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerCarousel />
      <SpecialSales />
    </>
  );
};

export default HomePage;