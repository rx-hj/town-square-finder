
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in', location);
    // Search functionality will be implemented here
  };

  return (
    <div className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Miami's Best Local Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            From South Beach to Little Havana, find the best restaurants, services, and shops in the Magic City
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Miami neighborhood"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="h-14 px-8 bg-pink-600 hover:bg-pink-700 text-white font-semibold transition-colors"
              >
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="text-orange-100">Popular searches:</span>
            {['Cuban Restaurants', 'Beach Bars', 'Art Galleries', 'Boat Rentals', 'Nightlife'].map((term) => (
              <button
                key={term}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-colors"
                onClick={() => setSearchTerm(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
