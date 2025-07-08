import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import PillarsSection from '@/components/Home/PillarsSection';
import ServicesPreview from '@/components/Home/ServicesPreview';

const HomePage: React.FC = () => {
  return (
    <Layout 
      title="Alphacore Development - Power, Concentration, Discipline"
      description="Building more than athletes—we shape resilient humans through Power, Concentration, and Discipline. Discover our Academy, VitaCore Training, and Recovery Systems."
    >
      <Hero />
      <PillarsSection />
      <ServicesPreview />
    </Layout>
  );
};

export default HomePage;