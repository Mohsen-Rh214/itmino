import React from 'react';

// Define a type for a single category object for better type safety and clarity.
interface Category {
    name: string;
    icon: React.ReactNode;
}

export const categories: Category[] = [
    {
        name: 'لپ‌تاپ',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }))
    },
    {
        name: 'موبایل',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 1.5H5.25A2.25 2.25 0 003 3.75v16.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 20.25V10.5M10.5 1.5L21 1.5m0 0A2.25 2.25 0 0118.75 3.75M21 1.5v6.75m-6.75-2.25A2.25 2.25 0 0112 3.75m-3.75 0A2.25 2.25 0 016 6m0 0v1.5m13.5-1.5v6.75m0-6.75a2.25 2.25 0 01-2.25 2.25M12 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" }))
    },
    {
        name: 'قطعات',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" }))
    },
    {
        name: 'جانبی',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 13.5V3.75m0 9.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H1.5A1.5 1.5 0 010 12V5.25A1.5 1.5 0 011.5 3.75h5.25A1.5 1.5 0 018.25 5.25v6.75a1.5 1.5 0 01-1.5 1.5z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 6.75h5.25A1.5 1.5 0 0124 8.25v6.75a1.5 1.5 0 01-1.5 1.5h-5.25a1.5 1.5 0 01-1.5-1.5v-6.75a1.5 1.5 0 011.5-1.5z" }))
    },
    {
        name: 'گیمینگ',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 4.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5zM6 10.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5zM6 16.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5zM12 4.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5zM12 10.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5zM12 16.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5z" }))
    },
    {
        name: 'مانیتور',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17v1a3 3 0 006 0v-1m-6 0h6m-6 0H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2m-6 0h6" }))
    }
];
