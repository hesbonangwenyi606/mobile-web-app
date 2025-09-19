import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const PWAFeatures: React.FC = () => {
  const features = [
    {
      title: 'Offline First',
      description: 'Works seamlessly without internet connection',
      image: 'https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758304896995_5a60271d.webp',
      badge: 'Core Feature'
    },
    {
      title: 'Push Notifications',
      description: 'Real-time updates and engagement',
      image: 'https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758304898716_54740a81.webp',
      badge: 'Interactive'
    },
    {
      title: 'Responsive Design',
      description: 'Optimized for all screen sizes',
      image: 'https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758304900552_8fe0a5f8.webp',
      badge: 'Mobile-First'
    },
    {
      title: 'App-like Experience',
      description: 'Native app feel in the browser',
      image: 'https://d64gsuwffb70l.cloudfront.net/68cae6df3aadd5ea68d69518_1758304902354_ff364151.webp',
      badge: 'PWA'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Progressive Web App Features
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Modern web technologies delivering native app experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader className="pb-2">
                <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {feature.badge}
                </Badge>
                <CardTitle className="text-white text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PWAFeatures;