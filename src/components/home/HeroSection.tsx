import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Code, Lightbulb, LineChart } from 'lucide-react';

const HeroSection: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const elements = parallaxRef.current.querySelectorAll('.parallax-element');
      
      elements.forEach((elem) => {
        const element = elem as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden" ref={parallaxRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="parallax-element absolute -top-10 -left-10 w-64 h-64 bg-neolance-purple/30 rounded-full blur-[100px]" data-speed="0.05"></div>
      <div className="parallax-element absolute top-1/2 -right-20 w-72 h-72 bg-neolance-blue/20 rounded-full blur-[120px]" data-speed="0.08"></div>
      <div className="parallax-element absolute -bottom-20 left-1/3 w-80 h-80 bg-neolance-cyan/20 rounded-full blur-[100px]" data-speed="0.06"></div>
      
      <div className="parallax-element absolute top-20 right-[20%] text-neolance-cyan opacity-30" data-speed="0.15">
        <Code size={60} />
      </div>
      <div className="parallax-element absolute bottom-[30%] left-[15%] text-neolance-pink opacity-30" data-speed="0.12">
        <Lightbulb size={48} />
      </div>
      <div className="parallax-element absolute top-[40%] left-[10%] text-neolance-blue opacity-30" data-speed="0.1">
        <LineChart size={42} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Freelance Excellence for the 
            <span className="text-neolance-cyan block mt-2 glow-text">Digital Age</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Expert freelance solutions for web development, design, APIs, AI/ML, 
            and automation to transform your business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;