import React from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Layout>
      {/* To view the HomePage again, uncomment the line below and comment out ProductPage. */}
       {/* <HomePage /> */}
      <ProductPage />
    </Layout>
  );
};

export default App;
