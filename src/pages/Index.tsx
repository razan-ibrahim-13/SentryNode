
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioCarousel from '../components/PortfolioCarousel';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/ServicesSection';
import InstagramSection from '../components/InstagramSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-slate-900">
      <Navbar />
      <HeroSection />
      <PortfolioCarousel />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
