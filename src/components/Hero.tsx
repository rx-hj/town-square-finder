
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SearchResults from './SearchResults';

// Sample business data - in a real app this would come from an API
const sampleBusinesses = [
  {
    id: 1,
    name: "Versailles Restaurant",
    category: "Cuban Restaurant",
    rating: 4.3,
    reviews: 2847,
    address: "3555 SW 8th St, Miami, FL",
    phone: "(305) 444-0240",
    hours: "Open until 12:00 AM",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "The Broken Shaker",
    category: "Cocktail Bar",
    rating: 4.5,
    reviews: 1432,
    address: "2727 Indian Creek Dr, Miami Beach, FL",
    phone: "(305) 531-2727",
    hours: "Open until 2:00 AM",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Joe's Stone Crab",
    category: "Seafood Restaurant",
    rating: 4.4,
    reviews: 3256,
    address: "11 Washington Ave, Miami Beach, FL",
    phone: "(305) 673-0365",
    hours: "Closed • Opens 5:00 PM",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Wynwood Walls",
    category: "Art Gallery",
    rating: 4.6,
    reviews: 8934,
    address: "2516 NW 2nd Ave, Miami, FL",
    phone: "(305) 531-4411",
    hours: "Open until 11:00 PM",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Ball & Chain",
    category: "Live Music Venue",
    rating: 4.2,
    reviews: 1876,
    address: "1513 SW 8th St, Miami, FL",
    phone: "(305) 643-7820",
    hours: "Open until 3:00 AM",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Zuma Miami",
    category: "Japanese Restaurant",
    rating: 4.5,
    reviews: 2134,
    address: "270 Biscayne Blvd Way, Miami, FL",
    phone: "(305) 577-0277",
    hours: "Open until 11:30 PM",
    image: "/placeholder.svg"
  }
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState<typeof sampleBusinesses>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in', location);
    
    // Filter businesses based on search term and location
    const filtered = sampleBusinesses.filter(business => {
      const matchesSearch = searchTerm === '' || 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = location === '' || 
        business.address.toLowerCase().includes(location.toLowerCase());
      
      return matchesSearch && matchesLocation;
    });
    
    setSearchResults(filtered);
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setSearchResults([]);
  };

  const handlePopularSearch = (term: string) => {
    setSearchTerm(term);
    // Auto-search when clicking popular terms
    const filtered = sampleBusinesses.filter(business => 
      business.name.toLowerCase().includes(term.toLowerCase()) ||
      business.category.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filtered);
    setShowResults(true);
  };

  return (
    <>
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
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
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
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
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
                  onClick={() => handlePopularSearch(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {showResults && (
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <SearchResults 
              results={searchResults}
              searchTerm={searchTerm}
              location={location}
              onClose={handleCloseResults}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
