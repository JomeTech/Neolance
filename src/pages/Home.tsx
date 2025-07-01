import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientReviews from '../components/home/ClientReviews';
import DeveloperProfiles from '../components/home/DeveloperProfiles';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientReviews />
      <DeveloperProfiles />
      <CTASection />
    </PageTransition>
  );
};

export default Home;