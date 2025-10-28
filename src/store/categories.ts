import React from 'react';

export interface Category {
    name: string;
    icon: React.ReactElement;
    borderColor: string;
    bgColor: string;
}

export const categories: Category[] = [
    {
        name: 'لپ‌تاپ',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })),
        borderColor: 'border-blue-500',
        bgColor: 'bg-blue-50',
    },
    {
        name: 'موبایل',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" })),
        borderColor: 'border-green-500',
        bgColor: 'bg-green-50',
    },
    {
        name: 'تبلت',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 5.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25-2.25h-15a2.25 2.25 0 0 1-2.25-2.25V7.5a2.25 2.25 0 0 1 2.25-2.25z" })),
        borderColor: 'border-teal-500',
        bgColor: 'bg-teal-50',
    },
    {
        name: 'قطعات',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414M19.778 19.778l-1.414-1.414M18.364 5.636l1.414-1.414M4.222 19.778l1.414-1.414M12 12a3 3 0 100-6 3 3 0 000 6z" })),
        borderColor: 'border-red-500',
        bgColor: 'bg-red-50',
    },
    {
        name: 'مانیتور',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17v1a3 3 0 006 0v-1m-6 0h6m-6 0H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2m-6 0h6" })),
        borderColor: 'border-indigo-500',
        bgColor: 'bg-indigo-50',
    },
     {
        name: 'هدفون',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 12c0-5.25-4.25-9.5-9.5-9.5S.5 6.75.5 12v3.75a3.75 3.75 0 0 0 3.75 3.75h.75v-3.75a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 .75.75v3.75h.75a3.75 3.75 0 0 0 3.75-3.75V12zM9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" })),
        borderColor: 'border-purple-500',
        bgColor: 'bg-purple-50',
    },
    {
        name: 'ساعت هوشمند',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" })),
        borderColor: 'border-yellow-500',
        bgColor: 'bg-yellow-50',
    },
    {
        name: 'گیمینگ',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.21 18.21l-4-2.25-4 2.25a1 1 0 00-.47 1.418l1.25 2.5a1 1 0 001.418.47l4-2.25a1 1 0 00.47-1.418l-1.25-2.5z" })),
        borderColor: 'border-pink-500',
        bgColor: 'bg-pink-50',
    },
    {
        name: 'حافظه',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" })),
        borderColor: 'border-orange-500',
        bgColor: 'bg-orange-50',
    },
    {
        name: 'جانبی',
        icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.042 21.672L13.684 16.6m0 0l-2.51-2.222m2.51 2.222l2.222 2.51M13.684 16.6l5.704-5.704a2.25 2.25 0 00-3.182-3.182l-5.704 5.704m2.51 2.222z" })),
        borderColor: 'border-lime-500',
        bgColor: 'bg-lime-50',
    },
];