import { useState, useEffect, useRef } from "react";
import { 
  CheckCircle, Clock, Filter, Map, Search, Shield, Star, 
  ArrowRight, Sparkles, Zap, Trophy, Heart, PlusCircle,
  MapPin, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find trains quickly with our intuitive search and filtering options.",
      benefit: "Save up to 5 minutes on every search",
      color: "from-primary/60 to-primary/80", 
      bgColor: "bg-primary/5 dark:bg-primary/10",
      iconColor: "text-primary",
      href: "/trains"
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Filter results by train type, class, amenities, and price range.",
      benefit: "Find your perfect train in seconds",
      color: "from-primary/60 to-primary/80",
      bgColor: "bg-primary/5 dark:bg-primary/10",
      iconColor: "text-primary",
      href: "/trains"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Get live train status, delays, and platform information.",
      benefit: "Never miss a train or connection",
      color: "from-primary/60 to-primary/80",
      bgColor: "bg-primary/5 dark:bg-primary/10",
      iconColor: "text-primary",
      href: "/live-status"
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Book with confidence using our secure payment gateway.",
      benefit: "100% secure transactions guaranteed",
      color: "from-primary/60 to-primary/80",
      bgColor: "bg-primary/5 dark:bg-primary/10",
      iconColor: "text-primary",
      href: "/bookings"
    },
    {
      icon: Map,
      title: "Interactive Maps",
      description: "View train routes and track your journey in real-time.",
      benefit: "Always know where your train is",
      color: "from-primary/60 to-primary/80",
      bgColor: "bg-primary/5 dark:bg-primary/10",
      iconColor: "text-primary",
      href: "/map"
    },
    {
      icon: Star,
      title: "Loyalty Rewards",
      description: "Earn points with every booking and redeem for discounts.",
      benefit: "Get up to 15% off on regular bookings",
      color: "from-primary/60 to-primary/80",
      bgColor: "bg-primary/5 dark:bg-primary/10",
      iconColor: "text-primary",
      href: "/rewards"
    },
  ];

  const checkRouteExists = (path: string): boolean => {
    const existingRoutes = ['/trains', '/bookings'];
    return existingRoutes.includes(path);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => {
        const next = prev === null ? 0 : (prev + 1) % features.length;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length, isVisible]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Array.from({ length: 15 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r={Math.random() * 2 + 0.5}
                fill="currentColor"
                className="text-primary animate-pulse"
                style={{ 
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 8}s`
                }}
              />
            ))}
          </svg>
        </div>
        <div className="absolute top-1/4 right-0 -rotate-12 opacity-20">
          <svg width="500" height="500" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M10,30 Q50,10 90,30 T90,70 Q50,90 10,70 T10,30" fill="url(#grad1)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 font-medium text-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            Reimagined Train Booking Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            A Better Way to Book Train Tickets
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
            Our modern platform offers a seamless experience with features designed to make your journey planning easier, faster, and more enjoyable.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-features-in ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "relative rounded-3xl p-8 transition-all duration-300 overflow-hidden backdrop-blur-sm",
                "border border-primary/10 group",
                activeFeature === index ? 'ring-2 ring-primary/30 shadow-xl transform scale-[1.02]' : 'shadow-sm hover:shadow-md',
                feature.bgColor
              )}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 opacity-30"></div>
              
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-sm transform transition-transform group-hover:scale-110`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-5">{feature.description}</p>
              
              <div className="flex items-center mt-auto text-sm text-primary/80 font-medium">
                <Zap className="h-4 w-4 mr-2" />
                <span>{feature.benefit}</span>
              </div>

              {checkRouteExists(feature.href) ? (
                <Link to={feature.href}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute bottom-4 right-4 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute bottom-4 right-4 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all cursor-help"
                        disabled
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Coming soon!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 rounded-3xl p-10 shadow-md backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div 
              className="space-y-6"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: "opacity 0.7s ease, transform 0.7s ease"
              }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-1 text-sm font-medium">
                <Trophy className="h-4 w-4 mr-1.5" />
                Award-winning platform
              </div>

              <h3 className="text-3xl font-bold tracking-tight">Why Choose RailEasy?</h3>
              
              <div className="space-y-4">
                {[
                  "Intuitive booking experience with no technical glitches",
                  "Real-time updates on train status and seat availability",
                  "Personalized dashboard to manage all your bookings",
                  "Secure payments with multiple payment options",
                  "24/7 customer support to assist with your queries",
                  "Lowest service charges guaranteed"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start"
                    style={{ 
                      opacity: isVisible ? 1 : 0, 
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.5s ease, transform 0.5s ease`,
                      transitionDelay: `${0.4 + (i * 0.1)}s`
                    }}
                  >
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center mr-3 shrink-0 shadow-sm">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all px-6"
                  onClick={() => window.location.href = "/signup"}
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div 
              className="relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-xl"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: "opacity 0.7s ease, transform 0.7s ease",
                transitionDelay: "0.5s"
              }}
            >
              <svg
                viewBox="0 0 1000 800"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id="train-pattern"
                    patternUnits="userSpaceOnUse"
                    width="30"
                    height="30"
                    patternTransform="scale(2) rotate(0)"
                  >
                    <rect x="0" y="0" width="100%" height="100%" fill="rgba(155, 135, 245, 0.05)"/>
                    <path
                      d="M15,0 L15,30 M0,15 L30,15"
                      stroke="rgba(155, 135, 245, 0.1)"
                      strokeWidth="1"
                    />
                  </pattern>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="rgba(155, 135, 245, 0.3)" />
                    <stop offset="100%" stopColor="rgba(155, 135, 245, 0)" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#train-pattern)" />
                
                <circle cx="200" cy="300" r="100" fill="url(#glow)" className="animate-pulse-slow" />
                <circle cx="800" cy="600" r="120" fill="url(#glow)" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
                
                <path 
                  d="M100,600 Q400,300 900,500" 
                  fill="none" 
                  stroke="rgba(155, 135, 245, 0.4)" 
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                <path 
                  d="M100,620 Q400,320 900,520" 
                  fill="none" 
                  stroke="rgba(155, 135, 245, 0.25)" 
                  strokeWidth="15"
                  strokeLinecap="round"
                />
                
                <g className="animate-train-movement">
                  <rect x="450" y="355" width="120" height="50" rx="10" fill="#9b87f5" />
                  <rect x="455" y="335" width="110" height="20" rx="5" fill="#9b87f5" />
                  <rect x="430" y="375" width="20" height="30" rx="5" fill="#9b87f5" />
                  <rect x="570" y="375" width="20" height="30" rx="5" fill="#9b87f5" />
                  
                  <rect x="465" y="340" width="20" height="15" rx="3" fill="#ffffff" fillOpacity="0.7" />
                  <rect x="495" y="340" width="20" height="15" rx="3" fill="#ffffff" fillOpacity="0.7" />
                  <rect x="525" y="340" width="20" height="15" rx="3" fill="#ffffff" fillOpacity="0.7" />
                  
                  <circle cx="470" cy="405" r="12" fill="#7E69AB" />
                  <circle cx="470" cy="405" r="6" fill="#574979" />
                  <circle cx="550" cy="405" r="12" fill="#7E69AB" />
                  <circle cx="550" cy="405" r="6" fill="#574979" />
                </g>
                
                <circle cx="150" cy="600" r="15" fill="#9b87f5" />
                <text x="150" y="640" textAnchor="middle" fill="#9b87f5" fontSize="12">Delhi</text>
                <circle cx="850" cy="500" r="15" fill="#9b87f5" />
                <text x="850" y="540" textAnchor="middle" fill="#9b87f5" fontSize="12">Mumbai</text>
                
                <g className="animate-float" style={{ animationDuration: "20s" }}>
                  <path d="M200,200 Q220,180 240,200 T280,200 Q300,180 300,200 Q320,220 300,240 Q280,260 240,240 Q220,260 200,240 Q180,220 200,200" fill="rgba(255,255,255,0.5)" />
                </g>
                <g className="animate-float" style={{ animationDuration: "15s", animationDelay: "5s" }}>
                  <path d="M600,150 Q620,130 640,150 T680,150 Q700,130 700,150 Q720,170 700,190 Q680,210 640,190 Q620,210 600,190 Q580,170 600,150" fill="rgba(255,255,255,0.5)" />
                </g>
              </svg>
              
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20"></div>
              
              {isVisible && (
                <div 
                  className="absolute bottom-6 right-6"
                  style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: "1s"
                  }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Button 
                            size="sm" 
                            variant="secondary"
                            className="rounded-full shadow-lg bg-primary/20 text-primary hover:bg-primary/30 cursor-not-allowed"
                            disabled
                          >
                            <MapPin className="mr-1.5 h-3.5 w-3.5" />
                            View Live Map
                          </Button>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This feature is coming soon!</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 font-medium text-sm">
              <Heart className="h-4 w-4 mr-2" />
              Loved by travelers
            </div>
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                role: "Frequent Traveler",
                comment: "RailEasy has completely changed how I book train tickets. The interface is so intuitive and I love the real-time tracking feature!",
                rating: 5,
                avatar: "https://i.pravatar.cc/100?img=47"
              },
              {
                name: "Rahul Patel",
                role: "Business Traveler",
                comment: "As someone who travels weekly for work, the quick booking and e-ticket features save me so much time. The loyalty rewards are a great bonus too.",
                rating: 5,
                avatar: "https://i.pravatar.cc/100?img=68"
              },
              {
                name: "Ananya Desai",
                role: "Family Vacation Planner",
                comment: "Planning family trips is so much easier with RailEasy. The seat selection visualization and group booking features are perfect for us.",
                rating: 4,
                avatar: "https://i.pravatar.cc/100?img=45"
              }
            ].map((testimonial, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-background to-primary/5 border border-primary/10 p-6 rounded-2xl shadow-md backdrop-blur-sm"
                style={{ 
                  opacity: isVisible ? 1 : 0, 
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${0.6 + (i * 0.2)}s`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.comment}</p>
                <div className="flex mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Button 
                      variant="outline" 
                      className="rounded-full border-primary/20 hover:bg-primary/5"
                      disabled
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      View More Testimonials
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More testimonials coming soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
