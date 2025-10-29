import React from 'react';
import HeroSection from '../features/home/components/HeroSection';
import ProductCarousel from '../features/home/components/ProductCarousel';
import CategoryCircles from '../features/home/components/CategoryCircles';
import GamingZone from '../features/home/components/GamingZone';
import BrandShowcase from '../features/home/components/BrandShowcase';
import BrandSpotlight from '../features/home/components/BrandSpotlight';
import AmazingOffers from '../features/home/components/QuickAccessProducts';
import BlogPosts from '../features/home/components/BlogPosts';
import PromoBanners from '../features/home/components/PromoBanners';
import { newArrivals, topSellers, appleProducts, razerProducts, bestDeals } from '../store/products';
import { spotlightData } from '../store/spotlight';
import { upperBanners, lowerBanners } from '../store/promoBanners';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <HeroSection />

      <CategoryCircles />
      
      <AmazingOffers products={bestDeals} />
      
      <div className="container mx-auto sm:px-6 lg:px-8">
         <BrandSpotlight spotlight={spotlightData.razer} products={razerProducts} reverseLayout />
      </div>

      <GamingZone />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <BrandSpotlight spotlight={spotlightData.apple} products={appleProducts} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PromoBanners banners={upperBanners} />
      </div>
{/* 
      <section className="bg-soft-blue py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCarousel 
            title="جدیدترین محصولات"
            subtitle="تازه‌ترین‌های تکنولوژی در دستان شما"
            products={newArrivals}
            link="#"
          />
        </div>
      </section> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PromoBanners banners={lowerBanners} />
      </div>

      {/* <section className="bg-soft-teal py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCarousel 
            title="پرفروش‌ترین‌ها"
            subtitle="محبوب‌ترین انتخاب‌های کاربران"
            products={topSellers}
            link="#"
          />
        </div>
      </section> */}
       

      

       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BrandShowcase />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <BlogPosts />
      </div>
    </div>
  );
};

export default HomePage;