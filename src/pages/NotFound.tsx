
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="mb-8 relative">
          <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <svg viewBox="0 0 24 24" className="h-16 w-16 text-primary">
              <path
                fill="currentColor"
                d="M12,6a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Z"
              />
              <circle
                fill="currentColor"
                cx="12"
                cy="16"
                r="1"
              />
              <path
                fill="currentColor"
                d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"
              />
            </svg>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background px-4">
            <span className="text-4xl font-bold">404</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight mt-4">Page not found</h1>
        <p className="text-muted-foreground max-w-md mt-4 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/">
              Return Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/support">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
