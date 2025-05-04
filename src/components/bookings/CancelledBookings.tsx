
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircleIcon, 
  AlertTriangleIcon, 
  CalendarDaysIcon, 
  ChevronRightIcon,
  TrainFront
} from "lucide-react";

// Sample cancelled booking data
const cancelledBookings = [
  {
    id: "PNR8765432190",
    trainName: "Shatabdi Express",
    trainNumber: "12002",
    from: "New Delhi",
    to: "Lucknow",
    departureDate: "2025-04-05",
    departureTime: "06:15",
    status: "Cancelled",
    refundStatus: "Processed",
    refundAmount: 1245,
    cancellationDate: "2025-04-02",
    passengers: 2,
    class: "CC"
  },
  {
    id: "PNR8765432189",
    trainName: "Punjab Mail",
    trainNumber: "12137",
    from: "Mumbai CST",
    to: "New Delhi",
    departureDate: "2025-03-18",
    departureTime: "19:40",
    status: "Cancelled",
    refundStatus: "Pending",
    refundAmount: 890,
    cancellationDate: "2025-03-15",
    passengers: 1,
    class: "SL"
  }
];

interface CancelledBookingsProps {
  onViewDetails: (id: string) => void;
}

export function CancelledBookings({ onViewDetails }: CancelledBookingsProps) {
  if (cancelledBookings.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-muted inline-flex rounded-full p-4 mb-4">
          <AlertTriangleIcon className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium">No cancelled bookings</h3>
        <p className="text-muted-foreground mt-2">
          You don't have any cancelled bookings in your history.
        </p>
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
      {cancelledBookings.map(booking => (
        <Card key={booking.id} className="overflow-hidden animate-fade-in">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-7 p-4 gap-4">
              {/* Train and journey info */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-center gap-2">
                  <TrainFront className="text-primary h-5 w-5" />
                  <h3 className="font-medium">{booking.trainName}</h3>
                  <span className="text-sm text-muted-foreground">({booking.trainNumber})</span>
                  <Badge variant="destructive">
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
                    <AlertCircleIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Cancelled on {formatDate(booking.cancellationDate)}</span>
                  </div>
                </div>
              </div>
              
              {/* Refund info */}
              <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col justify-between gap-3">
                <div className="space-y-2">
                  <div className="text-sm font-medium">PNR: {booking.id}</div>
                  <div>
                    <div className="text-sm font-medium">Refund Status</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant={booking.refundStatus === "Processed" ? "default" : "outline"}
                        className={booking.refundStatus === "Processed" ? "bg-green-500" : ""}
                      >
                        {booking.refundStatus}
                      </Badge>
                      <span className="text-sm">₹{booking.refundAmount}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onViewDetails(booking.id)}
                  >
                    View Details
                  </Button>
                  
                  {booking.refundStatus === "Pending" && (
                    <Button 
                      size="sm" 
                      variant="outline"
                    >
                      Track Refund
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
