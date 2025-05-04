
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookingHistory } from "@/components/bookings/BookingHistory";
import { CancelledBookings } from "@/components/bookings/CancelledBookings";
import { BookingDetails } from "@/components/bookings/BookingDetails";
import { PersonaIcon } from "@/components/icons";

const Bookings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeBooking, setActiveBooking] = useState<string | null>(null);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  
  if (activeBooking) {
    return (
      <Layout>
        <div className="container py-8">
          <Button 
            variant="outline" 
            onClick={() => setActiveBooking(null)}
            className="mb-6"
          >
            Back to My Bookings
          </Button>
          <BookingDetails bookingId={activeBooking} onClose={() => setActiveBooking(null)} />
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">My Bookings</h1>
        
        {!isLoggedIn ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Login to View Bookings</CardTitle>
                <CardDescription>Enter your credentials to see your booking history</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email or Username</Label>
                    <Input id="email" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="link">Forgot Password?</Button>
              </CardFooter>
            </Card>
            
            <div className="flex flex-col justify-center space-y-4">
              <div className="text-center mb-4">
                <PersonaIcon className="h-24 w-24 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold">Access Your Travel History</h3>
                <p className="text-muted-foreground mt-2">
                  Track all your past, upcoming, and cancelled bookings in one place
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Easy ticket access</h4>
                    <p className="text-sm text-muted-foreground">Download e-tickets and boarding passes instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Track PNR status</h4>
                    <p className="text-sm text-muted-foreground">Get live updates on your booking status</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">One-click cancellation</h4>
                    <p className="text-sm text-muted-foreground">Cancel bookings and request refunds easily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="upcoming">Upcoming Journeys</TabsTrigger>
                    <TabsTrigger value="history">Travel History</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled Bookings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upcoming">
                    <BookingHistory status="upcoming" onViewDetails={setActiveBooking} />
                  </TabsContent>
                  
                  <TabsContent value="history">
                    <BookingHistory status="completed" onViewDetails={setActiveBooking} />
                  </TabsContent>
                  
                  <TabsContent value="cancelled">
                    <CancelledBookings onViewDetails={setActiveBooking} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Bookings;
