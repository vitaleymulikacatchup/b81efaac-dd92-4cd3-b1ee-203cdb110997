import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-black text-white relative overflow-hidden">
      <div className="section-padding max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-32 sm:text-48 lg:text-56 font-semibold mb-2">
            iPhone 17 Pro
          </h1>
          <p className="text-21 sm:text-24 text-gray-300 mb-8">
            All out Pro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary">
              Buy
            </button>
          </div>
        </div>
        
        {/* iPhone 17 Pro Image */}
        <div className="relative flex justify-center items-center">
          <div className="w-80 h-96 sm:w-96 sm:h-112 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl transform rotate-12 shadow-2xl">
              {/* Camera module */}
              <div className="absolute top-6 left-6 w-24 h-16 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-700"></div>
                  <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-700"></div>
                  <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-700"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              {/* Flash */}
              <div className="absolute top-6 right-8 w-3 h-3 bg-white rounded-full"></div>
              {/* Microphone */}
              <div className="absolute top-12 right-6 w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;