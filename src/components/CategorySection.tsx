import { Button } from "@/components/ui/button";
import wirelessSpeaker from "@/assets/wireless-speaker.png";
import watchCharger from "@/assets/watch-charger.png";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      badge: "DIGITAL SMART",
      title: "WIRELESS SPEAKER",
      discount: "MIN. 30-75% OFF",
      image: wirelessSpeaker,
      gradient: "bg-gradient-to-br from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      badge: "DIGITAL SMART", 
      title: "WATCH CHARGER",
      discount: "UP TO 75% OFF",
      image: watchCharger,
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`relative group rounded-2xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? 'animate-in slide-in-from-left-8 duration-700' : 'animate-in slide-in-from-right-8 duration-700 delay-200'
              }`}
            >
              <div className={`${category.gradient} aspect-[4/3] relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center text-white z-10">
                  <div className="max-w-xs">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {category.badge}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                      {category.title}
                    </h3>
                    
                    <p className="text-lg mb-6 opacity-90">
                      {category.discount}
                    </p>
                    
                    <Button 
                      variant="glass"
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:scale-105 transition-bounce"
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </div>

                {/* Product Image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="max-w-full max-h-[80%] object-contain drop-shadow-2xl group-hover:scale-110 transition-slow"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-lg group-hover:animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full blur-md group-hover:animate-pulse delay-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;