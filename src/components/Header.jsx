import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="group flex items-center space-x-2"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-200">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="hidden sm:block">
                <span className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                  isScrolled ? '' : 'text-white'
                }`}>
                  Portfolio
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  activeSection === item.id
                    ? isScrolled 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-white bg-white/10'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg'
                  : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
              }`}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } ${isScrolled ? 'bg-white' : 'bg-gray-900'} rounded-lg mt-2 shadow-xl`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-3 mx-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-50'
                      : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 px-4 mt-2">
              <a
                href="#contact"
                onClick={() => handleNavClick('contact')}
                className={`block w-full px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;