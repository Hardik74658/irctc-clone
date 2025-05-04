import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Clock, 
  Coffee, 
  MapPin, 
  Shield, 
  Star, 
  Train as TrainIcon, 
  Wifi 
} from "lucide-react";
import { format } from "date-fns";

// Sample train data - in a real app, this would come from an API
const sampleTrains = [
  {
    id: "12301",
    name: "Rajdhani Express",
    from: "New Delhi (NDLS)",
    to: "Howrah Junction (HWH)",
    departureTime: "16:55",
    arrivalTime: "10:00",
    duration: "17h 05m",
    distance: "1,447 km",
    classes: [
      { type: "1A", available: 4, price: 3245 },
      { type: "2A", available: 12, price: 1890 },
      { type: "3A", available: 28, price: 1320 }
    ],
    amenities: ["meals", "wifi", "charging", "bedding"]
  },
  {
    id: "12259",
    name: "Duronto Express",
    from: "New Delhi (NDLS)",
    to: "Sealdah (SDAH)",
    departureTime: "12:20",
    arrivalTime: "06:20",
    duration: "18h 00m",
    distance: "1,453 km",
    classes: [
      { type: "2A", available: 0, price: 1950 },
      { type: "3A", available: 8, price: 1385 },
      { type: "SL", available: 45, price: 690 }
    ],
    amenities: ["meals", "charging", "bedding"]
  },
  {
    id: "12303",
    name: "Poorva Express",
    from: "New Delhi (NDLS)",
    to: "Howrah Junction (HWH)",
    departureTime: "08:30",
    arrivalTime: "07:45",
    duration: "23h 15m",
    distance: "1,532 km",
    classes: [
      { type: "2A", available: 6, price: 1760 },
      { type: "3A", available: 22, price: 1225 },
      { type: "SL", available: 120, price: 640 },
      { type: "2S", available: 40, price: 350 }
    ],
    amenities: ["charging", "food"]
  },
  {
    id: "12274",
    name: "Howrah Delhi Duronto Express",
    from: "New Delhi (NDLS)",
    to: "Howrah Junction (HWH)",
    departureTime: "22:05",
    arrivalTime: "13:00",
    duration: "14h 55m",
    distance: "1,435 km",
    classes: [
      { type: "1A", available: 2, price: 3450 },
      { type: "2A", available: 0, price: 2050 },
      { type: "3A", available: 16, price: 1450 }
    ],
    amenities: ["meals", "charging", "bedding"]
  }
];

interface TrainResultsProps {
  fromStation: string;
  toStation: string;
  date: Date;
  travelClass?: string;
  passengers?: number;
}

export function TrainResults({ fromStation, toStation, date, travelClass = 'all', passengers = 1 }: TrainResultsProps) {
  // Filter trains based on selected class - in a real app, this would apply actual filters
  const filteredTrains = travelClass === 'all' 
    ? sampleTrains 
    : sampleTrains.filter(train => 
        train.classes.some(cls => cls.type.toLowerCase() === travelClass.replace('ac-', '').toLowerCase())
      );
  
  const formatRunsOn = () => {
    const day = date.getDay();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `Runs on: ${daysOfWeek[day]}`;
  };
  
  if (filteredTrains.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <h3 className="text-lg font-medium">No trains found</h3>
          <p className="text-muted-foreground mt-2">
            {travelClass !== 'all'
              ? `No trains available with ${travelClass.toUpperCase()} class. Try a different class or another date.`
              : 'Try adjusting your search criteria or selecting different dates.'
            }
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-4">
      {filteredTrains.map(train => (
        <Card key={train.id} className="overflow-hidden animate-fade-in">
          <CardContent className="p-0">
            <div className="p-4 bg-accent/30">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <TrainIcon className="text-primary h-5 w-5" />
                  <h3 className="font-medium">{train.name}</h3>
                  <span className="text-sm text-muted-foreground">({train.id})</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatRunsOn()}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-7 p-4 gap-4">
              {/* Train info */}
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xl font-semibold">{train.departureTime}</p>
                    <p className="text-sm text-muted-foreground mt-1">{fromStation.split('(')[0].trim()}</p>
                    <p className="text-xs text-muted-foreground">{format(date, "dd MMM, EEE")}</p>
                  </div>
                  
                  <div className="flex flex-col items-center px-2">
                    <p className="text-xs text-muted-foreground mb-1">{train.duration}</p>
                    <div className="w-20 h-[1px] bg-border relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{train.distance}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xl font-semibold">{train.arrivalTime}</p>
                    <p className="text-sm text-muted-foreground mt-1">{toStation.split('(')[0].trim()}</p>
                    <p className="text-xs text-muted-foreground">
                      {train.arrivalTime < train.departureTime ? 'Next Day' : format(date, "dd MMM, EEE")}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {train.amenities.includes("meals") && (
                    <Badge variant="outline" className="flex gap-1 items-center">
                      <Coffee className="h-3 w-3" /> Meals
                    </Badge>
                  )}
                  {train.amenities.includes("wifi") && (
                    <Badge variant="outline" className="flex gap-1 items-center">
                      <Wifi className="h-3 w-3" /> WiFi
                    </Badge>
                  )}
                  {train.amenities.includes("charging") && (
                    <Badge variant="outline">Charging Points</Badge>
                  )}
                </div>
              </div>
              
              <Separator className="md:hidden" />
              
              {/* Booking options */}
              <div className="md:col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {train.classes.map(cls => (
                    <div key={cls.type} className="border rounded-md p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{cls.type}</p>
                          <p className="text-sm text-muted-foreground">
                            {cls.available > 0 ? `${cls.available} available` : "Waitlist"}
                          </p>
                        </div>
                        <p className="font-semibold">₹{cls.price * passengers}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {passengers > 1 ? `₹${cls.price} × ${passengers} passengers` : 'Per passenger'}
                      </p>
                      <Button 
                        className="w-full mt-2" 
                        size="sm"
                        variant={cls.available > 0 ? "default" : "outline"}
                        disabled={cls.available === 0}
                      >
                        {cls.available > 0 ? "Book Now" : "Waitlist"}
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-3">
                  <Button variant="outline" size="sm" className="text-xs">View Train Details</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
