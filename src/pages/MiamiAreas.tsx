
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Camera, Music, Coffee, Utensils, ShoppingBag } from 'lucide-react';

const MiamiAreas = () => {
  const areas = [
    {
      id: 'south-beach',
      name: 'South Beach',
      description: 'Famous for its Art Deco architecture, pristine beaches, and vibrant nightlife.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      highlights: ['Ocean Drive', 'Art Deco District', 'Lincoln Road', 'Beach Clubs'],
      icon: Camera,
      businesses: 185
    },
    {
      id: 'little-havana',
      name: 'Little Havana',
      description: 'The heart of Miami\'s Cuban culture with authentic food, music, and traditions.',
      image: 'https://images.unsplash.com/photo-1555400082-b1bdc36e6000?w=400&h=300&fit=crop',
      highlights: ['Calle Ocho', 'Domino Park', 'Cuban Coffee', 'Live Music'],
      icon: Music,
      businesses: 125
    },
    {
      id: 'wynwood',
      name: 'Wynwood',
      description: 'Hip arts district known for colorful street murals, galleries, and trendy eateries.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      highlights: ['Wynwood Walls', 'Art Galleries', 'Craft Breweries', 'Street Art'],
      icon: Camera,
      businesses: 98
    },
    {
      id: 'downtown-miami',
      name: 'Downtown Miami',
      description: 'Business and financial district with modern skyscrapers and waterfront dining.',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop',
      highlights: ['Bayfront Park', 'Brickell Avenue', 'Metromover', 'Bayside Marketplace'],
      icon: ShoppingBag,
      businesses: 156
    },
    {
      id: 'coral-gables',
      name: 'Coral Gables',
      description: 'Elegant Mediterranean-style architecture with upscale shopping and dining.',
      image: 'https://images.unsplash.com/photo-1551727195-3e58e9d5069e?w=400&h=300&fit=crop',
      highlights: ['Miracle Mile', 'Venetian Pool', 'Biltmore Hotel', 'University of Miami'],
      icon: Coffee,
      businesses: 87
    },
    {
      id: 'coconut-grove',
      name: 'Coconut Grove',
      description: 'Bohemian neighborhood with lush landscapes, marinas, and outdoor cafes.',
      image: 'https://images.unsplash.com/photo-1571850248962-b99aad21f520?w=400&h=300&fit=crop',
      highlights: ['CocoWalk', 'Peacock Park', 'Marina', 'Outdoor Dining'],
      icon: Coffee,
      businesses: 74
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Miami Areas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Miami's diverse neighborhoods, each with its own unique character, 
            culture, and business scene.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {areas.map((area) => {
            const IconComponent = area.icon;
            return (
              <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="text-white p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-5 h-5" />
                        <h3 className="text-xl font-bold">{area.name}</h3>
                      </div>
                      <p className="text-sm opacity-90">{area.businesses} businesses</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">View on Map</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Utensils className="w-4 h-4" />
                      <span className="text-sm">Explore Businesses</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">More Areas Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're continuously expanding our coverage to include more Miami neighborhoods. 
                Stay tuned for Aventura, Homestead, Key Biscayne, and many more!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Aventura', 'Homestead', 'Key Biscayne', 'Pinecrest', 'Palmetto Bay', 'Doral'].map((area) => (
                  <span key={area} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MiamiAreas;
