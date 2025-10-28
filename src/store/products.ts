// Simulates fetching product data from an API

export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
}

export const newArrivals: Product[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto-format&fit=crop',
    name: 'لپ تاپ Apple MacBook Pro M2',
    originalPrice: 85000000,
    discountPrice: 79900000,
    discountPercentage: 6,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf4022?q=80&w=800&auto-format&fit=crop',
    name: 'هدفون بی‌سیم Sony WH-1000XM5',
    originalPrice: 18000000,
    discountPrice: 15500000,
    discountPercentage: 14,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1627843563095-2df978262402?q=80&w=800&auto-format&fit=crop',
    name: 'کیبورد مکانیکال Logitech MX Mechanical',
    originalPrice: 9500000,
    discountPrice: 7900000,
    discountPercentage: 17,
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1593152167538-2a014c234d39?q=80&w=800&auto-format&fit=crop',
    name: 'گوشی موبایل Google Pixel 8 Pro',
    originalPrice: 65000000,
    discountPrice: 59000000,
    discountPercentage: 9,
  },
  {
    id: 11,
    imageUrl: 'https://images.unsplash.com/photo-1542496658-60b96a0b5f59?q=80&w=800&auto-format&fit=crop',
    name: 'ساعت هوشمند Apple Watch Series 9',
    originalPrice: 25000000,
    discountPrice: 22500000,
    discountPercentage: 10,
  }
];

export const topSellers: Product[] = [
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1616900224379-d41584a87556?q=80&w=800&auto-format&fit=crop',
    name: 'کارت گرافیک NVIDIA RTX 4080 Super',
    originalPrice: 92000000,
    discountPrice: 88500000,
    discountPercentage: 4,
  },
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto-format&fit=crop',
    name: 'لپ تاپ Apple MacBook Pro M2',
    originalPrice: 85000000,
    discountPrice: 79900000,
    discountPercentage: 6,
  },
  {
    id: 12,
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto-format&fit=crop',
    name: 'مانیتور گیمینگ 34 اینچ Ultra-Wide',
    originalPrice: 42000000,
    discountPrice: 35000000,
    discountPercentage: 17,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf4022?q=80&w=800&auto-format&fit=crop',
    name: 'هدفون بی‌سیم Sony WH-1000XM5',
    originalPrice: 18000000,
    discountPrice: 15500000,
    discountPercentage: 14,
  },
   {
    id: 13,
    imageUrl: 'https://images.unsplash.com/photo-1563297007-162a4a494975?q=80&w=800&auto-format&fit=crop',
    name: 'ماوس گیمینگ بی‌سیم Razer Viper Ultimate',
    originalPrice: 8000000,
    discountPrice: 6900000,
    discountPercentage: 14,
  },
];

export const gamingProducts: Product[] = [
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1616900224379-d41584a87556?q=80&w=800&auto-format&fit=crop',
    name: 'کارت گرافیک NVIDIA RTX 4080 Super',
    originalPrice: 92000000,
    discountPrice: 88500000,
    discountPercentage: 4,
  },
  {
    id: 12,
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800&auto-format&fit=crop',
    name: 'مانیتور گیمینگ 34 اینچ Ultra-Wide',
    originalPrice: 42000000,
    discountPrice: 35000000,
    discountPercentage: 17,
  },
  {
    id: 13,
    imageUrl: 'https://images.unsplash.com/photo-1563297007-162a4a494975?q=80&w=800&auto-format&fit=crop',
    name: 'ماوس گیمینگ بی‌سیم Razer Viper Ultimate',
    originalPrice: 8000000,
    discountPrice: 6900000,
    discountPercentage: 14,
  },
  {
    id: 14,
    imageUrl: 'https://images.unsplash.com/photo-1587831990711-23d72d4a623f?q=80&w=800&auto-format&fit=crop',
    name: 'کیس گیمینگ RGB با خنک‌کننده مایع',
    originalPrice: 15000000,
    discountPrice: 13500000,
    discountPercentage: 10,
  },
  {
    id: 18,
    imageUrl: 'https://images.unsplash.com/photo-1614390099245-296e8387a20c?q=80&w=800&auto-format&fit=crop',
    name: 'Razer Huntsman Mini Keyboard',
    originalPrice: 6500000,
    discountPrice: 5800000,
    discountPercentage: 11,
  },
  {
    id: 19,
    imageUrl: 'https://images.unsplash.com/photo-1629429489159-1361e94fad44?q=80&w=800&auto-format&fit=crop',
    name: 'Razer Kraken V3 Headset',
    originalPrice: 5000000,
    discountPrice: 4200000,
    discountPercentage: 16,
  },
  {
    id: 20,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto-format&fit=crop',
    name: 'صندلی گیمینگ ارگونومیک DXRacer',
    originalPrice: 22000000,
    discountPrice: 19900000,
    discountPercentage: 9,
  },
  {
    id: 21,
    imageUrl: 'https://images.unsplash.com/photo-1558507311-5120444de068?q=80&w=800&auto-format&fit=crop',
    name: 'Webcam Logitech C920 HD Pro',
    originalPrice: 4000000,
    discountPrice: 3500000,
    discountPercentage: 12,
  },
  {
    id: 22,
    imageUrl: 'https://images.unsplash.com/photo-1627885793292-b2869502b450?q=80&w=800&auto-format&fit=crop',
    name: 'Microphone HyperX QuadCast S',
    originalPrice: 7000000,
    discountPrice: 6200000,
    discountPercentage: 11,
  }
];

export const appleProducts: Product[] = [
  newArrivals[0], 
  newArrivals[4],
  {
    id: 15,
    imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto-format&fit=crop',
    name: 'Apple Magic Keyboard',
    originalPrice: 8000000,
    discountPrice: 7200000,
    discountPercentage: 10,
  },
  {
    id: 16,
    imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=800&auto-format&fit=crop',
    name: 'Apple AirPods Max',
    originalPrice: 32000000,
    discountPrice: 29000000,
    discountPercentage: 9,
  }
];

export const razerProducts: Product[] = [
  topSellers[4],
  {
    id: 17,
    imageUrl: 'https://images.unsplash.com/photo-1604832416043-349a029c185a?q=80&w=800&auto-format&fit=crop',
    name: 'Razer Blade 15 Gaming Laptop',
    originalPrice: 110000000,
    discountPrice: 99000000,
    discountPercentage: 10,
  },
  {
    id: 18,
    imageUrl: 'https://images.unsplash.com/photo-1614390099245-296e8387a20c?q=80&w=800&auto-format&fit=crop',
    name: 'Razer Huntsman Mini Keyboard',
    originalPrice: 6500000,
    discountPrice: 5800000,
    discountPercentage: 11,
  },
   {
    id: 19,
    imageUrl: 'https://images.unsplash.com/photo-1629429489159-1361e94fad44?q=80&w=800&auto-format&fit=crop',
    name: 'Razer Kraken V3 Headset',
    originalPrice: 5000000,
    discountPrice: 4200000,
    discountPercentage: 16,
  }
];

export const bestDeals: Product[] = [
  newArrivals[2],
  topSellers[2],
  newArrivals[1],
  razerProducts[2],
  topSellers[4],
  gamingProducts[3],
  appleProducts[2],
  topSellers[0],
  razerProducts[1],
  appleProducts[3],
  gamingProducts[4],
  gamingProducts[6],
  gamingProducts[8],
  newArrivals[0],
  topSellers[1],
];