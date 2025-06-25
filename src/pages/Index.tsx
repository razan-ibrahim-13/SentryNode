
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CinematicSection from '../components/CinematicSection';
import PortfolioCarousel from '../components/PortfolioCarousel';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import InstagramSection from '../components/InstagramSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen">
      <Navbar />
      <HeroSection />
      <CinematicSection />
      <PortfolioCarousel />
      <AboutSection />
      <TeamSection />
      <ExperienceSection />
      <ServicesSection />
      <InstagramSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
