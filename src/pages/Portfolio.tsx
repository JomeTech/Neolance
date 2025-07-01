import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

// Project categories
const categories = [
  'All',
  'Web Development',
  'UI/UX Design',
  'Backend APIs',
  'AI/ML',
  'DevOps',
  'Automation'
];

// Project data
const projects = [
  {
    title: 'TechVision E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A modern e-commerce platform built with Next.js and integrated with Stripe payment processing.',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    client: 'TechVision Inc.',
    demoUrl: '#'
  },
  {
    title: 'HealthTrack Mobile App UI',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comprehensive UI/UX design for a health tracking mobile application with intuitive user flows.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
    client: 'HealthTrack',
    demoUrl: '#'
  },
  {
    title: 'Financial Services API',
    category: 'Backend APIs',
    image: 'https://images.pexels.com/photos/8370424/pexels-photo-8370424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Secure and scalable API for financial services with complex transaction handling and reporting.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    client: 'FinSecure',
    demoUrl: '#'
  },
  {
    title: 'Customer Sentiment Analysis',
    category: 'AI/ML',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Machine learning model that analyzes customer feedback and support tickets to identify sentiment patterns.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Data Visualization'],
    client: 'RetailGiant',
    demoUrl: '#'
  },
  {
    title: 'CI/CD Pipeline for SaaS Platform',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comprehensive CI/CD pipeline implementation for a SaaS platform, improving deployment frequency and reliability.',
    technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'AWS'],
    client: 'CloudSoft',
    demoUrl: '#'
  },
  {
    title: 'HR Process Automation Suite',
    category: 'Automation',
    image: 'https://images.pexels.com/photos/5688966/pexels-photo-5688966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Automated HR workflows including onboarding, time tracking, and performance review processes.',
    technologies: ['Node.js', 'Google Workspace API', 'Zapier', 'Make'],
    client: 'Global HR Solutions',
    demoUrl: '#'
  },
  {
    title: 'Restaurant Booking System',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Online booking system for restaurants with table management and customer notification features.',
    technologies: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    client: 'Fine Dining Group',
    demoUrl: '#'
  },
  {
    title: 'Inventory Prediction Model',
    category: 'AI/ML',
    image: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'ML model that predicts inventory needs based on historical data and seasonal trends.',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'Visualization'],
    client: 'SupplyChain Pro',
    demoUrl: '#'
  },
  {
    title: 'CI/CD Integration',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Integrated and automated deployment pipelines using Jenkins, GitHub Actions, and CircleCI for robust CI/CD workflows across multiple environments.',
    technologies: ['Jenkins', 'GitHub Actions', 'CircleCI', 'CI/CD', 'Automation'],
    client: 'Enterprise Solutions',
    demoUrl: '#'
  },
  {
    title: 'GCP Services Implementation',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Designed and deployed Google Cloud Platform infrastructure including VM instances, VPCs, subnets, internal IP networking, Cloud Run, GKE, Cloud SQL, and DNS for scalable cloud-native applications.',
    technologies: ['GCP', 'VM', 'VPC', 'Subnets', 'Cloud Run', 'GKE', 'Cloud SQL', 'DNS', 'Networking'],
    client: 'Cloud Innovators',
    demoUrl: '#'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-neolance-dark-purple/50"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neolance-purple/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neolance-blue/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-neolance-cyan glow-text">Portfolio</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding">
        <SectionTitle 
          title="Our Work" 
          subtitle="Browse through our portfolio of projects across various industries and technologies."
          centered
        />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category 
                  ? 'bg-neolance-cyan text-neolance-dark font-medium' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <AnimatedCard 
              key={index}
              delay={index * 0.1}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neolance-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-neolance-cyan font-medium mb-4">{project.category}</p>
                    <button
                      className="btn-secondary py-2 px-4 text-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
        
        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-neolance-dark-blue rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-72 md:h-96 object-cover"
            />
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                  <p className="text-neolance-cyan">{selectedProject.category}</p>
                </div>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-semibold mb-3">Project Overview</h4>
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Project Details</h4>
                  
                  <div className="mb-4">
                    <p className="text-gray-400">Client:</p>
                    <p className="font-medium">{selectedProject.client}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-400">Category:</p>
                    <p className="font-medium">{selectedProject.category}</p>
                  </div>
                  
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary py-2 w-full flex items-center justify-center gap-2"
                  >
                    View Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </PageTransition>
  );
};

export default Portfolio;
