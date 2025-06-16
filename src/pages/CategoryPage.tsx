
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessCard from '@/components/BusinessCard';
import { supabase } from '@/integrations/supabase/client';

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

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinesses = async () => {
      if (!categoryId) return;
      
      setLoading(true);
      const { data, error } = await supabase
        .from('businesses')
        .select('*')
        .eq('category', categoryId)
        .eq('is_open', true)
        .order('is_featured', { ascending: false })
        .order('rating', { ascending: false });

      if (error) {
        console.error('Error fetching businesses:', error);
      } else {
        setBusinesses(data || []);
      }
      setLoading(false);
    };

    fetchBusinesses();
  }, [categoryId]);

  const getCategoryName = (id: string) => {
    const categoryNames: Record<string, string> = {
      'restaurant': 'Restaurants',
      'bar': 'Bars & Nightlife',
      'retail': 'Retail & Shopping',
      'service': 'Services',
      'entertainment': 'Entertainment',
      'health': 'Health & Wellness',
      'coffee': 'Coffee & Cafes',
      'auto': 'Automotive',
      'beauty': 'Beauty & Spa',
      'fitness': 'Fitness',
      'home_services': 'Home Services',
      'healthcare': 'Healthcare',
      'real_estate': 'Real Estate',
      'professional': 'Professional Services',
      'photography': 'Photography',
    };
    return categoryNames[id] || id;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading businesses...</p>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getCategoryName(categoryId || '')}
          </h1>
          <p className="text-xl text-gray-600">
            {businesses.length} businesses found in Miami
          </p>
        </div>

        {businesses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No businesses found in this category yet.</p>
            <p className="text-gray-500 mt-2">Be the first to add a business!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
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
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
