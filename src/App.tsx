import React from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Layout>
      <HomePage />
      {/* <ProductPage /> */}
    </Layout>
  );
};

export default App;