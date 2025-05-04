
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpenIcon, 
  FileTextIcon,
  InfoIcon,
  ThumbsUpIcon,
  TimerIcon 
} from "lucide-react";

export function HelpArticles() {
  // Sample help articles data
  const articleCategories = [
    {
      category: "Getting Started",
      articles: [
        {
          id: "gs-1",
          title: "Creating Your RailEasy Account",
          description: "Learn how to create and set up your RailEasy account",
          readTime: "3 min read",
          popular: true
        },
        {
          id: "gs-2",
          title: "Understanding User Profiles & Preferences",
          description: "Set up traveler profiles for faster booking",
          readTime: "5 min read",
          popular: false
        },
        {
          id: "gs-3",
          title: "RailEasy Mobile App Guide",
          description: "Getting started with our mobile app for Android and iOS",
          readTime: "4 min read",
          popular: true
        }
      ]
    },
    {
      category: "Booking Process",
      articles: [
        {
          id: "bp-1",
          title: "How to Search for Trains",
          description: "Learn to use filters and find the best trains for your journey",
          readTime: "4 min read",
          popular: true
        },
        {
          id: "bp-2",
          title: "Understanding Fare Types & Quotas",
          description: "Different fare classes, quotas and concessions explained",
          readTime: "6 min read",
          popular: false
        },
        {
          id: "bp-3",
          title: "Tatkal Booking Guide",
          description: "How to book last-minute tickets through Tatkal quota",
          readTime: "5 min read",
          popular: true
        },
        {
          id: "bp-4",
          title: "International Tourist Bookings",
          description: "Special booking process for foreign tourists",
          readTime: "3 min read",
          popular: false
        }
      ]
    },
    {
      category: "Managing Bookings",
      articles: [
        {
          id: "mb-1",
          title: "How to Check PNR Status",
          description: "Track your booking status and confirmation chances",
          readTime: "2 min read",
          popular: true
        },
        {
          id: "mb-2",
          title: "Cancellation & Refund Process",
          description: "Step-by-step guide to cancel tickets and get refunds",
          readTime: "5 min read",
          popular: true
        },
        {
          id: "mb-3",
          title: "Modifying Passenger Details",
          description: "How to change passenger information after booking",
          readTime: "3 min read",
          popular: false
        }
      ]
    },
    {
      category: "Payment & Security",
      articles: [
        {
          id: "ps-1",
          title: "Supported Payment Methods",
          description: "All the ways you can pay for your train tickets",
          readTime: "4 min read",
          popular: false
        },
        {
          id: "ps-2",
          title: "Transaction Failures & Refunds",
          description: "What to do when payments fail or money is deducted",
          readTime: "5 min read",
          popular: true
        },
        {
          id: "ps-3",
          title: "Account Security Best Practices",
          description: "Keep your RailEasy account secure and protected",
          readTime: "6 min read",
          popular: false
        }
      ]
    }
  ];
  
  return (
    <div className="space-y-8">
      {/* Highlight Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-2 overflow-hidden">
          <div className="h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-primary/10 p-6 flex items-center">
              <div>
                <Badge variant="default" className="mb-2">Featured Guide</Badge>
                <h2 className="text-2xl font-bold mb-2">Complete Guide to Train Travel in India</h2>
                <p className="text-muted-foreground mb-4">
                  Everything you need to know about booking, traveling and enjoying Indian Railways
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <TimerIcon className="h-4 w-4 mr-2" />
                  <span>15 min read</span>
                </div>
                <Button>Read Full Guide</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://source.unsplash.com/random/600x400/?train,india" 
                alt="Train travel in India" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <BookOpenIcon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">RailEasy User Manual</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive documentation covering all features of our platform
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <InfoIcon className="h-4 w-4 mr-2" />
                  <span>Updated 2 weeks ago</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Popular Articles */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Popular Articles</h2>
          <Button variant="link" className="text-primary">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articleCategories.flatMap(category => 
            category.articles.filter(article => article.popular)
          ).slice(0, 3).map((article, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <FileTextIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TimerIcon className="h-3 w-3 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="font-medium mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.description}</p>
                <Button variant="link" className="mt-2 p-0 h-auto text-primary">
                  Read Article →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* All Help Articles by Category */}
      {articleCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{category.category}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.articles.map((article, articleIndex) => (
              <Card key={articleIndex} className="card-hover">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <FileTextIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TimerIcon className="h-3 w-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    {article.popular && (
                      <Badge variant="outline" className="flex items-center">
                        <ThumbsUpIcon className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                  <Button variant="link" className="mt-2 p-0 h-auto text-primary">
                    Read Article →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
      
      {/* Video Tutorials Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Video Tutorials</h2>
          <Button variant="link" className="text-primary">View All Videos</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "How to Book a Train Ticket",
              duration: "3:24",
              thumbnail: "https://source.unsplash.com/random/300x200/?train"
            },
            {
              title: "Understanding PNR Status",
              duration: "2:47",
              thumbnail: "https://source.unsplash.com/random/300x200/?railway"
            },
            {
              title: "Mobile App Tutorial",
              duration: "4:05",
              thumbnail: "https://source.unsplash.com/random/300x200/?mobile,app"
            }
          ].map((video, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 text-primary-foreground rounded-full p-3">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{video.title}</h3>
                <Button variant="link" className="mt-1 p-0 h-auto text-primary">
                  Watch Tutorial →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
