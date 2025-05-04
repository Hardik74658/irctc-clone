
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Train } from "lucide-react";

export function PopularDestinations() {
  const destinations = [
    {
      name: "Taj Mahal, Agra",
      image: "https://source.unsplash.com/random/600x400/?taj,mahal",
      description: "Symbol of eternal love, the Taj Mahal is a white marble mausoleum located on the southern bank of the Yamuna River.",
      station: "Agra Cantt (AGC)",
      distance: "233 km from Delhi",
      category: ["Heritage", "UNESCO Site"],
      rating: 4.8
    },
    {
      name: "Varanasi Ghats",
      image: "https://source.unsplash.com/random/600x400/?varanasi,ghats",
      description: "Spiritual capital of India, the ghats of Varanasi along the banks of the Ganges River offer a mystical experience.",
      station: "Varanasi Junction (BSB)",
      distance: "797 km from Delhi",
      category: ["Religious", "Heritage"],
      rating: 4.7
    },
    {
      name: "Darjeeling",
      image: "https://source.unsplash.com/random/600x400/?darjeeling,tea",
      description: "Queen of the hills, famous for its tea plantations, the Darjeeling Himalayan Railway and panoramic views of Kanchenjunga.",
      station: "New Jalpaiguri (NJP)",
      distance: "580 km from Kolkata",
      category: ["Hill Station", "UNESCO Site"],
      rating: 4.6
    },
    {
      name: "Goa Beaches",
      image: "https://source.unsplash.com/random/600x400/?goa,beach",
      description: "Famous for its pristine beaches, Goa blends Indian and Portuguese cultures with a laid-back atmosphere.",
      station: "Madgaon (MAO)",
      distance: "590 km from Mumbai",
      category: ["Beaches", "Nightlife"],
      rating: 4.5
    },
    {
      name: "Jaipur Pink City",
      image: "https://source.unsplash.com/random/600x400/?jaipur,palace",
      description: "The Pink City is known for its colorful streets, majestic palaces, and vibrant culture of Rajasthan.",
      station: "Jaipur Junction (JP)",
      distance: "268 km from Delhi",
      category: ["Heritage", "Culture"],
      rating: 4.7
    },
    {
      name: "Munnar Hills",
      image: "https://source.unsplash.com/random/600x400/?munnar,hills",
      description: "Known for its picturesque valleys, mountains and tea plantations, Munnar is a popular hill station in Kerala.",
      station: "Aluva (AWY)",
      distance: "110 km from Aluva",
      category: ["Hill Station", "Nature"],
      rating: 4.6
    }
  ];
  
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Popular Destinations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <Card key={index} className="overflow-hidden card-hover">
            <div className="relative h-60 overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
              />
              <div className="absolute top-0 right-0 bg-background/80 backdrop-blur-sm m-3 px-2 py-1 rounded-md flex items-center">
                <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="ml-1 font-medium text-sm">{destination.rating}</span>
              </div>
            </div>
            <CardContent className="p-5">
              <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">
                {destination.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.category.map(cat => (
                  <Badge key={cat} variant="secondary">{cat}</Badge>
                ))}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Train className="h-4 w-4 mr-2" />
                <span>Nearest Station: {destination.station}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{destination.distance}</span>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1">Explore</Button>
                <Button variant="outline" className="flex-1">Book Tour</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button variant="outline" size="lg">View All Destinations</Button>
      </div>
    </div>
  );
}
