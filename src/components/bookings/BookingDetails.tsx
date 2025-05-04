
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  AlertCircleIcon, 
  CalendarDaysIcon, 
  Download, 
  Map, 
  MapPin, 
  MonitorSmartphone, 
  Share2, 
  TrainFront, 
  User
} from "lucide-react";

// Sample booking details
const bookingDetails = {
  id: "PNR8765432198",
  trainName: "Rajdhani Express",
  trainNumber: "12301",
  from: "New Delhi",
  fromCode: "NDLS",
  to: "Mumbai Central",
  toCode: "BCT",
  departureDate: "2025-05-15T16:55:00",
  arrivalDate: "2025-05-16T10:00:00",
  status: "Confirmed",
  fare: {
    baseFare: 2450,
    gst: 122.50,
    cateringCharges: 350,
    reservationCharges: 40,
    totalFare: 2962.50
  },
  passengers: [
    {
      name: "Raj Kumar",
      age: 35,
      gender: "Male",
      seat: "B1-22",
      status: "Confirmed"
    },
    {
      name: "Priya Kumar",
      age: 32,
      gender: "Female",
      seat: "B1-23",
      status: "Confirmed"
    }
  ],
  class: "3A",
  coach: "B1",
  distance: "1447 km",
  duration: "17h 5m",
  boardingPoint: {
    station: "New Delhi",
    code: "NDLS",
    platform: 3
  },
  bookingDate: "2025-04-20T14:30:00",
  stops: [
    { station: "New Delhi", code: "NDLS", arrival: "-", departure: "16:55", day: 1, platformNo: 3 },
    { station: "Mathura Junction", code: "MTJ", arrival: "18:50", departure: "18:52", day: 1, platformNo: 2 },
    { station: "Kota Junction", code: "KOTA", arrival: "00:40", departure: "00:45", day: 2, platformNo: 1 },
    { station: "Ratlam Junction", code: "RTM", arrival: "03:45", departure: "03:50", day: 2, platformNo: 1 },
    { station: "Vadodara Junction", code: "BRC", arrival: "06:35", departure: "06:40", day: 2, platformNo: 4 },
    { station: "Surat", code: "ST", arrival: "08:15", departure: "08:17", day: 2, platformNo: 2 },
    { station: "Mumbai Central", code: "BCT", arrival: "10:00", departure: "-", day: 2, platformNo: 5 }
  ]
};

interface BookingDetailsProps {
  bookingId: string;
  onClose: () => void;
}

export function BookingDetails({ bookingId, onClose }: BookingDetailsProps) {
  // This would normally fetch the booking details based on the ID
  // Here we're just using the sample data
  
  const formatDate = (dateString: string, includeTime = true) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    };
    
    if (includeTime) {
      options.hour = "2-digit";
      options.minute = "2-digit";
      options.hour12 = true;
    }
    
    return date.toLocaleDateString("en-IN", options);
  };
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };
  
  const calculateJourneyProgress = () => {
    const now = new Date();
    const departure = new Date(bookingDetails.departureDate);
    const arrival = new Date(bookingDetails.arrivalDate);
    
    if (now < departure) return 0;
    if (now > arrival) return 100;
    
    const totalDuration = arrival.getTime() - departure.getTime();
    const elapsed = now.getTime() - departure.getTime();
    return Math.round((elapsed / totalDuration) * 100);
  };
  
  const journeyProgress = calculateJourneyProgress();
  const journeyStarted = journeyProgress > 0;
  const journeyCompleted = journeyProgress >= 100;
  
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between flex-wrap gap-4">
                <div>
                  <Badge 
                    variant={journeyCompleted ? "secondary" : "default"}
                    className={journeyStarted && !journeyCompleted ? "bg-yellow-500" : ""}
                  >
                    {journeyCompleted ? "Completed" : journeyStarted ? "In Progress" : "Confirmed"}
                  </Badge>
                  <CardTitle className="mt-2">{bookingDetails.trainName}</CardTitle>
                  <CardDescription>{bookingDetails.trainNumber}</CardDescription>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" /> Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" /> E-Ticket
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                {/* Journey Progress */}
                {!journeyCompleted && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{journeyStarted ? "Journey in Progress" : "Not Started"}</span>
                      <span>{journeyProgress}% Complete</span>
                    </div>
                    <Progress value={journeyProgress} className="h-2" />
                  </div>
                )}
                
                {/* Journey Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {formatDate(bookingDetails.departureDate, false)}
                      </div>
                      <div className="text-2xl font-bold">{formatTime(bookingDetails.departureDate)}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{bookingDetails.from} ({bookingDetails.fromCode})</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Platform {bookingDetails.boardingPoint.platform}
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-primary h-12 ml-2 my-2"></div>
                    
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {formatDate(bookingDetails.arrivalDate, false)}
                      </div>
                      <div className="text-2xl font-bold">{formatTime(bookingDetails.arrivalDate)}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{bookingDetails.to} ({bookingDetails.toCode})</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent rounded-full">
                        <TrainFront className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Train Class</p>
                        <p className="text-sm text-muted-foreground">
                          {bookingDetails.class} - {bookingDetails.coach} Coach
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent rounded-full">
                        <CalendarDaysIcon className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Travel Duration</p>
                        <p className="text-sm text-muted-foreground">
                          {bookingDetails.duration} • {bookingDetails.distance}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent rounded-full">
                        <User className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Passengers</p>
                        <p className="text-sm text-muted-foreground">
                          {bookingDetails.passengers.length} Travelers
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent rounded-full">
                        <AlertCircleIcon className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">PNR Status</p>
                        <p className="text-sm text-muted-foreground">
                          {bookingDetails.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                {/* Passenger Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Passenger Details</h3>
                  <div className="overflow-auto">
                    <table className="min-w-full divide-y divide-border">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Age/Gender</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Seat</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {bookingDetails.passengers.map((passenger, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">{passenger.name}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">{passenger.age} / {passenger.gender}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">{passenger.seat}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <Badge variant={passenger.status === "Confirmed" ? "default" : "outline"}>
                                {passenger.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <Button className="w-full">
                    <Map className="mr-2 h-4 w-4" />
                    Track Journey
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MonitorSmartphone className="mr-2 h-4 w-4" />
                    Send to Phone
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Train Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Train Schedule</CardTitle>
              <CardDescription>Complete route with stops</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookingDetails.stops.map((stop, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 relative flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${
                        index === 0 ? "bg-green-500" :
                        index === bookingDetails.stops.length - 1 ? "bg-primary" :
                        "bg-accent border-2 border-primary"
                      }`}></div>
                      {index < bookingDetails.stops.length - 1 && (
                        <div className="w-0.5 bg-border flex-grow mt-1"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{stop.station} ({stop.code})</p>
                          <p className="text-sm text-muted-foreground">Day {stop.day}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-4">
                            <div>
                              <p className="text-sm font-medium">Arrival</p>
                              <p className="text-sm">{stop.arrival}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Departure</p>
                              <p className="text-sm">{stop.departure}</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Platform {stop.platformNo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Fare Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Fare Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Base Fare</span>
                  <span className="text-sm">₹{bookingDetails.fare.baseFare.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Reservation Charges</span>
                  <span className="text-sm">₹{bookingDetails.fare.reservationCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Catering Charges</span>
                  <span className="text-sm">₹{bookingDetails.fare.cateringCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">GST</span>
                  <span className="text-sm">₹{bookingDetails.fare.gst.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total Amount</span>
                  <span>₹{bookingDetails.fare.totalFare.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Booking Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Booking Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">PNR Number</p>
                  <p className="font-medium">{bookingDetails.id}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Booked On</p>
                  <p>{formatDate(bookingDetails.bookingDate)}</p>
                </div>
                <Separator />
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    <AlertCircleIcon className="mr-2 h-4 w-4" />
                    Report an Issue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Important Information */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <div className="bg-primary/10 p-1 rounded-full h-5 w-5 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Arrive at the station at least 30 minutes before departure.</span>
                </li>
                <li className="flex gap-2">
                  <div className="bg-primary/10 p-1 rounded-full h-5 w-5 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Carry a valid ID proof in original for all passengers.</span>
                </li>
                <li className="flex gap-2">
                  <div className="bg-primary/10 p-1 rounded-full h-5 w-5 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Download e-ticket for a hassle-free journey.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
