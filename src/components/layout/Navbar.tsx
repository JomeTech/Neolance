import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        duration: 0.5 
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neolance-dark-blue/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-neolance-cyan" />
            <span className="text-2xl font-display font-bold text-white">
              Neo<span className="text-neolance-cyan">lance</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/services" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
            <NavLink to="/portfolio" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Portfolio</NavLink>
            <NavLink to="/referral" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Referral</NavLink>
            <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-5 border-t border-gray-700 bg-neolance-dark-blue/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-4">
            <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</NavLink>
            <NavLink to="/referral" className="nav-link" onClick={closeMenu}>Referral</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;