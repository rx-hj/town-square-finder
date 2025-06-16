
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Heart, Users, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: MapPin, label: 'Local Businesses', value: '1,500+' },
    { icon: Users, label: 'Community Members', value: '25,000+' },
    { icon: Heart, label: 'Reviews Written', value: '50,000+' },
    { icon: Star, label: 'Average Rating', value: '4.7' },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b25ad2cf?w=300&h=300&fit=crop&crop=face',
      description: 'Miami native passionate about connecting community with local businesses.'
    },
    {
      name: 'Carlos Martinez',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Building bridges between businesses and residents across all Miami neighborhoods.'
    },
    {
      name: 'Ana Lopez',
      role: 'Business Relations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Helping local businesses grow and thrive in the digital age.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About MiamiLocal</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We're more than just a business directory. We're a community-driven platform 
            dedicated to celebrating and supporting the vibrant local business ecosystem 
            that makes Miami truly special.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  At MiamiLocal, we believe that local businesses are the heartbeat of our community. 
                  Our mission is to bridge the gap between Miami residents and the incredible businesses 
                  that call our city home.
                </p>
                <p className="text-lg text-gray-700">
                  From family-owned restaurants in Little Havana to innovative startups in Wynwood, 
                  we're here to help you discover, connect with, and support the businesses that 
                  make Miami unique.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop" 
                  alt="Miami skyline"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-gray-700">
                  We prioritize the needs of our local community and work to strengthen 
                  the bonds between residents and businesses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality & Trust</h3>
                <p className="text-gray-700">
                  We maintain high standards for business listings and foster an 
                  environment of honest, helpful reviews.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                <p className="text-gray-700">
                  We celebrate the diversity that makes Miami special and ensure 
                  all businesses have an equal opportunity to shine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
