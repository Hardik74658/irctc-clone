
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { FAQSection } from "@/components/support/FAQSection";
import { ContactInfo } from "@/components/support/ContactInfo";
import { HelpArticles } from "@/components/support/HelpArticles";
import {
  FileQuestionIcon,
  HeadphonesIcon,
  HelpCircleIcon,
  MessageCircle,
  Search,
  Ticket,
  UserIcon
} from "lucide-react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the ticket to a backend
    setTicketSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setTicketSubmitted(false);
    }, 3000);
  };
  
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Support</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We're here to help you with any questions or issues related to your train bookings
        </p>
        
        {/* Search Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">How can we help you?</h2>
                <p className="text-muted-foreground">
                  Search our help center or browse through frequently asked questions
                </p>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Search for help with bookings, cancellations, refunds, etc."
                  className="pl-10 py-6 text-lg"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button variant="outline" className="flex gap-2">
                  <Ticket className="h-5 w-5" />
                  <span>My Bookings</span>
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <FileQuestionIcon className="h-5 w-5" />
                  <span>Cancellation Policy</span>
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>Account Issues</span>
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact Us</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Support Content Tabs */}
        <Tabs defaultValue="faqs" className="mb-8">
          <TabsList className="mb-6 w-full justify-start">
            <TabsTrigger value="faqs">Frequently Asked Questions</TabsTrigger>
            <TabsTrigger value="help">Help Articles</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faqs">
            <FAQSection />
          </TabsContent>
          
          <TabsContent value="help">
            <HelpArticles />
          </TabsContent>
          
          <TabsContent value="contact">
            <ContactInfo />
          </TabsContent>
          
          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle>Create a Support Ticket</CardTitle>
                <CardDescription>
                  Fill in the form below to submit a support request. Our team will respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {ticketSubmitted ? (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-4">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ticket Submitted Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We've received your support ticket and will respond shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input type="text" placeholder="Enter your name" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input type="email" placeholder="Enter your email" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input type="text" placeholder="Brief description of your issue" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                        <option value="">Select a category</option>
                        <option value="booking">Booking Issues</option>
                        <option value="cancellation">Cancellations & Refunds</option>
                        <option value="payment">Payment Problems</option>
                        <option value="account">Account Access</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea 
                        placeholder="Please describe your issue in detail" 
                        className="min-h-32" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">PNR Number (Optional)</label>
                      <Input type="text" placeholder="Enter PNR if related to a booking" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Attachments (Optional)</label>
                      <Input type="file" />
                      <p className="text-xs text-muted-foreground">
                        You can attach screenshots or relevant documents (max 5MB)
                      </p>
                    </div>
                    
                    <Button type="submit" className="w-full">Submit Ticket</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Customer Support Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <HeadphonesIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">24/7</h3>
              <p className="text-sm text-muted-foreground">
                Customer Support Available
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <HelpCircleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">1,200+</h3>
              <p className="text-sm text-muted-foreground">
                FAQs & Help Articles
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">1 Hour</h3>
              <p className="text-sm text-muted-foreground">
                Average Response Time
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-1">98%</h3>
              <p className="text-sm text-muted-foreground">
                Resolution Rate
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Download App Section */}
        <Card className="bg-accent overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">Download Our Mobile App</h2>
                <p className="text-muted-foreground mb-6">
                  Get instant support, manage bookings, and track trains on the go with our mobile app.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.238 18.48c-.173 0-.307-.058-.452-.167l-3.327-2.92a.25.25 0 0 0-.189-.044.252.252 0 0 0-.167.122l-1.299 2.157c-.154.252-.428.372-.693.372a.804.804 0 0 1-.373-.08C6.459 17.13 4.451 15.12 3.67 12.84a.85.85 0 0 1 .001-.7c.139-.331.462-.502.792-.462.07 0 .136.01.2.03l2.436.803a.25.25 0 0 0 .215-.033.25.25 0 0 0 .112-.172l.47-3.878a.25.25 0 0 0-.08-.227L5.744 6.234a.802.802 0 0 1-.204-1.064c.728-1.257 1.683-2.303 2.839-3.095a.8.8 0 0 1 1.106.198l2.033 3.092c.086.13.238.161.354.076l2.993-2.218c.386-.286.905-.225 1.225.141 1.251 1.418 2.093 3.238 2.29 5.285a.8.8 0 0 1-.357.752l-3.47 2.2a.25.25 0 0 0-.107.22l.48 5.346c.017.184-.018.355-.108.501a.828.828 0 0 1-.58.313z" />
                    </svg>
                    App Store
                  </Button>
                  <Button>
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 20.5v-17c0-.827.673-1.5 1.5-1.5h15c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5zm16.5 0v-17c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v17c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5zM12 16.114l-6.698-3.699c-.565-.313-.502-1.118.106-1.337l7.227-2.599a1.733 1.733 0 0 1 1.197.046l4.867 2.098c.527.227.571.939.082 1.233l-5.982 3.843c-.244.17-.555.168-.799.415z" />
                    </svg>
                    Google Play
                  </Button>
                </div>
                
                <div className="flex items-center mt-6 text-muted-foreground">
                  <svg className="h-5 w-5 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="ml-2">Rated 4.8 on app stores</span>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <img 
                  src="https://source.unsplash.com/random/320x480/?mobile,app" 
                  alt="Mobile App" 
                  className="h-96 rounded-xl shadow-lg border-8 border-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Support;
