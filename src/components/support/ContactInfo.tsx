
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  MailIcon, 
  MapPin, 
  MessageCircle, 
  Phone, 
  TwitterIcon, 
  FacebookIcon, 
  InstagramIcon
} from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="flex flex-col items-center text-center p-6">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">
              Speak directly with our customer support team
            </p>
            <p className="font-semibold text-lg mb-1">1800-123-4567</p>
            <p className="text-sm text-muted-foreground mb-4">Toll-free number</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>24/7 Customer Support</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center text-center p-6">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <MailIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">
              Send us your queries or feedback
            </p>
            <p className="font-semibold text-lg mb-1">support@raileasy.com</p>
            <p className="text-sm text-muted-foreground mb-4">For support requests</p>
            <p className="font-semibold text-lg mb-1">feedback@raileasy.com</p>
            <p className="text-sm text-muted-foreground">For suggestions & feedback</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center text-center p-6">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Live Chat</h3>
            <p className="text-muted-foreground mb-4">
              Chat with our support executives in real-time
            </p>
            <Button className="mb-4">Start Chat</Button>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>Available 9 AM to 9 PM, all days</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Corporate Office</h3>
                <p className="text-muted-foreground mb-3">
                  RailEasy Headquarters<br />
                  123 Transport Tower, Railway Colony<br />
                  New Delhi - 110001, India
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Office Hours: Mon-Fri, 9 AM to 6 PM</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 11 2345 6789</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Connect on Social Media</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <TwitterIcon className="h-5 w-5" />
                <span>Twitter</span>
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <FacebookIcon className="h-5 w-5" />
                <span>Facebook</span>
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <InstagramIcon className="h-5 w-5" />
                <span>Instagram</span>
              </Button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>
                Follow us for the latest updates, promotions, and travel inspiration.
                You can also message us directly on any of our social media platforms.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="rounded-lg overflow-hidden border">
        <div className="bg-accent p-4">
          <h3 className="text-lg font-semibold">Regional Offices</h3>
        </div>
        <div className="p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                city: "Mumbai",
                address: "2nd Floor, West Wing, Rail Bhavan, Mumbai Central, Mumbai - 400008",
                phone: "+91 22 2345 6789"
              },
              {
                city: "Kolkata",
                address: "Eastern Railway Building, Fairlie Place, Kolkata - 700001",
                phone: "+91 33 2345 6789"
              },
              {
                city: "Chennai",
                address: "Southern Railway HQ, Park Town, Chennai - 600003",
                phone: "+91 44 2345 6789"
              },
              {
                city: "Bengaluru",
                address: "Rail Nilayam, MG Road, Bengaluru - 560001",
                phone: "+91 80 2345 6789"
              }
            ].map((office, index) => (
              <div key={index} className={`p-4 ${index < 3 ? "border-r md:border-b-0 sm:border-b" : ""} ${index < 2 ? "border-b sm:border-b-0" : ""}`}>
                <h4 className="font-medium mb-2">{office.city}</h4>
                <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                <p className="text-sm flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{office.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
