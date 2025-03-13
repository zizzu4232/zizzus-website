
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
