import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      comment: "The new interface is so intuitive! I was able to book my tickets in under 2 minutes. The real-time tracking feature is also extremely useful.",
      rating: 5,
      avatar: "PS",
      gradientColors: ["#FF6B6B", "#FFE66D"]
    },
    {
      name: "Rahul Kumar",
      location: "Delhi",
      comment: "I've been using IRCTC for years, but this new platform is a game-changer. The seat availability updates without refreshing the page, and the payment process is seamless.",
      rating: 5,
      avatar: "RK",
      gradientColors: ["#4E65FF", "#92EFFD"]
    },
    {
      name: "Aisha Patel",
      location: "Bengaluru",
      comment: "The trip dashboard is my favorite feature. I can see all my upcoming journeys in one place, and the notifications about platform changes have saved me twice already!",
      rating: 4,
      avatar: "AP",
      gradientColors: ["#A17FE0", "#F197E4"]
    },
    {
      name: "Vikram Singh",
      location: "Kolkata",
      comment: "As someone who travels weekly for business, having all my regular routes saved with price alerts makes planning so much easier. The mobile app works offline too!",
      rating: 5,
      avatar: "VS",
      gradientColors: ["#43B883", "#99E1D9"]
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        next();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, activeIndex]);

  const next = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 right-0 -z-10 opacity-10 h-96 w-96 text-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.1C87,14,81.3,28.1,73.4,41C65.6,53.9,55.6,65.7,42.9,73.7C30.2,81.7,15.1,85.9,0.9,84.5C-13.3,83,-26.7,75.9,-39.6,67.7C-52.5,59.4,-65,50,-74.2,37.1C-83.5,24.2,-89.6,7.8,-87.4,-7.2C-85.3,-22.2,-74.9,-35.8,-63.9,-47.8C-52.8,-59.7,-41.1,-70.1,-28.1,-77.9C-15.1,-85.7,-0.8,-91,14.3,-89C29.5,-87,44.7,-77.8,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 left-0 -z-10 opacity-10 h-96 w-96 text-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-65.7C52.1,-60.5,62.9,-50.6,69.5,-38.1C76.1,-25.6,78.5,-10.6,77.2,3.8C75.9,18.1,71,32,63.1,44.4C55.3,56.8,44.5,67.9,31.7,74.2C18.8,80.6,3.9,82.3,-9.6,78.3C-23.2,74.4,-35.5,64.8,-45.3,53.8C-55.1,42.8,-62.5,30.3,-68.1,16.5C-73.7,2.6,-77.5,-12.6,-74,-25.8C-70.5,-39,-59.7,-50.2,-47,-57.8C-34.3,-65.3,-19.8,-69.3,-4.8,-72C10.1,-74.7,27.7,-71.1,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>

        {/* Additional floating circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-primary/5 animate-float-slow`}
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-5 animate-fade-in"
          style={{
            animationFillMode: 'forwards',
            animationDuration: '0.7s'
          }}
        >
          <div className="inline-block p-2 px-4 rounded-full bg-primary/10 text-primary font-medium mb-4">
            User Experiences
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Thousands of travelers use our platform every day to book train tickets.
            Here's what they think about their experience with us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            key={activeIndex}
            className={`w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            <Card className="border-0 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  {/* Left gradient side */}
                  <div
                    className="md:col-span-1 p-8 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${testimonials[activeIndex].gradientColors[0]}, ${testimonials[activeIndex].gradientColors[1]})`
                    }}
                  >
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-white/20" />
                    <div className="h-24 w-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-3xl font-semibold shadow-lg"
                      style={{ color: testimonials[activeIndex].gradientColors[0] }}>
                      {testimonials[activeIndex].avatar}
                    </div>
                    <Quote className="absolute bottom-6 right-6 h-8 w-8 text-white/20 transform rotate-180" />
                  </div>

                  {/* Right content side */}
                  <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="animate-scale-in"
                          style={{
                            animationDelay: `${0.1 * i}s`,
                            animationDuration: '0.3s'
                          }}
                        >
                          <Star
                            className={cn(
                              "h-6 w-6",
                              i < testimonials[activeIndex].rating
                                ? "text-amber-500 fill-amber-500"
                                : "text-muted-foreground"
                            )}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed italic">
                      "{testimonials[activeIndex].comment}"
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <p className="font-bold text-xl">{testimonials[activeIndex].name}</p>
                      <span className="hidden md:inline text-muted-foreground">•</span>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                            fill="currentColor" />
                        </svg>
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              onClick={prev}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-3 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "w-10 bg-primary"
                      : "w-3 bg-primary/30 hover:bg-primary/50"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        {/* Additional testimonial stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 opacity-0 translate-y-8 animate-fade-up"
          style={{
            animationDelay: '0.3s',
            animationFillMode: 'forwards',
            animationDuration: '0.7s'
          }}
        >
          {[
            { label: "Satisfied Users", value: "10K+", icon: "👥" },
            { label: "Daily Bookings", value: "5,000+", icon: "🎫" },
            { label: "Average Rating", value: "4.8/5", icon: "⭐" },
            { label: "Cities Covered", value: "500+", icon: "🏙️" },
          ].map((stat, idx) => (
            <Card key={idx} className="border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full"></div>
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
