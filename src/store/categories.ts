import React from 'react';

export interface Category {
    name: string;
    icon: React.ReactNode;
    imageUrl: string;
}

export const categories: Category[] = [
    {
        name: 'لپ‌تاپ',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })),
        imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto-format&fit=crop',
    },
    {
        name: 'موبایل',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" })),
        imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto-format&fit=crop',
    },
    {
        name: 'قطعات',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414M19.778 19.778l-1.414-1.414M18.364 5.636l1.414-1.414M4.222 19.778l1.414-1.414M12 12a3 3 0 100-6 3 3 0 000 6z" })),
        imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3c84e?q=80&w=800&auto-format&fit=crop',
    },
    {
        name: 'جانبی',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.042 21.672L13.684 16.6m0 0l-2.51-2.222m2.51 2.222l2.222 2.51M13.684 16.6l5.704-5.704a2.25 2.25 0 00-3.182-3.182l-5.704 5.704m2.51 2.222z" })),
        imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto-format&fit=crop',
    },
    {
        name: 'گیمینگ',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.21 18.21l-4-2.25-4 2.25a1 1 0 00-.47 1.418l1.25 2.5a1 1 0 001.418.47l4-2.25a1 1 0 00.47-1.418l-1.25-2.5z" })),
        imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto-format&fit=crop',
    },
    {
        name: 'مانیتور',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17v1a3 3 0 006 0v-1m-6 0h6m-6 0H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2m-6 0h6" })),
        imageUrl: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=800&auto-format&fit=crop',
    }
];
