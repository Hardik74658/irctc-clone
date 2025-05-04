import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { StationSearch } from "@/components/trains/StationSearch";
import { TrainFilters } from "@/components/trains/TrainFilters";
import { TrainResults } from "@/components/trains/TrainResults";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, parse } from "date-fns";
import { ArrowRight, Calendar as CalendarIcon, Filter, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface SearchParams {
  from: string;
  to: string;
  date: string;
  class: string;
  quota: string;
  passengers: number;
}

const Trains = () => {
  const [date, setDate] = useState<Date>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [travelClass, setTravelClass] = useState("all");
  const [quota, setQuota] = useState("general");
  const [passengers, setPassengers] = useState(1);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("search");

  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    setFormValid(Boolean(fromStation && toStation));
  }, [fromStation, toStation]);
  
  useEffect(() => {
    const searchParams = location.state as SearchParams | undefined;
    
    if (searchParams) {
      if (searchParams.from) setFromStation(searchParams.from);
      if (searchParams.to) setToStation(searchParams.to);
      if (searchParams.class) setTravelClass(searchParams.class);
      if (searchParams.quota) setQuota(searchParams.quota);
      if (searchParams.passengers) setPassengers(searchParams.passengers);
      
      if (searchParams.date) {
        try {
          const parsedDate = parse(searchParams.date, 'yyyy-MM-dd', new Date());
          setDate(parsedDate);
        } catch (error) {
          console.error("Failed to parse date:", error);
        }
      }
      
      if (searchParams.from && searchParams.to) {
        setActiveTab("search");
        setTimeout(() => {
          handleSearch(true);
        }, 300);
      }
    }
  }, [location.state]);

  const handleSearch = (isAutoSearch = false) => {
    if (fromStation && toStation) {
      setIsLoading(true);

      setTimeout(() => {
        setSearchPerformed(true);
        setIsLoading(false);
        
        if (isAutoSearch) {
          toast({
            title: "Search initiated",
            description: `Showing trains from ${fromStation} to ${toStation}`,
          });
        }
      }, 1000);
    } else {
      toast({
        title: "Missing information",
        description: "Please select both origin and destination stations",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Find & Book Train Tickets</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="search">Search Trains</TabsTrigger>
                <TabsTrigger value="pnrstatus">PNR Status</TabsTrigger>
                <TabsTrigger value="trainschedule">Train Schedule</TabsTrigger>
              </TabsList>
              
              <TabsContent value="search" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">From Station</label>
                    <StationSearch 
                      value={fromStation}
                      onChange={setFromStation}
                      placeholder="Enter origin station"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">To Station</label>
                    <StationSearch 
                      value={toStation}
                      onChange={setToStation}
                      placeholder="Enter destination station"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Journey Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "EEE, MMM d, yyyy") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(date) => date && setDate(date)}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Travel Class</label>
                    <select 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={travelClass}
                      onChange={(e) => setTravelClass(e.target.value)}
                    >
                      <option value="all">All Classes</option>
                      <option value="ac-1">AC First Class (1A)</option>
                      <option value="ac-2">AC 2 Tier (2A)</option>
                      <option value="ac-3">AC 3 Tier (3A)</option>
                      <option value="sleeper">Sleeper (SL)</option>
                      <option value="second-sitting">Second Sitting (2S)</option>
                    </select>
                  </div>
                  
                  <div className="col-span-1 self-end">
                    <Button 
                      className="w-full" 
                      size="lg" 
                      onClick={() => handleSearch()}
                      disabled={!formValid || isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Searching...
                        </div>
                      ) : (
                        <>
                          <Search className="mr-2 h-5 w-5" />
                          Search Trains
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="pnrstatus">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enter PNR Number</label>
                    <div className="flex gap-2">
                      <Input placeholder="10 digit PNR number" className="flex-1" />
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Check Status
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="trainschedule">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Train Number/Name</label>
                    <div className="flex gap-2">
                      <Input placeholder="Enter train number or name" className="flex-1" />
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Get Schedule
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {searchPerformed && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <TrainFilters />
            </div>
            
            <div className="lg:col-span-3">
              <Card className="mb-4">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {fromStation} <ArrowRight className="inline h-4 w-4" /> {toStation}
                      </h2>
                      <p className="text-muted-foreground text-sm">{format(date, "EEEE, MMMM d, yyyy")}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-1" /> Sort
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              <TrainResults
                fromStation={fromStation}
                toStation={toStation}
                date={date}
                travelClass={travelClass}
                passengers={passengers}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Trains;
