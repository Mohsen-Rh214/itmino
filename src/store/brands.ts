import React from 'react';

// Define a type for a single brand object for better type safety and clarity.
interface Brand {
    name: string;
    logo: React.ReactNode;
}

export const brands: Brand[] = [
    {
        name: 'Apple',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple Logo", className: "h-full w-auto" })
    },
    {
        name: 'Samsung',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", alt: "Samsung Logo", className: "h-full w-auto" })
    },
    {
        name: 'NVIDIA',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", alt: "NVIDIA Logo", className: "h-full w-auto" })
    },
    {
        name: 'Intel',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%2C_dark_blue%29.svg", alt: "Intel Logo", className: "h-full w-auto" })
    },
    {
        name: 'AMD',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg", alt: "AMD Logo", className: "h-full w-auto" })
    },
    {
        name: 'Razer',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/en/4/40/Razer_snake_logo.svg", alt: "Razer Logo", className: "h-full w-auto" })
    }
];
