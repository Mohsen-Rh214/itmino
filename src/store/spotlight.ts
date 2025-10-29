export interface Spotlight {
    brandName: string;
    title: string;
    description: string;
    bannerUrl: string;
}

interface SpotlightData {
    [key: string]: Spotlight;
}

export const spotlightData: SpotlightData = {
    apple: {
        brandName: 'Apple',
        title: 'اکوسیستم یکپارچه، تجربه بی‌نظیر',
        description: 'محصولات اپل با طراحی منحصربه‌فرد و هماهنگی بی‌نقص، دنیای دیجیتال شما را متحول می‌کنند. قدرت، زیبایی و سادگی را همزمان تجربه کنید.',
        bannerUrl: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174',
    },
    razer: {
        brandName: 'Razer',
        title: 'برای گیمرها، توسط گیمرها',
        description: 'با تجهیزات گیمینگ ریزر، مرزهای عملکرد را جابجا کنید. دقت، سرعت و طراحی ارگونومیک برای تسلط کامل بر میدان نبرد.',
        bannerUrl: 'https://images.unsplash.com/photo-1581432079854-2f6d5678b478?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    }
};
