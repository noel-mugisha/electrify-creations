import { Heart, Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  discount?: number;
  isWishlisted?: boolean;
  features?: string[];
}

const ProductCard = ({
  id,
  name,
  category,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  discount,
  isWishlisted = false,
  features = []
}: ProductCardProps) => {
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : discount;

  return (
    <div className="group relative bg-card rounded-xl shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Discount Badge */}
      {discountPercentage && (
        <div className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-semibold">
          {discountPercentage}% Off
        </div>
      )}

      {/* Wishlist Button */}
      <Button
        variant="glass"
        size="icon"
        className="absolute top-4 right-4 z-10 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-slow"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2">
          <Button variant="glass" size="sm" className="bg-white/20 text-white border-white/30">
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
          <Button variant="premium" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {category}
        </span>

        {/* Product Name */}
        <h3 className="font-semibold text-lg mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Features */}
        {features.length > 0 && (
          <ul className="text-sm text-muted-foreground mb-3 space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'text-primary fill-current'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10">
            Select Options
          </Button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default ProductCard;