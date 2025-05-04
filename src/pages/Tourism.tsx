
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock, 
  Hotel, 
  Map, 
  MapPin, 
  Search, 
  Star, 
  Ticket, 
  Utensils, 
  Users 
} from "lucide-react";
import { TrainIcon } from "@/components/icons"; // Import from our icons component
import { TourPackages } from "@/components/tourism/TourPackages";
import { HotelPackages } from "@/components/tourism/HotelPackages";
import { PopularDestinations } from "@/components/tourism/PopularDestinations";

const Tourism = () => {
  const [activeTab, setActiveTab] = useState("destinations");
  
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 -z-10" />
        
        <div className="container py-10 md:py-14">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover India by Rail</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Explore incredible destinations across India with our curated tour packages, hotels, 
              and premium travel experiences
            </p>
          </div>
          
          <Card className="mb-10">
            <CardContent className="p-6">
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="destinations">Popular Destinations</TabsTrigger>
                  <TabsTrigger value="tourpackages">Tour Packages</TabsTrigger>
                  <TabsTrigger value="hotels">Hotels</TabsTrigger>
                  <TabsTrigger value="lounges">Station Lounges</TabsTrigger>
                </TabsList>
                
                <TabsContent value="destinations">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="text" placeholder="Search destinations" className="pl-8" />
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north">North India</SelectItem>
                          <SelectItem value="south">South India</SelectItem>
                          <SelectItem value="east">East India</SelectItem>
                          <SelectItem value="west">West India</SelectItem>
                          <SelectItem value="central">Central India</SelectItem>
                          <SelectItem value="northeast">Northeast India</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Find Destinations
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary" className="cursor-pointer hover:bg-accent">Heritage</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-accent">Hill Stations</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-accent">Beaches</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-accent">Religious</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-accent">Wildlife</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-accent">Adventure</Badge>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-accent">Luxury</Badge>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tourpackages">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="text" placeholder="Search packages" className="pl-8" />
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 Days</SelectItem>
                          <SelectItem value="4-7">4-7 Days</SelectItem>
                          <SelectItem value="8-14">8-14 Days</SelectItem>
                          <SelectItem value="15+">15+ Days</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="comfort">Comfort</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Find Packages
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="hotels">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="relative">
                        <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="text" placeholder="Destination or hotel name" className="pl-8" />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="text" placeholder="Check-in / Check-out" className="pl-8" />
                      </div>
                      <div className="relative">
                        <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="text" placeholder="2 Adults, 0 Children" className="pl-8" />
                      </div>
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Search Hotels
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="lounges">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="text" placeholder="Search by station" className="pl-8" />
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Lounge Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="executive">Executive Lounge</SelectItem>
                          <SelectItem value="premium">Premium Lounge</SelectItem>
                          <SelectItem value="standard">Standard Lounge</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Find Lounges
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Content based on selected tab */}
          {activeTab === "destinations" && <PopularDestinations />}
          {activeTab === "tourpackages" && <TourPackages />}
          {activeTab === "hotels" && <HotelPackages />}
          {activeTab === "lounges" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Premium Railway Lounges</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Lounge Cards */}
                  {[
                    { 
                      station: "New Delhi Railway Station", 
                      code: "NDLS",
                      type: "Executive Lounge",
                      features: ["WiFi", "Refreshments", "Shower", "Recliner"],
                      price: "₹300/hour"
                    },
                    { 
                      station: "Mumbai Central", 
                      code: "BCT",
                      type: "Premium Lounge",
                      features: ["WiFi", "Refreshments", "Shower"],
                      price: "₹250/hour"
                    },
                    { 
                      station: "Howrah Junction", 
                      code: "HWH",
                      type: "Executive Lounge",
                      features: ["WiFi", "Refreshments", "Recliner"],
                      price: "₹275/hour"
                    },
                    { 
                      station: "Chennai Central", 
                      code: "MAS",
                      type: "Premium Lounge",
                      features: ["WiFi", "Refreshments", "Shower"],
                      price: "₹250/hour"
                    },
                    { 
                      station: "Bengaluru City Junction", 
                      code: "SBC",
                      type: "Standard Lounge",
                      features: ["WiFi", "Refreshments"],
                      price: "₹200/hour"
                    },
                    { 
                      station: "Ahmedabad Junction", 
                      code: "ADI",
                      type: "Standard Lounge",
                      features: ["WiFi", "Refreshments"],
                      price: "₹180/hour"
                    }
                  ].map((lounge, index) => (
                    <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{lounge.station}</CardTitle>
                        <CardDescription>{lounge.code} - {lounge.type}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex flex-wrap gap-2 py-2">
                          {lounge.features.map((feature, i) => (
                            <Badge key={i} variant="outline">{feature}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="font-semibold">{lounge.price}</div>
                          <div className="flex items-center text-sm text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-2">
                        <Button className="w-full">Book Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Station Lounge Benefits</h3>
                    <p className="text-muted-foreground mb-4">
                      Enjoy premium facilities while you wait for your train. Our lounges provide 
                      a comfortable space with essential amenities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1 rounded-full">
                          <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Comfortable seating and recliner chairs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1 rounded-full">
                          <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>High-speed WiFi and charging points</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1 rounded-full">
                          <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Complimentary refreshments and snacks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1 rounded-full">
                          <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Clean washrooms and shower facilities</span>
                      </li>
                    </ul>
                    <Button className="mt-6">Learn More About Lounges</Button>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">Book Lounge Access</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Select Station</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a station" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ndls">New Delhi (NDLS)</SelectItem>
                            <SelectItem value="bct">Mumbai Central (BCT)</SelectItem>
                            <SelectItem value="hwh">Howrah Junction (HWH)</SelectItem>
                            <SelectItem value="mas">Chennai Central (MAS)</SelectItem>
                            <SelectItem value="sbc">Bengaluru City (SBC)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Date</label>
                          <Input type="date" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Hours</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select hours" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Hour</SelectItem>
                              <SelectItem value="2">2 Hours</SelectItem>
                              <SelectItem value="3">3 Hours</SelectItem>
                              <SelectItem value="4">4 Hours</SelectItem>
                              <SelectItem value="5">5+ Hours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Number of Guests</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button className="w-full">Check Availability</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Tourism Services */}
          <div className="mt-12 pt-4 border-t">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Tourism Services</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-accent/40 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Ticket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Tour Packages</h3>
                  <p className="text-sm text-muted-foreground">
                    All-inclusive tour packages with train tickets, hotels, and sightseeing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/40 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Hotel className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Hotel Bookings</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium and budget accommodations near railway stations across India
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/40 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Catering Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Pre-book meals for your journey with multiple cuisine options
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/40 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Luxury Trains</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience royal journeys on luxury trains like Palace on Wheels
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Featured Destinations */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold">Featured Destinations</h2>
                <p className="text-muted-foreground">Popular tourist spots accessible by train</p>
              </div>
              <Button variant="outline">
                <Map className="mr-2 h-4 w-4" />
                View All Destinations
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Taj Mahal, Agra",
                  image: "https://source.unsplash.com/random/300x200/?taj,mahal",
                  duration: "1-2 days",
                  station: "Agra Cantt (AGC)"
                },
                {
                  name: "Varanasi Ghats",
                  image: "https://source.unsplash.com/random/300x200/?varanasi,ghats",
                  duration: "2-3 days",
                  station: "Varanasi Junction (BSB)"
                },
                {
                  name: "Jaipur Pink City",
                  image: "https://source.unsplash.com/random/300x200/?jaipur",
                  duration: "3-4 days",
                  station: "Jaipur Junction (JP)"
                },
                {
                  name: "Darjeeling",
                  image: "https://source.unsplash.com/random/300x200/?darjeeling,himalayas",
                  duration: "3-4 days",
                  station: "New Jalpaiguri (NJP)"
                }
              ].map((destination, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{destination.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-sm text-muted-foreground">{destination.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <TrainIcon className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-sm text-muted-foreground">{destination.station}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Explore Packages</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Tourism Newsletter */}
          <div className="mt-16 bg-accent rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Get Travel Inspiration</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, travel guides, and updates about new tour packages
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tourism;
