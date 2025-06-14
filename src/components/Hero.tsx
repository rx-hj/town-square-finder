
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
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Amazing Local Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Find the best restaurants, services, and shops in your neighborhood
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
                  className="pl-12 h-14 text-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
              >
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="text-blue-100">Popular searches:</span>
            {['Restaurants', 'Coffee Shops', 'Hair Salons', 'Auto Repair', 'Gyms'].map((term) => (
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
