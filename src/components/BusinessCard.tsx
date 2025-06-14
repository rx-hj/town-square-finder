
import React from 'react';
import { Star, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BusinessCardProps {
  business: {
    id: string;
    name: string;
    category: string;
    rating: number;
    reviewCount: number;
    address: string;
    phone: string;
    hours: string;
    image: string;
    description: string;
    tags: string[];
    isOpen: boolean;
  };
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={business.isOpen ? "default" : "secondary"}>
            {business.isOpen ? 'Open' : 'Closed'}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90">
            {business.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {business.name}
          </h3>
          <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {renderStars(business.rating)}
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {business.rating}
          </span>
          <span className="text-sm text-gray-500">
            ({business.reviewCount} reviews)
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {business.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{business.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{business.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{business.hours}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {business.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
