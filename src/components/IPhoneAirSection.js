import React from 'react';

const IPhoneAirSection = () => {
  return (
    <section className="product-section bg-apple-light-gray">
      <div className="section-padding max-w-6xl mx-auto text-center">
        <h2 className="text-32 sm:text-48 lg:text-56 font-semibold text-black mb-4">
          iPhone Air
        </h2>
        <p className="text-19 sm:text-21 text-black mb-2">
          The thinnest iPhone ever.
        </p>
        <p className="text-19 sm:text-21 text-black mb-8">
          With the power of pro inside.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary">
            Buy
          </button>
        </div>

        {/* iPhone Air visualization */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            {/* Hand holding the phone */}
            <div className="w-96 h-64 relative">
              {/* Simplified hand representation */}
              <div className="absolute right-0 top-8 w-32 h-48 bg-gradient-to-l from-amber-100 to-amber-200 rounded-l-full opacity-80"></div>
              
              {/* iPhone Air - ultra thin profile */}
              <div className="absolute left-8 top-16 w-64 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full shadow-lg">
                {/* Side buttons */}
                <div className="absolute -left-1 top-1 w-1 h-2 bg-gray-400 rounded-l"></div>
                <div className="absolute -right-1 top-1 w-1 h-2 bg-gray-400 rounded-r"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPhoneAirSection;