
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDaysIcon,
  ChevronRightIcon,
  DownloadIcon,
  InfoIcon,
  TrainFront
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample booking data
const upcomingBookings = [
  {
    id: "PNR8765432198",
    trainName: "Rajdhani Express",
    trainNumber: "12301",
    from: "New Delhi",
    to: "Mumbai Central",
    departureDate: "2025-05-15",
    departureTime: "16:55",
    status: "Confirmed",
    passengers: 2,
    class: "3A"
  },
  {
    id: "PNR8765432199",
    trainName: "Shatabdi Express",
    trainNumber: "12009",
    from: "New Delhi",
    to: "Bhopal",
    departureDate: "2025-05-20",
    departureTime: "06:15",
    status: "RAC",
    passengers: 1,
    class: "CC"
  }
];

const completedBookings = [
  {
    id: "PNR8765432197",
    trainName: "Howrah Mail",
    trainNumber: "12322",
    from: "Howrah Junction",
    to: "New Delhi",
    departureDate: "2025-04-10",
    departureTime: "23:55",
    status: "Completed",
    passengers: 3,
    class: "SL"
  },
  {
    id: "PNR8765432196",
    trainName: "Duronto Express",
    trainNumber: "12213",
    from: "Mumbai Central",
    to: "New Delhi",
    departureDate: "2025-03-22",
    departureTime: "11:05",
    status: "Completed",
    passengers: 2,
    class: "2A"
  },
  {
    id: "PNR8765432195",
    trainName: "Tamil Nadu Express",
    trainNumber: "12621",
    from: "New Delhi",
    to: "Chennai Central",
    departureDate: "2025-02-15",
    departureTime: "22:30",
    status: "Completed",
    passengers: 1,
    class: "3A"
  }
];

interface BookingHistoryProps {
  status: "upcoming" | "completed";
  onViewDetails: (id: string) => void;
}

export function BookingHistory({ status, onViewDetails }: BookingHistoryProps) {
  const bookings = status === "upcoming" ? upcomingBookings : completedBookings;

  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-muted inline-flex rounded-full p-4 mb-4">
          <CalendarDaysIcon className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium">No {status} bookings</h3>
        <p className="text-muted-foreground mt-2">
          {status === "upcoming" 
            ? "You don't have any upcoming train journeys." 
            : "Your travel history will appear here."}
        </p>
        <Button className="mt-4" variant="outline">Book a Train</Button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <div className="space-y-4">
      {bookings.map(booking => (
        <Card key={booking.id} className="overflow-hidden animate-fade-in">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-7 p-4 gap-4">
              {/* Train and journey info */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-center gap-2">
                  <TrainFront className="text-primary h-5 w-5" />
                  <h3 className="font-medium">{booking.trainName}</h3>
                  <span className="text-sm text-muted-foreground">({booking.trainNumber})</span>
                  <Badge 
                    variant={booking.status === "Confirmed" ? "default" : 
                           booking.status === "RAC" ? "outline" : "secondary"}
                    className={cn(
                      booking.status === "Confirmed" && "bg-green-500",
                      booking.status === "Completed" && "bg-blue-500"
                    )}
                  >
                    {booking.status}
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <div>
                    <p className="text-xl font-semibold">{booking.departureTime}</p>
                    <p className="text-sm text-muted-foreground">{booking.from}</p>
                  </div>
                  
                  <div className="hidden sm:block">
                    <div className="w-20 h-[1px] bg-border relative">
                      <ChevronRightIcon className="absolute -right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="block sm:hidden">
                    <div className="h-6 w-[1px] bg-border relative">
                      <ChevronRightIcon className="absolute left-1/2 -translate-x-1/2 -bottom-2 rotate-90 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">{booking.to}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{formatDate(booking.departureDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm">{booking.passengers} Passenger{booking.passengers > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 8h.01M7 12h.01M7 16h.01M11 8h6M11 12h6M11 16h6" />
                    </svg>
                    <span className="text-sm">Class: {booking.class}</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col justify-between gap-3">
                <div>
                  <div className="text-sm font-medium">PNR Number</div>
                  <div className="text-sm text-muted-foreground mt-1">{booking.id}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => onViewDetails(booking.id)}
                  >
                    View Details
                  </Button>
                  
                  {status === "upcoming" ? (
                    <Button 
                      size="sm" 
                      variant="outline"
                    >
                      Cancel Booking
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline"
                    >
                      <DownloadIcon className="h-4 w-4 mr-1" /> E-Ticket
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            {status === "upcoming" && booking.status === "Confirmed" && (
              <div className="border-t p-3 bg-accent/20 flex items-center gap-3 text-sm">
                <InfoIcon className="h-4 w-4 text-primary" />
                <p>Download your E-ticket 4 hours before departure.</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
