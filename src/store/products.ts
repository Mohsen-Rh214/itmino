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
    imageUrl: 'https://dkstatics-public.digikala.com/digikala-products/c91abf7f8ff0fd956b6ebf2acbfc449398992b14_1755786993.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    name: 'لپ تاپ Apple MacBook Pro M2',
    originalPrice: 85000000,
    discountPrice: 79900000,
    discountPercentage: 6,
  },
  {
    id: 2,
    imageUrl: 'https://api2.zoomit.ir/media/sony-wf-1000xm5-black-case-6669a683772792639dec3819',
    name: 'هدفون بی‌سیم Sony WH-1000XM5',
    originalPrice: 18000000,
    discountPrice: 15500000,
    discountPercentage: 14,
  },
  {
    id: 3,
    imageUrl: 'https://api2.zoomit.ir/media/2023-2-logitech-mx-mechanical-652d06f2eb21a6b54f50df42',
    name: 'کیبورد مکانیکال Logitech MX Mechanical',
    originalPrice: 9500000,
    discountPrice: 7900000,
    discountPercentage: 17,
  },
  {
    id: 5,
    imageUrl: 'https://api2.zoomit.ir/media/2023-10-google-pixel-8-pro-bay-652d21cf8716201626d19d0b',
    name: 'گوشی موبایل Google Pixel 8 Pro',
    originalPrice: 65000000,
    discountPrice: 59000000,
    discountPercentage: 9,
  },
  {
    id: 11,
    imageUrl: 'https://api2.zoomit.ir/media/2023-9-apple-watch-s9-starlight-aluminumbraided-solo-loop-guava-1-652d20aeeb21a6b54f511ffb',
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
    imageUrl: 'https://dkstatics-public.digikala.com/digikala-products/c91abf7f8ff0fd956b6ebf2acbfc449398992b14_1755786993.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    name: 'لپ تاپ Apple MacBook Pro M2',
    originalPrice: 85000000,
    discountPrice: 79900000,
    discountPercentage: 6,
  },
  {
    id: 12,
    imageUrl: 'https://api2.zoomit.ir/media/2018-9-3df5f25a-3d0c-4130-9275-0d59965cb5f9-652d04eb8716201626d0c4fe',
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
    imageUrl: 'https://api2.zoomit.ir/media/2021-9-razer-viper-ultimate-652d21948716201626d19129',
    name: 'ماوس گیمینگ بی‌سیم Razer Viper Ultimate',
    originalPrice: 8000000,
    discountPrice: 6900000,
    discountPercentage: 14,
  },
];

export const gamingProducts: Product[] = [
  {
    id: 4,
    imageUrl: 'https://api2.zoomit.ir/media/nvidia-rtx-4080-super-logo-fan-65be3fc1381b5915be4f12f8',
    name: 'کارت گرافیک NVIDIA RTX 4080 Super',
    originalPrice: 92000000,
    discountPrice: 88500000,
    discountPercentage: 4,
  },
  {
    id: 12,
    imageUrl: 'https://api2.zoomit.ir/media/2018-9-3df5f25a-3d0c-4130-9275-0d59965cb5f9-652d04eb8716201626d0c4fe',
    name: 'مانیتور گیمینگ 34 اینچ Ultra-Wide',
    originalPrice: 42000000,
    discountPrice: 35000000,
    discountPercentage: 17,
  },
  {
    id: 13,
    imageUrl: 'https://api2.zoomit.ir/media/2021-9-razer-viper-ultimate-652d21948716201626d19129',
    name: 'ماوس گیمینگ بی‌سیم Razer Viper Ultimate',
    originalPrice: 8000000,
    discountPrice: 6900000,
    discountPercentage: 14,
  },
  {
    id: 14,
    imageUrl: 'https://api2.zoomit.ir/media/msi-mpg-gungnir-300r-airflow-black-65d12696ad00028634ae9e90',
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
    imageUrl: 'https://www.technolife.com/image/color_image_TLP-33584_ffffff_f775b7a0-fda0-4905-8c1d-6f7f98128a38.png',
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
    imageUrl: 'https://api2.zoomit.ir/media/2021-7-razer-blade-15-advanced-model-2020-ports-652cfc14eb21a6b54f4f07b3',
    name: 'Razer Blade 15 Gaming Laptop',
    originalPrice: 110000000,
    discountPrice: 99000000,
    discountPercentage: 10,
  },
  {
    id: 18,
    imageUrl: 'https://api2.zoomit.ir/media/2021-7-razer-huntsman-mini-1-652d21e28716201626d1a13d',
    name: 'Razer Huntsman Mini Keyboard',
    originalPrice: 6500000,
    discountPrice: 5800000,
    discountPercentage: 11,
  },
   {
    id: 19,
    imageUrl: 'https://api2.zoomit.ir/media/2022-5-razer-kraken-v3-652d21b08716201626d196ee',
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