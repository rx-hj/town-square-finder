
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Coffee, 
  ShoppingBag, 
  Car, 
  Dumbbell, 
  Heart, 
  Home, 
  Camera,
  Briefcase,
  Scissors,
  Stethoscope,
  Music,
  Wrench,
  MapPin,
  Building,
  Gamepad2
} from 'lucide-react';

const Categories = () => {
  const categories = [
    { id: 'restaurant', name: 'Restaurants', icon: Utensils, count: 245, color: 'bg-red-500' },
    { id: 'bar', name: 'Bars & Nightlife', icon: Coffee, count: 89, color: 'bg-purple-500' },
    { id: 'retail', name: 'Retail & Shopping', icon: ShoppingBag, count: 156, color: 'bg-blue-500' },
    { id: 'service', name: 'Services', icon: Wrench, count: 178, color: 'bg-green-500' },
    { id: 'entertainment', name: 'Entertainment', icon: Gamepad2, count: 67, color: 'bg-pink-500' },
    { id: 'health', name: 'Health & Wellness', icon: Heart, count: 134, color: 'bg-emerald-500' },
    { id: 'coffee', name: 'Coffee & Cafes', icon: Coffee, count: 78, color: 'bg-amber-500' },
    { id: 'auto', name: 'Automotive', icon: Car, count: 45, color: 'bg-gray-500' },
    { id: 'beauty', name: 'Beauty & Spa', icon: Scissors, count: 92, color: 'bg-rose-500' },
    { id: 'fitness', name: 'Fitness', icon: Dumbbell, count: 54, color: 'bg-orange-500' },
    { id: 'home_services', name: 'Home Services', icon: Home, count: 87, color: 'bg-indigo-500' },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, count: 76, color: 'bg-teal-500' },
    { id: 'real_estate', name: 'Real Estate', icon: Building, count: 43, color: 'bg-cyan-500' },
    { id: 'professional', name: 'Professional Services', icon: Briefcase, count: 65, color: 'bg-violet-500' },
    { id: 'photography', name: 'Photography', icon: Camera, count: 32, color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Categories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best businesses in Miami organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} to={`/category/${category.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.count} businesses</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
