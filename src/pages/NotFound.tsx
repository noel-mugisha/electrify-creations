import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = "/"}
            className="w-full"
          >
            Return to Home
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.history.back()}
            className="w-full"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
