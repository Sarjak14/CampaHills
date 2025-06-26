import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', nepali: 'गृह' },
    { name: 'About', path: '/about', nepali: 'हाम्रो बारे' },
    { name: 'Projects', path: '/projects', nepali: 'परियोजनाहरु' },
    { name: 'Contact', path: '/contact', nepali: 'सम्पर्क' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent"
            >
              CampaHills Technologies
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : scrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-green-300'
                  }`}
                >
                  {item.name}
                  <span className="text-xs ml-1 opacity-70">{item.nepali}</span>
                </motion.div>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-red-500"
                  />
                )}
              </Link>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-gray-700' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-gray-700' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-blue-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {item.name} <span className="text-xs opacity-70">{item.nepali}</span>
                </Link>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;