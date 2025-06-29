import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Rocket, Globe } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Michael Torres',
      role: 'Backend Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Emma Wilson',
      role: 'AI/ML Specialist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

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
              About <span className="text-neolance-cyan glow-text">Neolance</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're a team of passionate freelancers dedicated to delivering exceptional 
              digital solutions for businesses worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle title="Our Story" />
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Neolance was founded with a vision to bridge the gap between high-quality freelance 
              work and affordable pricing. Our team of professionals brings together diverse skills 
              and experiences from across the globe.
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We understand the challenges businesses face in the rapidly evolving digital landscape. 
              That's why we've assembled a team of experts who stay at the forefront of technology 
              trends to deliver innovative solutions.
            </motion.p>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our mission is simple: to provide exceptional digital services that help our clients 
              succeed in an increasingly competitive market, without breaking the bank.
            </motion.p>
          </div>
          
          <motion.div 
            className="glass-effect p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-neolance-cyan mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-neolance-cyan mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-neolance-cyan mb-2">12</div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-neolance-cyan mb-2">5</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-neolance-dark-blue/50">
        <SectionTitle 
          title="Our Values" 
          subtitle="The principles that guide our work and relationships with clients."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard className="glass-effect p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-neolance-purple/20 p-3 rounded-lg">
                <Users className="w-6 h-6 text-neolance-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
                <p className="text-gray-400">
                  We view ourselves as partners in our clients' success, working collaboratively to achieve their goals.
                </p>
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="glass-effect p-6" delay={0.1}>
            <div className="flex items-start space-x-4">
              <div className="bg-neolance-purple/20 p-3 rounded-lg">
                <Target className="w-6 h-6 text-neolance-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Quality Focus</h3>
                <p className="text-gray-400">
                  We never compromise on quality, ensuring every project meets the highest standards.
                </p>
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="glass-effect p-6" delay={0.2}>
            <div className="flex items-start space-x-4">
              <div className="bg-neolance-purple/20 p-3 rounded-lg">
                <Rocket className="w-6 h-6 text-neolance-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-400">
                  We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="glass-effect p-6" delay={0.3}>
            <div className="flex items-start space-x-4">
              <div className="bg-neolance-purple/20 p-3 rounded-lg">
                <Globe className="w-6 h-6 text-neolance-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
                <p className="text-gray-400">
                  Our diverse team brings global insights and cultural awareness to every project.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding">
        <SectionTitle 
          title="Meet Our Team" 
          subtitle="The talented professionals behind Neolance's success."
          centered
        />
        
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="glass-effect overflow-hidden rounded-xl card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-neolance-cyan">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default About;