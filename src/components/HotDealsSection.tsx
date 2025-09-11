import ProductCard from "./ProductCard";

const HotDealsSection = () => {
  // Sample product data
  const products = [
    {
      id: "1",
      name: "Apple Watch Series 5",
      category: "Electronics",
      price: 499.00,
      originalPrice: 599.00,
      rating: 4.8,
      reviewCount: 234,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
      features: [
        "GPS + Cellular",
        "Always-On Retina display", 
        "30% larger screen",
        "Swimproof",
        "ECG app"
      ]
    },
    {
      id: "2", 
      name: "Sony WH-1000XM4 Headphones",
      category: "Audio",
      price: 279.99,
      originalPrice: 349.99,
      rating: 4.9,
      reviewCount: 456,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      features: [
        "Industry-leading noise canceling",
        "30-hour battery life",
        "Touch sensor controls",
        "Speak-to-chat technology"
      ]
    },
    {
      id: "3",
      name: "iPhone 14 Pro Max", 
      category: "Smartphones",
      price: 1099.00,
      originalPrice: 1199.00,
      rating: 4.7,
      reviewCount: 189,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
      features: [
        "6.7-inch Super Retina XDR",
        "A16 Bionic chip",
        "Pro camera system",
        "Dynamic Island"
      ]
    },
    {
      id: "4",
      name: "Samsung Galaxy Buds Pro",
      category: "Audio", 
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviewCount: 312,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      features: [
        "Active noise cancellation",
        "360 Audio",
        "Water resistant",
        "Wireless charging case"
      ]
    },
    {
      id: "5",
      name: "iPad Pro 12.9-inch",
      category: "Tablets",
      price: 1099.00,
      originalPrice: 1299.00, 
      rating: 4.8,
      reviewCount: 167,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      features: [
        "M2 chip",
        "12.9-inch Liquid Retina XDR",
        "Pro camera system", 
        "Apple Pencil support"
      ]
    },
    {
      id: "6",
      name: "MacBook Air M2",
      category: "Laptops",
      price: 1199.00,
      originalPrice: 1399.00,
      rating: 4.9,
      reviewCount: 278,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: [
        "M2 chip",
        "13.6-inch Liquid Retina display",
        "All-day battery life",
        "Ultra-thin design"
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Hot Deals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss out on these incredible offers! Limited time deals on premium electronics.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`animate-in fade-in slide-in-from-bottom-4 duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-primary border-2 border-primary rounded-lg overflow-hidden transition-all duration-300 hover:text-primary-foreground">
            <span className="absolute inset-0 w-0 bg-gradient-hero transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative">View All Deals</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;