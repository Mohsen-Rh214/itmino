import React, { useState } from 'react';

const productImages = [
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const colors = [
    { name: 'نقره‌ای', hex: '#E5E7EB' },
    { name: 'خاکستری فضایی', hex: '#4B5563' },
];

const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };
  
  const price = 69900000;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-lg overflow-hidden shadow-sm mb-4">
                <img 
                    src={selectedImage} 
                    alt="Main product view" 
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
            </div>
            <div className="flex space-x-2 rtl:space-x-reverse">
                {productImages.map((image, index) => (
                    <button 
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${selectedImage === image ? 'border-blue-500 scale-105' : 'border-transparent hover:border-blue-300'}`}
                        aria-label={`نمایش تصویر محصول ${index + 1}`}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
        
        {/* Product Details */}
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">لپ تاپ اپل مک بوک پرو M2 (۱۶ گیگابایت رم، ۵۱۲ گیگابایت SSD)</h1>
            <div className="flex items-center mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 rtl:ml-2"></span>
                <span className="text-green-600 font-semibold">موجود در انبار</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              جدیدترین نسل مک‌بوک پرو با چیپ قدرتمند M2، تجربه‌ای بی‌نظیر از سرعت و کارایی را برای حرفه‌ای‌ها به ارمغان می‌آورد.
            </p>

            <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700 mb-2">رنگ: <span className="font-normal">{selectedColor}</span></h3>
                <div className="flex space-x-2 rtl:space-x-reverse">
                    {colors.map(color => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-8 h-8 rounded-full border-2 transition-transform duration-200 ${selectedColor === color.name ? 'border-blue-500 scale-110' : 'border-gray-200'}`}
                            style={{ backgroundColor: color.hex }}
                            aria-label={`انتخاب رنگ ${color.name}`}
                            title={color.name}
                        ></button>
                    ))}
                </div>
            </div>

            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <p className="text-3xl font-extrabold text-blue-600">
                    {price.toLocaleString('fa-IR')}
                    <span className="text-xl font-normal text-gray-700"> تومان</span>
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <div className="flex items-center border border-gray-300 rounded-lg">
                    <button onClick={() => handleQuantityChange(-1)} className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-r-lg" aria-label="کاهش تعداد">-</button>
                    <input type="text" value={quantity} readOnly className="w-12 text-center border-y-0 border-x border-gray-300 text-lg font-semibold focus:ring-0" aria-label="تعداد محصول" />
                    <button onClick={() => handleQuantityChange(1)} className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-l-lg" aria-label="افزایش تعداد">+</button>
                </div>

                <button className="w-full sm:w-auto flex-grow bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span>افزودن به سبد خرید</span>
                </button>

                <button className="p-3 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-colors" aria-label="افزودن به علاقه‌مندی‌ها">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.636l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
