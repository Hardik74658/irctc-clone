
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-16 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(0 0) scale(1) rotate(0)"
            >
              <circle cx="40" cy="40" r="1.5" fill="hsl(var(--primary))" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center py-12 px-4 bg-background/70 backdrop-blur-sm rounded-3xl border border-accent shadow-card animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Experience Smarter Train Travel?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Join thousands of travelers who book tickets through our platform daily. 
            Sign up now to get started with a better railway booking experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-8">
              <Link to="/signup">
                Create an Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="h-12 px-8">
              <Link to="/login">Log in</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            No credit card required. Free to sign up.
          </p>
        </div>
      </div>
    </section>
  );
}
