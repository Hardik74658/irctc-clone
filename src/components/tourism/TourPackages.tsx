
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Train, Users, Utensils } from "lucide-react";

export function TourPackages() {
  const tourPackages = [
    {
      title: "Golden Triangle Tour",
      image: "https://source.unsplash.com/random/300x200/?delhi,agra,jaipur",
      description: "Experience the culture, history and architecture of India's famous Golden Triangle circuit.",
      duration: "6 Days / 5 Nights",
      destinations: ["Delhi", "Agra", "Jaipur"],
      price: 25999,
      amenities: ["Railway Tickets", "Hotel Stays", "Meals", "Sightseeing"],
      featured: true,
      discount: "15% OFF"
    },
    {
      title: "Kerala Backwaters",
      image: "https://source.unsplash.com/random/300x200/?kerala,backwaters",
      description: "Explore God's Own Country with scenic backwaters, beaches, and lush green landscapes.",
      duration: "5 Days / 4 Nights",
      destinations: ["Kochi", "Munnar", "Alleppey", "Kovalam"],
      price: 22999,
      amenities: ["Railway Tickets", "Hotel Stays", "Houseboat", "Meals"],
      featured: false
    },
    {
      title: "Himalayan Explorer",
      image: "https://source.unsplash.com/random/300x200/?himalayas,mountains",
      description: "Journey through the majestic Himalayas with scenic train rides and mountain views.",
      duration: "7 Days / 6 Nights",
      destinations: ["Delhi", "Kalka", "Shimla", "Dharamshala"],
      price: 28999,
      amenities: ["Toy Train", "Hotel Stays", "Meals", "Guided Tours"],
      featured: true
    },
    {
      title: "Spiritual Journey",
      image: "https://source.unsplash.com/random/300x200/?varanasi,temple",
      description: "Discover India's spiritual heritage through its ancient temples and sacred sites.",
      duration: "4 Days / 3 Nights",
      destinations: ["Varanasi", "Prayagraj", "Gaya"],
      price: 18999,
      amenities: ["Railway Tickets", "Hotel Stays", "Ganga Aarti", "Guided Tours"],
      featured: false
    },
    {
      title: "Royal Rajasthan",
      image: "https://source.unsplash.com/random/300x200/?rajasthan,fort",
      description: "Experience the royal heritage, vibrant culture and desert landscapes of Rajasthan.",
      duration: "8 Days / 7 Nights",
      destinations: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
      price: 32999,
      amenities: ["Railway Tickets", "Hotel Stays", "Cultural Shows", "Desert Safari"],
      featured: false
    },
    {
      title: "Northeast Explorer",
      image: "https://source.unsplash.com/random/300x200/?assam,meghalaya",
      description: "Discover the unexplored beauty of India's Northeast with its unique culture and landscapes.",
      duration: "7 Days / 6 Nights",
      destinations: ["Guwahati", "Shillong", "Cherrapunji", "Kaziranga"],
      price: 29999,
      amenities: ["Railway Tickets", "Hotel Stays", "Wildlife Safari", "Tribal Village Visit"],
      featured: true,
      discount: "10% OFF"
    }
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Popular Tour Packages</h2>
          <p className="text-muted-foreground">All-inclusive railway tour packages</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">All</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">North India</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">South India</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">East India</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">Hill Stations</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tourPackages.map((pack, index) => (
          <Card key={index} className="overflow-hidden h-full flex flex-col card-hover">
            <div className="relative overflow-hidden">
              <img 
                src={pack.image} 
                alt={pack.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              {pack.featured && (
                <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Featured
                </div>
              )}
              {pack.discount && (
                <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-medium">
                  {pack.discount}
                </div>
              )}
            </div>
            
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-lg">{pack.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 pt-3 flex-1">
              <p className="text-sm text-muted-foreground mb-3">
                {pack.description}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{pack.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{pack.destinations.join(" • ")}</span>
                </div>
                <div className="flex items-center">
                  <Train className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Train travel included</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-3">
                {pack.amenities.map((amenity, i) => {
                  const icon = amenity.includes('Rail') ? <Train className="h-3 w-3" /> :
                            amenity.includes('Hotel') ? <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M12 14h.01M7 7v5M17 7v5M12 2v2M8 2v2M16 2v2"/></svg> :
                            amenity.includes('Meal') ? <Utensils className="h-3 w-3" /> :
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12v.01M12 16v.01M12 8v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
                            
                  return (
                    <div key={i} className="flex items-center bg-accent text-xs rounded-full px-2 py-1 gap-1">
                      {icon}
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0 border-t mt-3">
              <div className="w-full flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Starting from</p>
                  <p className="font-bold">₹{pack.price.toLocaleString('en-IN')}</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
                <Button>View Details</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button variant="outline" size="lg">View All Packages</Button>
      </div>
    </div>
  );
}
