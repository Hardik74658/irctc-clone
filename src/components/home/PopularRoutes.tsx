import { ArrowRight, Train, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";

export function PopularRoutes() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simple intersection observer using native API
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const popularRoutes = [
    {
      from: "New Delhi",
      to: "Mumbai",
      fromCode: "NDLS",
      toCode: "BCT",
      trains: 42,
      dailyTrains: 8,
      duration: "16-20",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    },
    {
      from: "Bengaluru",
      to: "Chennai",
      fromCode: "SBC",
      toCode: "MAS",
      trains: 27,
      dailyTrains: 12,
      duration: "5-7",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80"
    },
    {
      from: "Kolkata",
      to: "Delhi",
      fromCode: "HWH",
      toCode: "NDLS",
      trains: 35,
      dailyTrains: 6,
      duration: "17-24",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800&q=80"
    },
    {
      from: "Ahmedabad",
      to: "Mumbai",
      fromCode: "ADI",
      toCode: "BCT",
      trains: 23,
      dailyTrains: 10,
      duration: "6-8",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // SVG decorative elements
  const TrainSVG = () => (
    <svg className="absolute right-4 top-4 w-24 h-24 text-white/10 z-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 18L19 20M17 18L15 20M17 18V12M7 18L5 20M7 18L9 20M7 18V12M12.5 18H11.5M17 9V6C17 4.34315 15.6569 3 14 3H10C8.34315 3 7 4.34315 7 6V9M17 9H7M17 9C19.2091 9 21 10.7909 21 13V14C21 16.2091 19.2091 18 17 18M7 9C4.79086 9 3 10.7909 3 13V14C3 16.2091 4.79086 18 7 18M12 12V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const RouteLine = () => (
    <svg className="absolute top-1/2 left-0 w-full h-6 -translate-y-1/2 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
      <path d="M0,5 C30,2 70,8 100,5" stroke="white" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
      <circle cx="10" cy="5" r="2" fill="white" />
      <circle cx="90" cy="5" r="2" fill="white" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-accent/10 to-accent/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent"></div>
      </div>
      
      <div className="container relative z-10">
        <div 
          className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground relative">
              Popular Routes
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Explore the most popular train routes across India with competitive pricing and frequent departures.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 rounded-full group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            See all routes 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {popularRoutes.map((route, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`h-full transition-all duration-500 ease-out transform ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${isVisible ? index * 100 : 0}ms`,
              }}
            >
              <Card 
                className="overflow-hidden rounded-xl h-full border-0 shadow-lg hover:shadow-xl 
                transition-all duration-300 bg-card hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredCard === index ? "scale(1.1)" : "scale(1.0)"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
                  
                  <TrainSVG />
                  <RouteLine />
                  
                  <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                    <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-full w-fit mb-2">
                      <span className="font-medium text-sm">{route.fromCode}</span>
                      <svg width="20" height="10" viewBox="0 0 20 10">
                        <path d="M0,5 H18" stroke="white" strokeWidth="1" />
                        <path d="M14,1 L18,5 L14,9" fill="none" stroke="white" strokeWidth="1" />
                      </svg>
                      <span className="font-medium text-sm">{route.toCode}</span>
                    </div>
                    <h3 className="text-lg font-bold truncate">
                      {route.from} to {route.to}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="flex flex-col items-center p-2 rounded-lg bg-accent/10 transition-colors hover:bg-accent/20">
                      <Train className="h-4 w-4 mb-1 text-primary" />
                      <p className="text-xs text-muted-foreground">Total Trains</p>
                      <p className="font-bold">{route.trains}</p>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-accent/10 transition-colors hover:bg-accent/20">
                      <Calendar className="h-4 w-4 mb-1 text-primary" />
                      <p className="text-xs text-muted-foreground">Daily</p>
                      <p className="font-bold">{route.dailyTrains}</p>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-accent/10 transition-colors hover:bg-accent/20">
                      <Clock className="h-4 w-4 mb-1 text-primary" />
                      <p className="text-xs text-muted-foreground">Hours</p>
                      <p className="font-bold">{route.duration}</p>
                    </div>
                  </div>
                  <Button 
                    variant="default" 
                    className="w-full mt-4 rounded-full bg-gradient-to-r from-primary to-primary/80 
                    hover:from-primary/90 hover:to-primary transition-all duration-300 group"
                  >
                    Explore Route
                    <ArrowRight className="ml-2 h-4 w-4 animate-pulse-slight group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
