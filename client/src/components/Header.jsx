import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mic, Volume2 } from 'lucide-react';

const AnimatedLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" className="h-16 w-auto">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor:"#4A90E2", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#5AF7B0", stopOpacity:1}} />
      </linearGradient>
    </defs>
    <path className="soundwave1" d="M30 60 Q45 30, 60 60 T90 60" stroke="url(#grad1)" strokeWidth="4" fill="none"/>
    <path className="soundwave2" d="M20 60 Q40 20, 60 60 T100 60" stroke="url(#grad1)" strokeWidth="4" fill="none"/>
    <path className="soundwave3" d="M10 60 Q35 10, 60 60 T110 60" stroke="url(#grad1)" strokeWidth="4" fill="none"/>
    <text x="130" y="70" fontFamily="Inter, sans-serif" fontSize="36" fontWeight="bold" fill="#333333">VocalTech</text>
    <style>{`
      @keyframes pulse {
        0% { opacity: 0.3; }
        50% { opacity: 1; }
        100% { opacity: 0.3; }
      }
      .soundwave1 { animation: pulse 2s infinite; }
      .soundwave2 { animation: pulse 2s infinite 0.3s; }
      .soundwave3 { animation: pulse 2s infinite 0.6s; }
    `}</style>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <AnimatedLogo />
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-base font-medium text-gray-500 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/demo"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              <Mic className="mr-2 h-5 w-5" /> Request Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition duration-300"
            >
              <Volume2 className="mr-2 h-5 w-5" /> Contact Us
            </Link>
          </nav>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/demo"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Request Demo
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;