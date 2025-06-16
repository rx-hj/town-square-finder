
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessCard from '@/components/BusinessCard';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Heart, User } from 'lucide-react';
import AuthDialog from '@/components/AuthDialog';

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

const Favorites = () => {
  const { user, isAuthenticated } = useAuth();
  const [favorites, setFavorites] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchFavorites();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  const fetchFavorites = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('favorites')
      .select(`
        business_id,
        businesses (*)
      `)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching favorites:', error);
    } else {
      const businessData = data?.map(fav => (fav as any).businesses).filter(Boolean) || [];
      setFavorites(businessData);
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Favorites</h1>
            <p className="text-gray-600 mb-8">
              Sign in to save your favorite Miami businesses and access them anytime.
            </p>
            <AuthDialog>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <User className="w-4 h-4 mr-2" />
                Sign In to View Favorites
              </Button>
            </AuthDialog>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your favorites...</p>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-semibold">Favorites</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Favorite Places
          </h1>
          <p className="text-xl text-gray-600">
            {favorites.length > 0 
              ? `You have ${favorites.length} favorite business${favorites.length === 1 ? '' : 'es'}`
              : 'Start exploring Miami to discover your favorite businesses'
            }
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Browse businesses around Miami and click the heart icon to save your favorites here.
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <a href="/">Explore Businesses</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((business) => (
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
                showFavorite={true}
                isFavorited={true}
                onFavoriteToggle={() => fetchFavorites()}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
