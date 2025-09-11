import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection"; 
import HotDealsSection from "@/components/HotDealsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Premium Slider */}
      <HeroSection />
      
      {/* Category Showcase */}
      <CategorySection />
      
      {/* Hot Deals Products */}
      <HotDealsSection />
      
      {/* Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Kapee</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of electronics shopping with premium quality and unmatched service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Only the finest electronics from trusted brands worldwide",
                icon: "⭐"
              },
              {
                title: "Fast Shipping", 
                description: "Free express delivery on all orders over $100",
                icon: "🚚"
              },
              {
                title: "24/7 Support",
                description: "Expert customer service whenever you need assistance", 
                icon: "💬"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`glass-card text-center hover-lift animate-in fade-in slide-in-from-bottom-4 duration-700`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
