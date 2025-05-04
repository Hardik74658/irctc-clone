
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function LiveTracker() {
  const [progress, setProgress] = useState(45);
  
  useEffect(() => {
    // Simulate train movement with progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 0.5;
        return nextProgress > 100 ? 45 : nextProgress;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Sample train data
  const train = {
    name: "Rajdhani Express",
    number: "12301",
    from: "Howrah Junction",
    to: "New Delhi",
    departureTime: "16:55",
    arrivalTime: "10:00",
    currentStation: "Kanpur Central",
    nextStation: "Etawah",
    delay: 5,
    stops: [
      { name: "Howrah Junction", code: "HWH", time: "16:55", status: "departed", distance: 0 },
      { name: "Asansol Junction", code: "ASN", time: "19:11", status: "departed", distance: 225 },
      { name: "Dhanbad Junction", code: "DHN", time: "20:13", status: "departed", distance: 312 },
      { name: "Gaya Junction", code: "GAYA", time: "21:56", status: "departed", distance: 452 },
      { name: "Mughalsarai Junction", code: "MGS", time: "00:12", status: "departed", distance: 647 },
      { name: "Kanpur Central", code: "CNB", time: "04:35", status: "current", distance: 935 },
      { name: "Etawah", code: "ETW", time: "06:10", status: "upcoming", distance: 1048 },
      { name: "New Delhi", code: "NDLS", time: "10:00", status: "upcoming", distance: 1447 }
    ]
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Live Train Tracking
          </h2>
          <p className="text-muted-foreground">
            Get real-time updates about your train's location, delays, and estimated arrival times.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border shadow-card overflow-hidden animate-slide-in">
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center">
                  <h3 className="text-xl font-bold">{train.name}</h3>
                  <span className="ml-2 text-sm bg-accent px-2 py-0.5 rounded">#{train.number}</span>
                </div>
                <div className="flex items-center mt-1 text-muted-foreground">
                  <span>{train.from}</span>
                  <ArrowRight className="mx-1 h-3 w-3" />
                  <span>{train.to}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="text-sm text-muted-foreground">Current Delay</p>
                  <p className="font-medium text-amber-500">{train.delay} mins</p>
                </div>
                <Button>Track on Map</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex justify-between mb-2 text-sm">
                <span>{train.departureTime}</span>
                <span>{train.arrivalTime} (+1)</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>{train.from}</span>
                <span className="font-medium text-primary">{train.currentStation}</span>
                <span>{train.to}</span>
              </div>
            </div>
            
            <div className="space-y-1 mt-6">
              <p className="text-sm font-medium">Next Station: {train.nextStation}</p>
              <p className="text-xs text-muted-foreground">Expected arrival in 38 minutes</p>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h4 className="text-sm font-medium mb-4">Journey Progress</h4>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>
                <div className="relative z-10 flex justify-between">
                  {train.stops.map((stop, i) => {
                    const isCurrent = stop.status === "current";
                    const isPast = stop.status === "departed";
                    const isFuture = stop.status === "upcoming";
                    
                    return (
                      <div key={stop.code} className="flex flex-col items-center">
                        <div 
                          className={`h-4 w-4 rounded-full flex items-center justify-center ${
                            isCurrent ? "bg-primary border-4 border-primary/20" :
                            isPast ? "bg-primary" : "bg-accent"
                          }`}
                        >
                          {isCurrent && (
                            <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 rounded-full border-4 border-primary animate-pulse-slow opacity-60" />
                          )}
                        </div>
                        {(i === 0 || i === train.stops.length - 1 || isCurrent) && (
                          <div className={`mt-2 text-xs whitespace-nowrap ${isCurrent ? "font-medium text-primary" : ""}`}>
                            {stop.code}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="outline">View all running trains</Button>
        </div>
      </div>
    </section>
  );
}
