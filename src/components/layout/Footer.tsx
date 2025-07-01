import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Github 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neolance-dark-blue/80 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Zap className="h-7 w-7 text-neolance-cyan" />
              <span className="text-xl font-display font-bold text-white">
                Neo<span className="text-neolance-cyan">lance</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional freelance solutions for businesses and startups worldwide. Fast, affordable, and high-quality results.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-neolance-cyan transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-neolance-cyan transition-colors">
                <Twitter size={20} />
              </a>
              
              
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-neolance-cyan transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/referral" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Referral Program
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-display text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Backend APIs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  AI/ML Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  DevOps & CI/CD
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neolance-cyan transition-colors">
                  Process Automation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-display text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-neolance-cyan flex-shrink-0 mt-1" />
                <span className="text-gray-400">venaskumar812@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-neolance-cyan flex-shrink-0 mt-1" />
                <span className="text-gray-400">jayasuryakarthi55@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-neolance-cyan flex-shrink-0 mt-1" />
                <span className="text-gray-400">Bangalore</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Neolance. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-neolance-cyan text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-neolance-cyan text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-neolance-cyan text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;