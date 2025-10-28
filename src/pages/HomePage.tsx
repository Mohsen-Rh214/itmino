import React from 'react';
import HeroSection from '../features/home/components/HeroSection';
import ProductCarousel from '../features/home/components/ProductCarousel';
import FeaturedCategories from '../features/home/components/FeaturedCategories';
import GamingZone from '../features/home/components/GamingZone';
import BrandShowcase from '../features/home/components/BrandShowcase';
import BrandSpotlight from '../features/home/components/BrandSpotlight';
import QuickAccessProducts from '../features/home/components/QuickAccessProducts';
import BlogPosts from '../features/home/components/BlogPosts';
import { newArrivals, topSellers, appleProducts, razerProducts, bestDeals } from '../store/products';
import { spotlightData } from '../store/spotlight';

const HomePage: React.FC = () => {
  return (
    <div className="py-10 sm:py-14 space-y-10 sm:space-y-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedCategories />
      </div>

      <section className="bg-soft-blue py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCarousel 
            title="جدیدترین محصولات"
            subtitle="تازه‌ترین‌های تکنولوژی در دستان شما"
            products={newArrivals}
            link="#"
          />
        </div>
      </section>

      <QuickAccessProducts products={bestDeals} />
      
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BrandShowcase />
      </div>

      <section className="bg-soft-teal py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCarousel 
            title="پرفروش‌ترین‌ها"
            subtitle="محبوب‌ترین انتخاب‌های کاربران"
            products={topSellers}
            link="#"
          />
        </div>
      </section>
       
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <BrandSpotlight spotlight={spotlightData.apple} products={appleProducts} />
      </div>
      
      <GamingZone />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <BrandSpotlight spotlight={spotlightData.razer} products={razerProducts} reverseLayout />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPosts />
      </div>
    </div>
  );
};

export default HomePage;