import React from 'react';

interface Brand {
    name: string;
    logo: React.ReactElement;
}

export const brands: Brand[] = [
    {
        name: 'Apple',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png", alt: "Apple Logo", className: "h-full w-auto", loading: "lazy" })
    },
    {
        name: 'Samsung',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Samsung_Black_icon.svg/1920px-Samsung_Black_icon.svg.png", alt: "Samsung Logo", className: "h-full w-auto", loading: "lazy" })
    },
    {
        name: 'NVIDIA',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", alt: "NVIDIA Logo", className: "h-full w-auto", loading: "lazy" })
    },
    {
        name: 'Intel',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/1920px-Intel_logo_2023.svg.png", alt: "Intel Logo", className: "h-full w-auto", loading: "lazy" })
    },
    {
        name: 'AMD',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg", alt: "AMD Logo", className: "h-full w-auto", loading: "lazy" })
    },
    {
        name: 'Razer',
        logo: React.createElement('img', { src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/150px-Razer_snake_logo.svg.png", alt: "Razer Logo", className: "h-full w-auto", loading: "lazy" })
    }
];
