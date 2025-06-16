
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin,
  Star,
  Plus,
  Search,
  Heart,
  Info,
  Mail,
  Grid3X3,
  Calendar,
  Phone,
  Clock,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  const quickLinks = [
    {
      title: 'Browse Categories',
      description: 'Explore businesses by type - restaurants, bars, retail, and more',
      icon: Grid3X3,
      href: '/categories',
      color: 'bg-blue-500'
    },
    {
      title: 'Featured Businesses',
      description: 'Discover Miami\'s top-rated and recommended businesses',
      icon: Star,
      href: '/featured',
      color: 'bg-yellow-500'
    },
    {
      title: 'Add Your Business',
      description: 'List your business for free and reach more Miami customers',
      icon: Plus,
      href: '#',
      color: 'bg-green-500',
      action: 'add-business'
    },
    {
      title: 'My Favorites',
      description: 'View and manage your saved favorite businesses',
      icon: Heart,
      href: '/favorites',
      color: 'bg-pink-500'
    },
    {
      title: 'Miami Areas',
      description: 'Explore different neighborhoods and districts in Miami',
      icon: MapPin,
      href: '/miami-areas',
      color: 'bg-purple-500'
    },
    {
      title: 'About Us',
      description: 'Learn more about MiamiLocal and our mission',
      icon: Info,
      href: '/about',
      color: 'bg-indigo-500'
    },
    {
      title: 'Contact Support',
      description: 'Get help or reach out with questions and feedback',
      icon: Mail,
      href: '/contact',
      color: 'bg-orange-500'
    },
    {
      title: 'Business Hours',
      description: 'Find businesses open now or by specific hours',
      icon: Clock,
      href: '#',
      color: 'bg-teal-500',
      comingSoon: true
    }
  ];

  const popularSearches = [
    'Cuban Restaurants',
    'Rooftop Bars',
    'Art Galleries',
    'Coffee Shops',
    'Beach Clubs',
    'Hair Salons',
    'Auto Repair',
    'Fitness Centers'
  ];

  const handleLinkClick = (link: typeof quickLinks[0]) => {
    if (link.action === 'add-business') {
      // This would trigger the AddBusinessDialog
      console.log('Opening add business dialog');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quick Links</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast access to all the features and sections you need on MiamiLocal
          </p>
        </div>

        {/* Main Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon;
            const isComingSoon = link.comingSoon;
            
            const cardContent = (
              <Card className={`h-full hover:shadow-lg transition-shadow ${isComingSoon ? 'opacity-60' : 'cursor-pointer'}`}>
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {link.title}
                    {isComingSoon && <span className="text-xs text-orange-500 ml-2">(Coming Soon)</span>}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">{link.description}</p>
                </CardContent>
              </Card>
            );

            if (isComingSoon) {
              return <div key={index}>{cardContent}</div>;
            }

            if (link.action) {
              return (
                <div key={index} onClick={() => handleLinkClick(link)}>
                  {cardContent}
                </div>
              );
            }

            return (
              <Link key={index} to={link.href}>
                {cardContent}
              </Link>
            );
          })}
        </div>

        {/* Popular Searches Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Popular Searches</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Trending in Miami:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-8 text-sm hover:bg-orange-50 hover:border-orange-300"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Our support team is here to help you navigate MiamiLocal
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Owner?</h3>
              <p className="text-gray-600 mb-4">
                Join thousands of Miami businesses on our platform
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Add Your Business
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuickLinks;
