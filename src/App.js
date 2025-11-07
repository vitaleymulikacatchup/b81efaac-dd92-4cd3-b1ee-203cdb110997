import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IPhoneAirSection from './components/IPhoneAirSection';
import MacBookProSection from './components/MacBookProSection';
import ProductGrid from './components/ProductGrid';
import AppleTVSection from './components/AppleTVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <IPhoneAirSection />
        <MacBookProSection />
        <ProductGrid />
        <AppleTVSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;