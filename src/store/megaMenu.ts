export interface MegaMenuCategory {
  name: string;
  subCategories: { name: string; link: string }[][]; // Array of columns, each column is an array of links
  promoImage: string;
  promoTitle: string;
  promoSubtitle: string;
  promoLink: string;
}

export const megaMenuData: MegaMenuCategory[] = [
  {
    name: 'لپ‌تاپ و کامپیوتر',
    subCategories: [
      [
        { name: 'لپ‌تاپ گیمینگ', link: '#' },
        { name: 'لپ‌تاپ اداری', link: '#' },
        { name: 'مک‌بوک', link: '#' },
        { name: 'لوازم جانبی لپ‌تاپ', link: '#' },
      ],
      [
        { name: 'کامپیوترهای All-in-One', link: '#' },
        { name: 'کیس‌های اسمبل شده', link: '#' },
        { name: 'مینی کامپیوتر', link: '#' },
      ],
    ],
    promoImage: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop',
    promoTitle: 'قدرت بی‌پایان',
    promoSubtitle: 'جدیدترین لپ‌تاپ‌های گیمینگ',
    promoLink: '#',
  },
  {
    name: 'قطعات کامپیوتر',
    subCategories: [
      [
        { name: 'پردازنده (CPU)', link: '#' },
        { name: 'کارت گرافیک (GPU)', link: '#' },
        { name: 'مادربرد', link: '#' },
        { name: 'حافظه رم (RAM)', link: '#' },
      ],
      [
        { name: 'حافظه SSD', link: '#' },
        { name: 'منبع تغذیه (PSU)', link: '#' },
        { name: 'کیس کامپیوتر', link: '#' },
        { name: 'خنک‌کننده', link: '#' },
      ],
    ],
    promoImage: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3c84e?q=80&w=800&auto=format&fit=crop',
    promoTitle: 'سیستم خود را بسازید',
    promoSubtitle: 'بهترین قطعات برای بهترین عملکرد',
    promoLink: '#',
  },
  {
    name: 'موبایل و تبلت',
    subCategories: [
      [
        { name: 'گوشی اپل', link: '#' },
        { name: 'گوشی سامسونگ', link: '#' },
        { name: 'گوشی شیائومی', link: '#' },
        { name: 'گوشی گوگل', link: '#' },
      ],
      [
        { name: 'تبلت اپل (آیپد)', link: '#' },
        { name: 'تبلت سامسونگ', link: '#' },
        { name: 'لوازم جانبی موبایل', link: '#' },
      ],
    ],
    promoImage: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=800&auto=format&fit=crop',
    promoTitle: 'ارتباطی هوشمند',
    promoSubtitle: 'جدیدترین مدل‌های موبایل و تبلت',
    promoLink: '#',
  },
    {
    name: 'لوازم جانبی',
    subCategories: [
      [
        { name: 'کیبورد', link: '#' },
        { name: 'ماوس', link: '#' },
        { name: 'هدفون و هدست', link: '#' },
        { name: 'اسپیکر', link: '#' },
      ],
      [
        { name: 'مانیتور', link: '#' },
        { name: 'پرینتر', link: '#' },
        { name: 'تجهیزات شبکه', link: '#' },
      ],
    ],
    promoImage: 'https://images.unsplash.com/photo-1627843563095-2df978262402?q=80&w=800&auto=format&fit=crop',
    promoTitle: 'دنیای خود را کامل کنید',
    promoSubtitle: 'هرآنچه برای اکوسیستم خود نیاز دارید',
    promoLink: '#',
  },
];
