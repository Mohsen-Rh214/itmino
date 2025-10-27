import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <p className="text-gray-600 font-semibold">هدر سایت</p>
      </div>
    </header>
  );
};

export default Header;