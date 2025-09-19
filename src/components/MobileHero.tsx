import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const MobileHero: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification('PWA Suite', {
          body: 'Notifications enabled! You\'ll receive updates.',
          icon: '/placeholder.svg'
        });
      }
    }
  };

  const installPWA = () => {
    // PWA install prompt would be handled here
    alert('Add to Home Screen for the best experience!');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
            {isOnline ? '🟢 Online' : '🔴 Offline Mode'}
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Mobile-First
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
            PWA Suite
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Progressive Web App with offline capabilities, push notifications, and responsive design. 
          Built with Vue.js for optimal mobile performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            onClick={installPWA}
          >
            Install App
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            onClick={requestNotificationPermission}
          >
            Enable Notifications
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Mobile Optimized</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">Offline</div>
            <div className="text-gray-300">Works Anywhere</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">Fast</div>
            <div className="text-gray-300">Lightning Speed</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default MobileHero;