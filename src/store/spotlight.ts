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
        bannerUrl: 'https://images.unsplash.com/photo-1558137340-1e281a039a09?q=80&w=1280&auto=format&fit=crop',
    },
    razer: {
        brandName: 'Razer',
        title: 'برای گیمرها، توسط گیمرها',
        description: 'با تجهیزات گیمینگ ریزر، مرزهای عملکرد را جابجا کنید. دقت، سرعت و طراحی ارگونومیک برای تسلط کامل بر میدان نبرد.',
        bannerUrl: 'https://images.unsplash.com/photo-1614287739544-7755b4625b3a?q=80&w=1280&auto=format&fit=crop',
    }
};
