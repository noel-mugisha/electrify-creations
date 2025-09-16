import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart, Globe, Percent, Zap, Gift, TrendingUp, Home, Store, Grid3X3, Phone, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/", icon: Home },
    { name: "SHOP", href: "/shop", icon: Store },
    { name: "CATEGORIES", href: "/categories", icon: Grid3X3 },
    { name: "DEALS", href: "/deals", icon: TrendingUp },
    { name: "SUPPORT", href: "/support", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Enhanced Top Banner */}
      <div className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between text-sm relative z-10">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 animate-bounce" />
            <span className="hidden md:block font-semibold">SUMMER MEGA SALE</span>
            <span className="md:hidden font-semibold">MEGA SALE</span>
            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
              <Percent className="h-3 w-3" />
              <span className="font-bold">40% OFF</span>
            </div>
            <span className="hidden sm:inline">on all electronics!</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary-foreground hover:bg-white/30 h-7 px-3 font-medium transition-all hover:scale-105 flex items-center gap-1"
          >
            <Gift className="h-3 w-3" />
            Shop Now
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center gap-2 hover-lift">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Headphones className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              kapee.
            </h1>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all group relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                <item.icon className="h-4 w-4 group-hover:animate-bounce" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products, categories, brands..."
                className="pl-10 pr-4 bg-muted/50 border-border focus:border-primary transition-normal"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language/Currency */}
            <div className="hidden lg:flex items-center space-x-1 text-xs text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>EN | USD</span>
            </div>

            {/* Admin Dashboard Link (hidden for regular users) */}
            <Link to="/admin" className="hidden md:block">
              <Button variant="outline" size="sm" className="text-xs">
                Admin
              </Button>
            </Link>

            {/* User Account */}
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="hover-lift">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hover-lift relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="hover-lift relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-all p-2 rounded-lg hover:bg-muted/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span>English | US Dollar</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;