
import React from 'react';
import { 
  Utensils, 
  Coffee, 
  Wrench, 
  Scissors, 
  Dumbbell, 
  ShoppingBag, 
  Car, 
  Heart,
  Home,
  Briefcase,
  Music,
  Camera
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Categories = () => {
  const categories = [
    { name: 'Restaurants', icon: Utensils, count: 1234, color: 'bg-red-500' },
    { name: 'Coffee & Tea', icon: Coffee, count: 456, color: 'bg-amber-600' },
    { name: 'Auto Services', icon: Car, count: 789, color: 'bg-blue-600' },
    { name: 'Beauty & Spas', icon: Scissors, count: 567, color: 'bg-pink-500' },
    { name: 'Fitness', icon: Dumbbell, count: 345, color: 'bg-green-600' },
    { name: 'Shopping', icon: ShoppingBag, count: 890, color: 'bg-purple-600' },
    { name: 'Home Services', icon: Wrench, count: 432, color: 'bg-orange-600' },
    { name: 'Healthcare', icon: Heart, count: 321, color: 'bg-rose-600' },
    { name: 'Real Estate', icon: Home, count: 234, color: 'bg-indigo-600' },
    { name: 'Professional', icon: Briefcase, count: 567, color: 'bg-gray-600' },
    { name: 'Entertainment', icon: Music, count: 123, color: 'bg-violet-600' },
    { name: 'Photography', icon: Camera, count: 89, color: 'bg-teal-600' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in your local area
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.name} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.count.toLocaleString()} businesses
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
