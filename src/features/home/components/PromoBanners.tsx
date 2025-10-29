import React from 'react';

interface Banner {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

interface PromoBannersProps {
  banners: Banner[];
}

const PromoBannerCard: React.FC<Banner> = ({ title, subtitle, imageUrl, link }) => (
  <a href={link} className="relative rounded-3xl overflow-hidden group h-full w-full block">
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 w-full h-full bg-white object-contain group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-tl from-black/60 to-black/10 group-hover:from-black/70 transition-all duration-300"></div>
    <div className="absolute inset-0 flex flex-col justify-end text-white p-6 sm:p-8">
      <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
      <p className="text-sm md:text-base opacity-90 mt-1">{subtitle}</p>
      <span className="mt-4 font-semibold text-sm inline-block transform group-hover:translate-x-1 transition-transform duration-300 rtl:group-hover:-translate-x-1">
        مشاهده محصولات &rarr;
      </span>
    </div>
  </a>
);

const PromoBanners: React.FC<PromoBannersProps> = ({ banners }) => {
  if (!banners || banners.length === 0) {
    return null;
  }
  
  return (
    <section aria-label="تبلیغات ویژه">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {banners.map((banner, index) => (
          <div key={index} className="h-40">
            <PromoBannerCard {...banner} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;