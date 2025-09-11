import { Headphones, Smartphone, Laptop, Watch, Camera, Speaker, Gamepad2, Tablet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Audio & Headphones",
      icon: Headphones,
      count: 156,
      color: "from-purple-500 to-pink-500",
      description: "Premium audio equipment for audiophiles"
    },
    {
      id: 2,
      name: "Smartphones",
      icon: Smartphone,
      count: 89,
      color: "from-blue-500 to-cyan-500",
      description: "Latest flagship and budget smartphones"
    },
    {
      id: 3,
      name: "Laptops & Computers",
      icon: Laptop,
      count: 234,
      color: "from-green-500 to-emerald-500",
      description: "High-performance computing solutions"
    },
    {
      id: 4,
      name: "Smartwatches",
      icon: Watch,
      count: 67,
      color: "from-orange-500 to-red-500",
      description: "Fitness and lifestyle wearables"
    },
    {
      id: 5,
      name: "Cameras & Photography",
      icon: Camera,
      count: 123,
      color: "from-indigo-500 to-purple-500",
      description: "Professional photography equipment"
    },
    {
      id: 6,
      name: "Speakers & Audio",
      icon: Speaker,
      count: 98,
      color: "from-pink-500 to-rose-500",
      description: "Home audio and portable speakers"
    },
    {
      id: 7,
      name: "Gaming Accessories",
      icon: Gamepad2,
      count: 145,
      color: "from-cyan-500 to-blue-500",
      description: "Gaming peripherals and accessories"
    },
    {
      id: 8,
      name: "Tablets & E-readers",
      icon: Tablet,
      count: 76,
      color: "from-emerald-500 to-teal-500",
      description: "Portable computing and reading devices"
    }
  ];

  const featuredCategories = categories.slice(0, 4);
  const otherCategories = categories.slice(4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Product Categories
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Explore our carefully curated selection of premium electronics
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredCategories.map((category, index) => (
              <Link key={category.id} to="/shop" className="group">
                <Card className="glass-card hover-lift h-full transition-all duration-500 group-hover:shadow-glow animate-in fade-in slide-in-from-bottom-4"
                      style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {category.description}
                    </p>
                    
                    <div className="text-2xl font-bold text-primary mb-4">
                      {category.count}+ Products
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      Browse Now
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            All Categories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link key={category.id} to="/shop" className="group">
                <Card className="glass-card hover-lift transition-all duration-300 group-hover:shadow-medium animate-in fade-in slide-in-from-bottom-2"
                      style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h4>
                    
                    <p className="text-xs text-muted-foreground">
                      {category.count} items
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center glass-card p-12 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect electronics for your needs.
              Get in touch with our experts for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-lift">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;