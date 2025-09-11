import { useState, useEffect } from "react";
import { Clock, Zap, TrendingUp, Star, Timer, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 399.99,
      image: "/src/assets/hero-headphones.png",
      rating: 4.8,
      reviews: 128,
      badge: "Flash Deal",
      discount: 50,
      timeLeft: "2h 30m"
    },
    {
      id: 2,
      name: "Fast Wireless Charger",
      price: 59.99,
      originalPrice: 129.99,
      image: "/src/assets/hero-phone-charging.png",
      rating: 4.6,
      reviews: 89,
      badge: "Lightning Deal",
      discount: 54,
      timeLeft: "4h 15m"
    },
    {
      id: 3,
      name: "Bluetooth Speaker Pro",
      price: 149.99,
      originalPrice: 249.99,
      image: "/src/assets/wireless-speaker.png",
      rating: 4.7,
      reviews: 156,
      badge: "Hot Deal",
      discount: 40,
      timeLeft: "1h 45m"
    }
  ];

  const dailyDeals = [
    {
      id: "4",
      name: "Smart Watch Charger",
      price: 29.99,
      originalPrice: 69.99,
      image: "/src/assets/watch-charger.png",
      rating: 4.5,
      reviewCount: 67,
      badge: "Daily Deal",
      discount: 57,
      category: "Charging"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-8 w-8 animate-bounce" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Flash Deals & Special Offers
              </h1>
              <Zap className="h-8 w-8 animate-bounce" />
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Limited time offers on premium electronics. Don't miss out!
            </p>
            
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                  <div className="text-xs uppercase">Days</div>
                </div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  <div className="text-xs uppercase">Hours</div>
                </div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs uppercase">Minutes</div>
                </div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-xs uppercase">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Clock className="h-8 w-8 text-primary animate-spin" />
            <h2 className="text-3xl font-bold text-center">
              ⚡ Flash Deals - Limited Time
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((product, index) => (
              <div key={product.id} 
                   className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                   style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="glass-card hover-lift relative overflow-hidden group">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="destructive" className="animate-pulse">
                      {product.discount}% OFF
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <Timer className="h-3 w-3" />
                      {product.timeLeft}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-muted/20 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-primary text-primary' 
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <span className="text-lg line-through text-muted-foreground">
                        ${product.originalPrice}
                      </span>
                    </div>
                    
                    <Button className="w-full hover-lift">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Deals */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-center">
              Today's Best Deals
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyDeals.map((product, index) => (
              <div key={product.id}
                   className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                   style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Deal Type
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Clearance Sale",
                description: "Up to 70% off discontinued items",
                icon: Gift,
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Bundle Deals",
                description: "Save more when you buy together",
                icon: TrendingUp,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Weekly Specials", 
                description: "New deals every Monday",
                icon: Star,
                color: "from-purple-500 to-indigo-500"
              }
            ].map((deal, index) => (
              <Card key={deal.title} 
                    className="glass-card hover-lift cursor-pointer group animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${deal.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <deal.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {deal.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {deal.description}
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;