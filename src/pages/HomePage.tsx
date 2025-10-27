import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import SpecialSales from '../components/SpecialSales';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerCarousel />
      <SpecialSales />
    </>
  );
};

export default HomePage;
