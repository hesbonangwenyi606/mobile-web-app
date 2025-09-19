import React, { useEffect } from 'react';
import Navigation from './Navigation';
import MobileHero from './MobileHero';
import PWAFeatures from './PWAFeatures';
import ResponsiveShowcase from './ResponsiveShowcase';
import Services from './Services';
import Metrics from './Metrics';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <main>
        <MobileHero />
        
        <section id="features">
          <PWAFeatures />
        </section>
        
        <section id="responsive">
          <ResponsiveShowcase />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="metrics">
          <Metrics />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppLayout;
