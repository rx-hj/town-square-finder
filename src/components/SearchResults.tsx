
import React from 'react';
import { Star, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  address: string;
  phone: string;
  hours: string;
  image: string;
}

interface SearchResultsProps {
  results: Business[];
  searchTerm: string;
  location: string;
  onClose: () => void;
}

const SearchResults = ({ results, searchTerm, location, onClose }: SearchResultsProps) => {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mt-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any businesses matching "{searchTerm}" {location && `in ${location}`}
          </p>
          <Button onClick={onClose} variant="outline">
            Try a different search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Found {results.length} results for "{searchTerm}" {location && `in ${location}`}
        </h3>
        <Button onClick={onClose} variant="outline" size="sm">
          New Search
        </Button>
      </div>
      
      <div className="grid gap-4">
        {results.map((business) => (
          <div key={business.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <img 
                src={business.image} 
                alt={business.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg text-gray-900 truncate">{business.name}</h4>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{business.rating}</span>
                    <span className="text-gray-500">({business.reviews})</span>
                  </div>
                </div>
                
                <p className="text-orange-600 font-medium text-sm mb-2">{business.category}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{business.address}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{business.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{business.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
