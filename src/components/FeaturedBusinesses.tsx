
import React from 'react';
import BusinessCard from './BusinessCard';

const FeaturedBusinesses = () => {
  const featuredBusinesses = [
    {
      id: '1',
      name: 'Versailles Restaurant',
      category: 'Cuban Restaurant',
      rating: 4.7,
      reviewCount: 1845,
      address: '3555 SW 8th St, Miami, FL 33135',
      phone: '(305) 444-0240',
      hours: 'Open until 11:00 PM',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      description: 'Iconic Cuban restaurant in Little Havana serving authentic Cuban cuisine since 1971.',
      tags: ['Cuban Food', 'Traditional', 'Historic'],
      isOpen: true,
    },
    {
      id: '2',
      name: 'The Broken Shaker',
      category: 'Cocktail Bar',
      rating: 4.6,
      reviewCount: 892,
      address: '2727 Indian Creek Dr, Miami Beach, FL 33140',
      phone: '(305) 531-2727',
      hours: 'Open until 2:00 AM',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
      description: 'Award-winning cocktail bar with tropical vibes and craft cocktails in Miami Beach.',
      tags: ['Craft Cocktails', 'Outdoor Seating', 'Live Music'],
      isOpen: true,
    },
    {
      id: '3',
      name: 'Wynwood Walls',
      category: 'Art Gallery',
      rating: 4.8,
      reviewCount: 3241,
      address: '2516 NW 2nd Ave, Miami, FL 33127',
      phone: '(305) 531-4411',
      hours: 'Open until 6:00 PM',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      description: 'World-famous outdoor street art museum showcasing large-scale murals by renowned artists.',
      tags: ['Street Art', 'Photography', 'Tours Available'],
      isOpen: true,
    },
    {
      id: '4',
      name: 'Miami Marine Stadium',
      category: 'Boat Rentals',
      rating: 4.5,
      reviewCount: 287,
      address: '3501 Rickenbacker Cswy, Miami, FL 33149',
      phone: '(305) 361-6767',
      hours: 'Closed - Opens at 8:00 AM',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      description: 'Premier boat rental service offering luxury yachts and speedboats for Miami waters.',
      tags: ['Boat Rentals', 'Water Sports', 'Luxury'],
      isOpen: false,
    },
    {
      id: '5',
      name: 'Pérez Art Museum Miami',
      category: 'Museum',
      rating: 4.4,
      reviewCount: 1567,
      address: '1103 Biscayne Blvd, Miami, FL 33132',
      phone: '(305) 375-3000',
      hours: 'Open until 6:00 PM',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      description: 'Contemporary art museum featuring international artists and stunning architecture.',
      tags: ['Contemporary Art', 'Architecture', 'Educational'],
      isOpen: true,
    },
    {
      id: '6',
      name: 'Ball & Chain',
      category: 'Live Music Venue',
      rating: 4.3,
      reviewCount: 624,
      address: '1513 SW 8th St, Miami, FL 33135',
      phone: '(305) 643-7820',
      hours: 'Open until 3:00 AM',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      description: 'Historic Little Havana venue featuring live salsa music, dancing, and authentic Cuban atmosphere.',
      tags: ['Live Music', 'Dancing', 'Historic Venue'],
      isOpen: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Miami Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best of Miami, from authentic Cuban cuisine to world-class art and nightlife
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
