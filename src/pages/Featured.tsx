
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessCard from '@/components/BusinessCard';
import { supabase } from '@/integrations/supabase/client';
import { Star } from 'lucide-react';

interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone?: string;
  website?: string;
  description?: string;
  image_url?: string;
  rating: number;
  review_count: number;
  hours?: string;
  tags?: string[];
  is_featured: boolean;
  is_open: boolean;
}

const Featured = () => {
  const [featuredBusinesses, setFeaturedBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBusinesses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .eq('is_featured', true)
        .eq('is_open', true)
        .order('rating', { ascending: false });

      if (error) {
        console.error('Error fetching featured businesses:', error);
      } else {
        setFeaturedBusinesses(data || []);
      }
      setLoading(false);
    };

    fetchFeaturedBusinesses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading featured businesses...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">Featured</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Miami's most exceptional businesses, handpicked for their outstanding quality and service
          </p>
        </div>

        {featuredBusinesses.length === 0 ? (
          <div className="text-center py-16">
            <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No featured businesses yet.</p>
            <p className="text-gray-500 mt-2">Check back soon for our curated selection!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                name={business.name}
                category={business.category}
                address={business.address}
                rating={business.rating}
                reviewCount={business.review_count}
                imageUrl={business.image_url}
                tags={business.tags || []}
                hours={business.hours}
                featured={true}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Featured;
