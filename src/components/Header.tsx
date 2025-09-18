import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Intro', href: '#intro' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-lg' 
        : 'bg-black bg-opacity-20 backdrop-blur-sm'
    }`}>
      <div className="container-custom px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={`text-2xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
            }`}>
              Co.Evolve
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-500' 
                    : 'text-white hover:text-primary-300 drop-shadow-lg'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Phone Number */}
          <div className={`hidden lg:flex items-center space-x-2 transition-colors duration-300 ${
            isScrolled ? 'text-primary-500' : 'text-white drop-shadow-lg'
          }`}>
            <Phone size={18} />
            <span className="font-medium">555-123-3456</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 font-medium px-4 py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 text-primary-500 px-4 py-2">
                <Phone size={18} />
                <span className="font-medium">555-123-3456</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;