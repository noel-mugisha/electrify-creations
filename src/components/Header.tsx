import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#" },
    { name: "SHOP", href: "#" },
    { name: "CATEGORIES", href: "#" },
    { name: "DEALS", href: "#" },
    { name: "SUPPORT", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Banner */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <span className="hidden md:block">SUMMER SALE, Get 40% Off for all products.</span>
          <span className="md:hidden">SUMMER SALE - 40% Off!</span>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary-foreground hover:bg-white/20 h-6 px-2"
          >
            Click Here
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              kapee.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-normal relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </a>
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

            {/* User Account */}
            <Button variant="ghost" size="icon" className="hover-lift">
              <User className="h-5 w-5" />
            </Button>

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
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
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