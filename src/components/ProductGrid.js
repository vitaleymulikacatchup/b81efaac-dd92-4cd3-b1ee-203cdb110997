import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      title: 'WATCH SERIES 11',
      subtitle: 'The ultimate way to watch your health.',
      bgColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      image: 'watch'
    },
    {
      title: 'iPad Pro',
      subtitle: 'Advanced AI performance. And game-changing capabilities.',
      bgColor: 'bg-black',
      textColor: 'text-white',
      image: 'ipad'
    },
    {
      title: 'AirPods Pro 3',
      subtitle: 'The world\'s best in-ear Active Noise Cancellation.',
      bgColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      image: 'airpods'
    },
    {
      title: 'MacBook Air',
      subtitle: 'Sky high performance with M4.',
      bgColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      image: 'macbook-air'
    },
    {
      title: 'Trade In',
      subtitle: 'Get $180-$800 in credit when you trade in iPhone 12 or higher.',
      bgColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      image: 'trade-in'
    },
    {
      title: 'Card',
      subtitle: 'Get up to 3% Daily Cash back with every Apple Card purchase.',
      bgColor: 'bg-apple-light-gray',
      textColor: 'text-black',
      image: 'card'
    }
  ];

  return (
    <section className="py-8">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} ${product.textColor} rounded-2xl overflow-hidden relative min-h-96 flex flex-col justify-center items-center text-center p-8`}
            >
              <div className="z-10">
                <h3 className="text-24 sm:text-28 font-semibold mb-2">
                  {product.title}
                </h3>
                <p className="text-17 sm:text-19 mb-6 max-w-sm">
                  {product.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="apple-button-primary">
                    Learn more
                  </button>
                  <button className={`apple-button-secondary ${product.textColor === 'text-white' ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}>
                    Buy
                  </button>
                </div>
              </div>
              
              {/* Product visualization */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {product.image === 'watch' && (
                  <div className="w-32 h-32 bg-blue-500 rounded-2xl relative">
                    <div className="absolute inset-2 bg-black rounded-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                  </div>
                )}
                {product.image === 'ipad' && (
                  <div className="w-48 h-64 bg-gray-800 rounded-2xl relative">
                    <div className="absolute inset-4 bg-black rounded-xl"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"></div>
                  </div>
                )}
                {product.image === 'airpods' && (
                  <div className="flex space-x-4">
                    <div className="w-8 h-16 bg-white rounded-full"></div>
                    <div className="w-8 h-16 bg-white rounded-full"></div>
                  </div>
                )}
                {product.image === 'macbook-air' && (
                  <div className="w-48 h-32 bg-gray-300 rounded-t-2xl relative">
                    <div className="absolute inset-2 bg-black rounded-t-xl"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;