import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, Users, DollarSign, CheckCircle, HelpCircle } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

const howItWorks = [
  {
    icon: <Users className="w-10 h-10 text-neolance-cyan" />,
    title: 'Refer a Client',
    description: 'Introduce a potential client to our services. Share our website or direct contact information with them.'
  },
  {
    icon: <Gift className="w-10 h-10 text-neolance-cyan" />,
    title: 'Client Signs Up',
    description: 'When your referral becomes our client and starts their first project, your commission is activated.'
  },
  {
    icon: <DollarSign className="w-10 h-10 text-neolance-cyan" />,
    title: 'Earn Commission',
    description: 'Receive a 5% commission on all projects completed by your referred client for a full year.'
  }
];

const faqItems = [
  {
    question: 'How is the 5% commission calculated?',
    answer: 'The 5% commission is calculated based on the total invoice amount (excluding taxes) for all projects completed by your referred client within the first year of their engagement with us.'
  },
  {
    question: 'When and how do I receive my commission payments?',
    answer: 'Commission payments are processed monthly for all qualifying invoices paid by your referred clients during the previous month. Payments are made via PayPal, bank transfer, or other methods as agreed upon.'
  },
  {
    question: 'Is there a limit to how many clients I can refer?',
    answer: 'No, there is no limit to the number of clients you can refer. You will earn commission for each qualified referral that results in a completed project.'
  },
  {
    question: 'How do I track my referrals and commissions?',
    answer: 'Once you register for our referral program, you\'ll have access to a dashboard where you can track your referred clients, ongoing projects, and earned commissions.'
  },
  {
    question: 'Do I need to be a current client to participate?',
    answer: 'No, anyone can participate in our referral program. You don\'t need to be a current or past client to refer others and earn commissions.'
  }
];

const ReferralProgram: React.FC = () => {
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
              Referral <span className="text-neolance-cyan glow-text">Program</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Earn a 5% commission by referring clients to our freelance services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Refer & Earn" />
            <p className="text-gray-300 mb-6">
              Our referral program is designed to reward you for helping us grow. When you refer a client 
              to Neolance and they complete a project with us, you'll receive a 5% commission on all their 
              projects for a full year.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're a past client, business partner, or simply someone who knows a business that 
              could benefit from our services, our referral program is open to everyone.
            </p>
            <div className="bg-neolance-cyan/10 border border-neolance-cyan/30 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                <p className="text-white">
                  <span className="font-bold">Example:</span> If your referred client spends $10,000 on projects 
                  with us over a year, you'll earn $500 in commission payments.
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary inline-flex">
              Start Referring Now
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Gift className="w-6 h-6 mr-2 text-neolance-cyan" />
              Benefits of Our Referral Program
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                <span>5% commission on all projects for 12 months</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                <span>No cap on earnings - refer as many clients as you want</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                <span>Easy tracking of your referrals and earnings</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                <span>Monthly commission payments</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                <span>Help businesses get quality freelance services</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-neolance-cyan flex-shrink-0 mt-1" />
                <span>Promotional materials available to help you refer</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-neolance-dark-blue/50">
        <SectionTitle 
          title="How It Works" 
          subtitle="Our referral program is simple and straightforward. Here's how you can start earning commissions:"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="glass-effect p-6 text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <div className="inline-block bg-neolance-dark rounded-full w-8 h-8 flex items-center justify-center mb-4">
                <span className="text-neolance-cyan font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Get answers to common questions about our referral program."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="glass-effect p-6 mb-4">
              <div className="flex items-start space-x-4">
                <HelpCircle className="w-6 h-6 text-neolance-cyan flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
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
              Ready to <span className="text-neolance-cyan glow-text">Start Earning</span>?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join our referral program today and start earning commissions by connecting businesses 
              with our expert freelance services.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact" className="btn-primary">
                Join the Referral Program
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ReferralProgram;