import React from 'react';

// Mock data for the banners
const banners = [
  {
    title: 'تجهیزات استریمینگ',
    subtitle: 'کیفیت حرفه‌ای برای تولید محتوا',
    imageUrl: 'https://images.unsplash.com/photo-1616587896648-65a35a4d6f8a?q=80&w=1280&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'حافظه‌های پرسرعت SSD',
    subtitle: 'سرعت بوت و بارگذاری باورنکردنی',
    imageUrl: 'https://images.unsplash.com/photo-1591796399941-6a2c219f8a3d?q=80&w=1280&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'کیبوردهای مکانیکال',
    subtitle: 'دقت و لذت در تایپ و بازی',
    imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
];

const PromoBannerCard: React.FC<typeof banners[0]> = ({ title, subtitle, imageUrl, link }) => (
  <a href={link} className="relative rounded-3xl overflow-hidden group h-full w-full block">
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10 group-hover:from-black/70 transition-all duration-300"></div>
    <div className="absolute inset-0 flex flex-col justify-end text-white p-6 sm:p-8">
      <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
      <p className="text-sm md:text-base opacity-90 mt-1">{subtitle}</p>
      <span className="mt-4 font-semibold text-sm inline-block transform group-hover:translate-x-1 transition-transform duration-300 rtl:group-hover:-translate-x-1">
        مشاهده محصولات &rarr;
      </span>
    </div>
  </a>
);

const PromoBanners: React.FC = () => {
  return (
    <section aria-label="تبلیغات ویژه">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {banners.map((banner, index) => (
          <div key={index} className="h-56">
            <PromoBannerCard {...banner} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;