import React from 'react';

const MacBookProSection = () => {
  return (
    <section className="product-section bg-black text-white">
      <div className="section-padding max-w-6xl mx-auto text-center">
        <h2 className="text-32 sm:text-48 lg:text-56 font-semibold mb-4">
          MacBook Pro 14"
        </h2>
        <p className="text-19 sm:text-21 text-gray-300 mb-8">
          Supercharged by M5.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary">
            Buy
          </button>
        </div>

        {/* MacBook Pro visualization */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            {/* MacBook in V shape */}
            <div className="w-96 h-64 relative">
              {/* Left side of MacBook */}
              <div className="absolute left-0 top-0 w-48 h-64 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 transform -skew-y-12 origin-bottom rounded-t-lg shadow-2xl">
                {/* Screen */}
                <div className="absolute inset-4 bg-black rounded border border-gray-600"></div>
                {/* Apple logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg className="w-6 h-7 text-gray-400" viewBox="0 0 14 18" fill="currentColor">
                    <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1-.9 0-2.3-1-3.8-.9C1.1 3.3-.4 4.7-.4 7.5c0 2.8 1.1 5.8 2.4 7.8.7 1 1.4 2.1 2.4 2.1.9 0 1.2-.6 2.3-.6s1.3.6 2.3.6c1 0 1.6-1 2.3-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.2z" />
                    <path d="M10.1 2.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.7-.9 1.6-.8 2.6 1 .1 2-.5 2.5-1.2z" />
                  </svg>
                </div>
              </div>
              
              {/* Right side of MacBook */}
              <div className="absolute right-0 top-0 w-48 h-64 bg-gradient-to-bl from-gray-600 via-gray-700 to-gray-800 transform skew-y-12 origin-bottom rounded-t-lg shadow-2xl">
                {/* Keyboard area */}
                <div className="absolute inset-4 bg-gray-800 rounded">
                  {/* Keyboard grid */}
                  <div className="grid grid-cols-12 gap-px p-2">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-600 rounded-sm"></div>
                    ))}
                  </div>
                  {/* Trackpad */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-700 rounded border border-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacBookProSection;