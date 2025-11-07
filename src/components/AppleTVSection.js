import React from 'react';

const AppleTVSection = () => {
  const shows = [
    {
      title: 'LASSO',
      bgColor: 'bg-blue-400',
      textColor: 'text-white'
    },
    {
      title: 'PLURIBUS',
      bgColor: 'bg-yellow-400',
      textColor: 'text-black',
      featured: true
    },
    {
      title: 'SHOW 3',
      bgColor: 'bg-gray-600',
      textColor: 'text-white'
    },
    {
      title: 'SHOW 4',
      bgColor: 'bg-gray-800',
      textColor: 'text-white'
    },
    {
      title: 'SHOW 5',
      bgColor: 'bg-purple-500',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-8">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Apple TV+ logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2">
            <svg className="w-8 h-8 text-black" viewBox="0 0 32 32" fill="currentColor">
              <path d="M26.6 8.6c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1-.9 0-2.3-1-3.8-.9C15.1 2.3 13.6 3.7 13.6 6.5c0 2.8 1.1 5.8 2.4 7.8.7 1 1.4 2.1 2.4 2.1.9 0 1.2-.6 2.3-.6s1.3.6 2.3.6c1 0 1.6-1 2.3-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.2z" />
              <path d="M24.1 1.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.7-.9 1.6-.8 2.6 1 .1 2-.5 2.5-1.2z" />
            </svg>
            <span className="text-2xl font-semibold">tv</span>
          </div>
        </div>

        {/* Shows grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {shows.map((show, index) => (
            <div
              key={index}
              className={`${show.bgColor} ${show.textColor} rounded-2xl overflow-hidden relative aspect-video flex items-center justify-center ${
                show.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {show.featured ? (
                <div className="text-center p-8">
                  <h3 className="text-4xl font-bold mb-4">{show.title}</h3>
                  <div className="flex items-center justify-center space-x-4">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                      Watch now
                    </button>
                    <span className="text-sm">Sci-Fi • Drama</span>
                  </div>
                </div>
              ) : (
                <div className="text-center p-4">
                  <h4 className="text-lg font-semibold">{show.title}</h4>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom shows */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center text-white relative overflow-hidden"
            >
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-xs font-medium mb-1">Show {index + 1}</div>
                <div className="text-xs text-gray-400">Genre</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleTVSection;