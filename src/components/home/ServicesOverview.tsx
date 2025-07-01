import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Layout, Database, Brain, GitBranch, Bot, CreditCard, Workflow, Cloud } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCard from '../ui/AnimatedCard';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications using React, Next.js, Vue.js, and Node.js.',
    link: '/services#web-development'
  },
  {
    icon: <Layout size={32} />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces and user experiences that engage and convert visitors.',
    link: '/services#ui-ux-design'
  },
  {
    icon: <Database size={32} />,
    title: 'Backend APIs',
    description: 'Robust and scalable API solutions using Python, Node.js, and other modern technologies.',
    link: '/services#backend-apis'
  },
  {
    icon: <Brain size={32} />,
    title: 'AI/ML Applications',
    description: 'Custom AI and machine learning solutions to automate processes and gain insights.',
    link: '/services#ai-ml'
  },
  {
    icon: <GitBranch size={32} />,
    title: 'DevOps & CI/CD',
    description: 'Streamlined development operations and continuous integration/delivery pipelines.',
    link: '/services#devops'
  },
  {
    icon: <Bot size={32} />,
    title: 'Process Automation',
    description: 'Automate manual workflows with scripts, cloud services, and integration tools.',
    link: '/services#automation'
  },
  {
    icon: <CreditCard size={32} />,
    title: 'Payment Gateway Integration',
    description: 'Secure and seamless payment solutions using Stripe, PayPal, and other payment gateways.',
    link: '/services#payment-gateway'
  },
  {
    icon: <Workflow size={32} />,
    title: 'Workflow Optimization',
    description: 'Streamline business processes with customized workflow solutions and automation.',
    link: '/services#workflow'
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud Deployment & Migration',
    description: 'Efficient cloud solutions for deployment and migration using AWS, Azure, and Google Cloud.',
    link: '/services#cloud'
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="section-padding">
      <SectionTitle 
        title="Our Services" 
        subtitle="We provide end-to-end solutions for businesses and startups looking to establish or enhance their digital presence."
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedCard key={index} delay={index * 0.1} className="glass-effect p-6">
            <div className="text-neolance-cyan mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <Link 
              to={service.link} 
              className="inline-flex items-center text-neolance-cyan hover:underline"
            >
              Learn more
            </Link>
          </AnimatedCard>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesOverview;