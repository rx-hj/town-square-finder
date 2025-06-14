
import React from 'react';
import BusinessCard from './BusinessCard';

const FeaturedBusinesses = () => {
  const featuredBusinesses = [
    {
      id: '1',
      name: 'The Garden Bistro',
      category: 'Restaurant',
      rating: 4.8,
      reviewCount: 245,
      address: '123 Main St, Downtown',
      phone: '(555) 123-4567',
      hours: 'Open until 10:00 PM',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      description: 'Farm-to-table dining experience with locally sourced ingredients and seasonal menu.',
      tags: ['Fine Dining', 'Organic', 'Outdoor Seating'],
      isOpen: true,
    },
    {
      id: '2',
      name: 'Coffee Culture',
      category: 'Coffee Shop',
      rating: 4.6,
      reviewCount: 189,
      address: '456 Oak Ave, Midtown',
      phone: '(555) 234-5678',
      hours: 'Open until 8:00 PM',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
      description: 'Artisan coffee roasted daily with cozy atmosphere perfect for work or relaxation.',
      tags: ['Free WiFi', 'Specialty Coffee', 'Pastries'],
      isOpen: true,
    },
    {
      id: '3',
      name: 'Elite Fitness Center',
      category: 'Gym',
      rating: 4.7,
      reviewCount: 312,
      address: '789 Fitness Blvd, Northside',
      phone: '(555) 345-6789',
      hours: 'Open 24 hours',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      description: 'State-of-the-art equipment with personal training and group fitness classes.',
      tags: ['24/7 Access', 'Personal Training', 'Group Classes'],
      isOpen: true,
    },
    {
      id: '4',
      name: 'Bella Hair Studio',
      category: 'Beauty Salon',
      rating: 4.9,
      reviewCount: 156,
      address: '321 Beauty Lane, Westside',
      phone: '(555) 456-7890',
      hours: 'Closed - Opens at 9:00 AM',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
      description: 'Full-service hair salon with experienced stylists specializing in cuts, color, and styling.',
      tags: ['Hair Cuts', 'Coloring', 'Styling'],
      isOpen: false,
    },
    {
      id: '5',
      name: 'TechFix Pro',
      category: 'Electronics Repair',
      rating: 4.5,
      reviewCount: 94,
      address: '654 Tech Dr, East End',
      phone: '(555) 567-8901',
      hours: 'Open until 7:00 PM',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop',
      description: 'Professional electronics repair for smartphones, tablets, computers, and more.',
      tags: ['Phone Repair', 'Computer Service', 'Data Recovery'],
      isOpen: true,
    },
    {
      id: '6',
      name: 'Green Thumb Nursery',
      category: 'Garden Center',
      rating: 4.4,
      reviewCount: 78,
      address: '987 Garden Way, Southside',
      phone: '(555) 678-9012',
      hours: 'Open until 6:00 PM',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      description: 'Complete garden center with plants, tools, and expert advice for all your gardening needs.',
      tags: ['Plants', 'Garden Tools', 'Landscaping'],
      isOpen: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover top-rated businesses in your area, handpicked for quality and service
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
