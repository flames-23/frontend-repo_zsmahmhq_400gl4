import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="home" className="font-['IBM Plex Sans',ui-sans-serif] text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <Checkout />
      <Footer />
    </div>
  );
};

export default App;
