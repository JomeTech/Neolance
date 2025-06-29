import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-neolance-dark-purple/50"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-neolance-purple/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neolance-blue/20 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your <span className="text-neolance-cyan glow-text">Digital Presence</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with our team today and discover how our freelance services 
            can help your business thrive in the digital world.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;