import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <>
      {/* Top banner */}
      <div className="bg-apple-gray text-white text-center py-2 px-4 text-sm">
        <span>Vill att annat land eller annan för att vi ska använda som finns där du är och handla online.</span>
        <div className="inline-flex items-center ml-4">
          <select className="bg-transparent border border-gray-600 rounded px-2 py-1 text-xs">
            <option>Sverige</option>
          </select>
          <button className="ml-2 text-xs underline">Fortsätt</button>
          <button className="ml-2 text-gray-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Apple logo */}
            <div className="flex-shrink-0">
              <svg className="w-4 h-5 text-white" viewBox="0 0 14 18" fill="currentColor">
                <path d="M12.5 9.5c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.1-4-2.1-1.7-.2-3.3 1-4.2 1-.9 0-2.3-1-3.8-.9C1.1 3.3-.4 4.7-.4 7.5c0 2.8 1.1 5.8 2.4 7.8.7 1 1.4 2.1 2.4 2.1.9 0 1.2-.6 2.3-.6s1.3.6 2.3.6c1 0 1.6-1 2.3-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.2z" />
                <path d="M10.1 2.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.7-.9 1.6-.8 2.6 1 .1 2-.5 2.5-1.2z" />
              </svg>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white text-xs font-normal hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300">
                <Search className="w-4 h-4" />
              </button>
              <button className="text-white hover:text-gray-300">
                <ShoppingCart className="w-4 h-4" />
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-white text-lg font-normal hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;