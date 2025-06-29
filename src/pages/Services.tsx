import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Brain, GitBranch, Bot, CheckCircle } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

const services = [
  {
    id: 'web-development',
    icon: <Code size={40} />,
    title: 'Web Development',
    description: 'Create responsive, fast, and engaging web applications that deliver exceptional user experiences.',
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Custom web application development',
      'E-commerce solutions',
      'Progressive Web Apps (PWAs)',
      'Website maintenance and optimization',
      'Performance optimization'
    ],
    color: 'from-neolance-blue to-neolance-cyan'
  },
  {
    id: 'ui-ux-design',
    icon: <Layout size={40} />,
    title: 'UI/UX Design',
    description: 'Design intuitive interfaces that engage users and boost conversion rates for your digital products.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Prototyping', 'User Testing'],
    features: [
      'User research and personas',
      'Wireframing and prototyping',
      'UI design systems',
      'Responsive design',
      'Usability testing'
    ],
    color: 'from-neolance-pink to-neolance-purple'
  },
  {
    id: 'backend-apis',
    icon: <Database size={40} />,
    title: 'Backend APIs',
    description: 'Build robust, scalable backend services and APIs that power your applications effectively.',
    technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'RESTful APIs', 'GraphQL'],
    features: [
      'API design and development',
      'Database design and optimization',
      'Authentication and authorization',
      'Microservices architecture',
      'API documentation'
    ],
    color: 'from-neolance-purple to-neolance-blue'
  },
  {
    id: 'ai-ml',
    icon: <Brain size={40} />,
    title: 'AI/ML Applications',
    description: 'Leverage the power of artificial intelligence and machine learning to gain insights and automate processes.',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'NLP', 'Computer Vision', 'Data Analysis'],
    features: [
      'Custom AI model development',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'AI integration with existing systems'
    ],
    color: 'from-neolance-cyan to-[#00c4b4]'
  },
  {
    id: 'devops',
    icon: <GitBranch size={40} />,
    title: 'DevOps & CI/CD',
    description: 'Streamline your development workflows and deploy with confidence using modern DevOps practices.',
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'Azure', 'Terraform'],
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Cloud deployment and management',
      'Monitoring and alerting',
      'Performance optimization'
    ],
    color: 'from-[#ff9500] to-neolance-pink'
  },
  {
    id: 'automation',
    icon: <Bot size={40} />,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to improve efficiency and reduce human error.',
    technologies: ['Python', 'Node.js', 'Zapier', 'Make', 'Google Cloud', 'Microsoft Power Automate'],
    features: [
      'Business process automation',
      'Data extraction and processing',
      'Workflow optimization',
      'Custom automation scripts',
      'Integration between systems'
    ],
    color: 'from-neolance-blue to-[#324ea8]'
  }
];

const Services: React.FC = () => {
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
              Our <span className="text-neolance-cyan glow-text">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive freelance solutions tailored to meet your business needs and drive digital success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index}
              id={service.id}
              className="scroll-mt-24"
            >
              <AnimatedCard className="glass-effect p-8 rounded-xl overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${service.color}`}></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 bg-gradient-to-r ${service.color} p-4 text-white`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                    
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="glass-effect p-6 border-l-4 border-neolance-cyan">
                      <h4 className="text-xl font-semibold mb-2">Looking for {service.title}?</h4>
                      <p className="text-gray-400 mb-4">
                        Our expert team is ready to help you achieve your business goals with 
                        custom {service.title.toLowerCase()} solutions.
                      </p>
                      <a 
                        href="/contact" 
                        className="btn-primary inline-block"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;