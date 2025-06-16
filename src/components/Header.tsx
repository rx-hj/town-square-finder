
import React, { useState } from 'react';
import { Menu, X, User, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AuthDialog from './AuthDialog';
import AddBusinessDialog from './AddBusinessDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'Featured', href: '/featured' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MiamiLocal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-700" asChild>
              <Link to="/favorites">
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </Link>
            </Button>
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  Welcome, {user?.user_metadata?.full_name || user?.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <AuthDialog>
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </AuthDialog>
            )}
            
            <AddBusinessDialog>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Add Business
              </Button>
            </AddBusinessDialog>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" size="sm" className="justify-start" asChild>
                  <Link to="/favorites" onClick={() => setIsMenuOpen(false)}>
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </Link>
                </Button>
                
                {isAuthenticated ? (
                  <>
                    <div className="text-sm text-gray-600 px-3 py-2">
                      {user?.user_metadata?.full_name || user?.email}
                    </div>
                    <Button variant="outline" size="sm" className="justify-start" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <AuthDialog>
                    <Button variant="outline" size="sm" className="justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </AuthDialog>
                )}
                
                <AddBusinessDialog>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 justify-start">
                    Add Business
                  </Button>
                </AddBusinessDialog>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
