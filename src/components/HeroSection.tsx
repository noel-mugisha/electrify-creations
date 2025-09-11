import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhoneCharging from "@/assets/hero-phone-charging.png";
import heroHeadphones from "@/assets/hero-headphones.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "BEST SMARTPHONE",
      title: "WIRELESS",
      subtitle: "CHARGING STAND",
      discount: "Up To 70% Off",
      image: heroPhoneCharging,
      gradient: "bg-gradient-to-br from-orange-400 to-pink-500",
    },
    {
      id: 2,
      badge: "BEATS EP ON-EAR",
      title: "PERSONALIZED",
      subtitle: "HEADPHONES", 
      discount: "Min. 40-80% Off",
      image: heroHeadphones,
      gradient: "bg-gradient-to-br from-purple-500 to-blue-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-large">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <div className={`${slide.gradient} h-full flex items-center relative overflow-hidden`}>
                {/* Content */}
                <div className="flex-1 text-white p-8 md:p-16">
                  <div className="max-w-md">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      {slide.badge}
                    </span>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                      {slide.title}
                    </h2>
                    
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                      {slide.subtitle}
                    </h3>
                    
                    <p className="text-lg md:text-xl mb-8 opacity-90 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
                      {slide.discount}
                    </p>
                    
                    <Button 
                      variant="hero"
                      size="xl"
                      className="animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:scale-110"
                    >
                      BUY NOW
                    </Button>
                  </div>
                </div>

                {/* Product Image */}
                <div className="flex-1 relative h-full flex items-center justify-center">
                  <div className="relative animate-in fade-in zoom-in-50 duration-1000 delay-300">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl hover:scale-105 transition-slow"
                    />
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 animate-bounce">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="absolute -bottom-8 -left-8 bg-white/20 backdrop-blur-sm rounded-full p-2 animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <Button
            variant="glass"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="glass"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;