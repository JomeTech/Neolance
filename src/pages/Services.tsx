import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Brain, GitBranch, Bot, CheckCircle, CreditCard, Workflow, Cloud } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
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
  },
  {
    id: 'payment-gateway',
    icon: <CreditCard size={40} />,
    title: 'Payment Gateway Integration',
    description: 'Secure and seamless payment solutions to enhance your e-commerce and business transactions.',
    technologies: ['Stripe', 'PayPal', 'Square', 'Braintree', 'Authorize.Net', 'Payment APIs'],
    features: [
      'Custom payment gateway integration',
      'Multi-currency support',
      'Secure transaction processing',
      'Recurring payment setup',
      'Payment analytics'
    ],
    color: 'from-neolance-pink to-neolance-purple'
  },
  {
    id: 'workflow',
    icon: <Workflow size={40} />,
    title: 'Workflow Optimization',
    description: 'Streamline business processes with customized workflow solutions and automation.',
    technologies: ['Airtable', 'Trello', 'Asana', 'Jira', 'Workflow Engines', 'Automation Tools'],
    features: [
      'Process mapping and analysis',
      'Workflow automation',
      'Task assignment and tracking',
      'Performance monitoring',
      'Integration with existing tools'
    ],
    color: 'from-neolance-blue to-neolance-cyan'
  },
  {
    id: 'cloud-deployment',
    icon: <Cloud size={40} />,
    title: 'Cloud Deployment & Migration',
    description: 'Efficient cloud solutions for deployment and migration to enhance scalability and performance.',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Heroku', 'CloudFormation'],
    features: [
      'Cloud infrastructure setup',
      'Application migration',
      'Scalability planning',
      'Backup and disaster recovery',
      'Cost optimization'
    ],
    color: 'from-neolance-purple to-neolance-blue'
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {services.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className="scroll-mt-24"
              >
                <AnimatedCard 
                  className="glass-effect p-6 rounded-xl overflow-hidden relative flex flex-col h-full"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 bg-gradient-to-r ${service.color} p-4 text-white`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-300 text-base md:text-lg mb-4 line-clamp-2">{service.description}</p>
                      
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 mb-4 flex-grow">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;