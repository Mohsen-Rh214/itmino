import React, { useState } from 'react';

const productImages = [
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587614203976-365c7d6297d3?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1920&auto=format&fit=crop',
];

const colors = [
    { name: 'نقره‌ای', hex: '#E5E7EB' },
    { name: 'خاکستری فضایی', hex: '#4B5563' },
];

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('description');
  const tabs = [
    { id: 'description', label: 'توضیحات' },
    { id: 'specs', label: 'مشخصات فنی' },
    { id: 'reviews', label: 'نقد و بررسی' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="space-y-4 text-gray-600 leading-relaxed prose prose-sm max-w-none">
            <p>جدیدترین نسل مک‌بوک پرو با چیپ قدرتمند M2، تجربه‌ای بی‌نظیر از سرعت و کارایی را برای حرفه‌ای‌ها به ارمغان می‌آورد. این دستگاه با طراحی زیبا و نمایشگر خیره‌کننده Liquid Retina XDR، انتخابی ایده‌آل برای خلاقان و توسعه‌دهندگان است.</p>
            <p>بدنه آلومینیومی بازیافتی، کیبورد Magic Keyboard با نور پس‌زمینه و تاچ‌بار بهبودیافته، همگی دست به دست هم داده‌اند تا بهترین تجربه کاربری ممکن را فراهم آورند. با عمر باتری فوق‌العاده طولانی، می‌توانید تمام روز بدون نیاز به شارژر کار کنید.</p>
          </div>
        );
      case 'specs':
        return (
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody className="divide-y divide-gray-200">
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">پردازنده</th>
                            <td className="px-6 py-4">Apple M2 Chip</td>
                        </tr>
                        <tr className="bg-gray-50/80">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">حافظه RAM</th>
                            <td className="px-6 py-4">16 گیگابایت Unified</td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">حافظه داخلی</th>
                            <td className="px-6 py-4">512 گیگابایت SSD</td>
                        </tr>
                         <tr className="bg-gray-50/80">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">صفحه نمایش</th>
                            <td className="px-6 py-4">13.3 اینچ Liquid Retina XDR</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
      case 'reviews':
        return <p className="text-gray-600">در حال حاضر نظری برای این محصول ثبت نشده است.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-16">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6 rtl:space-x-reverse" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-[#A88562] text-[#A88562]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-8">{renderContent()}</div>
    </div>
  );
};


const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };
  
  const price = 69900000;

  return (
    <div className="bg-white p-6 md:p-10 rounded-lg border border-gray-200/80 shadow-sm">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#A88562] transition-colors">صفحه اصلی</a></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></li>
              <li><a href="#" className="hover:text-[#A88562] transition-colors">لپ‌تاپ</a></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></li>
              <li className="font-medium text-gray-700" aria-current="page">مک بوک پرو M2</li>
          </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-200/80 bg-gray-100 mb-4">
                <img 
                    src={selectedImage} 
                    alt="Main product view" 
                    className="w-full h-full object-contain transition-opacity duration-300"
                />
            </div>
            <div className="flex space-x-3 rtl:space-x-reverse">
                {productImages.map((image, index) => (
                    <button 
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`w-20 h-20 rounded-md overflow-hidden border transition-all duration-200 ${selectedImage === image ? 'border-[#A88562] ring-2 ring-[#A88562]' : 'border-gray-200 hover:border-gray-400'}`}
                        aria-label={`نمایش تصویر محصول ${index + 1}`}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
        
        {/* Product Details */}
        <div>
            <h1 className="text-4xl md:text-5xl font-serif-display text-[#2D2D2D] mb-4 font-semibold">لپ تاپ اپل مک بوک پرو M2</h1>
            <div className="inline-block bg-[#A88562]/10 border border-[#A88562]/20 text-[#A88562] rounded-full px-4 py-1 mb-6 text-sm font-semibold">
                موجود در انبار
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              نسل جدید مک‌بوک پرو با چیپ M2، تجربه‌ای بی‌نظیر از سرعت و کارایی را برای حرفه‌ای‌ها به ارمغان می‌آورد.
            </p>

            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-700 mb-3">رنگ: <span className="font-normal">{selectedColor}</span></h3>
                <div className="flex space-x-3 rtl:space-x-reverse">
                    {colors.map(color => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-10 h-10 rounded-full border border-gray-300 transition-transform duration-200 focus:outline-none ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-[#A88562]' : 'hover:scale-110'}`}
                            style={{ backgroundColor: color.hex }}
                            aria-label={`انتخاب رنگ ${color.name}`}
                            title={color.name}
                        ></button>
                    ))}
                </div>
            </div>

            <div className="my-8">
                <p className="text-5xl font-bold text-[#A88562]">
                    {price.toLocaleString('fa-IR')}
                    <span className="text-2xl font-normal text-gray-600"> تومان</span>
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <div className="flex items-center border border-gray-300 rounded-full">
                    <button onClick={() => handleQuantityChange(-1)} className="px-5 py-3 text-gray-600 hover:bg-gray-100 rounded-r-full transition-colors" aria-label="کاهش تعداد">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 12H4"/></svg>
                    </button>
                    <input type="text" value={quantity} readOnly className="w-12 text-center bg-transparent border-none text-xl font-bold focus:ring-0 text-[#2D2D2D]" aria-label="تعداد محصول" />
                    <button onClick={() => handleQuantityChange(1)} className="px-5 py-3 text-gray-600 hover:bg-gray-100 rounded-l-full transition-colors" aria-label="افزایش تعداد">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                    </button>
                </div>

                <button className="w-full sm:w-auto flex-grow bg-[#A88562] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-[#967558] focus:outline-none focus:ring-4 focus:ring-[#A88562]/30 flex items-center justify-center text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLineCap="round" strokeLineJoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span>افزودن به سبد خرید</span>
                </button>
            </div>
        </div>
      </div>
      
      <ProductTabs />
    </div>
  );
};

export default ProductPage;