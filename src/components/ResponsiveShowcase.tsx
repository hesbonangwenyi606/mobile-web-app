import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ResponsiveShowcase: React.FC = () => {
  const devices = [
    {
      name: 'Mobile First',
      description: 'Optimized for touch interactions and small screens',
      image: 'https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758304905861_89092b32.webp',
      specs: ['Touch Optimized', 'Gesture Support', 'Thumb Navigation']
    },
    {
      name: 'Tablet Ready',
      description: 'Adaptive layouts that scale beautifully',
      image: 'https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758304907641_f61ef2cd.webp',
      specs: ['Flexible Grid', 'Split Views', 'Multi-column']
    },
    {
      name: 'Desktop Enhanced',
      description: 'Full-featured experience for larger screens',
      image: 'https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758304909404_08b874f1.webp',
      specs: ['Keyboard Shortcuts', 'Multi-tasking', 'Advanced Features']
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Responsive Across All Devices
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Mobile-first design that adapts seamlessly to any screen size
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-700">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white text-xl">
                  {device.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {device.description}
                </p>
                <div className="space-y-2">
                  {device.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveShowcase;