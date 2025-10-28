// Simulates fetching blog data from an API

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'راهنمای جامع خرید کارت گرافیک در سال ۲۰۲۴',
        category: 'راهنمای خرید',
        imageUrl: 'https://images.unsplash.com/photo-1597862356722-c43c1cb47344?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'مقایسه بهترین پردازنده‌های گیمینگ: Intel در برابر AMD',
        category: 'بررسی تخصصی',
        imageUrl: 'https://images.unsplash.com/photo-1633537871637-671a5f333550?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'چگونه بهترین مانیتور را برای کار و بازی انتخاب کنیم؟',
        category: 'راهنمای خرید',
        imageUrl: 'https://images.unsplash.com/photo-1616440347434-f17f6a72b839?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'نقد و بررسی لپ‌تاپ جدید Razer Blade 16',
        category: 'بررسی تخصصی',
        imageUrl: 'https://images.unsplash.com/photo-1678923223971-3a45c3632e2c?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 5,
        title: '۵ نکته برای افزایش عمر باتری لپ تاپ شما',
        category: 'آموزش',
        imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto-format&fit=crop',
    },
    {
        id: 6,
        title: 'معرفی بهترین SSDهای NVMe بازار',
        category: 'راهنمای خرید',
        imageUrl: 'https://images.unsplash.com/photo-1544890225-2f3faec4446f?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 7,
        title: 'آیا خنک کننده مایع برای سیستم شما ضروری است؟',
        category: 'بررسی تخصصی',
        imageUrl: 'https://images.unsplash.com/photo-1627286392339-1658d584982a?q=80&w=600&auto-format&fit=crop',
    },
];