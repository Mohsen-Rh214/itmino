import React from 'react';

const SupportButton: React.FC = () => {
  return (
    <button
      className="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-50 bg-primary text-white w-12 h-12 rounded-full shadow-[0_8px_24px_rgba(55,48,163,0.2)] flex items-center justify-center hover:bg-primary/90 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      aria-label="پشتیبانی آنلاین"
      title="پشتیبانی آنلاین"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  );
};

export default SupportButton;