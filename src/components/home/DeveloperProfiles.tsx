import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const developers = [
  {
    name: 'Jayasurya',
    role: 'Devops',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['Cloud', 'Automation', 'Project Management', 'User Research'],
    github: '#',
    linkedin: '#',
    website: '#'
  },
  {
    
    name: 'VenasKumar',
    role: 'FullStack Engineer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['React', 'Node.js', 'Vite','TypeScript'],
    github: '#',
    linkedin: '#',
    website: '#'
  },
];

const DeveloperProfiles: React.FC = () => {
  return (
    <section className="section-padding">
      <SectionTitle 
        title="Meet Our Developers" 
        subtitle="Our team of expert developers brings diverse skills and experience to every project."
        centered
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {developers.map((dev, index) => (
          <motion.div
            key={index}
            className="glass-effect rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative group">
              <img 
                src={dev.image} 
                alt={dev.name} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neolance-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{dev.name}</h3>
              <p className="text-neolance-cyan mb-3">{dev.role}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {dev.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-white/5 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={dev.github}
                  className="text-gray-400 hover:text-neolance-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={dev.linkedin}
                  className="text-gray-400 hover:text-neolance-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={dev.website}
                  className="text-gray-400 hover:text-neolance-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DeveloperProfiles;