import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Clock, DollarSign, Award, Shield, Headphones, Rocket, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const reasons = [
  {
    icon: <Clock className="w-10 h-10 text-neolance-cyan" />,
    title: 'Fast Turnaround',
    description: 'We deliver projects quickly without compromising on quality, meeting tight deadlines efficiently.'
  },
  {
    icon: <DollarSign className="w-10 h-10 text-neolance-cyan" />,
    title: 'Affordable Pricing',
    description: 'Competitive rates with flexible payment options tailored to your project requirements.'
  },
  {
    icon: <Award className="w-10 h-10 text-neolance-cyan" />,
    title: 'Quality Results',
    description: 'High standards of work with meticulous attention to detail and industry best practices.'
  },
  {
    icon: <Zap className="w-10 h-10 text-neolance-cyan" />,
    title: 'Cutting-Edge Tech',
    description: 'We stay ahead of technological trends to provide innovative solutions for your business.'
  },
  {
    icon: <Shield className="w-10 h-10 text-neolance-cyan" />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security measures and reliable infrastructure for peace of mind.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: <Headphones className="w-10 h-10 text-neolance-cyan" />,
    title: '24/7 Support',
    description: 'Round-the-clock support and communication to ensure your project stays on track.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: <Rocket className="w-10 h-10 text-neolance-cyan" />,
    title: 'Scalable Solutions',
    description: 'Future-proof solutions that grow with your business and adapt to changing needs.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: <Users className="w-10 h-10 text-neolance-cyan" />,
    title: 'Expert Team',
    description: 'Experienced professionals with diverse skills and proven track records.',
    color: 'from-pink-500 to-pink-600',
  },
];

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section-padding bg-neolance-dark-blue/50">
      <SectionTitle 
        title="Why Choose Us" 
        subtitle="We combine technical expertise with business acumen to deliver outstanding results."
        centered
      />
      
      <motion.div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {reasons.map((reason, index) => (
          <motion.div 
            key={index} 
            className="glass-effect p-6 text-center"
            variants={itemVariants}
          >
            <div className="mb-4 flex justify-center">{reason.icon}</div>
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-gray-400">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;