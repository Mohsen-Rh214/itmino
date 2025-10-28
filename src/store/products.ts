// Simulates fetching product data from an API

export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    originalPrice: number;
    discountPrice: number;
    discountPercentage: number;
  }
  
  export const specialProducts: Product[] = [
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
  