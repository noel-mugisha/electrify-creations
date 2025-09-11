import { useState } from "react";
import { Filter, Grid3X3, List, Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);

  const products = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "/src/assets/hero-headphones.png",
      rating: 4.8,
      reviewCount: 128,
      badge: "Best Seller",
      category: "Audio"
    },
    {
      id: "2",
      name: "Fast Wireless Charger",
      price: 89.99,
      originalPrice: 129.99,
      image: "/src/assets/hero-phone-charging.png",
      rating: 4.6,
      reviewCount: 89,
      badge: "New",
      category: "Charging"
    },
    {
      id: "3",
      name: "Bluetooth Speaker Pro",
      price: 199.99,
      originalPrice: 249.99,
      image: "/src/assets/wireless-speaker.png",
      rating: 4.7,
      reviewCount: 156,
      badge: "Sale",
      category: "Audio"
    },
    {
      id: "4",
      name: "Smart Watch Charger",
      price: 49.99,
      originalPrice: 69.99,
      image: "/src/assets/watch-charger.png",
      rating: 4.5,
      reviewCount: 67,
      badge: "Hot",
      category: "Charging"
    }
  ];

  const categories = ["All", "Audio", "Charging", "Smart Devices", "Accessories"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Electronics Store
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Discover the latest and greatest in consumer electronics
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-96">
              <Input placeholder="Search products..." className="bg-muted/50" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            {filterOpen && (
              <div className="w-64 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>$0 - $100</span>
                        <input type="checkbox" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>$100 - $200</span>
                        <input type="checkbox" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>$200 - $500</span>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Rating</h3>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2">
                          <input type="checkbox" />
                          <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                            <span className="ml-2 text-sm">& up</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Products */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
                <select className="px-3 py-2 border rounded-lg bg-background">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Newest</option>
                </select>
              </div>

              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;