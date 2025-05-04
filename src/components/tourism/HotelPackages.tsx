
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Coffee, Tv } from "lucide-react";
import { TrainIcon } from "@/components/icons"; // Import the TrainIcon from our icons component

export function HotelPackages() {
  const hotels = [
    {
      name: "Taj Palace Hotel",
      location: "New Delhi",
      image: "https://source.unsplash.com/random/300x200/?luxury,hotel",
      description: "Luxury 5-star hotel with excellent amenities and world-class service.",
      rating: 4.8,
      price: 12500,
      nearestStation: "New Delhi Railway Station (1.5 km)",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Room Service"],
      discount: "15% Off"
    },
    {
      name: "The Oberoi Grand",
      location: "Kolkata",
      image: "https://source.unsplash.com/random/300x200/?heritage,hotel",
      description: "Historic luxury hotel in the heart of Kolkata with colonial architecture.",
      rating: 4.7,
      price: 9800,
      nearestStation: "Howrah Junction (3 km)",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Fitness Center"]
    },
    {
      name: "Taj Mahal Palace",
      location: "Mumbai",
      image: "https://source.unsplash.com/random/300x200/?mumbai,hotel",
      description: "Iconic 5-star hotel overlooking the Arabian Sea with luxury amenities.",
      rating: 4.9,
      price: 15500,
      nearestStation: "Mumbai CST (2 km)",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Multiple Restaurants", "Bar"],
      discount: "10% Off"
    },
    {
      name: "The Leela Palace",
      location: "Bengaluru",
      image: "https://source.unsplash.com/random/300x200/?bangalore,hotel",
      description: "Luxury resort with lush gardens and world-class amenities in the Garden City.",
      rating: 4.8,
      price: 11200,
      nearestStation: "Bengaluru City Jn. (7 km)",
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Business Center"]
    },
    {
      name: "Railway Retreat",
      location: "Jaipur",
      image: "https://source.unsplash.com/random/300x200/?jaipur,hotel",
      description: "Comfortable hotel located just steps away from Jaipur Railway Station.",
      rating: 4.2,
      price: 4500,
      nearestStation: "Jaipur Junction (0.2 km)",
      amenities: ["Free WiFi", "Restaurant", "24h Reception", "AC Rooms", "Railway View"]
    },
    {
      name: "Station Suites",
      location: "Chennai",
      image: "https://source.unsplash.com/random/300x200/?chennai,hotel",
      description: "Modern hotel offering convenience and comfort near Chennai Central.",
      rating: 4.3,
      price: 5200,
      nearestStation: "Chennai Central (0.5 km)",
      amenities: ["Free WiFi", "Restaurant", "Airport Shuttle", "AC Rooms"]
    }
  ];
  
  const renderAmenityIcon = (amenity: string) => {
    if (amenity.includes("WiFi")) return <Wifi className="h-4 w-4" />;
    if (amenity.includes("Restaurant")) return <Coffee className="h-4 w-4" />;
    if (amenity.includes("TV") || amenity.includes("Television")) return <Tv className="h-4 w-4" />;
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 12v.01M12 16v.01M12 8v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };
  
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Hotel Accommodations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <Card key={index} className="overflow-hidden flex flex-col card-hover">
            <div className="relative">
              <img 
                src={hotel.image} 
                alt={hotel.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              {hotel.discount && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-medium">
                  {hotel.discount}
                </div>
              )}
            </div>
            
            <CardContent className="p-4 pb-0 flex-1">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold text-lg">{hotel.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  <span className="text-sm ml-1">{hotel.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{hotel.location}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {hotel.description}
              </p>
              
              <div className="flex items-center text-sm mb-3">
                <TrainIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{hotel.nearestStation}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {hotel.amenities.slice(0, 3).map((amenity, i) => (
                  <Badge key={i} variant="outline" className="flex items-center gap-1">
                    {renderAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </Badge>
                ))}
                {hotel.amenities.length > 3 && (
                  <Badge variant="outline">+{hotel.amenities.length - 3} more</Badge>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 border-t">
              <div className="w-full flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Price per night</p>
                  <p className="font-bold">₹{hotel.price.toLocaleString('en-IN')}</p>
                </div>
                <Button>Book Now</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button variant="outline" size="lg">View All Hotels</Button>
      </div>
    </div>
  );
}
