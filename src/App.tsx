import React, { useState } from 'react';

const ViteLogo: React.FC = () => (
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img src="https://vitejs.dev/logo.svg" className="h-24 p-2 transition-transform duration-300 hover:scale-110" alt="Vite logo" />
  </a>
);

const ReactLogo: React.FC = () => (
  <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      className="h-24 p-2 text-[#61DAFB] animate-spin"
      style={{ animationDuration: '20s' }}
      fill="currentColor"
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  </a>
);

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 font-sans">
      <header className="text-center">
        <div className="flex justify-center items-center space-x-4 mb-8">
          <ViteLogo />
          <span className="text-6xl font-thin text-gray-600">+</span>
          <ReactLogo />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Vite + React
        </h1>
        <p className="text-lg text-gray-400">A modern starter template.</p>
      </header>
      
      <main className="mt-10 p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg w-full max-w-md text-center">
        <div className="card">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg shadow-indigo-600/30"
          >
            Count is {count}
          </button>
          <p className="mt-6 text-sm text-gray-500">
            Edit <code>src/App.tsx</code> and save to test HMR.
          </p>
        </div>
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        <p>Click on the Vite and React logos to learn more.</p>
      </footer>
    </div>
  );
};

export default App;